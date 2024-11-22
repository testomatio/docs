---
title: Slack Notifications
description: Learn to configure Slack notifications in Testomat.io to receive test run updates directly in a Slack channel. The guide explains creating a Slack app, enabling webhooks, generating a Webhook URL, and linking it to Testomat.io for seamless updates.
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
      content: Slack integration, Testomat.io, notifications, webhook URL, test updates, software testing, report notifications, test management tools, team collaboration
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