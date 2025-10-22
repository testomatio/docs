---
title: Download Manual Tests as Files
description: Learn how to manage manual tests using Git version control by exporting them from Testomat.io as Markdown files. This guide details how to export tests, track changes locally, write and update tests using a code editor, and then seamlessly import changes back into Testomat.io using the CLI. This workflow aligns manual testing with modern DevOps practices, offering full history, branching, and collaborative editing benefits.
type: article
url: https://docs.testomat.io/project/import-export/download-tests-as-files/download-manual-tests-as-files
head:  
  - tag: meta
    attrs:
      name: keywords
      content: Export to Markdown, Testomat.io, manual tests, Git repository, version control, import from Markdown, CLI, track changes, Markdown files, mixed projects, create new tests, update existing tests, bulk edit, delete tests, change project structure, test management, export, import, Markdown Support.
---

## Export & Version Control Manual Tests in Git (Markdown Support)

You can now **export your manual tests as Markdown files directly into your Git repository** and keep them under version control by using **'Export to Markdown'** feature.

This allows your team to write, edit, and track changes to manual test cases just like code — with full history, branching, and collaboration benefits that Git offers.

**Key benefits:**

- **Export manual tests to Markdown** – keep human-readable test cases in your repository.
- **Import manual tests via CLI** – instantly sync Markdown changes from Git into Testomat.io.
- **Version control for manual tests** – review, revert, and track changes over time.
- **Write and modify in your editor** – use your favorite IDE to create or update test cases.

## How to Export Manual Tests to Markdown

To begin managing your manual test cases as files:

1. Create a directory on your computer where you want to export the tests.

![Testomatio - Export to markdown](./images/Export_as_markdown_1.png)

2. Open Terminal with the created project directory.

![Testomatio - Export to markdown](./images/Export_as_markdown_2.png)

3. Open your project in Testomat.io on **'Tests'** page.
4. Click **'Extra menu'** button.
5. Select **'Export to markdown'** option.

![Testomatio - Export to markdown](./images/Export_as_markdown_3.png)

6. Select your OS from the dropdown list.
7. Copy the displayed pull command.

![Testomatio - Export to markdown](./images/Export_as_markdown_4.png)

8. Run the export command in your project directory to download tests from Testomat.io.

![Testomatio - Export to markdown](./images/Export_as_markdown_5.png)

Congrats! Your tests are downloaded from Testomat.io and created in Markdown format. 

![Testomatio - Export to markdown](./images/Export_as_markdown_6.png)

Now you can find your project in the previously created folder.

![Testomatio - Export to markdown](./images/Export_as_markdown_7.png)

**What Gets Exported?**

- All test suites and tests from your current project.
- Test IDs, descriptions, priorities, labels, tags and structure are preserved in the generated files.

To continue working with your manual test cases and manage them locally as files, it’s highly recommended to use **Git Version Control**.

In order to do this, you need:

1. Open the directory with exported tests in your text editor.

![Testomatio - Export as markdown](./images/Export_as_markdown_8.png)

![Testomatio - Export as markdown](./images/Export_as_markdown_9.png)

2. Run `git init` command in the Terminal.
3. Go to **'Source control'** tab in your editor.
4. Stage all changes.
5. Click **'Commit'** button.

![Testomatio - Export as markdown](./images/Export_as_markdown_10.png)

6. Confirm your action to commit changes.

![Testomatio - Export as markdown](./images/Export_as_markdown_11.png)

![Testomatio - Export as markdown](./images/Export_as_markdown_12.png)

Your tests now reside right next to your application code in Git, so you can start updating exported suites and test cases, adding new ones, or deleting irrelevant tests.

![Testomatio - Export as markdown](./images/Export_as_markdown_13.png)

## User Scenario for Export to Markdown

Imagine you’re working on a new product release and your QA team collaborates closely with developers.
Instead of switching back and forth between Testomat.io and your code editor, the **manual test cases** live right next to your application code in Git.

- A developer spots a missing step in a test case and updates the Markdown file in their branch.
- The change is committed, reviewed in a pull request, and merged into main.
- The updated test case is automatically synced back into Testomat.io via CLI.

This workflow makes test case management seamless, collaborative, and fully traceable — aligning your manual testing process with modern DevOps practices.

## User Scenario for Mixed Projects

If you are working on a Mixed project (have both manual and automation tests), with **Export to Markdown** feature you can export your manual tests to the same directory as your automation tests. This will allow you to manage all tests in one place.

## What You Can Do with Tests Exported as Files

After your project is downloaded to Markdown you can:

- Create new tests and suits.
- Update existing tests, including using **Bulk Edit** to modify multiple tests (add/change tags, labels, custom fields, or priority).
- Delete tests that are not longer relevant.
- Change project structure.

### Create New Suites/Tests

To create a new test, you need to add:

1. The **Test Header** (required).
  <!-- test -->

**Test Header** elements can include:
- **Email of test creator** (if not added, defaults to 'Unknown user').
- **Priority**: low, normal, high, important, ctitical (if not set up, defaults to 'normal').
- **Tags** (optional) - can be added in the header or test title. You can create and add new Tags, or use existing.
- **Labels and Custom Fields** (optional) - can only be added in the header. **Important!** You can only use Labels and Custom fields that already exist in your project.

2. Test title (Start with `#`).
3. Test description with Requirements, Pre-conditions, Steps and Expected Results in Markdown format.

:::note

Don't add the ID as it will be created automatically after tests are synced into Testomat.io.

:::

**Example of structure for Test Case:**

```
<!-- test
priority:
creator: creator_email@gmail.com
tags:
labels:
-->

# Test Title

### Requirements

### Steps

1. Step 1
  **Expected Result**: For Step 1.

2. Step 2
  **Expected Result**: For Step 2.

3. Step 3
  **Expected Result**: For Step 3.
```

![Testomatio - Export as markdown](./images/Add_test_markdown_1.png)

:::note

The **Header** for Suites has a slightly different structure:

```
<!-- suite
emoji: 
labels:
-->
```
:::

### Update Existing Suites/Tests

Update the description for an existing suite/test in the markdown format.
If you need to change/add a specific Step, Pre-condition, Priority, Tags, Labels, etc. for multiple tests, you can do this using **Bulk edit**.

![Testomatio - Export as markdown](./images/Bulk_edit_test_markdown_1.gif)

### Delete Irrelevant Tests

Simply delete the irrelevant suites/tests from the file and save the changes before the import process.

### Change Project Structure

You can update your Project structure by moving suites or tests within the file. After the import, your Project will be displayed with the new structure.

![Testomatio - Export as markdown](./images/Change_structure_test_markdown_1.gif)

## How to Import Manual Tests from Markdown

Once you have finished updating the test cases in the file system, use the **'Import from Markdown'** feature to import all the changes into Testomat.io.

:::note

Before importing your tests back to Testomat.io you must:

1. **Save** and **commit** your changes.

2. **Pull latest changes** from Testomat.io before importing to avoid accidentally overwriting data inside Testomat.io. First, run the same command that you used for exporting tests `npx check-tests@latest pull` to pull your tests and fetch latest data from Testomat.io. Verify all changes. Then you can upload them back. In case you use Git, this would be the safest way to deal with tests. Alternatively, you can use `--force option`.

:::

To **'Import from Markdown'** you need:

1. Open your project in Testomat.io on **'Tests'** page.
2. Click **'Extra menu'** button.
3. Select **'Import from markdown'** option.

![Testomatio - Import from markdown](./images/Import_from_markdown_1.png)

4. On the displayed **'Import Project from Source Code'** page select **'Manual tests (markdown files)'** from the **'Project Framework'** dropdown list.

![Testomatio - Import from markdown](./images/Import_from_markdown_2.png)

5. Select **'Markdown'** option from the **'Project Language'** dropdown list for a **Classical Project**.
6. Select your OS from the dropdown list.
7. Copy the displayed push command.

![Testomatio - Import from markdown](./images/Import_from_markdown_3.png)

8. Run the import command in your project directory to sync tests back to Testomat.io.

After your tests are imported back to Testomat.io, all new tests will be automatically synced to the project without additional confirmation and all updated tests will be displayed with **'out of sync'** label and will required confirmation from your side. You can use **'Out of Sync'** filter to find all of them, so you can verify and save the changes.

Each test with **'out of sync'** label should be verified manually one by one.

**To check and save changes for updated tests:**

1. Click on **'Out of Sync'** label.

![Testomatio - Import from markdown](./images/Out_of_Sync_1.png)

2. Open the test you want to check.
3. Click **'Compare Description'**.

![Testomatio - Import from markdown](./images/Out_of_Sync_2.png)

4. There are 2 options on this Step:
- Click **'Revert to Previous'** button if you want to cancel the changes.

OR

- Click **'Keep Current'** button if you want to save the changes.

![Testomatio - Import from markdown](./images/Out_of_Sync_3.png)

:::note

By clicking on **'Mark as Sync'** button you can sync the test with the latest changes.

![Testomatio - Import from markdown](./images/Out_of_Sync_4.png)

:::