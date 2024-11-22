---
title: Shortcut Configuration
description: Learn how to integrate issues management systems like Jira, GitHub, Azure DevOps with Testomat.io. This guide covers configuring connections to these systems, creating issues from test results, and linking tests to tickets. Streamline defect management by reporting failed tests directly from the test management platform, improving traceability and issue resolution.
type: article
url: https://docs.testomat.io/integrations/issues-management/shortcut
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_UTbONHqM_2024-10-31.DUKqHBp2_YEDnG.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, issues management, Jira integration, GitHub issues, Azure DevOps, Linear, defect management, QA tools, test tracking, issue linking, automation, test defects
---

If you already have a workspace configured in **Shortcut**, you're ready to integrate it with Testomat.io. To get started, you’ll need your **Workflow Name**, and **API Access Token**. We’ll walk you through each step to locate this information and connect it with Testomat.io.

![Testomat.io - Shortcut workspace](./images/New_OsYXONII_2024-11-21.png)

To create the **API Access Token**, follow these steps:

1. Click on **Settings** button
2. Go to **API Tokens**
3. Enter **Token Name**
4. Click on **Generate Token** button

![Testomat.io - Shortcut Create Token](./images/New_ipmViSuc_2024-11-21.png)

5. Copy your API Token

![Testomat.io - Shortcut API Access Token](./images/New_xCU4yAtk_2024-11-21.png)

Keep your **API Access Token** secure, as you’ll need it for the integration with Testomat.io.

To locate the **Workflow Name**, follow these steps:

1. Click on **Settings** button
2. Go to **Workflows**
5. Copy your Workflow Name

![Testomat.io - Shortcut Workflow Name](./images/New_L83JSNf7_2024-11-21.png)

After collecting all necessary data, we can move on to Testomat.io. 

1. Select Shortcut from the list of available Issue Management Systems.

![Testomat.io - Connect to Shortcut](./images/New_FMxDuVut_2024-11-21.png)

2. Enter a **Profile Name**
3. Paste Shortcut **API Access Token**
4. Paste Shortcut **Workflow Name**
5. Click on **Save** button

![Testomat.io - Shortcut Configuration](./images/New_g9KgOr4g_2024-11-21.png)

If everything was done correctly, you will receive a confirmation message indicating that the Shortcut profile was successfully created.

![Testomat.io - Shortcut Profile](./images/New_58FqfBg9_2024-11-21.png)