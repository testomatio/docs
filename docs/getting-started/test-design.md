---
permalink: /getting-started/test-design
title: Test Design
editLink: true
---

# Test Design

When a new project is created, there are multiple options to start:

![Choose what to do next](images/2023-08-03_00.37.59@2x.png)

1. Create new suite and start adding tests
2. Import automated tests from source code
3. Import tests from CSV file from another Test Management System

## Creating a test

Tests are created within a suite. 

![Create suite](images/2023-08-03_00.40.35@2x.png)

To create a new suite use "+" button or input field. 
Open a newly created suite.

To add a new test to the suite you are currently in,  click on **New Test** button.

![Create a test](images/2023-08-03_00.42.32@2x.png)

Then input the name and the description of your test. 

![Create test name and test description](images/2023-08-03_00.45.26@2x.png)

It is also possible to the test straightaway from this screen. Simply input the test's title and click on the **Create** button. You can add the description at any time later. 

![Qauick test creation](images/2023-08-03_00.49.14@2x.png)

Repeating these steps, you can easily add as many tests as you need within a reasonable period of time.

## Suites and folders

Unlike other test management systems, **Testomat.io doesn't allow suite to include other suites and tests**. That's why you can either create a suite (a collection of tests) or folder (collection of suites).

::: warning
When creating a suite you have to explicitly set its type: a suite or a folder.
:::

![New suite](images/2023-08-03_00.53.02@2x.png)

This was designed so tests structure could match the filesystem. For instance, if you use BDD project, feature file can contain scenarios, but can't contain other feature files. The same for automated tests, a file can contain tests but can't contain other files. 

It's assumed that in any moment a manual test can be automated, so it is important to keep the filesystem structure in a project.

An empty suite can be converted to folder or vice versa

![Empty suite](images/2023-08-03_00.54.46@2x.png)


Also you can set an emoji icon for the suite

![Pick emoji](images/2023-08-03_00.57.10@2x.png)

## **How to add a label/tag to a test**

This option is the easiest one! You simply need to add the label's name (preceeded by @ char) in the name field of the test.

![Add tag to a test](images/2023-08-03_00.59.35@2x.png)

And now you can see your label/tag in the test list next to the test's title.

![See the test with tag](images/2023-08-03_01.01.17@2x.png)

## **How to add an attachment to a test**

First of all, you need to open the test that you want to add the attachment to. 

![Open test](images/2023-08-03_01.05.06@2x.png)

Click on the **Attachments** tab.

![Open attachments](images/2023-08-03_01.06.27@2x.png)

Add your attachment via **Browse a file** or simply drag and drop it.

![Click on attachments](images/2023-08-03_01.07.03@2x.png)

You can also add it immediately when you edit the description of the test.

![Attachment in opened test case](images/2023-08-03_01.09.21@2x.png)

## **How to assign a test to a user**

If you want to assign a certain test to a certain user, you should click on this user icon in the upper right corner of the window, as shown in the picture.

![Assign user](images/2023-08-03_01.10.41@2x.png)

Assign a user from the list of users added to the project by clicking on the user's name. Please note, that you need to make sure the intended user is added to the project first!

![Choose user](images/2023-08-03_01.12.09@2x.png)

Now you can see that this test is assigned to a certain user. The user icon has changed accordingly.

![See assigned person](images/2023-08-03_01.12.54@2x.png)

## **How to set a priority to a test**

First, you should open the test and click on the checkbox icon next to the test title, as shown in the picture.

![How to set priority](images/2023-08-03_01.15.20@2x.png)

You will see a list of priority types

![See list of priorities](images/2023-08-03_01.15.54@2x.png)

Click on the priority type you need and you will see the checkbox changed

![Priority changed](images/2023-08-03_01.17.58@2x.png)

Also, you will see set priority in your suite

![Priorities in test tree](images/2023-08-03_01.19.08@2x.png)

## **How to add parameters to a test**

If you need to add parameters to your test you need to click on the vertical ellipsis button

![Open test case additional actions](images/2023-08-03_01.21.06@2x.png)

Then choose Add Parameter from the menu

![Add parameter](images/2023-08-03_01.21.41@2x.png)

You will see a pop-up with instructions. Now you can add your parameters using a comma

![Give parameter set by comma](images/2023-08-03_01.23.41@2x.png)

Click on Create button to apply your parameters

![Create parameter](images/2023-08-03_01.24.31@2x.png)

You will see your added parameters on the bottom of the pop-up

![See parameter](images/2023-08-03_01.25.30@2x.png)

And on the test description page

![See parameter](images/2023-08-03_01.25.47@2x.png)

## **Drag and Drop Your Tests**

You may need to move your tests within a project, for example to another suite. For this purpose, you can use drag and drop. You need to drag a test and drop it into a suite. Please note, you should drop a test to suite name on the top of the suite.

![Alt text](images/2023-08-03_01.29.33.gif)