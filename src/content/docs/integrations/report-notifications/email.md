---
title: Email Notifications
description: Learn how to configure email notifications in Testomat.io to receive updates on test run results. This guide covers setting notification rules, customizing fields, and managing multiple email recipients effectively.
type: article
url: https://docs.testomat.io/integrations/report-notifications/email
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/114757338-66af7f80-9d64-11eb-82cb-c52de1b2a967.D9BVA0Cw_Z1VaHuh.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: email notifications, Testomat.io, test reports, run results, notification rules, advanced rules engine, test management, software testing, project updates
---

Testomat.io allows sending notifications for finished runs via Email.
Let's see how it works!

First, you need to set up Email notifications in the Settings tab:

1. Go to **Settings**.
2. Select **Report Notifications** option.
3. Click on **Add Notification Rule**.

![Testomat.io - Notification Email](./images/Notification.png)

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

**BASIC RULES:**

![Testomat.io - Notification Email](./images/Email_3.png)

**ADVANCED RULES ENGINE:** 

![Testomat.io - Notification Email](./images/Email_4.png)

Now you have Email Notification enabled for the project. 

![Testomat.io - Notification Email](./images/Email_5.png)


**How does it work?**
Each time Testomat.io creates Run Report which corresponds to your Email Notification Rule it will be sent to email.

![Testomat.io - Notification Email](./images/Email_6.png)

:::note

You can set up multiple Email Notifications for different Run reports.

![Testomat.io - Notification Email](./images/Email_7.png)

:::

:::note

When **'Publish a report and use public link in report notification'** option is enabled, the public report will be generated and everyone who has this link will be able to see it.

![Testomat.io - Notification Email](./images/Public_Report.png)

:::


