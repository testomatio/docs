---
title: Telegram Notifications
description: Configure Telegram notifications in Testomat.io to receive test updates. This guide provides detailed steps for creating a Telegram bot, generating a Bot Token, retrieving a Chat ID, and linking it with Testomat.io for seamless test result notifications.
type: article
url: https://docs.testomat.io/integrations/report-notifications/telegram
head:
  - tag: meta
    attrs:
      name: keywords
      content: Telegram integration, Testomat.io, failed test runs, Notification rules, Report Notifications, Add Notification Rule, publish report, public link, basic rules, advanced rules engine, detailed test run results, test management, test automation, software testing
---

Testomat.io provides integration with **Telegram** to deliver real-time notifications about your test results directly into your chat. This integration allows you to keep the entire team updated about failed test runs, published reports, or other key QA events without leaving Telegram.

Before creating a **New Notification Rule** in Testomat.io, make sure you have the following ready:

- **Telegram Bot Token**
- **Telegram Chat ID**

If you don’t already have them, follow the official Telegram instructions to [Create a new bot.](https://core.telegram.org/bots#creating-a-new-bot)

## How to Create a New Notification Rule for Telegram

1. Navigate to **Settings** in the left sidebar
2. Open the **Report notifications** page
3. Click on the **Add Notification Rule** button

![Add Notification Rule](./images/att1_telegram.png)

Once the page opens, fill in the following fields:

4. **Title** — Notification rule name (required)
5. **Notification Type** — select **Telegram** from the dropdown (required)
6. **Telegram bot token** (required)
7. **Telegram bot chat ID** (required)

After you add a **Telegram bot chat ID**, the **Test webhook** button will appear. Use it to send a test notification to your Telegram chat and make sure everything is working correctly.

8. Enable **Publish a report and use public link in report notification** (optional)
9. Configure Rules: choose [Basic Rules](https://docs.testomat.io/integrations/report-notifications/rules/#basic-rules) or [Advanced Rules Engine](https://docs.testomat.io/integrations/report-notifications/rules/#advanced-rules)
10. Click **Save** button to create the new Notification Rule

![Save new notification rule](./images/att2_telegram.png)

After saving your rule:

- Use the **Test webhook** button to send a sample notification and confirm that everything is working correctly
- Run a test in Testomat.io and check that a notification with test results appears in your Telegram chat

![Telegram notification](./images/att3_telegram.png)
