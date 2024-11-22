---
title: ClickUp Configuration
description: Learn how to integrate ClickUp with Testomat.io for efficient issue management. This guide provides step-by-step instructions to retrieve your ClickUp API token and List ID, configure Testomat.io, and connect the two systems seamlessly.
type: article
url: https://docs.testomat.io/integrations/issues-management/clickup
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_fHP8LT7x_2024-10-30.B_KfZFZ0_Z1PIuCT.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: ClickUp integration, Testomat.io, issue management, API token, List ID, project management, test management tools, automated testing, manual testing, software testing
---

If you already have a workspace set up and configured in **ClickUp**, we can proceed with integrating it with Testomat.io. All you need is a **Personal Access Token** and a **List ID**. We’ll guide you step-by-step on how to retrieve this information and use it to connect with Testomat.io.

![Testomat.io - ClickUp Workspace](./images/New_MMtFLigW_2024-10-30.png)

1. Click on **Workspace name** in the top-left corner
2. Then click on **Settings**

![Testomat.io - ClickUp Settings](./images/New_yufZMdE0_2024-10-30.png)

3. Go to **Apps**
4. Click on **Generate** button to create **API Token**
5. Copy your API Token

![Testomat.io - ClickUp API Token](./images/New_3rJtUJBY_2024-10-30.png)

Keep your API Token secure, as you’ll need it for the integration with Testomat.io.

Next, we need to find the **List ID**. In ClickUp, the List ID is a unique identifier assigned to each list within a folder in a workspace. You can find the List ID **in the URL when viewing a specific list** on the ClickUp website.

![Testomat.io - ClickUp List ID](./images/New_dpfy1Y03_2024-10-30.png)

After collecting all necessary data, we can move on to Testomat.io. 

1. Select ClickUp from the list of available Issue Management Systems.

![Testomat.io - Connect to ClickUp](./images/New_MZKRZOnR_2024-10-30.png)

2. Enter a **Profile Name**
3. Paste ClickUp **API Token**
4. Paste ClickUp **List ID**
5. Click on **Save** button

![Testomat.io - ClickUp Configuration](./images/New_fHP8LT7x_2024-10-30.png)

If everything was done correctly, you will receive a confirmation message indicating that the ClickUp profile was successfully created.

![Testomat.io - ClickUp Profile](./images/New_7pymFV99_2024-10-30.png)