---
title: Steps Database
description: Learn how to utilize the Steps Database in Testomat.io to store, reuse, and auto-complete test steps across projects. This guide covers creating, editing, renaming steps, and using snippets for efficient test writing. Save time and maintain consistency by leveraging the Steps Database during test creation, including both classical and BDD-style tests.
type: article
url: https://docs.testomat.io/project/steps-snippets/steps
head:  
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Steps Database, test steps, step reuse, test management, BDD tests, classical tests, test automation, QA tools, step autocompletion
---

Testomat.io offers functionality for test steps re-using and autocompletion. This feature helps you save time during test cases creation and make the process faster.

## How to Add a New Step to the Steps Database

There are few ways to create steps in the **Steps Database** from the **'Steps'** page:

**Option 1**

1. Open **'Steps'** page.
2. Enter the step into the empty field.
3. Click **'Create'** button.

![Testomat.io - Add Steps](./images/Add_step_1.png)

**Option 2**

1. Open **'Steps'** page.
2. Сlick **'Plus'** button.
3. Select **'Step'** option from the dropdown list to add context to the step.

![Testomat.io - Add Steps](./images/Add_step_2.png)

After the **'New Step'** screen is displayed:

4. Add the step.
5. Add a step description to describe in which context this step can be used (optional).
6. Click **'Save'** button.

![Testomat.io - Add context to the step](./images/Add_step_3.png)

The new step has been created!

![Testomat.io - New step created](./images/Add_step_4.png)

:::note

You can create Steps for **BDD Projects** in the same way as for Classical Projects, following the same rules.

![Testomat.io - New step created](./images/Add_BDD_step_1.png)

:::

## How to Add a New Step in Editor for Classical Tests

Create your steps while writing your classical tests! Testomat.io Editor gives the ability to save your test description as steps directly to the **Steps Database**.

Open Test Case Editor and create new steps by starting the line with the asterisk sign `*` or a numbered list (e.g., `1.`).

![Testomat.io - Add Steps](./images/Add_step_5.png)

Save the test, and the new steps will be added in the Database.

![Testomat.io - Add Steps](./images/Add_step_6.png)

:::note

Only steps created in the Test Editor using `*` or `number list` under a step header (e.g., `## Steps`) will be created/saved in the **Steps Database**.

:::

:::note

If your recently added steps are not displaying in the autocomplete list, you need to refresh steps in the **Steps Database** to see them. To do this:

Open **'Steps'** page (1) -> Click **'Extra menu'** button (2) -> Select **'Refresh Steps'** option (3).

![Testomat.io - Refresh Steps](./images/Refresh_Steps.png)

:::

## How to Reuse Steps from Steps Database

Testomat.io recommends reusing steps instead of creating new ones.

Next time you need to use the same step, start typing the step inside the Editor. Use the asterisk sign `*` for an unordered list or number with dot (e.g., `1.`) for an ordered list. The Editor will display the autocomplete list with matching steps.
**Select** the step from the autocomplete list to add it to your test case.

![Testomat.io - Re-use Steps](./images/Reuse_step_1.png)

You can also use the **'Add Steps (ordered)'** or **'Add Steps (unordered)'** buttons in the Editor panel to trigger the autocomplete list with all available steps.

![Testomat.io - Re-use Steps](./images/Reuse_step_2.png)

:::note

When you use the **'Add Steps (ordered)'** or **'Add Steps (unordered)'** buttons the **'## Steps'** header will be added automatically if it wasn't previously added manually or via a template.

:::

## How to Add a New Step in Editor for BDD Tests

The Testomat.io BDD Editor automatically creates steps and adds them to the Steps Database once a Scenario or Feature File is saved. You do not need to add BDD steps separately.

![Testomat.io - Steps in BDD](./images/BDD_Steps_1.png)

:::note

Don't include Given/When/Then in a step. Each step can be used in any of these contexts.

:::

![Testomat.io - Steps in BDD](./images/BDD_Steps_2.png)

## How To Rename A Step

You may need to update existing steps to suit new project requirements. You can rename required steps on the **'Steps'** page. This action automatically updates all tests containing changed step, so you do not need to change each test individually.

1. Open **'Steps'** page.
2. Click on the Step you want to update.
3. Click **'Edit'** button in the displayed window.

![Testomat.io - Steps Update](./images/Update_Steps_1.png)

4. Update the Step's name.
5. Click **'Save'** button.

![Testomat.io - Steps Update](./images/Update_Steps_2.png)

6. Confirm the action on the displayed pop-up.

![Testomat.io - Steps Update](./images/Update_Steps_3.png)

7. Check description for related Test Cases after the Step is renamed.

![Testomat.io - Steps Update](./images/Update_Steps_4.png)

[![Testomat.io - Steps](./images/170752475-7899459d-0533-45b4-904e-1f88e9f61c2c.jpg)](https://youtu.be/z5C3GYtl_HU)

## How to Merge Steps

There might be a situation when there are a few similar steps in the Steps Database. You can use **'Merge'** feature to unite them into one step, to keep your tests clean. This feature is available for **Classical** and **BDD** projects.

1. Open **'Steps'** page.
2. Enable **'Multi-select'**.
3. Select the Steps you want to merge.
4. Select **'Merge'** option from the bottom menu panel.

![Testomat.io - Merge Steps](./images/Merge_Steps_1.png)

5. Enter the Step that you want to keep (the first step will be pre-selected by default, but you can change it manually based on your needs).
6. Click **'Merge'** button.

![Testomat.io - Merge Steps](./images/Merge_Steps_2.png)

:::note

After your steps are **Merged**, the description of all tests where these steps are used will be updated.

:::

![Testomat.io - Merge Steps](./images/Merge_Steps_3.png)

## How to Delete Unused Steps

It might be the case when you deleted some test cases, and now some steps are unnecessary. To keep your **Steps Database** clean, you can delete unused steps.

1. Open **'Steps'** page.
2. Click **'Extra menu'** button.
3. Select **'Delete Unused Steps'** option.

![Testomat.io - Delete Unused Steps](./images/Delete_Steps_1.png)

4. Confirm action on the displayed menu.

![Testomat.io - Delete Unused Steps](./images/Delete_Steps_2.png)

All unused Steps deleted from **Steps Database**.

![Testomat.io - Delete Unused Steps](./images/Delete_Steps_3.png)
