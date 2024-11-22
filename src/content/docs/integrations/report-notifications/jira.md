---
title: Jira Notifications
description: Configure Jira notifications in Testomat.io to automate issue creation for failed test runs. This guide explains linking Jira projects, selecting issue types, and setting notification rules to streamline workflows and save time by automating detailed test result reporting.
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
      content: Jira integration, Testomat.io, notifications, test automation, issue management, failed test runs, project management, software testing, test reporting
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