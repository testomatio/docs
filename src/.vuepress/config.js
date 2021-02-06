const sections = require('../../sections')
const FIRST_LINK = '/getting-started/start-from-scratch'

const children = []
const sidebar = { '/': [] }

for (const section of sections) {
  sidebar['/'].push({
    title: section.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); }).replace(/^\w/, c => c.toUpperCase()),
    collapsable: true,
    sidebarDepth: 2,
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
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
      }
    ],
    sidebar
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom'
  ]
}
