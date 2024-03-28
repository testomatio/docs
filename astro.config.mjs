import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	image: {
		service: passthroughImageService()
	},
	integrations: [
		starlight({
			title: 'Testomatio',

			logo: {
				src: './src/assets/logo.svg',
			},

			favicon: './src/assets/logo.svg',

			components: {
				SocialIcons: './src/components/Links.astro'
			},

			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'usage' },
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Import bdd', link: '/reference/import-bdd'},
						{ label: 'Import js', link: '/reference/import-js'},
						{ label: 'Import-php', link: '/reference/import-php'},
						{ label: 'Reporter', link: '/reference/reporter'},
						{
							label: 'Reporter',
							items: [
								{ label: 'Artifacts', link: '/reference/reporter/artifacts'},
								{ label: 'Debugging', link: '/reference/reporter/debugging'},
								{ label: 'Env variables', link: '/reference/reporter/env-variables'},
								{ label: 'Frameworks', link: '/reference/reporter/frameworks'},
								{ label: 'Functions', link: '/reference/reporter/functions'},
								{ label: 'Junit', link: '/reference/reporter/junit'},
								{ label: 'Logger', link: '/reference/reporter/logger'},
								{ label: 'Pipes', link: '/reference/reporter/pipes'},
								{ label: 'Stacktrace', link: '/reference/reporter/stacktrace'},
								{ label: 'Workflows', link: '/reference/reporter/workflows'},
								{
									label: 'Pipes',
									autogenerate: { directory: '/reference/reporter/pipes' },
								}
							],
						}
					],

				},
				{
					label: 'Integration',
					autogenerate: { directory: 'integration' },
				},
				{
					label: 'Subscriptions',
					autogenerate: { directory: 'subscriptions' },
				},
				{
					label: 'Security',
					autogenerate: { directory: 'security' },
				},
				{
					label: 'Compliance',
					autogenerate: { directory: 'compliance' },
				},
				{
					label: 'Workflows',
					autogenerate: { directory: 'workflows' },
				},
				{
					label: 'Contact us',
					autogenerate: { directory: 'contact-us' },
				},
			],
		}),
	],
});
