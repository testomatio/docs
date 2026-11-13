---
title: GitHub Issues Configuration
description: Configure GitHub Issues integration in Testomat.io to create and manage issues directly from your test management system. This setup involves providing a GitHub username, API token, and repository details. Once configured, Testomat.io can link tests to issues or create defects, automatically generating tickets in GitHub with relevant testing data.
type: article
url: https://docs.testomat.io/integrations/issues-management/github
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/202862612-68c32b53-ed91-4e34-98cb-6125c3bccc6c.OHkajOv3_Z1TjJdJ.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: GitHub Issues, GitHub Enterprise, Testomat.io, issue tracking, test management, API token, workflow integration, defect creation, test reporting
---

![Connect GitHub Issues in five steps: name the profile, enter your username, add the API token, enter the repository, and click Save. Testomat.io and GitHub are then connected](./images/github/0-connect-github-steps.png)

1. Give a name to your profile 
2. Enter your GitHub Username
3. Enter your GitHub API Token with access to workflow scope and write permissions ([learn more](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))
4. Enter your GitHub Organization/Repository
5. Click on Save button

![Connecting the GitHub profile to Testomat.io with the form's fields filled out](./images/github/1-connect-github.png)

Once your Issues Management System is configured you can link a test or create a defect. As a result, Testomat.io will create a ticket in your GitHub project with dedicated links and data, so you can easily look through the testing data you need. Here is an example:

## Connect GitHub Enterprise

If your repository is on GitHub Enterprise Cloud (`*.ghe.com`) or GitHub Enterprise Server, select **GitHub Enterprise** instead of **GitHub**, and fill in **GitHub Enterprise API URL**:

- GitHub Enterprise Cloud with data residency: `https://api.<your-tenant>.ghe.com`;
- GitHub Enterprise Server: `https://github.<your-company>.com/api/v3`.

The other fields are the same as for GitHub: **GitHub Username**, **API Token** (created in your GitHub Enterprise), and **Organization/Repository**.
