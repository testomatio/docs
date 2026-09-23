---
title: Suites and Folders
description: Organize tests with suites and folders in Testomat.io.
type: article
url: https://docs.testomat.io/project/tests/suites-and-folders
head:
 - tag: meta
   attrs:
     name: keywords
     content: test suite, folder, test tree, create a suite, convert suite to folder, starred suites, favourites, breadcrumbs, Testomat.io
---

A **suite** contains tests. A **folder** groups suites.

![A folder holds folders and suites, a suite holds tests, and a suite never holds another suite](./images/suites-folders/test-tree.png)

## Create a Suite or Folder

Choose **New suite** when you want to add tests. Choose **New folder** when you want to group suites.

1. Go to the **Tests** page.
2. Click **+ New**.
3. Select **+ New suite** or **+ New folder**.
4. Enter a name.
5. Click **Save**.

The new item appears in the test tree. Open a suite to add tests.

![The new suite dialog with the name field and the suite or folder type selector](./images/suites-folders/1-create-new-suite.png)

## Add an Emoji to a Suite

Add an emoji to make a suite easier to spot in the test tree. Yopu can remove and change it at any time.

![The emoji picker open on a suite](./images/suites-folders/2-pick-emoji.png)

## Navigate with Breadcrumbs

Breadcrumbs show the test's location in the tree.

Click a breadcrumb to go back to a parent suite or folder.

Hover over a shortened breadcrumb to see its full name.

![Breadcrumbs above a nested test, with a tooltip showing the full suite name](./images/suites-folders/3-breadcrumb-navigation.png)

## Star Suites and Folders

Star items you use often to find them under the **Starred** filter.

1. Go to the **Tests** page.
2. Hover over a suite or folder.
3. Click the **star** icon.

You can also star an item from search results.

![Starring a suite in the test tree and the Starred filter showing it](./images/suites-folders/4-star-suite.png)

### Clear Starred Items

1. Apply the **Starred** filter.
2. Click the **Crossed star** button.
3. Confirm the action.

## Convert a Suite to a Folder

Convert a suite when you need to place other suites alongside it.

1. Go to the **Tests** page.
2. Open the suite.
3. Open the **(...)** menu.
4. Select **Convert to folder**.
5. Confirm the action.

![The Convert to folder option in the suite extra menu](./images/suites-folders/5-convert-to-folder.png)

The new folder keeps the suite inside it, along with all its tests and history.

Before:

```text
Notifications (Suite)
├── Test 1
└── Test 2
```

After:

```text
Notifications (Folder)
└── Notifications (Suite)
    ├── Test 1
    └── Test 2
```

You can now add other suites to the folder.

## Next Steps

- [Create a Test](https://docs.testomat.io/project/tests/create-a-test)
- [Copy and Move your Tests](https://docs.testomat.io/project/tests/copy-and-move-your-tests)
- [Other Features for Test case Design](https://docs.testomat.io/project/tests/other-features-for-test-case-design)