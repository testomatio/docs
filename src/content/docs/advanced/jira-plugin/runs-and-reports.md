---
title: Runs & Reports in Jira
description: Learn how to run manual, automated, or mixed test executions in Jira using the Testomat.io plugin. This guide covers configuring advanced settings, executing test runs.
type: article
url: https://docs.testomat.io/advanced/jira-plugin/runs-and-reports
head:
  - tag: meta
    attrs:
      name: keywords
      content: Jira plugin, Testomat.io, test runs, test plan, test execution, manual run, mixed run, automated run, CI/CD, test reports, test analytics
---

With the **Testomat.io Jira plugin**, you can execute and manage test runs without leaving Jira. Run manual, automated, or mixed tests, configure environments and advanced options, and review detailed execution reports — all directly inside your Jira issues.

This page explains how to:

- Launch **Manual**, **Mixed**, or **CI/CD** runs from Jira
- Configure **advanced execution settings** (environment, assignee, RunGroup)
- Access **real-time results** and **reports** synchronized with Testomat.io

## Run Flow

Testomat.io supports three types of test executions **directly in Jira**:

- **Manual Run** - execute tests manually
- **Automated Run (CI/CD)** - execute automated tests via connected CI service
- **Mixed Run** - run a combination of manual and automated tests in a single execution

Choose the type of run that fits your workflow and follow the detailed steps below to execute tests directly in Jira.

### How to Launch a Manual Run

You can execute manual tests directly from Jira — all tests linked to the issue or test plan will be included automatically. You can launch a Manual Run in Jira in three different ways:

**Option 1** – From the '...' Menu on the **Tests** Tab

1. Navigate to the **Tests** tab
2. Click the '...' (extra menu) button
3. Select **Schedule Run** from the dropdown list

![Schedule Run](./images/att48_401.png)

4. Once the **'Select tests to run'** window appears, select the tests you want to execute
5. (Optional) Enable **Run as Checklist** toggle
6. (Optional) Enable **Run Automated as Manual** toggle

![Select tests to run](./images/att49_401.png)

7. (Optional) Open the **Advanced settings** to select:

- **Environment** – select where the tests will run (e.g., macOS, Chrome)
- **Assign User** – set who is responsible for this run
- **RunGroup** – group related runs for tracking and reporting
- **Title** - provide a title for the run

8. Click **'Create Run'** to start execution

![Create Run button](./images/att50_401.png)

9. Mark all tests with spesific status (e.g., Passed ✔, Failed ✖, Skipped –)
10. Click the **Finish Run** button

**Option 2** – Using the 'Run' Button on the **Tests** Tab

1. Navigate to the **Tests** tab
2. Click the '✔ Run' button on the **Tests** tab
3. In the **'Select tests to run'** dialog, choose the tests you want to include
4. (Optional) Enable **Run as Checklist toggle**
5. (Optional) Enable **Run Automated as Manual toggle**

![Select tests to run](./images/att51_401.png)

6. (Optional) Use **Advanced settings** to select:

- **Environment** – select where the tests will run (e.g., staging, production)
- **Assign User** – set who is responsible for this run
- **RunGroup** – group related runs for tracking and reporting
- **Title** - provide a title for the run

7. Click **'Create Run'** to start execution

![Create Run](./images/att52_401.png)

8. Mark all tests with spesific status (e.g., Passed ✔, Failed ✖, Skipped –)
9. Click the **Finish Run** button

**Option 3** – From the **'Plans'** Tab

1. Navigate to the **Plans** tab in the Jira issue
2. Click the **▶︎ icon** (Launch a plan) next to the linked Plan
3. or click the **⚙︎ icon** (Launch with advanced options)

![Launch a plan](./images/att53_401.png)

When the Run Settings window opens

4. (Optional) Enable **Run as Checklist toggle**
5. (Optional) Enable **Run Automated as Manual toggle**
6. Configure Advanced Settings:

- **Environment** – select where the tests will run (e.g., staging, production)
- **Assign User** – set who is responsible for this run
- **RunGroup** – group related runs for tracking and reporting
- **Title** - provide a title for the run

7. Click **'Create Run'** to start execution
8. Mark all tests with spesific status (e.g., Passed ✔, Failed ✖, Skipped –)
9. Click the **Finish Run** button

### How to Launch an Automated Run (CI/CD)

**Option 1** – From the '...' Menu on the **Tests** Tab

1. Click the '...' (extra menu) button on the **Tests** tab
2. Select **Run in CI** from the dropdown list

:::note

If your CI service is not connected, you will see the message: 'Continuous Integration service is not enabled. Connect a CI service to run automated tests from the Testomat.io Jira Plugin.' To enable CI runs, connect your preferred [CI/CD service](https://docs.testomat.io/integrations/continuous-integration/) in your Testomat.io project settings.

:::

3. In the **'Select tests to run'** dialog, choose the tests you want to include
4. Configure Advanced Settings:

- **Title** - provide a title for the run
- **CI profile** – select the CI configuration profile for automated test execution
- **Enter config here** – specify custom CI parameters or environment variables (YAML/JSON format supported)
- **Assign user** - set an assignee for the run
- **RunGroup** - group related runs

5. Click **'Create Run'** to start execution

**Option 2** – From the **'Plans'** Tab

1. Navigate to the **Plans** tab in the Jira issue
2. Click the **▶︎ icon** (Launch a plan) next to the linked Plan
3. or click the **⚙︎ icon** (Launch with advanced options)

![Launch a plan](./images/att53_401.png)

Once the Manual Run Settings window opens

4. (Optional) Enable **Run as Checklist toggle**
5. (Optional) Enable **Run Automated as Manual toggle**
6. Configure Advanced Settings:

- **CI profile** – select the CI configuration profile for automated test execution
- **Enter config here** – specify custom CI parameters or environment variables (YAML/JSON format supported)
- **Assign user** - set an assignee for the run
- **Environment** – select the desired test environment

7. Click **'Create Run'** to start execution
8. Mark all tests with spesific status (e.g., Passed ✔, Failed ✖, Skipped –)
9. Click the **Finish Run** button

### How to Launch a Mixed Run

A **Mixed Run** allows you to execute both automated and manual tests within a single run. This option is useful when part of your test suite is automated, but some tests still require manual verification.

You can launch a Mixed Run in Jira in two different ways:

**Option 1** – From the '...' Menu on the **Tests** Tab

1. Click the '...' (extra menu) button on the **Tests** tab
2. Select **Mixed Run** from the dropdown list

:::note

If your CI service is not connected, you will see the message: 'Continuous Integration service is not enabled. Connect a CI service to run automated tests from the Testomat.io Jira Plugin.' To enable CI runs, connect your preferred [CI/CD service](https://docs.testomat.io/integrations/continuous-integration/) in your Testomat.io project settings.

:::

3. In the **'Select tests to run'** dialog, choose the tests you want to include
4. (Optional) Configure Advanced Settings:

- **CI profile** – select the CI configuration profile for automated test execution
- **Enter config here** – specify custom CI parameters or environment variables (YAML/JSON format supported)
- **Assign user** - set who is responsible for this run
- **RunGroup** - group related runs for tracking/reporting

5. Click **'Create Run'** to start execution

**Option 2** – From the **'Plans'** Tab

1. Navigate to the **Plans** tab in the Jira issue
2. Click the **▶︎ icon** (Launch a plan) next to the linked Plan
3. or click the **⚙︎ icon** (Launch with advanced options)

![Launch a plan](./images/att53_401.png)

Once the Manual Run Settings window opens

4. (Optional) Enable **Run as Checklist toggle**
5. (Optional) Enable **Run Automated as Manual toggle**
6. Configure Advanced Settings:

- **CI profile** – select the CI configuration profile for automated test execution
- **Enter config here** – specify custom CI parameters or environment variables (YAML/JSON format supported)
- **Assign user** - set who is responsible for this run
- **RunGroup** - group related runs for tracking/reporting

7. Click **'Create Run'** to start execution
8. Mark all tests with spesific status (e.g., Passed ✔, Failed ✖, Skipped –)
9. Click the **Finish Run** button

## Test Run Reports

Testomat.io provides built-in reporting for test runs:

- **Execution Summary** – passed, failed, and skipped tests with trends over time.
- **Area-Specific Stability** – performance insights by feature or module.
- **Flaky & Failed Tests** – highlights recurring issues or unstable tests.
- **Top Errors** – most frequent failure messages for fast debugging.

Reports can be exported or shared with stakeholders for transparent communication and project monitoring.

## Data Sync in Jira

Testomat.io and Jira are continuously synchronized to ensure test data stays up to date across both systems.

**Automatic Sync**

All key updates are automatically synchronized:

- When you execute a test run in Testomat.io, the corresponding Jira issue is updated with the latest run status and summary
- When you launch or update a run from Jira, Testomat.io reflects these changes instantly
- Linked test cases, environments, and results remain aligned in both systems

This real-time sync helps both QA and development teams stay on the same page without manual updates.

**Manual Sync**

If your Jira issue view or run list does not show the latest data, you can trigger synchronization manually.

To manually refresh data:

1. Open the Tests or Runs tab in the Jira issue
2. Click the '⋯' (extra menu) button
3. Select **Sync** from the dropdown list

Testomat.io will re-fetch the latest information and update linked test results or run statuses inside Jira. This keeps your Jira and Testomat.io data fully consistent — whether you rely on automatic background sync or perform a quick manual refresh when needed.

## Test Execution Coverage

- **Sprints Coverage**

The Sprints Coverage view shows how well your active or completed Jira sprints are covered by test runs in Testomat.io. This allows QA and project managers to identify untested stories or features before the sprint closes. You can open the detailed report directly in Testomat.io for insights on passed/failed test counts per sprint.

- **Tests Coverage**

The Tests Coverage section displays the overall relationship between Jira issues (stories, tasks, or epics) and linked test cases. It helps ensure that all features have adequate testing coverage and that every issue has at least one associated test. Coverage data updates automatically when tests are executed or linked via the plugin.
