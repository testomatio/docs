---
title: Templates
description: Learn how to create, edit, and apply templates in Testomat.io to standardize your testing and defect reporting workflows. This guide covers template management, configuration, assigning labels, and best practices for optimizing test and suite creation. Streamline processes with default templates and improve efficiency in defect management using pre-configured templates for Jira, GitHub, and other platforms.
type: article
url: https://docs.testomat.io/management/project/templates
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, templates, test templates, defect templates, template management, testing workflow, Jira integration, GitHub integration, test organization, default templates, QA management
---

Templates in Testomat.io empower teams to work faster and more consistently by standardizing how tests, defects, and communications are created and maintained. Whether you're reporting bugs, writing test cases, or sending test run reports to Slack, templates save time, reduce errors, and promote clarity across your QA process.

:::note

To ensure newly created **Notification Templates** are applied correctly, you must also create a new **Notification Rule**.  
Without it, Slack or Microsoft Teams notifications will continue using the default message format with all supported variables.

Learn more: [How to create a Notification Rule](https://docs.testomat.io/integrations/report-notifications/rules/)

:::

## Types of Templates

- **Test Template**: used to define the structure and content for individual test cases;
- **Suite Template**: used to define the structure and content of individual test suites/folders;
- **Code Template**: used to define the default code structure for automated tests with dynamic variables to simplify test automation;
- **Defect Template**: used to automatically prefill the issue summary and description fields when reporting defects to integrations like Jira, GitHub, or Azure;
- **Meta Template**: used to define custom metadata fields that are shown in test run reports and help enrich report context;
- **Notification Template (Slack / MS Teams)**: used to customize the structure and content of automated messages sent to Slack or Microsoft Teams after a test run is completed;

:::note

For **BDD projects**, only **Defect, Meta, and Notification** templates are supported.

:::

## Managing Templates

Use the Templates section in Settings to create, edit, or delete reusable content structures for tests, suites, code, defects, meta fields, and notifications.

### How To Create Templates

All templates share a similar creation flow:

1. Navigate to **Settings** in the sidebar
2. Click on **Templates**
3. Click the **+ New Template** button

![Create a New Template](./images/att11_6270.png)

Once the **Add template** sidebar opens,

4. Fill in the following fields:

- **Title** (required): enter a unique title and optionally add tags using @ syntax (e.g., @smoke);
- **Type** (required): select the template type from the dropdown: test, suite, code, meta, defect, notification-slack, or notification-ms-teams;
- **Default** (optional): set this template as the default by clicking the star icon;

:::note

Marking a template as default means it will be auto-applied every time you create a new test, suite, defect, or notification — saving time and keeping your structure consistent.

:::

- **Set labels**: click to open an additional sidebar where you can select from existing Labels and Custom Fields. Only items that were previously configured (as described in the <a href="https://docs.testomat.io/advanced/tags-labels/#how-to-add-labels--custom-fields" target="_blank">How to Add Labels & Custom Fields</a>) will be available for selection. To use new ones, you must define them first using the linked guide;
- **Add variables** (optional): сhoose from available variables for the selected template type, shown in the dropdown list;
- **Body** (required): add the template body using Markdown syntax and dynamic variables;

5. Click **Save** button to apply changes or **Cancel** button to discard

![Save template](./images/att2_6270.png)

:::note

Additional **Set labels** configuration is available only for **Test and Suite** templates.

:::

### How To Edit Templates

1. Navigate to **Settings** in the sidebar
2. Click **Templates**
3. Click a template you want to edit
4. Modify content as needed
5. Click **Update** button to save changes

![Edit Templates](./images/att3_6270.png)

### How To Delete Templates

1. Navigate to **Settings** in the sidebar
2. Click **Templates**
3. Click the **Delete** icon next to needed template
4. Click the **Delete** button in the **'Are you sure?'** pop-up to confirm deletion

![Delete template](./images/att4_6270.png)

:::note

Default templates do not have a **Delete** icon. To delete a default template, you must first assign another template as a default.

:::

## Using Variables in Templates

Templates in Testomat.io support dynamic content by using variables. Variables are selected from a dropdown and automatically inserted in a conditional format, ensuring they are rendered only if data exists.

**Insertion format:**

`{{#if variable}}### Label: **{{ variable }}**{{/if}}`

### Supported Variables

Below is an overview of which variables are supported for each template type:

#### Test Templates

| **Variable**       | **Inserted As**                                                              |
| ------------------ | ---------------------------------------------------------------------------- |
| `test.title`       | `{{#if test.title}}### Title: **{{ test.title }}**{{/if}}`                   |
| `test.description` | `{{#if test.description}}### Description: **{{ test.description }}**{{/if}}` |
| `test.tags`        | `{{#if test.tags}}### Tags: **{{ test.tags }}**{{/if}}`                      |
| `test.labels`      | `{{#if test.labels}}### Labels: **{{ test.labels }}**{{/if}}`                |
| `test.steps`       | `{{#if test.steps}}### Steps: **{{ test.steps }}**{{/if}}`                   |
| `test.attachments` | `{{#if test.attachments}}### Attachments: **{{ test.attachments }}**{{/if}}` |

#### Suite Templates

| **Variable**        | **Inserted As**                                                                |
| ------------------- | ------------------------------------------------------------------------------ |
| `suite.title`       | `{{#if suite.title}}### Title: **{{ suite.title }}**{{/if}}`                   |
| `suite.description` | `{{#if suite.description}}### Description: **{{ suite.description }}**{{/if}}` |
| `suite.tags`        | `{{#if suite.tags}}### Tags: **{{ suite.tags }}**{{/if}}`                      |
| `suite.labels`      | `{{#if suite.labels}}### Labels: **{{ suite.labels }}**{{/if}}`                |
| `suite.tests`       | `{{#if suite.tests}}### Tests: **{{ suite.tests }}**{{/if}}`                   |

#### Code Templates

| **Variable**        | **Inserted As**                                                                      |
| ------------------- | ------------------------------------------------------------------------------------ |
| `test.title`        | `{{#if test.title}}### Title: **{{ test.title }}**{{/if}}`                           |
| `test.description`  | `{{#if test.description}}### Description: **{{ test.description }}**{{/if}}`         |
| `test.body`         | `{{#if test.body}}### Body: **{{ test.body }}**{{/if}}`                              |
| `suite.title`       | `{{#if suite.title}}### Suite Title: **{{ suite.title }}**{{/if}}`                   |
| `suite.description` | `{{#if suite.description}}### Suite Description: **{{ suite.description }}**{{/if}}` |

#### Defect Templates

**Test-related Variables**

| **Variable**       | **Inserted As**                                                                       |
| ------------------ | ------------------------------------------------------------------------------------- |
| `test.title`       | `{{#if test.title}}### Test: **{{ test.title }}**{{/if}}`                             |
| `test.id`          | `{{#if test.id}}### Test ID: **{{ test.id }}**{{/if}}`                                |
| `test.priority`    | `{{#if test.priority}}### Test Priority: **{{ test.priority }}**{{/if}}`              |
| `test.tags`        | `{{#if test.tags}}### Test Tags: **{{ test.tags }}**{{/if}}`                          |
| `test.labels`      | `{{#if test.labels}}### Test Labels: **{{ test.labels }}**{{/if}}`                    |
| `test.jiraissues`  | `{{#if test.jiraissues}}### Test Link to: **{{ test.jiraissues }}**{{/if}}`           |
| `test.assignee`    | `{{#if test.assignee}}### Test Assigned to: **{{ test.assignee }}**{{/if}}`           |
| `test.steps`       | `{{#if test.steps}}### Test Steps: **{{ test.steps }}**{{/if}}`                       |
| `test.attachments` | `{{#if test.attachments}}### Test Attachment URLs: **{{ test.attachments }}**{{/if}}` |

**Testrun-related Variables**

| **Variable**          | **Inserted As**                                                                    |
| --------------------- | ---------------------------------------------------------------------------------- |
| `testrun.title`       | `{{#if testrun.title}}### Testrun: **{{ testrun.title }}**{{/if}}`                 |
| `testrun.status`      | `{{#if testrun.status}}### Status: **{{ testrun.status }}**{{/if}}`                |
| `testrun.message`     | `{{#if testrun.message}}### Message: **{{ testrun.message }}**{{/if}}`             |
| `testrun.stack`       | `{{#if testrun.stack}}### Stack: **{{ testrun.stack }}**{{/if}}`                   |
| `testrun.attachments` | `{{#if testrun.attachments}}### Attachments: **{{ testrun.attachments }}**{{/if}}` |
| `testrun.assignee`    | `{{#if testrun.assignee}}### Assignee: **{{ testrun.assignee }}**{{/if}}`          |
| `testrun.retries`     | `{{#if testrun.retries}}### Retries: **{{ testrun.retries }}**{{/if}}`             |

**Run-related Variables**

| **Variable**      | **Inserted As**                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| `run.title`       | `{{#if run.title}}### Run: **{{ run.title }}**{{/if}}`                                  |
| `run.executed`    | `{{#if run.executed}}### Run Executed by: **{{ run.executed }}**{{/if}}`                |
| `run.assignee`    | `{{#if run.assignee}}### Run Assigned to: **{{ run.assignee }}**{{/if}}`                |
| `run.creator`     | `{{#if run.creator}}### Run Created by: **{{ run.creator }}**{{/if}}`                   |
| `run.environment` | `{{#if run.environment}}### Run Environment: **{{ run.environment }}**{{/if}}`          |
| `run.finished`    | `{{#if run.finished}}### Run Finished at: **{{ run.finished }}**{{/if}}`                |
| `run.created`     | `{{#if run.created}}### Run Created at: **{{ run.created }}**{{/if}}`                   |
| `run.duration`    | `{{#if run.duration}}### Run Duration: **{{ run.duration }}**{{/if}}`                   |
| `run.project`     | `{{#if run.project}}### Run Project: **{{ run.project }}**{{/if}}`                      |
| `run.tests`       | `{{#if run.tests}}### Run Tests count: **{{ run.tests }}**{{/if}}`                      |
| `run.id`          | `{{#if run.id}}### Run ID: **{{ run.id }}**{{/if}}`                                     |
| `run.plan`        | `{{#if run.plan}}### Run Plan: **{{ run.plan }}**{{/if}}`                               |
| `run.passed`      | `{{#if run.passed}}### Run Passed count: **{{ run.passed }}**{{/if}}`                   |
| `run.failed`      | `{{#if run.failed}}### Run Failed count: **{{ run.failed }}**{{/if}}`                   |
| `run.skipped`     | `{{#if run.skipped}}### Run Skipped count: **{{ run.skipped }}**{{/if}}`                |
| `run.failures`    | `{{#if run.failures}}### List of Failed Launch Test IDs: **{{ run.failures }}**{{/if}}` |
| `run.labels`      | `{{#if run.labels}}### Run Labels: **{{ run.labels }}**{{/if}}`                         |
| `run.attachments` | `{{#if run.attachments}}### Run Attachment URLs: **{{ run.attachments }}**{{/if}}`      |

**Report-related Variables**

| **Variable**   | **Inserted As**                                                       |
| -------------- | --------------------------------------------------------------------- |
| `report.title` | `{{#if report.title}}### Report Title: **{{ report.title }}**{{/if}}` |
| `report.id`    | `{{#if report.id}}### Report ID: **{{ report.id }}**{{/if}}`          |

#### Meta Templates

| **Variable**    | **Inserted As**                                                    |
| --------------- | ------------------------------------------------------------------ |
| `project.value` | `{{#if project.value}}### Project: **{{ project.value }}**{{/if}}` |

#### Notification Templates

| **Variable**      | **Inserted As**                                                                         |
| ----------------- | --------------------------------------------------------------------------------------- |
| `run.title`       | `{{#if run.title}}### Run: **{{ run.title }}**{{/if}}`                                  |
| `run.executed`    | `{{#if run.executed}}### Run Executed by: **{{ run.executed }}**{{/if}}`                |
| `run.assignee`    | `{{#if run.assignee}}### Run Assigned to: **{{ run.assignee }}**{{/if}}`                |
| `run.creator`     | `{{#if run.creator}}### Run Created by: **{{ run.creator }}**{{/if}}`                   |
| `run.environment` | `{{#if run.environment}}### Run Environment: **{{ run.environment }}**{{/if}}`          |
| `run.finished`    | `{{#if run.finished}}### Run Finished at: **{{ run.finished }}**{{/if}}`                |
| `run.created`     | `{{#if run.created}}### Run Created at: **{{ run.created }}**{{/if}}`                   |
| `run.duration`    | `{{#if run.duration}}### Run Duration: **{{ run.duration }}**{{/if}}`                   |
| `run.project`     | `{{#if run.project}}### Run Project: **{{ run.project }}**{{/if}}`                      |
| `run.tests`       | `{{#if run.tests}}### Run Tests count: **{{ run.tests }}**{{/if}}`                      |
| `run.id`          | `{{#if run.id}}### Run ID: **{{ run.id }}**{{/if}}`                                     |
| `run.plan`        | `{{#if run.plan}}### Run Plan: **{{ run.plan }}**{{/if}}`                               |
| `run.failures`    | `{{#if run.failures}}### List of Failed Launch Test IDs: **{{ run.failures }}**{{/if}}` |
| `run.labels`      | `{{#if run.labels}}### Run Labels: **{{ run.labels }}**{{/if}}`                         |
| `run.attachments` | `{{#if run.attachments}}### Run Attachment URLs: **{{ run.attachments }}**{{/if}}`      |

:::note

If a variable is empty or undefined, the section will not be rendered.

:::

## Applying Templates

Templates aren't just about saving time — they help you work smarter and more consistently across your entire testing workflow.

**Key Benefits** of Using Templates:

- Save time by avoiding repetitive manual input
- Ensure consistency across test cases, suites, defects, and reports
- Improve clarity in communication with development teams
- Standardize formatting and enforce team-wide structure
- Automate integration content for tools like Jira, GitHub, Slack, etc.
- Enable reuse of best practices and proven formats

Whether you're reporting a defect, creating a new test case, or sending notifications to Slack — templates make your process faster, cleaner, and more scalable.

Templates can be applied either:

- **Automatically** — when marked as default;
- **Manually** — when selected during test, suite, or defect creation;

### Applying Templates To Tests And Suites

1. Go to **Tests** tab
2. Open the relevant test case or suite in **Edit** mode
3. Select the needed template in the **Use Template** dropdown or keep a default one

![Use Test or Suite Templates](./images/att5_6270.png)

4. Confirm your selection - the template will be applied to the current item

If the selected test or suite already contains text, a confirmation window will appear:

- You are going to apply test (suite) template. Existing text will be deleted.
- Otherwise, if the test or suite is empty, this confirmation will be skipped and the template will be applied immediately.

![Confirm the selection](./images/att6_6270.png)

The selected template will automatically populate the fields (like title or description) using the defined variables.

::: note

When you create a new test or suite, the default template (if configured) will be applied automatically. This helps ensure consistent formatting and structure without manual selection.

:::

### Applying Code Templates

1. Go to **Tests** tab
2. Open the relevant test case in the **Code template** tab
3. Select the needed template in the extra menu

![Applying Code Template](./images/att7_6270.png)

Once selected, the code will automatically update — no manual edits needeed.

![Confirmation message](./images/att8_6270.png)

### Applying Templates To Defects

Testomat.io supports integration with a wide range of issue management systems, including:

- Jira
- GitHub
- Azure DevOps
- Linear
- ClickUp
- YouTrack
- GitLab
- Shortcut
- Confluence pages

Learn more: [How to connect to an Issue Management System (IMS)](https://docs.testomat.io/integrations/issues-management/#connect-to-ims)

Once the integration with your preferred issue management system is set up and linked, you can easily create and link issues directly from your test runs using predefined templates.

1. Go to **Runs** tab
2. Open the relevant ongoing run
3. Click the **Continue** button

![Continue ongoing run](./images/att9_6270.png)

4. Click the **Link Defect** in the failed test

![Link Defect button](./images/att10_6270.png)

5. Click the **Create new issue** button

![Create new issue button](./images/att12_6270.png)

In the **Create new issue** window, just fill in the required fields:

6. Select profile (e.g. Jira Integration) from the dropdown list
7. Select Jira Issue Type from the dropdown list (e.g. Bug)
8. Select Template from the dropdown to apply Defect Templates to automatically prefill the summary and description fields
9. Add a title to the field
10. Write an optional description to the body if needed
11. Click the **'Create Jira Issue'** button

![Create Jira Issue](./images/att13_6270.png)

Once the issue is created:

- An icon will appear next to the test case — it includes a direct link to the created issue;
- A confirmation message will show with a direct link to the created issue;

![Link Jira ticket](./images/att14_6270.png)

### Applying Meta Templates

1. Go to **Runs** tab
2. Open the relevant ongoing run
3. Click the **Continue** button

![Continue ongoing run](./images/att9_6270.png)

4. Click the **Edit metafields** button under the test result

5. Fill in the **Key** and **Value**
6. Click the **Save** button

![Save meta data](./images/att15_6270.png)

7. Click the **Finish Run** button

![Finish Run button](./images/att16_6270.png)

8. Open the test in run report to see how meta data is applied

![Meta template is applied](./images/att17_6270.png)

### Applying Notification Template

Unlike other template types, **there is no manual option to select a Notification Template** during a test run or when sending report notifications.

Once you have configured Slack or Microsoft Teams integration via the [Slack Notification](https://docs.testomat.io/integrations/report-notifications/slack/) or [MS Teams Notification](https://docs.testomat.io/integrations/report-notifications/ms-teams/), and created a default Notification Template, it will be automatically applied to all notifications triggered by your configured Notification Rules.

![Notification Template](./images/att18_6270.png)

:::note

If no Notification Template is configured, the system will automatically generate the notification message using **all supported variables** in the default layout.

:::

## Best Practices

- Regularly review and update templates to ensure relevance
- Utilize labels and tags strategically for efficient organization
- Encourage collaboration to create standardized templates across teams
