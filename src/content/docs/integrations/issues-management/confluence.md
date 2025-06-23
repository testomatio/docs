---
title: Confluence
description: Learn how to connect your Confluence space with Testomat.io for issue management. This guide walks you through obtaining your Project Access Token on Atlassian and configuring Testomat.io to streamline workflows.
type: article
url: https://docs.testomat.io/integrations/issues-management/confluence
head:
  - tag: meta
    attrs:
      name: keywords
      content: Confluence, Testomat.io, Confluence integration, requirements management, issues management, Confluence space, Atlassian, API token, traceability, project management, test management tools, automated testing, manual testing, software testing
---

Testomat.io allows you to link your Confluence space to a Testomat.io project and use it as a source of requirements.

To connect your **Confluence space** with Testomat.io you need to open **Settings (1) -> Issues Management (2)** and click on **'Connect to IMS' (3)** button.

![Testomat.io - IMS](./images/Connect_IMS.png)

When **'Connect to Issue Management System'** page is opened, follow the instructions below:

1. Select **'Confluence pages'** from the list.
2. Change the **Profile Name** if needed.
3. Enter your **'Confluence server url'**.
4. Enter your **Confluence user email** (can be blank for private server).
5. Enter your **Confluence space key** (can be blank).
6. Enter your **Private Access Token** from Atlassian ([learn more about how to create a PAT](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/#Create-an-API-token)).

![Testomat.io - IMS](./images/Confluence_1.png)

7. Click **'Save'** button.

![Testomat.io - IMS](./images/Confluence_2.png)

Once the connection between Confluence space and Testomat.io project is set up, the system can analyze your Confluence pages to extract requirement descriptions, assess traceability, identify edge cases, and generate relevant test suites and test cases.