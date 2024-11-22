---
title: YouTrack Configuration
description: Learn how to integrate YouTrack with Testomat.io for streamlined issue management. This guide covers retrieving your YouTrack Workspace Name, Personal Access Token, and Project ID, along with detailed steps to set up and configure the integration within Testomat.io.
type: article
url: https://docs.testomat.io/integrations/issues-management/youtrack
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_UTbONHqM_2024-10-31.DUKqHBp2_YEDnG.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: YouTrack integration, Testomat.io, issue tracking, personal access token, workspace configuration, project management, test management tools, software testing, bug tracking
---

If you already have a workspace and project configured in **YouTrack**, you're ready to integrate it with Testomat.io. To get started, you’ll need your **Workspace Name**, **Personal Access Token**, and **Project ID**. We’ll walk you through each step to locate this information and connect it with Testomat.io.

![Testomat.io - YouTrack Project](./images/New_US8feteR_2024-10-31.png)

You can find your **Workspace Name** in the browser **URL** when you're logged into YouTrack. For example: `[my-workspace].youtrack.cloud`

![Testomat.io - YouTrack Workspace Name](./images/New_kltLXnVA_2024-10-31.png)

To locate the **Project ID**, follow these steps:

1. Go to **Projects** in the header
2. Click on your project

![Testomat.io - YouTrack Project Info](./images/New_Yp7Na4z3_2024-10-31.png)

3. Find your **Project ID** in the browser **URL**; For example: `0-1`

![Testomat.io - YouTrack Project ID](./images/New_0t9JUaTD_2024-10-31.png)

Finally, to create the **Personal Access Token**, follow these steps:

1. Click on the profile avatar
2. Go to **Profile**
3. Then go to **Account Security**
4. Click on **New token...** button

![Testomat.io - YouTrack Create Token](./images/New_pCUPQyzz_2024-10-31.png)

5. Enter a **Token** name
6. Select services (YouTrack, YouTrack Administration)
7. Click on **Create** button

![Testomat.io - YouTrack Personal Access Token](./images/New_WzTEWxkc_2024-10-31.png)

Once the token has been created, copy it. Keep your Personal Access Token secure, as you’ll need it for the integration with Testomat.io.

After collecting all necessary data, we can move on to Testomat.io. 

1. Select YouTrack from the list of available Issue Management Systems.

![Testomat.io - Connect to YouTrack](./images/New_F8MYluVy_2024-10-31.png)

2. Enter a **Profile Name**
3. Paste YouTrack **Workspace name**
4. Paste YouTrack **Personal Access Token**
5. Paste YouTrack **Project ID**
6. Click on **Save** button

![Testomat.io - YouTrack Configuration](./images/New_UTbONHqM_2024-10-31.png)

If everything was done correctly, you will receive a confirmation message indicating that the YouTrack profile was successfully created.

![Testomat.io - YouTrack Profile](./images/New_K1fdAe5k_2024-10-31.png)