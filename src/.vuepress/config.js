const sections = require('../../sections')
const FIRST_LINK = '/getting-started/start-from-scratch'

const children = []
const sidebar = { '/': [] }

for (const section of sections) {
  sidebar['/'].push({
    title: section.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); }).replace(/^\w/, c => c.toUpperCase()),
    collapsable: true,
    sidebarDepth: 3,
    children: require('../../issues/'+section)
  });
}

// console.log(sidebar['/'])
// process.exit(1);


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Testomatio',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#5c89fc' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { type: 'text/javascript'}, `window.$crisp=[];window.CRISP_WEBSITE_ID="4192ab4e-8b76-4b7e-a8c4-ea66dea249e7";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`],
    ['script', { type: 'text/javascript'}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJLSW3S');`]],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    smoothScroll: true,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/logo.svg',
    lastUpdated: false,
    nav: [
      {
        text: 'Getting Started',
        link: FIRST_LINK,
      },
      {
        text: 'Testomatio App',
        link: 'https://app.testomat.io'
      },
      {
        text: 'Schedule a Demo',
        link: 'https://calendly.com/testomatio/demo'
      }
    ],
    sidebar,
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
  },
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img',
    }],
    ['sitemap', {
      hostname: 'https://docs.testomat.io'
    }],
    ['seo', {
      siteTitle: (_, $site) => "Testomtat.io Documentation",
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => "Testomat.io Team",
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'https://avatars.githubusercontent.com/u/59105116?s=200&v=4',
      type: $page => 'documentation',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => 'https://avatars.githubusercontent.com/u/59105116?s=200&v=4',
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
     }],
  ]

}
