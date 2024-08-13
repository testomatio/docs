import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

export default defineConfig({
	site: 'https://docs.testomat.io',
	image: {
		service: passthroughImageService()
	},
	prefetch: true,
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
			],
			title: 'Testomatio',
			pagefind: false,

			logo: {
				src: './src/assets/logo.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],

      editLink: {
        baseUrl: 'https://github.com/testomatio/docs/edit/docs/',
      },

			favicon: '/logo.svg',

			head: [
				{
					tag: 'script',
					attrs: {
						type: 'text/javascript'
					},
					content: `window.$crisp=[];window.CRISP_WEBSITE_ID="4192ab4e-8b76-4b7e-a8c4-ea66dea249e7";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
				},
				// {
				// 	tag: 'script',
				// 	attrs: {
				// 		type: 'text/javascript',
				// 		async: true,
				// 		src: 'https://docsai.app/embed.min.js',
				// 		'project-id': 'clfvl6jdx0003mc0u9rpp4b3a',
				// 		'primary-color': "#000"
				// 	}
				// },
				{
					tag: 'script',
					attrs: {
						type: 'text/javascript'
					},
					content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TJLSW3S');`,
				},
			],

			components: {
				Head: './src/components/Head.astro',
				SocialIcons: './src/components/Links.astro',
				Search: './src/components/Search.astro',

			},

			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Start from Scratch', link: '/getting-started/start-from-scratch'},
						{ label: 'Import Tests from Cucumber', link: '/getting-started/import-tests-from-cucumber'},
						{ label: 'Import Tests from Source Code', link: '/getting-started/import-tests-from-source-code'},
						{ label: 'Import Tests from CSV/XLS', link: '/getting-started/import-tests-from-csvxls'},
						{ label: 'Test Design', link: '/getting-started/test-design'},
						{ label: 'Running Tests Manually', link: '/getting-started/running-tests-manually'},
						{ label: 'Running Automated Tests', link: '/getting-started/running-automated-tests'},
						{ label: 'Managing Runs', link: '/getting-started/managing-runs'},
					],
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'usage' },
				},
				{
					label: "Importers",
					items: [
						{ label: 'Import JavaScript Tests', link: '/reference/import-js'},
						{ label: 'Import Cucumber BDD Tests', link: '/reference/import-bdd'},
						{ label: 'Import PHP Tests', link: '/reference/import-php'},
						{ label: 'Automated Import', link: '/workflows/import'},
					]
				},
				{
					label: 'Reporter',
					// collapsed: true,
					items: [
						{ label: 'Reporter Overview', link: '/reference/reporter'},
						{ label: 'NodeJS Test Frameworks', link: '/reference/reporter/frameworks'},
						{ label: 'PHP Test Frameworks', link: '/reference/reporter/php'},
						{ label: 'Python Test Frameworks', link: '/reference/reporter/python'},
						{ label: 'Java and Other Test Frameworks', link: '/reference/reporter/junit'},
						{ label: 'Test Artifacts', link: '/reference/reporter/artifacts'},
						{ label: 'Configuration', link: '/reference/reporter/env-variables'},
						{ label: 'Functions', link: '/reference/reporter/functions'},
						{ label: 'Logger', link: '/reference/reporter/logger'},
						{
							label: 'Pipes',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/reference/reporter/pipes' },
								{ label: 'Advanced Options', link: '/reference/reporter/pipes/testomatio' },
								{ label: 'GitHub', link: '/reference/reporter/pipes/github' },
								{ label: 'GitLab', link: '/reference/reporter/pipes/gitlab' },
								{ label: 'BitBucket', link: '/reference/reporter/pipes/bitbucket' },
								{ label: 'CSV', link: '/reference/reporter/pipes/csv' },
								{ label: 'HTML', link: '/reference/reporter/pipes/html' },
							],
						},						
						{ label: 'Workflows', link: '/reference/reporter/workflows'},
					],
				},
				{
					label: 'Integration',
					autogenerate: { directory: 'integration' },
				},
				{
					label: 'Subscriptions',
					// collapsed: true,
					autogenerate: { directory: 'subscriptions' },
				},
				{
					label: 'Security',
					// collapsed: true,
					autogenerate: { directory: 'security' },
				},
				{
					label: 'Compliance',
					// collapsed: true,
					autogenerate: { directory: 'compliance' },
				},
				{
					label: 'Contact us',
					collapsed: true,
					autogenerate: { directory: 'contact-us' },
				},
			],
		}),
	],
});
