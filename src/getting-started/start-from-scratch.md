---
permalink: /getting-started/start-from-scratch
title: Start From Scratch
editLink: false
---

# Start From Scratch

> If you don't have any manual or automated tests yet - follow this guide. If not - pick the right one from this section.

## Create a new project

Register at [app.testomat.io](https://app.testomat.io) and activate your user account. Then create a new project.

![image](https://user-images.githubusercontent.com/220264/107103355-0b25ba80-6826-11eb-8ee3-941eea060212.png)

When creating a project choose the type of project. If you plan to follow BDD descriptions or use Cucumber framework in the future - choose BDD style. If you are unsure - make a "Classical" project. Depending on your choice an interface will differ a bit.

* Within **BDD project** you will have feature definitions written both in source code (by engineers) and in the Testomatio (by managers and QAs). So you will be able to track and plan Cucumber automation and synchronize the actual feature files with test cases. When the scenario has changed in the system but not updated in the code - you will be notified that the scenario is out of date.
* In **Classical project** test cases will be written in free form in markdown format. Automated tests will be synced up with test cases so you will see the test description on one tab and test code on the second tab. When a description of a test case changes you will be notified that a test might need to be updated.

![image](https://user-images.githubusercontent.com/220264/107103409-39a39580-6826-11eb-833b-e23a02e68b24.png)

Choose a name for your project and skip the Repository URL. Click "Create" to start a new project.

![image](https://user-images.githubusercontent.com/220264/107103420-3e684980-6826-11eb-8aa9-47b440993e49.png)

## Write First Test Cases

Now you can start creating suites & test cases for your projects. For this we have bulk-create input so you could create as many test suites as you have on your mind:

![image](https://user-images.githubusercontent.com/220264/107103474-6c4d8e00-6826-11eb-8108-f219782bd2d8.png)

Select a suite to create new test cases inside that suite. You can do that fast using the same Bulk creation editor:

![image](https://user-images.githubusercontent.com/220264/107103529-ae76cf80-6826-11eb-86b1-2af5f76570a9.png)

When tests are created they are marked as "manual" - so they are prepared for manual checks.

You can now add descriptions for each test case. However, those test cases are pretty clear by their titles so we can probably try to execute them to verify the user management part. 

## Run Manual Tests

![image](https://user-images.githubusercontent.com/220264/107103555-c77f8080-6826-11eb-8b26-cc4fb229cd9b.png)

When executing run you can choose environment options (list of options can be configured) and title for this run. Optionally a running environment of a run can be set.

![image](https://user-images.githubusercontent.com/220264/107103593-e7af3f80-6826-11eb-82d3-35464c5ed583.png)

When launched you will see a list of all test cases. Mark them as passed or failed. When a check has failed you can write a description of it and attach an image

![image](https://user-images.githubusercontent.com/220264/107103637-0ca3b280-6827-11eb-9251-e2c34ce4b2c0.png)

Once the run was finished the overall result of a Run should be like this:

![image](https://user-images.githubusercontent.com/220264/107103698-378e0680-6827-11eb-8ee7-b05bdd1fef10.png)

A more detailed report can be seen when clicking "Report" button

![image](https://user-images.githubusercontent.com/220264/107103728-51c7e480-6827-11eb-8a68-f62a808f224c.png)
