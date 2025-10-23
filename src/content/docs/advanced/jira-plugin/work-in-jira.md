---
title: Work with Tests in Jira
description: Learn how to integrate Testomat.io with Jira using the Jira plugin. This guide covers connecting Testomat.io projects to Jira, linking/unlinking tests, suites, and test plans to Jira issues, and running manual or automated tests directly from Jira. Manage BDD feature files, attach test reports, and utilize the traceability matrix for comprehensive test coverage in sprints.
type: article
url: https://docs.testomat.io/advanced/jira-plugin/work-in-jira
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/125162422-5f93e400-e190-11eb-9959-140eca400cb9.BKJldTge_ZqM9vX.webp
  - tag: meta
    attrs:
      name: keywords
      content: Jira plugin, Testomat.io, test management, test coverage, BDD, feature files, automated tests, manual tests, Jira integration, traceability matrix, test reporting
---

This guide explains how to create, edit, link, and manage **Suites**, **Tests**, and **Plans** in Jira using the **Testomat.io** plugin.

## How to Work with Suites

Create and manage Suites in Jira — organize related tests and link them to issues using the **Testomat.io** plugin.

### How to Create a Suite

1. Navigate to the **Suites** tab
2. Click the **menu button (⋯)** and select **New Suite**

![New Suite button](./images/att14_401.png)

3. Enter the suite’s name and description below (optional)
4. Click **Create** button

![Create button](./images/att15_401.png)

5. Select a parent suite from the dropdown or Root destination
6. Click **Save** button

![Save new suite](./images/att16_401.png)

### How to Edit a Suite

1. Navigate to the **Suites** tab
2. Click the **pen icon** near the suite you want to edit

![Edit icon for suite](./images/att23_401.png)

3. Edit the suite (Suite title, description)
4. Click **Update** button

![Update button](./images/att24_401.png)

### How to Link and Unlink a Suite

**To link a suite to a Jira issue:**

1. Navigate to the **Suites** tab
2. Click the **menu button (⋯)** and select **Link Suite**

![Link Suite](./images/att20_401.png)

3. Select a parent suite from the dropdown
4. Click **Save** button

![Save linked suite](./images/att21_401.png)

**To unlink a suite:**

1. Navigate to the **Suites** tab
2. Сlick the **trash can icon** next to the linked suite
3. Once the modal window opens, confirm by clicking **Unlink** button

![Unlink suite](./images/att25_401.png)

## How to Work with Tests

Manage your tests directly in Jira — create, edit, and link them to issues or plans within the **Testomat.io** plugin.

### How to Create a Test

1. Navigate to the **Tests** tab
2. Click the **menu button (⋯)** and select **New Test**

![New Test button](./images/att17_401.png)

3. Enter the test’s name and optional description
4. Click **Create** button

![Create button](./images/att18_401.png)

5. Select a suite from the dropdown
6. Click **Save** button

![Save new test](./images/att19_401.png)

### How to Bulk Create Tests

Quickly create multiple tests at once directly from Jira.

1. Navigate to the Tests tab
2. Click the **menu button (⋯)** and select **Bulk Create**

![Bulk Create](./images/att31_401.png)

3. Select the existing suite from the dropdown list
4. In the Add new tests field, enter test titles — each line corresponds to the title of a new test
5. Click the **Create** button to add all listed tests to the selected suite

![create multiple tests](./images/att30_401.png)

### How to Edit a Test

1. Navigate to the **Tests** tab
2. Click the **pen icon** near the test you want to edit

![pen icon](images/att26_401.png)

3. Edit the test (Test title, description)
4. Click **Save** button

![Update test](./images/att27_401.png)

### How to Link and Unlink a Test

**To link a test to a Jira issue:**

1. Navigate to the **Tests** tab
2. Click the **🔗 Test** button with the link icon

![Test button](./images/att29_401.png)

3. In the opened window, use filters to find the needed tests:

- Select a suite in the Search a suite dropdown
- Select a plan in the Search a plan dropdown
- Optionally, enter a tag in the Type @tag and press 'Enter' field
- Combine filters using AND or OR to refine search results

4. From the list of found tests, click the **Link** button next to a test to connect it to the Jira issue

- You can also click **Link All** to link all displayed tests

![Link All tests](./images/att32_401.png)

**To unlink a test:**

You can unlink tests from a Jira issue in two ways:

- via the **menu button (⋯)**
- through the **🔗Test** button

Option 1 — via the **menu button (⋯)**

1. Navigate to the **Tests** tab
2. Click the **menu button (⋯)** and select **Unlink Test**

![Unlink Test button](./images/att33_401.png)

3. Select tests to unlink:

- By default, all tests are selected for unlinking
- If you don’t want to unlink all tests — uncheck the box next to the specific tests
- To unlink only selected ones, uncheck **All tests** first, then select individual tests you want to unlink

4. Click the **Unlink** button to confirm

![Unlink tests](./images/att34_401.png)

Option 2 — through **🔗Test** button

1. Navigate to the **Tests** tab
2. Click the **🔗 Test** button with the link icon

![Test button](./images/att29_401.png)

3. In the opened window, find linked tests — Click **Unlink** next to the test you want to remove
4. Or click **Unlink All** to detach all linked tests at once

![Alt text](images/att35_401.png)

## How to Work with Test Plans

Link and execute Test Plans directly from Jira to track and manage testing progress.

### How to Link a Test Plan

1. Navigate to the **Plans** tab
2. Click the **🔗 Plan** button or **menu button (⋯)** and select **Link Plan**
3. Click **Link** button

![Link a Plan](./images/att36_401.png)

### How to Unlink from a Test Plan

1. Navigate to the **Plans** tab
2. Click the **🔗 Plan** button, or
3. Click the **trash can icon** next to the linked plan
4. Click the **Unlink** button to confirm

![Unlink a plan](./images/att37_401.png)

## How to Work with Feature Files (BDD)

Edit and update BDD Feature Files from Jira and sync changes with your Testomat.io project.

### How to Edit a Feature File

1. Navigate to the **Test Coverage** tab
2. Click the **menu button (⋯)** and select **Edit Feature**

![Alt text](images/att38_401.png)

3. Select the suite you want to edit in the Feature File
4. Edit the **Feature File**
5. Click the **Update** button

![Update Feature File](./images/att39_401.png)
