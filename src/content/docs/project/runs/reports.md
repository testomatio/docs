---
title: Run Reports
description: Learn how Testomat.io generates comprehensive Run Reports for both manual and automated tests, offering basic and extended views. This guide covers features like filtering, sorting, customizing report layouts, viewing test case history, and accessing run statistics. It also details options for downloading reports as spreadsheets or PDFs, sharing reports via email or public links, and comparing test runs for in-depth analysis.
type: article
url: https://docs.testomat.io/project/runs/reports
head:
  - tag: meta
    attrs:
      name: keywords
      content: managing test runs, run reports, rungroups, test management, Testomat.io,multi-selection, test reporting, sharing reports, test run statistics, customize test cases view, download run report, run report in Spreadsheet, export run report, PDF format, Share Run Report, Share Report by Email, Share Report Publicly, Public Report, Combined Report.
---

When you run tests with Testomat.io, the system generates a **Run Report** displaying your test results. You can view these reports in two ways: **basic view** and **extended view**. Let's explore each option.

## Run Report Basic View

Clicking on the Test Run will toggle Run Report screen in basic view.

![Testomat.io - RunReport](./images/Run_Report_1.png)

**In this basic Run Report, you can:**

1. View a list of test cases.
2. Check their statuses (Passed, Failed, Skipped, Pending, Custom statuses).
3. Review general information on the Run Result.

![Testomat.io - RunReport](./images/Run_Report_2.png)

4. Sort test cases by suite, test case names or failure status.
5. Filter test cases by status, type, added messages, custom statuses, or assignees.

![Testomat.io - RunReport](./images/Run_Report_7.png)

6. Search test cases by title or message.

![Testomat.io - RunReport](./images/Run_Report_8.png)

7. Customize test cases view - (learn more in the [How to Customize Test Cases View](https://docs.testomat.io/project/runs/reports/#how-to-customize-test-cases-view) section).

![Testomat.io - RunReport](./images/Custom_view_8.png)

Additionally, click on any test case within the run report to open it and view its details.

![Testomat.io - RunReport](./images/Run_Report_3.png)

Moreover, you can view the history of run results for selected test case by filtering them by group name, defects, labels or environment.

![Testomat.io - Test result history in RunGroup](./images/Run_Report_4.gif)

You can also check overall **Statistics** by suites/tags/labels/assignees/priorities/custom statuses for the selected test run.

![Testomat.io - Test run Statistics](./images/Run_Report_5.gif)

### How to Customize Test Cases View

Testomat.io allows you to customize the dispalay of test cases within a Run Report.

**This feature helps you:**

- **Show or hide columns** such as test status, duration, labels, tags, priority, etc.
- **Focus only on the data** most reelvant to you or your team.
- **Tailor the report layout** for different review needs.

To cusmozite your Run Report view, follow next steps:

1. Select any Run.
2. Click the **'Custom view'** button to open the configurable view instantly.

![Testomat.io - RunReport Customization](./images/Custom_view_9.png)

3. Click the **'Settings'** icon to access **'Runs List Settings'**.
4. Adjust Run view:

- Select/deselect columns to show only the data you need.
- Set each column width (px), to suit your preferences (or leave empty for automatic sizing).

5. Click the **'Save'** button to apply your changes.

![Testomat.io - RunReport Customization](./images/Custom_view_10.png)

You can also adjust each column width manually, in this case changes will save automatically.

![Testomat.io - RunReport Customization](./images/Custom_view_11.gif)

:::note

Customized Test Cases view within a Run Report automatically applies to all Run Reports.

:::

### Tree View for Runs

Runs can be displayed in a hierarchical tree structure that mirrors the test organization. To switch to tree view, open a run and click the tree view icon in the top right corner of the test list.

You can:

* Expand folders
* Collapse sections
* Navigate large test sets faster
* Focus on specific areas of a project

:::note

This is particularly useful for large projects containing hundreds or thousands of tests.

:::

## Run Report Extended View

If you click the **'Report'** button from Basic Run Report view, you will see the extended view of the Run Report.

![Testomat.io - RunReport](./images/Run_Report_6.png)

**In the extended report view, you can:**

1. View a list of tests.
2. Check their status (Passed, Failed, Skipped, Pending, Custom statuses).
3. See overview of all executed tests grouped by suites, tags, labels, assignees, or priorities.
4. Review the Run Report Summary.

![Testomat.io - RunReport](./images/Run_Report_9.png)

5. Check **'Flaky Tests'** Analytics, if applicable.

![Testomat.io - RunReport](./images/Run_Report_12.png)

6. Sort suites by Name and Failed status (as well works for Tags, Labels, Assignees, Priorities, Custom Statuses) in the Overview widget.

![Testomat.io - RunReport](./images/Run_Report_10.gif)

7. Filter test cases by status, type, added messages, custom statuses, or assignees.

![Testomat.io - RunReport](./images/Run_Report_11.gif)

8. Search test cases by title or message.

![Testomat.io - RunReport](./images/Run_Report_13.png)

:::note

Use ↓ and ↑ keys to navigate tests and quickly view details for each test.

![Report view](./images/gif2_7537.gif)

:::

Similar to the basic run report view, click on a test case to see its details or the history of run results.

![All tabs view](./images/gif1_7537.gif)

## RunGroup Report

The same as for Runs, you can also view RunGroups Reportes.
To open **RunGroup Report basic view**, simply click on its name - RunGroup Report window will be displayed with general information and runs summary.

![Testomat.io - Test Runs in a created RunGroup](./images/RunGroup_6.png)

For more information go to the [RunGroup Report Basic View](https://docs.testomat.io/project/runs/rungroups#rungroup-report-basic-view) section **'RunGroups'** page.

From RunGroup Report Basic View you can open **Combined Report for RunGroups**, by clicking on the **'Combined Report'** button. This Report is designed to help you aggregate and analyze the results of multiple test runs within a single view. You can find more information about this report in [Combined Report for RunGroups](https://docs.testomat.io/project/runs/rungroups/#combined-report-for-rungroups) section on **'RunGroups'** page.

## How to Download Run Report as Spreadsheet

Testomat.io allows you to export Run Reports as a spreadsheet (XLSX file) to obtain your test data.

**Download Multiple Run Reports in One File**:

1. Go to Runs.
2. Enable **'Multi-select'**.
3. Select the Runs you want to download.
4. Click the **'Extra menu'** button.
5. Select **'Download'** option.

![Testomat.io - export as Spreadsheet](./images/Export_1.png)

**Download a Separate Run Report**:

1. Go to Runs.
2. Select a Run Report.
3. Click the **'Report'** button.

![Testomat.io - export as Spreadsheet](./images/Export_2.png)

4. Click the **'Extra menu'** button.
5. Select **'Download as Spreadsheet'** option.

![Testomat.io - export as Spreadsheet](./images/Export_3.png)

## How to Export Run Report in PDF Format

Testomat.io also allows you to export your test run results as a PDF report. This feature enables easy sharing and archiving of test outcomes outside of Testomat.io.

**You can generate a structured PDF report with test execution details in two ways:**

1. Go to Runs.
2. Select a Run Report.
3. Click the **'Extra menu'** button.
4. Select **'Export as PDF'** option.

![Testomat.io - export as PDF](./images/Export_4.png)

**OR**

1. Go to Runs.
2. Select a Run Report.
3. Click the **'Report'** button.

![Testomat.io - export as PDF](./images/Export_5.png)

4. Click the **'Extra menu'** button.
5. Select **'Export as PDF'** option.

![Testomat.io - export as PDF](./images/Export_6.png)

**Example of Test Run Report in PDF format**

![Testomat.io - export as PDF](./images/Export_7.png)

**Use cases for PDF Reports:**

- **Sharing results with stakeholders:** Quickly generate a portable summary of test outcomes for product owners, QA managers, or external partners who may not have access to the platform.

- **Audit and compliance documentation:** Maintain a formal record of test results in a fixed format for compliance, certification, or audit purposes.

- **Team retrospectives and reviews:** Use the PDF report to review test coverage and outcomes during retrospectives or sprint reviews without relying on live access to the system.

## How to Share Run Report

You can share your Run Report for external access from the Extended report view using two options: **'Share Report by Email'** or **'Share Report Publicly'**.

### Share Report by Email

1. Open Extended report view.

![Testomat.io - Share Report](./images/Expend_view.png)

2. Click the **'Extra menu'** button.
3. Select **'Share Report by Email'** option.

![Testomat.io - Share Report](./images/Share_Report_1.png)

4. Enter one or multiple emails, separated with commas, in the displayed modal.
5. Click the **'Send'** button.

![Testomat.io - Share Report](./images/Share_Report_2.png)

:::note

This action also creates public report without passcode for external access.

:::

**Example of the email with Run Report**

![Testomat.io - Share Report](./images/Share_Report_3.png)

### Share Report Publicly

:::note

To enable the **'Share Report Publicly'** option, first enable this feature at the **Company level** and then enable it on **Project level** (Project Settings -> Project -> ‘Sharing’ section).
Check the instruction in the [Share Options](https://docs.testomat.io/management/company/administration/#share-options) section on **'Administration'** page.

:::

1. Open Extended report view.

![Testomat.io - Share Report](./images/Expend_view.png)

2. Click the **'Extra menu'** button.
3. Select **'Share Report Publicly'** option.

![Testomat.io - Share Report](./images/Share_Report_4.png)

4. Select **'Expiration Date'** (7 days is set by default).
5. **'Protect by passcode'** is enabled by default for better security (you can disable it if needed).
6. Click the **'Share'** button in the displayed modal.

![Testomat.io - Share Report](./images/Share_Report_5.png)

7. Copy the **URL** for sharing the report.
8. Copy and share the **Passcode** with the link.

:::note

Copy and save the **Passcode** in a secure place. For security reasons, you will not be able to see it again after the Run Report Public URL is generated.

If a shared run report is protected with a **Passcode**, only users with the valid **Passcode** will have access to it.

:::

9. Copy and share the **Expiration date**, if needed.

![Testomat.io - Share Report](./images/Share_Report_6.png)

After the Run Report Public URL is generated, **'Share'** button will be displayed on the Extended run report page.

![Testomat.io - Share Report](./images/Share_Report_7.png)

:::note

You can stop sharing at any time by clicking the **'Stop Sharing'** button.

![Testomat.io - Share Report](./images/Share_Report_8.png)

:::

Users with access to **'Public Run Report'** can:

1. Filter test cases by statuses.
2. Search test cases by name.
3. Copy the URL for sharing the Run report.
4. Check **'Full Report'** (only users with project access).

![Testomat.io - Share Report](./images/Share_Report_9.png)

## Compare Test Runs

Select test runs to see a visual display of their similarities and differences. Compare your run reports and analyze them by parameters such as Flaky, Reviewed, Degraded, and more.

To compare Runs:

1. Enable Multiselection.
2. Select the Runs you want to compare.
3. Click the **'Compare'** button.

![Testomat.io - Compare Test Runs](./images/compare-runs.gif)

This feature is also available for RunGroups, allowing you to compare test results from different runs within a single RunGroup. You can find more information about it in the [Combined Report for RunGroups](https://docs.testomat.io/project/runs/rungroups/#combined-report-for-rungroups) section on **'RunGroups'** page.
