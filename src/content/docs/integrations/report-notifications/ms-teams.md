---
title: Microsoft Teams Notifications
description: Learn how to configure and manage notifications in Testomat.io for various channels, including Email, Slack, MS Teams, and Jira. This guide covers setting up notification rules, both basic and advanced, and demonstrates how to send alerts based on specific test run conditions. Streamline communication with automatic notifications for failed tests, test completion, and other custom triggers.
type: article
url: https://docs.testomat.io/integrations/report-notifications/ms-teams
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/115186669-ca320800-a0ea-11eb-9a32-9984a9569427.DVyIJmc0_Z26Tsf7.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, notifications, Email alerts, Slack notifications, MS Teams, Jira integration, notification rules, test runs, automated alerts, CI notifications, QA tools
---

To send noitifcations in MS Teams you need to set up incoming webhooks for your channel. Steps to configure:
* Navigate to "Apps" panel 

![image](./images/115186669-ca320800-a0ea-11eb-9a32-9984a9569427.png)

* Search for "Incoming Webhook" and add it

![image](./images/115186740-ed5cb780-a0ea-11eb-9bda-6f5b1bd6201d.png)

* Configure it and copy webhook url

![image](./images/115186899-2301a080-a0eb-11eb-8a11-0b44b4e7fbe9.png)

* Create a new notification in Testomatio, select "ms_teams" and paste webhook URL into Url:

![image](./images/115187240-a7542380-a0eb-11eb-88d1-ac8c3bb204a0.png)
