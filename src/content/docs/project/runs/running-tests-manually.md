---
title: Running Tests Manually
description: Learn how to execute manual tests using Testomat.io. This guide covers creating test plans, running multi-environment tests, and executing manual tests as checklists. It also provides instructions for editing launched test runs and running automated tests manually with full test reporting and tracking.
type: article
url: https://docs.testomat.io/project/runs/running-tests-manually
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/170301515-667bf871-6c49-4059-ae3e-3e561ef92a01.CyiV0dJU_tdLPA.webp

  - tag: meta
    attrs:
      name: keywords
      content: manual testing, test plans, test environment, checklist mode, manual test execution, multi-environment testing, Testomat.io, QA testing, test management, automated tests manually
---

## Running Tests Manually

Tests that are not automated (yet) can be executed by QA engineers in manual testing mode. In this mode, a user can check manual tests and mark them as passed or failed. It is possible to create a list of tests to check in test plan and assign users to a run.

### How to Run All Tests

To launch a Manual Test Run you need:

1. Click the Run button in the left-side menu
2. Select the Manual Run button

![CleanShot 2022-05-26 at 11 47 39@2x](./images/170453790-f6c2c54b-9716-4a05-b1d9-bdbf1da77836.jpg)

On Manual Run screen you need:

1. Select a Test Plan
2. Add a title (optional)
3. Pick up a testing environment
4. Click on Launch button

![CleanShot 2022-05-26 at 11 52 23@2x](./images/170454961-7b6a8c26-addc-43c8-bc62-200a63824f9e.jpg)

### How to Set Test Case Results in Manual Run

Once a manual test run is launched, you need to set a Result for each test case. The available options are:

- PASSED – The test case was successfully executed;
- FAILED – The test case did not meet the expected result;
- SKIPPED – The test case was not executed;

**Steps to Set Test Case Results, Messages, and Attach Files**:

1. Click on a test case
2. Select the appropriate result: PASSED, FAILED, or SKIPPED

![Appropriate results](./images/att1_301.png)

3. Once the result is selected, you have the following options for the Test Result message field:

- Choose one of the available messages, but leave the field empty;
- Type your own message manually without choosing any of the available messages;
- Leave the field empty without choosing any message;
- Select a message from the available options and also type your own message in the field (as shown in the example below)

![Test Result message](./images/att2_301.png)

4. Once the **'Attaching a file'** field appears, allowing you to browse or drag-and-drop a file (e.g., screenshot, log file) to provide additional context for the result. This can help document evidence related to the test case, such as error logs or screenshots of the issue.

![Attaching a file field](./images/att3_301.png)

5. You can also configure the view of attached files with the following options:

- Large Thumbnails;
- Small Thumbnails;
- Grid View;
- List View;

![Configuration view](./images/att4_301.png)

6. Additionally, there are also two ways to view the specific file:

- **Open and fit to width**;

![Open and fit to width](./images/att8_301.png)

- Open and view a **Full screen** of the specific file;

![Full screen](./images/att7_301.png)

7. To delete an attached file, click on the **trash** icon
8. After warning message **'Are you sure?'** appears, click **OK** button to confirm deletion

![Delete attachments](./images/att5_301.png)

9. Once all test cases are completed, click the **Finish Run** button to end the process

![Finish Run button](./images/att6_301.png)

:::note

If you need to configure different result messages, click here: <a href="https://docs.testomat.io/management/project/settings/#custom-statuses" target="_blank">Custom Statuses</a>

:::

### How to Create a Test Plan

If you need to create a Test Plan you should click on + New Test Plan

![CleanShot 2022-05-26 at 11 57 49@2x](./images/170455198-d13d4a17-9d0e-40e3-9dc6-cc4b13f4782b.jpg)

Or you can go to **Plans** page and create a new Test Plan there:

![CleanShot 2022-05-26 at 12 48 54@2x](./images/170464103-df345a62-800f-4a41-be74-5b03bb4fc441.jpg)

Now your next steps are:

1. Add a title to your Test Plan
2. Pick a suite/ tests
3. Click on the Save Plan button

![CleanShot 2022-05-26 at 12 11 53@2x](./images/170457848-5f9b29a5-ec4f-4837-95d6-6871c2219f0a.jpg)

The new Test Plan will appear on Manual Run screen

![CleanShot 2022-05-26 at 12 16 22@2x](./images/170458242-40b1bf88-842c-421a-b562-d64370139b76.jpg)

### How to Filter Tests for a Test Plan

Testomat.io allows users to refine test selection when creating a test plan by filtering tests and excluding unwanted ones.

Tests can be filtered in several ways:

1.  Manually picked up from existing suites.
2.  By Tags.
3.  By Priority.
4.  By Assignee.
5.  By Labels and Custom Fields.

![Testomat.io - Filter tests](./images/Filter.png)

After you applied filters to narrow down the test list, you can exclude unwanted tests by deselecting individual tests from the filtered list **manually by unchecking them one by one** or **excluding multiple tests at once using TQL queries**. This will provide greater flexibility and control during test plan setup.

![Testomat.io - Exclude tests](./images/Exclude_tests.gif)

### How to Assign Users to the Test Run

By default, only the user who created the Test Run is added to it. However, Testomat.io allows you to assign multiple users to one Test Run:

1. Click on **'Manual run'** button.

![Testomat.io - Assign Users](./images/Assign_users_1.png)

2. Click on **'Assign users'** option.

![Testomat.io - Assign Users](./images/Assign_users_2.png)

3. Click on **'Assign to'** dropdown list and select users.

![Testomat.io - Assign Users](./images/Assign_users_3.png)

After selecting users, you can choose an assignment strategy, add a description, select/create a test plan, select an environment, etc., and then launch the test run.

**Test Assignment Strategies:**

- **None:** Users won't be automatically assigned to tests within this run. All users in the run can pick any test to assign, or you, as a manager, can manually assign users when run is started.

- **Prefer test assignee:** The system respects assignments made at the test and suite levels. Tests within this run will be automatically assigned to users responsible for them.

- **Randomly distribute tests between team members:** Tests within this run will be equally split between assigned team members. Manager won't be assigned to any test.

To select Test Assignment Strategies:

1. Assign at least one user to a Test Run.
2. Click on **'Auto-Assign Users'** button.
3. Select a strategy from the list.

![Testomat.io - Assignment Strategy](./images/Assign_strategy.png)

### How to Assign User to Specific Test Cases/Suites within a Test Run

During the Test Run you can assign different users to specific Test Cases, Suites or Folders within one Test Run.

:::note

First, you need to assign users to the Test Run, and only after this you can assign them to specific Test Cases, Suites and Folders.

:::

**To Assign a User to a Suite/Folder:**

1. Open Test Run with assigned users.
2. Click on **'Continue'** button.

![Testomat.io - Assign Suite](./images/Assign_suite.png)

3. Click on **'Assign to'** icon for specific Suite/Folder.
4. Select a user for assignment from the list.

![Testomat.io - Assign Suite](./images/Assign_suite_2.png)

**To Assign a User to Test Cases:**

You can assign specific Test Cases only via **Multi-Select** button.

1. Open Test Run with assigned users.
2. Click **‘Continue’** button.

![Testomat.io - Assign Suite](./images/Assign_suite.png)

3. Click **‘Multi-Select’** button.
4. Select the Test Cases you would like to assign.
5. Click the **'Assign to'** button at the bottom.
6. Select a user for assignment from the list.

![Testomat.io - Assign TC](./images/Assign_TC.png)

7. Click **'OK'** in the **'Are you sure you want to assign (username) to all selected tests?'** pop-up window.

Your Test Cases and Suites are now successfully assigned to different users.

![Testomat.io - Assign TC](./images/Assign_TC_1.png)

### How to Select Environment

To select a testing environment you need:

1. Click on Environment field.
2. Choose the environment that you need.

![CleanShot 2022-05-26 at 12 29 39@2x](./images/170460669-b8b8c3dc-ef75-4b31-a3ba-3dfa7c8d9926.jpg)

### How to Run Tests in RunGroups?

RunGroups allow you to organize test runs into structured folders, making it easier to manage and analyze test execution. By grouping related runs, you can maintain better visibility over different testing phases, environments, or specific test suites.

Before proceeding, make sure you have created a RunGroup. For detailed instructions on how to create and manage RunGroups, refer to this [guide](https://docs.testomat.io/project/runs/managing-runs/#rungroups) for more details.

**Enabling RunGroups for New Runs** (Optional Setting)

This setting is optional and can be enabled if you need it. Overall, you can freely create runs inside and out of groups.

1. Navigate to the **Settings** in the sidebar
2. Click on the **Project** tab
3. In the **Runs settings**, enable the option to require a RunGroup for new runs

![Enable Run Settings](images/att1_214.png)

Once the RunGroup is enabled, you can start your runs within folders. Make sure the **RunGroup Structure** is also enabled.

**Launching Runs in a Folder**

1. Navigate to the **Runs** tab
2. Click the **Manual Run** button

![Manual Run button](images/att2_214.png)

3. Select the required **RunGroup** from the dropdown
4. Click the **Launch** button

![Launch button](images/att4_214.png)

**Important:** If no RunGroup is selected, the field will be highlighted in red, and a warning message will appear, prompting you to choose a group before proceeding.

![Group field is required](images/att3_214.png)

By following these steps, you can organize test runs within RunGroups, ensuring a structured and manageable testing workflow. See the result below:

![Runs into Folders](images/att5_214.png)

**Launching Runs with Test Multiselection**

Ensure the **Require RunGroup for new runs** option is enabled to launch runs for individual tests or suites.

1. Navigate to **Tests**.
2. Enable multiselection.
3. Select one or more individual tests or suites.
4. Click the **Run** button in the bottom menu.
5. In the pop-up window, click **Launch**.

![Runs with multiselect](images/run_tests_multiselect.png)

## Multi Environment Tests

Multi environment tests are used for performing the same tests in different environments. This option is very useful in cases when you need to perform testing with different types of operating systems/ browsers/ devices. They can be performed simultaneously or in a sequence. Let's get a look at this option.

### How to Add More Environments

To add more environment you need to click on the plus button

![CleanShot 2022-05-26 at 12 32 09@2x](./images/170460988-72f3eba4-bb70-49b9-a4a8-9ed0d3b3f0df.jpg)

You will see a pop-up window where you should click on Add Environment button

![CleanShot 2022-05-26 at 12 33 48@2x](./images/170461201-b903576c-71d8-4d76-be43-c242faf59146.jpg)

Then click on Environment field and choose the environment that you need

![CleanShot 2022-05-26 at 12 35 25@2x](./images/170461507-23cf41cf-d92d-4d7c-9eea-63ada1664ed2.jpg)

Once all environments were added click on Save button

![CleanShot 2022-05-26 at 12 41 28@2x](./images/170462854-c2eb8d29-b091-4d32-a26c-da8d515d7b81.jpg)

Now you have environment information updated on Manual Run screen

![CleanShot 2022-05-26 at 12 37 55@2x](./images/170462012-a1b0f380-3a36-411b-ac44-05f448bffbe9.jpg)

### How to Run Multi Environment Tests in Sequence

To run Multi Environment Tests in sequence you need to click on Launch in Sequence button

![CleanShot 2022-05-26 at 12 43 45@2x](./images/170463243-2cfb6d2c-7382-425b-b607-90bd6203236b.jpg)

### How to Run All Multi Environment Tests

To run Multi Environment Tests in sequence you need to click on Launch All button

![CleanShot 2022-05-26 at 12 45 40@2x](./images/170463403-0e791a50-e563-4e9d-8752-0feba409876c.jpg)

## How to Run Tests As Checklist

Checklists are widely used in day-to-day manual testing to quickly execute a set of tests without distracting to the additional details. In this mode, the test description is hidden by default. But you can still view the description when you click on the Description button.

To enable Checklist mode you need to launch Manual Run and switch on the Checklist toggle.

![CleanShot 2022-05-25 at 18 12 38@2x](./images/170297508-40060b9c-ee2f-4b21-aa6d-1de2a6859d98.jpg)

![CleanShot 2022-05-25 at 18 17 58@2x](./images/170298043-aadb7c63-c56e-4086-a512-31c1917665ed.jpg)

![CleanShot 2022-05-25 at 18 35 05@2x](./images/170301515-667bf871-6c49-4059-ae3e-3e561ef92a01.jpg)

## How to Run Test With Steps Execution

Test execution by steps is a feature that enhances manual testing by allowing testers to track and manage the results of individual test steps. This ensures better traceability, improved defect detection, and a structured approach to test execution. By marking each step separately, QA teams gain deeper insights into the testing process and can effectively address issues as they arise.

1. Click the **Runs** in the sidebar
2. Launch a new manual run

![Launch a new run](images/att1_306.png)

3. Select the test with detailed steps you want to execute
4. Mark steps regarding the results:

- Click a step once to mark it as **Passed**
- Click a step twice to mark it as **Failed**
- Click a step three times to mark it as **Skipped**

5. Add a result with a message (optionally) for the test
6. Click **Finish Run** to complete the test execution

![Finish run](images/gif1_306.gif)

Test execution by steps introduces a structured, transparent, and efficient way to conduct manual testing. By breaking down test results into individual actions, QA teams can improve accuracy, streamline defect resolution, and optimize their testing workflow. This feature plays a crucial role in ensuring high-quality software delivery by providing detailed insights into each phase of test execution.

Take a look at how the test result with step execution looks:

![Test execution](images/att2_306.png)

## How to Run Automated Tests Manually

When creating Manual Test Run automated tests are disabled by default.

[![CleanShot 2022-05-27 at 20 33 23@2x](./images/170762169-e5e68098-915a-4822-820a-05483e4de353.jpg)](https://youtu.be/_x7oJ8Rp7xo)

![CleanShot 2022-05-26 at 12 56 14@2x](./images/170465244-e499ce33-aa91-463f-8c3f-8be3dfd4abe7.jpg)

But you can enable them with **Run Automated as Manual** toggle.

![CleanShot 2022-05-26 at 13 04 30@2x](./images/170466621-1cf8b57b-6321-4bd7-97f1-19696f824cb6.jpg)

So can run automated tests manually as regular manual tests and see Code Description for reference

![CleanShot 2022-05-26 at 13 13 12@2x](./images/170468049-5c87bcb2-cf8b-4c03-909d-2cb0a495acae.jpg)

## How Make Changes in the Launched Test Run

As your testing journey unfolds, you might encounter new scenarios that warrant immediate attention. Fear not, Testomat.io provides you with options to inject additional tests into your already launched test runs. Discover how to expand your test scope effortlessly, ensuring that even the most unforeseen scenarios are accounted for without disrupting your testing momentum.

You can update your Test Run any time in few easy steps:

1. Open the Run
2. Click the Edit button

![Add test](./images/1.png)

Let's see what we can do here:

![Edit ongoing test run](./images/2-1.png)

1. Assign more users to the Run
2. Edit title of the Run
3. Add/remove testing environments
4. Add more tests to the Run
5. Add tests from another test plan
6. Don't foget to save ;)

## How to Adjust Test Case Description Block

In case you want to adjust the size of the test description block to see more details without scrolling or to minimize it, you can easily resize it by following these steps:

1. Locate the vertical bar at the bottom of the test description block.
2. Hover your cursor over the bar until it changes to a resize indicator (an up-and-down arrow).
3. Click and hold the left mouse button on the bar.
4. Drag the bar up to decrease the block size or down to increase it.
5. Release the mouse button once you've adjusted the size to your preference.

![Testomat.io - Test Case Description Block Adjustment](./images/Testcase_block_adjustment.png)

This way, you can customize the view to match your workflow.

## Bulk Actions in Test Runs

Managing test cases efficiently is crucial for smooth test execution. With bulk actions, you can perform multiple operations at once, reducing manual effort and saving time. Below are the available bulk actions you can use within test runs.

### How to Reassign Multiple Test Cases

If you need to reassign test cases to a different user, you no longer have to update each test case separately. Instead, follow these easy steps:

1. Click **‘Runs’** button on the sidebar
2. Open the test run you’re working on
3. Click **‘Continue’** button

![reassign test cases](./images/att1_1054.png)

4. Click **‘Multi-Select’** button
5. Select the specific tests you would like to reassign
6. Click the **'Assign to'** button at the bottom
7. Select a user you would like to reassign
8. Click **'OK'** in the **'Are you sure you want to assign (username) to all selected tests?'** pop-up window

This feature significantly reduces manual effort and speeds up the reassignment process during test run.

Let’s check how tests look like after changes.

![reassign test cases](./images/att3_1054.png)

### How to Multi-Select Result Messages for Test Cases

While running tests and selecting the appropriate status with a result message, you can multi-select result messages for test cases. Follow these steps to complete the process:

1. Click **‘Runs’** button on the sidebar
2. Open a test run you’re working on
3. Click **‘Continue’** button

![Run a test](./images/att1_878.png)

4. Click **‘Multi-Select’** button
5. Select the specific tests
6. Click the **‘Result message’** button at the bottom

![Result Message appears](./images/att2_878.png)

7. Select an appropriate status, e.g., **‘PASSED’**
8. Choose a result message, e.g., **‘Expected behaviour’**
9. Also, type a result message in the provided field
10. Click the **‘Apply’** button

![Apply changes](./images/att3_878.png)

This feature allows testers to update multiple test cases efficiently, ensuring consistency in reporting results.

By using bulk actions, you streamline test management, improve workflow efficiency, and maintain consistency across test runs.

Let’s verify the multiple message results in these test cases:

![Bulk result message](./images/gif1_878.gif)

## How to Track Test Time

You may find it useful to track the time spent on runs and specific test cases. For this purpose, Testomat.io has developed flexible time tracking.

The first thing you need to do is start a run. Сlick on the button with the stopwatch icon **(1)** and then click on the **Track** button **(2)**. Every 10 seconds will be displayed in the time record. The time is also displayed next to the title of each test case.

![Testomat.io - Track Test Time](./images/New_0VGArmlZ_2024-11-26.png)

You can stop the tracking time if you need to leave during the testing process. And continue in the same way when you are ready.

![Testomat.io - Pause Tracking](./images/New_Ul6KGUJk_2024-11-26.png)

If necessary, you can set the time manually. Сlick on the button with the stopwatch icon **(1)**, enter the time **(2)** using arrows or enter it from the keyboard and then click on the **Set Time** button **(2)**.

![Testomat.io - Set Time](./images/New_LRNFE60W_2024-11-26.png)

What's more, you can use the **Auto-Track** feature to automatically start the tracking process when you move on to the next test.

![Testomat.io - Auto-Track](./images/New_Iul3pWTV_2024-11-26.png)

At the end of the run, the report will show you the time spent on a particular test case and the total time spent on all the test cases.

![Testomat.io - Run Tracked Time](./images/New_3gSGeoy2_2024-11-26.png)

This can be useful for spreading the workload across all team members in future test runs.

## How to Track Test Case History During One Test Run

During a test run, the state or status of a test case may change multiple times. In some situations it can be important to review the history of all state changes, comments, and statuses for a specific test case before finishing the test run.

For this purpose, Testomat.io provides the test case history feature within the test run, displayed in chronological order beneath the selected test case.

To check the test case history, follow these steps:

1.  Open the test run
2.  Click 'Continue' button

![Testomat.io - Test Case History](./images/test_run.png)

3.  Click on the test case to see last 3 changes
4.  Click the arrow to expand the whole history, if needed

![Testomat.io - Test Case History](./images/test_case_history_1.png)

Now you can see the whole test case history

![Testomat.io - Test Case History](./images/test_case_history_2.png)
