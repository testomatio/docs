---
title: Slack Notifications
description: Learn how to configure and manage notifications in Testomat.io for various channels, including Email, Slack, MS Teams, and Jira. This guide covers setting up notification rules, both basic and advanced, and demonstrates how to send alerts based on specific test run conditions. Streamline communication with automatic notifications for failed tests, test completion, and other custom triggers.
type: article
url: https://docs.testomat.io/integrations/report-notifications/slack
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/114853537-8db19400-9dec-11eb-8b28-667cd98995b1.RLNXUM6o_ZFNtgh.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, notifications, Email alerts, Slack notifications, MS Teams, Jira integration, notification rules, test runs, automated alerts, CI notifications, QA tools
---

Testomatio can send notifications to a specific Slack channel. Prepare a channel inside Slack workspace to which notifications will be sent:

![image](./images/114852582-92297d00-9deb-11eb-8da9-a4d6525f7e9e.png)

To enable Slack notification [create an incoming webhook by opening this link](https://api.slack.com/messaging/webhooks). Create a new Slack App:

![image](./images/114852675-a79ea700-9deb-11eb-9670-71da8c3016cc.png)

Activate webhooks for this app:

![image](./images/114852767-c13fee80-9deb-11eb-8e95-6794b562da78.png)

![image](./images/114852831-d1f06480-9deb-11eb-8196-f9e92399ed7a.png)

Add a new webhook for app:

![image](./images/114853120-2398ef00-9dec-11eb-9790-e314ba5513da.png)

Select a channel to which notification will be sent:

![image](./images/114853283-4c20e900-9dec-11eb-9b99-16818252f4f4.png)

Copy Webhook URL:

![image](./images/114853409-6c50a800-9dec-11eb-8955-6ebd75b7c9dc.png)

Create a new notification in Testomatio, select "Slack" and paste webhook URL into Url:

![image](./images/114853537-8db19400-9dec-11eb-8b28-667cd98995b1.png)