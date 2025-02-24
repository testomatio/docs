---
title: Project setup and management
description: Discover how to manage project settings in Testomat.io, including configuring the project timezone for teams across different regions. This guide outlines step-by-step instructions to adjust settings for accurate time synchronization and project administration.
type: article
url: https://docs.testomat.io/management/project/settings
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp

  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, project settings, timezone configuration, project management, test management tools, team collaboration, software testing, administration
---

## Project Timezone

If you have a multi-national team and everyone is working in different parts of the world, you need to avoid time mismatches. All your actions in the project will be displayed at UTC+00:00 by default. So you need to specify the project time manually.

To do this, follow these steps:

1. Click on **Settings** in the sidebar
2. Click the **Project** button
3. Active **Administration** mode

![Testomatio.io - Project Settings](./images/New_0XUPKOcb_2024-10-05.png)

4. Select the required time in the **Timezone** field
5. Click the **Update** button to save changes

![Testomatio.io - Project Timezone](./images/New_0oOC4blY_2024-10-07.png)

## Project Testing Framework & Language

A testing framework provides a structured set of rules and best practices to ensure effective and reliable test automation. It helps testers create and manage test cases more efficiently, reducing effort and improving consistency. By using a testing framework, teams can minimize testing time and costs, decrease the risk of errors, and enhance test accuracy.

### How to Change the Testing Framework

You can change the testing framework to meet your needs. To do this, follow these steps:

1. Click on **’Settings’** in the sidebar
2. Click the **’Project’** button
3. Enable **’Administration’** mode
4. Click **’OK’** in the popup **’Are you sure?’**

![Administration_Mode](images/att1_238.png)

5. Select **’Project Framework’** from the dropdown
6. Select a programming language you use in **’Project Language’** dropdown
7. Click **’Update’** button
8. Click **’OK’** to save the changes

![Project_Framework&Language](images/att2_238.png)

In addition, when **’Administration’** mode is activated, you can:

1. Delete the project – Click the **’Delete Project’** button
2. Then confirm by clicking **’OK’** in the popup

![Delete_Project](images/att3_238.png)

3. Archive the project – Click the **’Archive’** button
4. Then confirm by clicking **’OK’** in the popup

![Archive_Project](images/att4_238.png)

If you don’t see **’Administration’** mode, please note that this option is available only to users with **Manager** or **Owner** roles at the company level.
For more details on **’How to Manage Company Roles’**, please explore here <a href="https://docs.testomat.io/management/company/#how-to-manage-company-team-members">Manage Company Roles</a>

## Custom Statuses

While default statuses are available, you can configure the list of them to align your testing workflow better.

1. Open **‘Settings’** in the sidebar
2. Click on the **‘Custom Statuses’** button

![Custom Statuses](images/att1_4812.png)

Now, you’re able to add or edit existing conditions by clicking on the field where you are interested in making changes. Let’s check how it works.

![Custom Statuses](images/gif3_4812.gif)

3. Write a report message per line, for example, **‘Needs Review’**
4. Click the **‘Update’** button to save changes

![Custom Statuses](images/att3_4812.png)

**Note:** The same actions can be applied to each field, such as ‘Custom statuses when test is **failed**’ or ‘Custom statuses when test is **skipped**’.
