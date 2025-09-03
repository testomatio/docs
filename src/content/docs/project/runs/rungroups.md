---
title: RunGroups
description: Testomat.io's 'RunGroups' feature allows users to organize multiple test runs based on criteria like sprint or release, providing a consolidated view of testing efforts. This guide explains how to create, customize, move runs into, and copy RunGroups, along with options for managing their visibility, such as pinning and archiving, to streamline test management.
type: article
url: https://docs.testomat.io/project/runs/rungroups
head:
  - tag: meta
    attrs:
      name: keywords
      content: managing test runs, run reports, merge strategy, rungroups, relaunch runs, test management, Testomat.io, multi-selection, archiving, test reporting, runGroup flow, runs dashboard flow, RunGroup chart, copy RunGroup, pin a RunGroup, archive RunGroup, unarchive RunGroup.
---

First, let's clarify what **'RunGroups'** are in Testomat.io. 
**RunGroups** allows you to organize and group multiple test runs together based on criteria like sprint, release, functional area, or any other logical grouping. This helps in analyzing aggregated results and providing a consolidated view of your testing efforts.

## How to Create a RunGroup

**To create a new RunGroup:**

1. Open **'Runs'** page.
2. Click the **'Additional options'** arrow button next to the 'Manual run' button.
3. Select **'New group'** option from the dropdown menu.

![Testomat.io - New Group button](./images/RunGroup_1.png)

On New RunGroup screen you need:

1. Choose a **'Group Type'** (optional).
2. Add a **'Name of a Group'**.
3. Select **'Merge strategy'** (For more details, refer to the [Merge Strategies](https://docs.testomat.io/project/runs/merge-strategies) page in documentation).
4. Add **'Description of a group'**, if needed.
5. Click the **'Save'** button.

![Testomat.io - New RunGroup screen](./images/RunGroup_2.png)

The new RunGroup will appear on Runs page and will open automatically after creation.

![Testomat.io - RunGroup will appea](./images/RunGroup_3.png)

After RunGroup is added, you can create new Manual/Automated/Mixed Runs inside it.

## How to Create a Run in RunGroup

- To create a new **Manual Run**, open the RunGroup and click on **'Manual Run'** button.

![Testomat.io - put Manual Run](./images/RunGroup_4.png)

After this in the displayed window select a test plan from the list or create a new one, and fill in other data that you need for your run (like: assignee, title, environment, description).

:::note

When you create a manual run from RunGroup, it will be automatically pre-populated on the **'New Manual Run'** window, but you can change it if needed.

:::

![Testomat.io - put Manual Run](./images/RunGroup_7.png)

- To add a new **Automated Run** to a RunGroup, execute your tests with Testomat.io, providing TESTOMATIO_RUNGROUP_TITLE="Build ${BUILD_ID}".

Now, by clicking on expand arrow, you can view Test Runs and their results within created RunGroup.

![Testomat.io - Test Runs in a created RunGroup](./images/RunGroup_5.png)

Clicking on RunGroup name will toggle RunGroup Report screen in basic view. Here you can view more detail information about the runs inside selected RunGroup and total results.

![Testomat.io - Test Runs in a created RunGroup](./images/RunGroup_6.png)

For more details go to the relevant section - [RunGroup Report in Basic View](https://docs.testomat.io/project/runs/reports/#rungroup-report-in-basic-view) on **'Reports'** page.

## How to Move a Run to a RunGroup

You may need to move a Run to a specific RunGroup (e.g., to associate it with a particular release or build). Use the **'Move'** functionality for this purpose:

1. Navigate to the **'Runs'** page.
2. Select the Run you want to move.
3. Click the **'Extra menu'** button.
4. Select **'Move'** from the dropdown menu.

![Testomat.io - Move Run option in the dropdown menu](./images/Move_Run_1.png)

5. In the pop-up window, choose the **destination RunGroup**.
6. Click the **'Move'** button to confirm action.

![Testomat.io - Destination RunGroup selection dialog](./images/Move_Run_2.png)

## RunGroup Report Basic View

You can view RunGroup Report by clicking on its name.

![Testomat.io - Test Runs in a created RunGroup](./images/RunGroup_6.png)

**In this basic RunGroup Report, you can:**

1. View the [RunGroup Chart](https://docs.testomat.io/project/runs/rungroups/#rungroup-chart).
2. Review **'RunGroup summary section'** with general information based on the selected [Merge Strategy](https://docs.testomat.io/project/runs/merge-strategies/).
3. View a list of test runs, their statuses with the number of Passed, Failed, Skipped tests, along with the run assignee and executed time.
4. Customize your RunGroup Report view (Read more in the [How to Customize Runs List View ](https://docs.testomat.io/project/runs/rungroups/#how-to-customize-runs-list-view) section below).
5. Check **'Combined Report'** (Read more in the [Combined Report for RunGroups](https://docs.testomat.io/project/runs/rungroups/#combined-report-for-rungroups) section below).
6. Add a new Manual Run to the selected RunGroup.
7. Generate a [Rungroup Statistic Report](https://docs.testomat.io/advanced/ai-powered-features/ai-powered-features/#rungroup-statistic-report)(AI-feature should be enabled on **'Company Settings'** page).

![Testomat.io - RunGroup Report](./images/RunGroup_Report_1.png)

The **'RunGroup summary section'** displays a counter with the number of included and analyzed runs in the RunGroup. Archived runs are excluded from this counter and do not affect the total RunGroup result. You can see how many runs were archived, and by clicking on archived counter, you will be redirected to the **'Groups Archive'** page, where runs are already filtered by selected RunGroup.

![Testomat.io - RunGroup Report](./images/RunGroup_Report_2.gif)

## How to Customize Runs List View 

When working with test runs inside RunGroup or Runs Dashboard Flow, you can adjust the table layout to fit your needs. Instead of using the default view, you can customize the runs table layout within **RunGroup** page or directly from the main **Runs Dashboard**.

**RunGroup Flow**

1. Go to **'Runs'** page.
2. Select RunGroup.
3. Click the **'Custom view'** button.

![Testomat.io - Custom View option](images/Custom_view_1.png)

You can use the default custom view or personalize the table layout:

4. Click the **'Settings'** icon to access **'Runs List Settings'**.

![Testomat.io - Custom View](images/Custom_view_2.png)

5. Select or deselect columns to show only the data you need.
6. Set the column width (px), if needed, to improve readability.
7. Click the **'Save'** button to apply your changes.

![Testomat.io - Save changes](images/Custom_view_3.png)

Here's how your customized table within a RunGroup will appear after customization:

![Testomat.io - Updated Custom View](images/Custom_view_4.png)

**Runs Dashboard Flow**

Similarly, customize the runs view from the main Runs Dashboard:

1. Go to **'Runs'** page.
2. Click the **'Custom view'** button.

![Testomat.io - Custom view button](images/Custom_view_5.png)

3. Click the **'Settings'** icon to access **'Runs List Settings'**.
4. Customize your view in the **'Runs list settings'**.
5. Click the **'Save'** button to apply your changes.

![Testomat.io - Save changes](images/Custom_view_6.png)

Here's how your customized table will appear.

![Testomat.io - Updated view](images/Custom_view_7.png)
￼
These customization options allow you to tailor the Runs View to display only the most relevant details, improving clarity and efficiency.

:::note

A customized runs list view automatically applies to all your RunGroups and main Runs Dashboard.

:::

## RunGroup Chart

The chart displays up to 50 of the latest test runs belonging to the group. If you have more runs, use the pagination arrows to view the results of the previous runs.

![Testomat.io - RunGroup Chart](./images/RunGroup_Chart.png)

## Combined Report for RunGroups

Testomat.io provides a **'Combined Report'** feature for RunGroups. This report is designed to help you aggregate and analyze the results of all test runs within the RunGroup in a single view.

You can open **'Combined Report'** for a RunGroup by clicking on **'Combined Report'** button from the RunGroup Report Basic View window.

![Testomat.io - Combined Report](./images/Combined_report.png)

The comparison of runs is based on the first (main) launch. The statuses counters on the left side are calculated based on the main run. 

To change the main run, click the **'Compare To'** button. Note that the counters of loaded tests is above them. The final summary on the right side is calculated based on the loaded tests.

![Testomat.io - Combined Report](./images/Combined_report_1.png)

:::note

The **'Combined Report'** feature for RunGroups does **not** combine test results of all runs inside one RunGroup into a single report. It only allows you **to compare** test results of all runs within this RunGroup.

:::

Inside the **'Combined Report'**, you can get a quick overview of the pass/fail rates for all tests within the Group. You can also see the total number of tests present in all compared runs, as well as the total number of flaky (unstable tests that passed or failed in different runs), revieved (previously failing that passed in next runs), and degraded (previously passed that failed in next runs) tests. 

Additionally, you can use filters and search features to view the data most relevant to your needs.

![Testomat.io - Combined Report](./images/Combined_report_2.gif)

**Key benefits:**

- **Analyze Trends:** By seeing the results from multiple runs in one place, you can identify trends in test performance and stability over time.

- **Consolidate Data:** The combined report is especially useful for "mixed runs" (runs that include both manual and automated tests), as it consolidates all results into a single, cohesive report.

- **Compare Runs:** Testomat.io also has a separate **'Compare Test Runs'** feature that can be used within a RunGroup. This allows you to side-by-side compare the results of different runs to pinpoint changes, regressions, or improvements. (Go to [Compare Test Runs](https://docs.testomat.io/project/runs/reports/#compare-test-runs) section on **'Run reports'** page to read more about this feature.)

This feature is a powerful tool for project managers, QA leads, and stakeholders who need to make informed decisions based on a holistic view of testing activities, without having to manually compile data from individual reports.

## How to Copy RunGroup

You can easily create a new RunGroup, completely independent of any previous runs, by copying all relevant tests exactly as they are. You can configure what data should be copied, namely:

- **Assignee**: Define assignee details separately, preventing them from being copied.
- **Issues**: Choose whether to include or exclude linked issues during duplication.
- **Labels**: Decide whether labels should be duplicated or omitted in the new test run.
- **Environments**: Control the duplication of environment settings based on your requirements.
- **Nested Structure**: Preserve or exclude the nested structure of your test groups as you duplicate them.

**Follow these steps:**

1. Open the RunGroup. 
2. Click the **'Extra menu'** button.
3. Select **'Copy'** option form the dropdown menu.

![Testomat.io - Copy group 1](./images/Copy_group_1.png)

4. Select configuration options.
5. Click the **'Copy'** button. 

![Testomat.io - Copy group 2](./images/Copy_group_2.png)

6. Verify the created RunGroup.

![Testomat.io - Copy group 3](./images/Copy_group_3.png)

:::note

Only manual runs will be copied with the RunGroup. If a copied RunGroup contains a mixed test run, automated test cases will be marked as skipped by default.

:::

## How to Pin a RunGroup

Testomat.io allows users to pin RunGroups to the top of the Dashboard. This provides quick access to critical or frequently used tests or test runs, helping teams stay focused on the most relevant tasks. Pinning supports faster navigation, improved focus, and customizable workflows—ideal for monitoring regression tests, environment-specific runs, or production hotfixes.

For more details, refer to the [How to Pin a Run or RunGroup](https://docs.testomat.io/project/runs/managing-runs/#how-to-pin-a-run-or-rungroup) section.

## How to Archive RunGroup

Testomat.io gives you an opportunity to archive a RunGroup, including all its contained Test Runs. This helps maintain better visibility on your main Run Dashboard.

For more information on archiving, visit the [Archive Runs & RunGroups](https://docs.testomat.io/project/runs/archive-runs-and-groups) page. 

## How to Unarchive RunGroup

Archived RunGroups can be unarchive and moved back to the main Run Dashboard. Restoring a RunGroup also restores all its archived runs.

Read more in the [How to Unarchive Runs & RunGroups](https://docs.testomat.io/project/runs/archive-runs-and-groups/#how-to-unarchive-runs-&-groups) section. 