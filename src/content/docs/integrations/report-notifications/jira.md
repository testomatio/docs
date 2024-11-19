---
title: Jira Notifications
description: Learn how to configure and manage notifications in Testomat.io for various channels, including Email, Slack, MS Teams, and Jira. This guide covers setting up notification rules, both basic and advanced, and demonstrates how to send alerts based on specific test run conditions. Streamline communication with automatic notifications for failed tests, test completion, and other custom triggers.
type: article
url: https://docs.testomat.io/integrations/report-notifications/jira
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/128397891-3d29412d-6d31-40a2-9b8f-df166c7e6943.BgdFDPtw_2vlG1Q.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, notifications, Email alerts, Slack notifications, MS Teams, Jira integration, notification rules, test runs, automated alerts, CI notifications, QA tools
---

Testomat.io allows to create Jira issue for failed test runs automatically. This option can be enabled in settings.
To do this, you need to connect Jira project with Testomat.io. Please see dedicated  [documentation. ](https://docs.testomat.io/integration/jira/#connecting-to-jira-project)

1. Enter a name to your Notification rule
2. Pick Jira from Notification Type drop-down

![image](./images/128397211-1e2aa7d8-3014-4e38-a6a6-4e1fc17adb1b.png)

3. Pick your dedicated Jira project from Jira Project drop-down
4. Pick needed issue type from Issue Type drop-down
5. Configure rules to define on which conditions this notification should be sent
6.  Click on Save button

![image](./images/128397891-3d29412d-6d31-40a2-9b8f-df166c7e6943.png)

Now Testomat.io will create an issue with detailed information on Test Run results within your Jira project for failed Test Runs. So you don't need to put all the data on each Test Run manually. This helps to save time and notify all contributors in a convenient way.

![image](./images/128398229-af615eaa-cccc-4251-8d3d-79cc69685f2e.png)

![image](./images/128398538-dc5f3fed-babb-4e10-bd7a-fe7ccc9b3bd2.png)