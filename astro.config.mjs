import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

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
					],
				},
        			{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },        
       				},
        			{
					label: 'Project',
					items: [
						{
							label: 'Tests',
							collapsed: false,
							items: [
								{ label: 'Test Design', link: '/project/tests/test-design' },
							],
						},
						{
							label: 'Runs',
							collapsed: false,
							items: [
								{ label: 'Running Tests Manually', link: '/project/runs/running-tests-manually' },
								{ label: 'Running Automated Tests', link: '/project/runs/running-automated-tests' },
								{ label: 'Managing Runs', link: '/project/runs/managing-runs' },
								{
									label: 'Reporter',
									// collapsed: true,
									items: [
										{ label: 'Overview', link: '/project/runs/reporter/overview'},
										{ label: 'NodeJS Test Frameworks', link: '/project/runs/reporter/frameworks'},
										{ label: 'PHP Test Frameworks', link: '/project/runs/reporter/php'},
										{ label: 'Python Test Frameworks', link: '/project/runs/reporter/python'},
										{ label: 'Java and Other Test Frameworks', link: '/project/runs/reporter/junit'},
										{ label: 'Test Artifacts', link: '/project/runs/reporter/artifacts'},
										{ label: 'Configuration', link: '/project/runs/reporter/configuration'},
										{ label: 'Functions', link: '/project/runs/reporter/functions'},
										{ label: 'Logger', link: '/project/runs/reporter/logger'},
										{
											label: 'Pipes',
											collapsed: false,
											items: [
												{ label: 'Overview', link: '/project/runs/reporter/pipes/overview' },
												{ label: 'Advanced Options', link: '/project/runs/reporter/pipes/testomatio' },
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
							label: 'Plans', link: '/project/plans/test-plans',
							attrs: { style: 'font-size: var(--sl-text-base); color: var(--sl-color-white); font-weight: 600;'},
						},
						{
							label: 'Steps',
							collapsed: false,
							items: [
								{ label: 'Steps', link: '/project/steps-snippets/steps' },
								{ label: 'Snippets', link: '/project/steps-snippets/snippets' },
							],
						},
						{
							label: 'Pulse',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/project/pulse/overview' },
							],
						},
						{
							label: 'Import & Export',
							collapsed: false,
							items: [
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
								{ label: 'Overview', link: '/project/analytics/overview' },
							],
						},
					],
				},
				{
					label: "Advanced",
					items: [
						{ label: 'Tags, Labels & Custom fields', link: '/advanced/tags-labels/labels-and-custom-fields' },
						{ label: 'Bulk Edit', link: '/advanced/bulk-edit-folder/bulk-edit' },
						{ label: 'Branches', link: '/advanced/branches-folder/branches' },
						{ label: 'Artifacts', link: '/advanced/artifacts/test-artifacts' },
						{ label: 'TQL', link: '/advanced/tql/query-language' },
						{ label: 'Keyboard Shortcuts', link: '/advanced/shortcuts/keyboard-shortcuts' },
						{ label: 'Living Documentation', link: '/advanced/living-doc/living-documentation' },
						{
							label: 'Jira Plugin',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/advanced/jira-plugin/overview' },
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
						{
							label: 'Issues Management',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/integrations/issues-management/overview' },
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
								{ label: 'Overview', link: '/integrations/continuous-integration/overview' },
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
								{ label: 'Overview', link: '/integrations/single-sign-on/overview' },
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
						{
							label: 'Company',
							collapsed: false,
							items: [
								{ label: 'Overview', link: '/management/company/overview' },
								{ label: 'Administration', link: '/management/company/administration' },
								{ label: 'Trials', link: '/management/company/trials' },
								{ label: 'Subscriptions', link: '/management/company/subscriptions' },
							],
						},
						{
							label: 'Project',
							collapsed: false,
							items: [
								{ label: 'Settings', link: '/management/project/settings' },
								{ label: 'Templates', link: '/management/project/templates' },
							],
						},
					]
				},
				{
					label: 'Legal',
					items: [
						{
							label: 'Compliance',
							collapsed: false,
							items: [
								{ label: 'Compliance Overview', link: '/legal/compliance/overview' },
								{ label: 'GDPR', link: '/legal/compliance/gdpr' },
								{ label: 'Privacy Policy', link: '/legal/compliance/privacy' },
								{ label: 'Terms of Service', link: '/legal/compliance/terms' },
							]
						},
						{
							label: 'Security',
							collapsed: false,
							items: [
								{ label: 'Security Overview', link: '/legal/security/overview' },
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
						{ label: 'Contact Us', link: '/support/contact-us'},
					],
				},				
			],
		}),
	],
	markdown: {
		rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, options]],
	},
	redirects: {
		"/getting-started/test-plans": "/project/plans/test-plans",
		"/getting-started/import-tests-from-cucumber": "/project/import-export/import-tests-from-cucumber",
		"/getting-started/import-tests-from-source-code": "/project/import-export/import-tests-from-source-code",
		"/getting-started/import-tests-from-csvxls": "/project/import-export/import-tests-from-csvxls",
		"/getting-started/test-design": "/project/tests/test-design",
		"/getting-started/running-tests-manually": "/project/runs/running-tests-manually",
		"/getting-started/running-automated-tests": "/project/runs/running-automated-tests",
		"/getting-started/managing-runs": "/project/runs/managing-runs",
		"/usage/steps-database": "/project/steps-snippets/steps",
		"/usage/pulse": "/project/pulse/overview",
		"/usage/analytics": "/project/analytics/overview",
		"/usage/labels-and-custom-fields": "/advanced/tags-labels/labels-and-custom-fields",
		"/usage/bulk-edit": "/advanced/bulk-edit-folder/bulk-edit",
		"/usage/branches": "/advanced/branches-folder/branches",
		"/usage/test-artifacts": "/advanced/artifacts/test-artifacts",
		"/usage/query-language": "/advanced/tql/query-language",
		"/usage/keyboard-shortcuts": "/advanced/shortcuts/keyboard-shortcuts",
		"/usage/living-documentation": "/advanced/living-doc/living-documentation",
		"/contact-us/contact-us": "/support/contact-us",
		"/integration/issues-management-systems": "/integrations/issues-management/overview",
		"/integration/jira": "/integrations/issues-management/jira",
		"/usage/continuous-integration": "/integrations/continuous-integration/overview",
		"/usage/notifications": "/integrations/report-notifications/rules",
		"/integration/sso": "/integrations/single-sign-on/overview",
		"/usage/templates": "/management/project/templates",
		"/usage/jira-plugin": "/advanced/jira-plugin/overview",
		"/subscriptions/companies": "/management/company/overview",
		"/subscriptions/subscriptions": "/management/company/subscriptions",
		"/subscriptions/trials": "/management/company/trials",
		"/reference/reporter/frameworks": "/project/runs/reporter/frameworks",
		"/reference/reporter/configuration": "/project/runs/reporter/configuration",
		"/reference/reporter/functions": "/project/runs/reporter/functions",
		"/reference/reporter/logger": "/project/runs/reporter/logger",
		"/reference/reporter/workflows": "/project/runs/reporter/workflows",
		"/reference/reporter/pipes": "/project/runs/reporter/pipes/overview",
		"/reference/reporter/pipes/testomatio": "/project/runs/reporter/pipes/testomatio",
	},
});
