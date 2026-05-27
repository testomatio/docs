import { visit } from 'unist-util-visit';
import { fromHtml } from 'hast-util-from-html';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_ROOT = path.join(process.cwd(), 'src', 'content', 'docs');
const PUBLIC_ROOT = path.join(process.cwd(), 'public');

function fileSlug(filePath) {
  if (!filePath) return null;
  const rel = path.relative(DOCS_ROOT, filePath);
  if (rel.startsWith('..')) return null;
  return rel.replace(/\.(md|mdx)$/i, '').split(path.sep).join('/');
}

function headingText(node) {
  let out = '';
  visit(node, 'text', (n) => { out += n.value; });
  return out.trim();
}

// CSS inside an inline <svg><style> is NOT scoped — it applies to the whole
// document. The diagrams use generic class names (.title, .body, .mono, …) and
// two of them can appear on one page with conflicting rules, so prefix every
// selector with a class unique to that SVG. (Class, not id: the image-zoom
// lightbox clones the <svg> and strips its id but keeps classes, so id-scoped
// rules would stop applying to the zoomed copy.) The @import (Google Fonts) is
// left as-is and kept at the top, where @import rules must live.
function scopeSvgStyles(svgNode, scopeSelector) {
  visit(svgNode, 'element', (n) => {
    if (n.tagName !== 'style') return;
    for (const child of n.children) {
      if (child.type !== 'text') continue;
      const imports = [];
      // @import url(...) values contain ';' (font-weight lists), so match the
      // url(...) explicitly rather than stopping at the first ';'.
      let css = child.value.replace(/@import\s+url\([^)]*\)\s*[^;]*;/g, (m) => {
        imports.push(m.trim());
        return '';
      });
      css = css.replace(/(^|})\s*([^{}@]+?)\s*\{/g, (_m, brace, sel) => {
        const scoped = sel
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => `${scopeSelector} ${s}`)
          .join(', ');
        return `${brace}\n${scoped} {`;
      });
      child.value = [...imports, css.trim()].join('\n');
    }
  });
}

function svgScopeClass(srcUrl) {
  return (
    'injected-fig-' +
    srcUrl.replace(/^\//, '').replace(/\.svg$/i, '').replace(/[^\w-]+/g, '-')
  );
}

// No cache: each call re-reads the file from disk. SVGs are tiny (~5–8 KB) and
// each one is loaded once per build anyway — and caching would make `pnpm dev`
// serve a stale diagram after the .svg is edited (Vite doesn't track this dep,
// so see the handleHotUpdate plugin in astro.config.mjs that forces a reload).
function loadInlineSvg(srcUrl) {
  const filePath = path.join(PUBLIC_ROOT, srcUrl.replace(/^\//, ''));
  const raw = fs.readFileSync(filePath, 'utf8');
  // Parse as a fragment so we get the <svg> root element back as a hast node.
  const tree = fromHtml(raw, { fragment: true });
  const svgNode = tree.children.find(
    (c) => c.type === 'element' && c.tagName === 'svg'
  );
  if (!svgNode) throw new Error(`No <svg> root in ${filePath}`);
  svgNode.properties = svgNode.properties ?? {};
  const scopeClass = svgScopeClass(srcUrl);
  const existing = svgNode.properties.className;
  svgNode.properties.className = Array.isArray(existing)
    ? [...existing, scopeClass]
    : existing
      ? [String(existing), scopeClass]
      : [scopeClass];
  scopeSvgStyles(svgNode, '.' + scopeClass);
  // The image-zoom lightbox clones this <svg> into the page and hides the
  // original with `visibility:hidden`. A cloned `marker-end="url(#…)"` still
  // resolves (by document order) to the *original* <marker>, so its arrowhead
  // path inherits that `visibility:hidden` and vanishes in the zoomed view.
  // Force `visibility:visible` on markers (and their contents) so the rendered
  // arrowhead ignores the hidden ancestor. No-op in normal (visible) mode.
  visit(svgNode, 'element', (n) => {
    if (n.tagName !== 'marker') return;
    n.properties = n.properties ?? {};
    n.properties.visibility = 'visible';
    visit(n, 'element', (c) => {
      if (c === n) return;
      c.properties = c.properties ?? {};
      if (!c.properties.visibility) c.properties.visibility = 'visible';
    });
  });
  return svgNode;
}

// Mirror of the wrapper that starlight-image-zoom's rehype plugin builds around
// <img> (tag name + control button from starlight-image-zoom/libs/rehype.ts).
// We build it ourselves because that plugin only auto-wraps <img>/<picture>,
// not inline <svg> — but its runtime DOES handle inline <svg> (full-screen
// zoom). So an inlined SVG gets the same lightbox the PNG figures had.
const IMAGE_ZOOM_TAG = 'starlight-image-zoom-zoomable';
function zoomControlButton(alt) {
  return {
    type: 'element',
    tagName: 'button',
    properties: {
      'aria-label': `Zoom image${alt ? `: ${alt}` : ''}`,
      class: 'starlight-image-zoom-control',
    },
    children: [
      {
        type: 'element',
        tagName: 'svg',
        properties: { 'aria-hidden': 'true', fill: 'currentColor', viewBox: '0 0 24 24' },
        children: [
          {
            type: 'element',
            tagName: 'use',
            properties: { href: '#starlight-image-zoom-icon-zoom' },
            children: [],
          },
        ],
      },
    ],
  };
}

function buildFigureChild(cfg) {
  // Inline SVG content so the browser uses the page's loaded fonts. An <img>
  // tag would render the SVG in "secure static mode" — external @font-face
  // declarations don't load there, so titles fall back to serif.
  if (cfg.src.toLowerCase().endsWith('.svg')) {
    const svgNode = loadInlineSvg(cfg.src);
    const cloned = structuredClone(svgNode);
    cloned.properties = cloned.properties ?? {};
    // Drop fixed width/height so it scales to the figure's max-width.
    delete cloned.properties.width;
    delete cloned.properties.height;
    if (cfg.alt) {
      if (!cloned.properties.role) {
        cloned.properties.role = 'img';
        cloned.properties['aria-label'] = cfg.alt;
      }
      // <title> = accessible fallback + the caption image-zoom shows in the
      // lightbox + native hover tooltip.
      cloned.children = [
        { type: 'element', tagName: 'title', properties: {}, children: [{ type: 'text', value: cfg.alt }] },
        ...cloned.children,
      ];
    }
    return {
      type: 'element',
      tagName: IMAGE_ZOOM_TAG,
      properties: {},
      children: [cloned, zoomControlButton(cfg.alt)],
    };
  }
  const imgProps = { src: cfg.src, alt: cfg.alt ?? '', loading: 'lazy' };
  if (cfg.width) imgProps.width = cfg.width;
  if (cfg.height) imgProps.height = cfg.height;
  return { type: 'element', tagName: 'img', properties: imgProps, children: [] };
}

function buildFigure(cfg) {
  const children = [buildFigureChild(cfg)];
  if (cfg.captionHtml) {
    const parsed = fromHtml(cfg.captionHtml, { fragment: true });
    children.push({
      type: 'element',
      tagName: 'figcaption',
      properties: {},
      children: parsed.children,
    });
  } else if (cfg.caption) {
    children.push({
      type: 'element',
      tagName: 'figcaption',
      properties: {},
      children: [{ type: 'text', value: cfg.caption }],
    });
  }
  return {
    type: 'element',
    tagName: 'figure',
    properties: { className: cfg.className ? [cfg.className] : ['injected-figure'] },
    children,
  };
}

export default function rehypeInjectFigure(options = {}) {
  const injections = options.injections ?? [];
  const bySlug = new Map();
  for (const cfg of injections) {
    if (!cfg.slug || !cfg.afterHeading || !cfg.src) {
      console.warn('[rehype-inject-figure] skipping invalid entry:', cfg);
      continue;
    }
    if (!bySlug.has(cfg.slug)) bySlug.set(cfg.slug, []);
    bySlug.get(cfg.slug).push(cfg);
  }

  return (tree, file) => {
    const slug = fileSlug(file?.path);
    if (!slug) return;
    const entries = bySlug.get(slug);
    if (!entries?.length) return;

    const remaining = new Map(entries.map((e) => [e.afterHeading.trim().toLowerCase(), e]));

    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index == null) return;
      if (!/^h[1-6]$/.test(node.tagName)) return;
      const key = headingText(node).toLowerCase();
      const cfg = remaining.get(key);
      if (!cfg) return;
      remaining.delete(key);

      // If `replace` is set, swap the next matching sibling within the section
      // (i.e. before the next heading of any level) with the figure.
      if (cfg.replace) {
        for (let i = index + 1; i < parent.children.length; i++) {
          const sibling = parent.children[i];
          if (sibling.type !== 'element') continue;
          if (/^h[1-6]$/.test(sibling.tagName)) break; // crossed section boundary
          if (sibling.tagName === cfg.replace) {
            parent.children.splice(i, 1, buildFigure(cfg));
            return [visit.SKIP, i + 1];
          }
        }
        console.warn(
          `[rehype-inject-figure] ${slug}.md: no <${cfg.replace}> found after "${cfg.afterHeading}" — falling back to insert-after-heading`
        );
      }

      // `before: true` puts the figure immediately before the matched heading
      // instead of after — useful when the heading marks the start of the
      // section the diagram introduces.
      const insertAt = cfg.before ? index : index + 1;
      parent.children.splice(insertAt, 0, buildFigure(cfg));
      return [visit.SKIP, insertAt + 1];
    });

    for (const [, cfg] of remaining) {
      console.warn(
        `[rehype-inject-figure] ${slug}.md: heading "${cfg.afterHeading}" not found — figure ${cfg.src} not injected`
      );
    }
  };
}
