---
title: Microsoft Teams Notifications
description: Configure Microsoft Teams notifications in Testomat.io to receive test updates. This guide provides detailed steps for setting up incoming webhooks in Teams, generating a Webhook URL, and linking it with Testomat.io for seamless test result notifications.
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
      content: Microsoft Teams integration, Testomat.io, notifications, incoming webhook, Webhook URL, test updates, software testing, report notifications, collaboration tools
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
