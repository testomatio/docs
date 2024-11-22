---
title: Jira
description: The Jira integration for Testomat.io allows two-way synchronization of test cases and issues. By connecting a Testomat.io project to a Jira project, users can manage test cases, execute tests, and link them to Jira issues. The setup involves installing the Testomat.io plugin and providing connection details, such as an API token or password, to enable seamless integration.
type: article
url: https://docs.testomat.io/integrations/issues-management/jira
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/191561367-9e4be6fc-2f06-414d-a590-5ae85ee2d26b.DDEoSJfA_1OC1KS.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Jira integration, Testomat.io, test management, issue tracking, API token, two-way sync, test cases, Jira Cloud, Jira Server, plugin installation
---

## Installing Testomatio Plugin in JIRA

Install [Testomatio Plugin from Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224120/testomatio?hosting=cloud&tab=overview)

> We also provide a Testomatio Plugin for Jira Server. Contact Testomatio Team to learn more about it.

## Connecting to JIRA project

<Aside>
Please note connecting to JIRA project requires admin rights to enable two-way integration capabilities like editing test cases or executing tests directly in JIRA. So user that is used to make JIRA configuration on project settings should have JIRA admin rights otherwise Testomat.io project won't possible to connect to JIRA.
</Aside>

To link tests to JIRA issues connect a Testomatio project to JIRA project.

* Open a Testomatio project
* Navigate to "Setting" > "JIRA Integration"
* Click "Add Jira project"

![CleanShot 2022-09-21 at 18 58 45@2x](./images/191553780-32626df6-72cf-459c-a3ef-9feb899c10a7.jpg)

Provide connection details:

* Email (or username for Jira Server setup)
* API token (or password for Jira Server setup)
* Jira URL
* Project ID

If you use JIRA Cloud, obtain an API token for your user account.
If you use JIRA Server, use the password from your user account.

![CleanShot 2022-09-21 at 19 02 04@2x](./images/191554363-292706f8-1ea4-47cb-8b4e-e88e6bbb0227.jpg)

Click "Save"

Once the project is connected you will see your integration listed on the Settings page

> You can connect to multiple JIRA projects from a Testomatio project. Follow the same instructions to connect to another project.

![CleanShot 2022-09-21 at 19 06 05@2x](./images/191555232-7c48a635-dbf5-49ff-8b7b-b87f323aec11.jpg)