---
title: YouTrack Configuration
description: Learn how to integrate YouTrack with Testomat.io for streamlined issue management. This guide explains how to retrieve your YouTrack Workspace Name, Personal Access Token, and Project ID, and then configure the integration within Testomat.io.
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

If you already have a workspace and project in YouTrack, you’re ready to integrate it with Testomat.io. To do so, you’ll need three items:

- Workspace Name
- Personal Access Token
- Project ID

This guide walks you through where to find each.

![Testomat.io - YouTrack Project](./images/New_US8feteR_2024-10-31.png)

## How to Find a Workspace Name

You can find your **Workspace Name** in the browser **URL** when you're logged into YouTrack. For example: `[my-workspace].youtrack.cloud`

![Testomat.io - YouTrack Workspace Name](./images/New_kltLXnVA_2024-10-31.png)

## How to Create a Personal Access Token

To create the **Personal Access Token**, follow these steps:

1. Click on the profile avatar
2. Go to **Profile**
3. Then go to **Account Security**
4. Click on **New token...** button

![Testomat.io - YouTrack Create Token](./images/New_pCUPQyzz_2024-10-31.png)

5. Enter a **Token** name
6. Select services (**YouTrack, YouTrack Administration**)
7. Click on **Create** button

![Testomat.io - YouTrack Personal Access Token](./images/New_WzTEWxkc_2024-10-31.png)

Once the token has been created, copy it. Keep your Personal Access Token secure, as you’ll need it for the integration with Testomat.io.

## How to Get a Project ID

Finally, to get the **Project ID**, follow these steps:

1. Open YouTrack [API Documentation](https://www.postman.com/youtrack-dev/youtrack/documentation/sd7pq8x/youtrack-rest-api)-> Administration -> Projects -> Read a List of Projects
2. Get a request:

```
https://<your-workspace>.youtrack.cloud/api/admin/projects?fields=id,key,name

```

3. Paste your Personal Access Token
4. Click **Send** button and get your Project ID in the response body (e.g. `"id": "0-1"`)

![Get Project ID](./images/att1_youtrack.png)

:::note

The ID in the browser URL isn't the same as the project ID in the database.

:::

After collecting all necessary data, we can move on to Testomat.io.

## How to Connect YouTrack in Testomat.io

1. Select YouTrack from the list of available Issue Management Systems.

![Testomat.io - Connect to YouTrack](./images/New_F8MYluVy_2024-10-31.png)

2. Enter a **Profile Name**
3. Paste YouTrack **Workspace Name**
4. Paste YouTrack **Personal Access Token**
5. Paste YouTrack **Project ID**
6. Click on **Save** button

![Testomat.io - YouTrack Configuration](./images/New_UTbONHqM_2024-10-31.png)

If everything was done correctly, you will receive a confirmation message indicating that the YouTrack profile was successfully created.

![Testomat.io - YouTrack Profile](./images/New_K1fdAe5k_2024-10-31.png)
