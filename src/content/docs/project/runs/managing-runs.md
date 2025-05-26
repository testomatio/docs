---
title: Managing Runs
description: Learn how to manage test runs effectively in Testomat.io. This guide covers generating detailed run reports, grouping test runs, applying merge strategies, relaunching runs, copying run groups, and filtering results. It also explains multi-selection options for archiving, merging, and downloading reports for efficient test tracking and management.
type: article
url: https://docs.testomat.io/project/runs/managing-runs
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_iWaZSQo7_2024-08-03.DjYRaTwD_Ysioy.webp

  - tag: meta
    attrs:
      name: keywords
      content: managing test runs, run reports, merge strategy, run groups, relaunch runs, test management, Testomat.io, run comparison, multi-selection, archiving, test reporting
---

## Reports

When you run tests with Testomat.io it will generate a Run Report with the results. We have such options as **basic view** and **extended view**. Let's have a look at each of them.

**Basic view**

Clicking on the Test Run will toggle RunReport screen in basic view.

![toggle RunReport screen](./images/1-1.png)

Here you can see 1. a list of tests, 2. their status (Passed/ Failed/ Skipped), 3. general information on the Run Result.

![run overview](./images/2-2.png)

Also, you can click on test and open it to see details.

![see details](./images/3.png)

Moreover, you can view the history of run results by filtering them by group name.

![Testomat.io - Test result history in RunGroup](./images/New_NhgwWJkq_2024-08-12.gif)

**Extended view**

If you click on Report button you will see the extended view of the Run Report.

![Report button](./images/4.png)

You can see such options here: 1. a list of tests 2. overview of all executed tests 3. Report Summary.

![Report Details](./images/5.png)

You can sort suites by Name and by Failed status in the Overview widget.

![Averview widget](./images/6.gif)

You can use ↓ and ↑ keys to navigate the tests and have a quick view of details for each test.

![navigate with arrows](./images/CleanShot-2023-12-29-at-094607.gif)

**Test Case History**

When you launch a test run and make changes to test case title or description - a new entry is added to the test case's history. This entry records who made the edit and when it occurred.

1. Navigate to the Runs section.
2. Launch a new Run or continue an existing Run.
3. Click the three dots menu next to the test case you want to edit.
4. Select **Edit**.
5. Modify the test case title or description as needed.
6. Click **Save** to apply the changes.
7. The new history entry will appear directly in the test case block, showing who edited the test case and the date and time of the change.

![test case history](./images/Test_Case_History.png)

Please note that the test case history is only available while the test run is in progress.

## How to Create a Test Case within a Run

You can create test cases directly within a test Run, avoiding additional navigation and ensuring the new tests are automatically included in the associated test plan.

1. Go to the **Runs** tab.

2. Start the desired test run.

3. Scroll to the bottom of the test suite.

4. Click the **Create test** button.

![Create test case](./images/Create_Test_button.png)

5. Enter the test case details in the provided field.

6. Click the checkmark **✔️** icon to add the new test case, or the **X** icon to discard it.

![Create test case](./images/Test_Case_Creation.png)

> The **Create Test** button can be hidden via the **Hide Test Creation** option in the **Run** dropdown menu.

![Create test case](./images/Hide_test_creatio.png)

## RunGroups

First, let's clarify what Run Groups are in Testomat.io. 
They allow you to organize and group multiple test runs together based on criteria like sprint, release, functional area, or any other logical grouping. This helps in analyzing aggregated results and getting a consolidated view of your testing efforts.

To create a new Run Group, click on New Group button:

![New Group button](./images/7.png)

On New RunGroup screen you need

1. Add a Name of a group
2. Choose Merge strategy
3. Choose a group type (optional)
4. Click on Save button

![New RunGroup screen](./images/8.png)

A New RunGroup will appear on Runs page

![RunGroup will appea](./images/9.png)

To put Manual Run to a RunGroup you need to open it and click on Add Manual Run button

![put Manual Run](./images/10.png)

To put an Automated Run to a RunGroup you need to execute your tests with Testomat.io providing TESTOMATIO_RUNGROUP_TITLE="Build ${BUILD_ID}".

Now you can see Test Runs in a created RunGroup

![Test Runs in a created RunGroup](./images/11.png)

## How to Move a Run to a RunGroup

You may need to move a Run to a specific RunGroup—for example, to associate it with a particular release or build. To do this, use the **Move** functionality.

1. Navigate to the **Runs** section.
2. Select the Run you want to move.
3. Click the three-dot menu (...) next to the **Edit** button.
4. Select **Move** from the dropdown menu.

![Move Run option in the dropdown menu](./images/Move_Run_Option.png)

5. In the pop-up window, choose the destination **RunGroup**.
6. Click **Move** to confirm.

![Destination RunGroup selection dialog](./images/Destination_RunGroup.png)

### How to Customize Your Runs List View

When working with test runs in RunGroup or Runs Dashboard Flow, you can adjust the table layout to fit your needs. Instead of using the default view, you can customize the table by following these simple steps:

**RunGroup Flow**

1. Click the **Runs** button in the sidebar
2. Select RunGroup
3. Click the **Custom view** button

![Custom View option](images/att1_4995.png)

Let's check how a table with a custom view looks like.

4. Click the **Settings** icon to access **Runs List Settings**.

![Custom View](images/att2_4995.png)

Then, you can customize the table layout:

5. Select or deselect columns to show only the data you need
6. Set the column width (px) if needed to improve readability
7. Click the **Save** button to apply your changes

![Save changes](images/att3_4995.png)

Here's how your customized table in RunGroup will appear.

![Updated Custom View](images/att4_4995.png)

**Runs Dashboard Flow**

Similarly, you can customize the view in the Runs Dashboard Flow by following these steps:

1. Click the **Runs** button in the sidebar
2. Click the **Custom view** button

![Custom view button](images/att1_1190.png)

3. Customize your view in the **Runs list settings**
4. Click the **Save** button to apply your changes

![Save changes](images/att2_1190.png)

Here's how your customized table will appear.

![Updated view](images/att3_1190.png)
￼
With these customization options, you can tailor the Runs View to display only the most relevant details, improving clarity and efficiency.

### RunGroup Chart

The chart displays up to 50 of the latest test runs belonging to the group. If you have more, use the pagination arrows, to view the results of the previous runs.

![Testomat.io - RunGroup Chart](./images/New_iWaZSQo7_2024-08-03.png)

## Copy RunGroup

You can easily create a new RunGroup, completely independent of any previous runs, by copying all relevant tests exactly as they are. You can configure what data should be copied, namely:

**Assignee**: Define assignee details separately, preventing them from being copied.

**Issues**: Choose whether to include or exclude linked issues in the duplication process

**Labels**: Decide whether labels should be duplicated or omitted in the new test run

**Environments**: Control the duplication of environment settings based on your requirements.

**Nested Structure**: Preserve or exclude the nested structure of your test groups as you duplicate them.

Here are steps: 1. Open RunGroup 2. Click Extra menu 3. Click Copy 4. Pick configurations 5. Save 6. See RunGroup created.

![Copy group 1](./images/32.png)

![Copy group 2](./images/33.png)

![Copy group 3](./images/34.png)

## Merge Strategies

Testomat.io provides different **'Merge Strategies'** to aggregate the results of the individual test runs within a Run Group. This is crucial when you have multiple executions of the same tests (e.g., retries, parallel execution, runs on different environments) and want a single, representative status for the tests within the group.

You need to select a **Merge Strategy** when you create a new Run Group:

1. Go to Runs.
2. Click on 'New Group' button.

![Testomat.io - merge str](./images/New_RunGroup_1.png)

3. Select **Merge strategy**.

![Testomat.io - merge str](./images/New_RunGroup.png)

:::note

You can change **Merge Strategy** later, any time you want, after the Run Group is already created.

:::

To change the Merge Strategy:

1. Select the Run Group.
2. Click on **'Extra menu'** button.
3. Click on **'Edit'** option.

![Testomat.io - merge str](./images/New_RunGroup_2.png)

You also need to select the **Merge Strategy** when merging multiple runs into one:

1. Go to Runs.
2. Click on 'Multi-select' icon.
3. Select a few runs that you want to merge.
4. Click on 'Extra menu' button at the bottom menu.
5. Select 'Merge' option.

![Testomat.io - merge str](./images/Merge_runs.png)

6. Select **Merge Strategy**.

![Testomat.io - merge str](./images/Merge_runs_1.png)

**Testomat.io offers you three different Merge strategies:**

For instance, let's say we have 2 runs inside a Rungroup with the same tests A and B:

- Run 1: A - failed, B - failed
- Run 2: A - passed, B - passed

What counter numbers should contain Rungroup? Both answers: "Passed: 2, Failed: 0" or "Failed 2, Passed 0" are absolutely valid depending on how you calculate those numbers. That's why Testomat.io provides customizable Merge strategies:

- **Realistic:** this strategy is based on test results from the last executed run (excluding skipped tests). If your Run Group includes test runs with different test cases, it will summarize and display the results from the last executed runs with unique test cases. 
In our example, results will be next: **Passed: 2, Failed: 0**, as Run 2 was added later.

- **Optimistic:** this strategy will mark a test as passed if it passed in at least one of the runs within the group, even if it failed in others. This approach provides a more lenient view, focusing on the positive outcomes. 
In other words, it prefers passed tests over failed: **Passed: 2, Failed: 0** in our example.

- **Pessimistic:** unlike the optimistic strategy, this strategy will mark a test as failed if it failed in at least one of the runs within the group. It prioritizes identifying potential issues. 
Simply to say, it prefers failed tests over passed: **Passed: 0, Failed: 2**.

### Merge Strategy Examples

**Example #1:**

Let's imagine that you have 2 Test Runs with the same test cases for different environments. In one Test Run, the first 3 test cases failed while the others passed, and in another Test Run last 2 test cases failed and the others - passed.
In this case, the results with the different strategies will be as follows:

1. **Realistic** - the result will match the result of the last executed test run, in this case 2 test cases - failed, and others - passed.

![Testomat.io - merge str](./images/Realistic_1.png)

2. **Optimistic** - all test cases - passed, as each test case passed in at least one test run.

![Testomat.io - merge str](./images/Optimistic_1.png)

3. **Pessimistic** - by this strategy 5 test cases - failed, because in total 5 unique test cases failed in these 2 test runs.

![Testomat.io - merge str](./images/Pessimistic_1.png)

**Example #2:**

In this example, you added 2 more Test Runs with unique test cases (for instance, to test another feature in the module under test) to your previous 2 Test Runs. In one of the added Test Runs, the last 2 test cases failed, and in the other Test Run, the first 3 test cases failed. In these 2 runs, each test case failed and passed at least once.
As a result, the outcome with the different strategies will be as follows:

1. **Realistic** - 5 test cases - failed, as it will summarize the results of last two runs with unique test cases.

![Testomat.io - merge str](./images/Realistic_2.png)

2. **Optimistic** - all test cases - passed, as each test case passed in at least one test run.

![Testomat.io - merge str](./images/Optimistic_2.png)

3. **Pessimistic** - by this strategy 10 test cases - failed, because in total 10 unique test cases failed in these 4 test runs.

![Testomat.io - merge str](./images/Pessimistic_2.png)

As you can see, **Merge Strategies** for Run Groups in Testomat.io help you aggregate and analyze test results from multiple runs and how the system determines the final status of a test case within a Run Group, providing a unified view of your overall testing outcomes.

## Merge Runs

With Testomat.io you can merge your Test Runs. To do this you need to enable multi-selection, choose the Test Runs you want to merge, and click on the Merge button at the bottom of the page

![merge runs](./images/14.png)

Here you will need to 1. Select testing Environment 2. Enter a name for merged run 3. Choose a Merging Strategy 4. Decide to keep original runs or not. 5. Click on Merge button

![merge runs steps](./images/15.png)

Your merged run will appear in the list of runs on the Runs page

![merged run](./images/16.png)

## How to Pin a Run or Run Group

Testomat.io allows users to pin Run Groups or individual Runs to the top of the Dashboard for quick access to critical or frequently used tests. This supports faster navigation, improved focus, and customizable workflows — ideal for monitoring regression tests, environment-specific runs, or production hotfixes.
 
1. Go to the **Runs** tab.
2. Find the Run or Run Group you want to pin.
3. Click the **three dots menu** aligned next to the item.
4. Choose **"Pin"** from the dropdown options.
5. The selected Run or Run Group will now appear **pinned at the top** of the list for quick and easy access.

![Pin a Run](<images/Pin_a_Run.png>)

**Pin** option is also available in the detailed view menu.

![Pin a Run Detailed Menu view](<images/Pin_a_Run_Detailed_Menu.png>)

## Relaunch Runs

For some reason, you may need to re-check some tests in your Run manually. You can use Relaunch Run options for such cases. To do this you need to 1. click on the menu button and 2. click on Relaunch manually button

![Relaunch Run](./images/17.png)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![relaunched Run](./images/18.png)

When you finish you need to click on Finish button. You will see tests with new status and new Run Status

![new status](./images/19.png)

Also, your Test Run will contain updated information on its results: You will see a changed tag and Run status.

![New statuses](./images/20.png)

## Launch a Copy

If you need need to re-check some tests in your Run manually, but for some reason, you want to save this Test Run you can use Launch a copy option. To do this you need to 1. click on the menu button and 2. click on Launch a Copy button.

![Launch a Copy button](./images/21.png)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![test run copy](./images/22.png)

When you finish you need to click on Finish button. You will see a new Test Run tests with new status and new Run Status:

![new Test Run tests](./images/23.png)

On the Runs page you will see a copy of your Test Run with new tests results:

![copy of your Test Run](./images/24.png)

## Archive Runs & Groups

Archive provides you with the ability to declutter the main Runs board, ensuring that only relevant and active test runs take center stage while preserving historical data. The Runs page displays the 30 most recent Runs and Groups, while all other runs go to Archive.

![Run overview](images/att1_5226.png)

You can also forcefully archive Runs or Groups. To do this, you need:

1. Сlick the extra menu
2. Click the **'Archive'** button

![Archive runs](images/att2_5226.png)

3. Click **'Confirm'** button to archive the run

![Confirm runs](images/att3_5226.png)

Forcedly archived Runs or Groups get the **archived** badge.

![Archived badge](images/att4_5226.png)

Incomplete Runs or Groups with such runs cannot be archived forcibly or automatically from the main Runs board!

![Incomplete Runs](images/att5_5226.png)

### Runs Archive

Archived runs find a new home in the dedicated **Runs Archive** section. This segregated space ensures that your archived data is easily accessible without cluttering the main board. The Runs Archive comes equipped with filtering capabilities.

![Runs Archive](images/att6_5226.png)

You can set the period after which old Test Runs will be deleted from the archive. You can do this through the menu button on the Runs Archive page, then click on the **Purge Old Runs** button, specify the period and confirm. Alternatively, you can specify a term in **Project Settings**.

In addition, all archived runs can be displayed as a group, which can be organized by clicking the **'Rungroup Structure'** button.

![Rungroup Structure button](images/att_5226.png)

### Groups Archive

For archived groups, there is a separate section called **Groups Archive**. The Groups Archive can also be filtered.

![Groups Archive](images/att7_5226.png)

Furthermore, you can sort the groups in a variety of ways.

![Sort in Groups Archive](images/att8_5226.png)

### More About Archives

- Automatically or forcibly archived runs and groups can be unarchived. This allows you to display them on the main panel.
- When a group is restored, all of the archived runs will be restored as well.

**Runs Archive**

1. Сlick the extra menu
2. Click the **'Unarchive'** button

![Unarchive Runs Archive](images/att10_5226.png)

**Groups Archive**

1. Сlick the extra menu
2. Click the **'Unarchive'** button

![Unarchive Groups Archive](images/att9_5226.png)

## Filtering Test Runs

Testomat provides filtering capabilities for Runs and Run Groups. On the Runs page, you can find Basic filters and Additional filters.

![Run Filters](./images/27.png)

## Filter Runs by TQL

Testomat.io Query Language for Runs enables more flexible searches, allowing users to filter Test Runs by criteria like `finished_at`, `passed_count`, `has_test_label` and many others. This helps quickly find relevant runs and improves test analysis.

![Testomatio.io - Filter Test Runs by Query Language](./images/New_wcpBcPsg_2024-10-17.png)

If you would like to find out more about the [Runs Variables](https://docs.testomat.io/usage/query-language/#runs-variables), please visit a separate section of the documentation.

![Testomatio.io - Query Language Variables](./images/New_8X0J8uAJ_2024-10-17.png)

## Multiselection For Runs

Multiselection allows the bulk application options to many runs with one click. Here is overview:

1. Select all - select all runs on the Runs page
2. Move - move runs to/from Run Group
3. Download - export selected run reports to spreadsheet
4. Labels - apply/remove [labels](https://docs.testomat.io/usage/labels-and-custom-fields/#how-to-setup-a-label) to runs
5. Merge - merge selected runs
6. Compare - opens Compare runs view
7. Archive - archive selected runs
8. Link - link selected runs to [JIRA](https://docs.testomat.io/integration/jira/#connecting-to-jira-project), [GitHub](https://docs.testomat.io/integration/issues-management-systems/#github-issues-configuration), [Azure](https://docs.testomat.io/integration/issues-management-systems/#azure-devops-configuration),[Linear](https://docs.testomat.io/integration/issues-management-systems/#linear-configuration) or other issue.
9. Delete - delete selected runs

![Multiselection Options](./images/28.png)

## How To Download Run Report as Spreadsheet

Testomat.io provides option to export Run Reports as spreadsheet so you can get your data in xlsx file.
See how it works.

**Download few run reports in one file**: 

1. Go to Runs.
2. Enable **'Multi-select'**.
3. Select Runs.
4. Click on **'Extra menu'** button.
5. Select **'Download'** option.

![Testomat.io - export as Spreadsheet](./images/Export_1.png)

**Download a separate Run Report**: 
1. Go to Runs.
2. Select Run Report.
3. Click on **'Report'** button.

![Testomat.io - export as Spreadsheet](./images/Export_2.png)

4. Click on **'Extra menu'** button.
5. Select **'Download as Spreadsheet'** option.

![Testomat.io - export as Spreadsheet](./images/Export_3.png)

## How To Export Run Report in PDF Format

Testomat.io also allows you to export your test run results as a PDF report. This feature enables easy sharing and archiving of test outcomes outside of Testomat.io. 

**There are two ways to generate a structured report with test execution details in PDF format:**

1. Go to Runs.
2. Select Run Report.
3. Click on **'Extra menu'** button.
4. Select **'Export as PDF'** option.

![Testomat.io - export as PDF](./images/Export_4.png)

**OR**

1. Go to Runs.
2. Select Run Report.
3. Click on **'Report'** button.

![Testomat.io - export as PDF](./images/Export_5.png)

4. Click on **'Extra menu'** button.
5. Select **'Export as PDF'** option.

![Testomat.io - export as PDF](./images/Export_6.png)

**Example of Test Run Report in PDF format:**

![Testomat.io - export as PDF](./images/Export_7.png)

**Use cases:**

- **Sharing results with stakeholders:** Quickly generate a portable summary of test outcomes for product owners, QA managers, or external partners who may not have access to the platform.

- **Audit and compliance documentation:** Maintain a formal record of test results in a fixed format for compliance, certification, or audit purposes.

- **Team retrospectives and reviews:** Use the PDF report to review test coverage and outcomes during retrospectives or sprint reviews without relying on live access to the system.

## Compare Test Runs

Select test runs and see a visual display of the similarities and differences. Compare your run reports and analyze them by such parameters as Flaky, Revieved, Degraded, and more. To do this:

1. Enable Multiselection.
2. Pick Runs.
3. Click 'Compare' button.

![Testomat.io - Compare Test Runs](./images/compare-runs.gif)

Also this feature is available for Run Groups and allows you to compare test results from different runs within a single run group. 

1. Open Run group.
2. Click 'Combined Report' button.

![Testomat.io - Combined Report](./images/Combined_report.png)

3. Click on 'Compare to' button to select the run you want to compare with others.

![Testomat.io - Combined Report](./images/Combined_report_1.png)

:::note

'Combined Report' feature for Run Groups doesn't allow you to combine test results of all runs inside one Run Group into one report, it only allows you **to compare** test results of all runs inside this Run Group.

:::

## Share Runs Filter

This feature allows to pass **Runs** and **Runs Archive** filter parameters directly through the URL. This is useful for improving collaboration, as it allows teams to quickly access relevant test results without manually adjusting filters.

Specify the necessary filtering parameters on the **Runs** or **Runs Archive** page, copy the URL and share it with interested members.

![Testomatio.io - Share Runs Filter](./images/New_FRXL06AF_2024-10-08.png)
