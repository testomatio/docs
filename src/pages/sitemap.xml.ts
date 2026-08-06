import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) =>
	value.replace(/[<>&'\"]/g, (character) => ({
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		"'": '&apos;',
		'"': '&quot;',
	})[character]!);

export const GET: APIRoute = async ({ site }) => {
	if (!site) throw new Error('The Astro `site` option is required to generate sitemap.xml.');

	const docs = await getCollection('docs', ({ data }) => !data.draft);
	const urls = docs
		.map(({ id, data }) => {
			const path = data.slug ?? id.replace(/(^|\/)index$/, '$1');
			const canonicalPath = path ? `${path.replace(/^\//, '').replace(/\/$/, '')}/` : '';
			return new URL(canonicalPath, site).href;
		})
		.sort();

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
		'</urlset>',
	].join('\n');

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
