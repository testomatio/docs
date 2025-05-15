---
title: GitLab Configuration
description: Learn how to integrate GitLab with Testomat.io for issue management. This guide walks you through obtaining your Group Name, Project ID, and Project Access Token, and configuring Testomat.io to streamline workflows.
type: article
url: https://docs.testomat.io/integrations/issues-management/gitlab
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_I3kRnywM_2024-11-12.BGcH1QIE_jiAFz.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: GitLab integration, Testomat.io, issue management, project management, access token, Group Name, Project ID, software testing, test management tools
---

If you already have a **Group** and **Project** set up and configured in **GitLab**, we can proceed with integrating it with Testomat.io. All you need is a **Group Name**, **Project ID**  and a **Project Access Token**. We’ll guide you step-by-step on how to retrieve this information and use it to connect with Testomat.io.

Testomat.io now supports both GitLab SaaS and self-hosted GitLab instances. When setting up your
integration, you'll be able to specify which type you're using.

![Testomat.io - GitLab Project](./images/New_4H9kJ6as_2024-11-12.png)

To get the **Group Name**: 

1. Go to the **Groups** section 
2. Select the group in which your project is located

![Testomat.io - GitLab Groups](./images/New_pkDKuZ3y_2024-11-12.png)

3. The **Group Name** you need to integrate with Testomat.io is in the **URL**. Copy and save it

![Testomat.io - GitLab Group Name](./images/New_3xmqmTYT_2024-11-12.png)

Next, let's find the **Project ID**. 

1. On your project page, go to **Settings** 
2. Select the **General** section

![Testomat.io - GitLab Project Settings](./images/New_ZyMVvSEt_2024-11-12.png)

3. You will see your **Project ID** in the corresponding field. Copy and save it.

![Testomat.io - GitLab Project ID](./images/New_bcgOgi4x_2024-11-12.png)

Finally, let's find the last element that we need to integrate with Testomat.io.

To create a **Project Access Token**:

1. Click on the **profile icon** 
2. Go to the **Edit profile** page

![Testomat.io - GitLab Profile](./images/New_JimhTOcg_2024-11-12.png)

3. Then go to the **Access token** section 
4. Click on the **Add new token** button

![Testomat.io - GitLab Access Token](./images/New_pHJqVWpf_2024-11-12.png)

5. Name your token
6. Select the **api** option to give the token the required access level for API operations
7. Click the **Create personal access token** button

![Testomat.io - GitLab Token Params](./images/New_rHtvDwaV_2024-11-12.png)

8. Once the token has been created, copy it. 

![Testomat.io - GitLab Created Token](./images/New_TNpV96aC_2024-11-12.png)

Keep your **Project Access Token** secure, as you’ll need it for the integration with Testomat.io.

After collecting all necessary data, we can move on to Testomat.io. 

1. Select **GitLab** from the list of available Issue Management Systems.

![Testomat.io - Connect to GitLab](./images/New_2sLMqMyg_2024-11-12.png)

2. Enter a **Profile Name**
3.  Select your GitLab type:
**GitLab SaaS** for the cloud version
**Self-hosted GitLab** for your own installation
4. If using Self-hosted GitLab, enter your GitLab URL (e.g., https://gitlab.yourdomain.com )
5. Paste GitLab **Group Name**
6. Paste GitLab **Project Access Token**
7. Paste GitLab **Project ID**
8. Click on **Save** button

![Testomat.io - GitLab Configuration](./images/New_I3kRnywM_2024-11-12.png)

If everything was done correctly, you will receive a confirmation message indicating that the GitLab profile was successfully created.

![Testomat.io - GitLab Profile](./images/New_etM61nfR_2024-11-12.png)
