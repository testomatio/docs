---
permalink: /getting-started/test-design
title: Test Design
editLink: true
---

# Test Design

When a new project is created, there are multiple options to start:

![Create suites](images/image.png)

1. Create new suite and start adding tests
2. Import automated tests from source code
3. Import tests from CSV file from another Test Management System

## Creating a test

Tests are created within a suite. 

![Create suites](images/image-3.png)

To create a new suite use "+" button or input field. 
Open a newly created suite.

To add a new test to the suite you are currently in,  click on **New Test** button.

![107249651-397ce300-6a3c-11eb-85ea-66e0ac7fde45](images/107252534-1ce1aa80-6a3e-11eb-85cf-90ffaa24d587.png)

Then input the name and the description of your test. 

![107249993-721cbc80-6a3c-11eb-86a1-4216cef4c3a3](images/107252546-1fdc9b00-6a3e-11eb-8c29-f76410ff2c22.png)

It is also possible to the test straightaway from this screen. Simply input the test's title and click on the **Create** button. You can add the description at any time later. 

![Screenshot_1](images/107253458-fe2fe380-6a3e-11eb-9409-5e49b9d365cb.jpg)

Repeating these steps, you can easily add as many tests as you need within a reasonable period of time.

## Suites and folders

Unlike other test management systems, **Testomat.io doesn't allow suite to include other suites and tests**. That's why you can either create a suite (a collection of tests) or folder (collection of suites).

::: warning
When creating a suite you will need to explicitly set its type: a suite or a folder.
:::

This was designed so tests structure could match the filesystem. For instance, if you use BDD project, feature file can contain scenarios, but can't contain other feature files. The same for automated tests, a file can contain tests but can't contain other files. 

It's assumed that in any moment a manual test can be automated, so it is important to keep the filesystem structure in a project.

An empty suite can be converted to folder or vice versa

![Empty suite](images/image-1.png)

Also you can set an emoji icon for the suite

![Emoji pick](images/image-2.png)

## **How to add a label/tag to a test**

This option is the easiest one! You simply need to add the label's name (preceeded by @ char) in the name field of the test.

![Screenshot_2](images/107258031-03436180-6a44-11eb-8bb6-4293e9655927.jpg)

And now you can see your label/tag in the test list next to the test's title.

![Screenshot_3](images/107258147-23732080-6a44-11eb-8e3e-e0b9f7dfeaa7.jpg)

## **How to add an attachment to a test**

First of all, you need to open the test that you want to add the attachment to. 

![att 1](images/107259926-430b4880-6a46-11eb-8d1d-db33ffecaa27.jpg)

Click on the **Attachments** tab.

![att 2](images/107259991-54eceb80-6a46-11eb-8ff0-272a62ed463a.jpg)

Add your attachment via **Browse a file** or simply drag and drop it.

![att 3](images/107260167-85cd2080-6a46-11eb-88ff-d732bbc4d289.jpg)

You can also add it immediately when you edit the description of the test.

![att 4](images/107261652-3be53a00-6a48-11eb-8c6e-9a544c06259b.jpg)

## **How to assign a test to a user**

If you want to assign a certain test to a certain user, you should click on this user icon in the upper right corner of the window, as shown in the picture.

![assign 1](images/107271203-91bfdf00-6a54-11eb-897f-9e5f036b95b3.jpg)

Assign a user from the list of users added to the project by clicking on the user's name. Please note, that you need to make sure the intended user is added to the project first!

![assign 2](images/107271246-a2705500-6a54-11eb-9caf-c729ee83bf1e.jpg)

Now you can see that this test is assigned to a certain user. The user icon has changed accordingly.

![assign 3](images/107271569-1d397000-6a55-11eb-9f3e-c42977a7ab1d.jpg)

## **How to set a priority to a test**

First, you should open the test and click on the checkbox icon next to the test title, as shown in the picture.

![prio 1](images/107272525-7ce44b00-6a56-11eb-9136-461a52c8fa0d.jpg)

You will see a list of priority types

![prio 2](images/107272594-97b6bf80-6a56-11eb-9ae7-c2d76c6e9910.jpg)

Click on the priority type you need and you will see the checkbox changed

![prio 3](images/107272685-c0d75000-6a56-11eb-8177-810f632a5c44.jpg)

Also, you will see set priority in your suite

![prio 4](images/107273197-668abf00-6a57-11eb-9312-2ba8755c164e.jpg)

## **How to add parameters to a test**

If you need to add parameters to your test you need to click on the vertical ellipsis button

![param 1](images/107274640-5542b200-6a59-11eb-91e7-50453d3e1fa5.jpg)

Then choose Add Parameter from the menu

![param 2](images/107274735-80c59c80-6a59-11eb-882d-df06a931d720.jpg)

You will see a pop-up with instructions. Now you can add your parameters using a comma

![param 3](images/107274897-b66a8580-6a59-11eb-9634-514a30fe495a.jpg)

Click on Create button to apply your parameters

![param 4](images/107275045-eb76d800-6a59-11eb-8186-092113e94eda.jpg)

You will see your added parameters on the bottom of the pop-up

![param 5](images/107275180-14976880-6a5a-11eb-8e12-0fa6a26754ef.jpg)

And on the test description page

![param 6](images/107275231-25e07500-6a5a-11eb-9ada-aa273d96fea8.jpg)

## **Drag and Drop Your Tests**

You may need to move your tests within a project, for example to another suite. For this purpose, you can use drag and drop. You need to drag a test and drop it into a suite. Please note, you should drop a test to suite name on the top of the suite.

![dragdrop](images/109201066-095a7180-77aa-11eb-8066-7a4d3f6740da.gif)













