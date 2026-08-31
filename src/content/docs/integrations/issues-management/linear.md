---
title: Linear Configuration
description: Integrate Linear with Testomat.io to streamline issue tracking directly from your test management system. This setup involves configuring a profile with your Linear Personal Access Token and team name. Once integrated, you can link tests or create defects, automatically generating tickets in Linear with testing data for easy tracking.
type: article
url: https://docs.testomat.io/integrations/issues-management/linear
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/221125834-31a351a7-48ee-472c-a8b2-1f2bfaaef39d.Cfh-wOie_Z1LVMN4.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Linear integration, Testomat.io, issue tracking, Personal Access Token, defect creation, test management, team configuration, testing workflows
---

If you already have a workspace configured in Linear, you're ready to integrate it with Testomat.io. To get started, you'll need your Team name and Personal Access Token. We'll walk you through each step to locate this information and connect it with Testomat.io.

To connect your Linear space with Testomat.io you need to open Settings (1) -> Issues management (2) and click on 'Connect to IMS' (3) button.

![Connect to Linear in Settings](./images/att2Linear.png)

When ‘Connect to Issue Management System’ sidebar is opened, follow the instructions below:

1. Give a name to your profile
2. Enter your Personal Access Token from Linear ([learn more](https://linear.app/settings/account/security))
3. Enter your Team name ([more details on Linear Teams](https://linear.app/docs/teams))
4. Click on Save button

![Linear](./images/att1Linear.png)

:::note

Use the full Team name as shown in Linear (e.g. "Test Team"), not the short identifier/key (e.g. "TES") used in issue IDs.

:::

Once your Issues Management System is configured you can link a test or create a defect. As a result, Testomat.io will create a ticket in your Linear Team with dedicated links and data, so you can easily look through the testing data you need. Here is an example:

![CleanShot 2023-02-24 at 11 08 22@2x](./images/221138224-d3d3a194-e9c0-487e-9169-06e0db427ea2.jpg)