---
permalink: /integration/issues-management-systems
title: Issues Management Systems
editLink: false
---

# Issues Management Systems

Quality assurance is closely connected to Issue management, which means the process of identifying and addressing any problems that occur over the course of a project. This involves documenting the issues and resolving them through review and consideration of all relevant information. Testomat.io provides Issues Management Systems integration to meet this need and link your testing data to your Issue Management System.

Namely, you can link tests and suites to your tickets (helps to provide tests coverage) and create defects for failed tests from run reports or ongoing manual runs.

Testomat.io provides integration for Issues Management Systems:

- JIRA ([as separate integration](https://docs.testomat.io/integration/jira/))
- [GitHub Issues](https://docs.testomat.io/integration/issues-management-systems/#github-issues-configuration)
- [Azure DevOps](https://docs.testomat.io/integration/issues-management-systems/#azure-devops-configuration)
- [Linear](https://docs.testomat.io/integration/issues-management-systems/#linear-configuration)

See how to connect your Issues Management System and how to link your tests to issues below.

## How To Enable Issues Management Systems On Project

1. Go to Settings
2. Click on the Issues Management Button
3. Click on Connect to IMS button

![CleanShot 2022-11-19 at 18 50 37@2x](/assets/202862416-275c3538-e525-4c15-a9c0-cb92c0c74b41.jpg)

4. Pick the Issues Management profile 
5. Setup the Issues Management profile
6. Create tickets directly from Testomat.io

## How To Create An Issue From Testomat.io

### How To Work With Linking Tests 

As was mentioned Testomat.io allows linking Tests, Suites, Run Reports, or Failed Tests from a finished run or ongoing manual run.

1. Click on Extra button
2. Click on Link to Issue button

![CleanShot 2022-11-21 at 19 09 54@2x](/assets/203118134-8d908088-739d-42dc-8c7e-156a2b806b0b.jpg)

3. Click on Create new issue button
    Or insert a link for the existing ticket

![CleanShot 2022-11-21 at 19 30 20@2x](/assets/203121958-19be9692-6ce1-40fa-aa1a-786b95414bf7.jpg)

4. Select Issues Management Systems profile
5. Enter title for your ticket
6. Enter description (optional)
7. Click on Create Issue button

![CleanShot 2022-11-21 at 19 36 05@2x](/assets/203123510-c6c83717-01f4-429c-a085-6764c7d032c2.jpg)

8. See the link appear in UI

![CleanShot 2022-11-21 at 19 42 35@2x](/assets/203124296-70061ff0-8c4c-4406-8586-e20f53055bc2.jpg)

### Attach A Custom Link To Testomat.io

You can add a link to your Test, Suite, or Run Report without connecting any Issues Management System. This allows binding important data to enrich your testing flow. 

You can do this in a few steps:

1. Open a Test/ Suite/ Run Report
2. Click on Extra button
3. Click on Link to Issue button
4. Enter the link
5. Click on Link Issue button

![CleanShot 2022-11-21 at 20 04 36@2x](/assets/203128186-f8b996ba-9362-4910-9ce6-2bda9bead01e.jpg)

6. See the link appear in UI

![CleanShot 2022-11-21 at 20 07 11@2x](/assets/203128670-dbd71071-2830-480f-8800-1a4bdedbe4f6.jpg)

### How To Create A Defect For Failed Test

There are several ways how to create a defect for failed test:

1. Open Run Report, hover failed test and click on the Link button

![CleanShot 2022-11-21 at 19 48 35@2x](/assets/203125278-dc6b2d32-b10b-47b1-b059-4c9a9202788c.jpg)

2. Create a defect from ongoing manual run

![CleanShot 2022-11-21 at 19 56 11@2x](/assets/203126843-6e3fed1f-51a5-4b28-a632-a18b14116ba7.jpg)

## GitHub Issues Configuration

![CleanShot 2022-11-19 at 18 56 02@2x](/assets/202862519-e99c8c8d-7166-4c46-8a66-bc3496bb98bb.jpg)

1. Give a name to your profile 
4. Enter your GitHub Username
8. Enter your GitHub API Token ([learn more](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token))
10. Enter your GitHub Organization/Repository
11. Click on Save button

![CleanShot 2022-11-19 at 18 58 12@2x](/assets/202862612-68c32b53-ed91-4e34-98cb-6125c3bccc6c.jpg)

Once your Issues Management System is configured you can link a test or create a defect. As a result, Testomat.io will create a ticket in your GitHub project with dedicated links and data, so you can easily look through the testing data you need. Here is an example:

![CleanShot 2022-11-23 at 16 29 39@2x](/assets/203572256-7081ae0b-a2f2-48f6-ac57-c374f7634db5.jpg)

## Azure DevOps Configuration

![azure](/assets/202862531-e95a6201-2205-48dd-84d8-3ceadf72d8fd.jpg)

1. Give a name to your profile 
2. Enter your Private Access Token from Azure DevOps ([learn more](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows))
3. Enter your Azure DevOps Organization name
5. Enter your Azure DevOps Project name
6. Click on Save button


![CleanShot 2022-11-19 at 19 04 18@2x](/assets/202862865-0d592bdf-9eb8-47bf-9a26-197ac7372c5e.jpg)

Once your Issues Management System is configured you can link a test or create a defect. As a result, Testomat.io will create a ticket in your Azure DevOps project with dedicated links and data, so you can easily look through the testing data you need. Here is an example:

![CleanShot 2022-11-21 at 14 13 43@2x](/assets/203051519-d34d89de-5566-47f3-857b-b5a00491bf1d.jpg)

## Linear Configuration

![CleanShot 2023-02-24 at 10 05 03@2x](/assets/221125478-2a9f340a-927e-4893-9f36-a4469f6fdb09.jpg)

1. Give a name to your profile
2. Enter your Personal Access Token from Linear ([learn more](https://linear.app/testomat-workspace/settings/api))
3. Enter your Team name ([more details on Linear Teams](https://linear.app/docs/teams))
4. Click on Save button

![CleanShot 2023-02-24 at 10 06 01@2x](/assets/221125834-31a351a7-48ee-472c-a8b2-1f2bfaaef39d.jpg)

Once your Issues Management System is configured you can link a test or create a defect. As a result, Testomat.io will create a ticket in your Linear Team with dedicated links and data, so you can easily look through the testing data you need. Here is an example:

![CleanShot 2023-02-24 at 11 08 22@2x](/assets/221138224-d3d3a194-e9c0-487e-9169-06e0db427ea2.jpg)


