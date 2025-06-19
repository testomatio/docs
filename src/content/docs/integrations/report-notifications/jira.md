---
title: Jira Notifications
description: Configure Jira notifications in Testomat.io to automate issue creation for failed test runs. This guide explains linking Jira projects, selecting issue types, and setting notification rules to streamline workflows and save time by automating detailed test result reporting.
type: article
url: https://docs.testomat.io/integrations/report-notifications/jira
head:   
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Jira, automatic issue creation, failed test runs, Notification rules, Report Notifications, Add Notification Rule, Jira project, publish report, public link, basic rules, advanced rules engine, detailed test run results, test management, test automation, software testing
---

Testomat.io allows to create Jira issue for failed test runs automatically. This option can be enabled in **Settings**.
To do this, you need to connect Jira project with Testomat.io. Please see dedicated documentation - [Connecting to JIRA project.](https://docs.testomat.io/integration/jira/#connecting-to-jira-project)

After the Jira is connected with Testomat.io, go to the **Settings (1) -> Report Notifications(2)** and click on **Add Notification Rule (3)**.

![Testomat.io - Notification](./images/Notification.png)

To create a new Notification Rule for Jira follow next steps:

1. Add a title for Notification Rule.
2. Choose **Jira** from the dropdown list.

![Testomat.io - Notification Jira](./images/Jira_1.png)

3. Select your dedicated Jira project from **Jira Project** dropdown list.
4. Select needed issue type from **Issue Type** dropdown list.
5. Select **'Publish a report and use public link in report notification'** option, if you need it.
6. Configure rules to define on which conditions this notification should be sent in **BASIC RULES** section

OR

use **ADVANCED RULES ENGINE** to enter your rule expression.

7. Click on **Save** button.

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Testomat.io - Basic rule](./images/Jira_2.png) | ![Testomat.io - Advanced Rules Engine](./images/Jira_3.png) |

Now Testomat.io will create an issue with detailed information on Test Run results within your Jira project for failed Test Runs. So you don't need to put all the data on each Test Run manually. This helps to save time and notify all contributors in a convenient way.

![Testomat.io - Notification Jira](./images/Jira_4.png)

:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification](./images/Public_Report.png)

:::