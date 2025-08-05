---
title: Bulk Edit on Suite and Test Levels
description: Learn how to use the Bulk Edit feature in Testomat.io to manage test suites more efficiently. This guide explains file and folder patterns, how to bulk edit individual suites using YAML, and how to quickly create multiple tests with minimal input.  
type: article
url: https://docs.testomat.io/advanced/bulk-edit-folder-suites-and-tests
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/169832839-f67f3cad-73b7-43ff-ba00-b4ecd4296c2f.D7I3Huc-_Z21Q63i.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: bulk edit, test management, Testomat.io, YAML, test suite, reorder tests, create tests, delete tests, bulk test creation, file patterns, test restructuring, automation
---
## File and Folder Patterns

In order to reflect the BDD paradigm in the best way and to support the consistency of the project structure, Testomat.io provides a Folder and File pattern. 
A suite with tests is considered to be a **file** (like a file with tests in your filesystem).
A suite that contains other suites is a **folder** (like in a filesystem).
So the main rule here is **suite can contain only tests or suites but not both**.

## How to Use Bulk Edit on Suite Level

Your project may contain a huge amount of tests and suites. It's more efficient to edit tests at the suite level. See how it works: 

1. Select the test suite you want to edit from the project view.

2. Click the three-dot menu (⋮) next to the suite name.

3. Choose **Bulk Edit** from the dropdown menu.

4. Modify the suite content in the YAML editor as needed.

5. Click **Preview** to review the proposed changes.

6. In the confirmation pop-up, click **Apply Changes** to save your updates.

![Bulk edit on suite level](./images/bulk_edit_suite_level.png)

![Make changes in the suite](./images/make_changes_in_the_suite.png)

![Apply changes suite level](./images/apply_changes_suite_level.png)

[![CleanShot 2022-05-27 at 20 21 06@2x](./images/170759894-469aac18-08b7-407f-938e-eda4037dc4b8.jpg)](https://youtu.be/Cp7XJynF7u4)

## Bulk Tests Creation

Sometimes, you may want to quickly add multiple test cases by name and save them for further completion. Our Bulk Tests Creation feature is intended to help you:

1. Create a new or open existing test suite where your tests will be added.

2. Enable the **Bulk** toggle to switch to bulk creation mode.

3. Enter one test per line in the input field.

4. Click **Create** to add all the tests at once.

![CleanShot 2022-05-24 at 11 33 02@2x](./images/bulk_edit_toggle2.png)

![CleanShot 2022-05-24 at 11 38 38@2x](./images/add_tests_click_create2.png)

5. Your tests will appear immediately under the newly created suite.

![CleanShot 2022-05-24 at 11 44 10@2x](./images/see_your_tests_created2.png)

[![CleanShot 2022-05-27 at 20 19 26@2x](./images/170759254-e6d4379b-733e-4521-98f3-abccca6eaffa.jpg)](https://youtu.be/jnJwZsRQjTQ)
