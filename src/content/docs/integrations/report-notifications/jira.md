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

## How to set up Jira Notification Rule

Testomat.io lets you integrate with Jira to streamline how your team tracks test results. With notification rules, you can automatically create Jira issues based on specific test run conditions - for example, when an automated test fails, or when any mixed test run completes successfully.

This helps reduce manual work and ensures important test outcomes are shared directly with your team in Jira.

Testomat.io can send notifications for finished runs. You can use this feature to:

- Send brief reports to stakeholders
- Notify team members about failed tests
- Configure exactly when and under which conditions the notification should be sent

Before you begin, make sure your Jira project is connected to Testomat.io. See the integration [guide](https://docs.testomat.io/integration/jira/#connecting-to-jira-project) for connection steps.

To create a Jira notification rule, follow these steps:

1. Click on **Settings** in the sidebar
2. Open the **Report Notifications** tab
3. Click on **'Add Notification Rule'** button

![All Notification Rule](./351_1.png)

Once the sidebar **'New Notification Rule'** is opened, fill in the fields:

4. Enter a title for notification rule
5. Select **'Jira'** type from Notification Type dropdown

![Jira type](./351_2.png)

6. Select a specific Jira project from the dropdown
7. Select **Issue Type** from dropdown
8. Check **'Publish a report and use public link in report notification'** if necessary

![Select options](./351_3.png)

9. Then, configure rules to define the conditions that will trigger this notification.

There are 2 available options:

| **Basic Rules**             | **Advanced Rules Engine**             |
| --------------------------- | ------------------------------------- |
| ![Basic Rules](./351_4.png) | ![Advanced Rules Engine](./351_5.png) |

10. Click the **Save** button to apply the new notification rule

![Save new notification Rulet](./352_6.png)

Once saved, Testomat.io will automatically create Jira issues with detailed information about test run results according to your configured rules. This automation saves you time by eliminating manual data entry and helps keep all contributors informed in an efficient way.

![Jira Issue](./353_7.png)
