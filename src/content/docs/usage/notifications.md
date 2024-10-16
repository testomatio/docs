---
title: Notifications
description: Learn how to configure and manage notifications in Testomat.io for various channels, including Email, Slack, MS Teams, and Jira. This guide covers setting up notification rules, both basic and advanced, and demonstrates how to send alerts based on specific test run conditions. Streamline communication with automatic notifications for failed tests, test completion, and other custom triggers.
type: article
url: https://docs.testomat.io/usage/notifications/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/114756835-d4a77700-9d63-11eb-994c-c49e6dd2b36d.DjOg-ijg_2iRmrc.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, notifications, Email alerts, Slack notifications, MS Teams, Jira integration, notification rules, test runs, automated alerts, CI notifications, QA tools
---

Testomat.io allows sending notifications for finished runs:
- Send brief reports to stakeholders
- Notify team members of failed tests
- Configure on which condition notification should be sent

## Email Notifications

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

## Slack 

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

## MS Teams
To send noitifcations in MS Teams you need to set up incoming webhooks for your channel. Steps to configure:
* Navigate to "Apps" panel 

![image](./images/115186669-ca320800-a0ea-11eb-9a32-9984a9569427.png)

* Search for "Incoming Webhook" and add it

![image](./images/115186740-ed5cb780-a0ea-11eb-9bda-6f5b1bd6201d.png)

* Configure it and copy webhook url

![image](./images/115186899-2301a080-a0eb-11eb-8a11-0b44b4e7fbe9.png)

* Create a new notification in Testomatio, select "ms_teams" and paste webhook URL into Url:

![image](./images/115187240-a7542380-a0eb-11eb-88d1-ac8c3bb204a0.png)

## Jira Notifications

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

## Notification Rules

Testomatio has powerful rule engine which can be used to define on which conditions a notification should be sent. You can have multiple notification types with different notification channels in use for a single project.

There is a basic and advanced rules engine:

![image](./images/114849114-1f6ad280-9de8-11eb-9621-699f534196d6.png)

### Basic Rules

Inside Basic rules you can define simple conditions on which notifications should be sent. For instance, here is the rule for all manual with "Release" word to be reported:

![image](./images/114849446-6ce73f80-9de8-11eb-950c-55d4921a51c4.png)

### Advanced Rules

The advanced rules engine allows writing conditions in a special expression language similar to Ruby or JavaScript.

This is the same rule we defined previously in Basic mode written in the format of Advanced mode. A notification will be sent for all manual runs that contain the word "Release":

```
manual and contains(run, "Release")
```

A complete list of allowed variables:

* `automated` - boolean. True if a run is automated
* `manual` - boolean. True if a run is manual
* `has_failed` - boolean. True if a run has failed
* `has_passed` - boolean. True if a run has passed
* `was_terminated` - boolean. True if a run was terminated
* `run` - string. Title of a run
* `rungroup` - title. Title of rungroup a run belongs to
* `status` - string. Status of run, 'passed' or 'failed' as a string.
* `started_at` - datetime. Time when the run was started.
* `finished_at` - datetime. Time when the run was finished
* `passed_tests` - collection. A list of all passed tests in a run.
* `failed_tests` - collection. A list of all failed tests in a run.
* `skipped_tests` - collection. A list of all skipped tests in a run.


An expression should return a boolean value. To deal with types other than boolean functions and methods can be used:

#### String

String values can be checked with equal `==` or not equal `!=` operators. Also there is `contains` function which checks inclusion of a string in another string:

```
contains(run, "New")
```

#### Collection

Collections contain an array of objects. 

Use `.size` to check for the size of items in the collection. For instance, this rule is activated when a number of failed tests is more than 10.

```
failed_tests.size > 10
```
Collection of tests can be filtered. Tests in the collection have following properties:

* `test['title']` - title of a test
* `test['suite']` - title of a suite of a test
* `test['id']` - id of a test
* `test['suite_id']` - id of a suite
* `test['status']` - status of a test in collection

For instance, this is how to check if a collection of failed tests contains at least one test with `@important` tag in its name:

```
failed_tests.filter(test, contains(test["title"], "@important")).size > 0
```
#### DateTime

`started_at` and `finished_at` variables are of datetime type. They have properties from [Date](https://ruby-doc.org/stdlib-2.6.1/libdoc/date/rdoc/Date.html) and [DateTime](https://ruby-doc.org/stdlib-2.6.1/libdoc/date/rdoc/DateTime.html) classes of Ruby that can be used in expressions. Most used ones are:

* `hour`
* `minute`
* `day`
* `wday`
* `month`
* `year`
* [etc](https://ruby-doc.org/stdlib-2.6.1/libdoc/date/rdoc/Date.html)

For instance, this is how notification can be enabled for reports finished in non-business time:

```
(finished_at.hour > 18 or finished_at.hour < 9)
```

### Examples

#### Notify when tests are failing on CI

To match tests executed on CI specify a Run title with "[CI]" prefix to identify that these tests were executed on CI:

```
TESTOMATIO_TITLE="[CI] Automated Tests"
```

Then write a notification rule that will check only for failing runs with "[CI]" in their title:

```
contains(run, "[CI]") and has_failed
```

#### Notify when automated tests are terminated

```
automated and was_terminated
```


### Run Group Notifications

<Aside> 
Please note that Run Group Notifications are available for Email notification type only
</Aside>

To configure Notification Rule for Run Group you need to:

1. pick rungroup for Notification rule context
2. add your Rule Expression, for example, you can use `rungroup_finished` variable if you want to get notification when all Run report inside the group are finished.

![Alt text](./images/rungroup-notifs.png)

### Rules for Run Group Notifications

The rules engine allows writing conditions in a special expression language similar to Ruby or JavaScript.

A list of allowed variables:

* `title` - string. Title of a rungroup
* `rungroup_finished` -  boolean. True if all runs completed => True if rungroup contains only finished runs.
* `runs` - collection. A list of all runs inside a rungroup
* `finished_runs` - collection. A list of finished (passed or failed) runs inside a rungroup
* `ongoing_runs` - collection. A list of pending runs (scheduled, in progress) runs inside a rungroup
* `failed_runs` - collection. A list of failed runs inside a rungroup


