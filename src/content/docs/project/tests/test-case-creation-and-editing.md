---
title: Test Case Creation and Editing
description: Learn how to create and manage test cases effectively in Testomat.io. This guide covers building test scenarios, applying various test design techniques, and integrating them into your workflow for streamlined test management and automation.
type: article
url: https://docs.testomat.io/project/tests
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/class_editor.DFw30t7Y_1wUwhr.webp

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

## How to add a label/tag to a test

This option is the easiest one! You simply need to add the label's name (preceeded by @ char) in the name field of the test. The drop-down list of tags already used in projects appears, when you type the @ symbol.

![Add tag to a test](./images/New_926xDzhS_2024-08-13.png)

And now you can see your label/tag in the test list next to the test's title.

![See the test with tag](./images/2023-08-03_01.01.17@2x.png)

## How to assign a test to a user

If you want to assign a certain test to a certain user, you should click on this user icon in the upper right corner of the window, as shown in the picture.

![Assign user](./images/2023-08-03_01.10.41@2x.png)

Assign a user from the list of users added to the project by clicking on the user's name. Please note, that you need to make sure the intended user is added to the project first!

![Choose user](./images/2023-08-03_01.12.09@2x.png)

Now you can see that this test is assigned to a certain user. The user icon has changed accordingly.

![See assigned person](./images/2023-08-03_01.12.54@2x.png)

## How to set a priority to a test

First, you should open the test and click on the checkbox icon next to the test title, as shown in the picture.

![How to set priority](./images/2023-08-03_01.15.20@2x.png)

You will see a list of priority types

![See list of priorities](./images/2023-08-03_01.15.54@2x.png)

Click on the priority type you need and you will see the checkbox changed

![Priority changed](./images/2023-08-03_01.17.58@2x.png)

Also, you will see set priority in your suite

![Priorities in test tree](./images/2023-08-03_01.19.08@2x.png)

## How to add parameters to a test

Parameters are used to create data-driven tests. Each parameter will be treated as a separate test during a manual or automated run.

**To add parameters to your test**:

1. Navigate to **‘Tests’** in the sidebar
2. Select specific test
3. Click the **’Extra button’** icon
4. Select **’Add Parameter’** from the menu

![Add_Parameter](./images/att1_4962.png)

After a modal with instructions will appear,

1. Add parameter headers:

- Enter a name for the header
- A new **'Parameter header'** will appear automatically for each additional header

2. Click **’Save’** button after adding all necessary headers

![Parameter_header](./images/att2_4962.png)

3. Add parameter names
4. Click **’Save’** button

![Parameter_names](./images/att3_4962.png)

Now, your parameters are added, and you can see them at the bottom of the modal,

![Added_parameters](./images/att4_4962.png)

or under the test description.

![Added_parameters_desc](./images/att5_4962.png)

### How to edit test parameters

You are able to edit existing parameters or parameter headers in two methods:

**Method 1: Editing directly under the test description**

1. Click the **‘Edit’** icon next to the parameter

![Edit_icon](./images/att6_4962.png)

2. Update the parameter name
3. Click the **‘Save’** button

![Edit_parameter_name](./images/att7_4962.png)

4. Click the **‘Edit Header’** button

![Edit_Header](./images/att8_4962.png)

5. Update the header name
6. Click the **‘Save’** button

![Update_Header_Name](./images/att9_4962.png)

To delete a parameter:

1. Click the **‘Trash’** icon
2. A pop-up will appear: **’Are you sure you want to delete this param?’**
3. Click **‘OK’** to confirm

![Delete_parameter](./images/att10_4962.png)

**Method 2: Editing via the parameter menu**

1. Click the **‘Extra button’** icon
2. Select **‘Add Parameter’** from the menu

![Second_Method_delete](./images/att11_4962.png)

3. Follow the same steps as in Method 1:

- Click the **‘Edit’** icon next to the parameter
- Update the parameter name
- Click **‘Save’**

![Second_Method_Edit_Parameter_Name](./images/att12_4962.png)

- Click **‘Edit Header’** button
- Update the header name
- Click **‘Save’**

![Second_Method_Edit_Header_Name](./images/att13_4962.png)

