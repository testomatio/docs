---
title: Test Case Creation and Editing
description: Learn how to create and manage test cases effectively in Testomat.io. This guide covers building test scenarios, applying various test design techniques, and integrating them into your workflow for streamlined test management and automation.
type: article
url: https://docs.testomat.io/project/tests
head:
  - tag: meta
    attrs:
      name: keywords
      content: test case creation, test design, test management, test automation, testing tools, Testomat.io, software testing, test scenarios, automated tests, testing workflow
---

When a new project is created, there are multiple options to start:

![Choose what to do next](./images/2023-08-03_00.37.59@2x.png)

1. Create new suite and start adding tests
2. Import automated tests from source code
3. Import tests from CSV file from another Test Management System

## Creating a Test

Tests are created within a suite.

![Create suite](./images/2023-08-03_00.40.35@2x.png)

To create a new suite use "+" button or input field.
Open a newly created suite.

To add a new test to the suite you are currently in, click on **New Test** button.

![Create a test](./images/2023-08-03_00.42.32@2x.png)

Then input the name and the description of your test.

![Create test name and test description](./images/2023-08-03_00.45.26@2x.png)

It is also possible to create the test straightaway from this screen. Simply input the test's title and click on the **Create** button. You can add the description at any time later.

![Quick test creation](./images/2023-08-03_00.49.14@2x.png)

Repeating these steps, you can easily add as many tests as you need within a reasonable period of time.

Also, you can use shortcut commands to create/edit Test Cases or Suites. Visit the [Keyboard Shortcuts](https://docs.testomat.io/usage/keyboard-shortcuts/) page to learn more.

## Edit Steps in Test Case Preview

After your test cases are created, Testomat.io offers a convenient feature for quick editing - **Edit Steps**. This allows you to modify steps and expected results directly from the test case preview page.

To use this feature, ensure that the **Steps** title is included in the test case description. Once that is set, you will see the **Edit Steps** option near the **Steps** title.

To edit steps from the test case preview window, follow these steps:

1. Click the Edit Steps button.

![Edit steps](./images/Edit_steps_1.png)

2. Click Add Step button on displayed modal.

![Edit steps](./images/Edit_steps_2.png)

3. Add steps and expected results, if needed.
4. Click Save button.

![Edit steps](./images/Edit_steps_3.png)

Example of test case after editing:

![Edit steps](./images/Edit_steps_4.png)

:::note

If you want to use the **Edit Steps** feature on a test case that already has steps added, be aware that it will affect the previous formatting!

:::

For example, if you used the pattern displayed below, after clicking **Edit Steps** you need to delete **Expected result** wording as it will be added automatically after you save changes.

```
## Steps

* Step 1
    Expected result: Step 1
* Step 2
    Expected result: Step 2
* Step 3
    Expected result: Step 2
```

Test Case before editing:

![Edit steps](./images/Edit_steps_5.png)

Test Case after editing:

![Edit steps](./images/Edit_steps_6.png)

## How To Save Your Tests

Testomat.io Editor offers options designed to streamline your test and suite management workflow. Lets have look:

![saving options](./images/save_tests.png)

Save: promptly save your changes while staying on the current test.

Save + View Test: save your work while immediately viewing the test in question.

Save + Go To Suite: save your changes and seamlessly navigate to the suite you're working on.

Save + Close All: ensures all open tests and suites are saved and closed simultaneously.

## Add Attachments to Test

First of all, you need to open the test that you want to add the attachment to.

![Open test](./images/2023-08-03_01.05.06@2x.png)

Click on the **Attachments** tab.

![Open attachments](./images/2023-08-03_01.06.27@2x.png)

Add your attachment via **Browse a file** or simply drag and drop it.

![Click on attachments](./images/2023-08-03_01.07.03@2x.png)

You can also add attachmennts to the test descrption:

1. Click on the **Attachment** button.
2. Select a file from your PC, or drag and drop it onto the area. You can also paste a file from the clipboard.
3. Click on the image that has been downloaded.

![Testomatio.io - Insert attachment in a test description](./images/New_9mLj3wh3_2024-10-07.png)

Once you have completed the steps, you will see the attachment in the test case description:

![Testomatio.io - Insert attachment in a test description](./images/New_8DanPb4g_2024-10-08.png)

## How to Resize Attached Images in a Test Case

All images attached to a test case are displayed on the preview page at their default size.

To change the size of an attached image for a better view, follow these steps:

1. Hover over the attachment.
2. Click on the displayed button.

![Testomatio.io - Image resize](./images/resize_image.png)

By clicking on the resize button on one image, all attachments in the test case will automatically resize.

## Add Drawing to Test

Including drawings in test case descriptions can improve clarity by visually representing complex UI layouts and interactions that are difficult to explain through text alone.

To add a drawing to a test case, enter the edit mode and click on the **Draw** button.

![Testomatio.io - Draw Editor](./images/New_OwQMWpps_2024-10-07.png)

You'll see a window with a set of drawing tools. You can select different elements from the top panel (2) and apply styles to them from the side panel (3). When you are done with the drawing, click on the **Save** button (4).

![Testomatio.io - Draw Tools](./images/New_VxPGvi8Y_2024-10-07.png)

After saving the changes in the edit mode, you will see a preview of the drawing in the test case description:

![Testomatio.io - Draw Preview](./images/New_1hpi4Xy4_2024-10-07.png)

## How to Preview Attachments

Testomat.io provides a built-in previewer that allows you to check files directly in your browser, without the need of downloading them just to check their contents.

1. On **'Tests'** page open Test Case (Suite/Folder).
2. Go to **'Attachments'** tab.
3. Click on any attachment to open the preview window.
4. Adjust your view: Click the **'Fit to width/height'** or **'Full screen'** buttons to optimize the display.

![Testomatio.io - Attachments Preview](./images/Preview_attach_1.gif)

4. Use keyboard combinations to navigate between attached files.

![Testomatio.io - Attachments Preview](./images/Preview_attach_2.png)

**Supported Preview Formats:**

In addition to standard image files, you can preview the following types:

- **Code & Data:** `.json`, `.xml`, `.html`, `.sql`, `.js`, `.py`, `.java`, `.svg`

- **Logs & Text:** `.txt`, `.log`, `.properties`, `.csv`

- **Scripts:** `.bat`, `.sh`

- **Documents:** `.pdf`

![Testomatio.io - Attachments Preview](./images/Preview_attach_3.gif)

:::note

If a file type is not supported for preview, the system will prompt you to download it to view it locally.

:::

## How to Delete Attachment from Test Case

Save time by quickly deleting unnecessary attachments, ensuring your test cases remain relevant and clutter-free. To delete attachment:

1. On **'Tests'** page open Test Case.
2. Click **'Attachments'** tab.
3. Click **'Delete'** icon on the attachment you want to delete.

![Testomat.io - Delete attachment](./images/Delete_attachment_1.png)

4. Confirm action.

![Testomat.io - Delete attachment](./images/Confirm_deleting_1.png)

OR

1. On **'Tests'** page open Test Case.
2. Click **'Edit'** button.

![Testomat.io - Delete attachment](./images/Delete_attachment_2.png)

3. Click **'Attachments'** tab inside edit mode.
4. Click **'Delete'** icon on the attachment you want to delete.

![Testomat.io - Delete attachment](./images/Delete_attachment_3.png)

5. Confirm action and Save changes.

:::note

All deleted Attachments are stored for 30 days before being permanently deleted.

:::

## How to Restore Deleted Attachment

Before the attachment is permanently deleted from the store, you can restore it. To do that:

1. Open test case (or suite case) with deleted attachments you want to restore.
2. Open **'Attachments'** tab.
3. Click **'Restore'** button.

![Testomat.io - Restore Deleted Attachment](./images/Restore_attachment_1.png)

4. Click on a single attachment to restore it.
5. Click **'Restore All'** button to restore all attachments with one click.

![Testomat.io - Restore Deleted Attachment](./images/Restore_attachment_2.png)

## How to Add a Label/Tag to a Test

This option is the easiest one! You simply need to add the label's name (preceeded by @ char) in the name field of the test. The drop-down list of tags already used in projects appears, when you type the @ symbol.

![Add tag to a test](./images/New_926xDzhS_2024-08-13.png)

And now you can see your label/tag in the test list next to the test's title.

![See the test with tag](./images/2023-08-03_01.01.17@2x.png)

## How to Assign a Test to a User

If you want to assign a certain test to a certain user, you should click on this user icon in the upper right corner of the window, as shown in the picture.

![Assign user](./images/2023-08-03_01.10.41@2x.png)

Assign a user from the list of users added to the project by clicking on the user's name. Please note, that you need to make sure the intended user is added to the project first!

![Choose user](./images/2023-08-03_01.12.09@2x.png)

Now you can see that this test is assigned to a certain user. The user icon has changed accordingly.

![See assigned person](./images/2023-08-03_01.12.54@2x.png)

## Test Priority

**Priority** helps teams quickly understand the importance of a test and focus on the most critical scenarios first. By assigning a priority, you can better organize test cases, improve visibility, and efficiently manage execution and reporting.

**Priority can be:**

- set when creating a new test
- changed at any time while editing an existing test
- updated in bulk for multiple tests at once
- used to filter tests
- visually identified via an icon displayed next to the test title

**Priority visibility:**

- priority icon is displayed next to each test title
- priority icon is displayed in the test tree

This allows teams to instantly focus on the most important tests.

### Available Priority Levels

Testomat.io supports the following priority levels:

- **Low** – low-importance test
- **Normal** – default priority
- **High** – high-importance test
- **Important** – important test
- **Critical** - critical/blocker test

Each priority level has a dedicated icon to make test importance easily recognizable across the interface.

### How to Set Priority When Creating a Test

When creating a new test, you can assign a priority directly from the test editor:

1. Navigate to the **'Tests'** page.
2. Click the **'+ Test'** button.
3. Select a suite for test.
4. Click the **'Select'** button.

![Select destination](./images/att2_1457.png)

5. Click the **'Priority icon'** to open the list of available priorities next to the **'New Test'** indicator.
6. Select the required priority.
7. Enter the test title.
8. Save the test — the selected priority will be applied.

![Set priority](./images/att1_1457.png)

:::note

If no priority is selected, the test has **normal** priority by default. Consider setting a higher priority for tests that are critical or blockers.

:::

### How to Change Priority When Editing a Test

You can update the priority of an existing test at any time:

1. Navigate to the **'Tests'** page.
2. Open the test you want to edit.
3. Click the **'Priority icon'** next to the **'Edit Test'** indicator.
4. Click on the desired priority.
5. Save the test — the changed priority will be applied.

![Change Priority](./images/att3_1457.png)

The icon will update immediately to reflect the selected priority.

### How to Bulk Assign (Change) Priority

You can change the priority for multiple tests at once to save time and quickly update large test sets.

1. Navigate to the **'Tests'** page.
2. Enable **'multi-select'** button and select tests using the checkboxes.
3. Click the **'Priority'** button at the bottom of the screen.
4. In the popup, select the desired priority (e.g., important).
5. Click **'Apply'** button.

![Bulk Assign Priority](./images/att5_1457.png)

All selected tests will immediately update to the new priority, and the icons will reflect the change.

### How to Filter Tests by Priority

Testomat.io allows you to filter tests by Priority, making it easy to:

- focus on High or Important tests during regression or smoke testing.
- quickly narrow down large test suites.
- combine Priority filtering with other filters such as tags, a state or an assignee.

![Filter by priority](./images/att4_1457.png)

## How to Add Dynamic Parameters to a Test

Lets start with definition of **'Dynamic Parameters'**.

While standard parameters define your data set, **Dynamic Parameters** are the placeholders you use within your test steps or description. They act as variables that are automatically swapped with real values from your parameter table during execution.

This ensures that a single test script can dynamically change its behavior or input data for every iteration without you having to write multiple versions of the same test.

Parameters are used to create data-driven tests. Each parameter will be treated as a separate test during a manual or automated run.

**To add parameters to your test**:

1. Navigate to **‘Tests’** in the sidebar.
2. Select specific test.
3. Click the **'Extra button'** icon.
4. Select **'Add Parameter'** from the menu.

![Add_Parameter](./images/dynamic_param_1.png)

After a modal with instructions will appear,

5. Add parameter headers:

- Enter a name for the header.
- A new **'Parameter header'** will appear automatically for each additional header (or click **'Add column'** button).

6. Click **'Save'** button after adding all necessary headers.

![Parameter_header](./images/dynamic_param_2.png)

7. Add parameter names.
8. Click **'Save'** button.

![Parameter_names](./images/dynamic_param_3.png)

Now, your parameters are added, and you can see them at the bottom of the modal,

![Added_parameters](./images/dynamic_param_4.png)

or under the test description.

![Added_parameters_desc](./images/dynamic_param_5.png)

### How to Edit Test Parameters

You are able to edit existing parameters or parameter headers in two methods:

**Method 1: Editing directly under the test description**

1. Click the **'Edit'** icon next to the parameter.

![Edit_icon](./images/edit_dynamic_param_1.png)

2. Update the parameter name.
3. Click the **'Save'** button.

![Edit_parameter_name](./images/edit_dynamic_param_2.png)

4. Click the **'Edit Header'** button.

![Edit_Header](./images/edit_dynamic_param_3.png)

5. Update the header name.
6. Click the **'Save'** button.

![Update_Header_Name](./images/edit_dynamic_param_4.png)

**To delete a parameter:**

1. Click the **'Trash'** icon.
2. Click **'OK'** to confirm action on **'Are you sure you want to delete this param?'** pop-up.

![Delete_parameter](./images/delete_dynamic_param_1.png)

**Method 2: Editing via the parameter menu**

1. Click the **'Extra button'** icon.
2. Select **'Add Parameter'** from the extra menu dropdown.

![Second_Method_delete](./images/edit_dynamic_param_5.png)

3. Follow the same steps as in Method 1:

- Click the **'Edit'** icon next to the parameter.
- Update the parameter name.
- Click **'Save'**.

![Second_Method_Edit_Parameter_Name](./images/edit_dynamic_param_6.png)

- Click **'Edit Header'** button.
- Update the header name.
- Click **'Save'**.

![Second_Method_Edit_Header_Name](./images/edit_dynamic_param_7.png)

**To delete a parameter via the parameter menu:**

1. Click the **'Extra button'** icon.
2. Select **'Add Parameter'** from the extra menu dropdown.

![Second_Method_delete](./images/edit_dynamic_param_5.png)

3. Click the **'Trash'** icon.
4. Click **'OK'** to confirm action on **'Are you sure you want to delete this param?'** pop-up.

![Second_Method_delete](./images/delete_dynamic_param_2.png)

### How to Use Dynamic Parameters in Test Steps

Once you have defined your **Parameter Headers** (as shown in the steps above), you can reference them directly in your test logic.

1. **Identify your Header:** Note the exact name of the **'Parameter header'** you created (e.g., `Username` or `Environment`).
2. Click **'Edit'** button for test.

![Testomat.io - Dynamic Parameters in Test Steps](./images/dynamic_par_in_steps_1.png)

3. **Insert the Placeholder:** In the Test Description or Steps field, use the syntax `${ParameterName}` or `{{ParameterName}}`.

**Example:** 
```
Enter an invalid Mobile Number ${Mobile No}

OR

Open home page {{URL}}.

```

4. **Save the Test:** Click the **'Save'** button on the test case.

![Testomat.io - Dynamic Parameters in Test Steps](./images/dynamic_par_in_steps_2.png)

When you launch the test, Testomat.io will scan for the `${}` and `{{}}` syntax and inject the corresponding value from your parameters table for that specific run iteration.

:::note

1. Parameter names are case-sensitive. Ensure the text inside the brackets matches your header name exactly to avoid **"Undefined"** errors during runtime!

2. For **Titles** use **ONLY** `${ParameterName}` syntax, for **Steps and description** you can use both: `${ParameterName}` or `{{ParameterName}}` .

![Testomat.io - Dynamic Parameters in Test Steps](./images/dynamic_par_note_1.png)

:::

### Launch Test Case with Dynamic Parameters

When a test case with added parameters is launched — whether as a manual or automated run — it is automatically rendered with actual values. This data-driven approach ensures that your test logic remains clean while covering multiple scenarios.

**How Parameters Work During Execution:**

- **Iteration-Based Testing:** Each row in your parameters table is treated as a separate test iteration.
- **Data Substitution:** During the run, the system substitutes the parameter placeholders with the specific data from that row.

![Testomat.io - Rendering Test Parameters](./images/Rendering_test_param_1.gif)

- **Comprehensive Reporting:** In the Run Report, each iteration is displayed as an individual test case, complete with its specific test results.

![Testomat.io - Rendering Test Parameters](./images/Rendering_test_param_2.png)

This functionality allows you to pinpoint exactly which set of data caused a failure without searching through a single, massive test log.
