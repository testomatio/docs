---
title: Slack Notifications
description: Learn to configure Slack notifications in Testomat.io to receive test run updates directly in a Slack channel. The guide explains creating a Slack app, enabling webhooks, generating a Webhook URL, and linking it to Testomat.io for seamless updates.
type: article
url: https://docs.testomat.io/integrations/report-notifications/slack
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, notifications, Slack notifications, notification rules, automated alerts, CI notifications, QA tools, notification channels, Report Notification, Basic rules, Advanced rules engine, Run Group Notifications, test management, test automation, software testing, Slack channel, incoming webhook 
---

Testomat.io can send Notifications to a specific **Slack channel**. Prepare a channel inside Slack workspace to which notifications will be sent:

![Testomat.io - Notification Slack](./images/Slack_1.png)

To enable Slack notification [create an incoming webhook by opening this link](https://api.slack.com/messaging/webhooks) and following the instructions:

1. Click on 'Create your Slack App' button.

![Testomat.io - Notification Slack](./images/Slack_2.png)

2. Select **'From scratch'** option.

![Testomat.io - Notification Slack](./images/Slack_3.png)

3. Add App title.
4. Pick a workspace to develop your app in from the dropdown list.
5. Click on 'Create App' button

![Testomat.io - Notification Slack](./images/Slack_4.png)

6. Activate Incoming Webhooks for this app -> toggle on.
7. Add a new Webhook for app -> Click on **'Add New Webhook'** button

![Testomat.io - Notification Slack](./images/Slack_5.png)

8. Select a channel to which notification will be sent.

![Testomat.io - Notification Slack](./images/Slack_6.png)

9. Copy Webhook URL.

![Testomat.io - Notification Slack](./images/Slack_7.png)

After Slack is Set up, open your Project in Testomat.io and go to the **Settings (1) -> Report Notifications(2)** and click on **Add Notification Rule (3)**.

![Testomat.io - Notification](./images/Notification.png)

Create a new Notification Rule for Slack following next steps:

1. Add a title for Notification Rule.
2. Choose **Slack** from the dropdown list.

![Testomat.io - Notification Slack](./images/Slack_8.png)

3. Paste Slack Webhook URL.
4. Select **'Publish a report and use public link in report notification'** option, if you need it.
5. Configure rules to define on which conditions this notification should be sent in **BASIC RULES** section

OR

use **ADVANCED RULES ENGINE** to enter your rule expression.

6. Click on **Save** button.

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Testomat.io - Basic rule](./images/Slack_9.png) | ![Testomat.io - Advanced Rules Engine](./images/Slack_10.png) |

**How does it work?**
Each time Testomat.io creates Run Report, which corresponds to your Slack Notification Rule, it will be sent to selected Slack channel.

![Testomat.io - Notification Slack](./images/Slack_11.png)

:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification](./images/Public_Report.png)

:::