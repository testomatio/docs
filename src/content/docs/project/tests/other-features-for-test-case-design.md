---
title: Other Features for Test case Design
description: Learn how to use Testomat.io's test design features to manage test cases, apply design techniques, and organize your test structure effectively for automation and collaboration.
type: article
url: https://docs.testomat.io/project/test_design_features
head:
  - tag: meta
    attrs:
      name: keywords
      content: test design, test case management, test automation, Testomat.io, test organization, software testing, testing tools, test suites, folders, test structure, multiselection, labels, tags, mark as favorite, export suite to PDF
---
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
   [Learn more about labels →](https://docs.testomat.io/advanced/tags-labels/labels-and-custom-fields)

3. **Copy** – Copy selected tests within the current project or to another project.  
   
4. **Move** – Move tests to another test suite or folder within the same project.

5. **Tags** – Assign existing tags or create new ones for the selected tests.  
   [More on using tags →](https://docs.testomat.io/advanced/tags-labels/tags/)

6. **+ Link** – Open a pop-up to link a related defect to the selected tests.

7. **Priority** – Set priority levels for the selected tests.

8. **More options (⋯)** – Contains additional action **Download** – Export selected tests to a spreadsheet.

9. **Delete** – Permanently remove the selected tests.

## URL/ID Quick Copy

Depending on your needs, you can set up a convenient way to copy **URL/IDs** in **Test Cases**, **Suites** and **Runs**.

To start, you need to open a **Test Case** (**Suite** or **Run**):

1. Click the copy icon to open the modal window.
2. In the window that opens, you can copy the format you are interested in.
3. Turn on the toggle next to a format if you need to use it frequently.
4. Now, every time you click on the ID, the selected format will be copied to clipboard without any further actions.

![Testomat.io - URL/ID Copy](./images/New_1pgghaYx_2024-08-08.png)

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

### Mark Folders & Suites as Favourites

Working with large projects often means navigating through a long test tree or running the same search queries over and over again. To make your workflow smoother, we’ve introduced the **'Starred'** feature for test suites and folders.

**Now you can:**

- ⭐ **Star any suite/folder** you plan to work on — whether it’s for the current sprint, a specific release, or ongoing maintenance.
- 📂 **Create your own quick-access list** of suites to eliminate repetitive navigation through the entire test tree.
- 🔍 **Mark favourites directly from search results** — if you’re looking for a test or suite/folders by keyword or using filters you can instantly star it without leaving the search view.
- ⏱ **Quickly return to starred suites/folders** even after filters or selections are reset — simply use the **'Starred'** filter to jump back.
- 🛠 **Work more efficiently** by keeping frequently accessed suites/folders at your fingertips, especially in large or multi-team projects.

Whether you’re focusing on smoke tests, regression packs, or a specific customer scenario, the **'Starred'** feature ensures you spend less time navigating and more time testing.

![Testomat.io - Mark Folders & Suites as Favourites](./images/star_suite.gif)

:::note

To remove all suites/folders from Favourites with one click: Use the **'Starred'** filter -> click '**Crossed star'** button -> confirm action.

![Testomat.io - UnMark Folders & Suites as Favourites](./images/unstar_suite.png)
:::