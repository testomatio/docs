import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import starlightLinksValidator from 'starlight-links-validator';
import redirects from "./redirects.js";

const options = {
    collectionBase: false,
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
			title: 'Docs',
			pagefind: false,

			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
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
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
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
							{ label: 'Manual Testing Classic', link: '/tutorials/manual-testing-classic'},
							{ label: 'Playwright', link: '/tutorials/playwright'},
							{ label: 'Java Integration', link: '/tutorials/java'},
							{ label: 'WebdriverIO', link: '/tutorials/webdriver'},
						],
       				},
        			{
					label: 'Project',
					items: [
						{ label: 'Overview', link: '/project' },
						{
							label: 'Tests',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/tests' },
								{ label: 'Classical vs BDD', link: '/project/tests/classical-vs-bdd' },
								{ label: 'Classical Test Case Editor', link: '/project/tests/classical-test-case-editor' },
								{ label: 'BDD Test Case Editor', link: '/project/tests/bdd-test-case-editor' },
								{ label: 'Copy and Move your Tests', link: '/project/tests/copy-and-move-your-tests' },
								{ label: 'Test Case Creation and Editing', link: '/project/tests/test-case-creation-and-editing' },
								{ label: 'Other Features for Test case Design', link: '/project/tests/other-features-for-test-case-design' },
							],
						},
						{
							label: 'Runs',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/runs' },
								{ label: 'Running Tests Manually', link: '/project/runs/running-tests-manually' },
								{ label: 'Running Automated Tests', link: '/project/runs/running-automated-tests' },
								{ label: 'Running Manual and Automated Tests', link: '/project/runs/running-manual-and-automated-tests' },
								{ label: 'Environments', link: '/project/runs/environments' },
								{ label: 'Managing Runs', link: '/project/runs/managing-runs' },
								{ label: 'RunGroups', link: '/project/runs/rungroups' },
								{ label: 'Merge Strategies', link: '/project/runs/merge-strategies' },
								{ label: 'Archive Runs & RunGroups', link: '/project/runs/archive-runs-and-groups' },
								{ label: 'Run Reports', link: '/project/runs/reports' },
								{ label: 'Custom Statuses', link: '/project/runs/custom-statuses' },
								{ label: 'Temporary Tests - Notes', link: '/project/runs/temporary-tests-notes' },
							],
						},
						{
							label: 'Plans',
							collapsed: true,
							items: [
								{ label: 'Plans', link: '/project/plans', },
							],
						},
						{
							label: 'Steps',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/steps-snippets' },
								{ label: 'Steps', link: '/project/steps-snippets/steps' },
								{ label: 'Snippets', link: '/project/steps-snippets/snippets' },
							],
						},
						{
							label: 'Pulse',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/pulse' },
							],
						},
						{
							label: 'Import & Export',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/import-export' },
								{
									label: 'Import',
									collapsed: true,
									items: [
										{ label: 'Overview', link: '/project/import-export/import' },
										{ label: 'Import from Source Code', link: '/project/import-export/import/import-tests-from-source-code' },
										{ label: 'Import from Cucumber', link: '/project/import-export/import/import-tests-from-cucumber' },
										{ label: 'Import from CSV/XLSX', link: '/project/import-export/import/import-tests-from-csv-xlsx' },
										{ label: 'Import Tests From TestRail', link: '/project/import-export/import/import-tests-from-testrail' },

                    
										{ label: 'Import Tests From QTest', link: '/project/import-export/import/import-tests-from-qtest' },
										{ label: 'Import Tests From Zephyr', link: '/project/import-export/import/import-tests-from-zephyr' },
										{ label: 'Import Tests From Qase', link: '/project/import-export/import/import-tests-from-qase' },

										{ label: 'Import Tests From Testmo', link: '/project/import-export/import/import-tests-from-testmo' },
										{ label: 'Import Tests From QMetry', link: '/project/import-export/import/import-tests-from-qmetry' },
										{ label: 'Import Tests From Allure TestOps', link: '/project/import-export/import/import-tests-from-allure-testops' },
										{ label: 'Import Tests From TestCaseLabs', link: '/project/import-export/import/import-tests-from-testcaselabs' },
										{ label: 'Import Tests From XRay', link: '/project/import-export/import/import-tests-from-xray' },
                    
										{ label: 'Import JavaScript Tests', link: '/project/import-export/import/import-js'},
										{ label: 'Import Cucumber BDD Tests', link: '/project/import-export/import/import-bdd'},
										{ label: 'Import PHP Tests', link: '/project/import-export/import/import-php'},
										{ label: 'Automated Import', link: '/project/import-export/import/auto-import'},
										{ label: 'Java Check Tests', link: '/project/import-export/import/java-check-tests'},
									],
								},
								{
									label: 'Export tests',
									collapsed: true,
									items: [
										{ label: 'Export to Spreadsheet', link: '/project/import-export/export-tests/export-to-spreadsheet' },
										{ label: 'Download as Markdown Files', link: '/project/import-export/export-tests/download-manual-tests-as-files' },
										{ label: 'Export to Obsidian', link: '/project/import-export/export-tests/export-to-obsidian' },
                    { label: 'Classical Tests Markdown Format', link: '/project/import-export/export-tests/classical-tests-markdown-format' },
									],
								},
							],
						},
						{
							label: 'Analytics',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/project/analytics' },
							],
						},
					],
				},
				{
					label: 'Test Reporting',
					items: [
						{ label: 'Overview', link: '/test-reporting'},
						{ label: 'Testomat.io Reporter', link: '/test-reporting/reporter'},
						{ label: 'NodeJS Test Frameworks', link: '/test-reporting/frameworks'},
						{ label: 'Java Frameworks', link: '/test-reporting/java-reporter'},						
						{ label: 'PHP Test Frameworks', link: '/test-reporting/php'},
						{ label: 'Python Test Frameworks', link: '/test-reporting/python'},
						{ label: 'Other Test Frameworks', link: '/test-reporting/junit'},
						{ label: 'Test Artifacts', link: '/test-reporting/artifacts'},						
						{ label: 'Configuration', link: '/test-reporting/configuration'},
						{ label: 'Advanced Options', link: '/test-reporting/pipes/testomatio' },
						{ label: 'CLI', link: '/test-reporting/cli'},
						{ label: 'Functions', link: '/test-reporting/functions'},
                        { label: 'Reporting API', link: '/test-reporting/api'},						
						{ label: 'Logger', link: '/test-reporting/logger'},
						{
							label: 'Pipes',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/test-reporting/pipes' },
								{ label: 'GitHub', link: '/test-reporting/pipes/github' },
								{ label: 'GitLab', link: '/test-reporting/pipes/gitlab' },
								{ label: 'BitBucket', link: '/test-reporting/pipes/bitbucket' },
								{ label: 'CSV', link: '/test-reporting/pipes/csv' },
								{ label: 'HTML', link: '/test-reporting/pipes/html' },
									],
						},
						{ label: 'Workflows', link: '/test-reporting/workflows'},
							],
				},
				{
					label: "Advanced",
					items: [
						{ label: 'Overview', link: '/advanced' },
						{
							label: 'Artifacts',
							collapsed: true,
							items: [
								{ label: 'Artifacts', link: '/advanced/test-artifacts' }
							],
						},
						{
							label: 'Tags & Labels',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/advanced/tags-labels' },
								{ label: 'Tags or Labels', link: '/advanced/tags-labels/tags-or-labels' },
								{ label: 'Tags', link: '/advanced/tags-labels/tags' },
								{ label: 'Labels and Custom Fields', link: '/advanced/tags-labels/labels-and-custom-fields' },
							],
						},
						{
							label: 'Bulk Edit',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/advanced/bulk-edit-folder' },
								{ label: 'Bulk Edit Demo', link: '/advanced/bulk-edit-folder/bulk-edit-demos' },
								{ label: 'Bulk Edit on Suite and Test Levels', link: '/advanced/bulk-edit-folder/bulk-edit-on-suite-and-test-level' },
								{ label: 'Using Bulk Edit and YAML Format in Testomat.io', link: '/advanced/bulk-edit-folder/what-is-bulk-edit' }
							],
						},
						{
							label: 'Branches',
							collapsed: true,
							items: [
								{ label: 'Branches', link: '/advanced/branches-folder' }
							],
						},
						{
							label: 'TQL',
							collapsed: true,
							items: [
								{ label: 'TQL', link: '/advanced/tql' }
							],
						},
						{
							label: 'Keyboard Shortcuts',
							collapsed: true,
							items: [
								{ label: 'Keyboard Shortcuts', link: '/advanced/shortcuts' }
							],
						},
						{
							label: 'Living Documentation',
							collapsed: true,
							items: [
								{ label: 'Living Documentation', link: '/advanced/living-doc' }
							],
						},

						{
							label: 'Jira Plugin',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/advanced/jira-plugin' },
								{ label: 'Tests in Jira', link: '/advanced/jira-plugin/work-in-jira' },
								{ label: 'Creating Jira Issue', link: '/advanced/jira-plugin/jira-issue' },
								{ label: 'Runs & Reports', link: '/advanced/jira-plugin/runs-and-reports' },
								{ label: 'Branches in Jira', link: '/advanced/jira-plugin/branches' },
							],
						},

						{
							label: 'AI-Powered Features',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/advanced/ai-powered-features' },
								{ label: 'AI-Powered Features', link: '/advanced/ai-powered-features/ai-powered-features' },
								{ label: 'AI-Requirements', link: '/advanced/ai-powered-features/ai-requirements' },
								{ label: 'AI-Agents', link: '/advanced/ai-powered-features/ai-agents' },
							],
						},
						{
							label: 'API Access',
							collapsed: true,
							items: [
								{ label: 'API Access', link: '/advanced/api-access' }
							],
						},
						{
							label: 'Milestones',
							collapsed: true,
							items: [
								{ label: 'Milestones', link: '/advanced/milestones' }
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
							collapsed: true,
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
								{ label: 'Confluence', link: '/integrations/issues-management/confluence'},
							],
						},
						{
							label: 'Continuous Integration',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/integrations/continuous-integration' },
								{ label: 'Atlassian Bamboo', link: '/integrations/continuous-integration/bamboo' },
								{ label: 'BitBucket Pipelines', link: '/integrations/continuous-integration/bitbucket' },
								{ label: 'Teamcity', link: '/integrations/continuous-integration/teamcity' },
								{ label: 'GitHub Actions', link: '/integrations/continuous-integration/github' },
								{ label: 'GitLab CI', link: '/integrations/continuous-integration/gitlab' },
								{ label: 'Jenkins', link: '/integrations/continuous-integration/jenkins' },
								{ label: 'Circle CI', link: '/integrations/continuous-integration/circle' },
								{ label: 'Azure Pipelines', link: '/integrations/continuous-integration/azure' },
							],
						},
						{
							label: 'Report Notifications',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/integrations/report-notifications' },
								{ label: 'Notification Rules', link: '/integrations/report-notifications/rules' },
								{ label: 'Email', link: '/integrations/report-notifications/email' },
								{ label: 'Slack', link: '/integrations/report-notifications/slack' },
								{ label: 'Microsoft Teams', link: '/integrations/report-notifications/ms-teams' },
								{ label: 'Telegram', link: '/integrations/report-notifications/telegram' },
								{ label: 'Jira', link: '/integrations/report-notifications/jira' },
								{label: 'Azure DevOps', link: '/integrations/report-notifications/azure-devops'},
							],
						},
						{
							label: 'Single Sign On',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/integrations/single-sign-on' },
								{ label: 'Okta', link: '/integrations/single-sign-on/okta' },
								{ label: 'Google Workspace', link: '/integrations/single-sign-on/google' },
								{ label: 'Microsoft Entra ID (formerly Azure AD)', link: '/integrations/single-sign-on/azure' },
								{ label: 'Custom SAML', link: '/integrations/single-sign-on/saml' },
							],
						},
						{
							label: 'SCIM provisioning',
							collapsed: true,
							items: [
								{ label: 'Overview', link: '/integrations/scim-provisioning' },
								{ label: 'Configure SCIM with Okta', link: '/integrations/scim-provisioning/okta' },
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
							collapsed: true,
							items: [
							{ label: 'Overview', link: '/management/company' },
							{
        					label: 'Users and Permissions',
        					collapsed: true,
        					items: [
          						{ label: 'Overview', link: '/management/company/users-and-permissions' },
          						{ label: 'Teams', link: '/management/company/users-and-permissions/teams' },
          						{ label: 'Read-Only User Role', link: '/management/company/users-and-permissions/read-only-user' },
          						{ label: 'Accountant User Role', link: '/management/company/users-and-permissions/accountant' },
								],
							},
							{ label: 'Administration', link: '/management/company/administration' },
							{ label: 'Audit Log', link: '/management/company/audit-log' },
							{ label: 'Trials', link: '/management/company/trials' },
							{ label: 'Subscriptions', link: '/management/company/subscriptions' },
							{ label: 'Plan Features Comparison', link: '/management/company/plan-features-comparison' },
						],
					},
						{
							label: 'Project',
							collapsed: true,
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
							collapsed: true,
							items: [
								{ label: 'Compliance Overview', link: '/legal/compliance' },
								{ label: 'GDPR', link: '/legal/compliance/gdpr' },
								{ label: 'Privacy Policy', link: '/legal/compliance/privacy' },
								{ label: 'Terms of Service', link: '/legal/compliance/terms' },
							]
						},
						{
							label: 'Security',
							collapsed: true,
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
		],
	},
	redirects: redirects,
});
