---
title: Microsoft Teams Notifications
description: Configure Microsoft Teams notifications in Testomat.io to receive test updates. This guide provides detailed steps for setting up incoming webhooks in Teams, generating a Webhook URL, and linking it with Testomat.io for seamless test result notifications.
type: article
url: https://docs.testomat.io/integrations/report-notifications/ms-teams
head:
  - tag: meta
    attrs:
      name: keywords
      content: Microsoft Teams integration, Testomat.io, failed test runs, Notification rules, Report Notifications, Add Notification Rule, publish report, public link, basic rules, advanced rules engine, detailed test run results, test management, test automation, software testing
---

To send noitifcations in MS Teams, first you need to set up **Incoming Webhooks** for your channel.

Steps to configure:

1. Navigate to **Apps** panel.
2. Search for **Incoming Webhook** and add it ([read more here](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet)).

![Testomat.io - Notification Teams](./images/Teams_1.png)

3. Configure it and copy Webhook URL.

![Testomat.io - Notification Teams](./images/Teams_2.png)

After Teams is Set up, open your Project in Testomat.io and go to the **Settings (1) -> Report Notifications(2)** and click on **Add Notification Rule (3)**.

![Testomat.io - Notification](./images/Notification.png)

Create a new Notification Rule for Teams in Testomat.io following next steps:

1. Add a title for Notification Rule.
2. Choose **Microsoft Teams** from the dropdown list.

![Testomat.io - Notification Teams](./images/Teams_3.png)

3. Paste Teams Webhook URL.
4. Select **'Publish a report and use public link in report notification'** option, if you need it.
5. Configure rules to define on which conditions this notification should be sent in **BASIC RULES** section

OR

using **ADVANCED RULES ENGINE** to enter your rule expression.

6. Click on **Save** button.

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Testomat.io - Basic rule](./images/Teams_4.png) | ![Testomat.io - Advanced Rules Engine](./images/Teams_5.png) |

**How does it work?**
Each time Testomat.io creates Run Report, which corresponds to your Teams Notification Rule, it will be sent to selected Teams channel.

:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification](./images/Public_Report.png)

:::