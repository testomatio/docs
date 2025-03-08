import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import starlightLinksValidator from 'starlight-links-validator';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const options = {
	contentPath: 'src/content/docs',
};

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
				starlightLinksValidator({
					errorOnRelativeLinks: false,
					errorOnInvalidHashes: false,
				}),
			],
			title: 'Testomatio',
			pagefind: false,

			logo: {
				src: './src/assets/logo.svg',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/headings.css',
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
				PageTitle: './src/components/PageTitle.astro',

			},

			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Start from Scratch', link: '/getting-started'},
					],
				},
        			{
					label: 'Tutorials',
						items: [
							{ label: 'Overview', link: '/tutorials'},
							{ label: 'Playwright', link: '/tutorials/playwright'},
							{ label: 'WebdriverIO', link: '/tutorials/webdriver'},
						],
       				},
        			{
					label: 'Project',
					items: [
						{ label: 'Overview', link: '/project' },
						{
							label: 'Tests',
							collapsed: false,
							items: [
								{ label: 'Test Design', link: '/project/tests' },
							],
						},
						{
							label: 'Runs',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/runs' },
								{ label: 'Running Tests Manually', link: '/project/runs/running-tests-manually' },
								{ label: 'Running Automated Tests', link: '/project/runs/running-automated-tests' },
								{ label: 'Managing Runs', link: '/project/runs/managing-runs' },
								{
									label: 'Reporter',
									// collapsed: true,
									items: [
										{ label: 'Overview', link: '/project/runs/reporter'},
										{ label: 'NodeJS Test Frameworks', link: '/project/runs/reporter/frameworks'},
										{ label: 'PHP Test Frameworks', link: '/project/runs/reporter/php'},
										{ label: 'Python Test Frameworks', link: '/project/runs/reporter/python'},
										{ label: 'Java and Other Test Frameworks', link: '/project/runs/reporter/junit'},
										{ label: 'Test Artifacts', link: '/project/runs/reporter/artifacts'},
										{ label: 'Configuration', link: '/project/runs/reporter/configuration'},
										{ label: 'Advanced Options', link: '/project/runs/reporter/pipes/testomatio' },
										{ label: 'CLI', link: '/project/runs/reporter/cli'},
										{ label: 'Functions', link: '/project/runs/reporter/functions'},
										{ label: 'Logger', link: '/project/runs/reporter/logger'},
										{
											label: 'Pipes',
											collapsed: true,
											items: [
												{ label: 'Overview', link: '/project/runs/reporter/pipes' },
												{ label: 'GitHub', link: '/project/runs/reporter/pipes/github' },
												{ label: 'GitLab', link: '/project/runs/reporter/pipes/gitlab' },
												{ label: 'BitBucket', link: '/project/runs/reporter/pipes/bitbucket' },
												{ label: 'CSV', link: '/project/runs/reporter/pipes/csv' },
												{ label: 'HTML', link: '/project/runs/reporter/pipes/html' },
											],
										},
										{ label: 'Workflows', link: '/project/runs/reporter/workflows'},
									],
								},
							],
						},
						{
							label: 'Plans',
							collapsed: false,
							items: [
								{ label: 'Plans', link: '/project/plans', },
							],
						},
						{
							label: 'Steps',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/steps-snippets' },
								{ label: 'Steps', link: '/project/steps-snippets/steps' },
								{ label: 'Snippets', link: '/project/steps-snippets/snippets' },
							],
						},
						{
							label: 'Pulse',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/pulse' },
							],
						},
						{
							label: 'Import & Export',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/import-export' },
								{ label: 'Import from Source Code', link: '/project/import-export/import-tests-from-source-code' },
								{ label: 'Import from Cucumber', link: '/project/import-export/import-tests-from-cucumber' },
								{ label: 'Import from CSV/XLS', link: '/project/import-export/import-tests-from-csvxls' },
								{ label: 'Import JavaScript Tests', link: '/project/import-export/import-js'},
								{ label: 'Import Cucumber BDD Tests', link: '/project/import-export/import-bdd'},
								{ label: 'Import PHP Tests', link: '/project/import-export/import-php'},
								{ label: 'Automated Import', link: '/project/import-export/auto-import'},
							],
						},
						{
							label: 'Analytics',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/analytics' },
							],
						},
					],
				},
				{
					label: "Advanced",
					items: [
						{ label: 'Overview', link: '/advanced' },
						{
							label: 'Tags, Labels & Custom fields',
							collapsed: false,
							items: [
								{ label: 'Tags, Labels & Custom fields', link: '/advanced/tags-labels' }
							],
						},
						{
							label: 'Bulk Edit',
							collapsed: false,
							items: [
								{ label: 'Bulk Edit', link: '/advanced/bulk-edit-folder' }
							],
						},
						{
							label: 'Branches',
							collapsed: false,
							items: [
								{ label: 'Branches', link: '/advanced/branches-folder' }
							],
						},
						{
							label: 'Artifacts',
							collapsed: false,
							items: [
								{ label: 'Artifacts', link: '/advanced/artifacts' }
							],
						},
						{
							label: 'TQL',
							collapsed: false,
							items: [
								{ label: 'TQL', link: '/advanced/tql' }
							],
						},
						{
							label: 'Keyboard Shortcuts',
							collapsed: false,
							items: [
								{ label: 'Keyboard Shortcuts', link: '/advanced/shortcuts' }
							],
						},
						{
							label: 'Living Documentation',
							collapsed: false,
							items: [
								{ label: 'Living Documentation', link: '/advanced/living-doc' }
							],
						},

						{
							label: 'Jira Plugin',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/advanced/jira-plugin' },
								{ label: 'Tests in Jira', link: '/advanced/jira-plugin/work-in-jira' },
								{ label: 'Branches in Jira', link: '/advanced/jira-plugin/branches' },
								{ label: 'Creating Jira Issue', link: '/advanced/jira-plugin/jira-issue' },
							],
						},
					]
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Overview', link: '/integrations' },
						{
							label: 'Issues Management',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/integrations/issues-management' },
								{ label: 'Jira', link: '/integrations/issues-management/jira' },
								{ label: 'GitHub Issues', link: '/integrations/issues-management/github' },
								{ label: 'Azure DevOps', link: '/integrations/issues-management/azure' },
								{ label: 'Linear', link: '/integrations/issues-management/linear' },
								{ label: 'ClickUp', link: '/integrations/issues-management/clickup' },
								{ label: 'YouTrack', link: '/integrations/issues-management/youtrack' },
								{ label: 'GitLab', link: '/integrations/issues-management/gitlab' },
								{ label: 'Shortcut', link: '/integrations/issues-management/shortcut' },
							],
						},
						{
							label: 'Continuous Integration',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/integrations/continuous-integration' },
								{ label: 'Jenkins', link: '/integrations/continuous-integration/jenkins' },
								{ label: 'Atlassian Bamboo', link: '/integrations/continuous-integration/bamboo' },
								{ label: 'GitHub Actions', link: '/integrations/continuous-integration/github' },
								{ label: 'GitLab CI', link: '/integrations/continuous-integration/gitlab' },
								{ label: 'Azure Pipelines', link: '/integrations/continuous-integration/azure' },
								{ label: 'Circle CI', link: '/integrations/continuous-integration/circle' },
								{ label: 'BitBucket Pipelines', link: '/integrations/continuous-integration/bitbucket' },
								{ label: 'Teamcity', link: '/integrations/continuous-integration/teamcity' },
							],
						},
						{
							label: 'Report Notifications',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/integrations/report-notifications' },
								{ label: 'Notification Rules', link: '/integrations/report-notifications/rules' },
								{ label: 'Email', link: '/integrations/report-notifications/email' },
								{ label: 'Slack', link: '/integrations/report-notifications/slack' },
								{ label: 'Microsoft Teams', link: '/integrations/report-notifications/ms-teams' },
								{ label: 'Jira', link: '/integrations/report-notifications/jira' },
							],
						},
						{
							label: 'Single Sign On',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/integrations/single-sign-on' },
								{ label: 'Okta', link: '/integrations/single-sign-on/okta' },
								{ label: 'Google Workspace', link: '/integrations/single-sign-on/google' },
								{ label: 'Azure AD', link: '/integrations/single-sign-on/azure' },
								{ label: 'Custom SAML', link: '/integrations/single-sign-on/saml' },
							],
						},
					]
				},
				{
					label: 'Management',
					items: [
						{ label: 'Overview', link: '/management' },
						{
							label: 'Company',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/management/company' },
								{ label: 'Administration', link: '/management/company/administration' },
								{ label: 'Audit Log', link: '/management/company/audit-log' },
								{ label: 'Trials', link: '/management/company/trials' },
								{ label: 'Subscriptions', link: '/management/company/subscriptions' },
							],
						},
						{
							label: 'Project',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/management/project' },
								{ label: 'Settings', link: '/management/project/settings' },
								{ label: 'Templates', link: '/management/project/templates' },
							],
						},
					]
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Overview', link: '/legal' },
						{
							label: 'Compliance',
							collapsed: false,
							items: [
								{ label: 'Compliance Overview', link: '/legal/compliance' },
								{ label: 'GDPR', link: '/legal/compliance/gdpr' },
								{ label: 'Privacy Policy', link: '/legal/compliance/privacy' },
								{ label: 'Terms of Service', link: '/legal/compliance/terms' },
							]
						},
						{
							label: 'Security',
							collapsed: false,
							items: [
								{ label: 'Security Overview', link: '/legal/security' },
								{ label: 'JIRA Plugin Security', link: '/legal/security/jira' },
								{ label: 'Subprocessors', link: '/legal/security/subprocessors' },
							]
						},
					]
				},
				{
					label: 'Support',
					collapsed: false,
					items: [
						{ label: 'Contact Us', link: '/support'},
					],
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			[rehypeAstroRelativeMarkdownLinks, options],
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
				},
			],

		],
	},
	redirects: {
		"/getting-started/test-plans": "/project/plans",
		"/getting-started/import-tests-from-cucumber": "/project/import-export/import-tests-from-cucumber",
		"/getting-started/import-tests-from-source-code": "/project/import-export/import-tests-from-source-code",
		"/getting-started/import-tests-from-csvxls": "/project/import-export/import-tests-from-csvxls",
		"/getting-started/test-design": "/project/tests",
		"/getting-started/running-tests-manually": "/project/runs/running-tests-manually",
		"/getting-started/running-automated-tests": "/project/runs/running-automated-tests",
		"/getting-started/managing-runs": "/project/runs/managing-runs",
		"/usage/steps-database": "/project/steps-snippets/steps",
		"/usage/pulse": "/project/pulse",
		"/usage/analytics": "/project/analytics",
		"/usage/labels-and-custom-fields": "/advanced/tags-labels",
		"/usage/bulk-edit": "/advanced/bulk-edit-folder",
		"/usage/branches": "/advanced/branches-folder",
		"/usage/test-artifacts": "/project/runs/reporter/artifacts",
		"/advanced/artifacts/test-artifacts": "/project/runs/reporter/artifacts",
		"/usage/query-language": "/advanced/tql",
		"/usage/keyboard-shortcuts": "/advanced/shortcuts",
		"/usage/living-documentation": "/advanced/living-doc",
		"/contact-us/contact-us": "/support/contact-us",
		"/integration/issues-management-systems": "/integrations/issues-management",
		"/integration/jira": "/integrations/issues-management/jira",
		"/usage/continuous-integration": "/integrations/continuous-integration/overview",
		"/usage/notifications": "/integrations/report-notifications/rules",
		"/integration/sso": "/integrations/single-sign-on",
		"/usage/templates": "/management/project/templates",
		"/usage/jira-plugin": "/advanced/jira-plugin",
		"/subscriptions/companies": "/management/company",
		"/subscriptions/subscriptions": "/management/company/subscriptions",
		"/subscriptions/trials": "/management/company/trials",
		"/reference/import/": "/project/import-export/import-tests-from-source-code",
		"/reference/reporter/": "/project/runs/reporter",
		"/reference/reporter/frameworks": "/project/runs/reporter/frameworks",
		"/reference/reporter/configuration": "/project/runs/reporter/configuration",
		"/reference/reporter/functions": "/project/runs/reporter/functions",
		"/reference/reporter/logger": "/project/runs/reporter/logger",
		"/reference/reporter/workflows": "/project/runs/reporter/workflows",
		"/reference/reporter/pipes": "/project/runs/reporter/pipes/index",
		"/reference/reporter/pipes/testomatio": "/project/runs/reporter/pipes/testomatio",
		"/compliance/overview/": "/legal/compliance",
		"/security/overview/": "/legal/security",
		"/security/subprocessors": "/legal/security/subprocessors",
		"/usage/continious-integration": "/integrations/continuous-integration",
		// "/usage/bdd-syntax": "",	bdd-syntax locate in not-in-use folder
		"/reference/reporter/pipes/testomatio.html": "/project/runs/reporter/pipes/testomatio",
		"/usage/templates.html": "/management/project/templates",
		"/reference/reporter/frameworks.html": "/project/runs/reporter/frameworks",
		"/legal/compliance/overview": "/legal/compliance",
		"/legal/security/overview": "/legal/security",
		"/reference": "/project/runs",
		"/advanced/artifacts/test-artifacts": "/advanced/artifacts",
		"/support/contact-us": "/support",
		"/integrations/continuous-integration/overview": "/integrations/continuous-integration",
		"/reference/import-js": "/project/import-export/import-js",
	},
});
