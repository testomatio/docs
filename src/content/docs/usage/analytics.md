---
title: Monitoring Testing Performance with Analytics
description: Explore Testomat.io's Analytics feature to monitor testing performance. This guide explains how to track automated and manual tests, customize analytics views with charts, and analyze test metrics through timelines. It covers important dashboards like automation coverage, failure board, slowest and flaky tests, and more. Optimize your test strategy with insights into test statuses, failures, and trends.
type: article
url: https://docs.testomat.io/usage/analytics/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/Analytics.WCbjldw3_1LVNGK.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io analytics, test management, automation coverage, custom charts, flaky tests, slow tests, test failures, testing trends, manual tests, automated testing
---

As a test management system, Testomat.io Team intends to provide our users with as much valuable testing data as possible. For this purpose, we developed Analytics Feature. 

![Testomat.io - Analytics](./images/Analytics.png)

## How Does It Work?

Testomat.io tracks your automated and manual tests, aggregates their statuses history, analyzes them, defines tests by Analytics categories, and shows them to you. You can configure these metrics. So you can give a more precise glance to prevent bugs. This also means that Analytics widgets are updated and supplemented with each completed Test Run.

Let's have more close look at it!

## Analytics range 

Analytics data loads for the last 4 weeks by default. But you have the option to change the date range to suit your specific needs.

1. You have the option to specify the range manually by entering a value in the field using a template: `2024-06-30 to 2024-07-27`. 
2. Or select the desired date range from the drop-down calendar. The calendar is very flexible and will provide you with accurate analytics for the specified range.
3. You can also choose convenient templates to quickly view your analytics.

![Testomat.io - Analytics range](./images/New_Fjgf73qB_2024-07-27.png)

## Automation Coverage 

As a management system for automated tests, Testomat.io team created an Automation Coverage Board where you can track the progress of automation coverage on the project. You can sort your tests by Suite and Automation indicators.

![Testomat.io - Automation-Coverage](./images/147570053-cb2bf5d9-e98c-4778-9df2-74ed88b96c49.gif)

## Custom Charts

Custom charts are a powerful addition to analytics. They allow you to customise the display of data that is important to you.

![Testomat.io - Custom Charts](./images/New_3EOUAwBN_2024-08-04.png)

### How To Customise The Chart View?

In the **Edit** mode, select the **Labels** field to customise the information on the chart to your preference:

| Label                      | View                                                |
|----------------------------|-----------------------------------------------------|
| Query                      | `state == 'manual' and status == 'failed': 9 tests` |
| Titles                     | `state == 'manual' and status ...: 9 tests`         |
| Short query                | `Manual - Failed`                                   |
| Numbers                    | `9`                                                 |
| Title and tests amount     | `Manual - Failed: 9 tests`                          |
| Title and %                | `Manual - Failed: 7%`                               |
| Title, tests amounts and % | `Manual - Failed: 9 tests, 7%`                      |

![Testomat.io - Custom Charts Labels](./images/New_Sey1I0ug_2024-08-07.png)

### Timelines

Timelines for Custom Charts, a feature that allows you to visualize data trends over a specified period. A timeline is a graphical representation of events or data points in chronological order. It helps in understanding trends, patterns, and changes over time by displaying information in a linear format.

* Search Query-Based Timelines: When creating custom charts, you can now set up a timeline period based on your test search queries.
* Data Collection: Testomat will collect data for the specified test search queries over the selected period.
* Timeline Chart View: The collected data is displayed in a timeline chart view, providing a clear visual representation of how your test metrics evolve over time.

This feature enhances your ability to track progress, identify trends, and make informed decisions based on historical test data.

![Testomat.io - Timelines for Custom Charts](./images/New_ACit3dNa_2024-08-04.gif)

## Failures Board 

Your team may require visualizing your current status on the project. This is implemented with Failures Board. There you can see failures from the latest test runs, navigate to the suite, latest test run, and the failed test itself. For the Failures widget, we added the ability to group and sort failures found on the project.

![Testomat.io - Failures Board](./images/New_QIy3IApm_2024-08-18.gif)

<!-- ## Issues -->

## Flaky Tests

There may be some unstable automated tests on your project that sometimes fail and sometimes pass. 

**How does it work?**

Let's say `0 == failed` and `1 == passed`.
If we have 1 passed and 1 failed, avg value is 0.5.
If all tests are passing, value is 1.
If all tests failing value is 0.
We set some boundaries between where tests neither pass or fail.
So if avg value is 0.9 we can consider this test as non-flaky as it passes 90% of time.


![Testomat.io - Flaky](./images/Flaky.gif)

## Slowest Tests 

It is well known that automated tests need maintenance and refactoring. The Slowest Tests widget will help you to define such automated tests and help to visualize them. You can sort them by execution duration and passed/failed status to prioritize your work effectively.

![Testomat.io - Slowest Tests](./images/147572823-b5a3917f-55f3-4fc6-88bf-a69b1ec9bfca.gif)


## Never Run Tests

There may be tests that were never executed on your project because they simply got lost or forgotten. To avoid such situations we added Never Run Tests that will show you test those ones.

![Testomat.io - Never-Run-Tests](./images/Never-Run-Tests.gif)

## Ever Failing Tests

Ever Failing Tests is another useful Analytics widget that will show you automated tests that never passed. This feature will help you to pay attention to potential risks in your application.

![Testomat.io - Ever Failing Tests](./images/147574334-3a076e17-9a8e-437b-8a8c-9d1833a29c28.gif)

## Analytics In Run Reports

We empowered Testomat.io Run Reports with Overview chart, Flaky and Slowests tests widgets, so you receive more essential information in one place at one time.

Overview chart visualizes aggregated tests statuses by suites:

![Testomat.io - image](./images/147571210-e1277094-b480-4b3a-ad5b-b79248203c9e.png)

Flaky and Slowests tests widgets show the latest 5 tests and navigate to dedicated Analytics pages: 

![Testomat.io - image](./images/147570746-6d5a24be-689a-4209-b246-24aaf8afeda0.png)