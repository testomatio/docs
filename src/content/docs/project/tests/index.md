---
title: Test Design
description: Learn how to create effective test designs with Testomat.io. This guide covers building test scenarios, using various test design techniques, and integrating them into your project workflow for improved test case management and automated test runs.
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
      content: test design, test cases, test management, test automation, testing techniques, Testomat.io, BDD, Gherkin, Cucumber, test scenarios, project workflow, software testing
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

It is also possible to the test straightaway from this screen. Simply input the test's title and click on the **Create** button. You can add the description at any time later.

![Quick test creation](./images/2023-08-03_00.49.14@2x.png)

Repeating these steps, you can easily add as many tests as you need within a reasonable period of time.

Also, you can use shortcut commands to create/edit Test Cases or Suites. Visit the [Keyboard Shortcuts](https://docs.testomat.io/usage/keyboard-shortcuts/) page to learn more.

## Multiselection for Tests

The **Multiselection** feature on the **Tests** page allows users to perform bulk actions on multiple tests, entire test suites, or folders.

### To enable Multiselection:

1. Click the **Multiselection** button located at the top left corner of the **Tests** page.

   ![Multiselection button](./images/Multiselect_button_tests.png)

2. Select the desired tests, test suites, or folders.

3. Once selected, the **Multiselection options** toolbar will appear at the bottom of the page.

   ![Multiselection options](./images/Multiselection_options.png)

---

### Available Multiselection Actions:

1. **Run** – Launches a test run containing the selected items.

2. **Labels** – Add or remove labels or custom fields for the selected tests.  
   [Learn more about labels →](https://docs.testomat.io/usage/labels-and-custom-fields/#how-to-setup-a-label)

3. **Copy** – Copy selected tests within the current project or to another project.  
   
4. **Move** – Move tests to another test suite or folder within the same project.

5. **Tags** – Assign existing tags or create new ones for the selected tests.  
   [More on using tags →](https://docs.testomat.io/advanced/tags-labels/#_top)

6. **+ Link** – Open a pop-up to link a related defect to the selected tests.

7. **Priority** – Set priority levels for the selected tests.

8. **More options (⋯)** – Contains additional action **Download** – Export selected tests to a spreadsheet.

9. **Delete** – Permanently remove the selected tests.

## Test Case Editor

Test Case Editor is a dynamic interface, designed to accommodate the diverse requirements of test case formulation. Through this platform, testers wield the power to architect meticulously structured test scenarios, encompassing a range of variables, actions, expected results, and potential outcomes.

Regarding test case creation, Testomat.io offers two distinct editor types: the **Classical** Editor and the **BDD** (Behavior-Driven Development) Editor. Each caters to different testing methodologies and user preferences, enabling testers to choose the approach that best aligns with their needs.

Let's have a look at each of them.

## Classical Editor Review

Introducing the Classical Editor, a tool that places the art of test editing firmly in your hands. Crafting tests becomes a seamless endeavor as you immerse yourself in the Classical Editor's capabilities.

![Classical Editor](./images/class_editor.png)

1. Test title field - enter here your test title and tags (if needed)
2. Toolbar with formatting options
3. Editing Area - a place for preconditions, steps and expected results
4. Preview button that allows you to see live representation of how the test will appear
5. Attachments button opens attachments dialog
6. Extra menu button
7. Autocomplete Steps switch
8. Autocomplete Snippets switch
9. Autocomplete Tags switch
10. Full screen button - offers you a seamless transition distraction-free environment
11. Change State - allows to change test state, namely manual test can be marked as automated and it will be treated as an automated test
12. Save - save your work
13. Close - escape the editor

However, the Classical Editor's influence transcends singular tests. With Pre-Requirements, you can now wield the power to define the contextual prerequisites that set the stage for entire test **suites**. Seamlessly integrate high-level descriptions of dependencies, system states, or configurations required to execute a suite effectively.

![Edit a suite](./images/edit_suite.png)

1. Suite title field - enter here your suite title and tags (if needed)
2. Editing Area - a place for suites description and pre-requirements
3. Preview button that allows you to see live representation of how the suite will appear
4. Extra menu button
5. Autocomplete Steps switch
6. Autocomplete Snippets switch
7. Autocomplete Tags switch
8. Full screen button - offers you a seamless transition distraction-free environment
9. Save - save your work
10. Close - escape the editor

### Why Do We Use Markdown in Classical Editor?

Markdown is a lightweight and versatile markup language that revolutionizes the way content is formatted and presented. It combines the simplicity of plain text with the ability to produce well-structured documents, making it a favored choice for various applications, including software documentation and test case creation. Here are its benefits:

**Simplified Syntax:** Markdown's straightforward syntax empowers testers to articulate intricate test scenarios with clarity. Utilize headings to structure test steps, employ bullet points for concise lists, and employ emphasis (bold, italic) to highlight crucial details.

**Swift Formatting:** Testers can bid adieu to convoluted formatting menus and endless mouse clicks. Markdown's minimalist syntax allows testers to swiftly format text, enabling them to focus more on the content itself and less on the mechanics of formatting. This efficiency translates to accelerated test case creation.

**Collaboration Amplified:** Collaborative testing endeavors thrive on clear communication. Markdown's plain text format is version control-friendly, facilitating seamless collaboration using tools like Git. Team members can easily track changes, suggest modifications, and merge contributions, ensuring that test cases evolve cohesively.

**Readable and Accessible Content:** Markdown's clean and uncluttered appearance translates into test cases that are effortlessly readable, even by non-technical stakeholders. This enhances cross-functional communication by bridging the gap between testers, developers, and business analysts.

**Media Integration:** Beyond text, Markdown accommodates image and file embedding. Testers can attach screenshots, diagrams, or supplementary documentation directly within test cases. This integration injects valuable context, aiding in comprehension and enabling more accurate bug reproduction.

**Consistency and Templates:** Markdown's consistent structure allows for the creation of reusable test case templates. This ensures that test cases adhere to a standardized format, streamlining comprehension and navigation across a myriad of test scenarios.

### Examples of Markdown Written Test Cases

In the realm of Markdown-based test case creation, the handling of test unveils an array of versatile techniques. Below, we delve into several illustrative examples that showcase various methods for incorporating steps and expected results into your test cases.

In this pattern, the steps are listed one after the other, along with their respective expected results. This is a simple and straightforward way to document the steps for a test case. You can see expected results as plain text just after step. Need to mention that expected results in this way will no go to steps database and you won't have autocompletion for it.

```
## Steps

* Step 1
    Expected result: Step 1
* Step 2
    Expected result: Step 2
* Step 3
    Expected result: Step 2
```

Some example:

```
## Steps

* Go to the payment page
    Expected result: Payment page loads
* Enter credit card details and submit
    Expected result: Payment is processed and confirmation page loads
```

---

### Expected Results as Steps One After Another

This pattern is similar to the previous one, but instead of listing the expected results right after each step as plain text, they are listed after all the steps have been documented. This approach will give you ability to use autocompletion and expected results will be stored in steps database.

```
## Steps
* Step 1
* Expected result: Step 1
* Step 2
* Expected result: Step 2
* Step 3
* Expected result: Step 2
```

Some example:

```
## Steps
* Go to the payment page
* Verify that Payment page loads
* Enter credit card details and submit
* Verify that Payment is processed and confirmation page loads
```

---

### Steps with Expected Results as Nested List

This format is useful for breaking down each step into multiple sub-steps, each with its own expected result. This can be helpful when a step is complex and has several different parts or when there are multiple expected behaviors that need to be documented for each step. By nesting the expected results under each step, it's easy to see which expected results are related to which sub-steps, making it easier to track and verify expected behaviors.

```
## Steps
* Step 1
    1. Expected result: Step 1.1
    2. Expected result: Step 1.2
* Step 2
    1. Expected result: Step 2.1
    2. Expected result: Step 2.2
* Step 3
    1. Expected result: Step 3.1
    2. Expected result: Step 3.2
```

Some example:

```
## Steps

* Go to the payment page
    1. Verify that Payment page loads
* Enter credit card details and submit
    1. Verify that Credit card number is accepted
    2. Verify that Expiration date is accepted
    3. Verify that CVV code is accepted
* Submit payment and confirmation page loads
    1. Verify that Payment is processed
```

:::note

In case you use numbered list for your steps and unordered list for expected result or sub-steps, to see the correct formatting, **add 4 spaces or 1 tab** before unordered list. Check the relevant case below.

:::

```
## Steps

1. Step 1
    - Expected result: Step 1.1
    - Expected result: Step 1.2
2. Step 2
    - Expected result: Step 2.1
    - Expected result: Step 2.2
3. Step 3
    - Expected result: Step 3.1
    - Expected result: Step 3.1
```

Some example:

```
## Steps

1.  Go to the payment page
    - Verify that Payment page loads
    - Verify that payment page matches the design
2. Enter credit card details and submit
    - Verify that Credit card number is accepted
    - Verify that Expiration date is accepted
    - Verify that CVV code is accepted
3. Submit payment and confirmation page loads
    - Verify that Payment is processed
```

![Edit Test Case](./images/Edit_test_case_numbered_list.gif)

---

### Steps with Separated Expected Results

Instead of listing the verification actions after each step, they are listed under a separate section for expected results. This can be a good way to provide a summary of the expected behavior and can be helpful in identifying any gaps in the test coverage.

```
## Steps
* Step 1
* Step 2
* Step 3

## Expected results:
* Verify that ...
* Verify that ...
* Verify that ...
```

Some example:

```
## Steps

1. Go to the payment page
2. Enter credit card details and submit

## Expected Results:

1. Payment page loads
2. Payment is processed and confirmation page loads

```

---

### Steps with Table of Expected Results

In this pattern, the steps are presented in a table format, with the expected results listed in a separate column. This can be a good way to provide a clear and concise summary of the test case and can be helpful in identifying any variations in the expected behavior.

```
## Steps

| Step          | Expected results |
|---------------|------------------|
| Success login | Check form       |
| Failed login  | Check form       |
```

Some example:

```
## Steps

| Step                           | Expected results                                           |
|--------------------------------|------------------------------------------------------------|
| Go to the payment page         | Payment page loads                                         |
| Enter credit card details      | Credit card number is accepted, Expiration date is accepted, CVV code is accepted |
| Submit payment                 | Payment is processed and confirmation page loads           |
```

## ![Testomat.io - Table inside test case description](./images/New_10TBA7jV_2024-08-03.png)

### Steps with Expected Results as Subheadings

In this format, the expected results are included as subheadings under each step. This can be useful when you want to provide a more detailed description of the expected behavior for each step. So each section will provide more complex details and many verification point per each step

```
## Steps

### Step 1

* Expected result 1.1
* Expected result 1.2
* Expected result 1.3

### Step 2

* Expected result 2.1
* Expected result 2.2
* Expected result 2.3

### Step 3

* Expected result 2.1
* Expected result 2.2
* Expected result 2.3
```

Some example:

```
## Steps

### Go to the payment page

* Verify that Payment page loads

### Enter credit card details

* Enter credit card number
    1. Verify that Credit card number is accepted
* Enter expiration date
    1. Verify that Expiration date is accepted
* Enter CVV code
    1. Verify that CVV code is accepted

### Submit payment

* Verify that Payment is processed
* Verify that Confirmation page loads

```

Use Markdown shortcuts to edit test case description quickly and easily. Visit the [Keyboard Shortcuts](https://docs.testomat.io/usage/keyboard-shortcuts/) page to learn more.

## BDD Editor Review

As you embark on the journey of crafting and refining BDD scenarios, this innovative platform empowers you to shape narratives into meticulously executable tests. At its core, the BDD Editor encapsulates the essence of collaboration, precision, and agility, delivering a comprehensive solution for modern testing workflows. Here, you'll create user stories, scenarios, and document expected behaviors with an eloquence that bridges the gap between technical and non-technical stakeholders.

**Feature File Editor**

In the context of BDD, the Feature File serves as the canvas upon which your software's behavior is painted.

Let's see what we have here!

![Edit Feature File](./images/FF_edit-1.png)

1. Editing Area - a place for the Feature File and its Scenarios with Given/When/Then steps
2. Extra menu button
3. Autocomplete Steps switch
4. Autocomplete Snippets switch
5. Autocomplete Tags switch
6. Full screen button - offers you a seamless transition distraction-free environment
7. Format button - brings your Scenarios to Gherkin structure
8. Save - save your work
9. Close - escape the editor

**Scenarios Editor**

Beyond Feature Files lies the individual tests. Here, the BDD Editor grants you the ability to sculpt scenarios with precision, breaking down user behaviors into granular steps and verifiable outcomes. Each test becomes a symphony of detail, harmonizing the user's journey with the software's responses. By editing separate tests within the BDD Editor, you orchestrate complex interactions, validations, and expectations.

![Edit scenario](./images/Edit_Scenario.png)

1. Editing Area - a place for Scenarios with Given/When/Then steps
2. Extra menu button
3. Autocomplete Steps switch
4. Autocomplete Snippets switch
5. Autocomplete Tags switch
6. Full screen button - offers you a seamless transition distraction-free environment
7. Save - save your work
8. Close - escape the editor

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

## URL/ID Quick Copy

Depending on your needs, you can set up a convenient way to copy **URL/IDs** in **Test Cases**, **Suites** and **Runs**.

To start, you need to open a **Test Case** (**Suite** or **Run**):

1. Click the copy icon to open the modal window.
2. In the window that opens, you can copy the format you are interested in.
3. Turn on the toggle next to a format if you need to use it frequently.
4. Now, every time you click on the ID, the selected format will be copied to clipboard without any further actions.

![Testomat.io - URL/ID Copy](./images/New_1pgghaYx_2024-08-08.png)

## Cross-Linking Tests, Suites and Folders

Another useful feature that allows you to cross-link test cases, suites, and folders by embedding their unique IDs directly into the description of another test or suite. This functionality provides you with clickable links to other related items within your project, and clicking on it displays a dynamic preview of the linked test, suite or folder in an additional window. 

This feature is available for Classical and BDD projects but have a difference in formating.

### For Classical Project

All you need to do is copy test cases/suites IDs and paste them into a test/suite description:

![Testomat.io - Use ID In Tests](./images/New_0ldrsL29_2024-10-05.gif)

### For BDD Project

In the projects that use BDD format, you need to follow certain rules to maintain your test structure.
If you want to add clickable references to a test or suite in a BDD project, use **#** followed by their IDs. Clicking the link will open the test or suite in detail view, making navigation and traceability more seamless.

![Testomat.io - Use ID In Tests](./images/link_bdd.gif)

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

## Add Drawing to Test

Including drawings in test case descriptions can improve clarity by visually representing complex UI layouts and interactions that are difficult to explain through text alone.

To add a drawing to a test case, enter the edit mode and click on the **Draw** button.

![Testomatio.io - Draw Editor](./images/New_OwQMWpps_2024-10-07.png)

You'll see a window with a set of drawing tools. You can select different elements from the top panel (2) and apply styles to them from the side panel (3). When you are done with the drawing, click on the **Save** button (4).

![Testomatio.io - Draw Tools](./images/New_VxPGvi8Y_2024-10-07.png)

After saving the changes in the edit mode, you will see a preview of the drawing in the test case description:

![Testomatio.io - Draw Preview](./images/New_1hpi4Xy4_2024-10-07.png)

## How to Resize Attached Images in a Test Case

All images attached to a test case are displayed on the preview page at their default size.

To change the size of an attached image for a better view, follow these steps:

1. Hover over the attachment.
2. Click on the displayed button.

![Testomatio.io - Image resize](./images/resize_image.png)

By clicking on the resize button on one image, all attachments in the test case will automatically resize.

## How To Save Your Tests

Testomat.io Editor offers options designed to streamline your test and suite management workflow. Lets have look:

![saving options](./images/save_options.png)

Save: promptly save your changes while staying on the current test.

Save + View Test: save your work while immediately viewing the test in question.

Save + Go To Suite: save your changes and seamlessly navigate to the suite you're working on.

Save + Close All: ensures all open tests and suites are saved and closed simultaneously.

## Suites and folders

Unlike other test management systems, **Testomat.io doesn't allow suite to include other suites and tests**. That's why you can either create a suite (a collection of tests) or folder (collection of suites).

<Aside>
When creating a suite you have to explicitly set its type: a suite or a folder.
</Aside>

![New suite](./images/2023-08-03_00.53.02@2x.png)

This was designed so tests structure could match the filesystem. For instance, if you use BDD project, feature file can contain scenarios, but can't contain other feature files. The same for automated tests, a file can contain tests but can't contain other files.

It's assumed that in any moment a manual test can be automated, so it is important to keep the filesystem structure in a project.

An empty suite can be converted to folder or vice versa

![Empty suite](./images/2023-08-03_00.54.46@2x.png)

Also you can set an emoji icon for the suite

![Pick emoji](./images/2023-08-03_00.57.10@2x.png)

If your test is deeply nested within suites and folders, you can use breadcrumbs with tooltips to navigate the project structure more effectively.

![Testomat.io - Breadcrumbs tooltip](./images/New_g6FZ3V7n_2024-08-10.png)

## How to Copy your Tests, Test Suites, and Folders

You can copy a single test from a test suite, an entire test suite, or even a folder containing a set of test suites. You can copy these items either within your current project or to a different project.

### Copying Tests or Test Suites Within Your Project

1. Go to the **Tests** section.
2. Select the item you want to copy (e.g., a test suite).
3. Open the drop-down menu by clicking the **three dots** next to the **Edit** button.
4. Click **Copy**.
5. Select the destination folder where you want to move your test suite.

![Testomat.io - 'Copy' button](./images/Copy_option_Tests.png)
![Testomat.io - 'Copy tests' pop-up](./images/copy_test_inside_project.png)

### Copying Tests or Test Suites to Another Project

1. Go to the **Tests** section.
2. Select the item you want to copy (e.g., a test suite).
3. Open the drop-down menu by clicking the **three dots** next to the **Edit** button.
4. Click **Copy**.
5. In the pop-up menu, click **'Change project'**.
6. Select the specific project from the drop-down list.
7. Select the destination folder where you want to move your test suite.

![Testomat.io - 'Change project' button](./images/change_project_button.png)


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

## Move Your Tests

You may need to move your tests within a project, for example to another suite. For this purpose, you can use **Move** or **Drag and Drop** functionality. 

**Move** menu action

1. Go to the Tests section.
2. Select the item you want to move (e.g. a test suite).
3. Open the drop-down menu by clicking the three dots next to the Edit button.
4. Click **Move**.

![Alt Move tests button ](./images/move_tests_1.png)

5. Select the destination folder where you want to move your tests.

![Alt Move tests button ](./images/move_tests_2.png)

**Drag and Drop** option

1. Go to the Tests section.
2. Expand the folder or suite where you want to move your test(s).
3. Hover over the test, suite, or folder you want to move until the drag handle (⠿) appears.
4. Click and hold the drag handle, then drag the item to your desired location.
5. Position the item slightly below the item you want it to appear under. When space opens up, release to drop.

![Alt Move tests button ](./images/drag_and_drop.gif)



## How to restore deleted tests?

The **Trash Bin** feature is designed to enhance data recovery and user experience by allowing users to easily restore accidentally deleted suites or test cases. Revisions are stored for up to 90 days, ensuring that valuable testing data is not permanently lost and can be quickly recovered without the need for complex restoration processes.

![Testomat.io - Trash Bin](./images/New_vzUGVzmP_2024-08-13.gif)

You can also track changes to Suits and Test Cases, including deletions, on the [Pulse](https://docs.testomat.io/usage/pulse/) page.
