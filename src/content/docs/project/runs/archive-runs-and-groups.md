---
title: Archive Runs & RunGroups
description: Testomat.io's archiving feature helps users maintain a clean and organized Runs Dashboard by moving irrelevant test runs and groups to dedicated archive sections. This guide details how to archive single or multiple runs/groups, access archived data with filtering capabilities, manage data retention periods, and unarchive items to restore them to the main view, ensuring historical data preservation and efficient focus.
type: article
url: https://docs.testomat.io/project/runs/archive-runs-and-groups
head:
  - tag: meta
    attrs:
      name: keywords
      content: managing test runs, rungroups, test management, Testomat.io, multi-selection, archiving, test reporting, filtering, archive runs, archive rungroups, rungroup structure, run report, unarchive runs, unarchive rungroups, data organization.
---

## How to Archive Runs & RunGroups

Archive provides you with the ability to declutter the main Runs Dashboard, ensuring only relevant and active test runs take center stage while preserving historical data.

You can archive Runs or Groups at any time.

**Archive a Single Run or RunGroup:**

1. Сlick the **'Extra menu'** button for Run/Group you want to archive.
2. Click the **'Archive'** button.

![Testomat.io - Archive runs](./images/Archive_Run_2.png)

3. Click the **'Confirm'** button to archive the run.

![Testomat.io - Confirm runs](./images/Archive_Run_3.png)

OR

Use **'Multi-select'** to archive several Runs simultaneously (this option is for Runs only, not RunGroups).

**Archive Multiple Runs simultaneously:**

1. Click the **'Multi-select'** icon to enable multi-selection.
2. Select runs you want to archive.
3. Click the **'Archive'** button.

![Testomat.io - Archive runs](./images/Archive_Run_4.png)

4. Click the **'Confirm'** button to archive the runs.

![Testomat.io - Confirm runs](./images/Archive_Run_5.png)

Archived Runs or Groups are removed from the main Runs board and got the **archived** badge.

![Testomat.io - Archived badge](./images/Archive_Run_6.png)

:::note

When a Run or RunGroup containing unfinished (Pending) tests is archived, the run status changes to **Terminated**. All **Pending** tests become **Skipped**, while tests in other statuses remain **unchanged**.

![Pending status](./images/att5_3703.png)

:::

**To access archived Runs/RunGroups:**

- Click on **'Runs/Groups Archive'** section at the bottom of the page.

![Testomat.io - Run overview](./images/Archive_Run_1.png)

OR

- Click the **'Extra menu'** button at the top right corner and select the specific archive section that you need.

![Testomat.io - Run overview](./images/Archive_Run_1a.png)

Manually archive runs that are no longer in focus, to maintain a clean and organized main board tailored to your ongoing testing priorities.

## Runs Archive

Archived runs find a new home in the dedicated **'Runs Archive'** section. This segregated space ensures that your archived data is easily accessible without cluttering the main board. The Runs Archive comes equipped with filtering capabilities.
To view all filtering options, click on **'Filter'** icon.

![Testomat.io - Runs Archive](./images/Archive_Run_8.png)

:::note

By default, Testomat.io automatically purges all runs (archived and non-archived) older than 90 days on a daily basis. But you have the flexibility to adjust this retention period based on your project requirements. This will allow you to keep the perfect balance between data cleanliness and historical record preservation.

:::

You can change the default purge period in two ways:

1. On **'Runs Archive'** page click the **'Extra menu'** button.
2. Clickthe **Purge Old Runs** button.

![Testomat.io - Runs Archive](./images/Archive_Run_9.png)

3. Specify the period after which runs will automatically purge daily.
4. Click the **'Save'** button.

![Testomat.io - Runs Archive](./images/Archive_Run_10.png)

Alternatively, specify the term on **'Project Settings'** page.

![Testomat.io - Runs Archive](./images/Archive_Run_11.png)

Additionally, all archived runs can be displayed as a group, which can be organized by enabling the **'Rungroup Structure'** toggle.

![Testomat.io - Rungroup Structure button](./images/Archive_Run_12.png)

Testomat.io also allows you to view the Run Report of an archived test run by simply clicking on it.

![Testomat.io - Run Report](./images/Archive_Run_13.png)

## Groups Archive

Archived RunGroups are located in a separate section called **'Groups Archive'**. You can search, filter, and sort archived RunGroups to quickly find what you need.

**Search** — use the search field in the toolbar to find archived RunGroups by name. Results update instantly as you type, showing the number of groups found. Click **x** to clear the search.

![Search](./images/att1_3703.png)

**Filter** — click the **'Filter'** icon to filter archived RunGroups by:

- **Group type** — Build, Release, or Sprint
- **Finish Range** — a specific date range when the group was finished

![Filters](./images/att2_3703.png)

**Sort** — click the **'Sorting'** button in the top-right corner to sort groups by:

- **ASC by Name** — alphabetically A→Z
- **DESC by Name** — alphabetically Z→A
- **ASC by Date** — oldest finished first
- **DESC by Date** — newest finished first

![Sorting](./images/att3_3703.png)

By clicking on an archived RunGroup, you can see the RunGroup Report.

![RunGroup Archive Report](./images/att4_3703.png)

## How to Unarchive Runs & RunGroups

- Archived runs and groups can be unarchived. This allows you to display them on the main panel.
- Restoring a RunGroup also restores all its archived runs.

**Unarchive Runs:**

1. Сlick the **'Extra menu'** button for the run.
2. Select the **'Unarchive'** option from the dropdown menu.

![Testomat.io - Unarchive Runs Archive](./images/Archive_Run_17.png)

3. Click **'Confirm'** button.

![Testomat.io - Unarchive Runs Archive](./images/Archive_Run_18.png)

OR

Use **'Multi-select'** to unarchive a few Runs simultaneously.

1. Click the **'Multi-select'** icon to enable multi-selection.
2. Select the runs you want to unarchive.
3. Click the **'Unarchive'** button.

![Testomat.io - Archive runs](./images/Archive_Run_21.png)

4. Click the **'Confirm'** button to unarchive the runs.

![Testomat.io - Confirm runs](./images/Archive_Run_22.png)

**Unarchive RunGroups:**

1. Сlick the **'Extra menu'** button for the RunGroup.
2. Select the **'Unarchive'** option from the dropdown menu.

![Testomat.io - Unarchive Groups Archive](./images/Archive_Run_19.png)

3. Click the **'Confirm'** button.

![Testomat.io - Unarchive Groups Archive](./images/Archive_Run_20.png)
