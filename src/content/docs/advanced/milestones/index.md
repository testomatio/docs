---
title: Milestones
description: Discover Testomat.io's Milestones feature to support structured test management across your development cycles. Learn how to create, activate, and assign milestones to track testing progress and generate analytics reports.
type: article
url: https://docs.testomat.io/advanced/milestones
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Milestones, test management, development cycles, testing scope, create milestone, assign milestone, milestone activation, state management, project scoping, milestone types, sprint tracking, release tracking, audit logs, milestone analytics, progress reports
---

Testomat.io introduces **Milestones** to support structured test management across your development cycles.

In software development, a **milestone** represents a significant checkpoint or phase in a project (e.g., release, sprint, or major delivery). It is used to group work, track progress, and evaluate results within a defined scope and timeline.

**With Milestones in Testomat.io, you can:**

- Create milestones to define testing scope for a specific phase.
- Assign tests and test runs to a milestone.
- Execute tests within the context of a milestone.
- Generate reports based on milestone results.

This enables end-to-end test management aligned with project phases, providing clear visibility into progress and outcomes for each milestone.

## How to Create a Milestone

**Milestone** lives at the **company-level** but can be scoped down to specific projects. It's a tracking mechanism (like a Sprint, Release, or Version) that can be linked to various items in the system (Tests, Suites, Plans, Runs, Rungroups, Requirements). Milestones help organize and track work across related items with state management, automatic propagation, and project scoping.

**To create Milestone:**

1. Navigate to **'Milestones'** tab from the main workspace dashboard.
2. Click **'Create Milestone'** button.

![Testomat.io - Create Milestone](./images/create_milestone_1.png)

3. **Title:** Enter a name for your milestone (Required).
4. **Type:** Enter a name of category (e.g., Sprint, Release, Iteration, Phase). Milestones are grouped by type. You can create multiple types. If left blank, the system defaults to the **'Milestone'** type.
5. Fill in optional fields as needed:
- **Start date & Release date:** Your start date must occur before or on the release date.
- **Description & goals:** Detail what this milestone aims to achieve.
- **External URL:** Link directly to your matching sprint in Jira, GitHub, or internal tracking documentation.
- **Projects:** Select the specific projects that can access this milestone. By default, it is shared with all projects within the company.
6. **Show milestone in lists:** (Enabled by default). When enabled, this milestone appears in the tests, suites, runs, and plans lists. Turn this off to hide deprecated, archived, or legacy milestones from daily dropdown selection menus while safely preserving historical links attached to old test runs or plans.
7. Click **'Create'** button.

![Testomat.io - Create Milestone](./images/create_milestone_2.png)

After milestone is created, it automatically appears in the list on **'Milestones'** page and can be assigned to test, suites, plans and runs. Milestone can be activated at any time.

:::note

Milestones are automatically grouped by type name in a case-insensitive manner. For example, entering `"Sprint"` or `"sprint"` maps them to the exact same milestone type category. New milestones automatically inherit project scope settings from existing sibling milestones of the same type to keep your environment synchronized.

:::

## How to Edit & Delete Milestone

You can modify or remove milestones at any point using two different ways: from main **'Milestones'** page and from the **'Milestone details'** page.

**Edit a milestone from the main 'Milestones' page:**

1. Click on three dot to open the extra menu for selected milestone.
2. Click **'Edit'** button.

![Testomat.io - Edit Milestone](./images/edit_milestone_1.png)

3. Apply your updates in the **'Edit Milestone'** modal and click **'Save'**.

![Testomat.io - Edit Milestone](./images/edit_milestone_2.png)

**Edit a milestone from the 'Milestone details' page:**

1. Click on milestone name.

![Testomat.io - Edit Milestone](./images/edit_milestone_1a.png)

2. Click **'Edit'** button.

![Testomat.io - Edit Milestone](./images/edit_milestone_2a.png)

3. Apply your updates in the **'Edit Milestone'** modal and click **'Save'**.

![Testomat.io - Edit Milestone](./images/edit_milestone_3a.png)

**Delete a milestone from the main 'Milestones' page:**

1. Click on three dot to open the extra menu for selected milestone.
2. Click **'Delete'** button.

![Testomat.io - Edit Milestone](./images/delete_milestone_1.png)

3. Click **'Delete milestone'** button to confirm your action.

![Testomat.io - Edit Milestone](./images/delete_milestone_2.png)

Milestone as well can be deleted from the **'Milestone details'** page:

![Testomat.io - Edit Milestone](./images/delete_milestone_1a.png)

:::note

Deleting a milestone removes its association and unlinks it from all projects, tests, and runs. Your historical test execution results, runs, and core project data remain completely untouched.

:::

## How To Activate a Milestone

To avoid confusion about what your team is currently working on, **only one milestone of the same type can be active at a time.**

**To activate milestone:**

1. Click **'Activate'** button.

![Testomat.io - Activate Milestone](./images/activate_milestone_1.png)

2. Confirm action on **'Activate Milestone'** modal.

![Testomat.io - Activate Milestone](./images/activate_milestone_2.png)

When you activate a milestone, Testomat.io automatically shifts any previously active milestone of that same type into a **Closed** state and timestamps the exact moment of closure (`closed_at`).

![Testomat.io - Activate Milestone](./images/activate_milestone_3.png)

### Expired Milestone Warnings

If a milestone reaches its target **Release Date** but has not been manually marked as **Closed**, the system keeps it open but automatically flags it as **Expired**.

This automatic status change provides a clear visual indicator on your team dashboards, helping you instantly spot slipping deadlines, overdue deliverables, or uncompleted tasks that require immediate attention.

![Testomat.io - Expired Milestone](./images/expired_milestone.png)

## How to Assign Milestones

You can associate milestones with six distinct structural components: **Test, Suite, Plan, Run, Rungroup, Requirement**.

**Core Rules of Milestone Linking:**

1. **Smart Link Switching**

An item can only belong to one milestone per type at a time. If a test case is currently linked to `Sprint 1` and you assign it to `Sprint 2`, the system automatically replaces it. Don't worry — milestones of other types (for ex. `Release v1.0`) will stay perfectly intact.

2. **Automatic Downward Sharing (Cascading)**

You don't need to manually assign a milestone to hundreds of individual test cases. When you link a milestone to a parent container, the system automatically shares it downwards to all nested elements in the background:

- **Suites:** Assigning a milestone to a Suite cascades it to **all tests inside that suite**.

- **RunGroups:** Assigning a milestone to a RunGroup cascades it to all test runs inside that group automatically.

**Steps to Assign a Milestone:**

1. Go to **'Tests'** page.
2. Select the Suite or individual item you want to map.
3. Click the **'Set milestone'** label in the details panel.
4. Select one or more milestones across your available types.
5. Click **'Save'** button.

![Testomat.io - Assign Milestone](./images/assign_milestone_1.gif)

Same logic applies to any other entity a milestone can be assigned to.

## Filter by Milestone

Testomat.io allows you to filter your tests, suites, runs, and plans by Milestone using either the regular interface filter or the advanced Testomatio Query Language (TQL) filter.

### Using the Interface Filter

1. Open the Tests, Runs, or Plans tab.
2. Click on the **Filter dropdown** at the top of the list.
3. Select your Milestone Type (e.g., Sprint or Release) and choose the specific milestone from the list.
4. Click **'Apply'** button to apply selected filter.

The workspace will dynamically update to show only the items linked to that milestone.

![Testomat.io - Filter by Milestone](./images/filter_milestone_1.png)

### Using Advanced TQL Filters

For more complex queries or when building custom dashboards, you can use the TQL console to filter by milestone properties.

1. Open the Tests, Runs, or Plans tab.
2. Click 'Query Language Editor' icon at the header of the page.
3. Enter filter query.
4. Click **'Apply'** button.

![Testomat.io - Filter by Milestone](./images/filter_milestone_2.png)

## Milestone Analytics & Progress Reports

### Version Tracking & Audit Logs

Every time a milestone is linked or unlinked from an item, Testomat.io records an audit trail. This version record documents exactly who made the change, when it occurred, and which artifact was modified, making history tracking seamless.

You can review this real-time history stream on the **'Pulse'** page.

![Testomat.io - Audit log Milestone](./images/audit_log_milestone_1.png)

### Milestone Dashboards

Clicking on any **milestone name** opens three dedicated reporting views designed to measure your development and testing velocity:

1. **Milestone Tests:** Displays an automated breakdown of test outcomes, detailing total execution history, pass/fail rates, and overall success percentages for the specific milestone scope.

![Testomat.io - Milestone Tests Dashboard](./images/milestone_tests_dashboard.png)

2. **Milestone Completion:** Evaluates overall readiness by tracking total assigned items against fully executed and partially executed tasks to calculate an overall milestone completion percentage.

![Testomat.io - Milestone Tests Dashboard](./images/milestone_completion_dashboard.png)

3. **Milestone Run Stats:** Provides deeper technical execution insights, detailing your automation vs. manual testing ratios, current defect/bug counts, and a helpful list of slow-running tests impacting pipeline speed.

![Testomat.io - Milestone Tests Dashboard](./images/milestone_runstats_dashboard.png)

:::note

If a single milestone is shared across multiple projects, Testomat.io dynamically aggregates data from all participating projects into a unified, company-wide health report.

![Testomat.io - Milestone Dashboard](./images/milestone_dashboard_1.png)
:::
