---
title: Email Notifications
description: Learn how to configure email notifications in Testomat.io to receive updates on test run results. This guide covers setting notification rules, customizing fields, and managing multiple email recipients effectively.
type: article
url: https://docs.testomat.io/integrations/report-notifications/email
head:   
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Email notifications, Report Notifications, Add Notification Rule, Run context, RunGroup context, basic rules, advanced rules engine, Run Report, multiple notifications, test management, test automation, software testing
---

Testomat.io allows sending Notifications for finished runs via Email.
Let's see how it works!

First, you need to set up Email notifications in the Settings tab:

1. Go to **Settings**.
2. Select **Report Notifications** option.
3. Click on **Add Notification Rule**.

![Testomat.io - Notification](./images/Notification.png)

At this point your next steps are:

4. Add a title for Notification Rule.
5. Choose **Email** from the dropdown list.

![Testomat.io - Notification Email](./images/Email_2.png)

6. Enter one or multiple email addresses (separated by coma) to receive notifications.
7. Select **'Publish a report and use public link in report notification'** option, if you need it.
8. Select **Notification rule context**: Run or RunGroup.
9. Add notification rules in **BASIC RULES** section

OR

use **ADVANCED RULES ENGINE** to enter your rule expression.

10. Click on **Save** button.

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Testomat.io - Basic rule](./images/Email_3.png) | ![Testomat.io - Advanced Rules Engine](./images/Email_4.png) |

Now you have Email Notification enabled for the project. 

![Testomat.io - Notification Email](./images/Email_5.png)

**How does it work?**
Each time Testomat.io creates Run Report, which corresponds to your Email Notification Rule, it will be sent to email.

![Testomat.io - Notification Email](./images/Email_6.png)

:::note

You can set up multiple Email Notifications for different Rules.

![Testomat.io - Notification Email](./images/Email_7.png)

:::

:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification](./images/Public_Report.png)

:::


