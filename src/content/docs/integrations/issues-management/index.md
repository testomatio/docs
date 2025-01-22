---
title: Issues Management Systems
description: Learn how to integrate issues management systems like Jira, GitHub, Azure DevOps with Testomat.io. This guide covers configuring connections to these systems, creating issues from test results, and linking tests to tickets. Streamline defect management by reporting failed tests directly from the test management platform, improving traceability and issue resolution.
type: article
url: https://docs.testomat.io/integrations/issues-management
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/221125834-31a351a7-48ee-472c-a8b2-1f2bfaaef39d.Cfh-wOie_Z1LVMN4.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, issues management, Jira integration, GitHub issues, Azure DevOps, Linear, defect management, QA tools, test tracking, issue linking, automation, test defects
---

Quality assurance is closely connected to Issue management, which means the process of identifying and addressing any problems that occur over the course of a project. This involves documenting the issues and resolving them through review and consideration of all relevant information. Testomat.io provides Issues Management Systems integration to meet this need and link your testing data to your Issue Management System.

Namely, you can link tests and suites to your tickets (helps to provide tests coverage) and create defects for failed tests from run reports or ongoing manual runs.

Testomat.io provides integration for Issues Management Systems:

- [Jira](https://docs.testomat.io/integrations/issues-management/jira)
- [GitHub Issues](https://docs.testomat.io/integrations/issues-management/github)
- [Azure DevOps](https://docs.testomat.io/integrations/issues-management/azure)
- [Linear](https://docs.testomat.io/integrations/issues-management/linear)
- [ClickUp](https://docs.testomat.io/integrations/issues-management/clickup)
- [YouTrack](https://docs.testomat.io/integrations/issues-management/youtrack)
- [GitLab](https://docs.testomat.io/integrations/issues-management/gitlab)
- [Shortcut](https://docs.testomat.io/integrations/issues-management/shortcut)

See how to connect your Issues Management System and how to link your tests to issues below.

## Connect To IMS

1. Go to Settings
2. Click on the Issues Management Button
3. Click on Connect to IMS button

![CleanShot 2022-11-19 at 18 50 37@2x](./images/New_v7qxkt3w_2024-11-12.png)

4. Pick the Issues Management profile 
5. Setup the Issues Management profile
6. Create tickets directly from Testomat.io

## Work With Linking Tests

As was mentioned Testomat.io allows linking Tests, Suites, Run Reports, or Failed Tests from a finished run or ongoing manual run.

1. Click on Extra button
2. Click on Link to Issue button

![CleanShot 2022-11-21 at 19 09 54@2x](./images/203118134-8d908088-739d-42dc-8c7e-156a2b806b0b.jpg)

3. Click on Create new issue button
    Or insert a link for the existing ticket

![CleanShot 2022-11-21 at 19 30 20@2x](./images/203121958-19be9692-6ce1-40fa-aa1a-786b95414bf7.jpg)

4. Select Issues Management Systems profile
5. Enter title for your ticket
6. Enter description (optional)
7. Click on Create Issue button

![CleanShot 2022-11-21 at 19 36 05@2x](./images/203123510-c6c83717-01f4-429c-a085-6764c7d032c2.jpg)

8. See the link appear in UI

![CleanShot 2022-11-21 at 19 42 35@2x](./images/203124296-70061ff0-8c4c-4406-8586-e20f53055bc2.jpg)

## Link Tests Without Connecting To IMS

You can add a link to your Test, Suite, or Run Report without connecting any Issues Management System. This allows binding important data to enrich your testing flow. 

You can do this in a few steps:

1. Open a Test/ Suite/ Run Report
2. Click on Extra button
3. Click on Link to Issue button
4. Enter the link
5. Click on Link Issue button

![CleanShot 2022-11-21 at 20 04 36@2x](./images/203128186-f8b996ba-9362-4910-9ce6-2bda9bead01e.jpg)

6. See the link appear in UI

![CleanShot 2022-11-21 at 20 07 11@2x](./images/203128670-dbd71071-2830-480f-8800-1a4bdedbe4f6.jpg)

## Create A Defect For Failed Test

There are several ways how to create a defect for failed test:

1. Open Run Report, hover failed test and click on the Link button

![CleanShot 2022-11-21 at 19 48 35@2x](./images/203125278-dc6b2d32-b10b-47b1-b059-4c9a9202788c.jpg)

2. Create a defect from ongoing manual run

![CleanShot 2022-11-21 at 19 56 11@2x](./images/203126843-6e3fed1f-51a5-4b28-a632-a18b14116ba7.jpg)