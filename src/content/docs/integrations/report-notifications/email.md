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
First, you need to set up Email notifications in the Settings tab. 
Click on **Report Notifications** and click on **Add Notification Rule**

![notif](./images/114755380-3cf55900-9d62-11eb-90ed-47f5599af45e.jpg)

At this point your next steps are:

1. Enter a title for Notification Rule
2. Choose **Email** from the list

![notif 1](./images/114756835-d4a77700-9d63-11eb-994c-c49e6dd2b36d.jpg)

3. Enter Email or multiple Emails you want to response
4. Customize these fields in BASIC RULES or use ADVANCED RULES ENGINE to enter your rule expression
5. Click on Save button

![notif 2](./images/114757338-66af7f80-9d64-11eb-82cb-c52de1b2a967.jpg)

Now you have Email Notification enabled for the project. 

![notif 4](./images/114757724-df164080-9d64-11eb-962a-f095ce83c288.jpg)

How does it work?
Each time Testomat.io creates Run Report which corresponds to your Email Notification Rule it will be sent to email.

![notif 6](./images/114760162-b5aae400-9d67-11eb-8df0-f404ede91377.jpg)

Please note, that you can set up multiple Email Notifications for different Run reports.

![notif 7](./images/114759624-14bc2900-9d67-11eb-8ed7-958bd403726d.jpg)