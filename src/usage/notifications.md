---
permalink: /usage/notifications
title: Notifications
editLink: false
---

# Notifications

Testomat.io allows sending notifications for finished runs:
- Send brief reports to stakeholders
- Notify team members of failed tests
- Configure on which condition notification should be sent

## Email Notifications

Testomat.io allows sending notifications for finished runs via Email.
Let's see how it works!
First, you need to set up Email notifications in the Settings tab. 
Click on **Report Notifications** and click on **Add Notification Rule**

![notif](https://user-images.githubusercontent.com/77803888/114755380-3cf55900-9d62-11eb-90ed-47f5599af45e.jpg)

At this point your next steps are:

1. Enter a title for Notification Rule
2. Choose **Email** from the list

![notif 1](https://user-images.githubusercontent.com/77803888/114756835-d4a77700-9d63-11eb-994c-c49e6dd2b36d.jpg)

3. Enter Email or multiple Emails you want to response
4. Customize these fields in BASIC RULES or use ADVANCED RULES ENGINE to enter your rule expression
5. Click on Save button

![notif 2](https://user-images.githubusercontent.com/77803888/114757338-66af7f80-9d64-11eb-82cb-c52de1b2a967.jpg)

Now you have Email Notification enabled for the project. 

![notif 4](https://user-images.githubusercontent.com/77803888/114757724-df164080-9d64-11eb-962a-f095ce83c288.jpg)

How does it work?
Each time Testomat.io creates Run Report which corresponds to your Email Notification Rule it will be sent to email.

![notif 6](https://user-images.githubusercontent.com/77803888/114760162-b5aae400-9d67-11eb-8df0-f404ede91377.jpg)

Please note, that you can set up multiple Email Notifications for different Run reports.

![notif 7](https://user-images.githubusercontent.com/77803888/114759624-14bc2900-9d67-11eb-8ed7-958bd403726d.jpg)

## Slack 

Testomatio can send notifications to a specific Slack channel. Prepare a channel inside Slack workspace to which notifications will be sent:

![image](https://user-images.githubusercontent.com/220264/114852582-92297d00-9deb-11eb-8da9-a4d6525f7e9e.png)

To enable Slack notification [create an incoming webhook by opening this link](https://slack.com/intl/en-ua/help/articles/115005265063-Incoming-webhooks-for-Slack). Create a new Slack App:

![image](https://user-images.githubusercontent.com/220264/114852675-a79ea700-9deb-11eb-9670-71da8c3016cc.png)

Activate webhooks for this app:

![image](https://user-images.githubusercontent.com/220264/114852767-c13fee80-9deb-11eb-8e95-6794b562da78.png)

![image](https://user-images.githubusercontent.com/220264/114852831-d1f06480-9deb-11eb-8196-f9e92399ed7a.png)

Add a new webhook for app:

![image](https://user-images.githubusercontent.com/220264/114853120-2398ef00-9dec-11eb-9790-e314ba5513da.png)

Select a channel to which notification will be sent:

![image](https://user-images.githubusercontent.com/220264/114853283-4c20e900-9dec-11eb-9b99-16818252f4f4.png)

Copy Webhook URL:

![image](https://user-images.githubusercontent.com/220264/114853409-6c50a800-9dec-11eb-8955-6ebd75b7c9dc.png)

Create a new notification in Testomatio, select "Slack" and paste webhook URL into Url:

![image](https://user-images.githubusercontent.com/220264/114853537-8db19400-9dec-11eb-8b28-667cd98995b1.png)

## MS Teams
To send noitifcations in MS Teams you need to set up incoming webhooks for your channel. Steps to configure:
* Navigate to "Apps" panel 

![image](https://user-images.githubusercontent.com/23012652/115186669-ca320800-a0ea-11eb-9a32-9984a9569427.png)

* Search for "Incoming Webhook" and add it

![image](https://user-images.githubusercontent.com/23012652/115186740-ed5cb780-a0ea-11eb-9bda-6f5b1bd6201d.png)

* Configure it and copy webhook url

![image](https://user-images.githubusercontent.com/23012652/115186899-2301a080-a0eb-11eb-8a11-0b44b4e7fbe9.png)

* Create a new notification in Testomatio, select "ms_teams" and paste webhook URL into Url:

![image](https://user-images.githubusercontent.com/23012652/115187240-a7542380-a0eb-11eb-88d1-ac8c3bb204a0.png)

## Notification Rules

Testomatio has powerful rule engine which can be used to define on which conditions a notification should be sent. You can have multiple notification types with different notification channels in use for a single project.

There is a basic and advanced rules engine:

![image](https://user-images.githubusercontent.com/220264/114849114-1f6ad280-9de8-11eb-9621-699f534196d6.png)

### Basic Rules

Inside Basic rules you can define simple conditions on which notifications should be sent. For instance, here is the rule for all manual with "Release" word to be reported:

![image](https://user-images.githubusercontent.com/220264/114849446-6ce73f80-9de8-11eb-950c-55d4921a51c4.png)

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

