---
title: Azure DevOps Notifications
description: Configure Azure DevOps notifications in Testomat.io to automate issue creation for failed test runs. This guide explains linking Azure DevOps projects, and setting notification rules to streamline workflows and save time by automating detailed test result reporting.
type: article
url: https://docs.testomat.io/integrations/report-notifications/azure-devops
head:   
  - tag: meta
    attrs:
      name: keywords
      content: Azure DevOps, Testomat.io, issue tracking, Notification rules,  Report Notifications, Azure DevOps integration, publish report, detailed test run results, test management, test automation, software testing, basic rules, advanced rules engine
---

Testomat.io allows to create issue for failed test runs automatically in Azure DevOps. This option can be enabled in **Settings**.

Before you set up Notification rules for Azure DevOps, you need to connect your Azure DevOps project with Testomat.io. Please follow the instuction in dedicated section - [Azure DevOps Configuration.](https://docs.testomat.io/integrations/issues-management/azure/)

After the Azure DevOps is connected with Testomat.io, go to the **Settings (1) -> Report Notifications(2)** and click on **Add Notification Rule (3)**.

![Testomat.io - Notification](./images/Notification.png)

To enable Notification for Azure DevOps follow next steps:

1. Add a title for Notification Rule.
2. Choose **Azure DevOps** from the dropdown list.

![Testomat.io - Notification Azure DevOps](./images/Azure_DevOps_1.png)

3. Select **Azure DevOps integration** from dropdown list.
4. Select **'Publish a report and use public link in report notification'** option, if you need it.
5. Configure rules to define on which conditions this notification should be sent in **BASIC RULES** section 

OR 

use **ADVANCED RULES ENGINE** to enter your rule expression.

6. Click on **Save** button.

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Testomat.io - Basic rule](./images/Azure_DevOps_2.png) | ![Testomat.io - Advanced Rules Engine](./images/Azure_DevOps_3.png) |

Testomat.io will now automatically create an issue with detailed Test Run results in your Azure DevOps project for any failed Test Runs. This eliminates the need to manually input data for each Test Run, saving you time and ensuring that all contributors are notified in a convenient way.

![Testomat.io - Notification Azure DevOps](./images/Azure_DevOps_4.png)


:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification](./images/Public_Report.png)

:::
