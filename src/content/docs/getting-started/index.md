---
title: Start From Scratch
description: This guide helps users start from scratch with Testomat.io by creating projects, writing test cases, running manual and automated tests, and analyzing results with detailed reporting and analytics. It also includes importing automated tests and tracking automation coverage for optimization.
type: article
url: https://docs.testomat.io/getting-started/start-from-scratch/
head:  
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, getting started, manual tests, automated tests, test reporting, project creation, test analytics, automation coverage, test cases, test management system
---

<!-- 
> If you don't have any manual or automated tests yet - follow this guide. Otherwise, pick the section of the guide relevant to your project. You might want to start from [this section](https://docs.testomat.io/getting-started/import-tests-from-source-code/) if you consider **importing tests from source code** into Testomat.io. For those interested in importing tests from the **Cucumber** framework, go straight to [this section](https://docs.testomat.io/getting-started/import-tests-from-cucumber/#why-do-i-need-to-import-my-tests)! 
-->

Welcome! This section guides you through the initial steps of using Testomat.io to organize and manage your testing process effectively. If you don't have any manual or automated tests yet - follow this guide.

## Create Project

Register at [app.testomat.io](https://app.testomat.io) and activate your user account. Then create a new project.

![Testomat.io - Create new project](./images/New_qIJOdkr6_2024-07-09.png)

The type of your new project will influence the look of your interface, as well as its intended audience. Choose **BDD Project** if you plan to follow BDD descriptions or use the Cucumber framework in future. If you haven't decided yet, you can start with default **Classical Project**. Depending on your choice, the interface will differ, as follows:

* Within a **BDD Project**, you will have feature definitions written both in the source code (by engineers) and in Testomatio (by managers and QAs). So you will be able to track and plan Cucumber automation, as well as synchronize the actual feature files with relevant test cases. When a scenario has changed in the system, but has not been updated in the code yet, you will be notified that this certain scenario is out of date.
* Within a **Classical Project**, test cases will be written in free form using markdown. Automated tests will be synced up with test cases, so you will be able to see the test description in one tab and the corresponding test code in another tab. When a description of a test case undergoes changes, you will be notified that a certain test might need to be updated.

Let's start creating a project:

1. Fill the name of your project in the **Project Title** field.  
2. The **Fill demo data** checkbox is optional. This option fills the project with ready-made test data so that new users can try Testomat.io quickly and easily. You can simply skip it. 
3. Click the **Create** button to start a new project. 

![Testomat.io - Select type of project](./images/New_rughOXfd_2024-07-09.png)

You have just created your first project. Now you can start creating suites and test cases for your projects.

![Testomat.io - New blank project](./images/New_WG8caz4S_2024-07-09.png)

## Create Manual Test Cases

Let's take a look at creating test cases step by step.

1. Fill the name in the input field. 
2. Click the **+ Suite** button to create a new suite. 

![Testomat.io - Create test suite](./images/New_0g8uRrQa_2024-07-10.png)

Or another case:

![Testomat.io - Create test suite another way](./images/New_zWbhofhO_2024-07-19.png)

Great, let's move on! Select a certain suite to nest the creation of new test cases in that suite. 

1. Select a test suite.
2. Fill the name in the input field. 
3. Click the **Create** button to create multiple test cases.

![Testomat.io - Create test case](./images/New_j7XWLhgA_2024-07-10.png)

When tests are newly created, they are marked as **manual** by default, which shows that they are ready for manual checks. Also, to create or edit multiple suits or test cases at once use [Bulk Edit](https://docs.testomat.io/usage/bulk-edit/).

As a result, you can add descriptions for each test case. However, the roles of these routine test cases are clearly seen from their titles, so we can probably try to run them to verify the user management part. 

## Run Manual Tests

Now let's take a look at how to run our tests and get a detailed report:

1. Select **Run** tab in the sidebar.
2. Click the **Manual Run** button to create new test run.

![Testomat.io - Run manual tests](./images/New_b2B5giUU_2024-07-10.png)

Before you execute your tests, you might want to specify the run environment options (a list of options is customizable) and the title for this run. In [this section](https://docs.testomat.io/getting-started/running-tests-manually/#multi-environment-tests) you will learn how to set up the environment for test execution. 

3. Select the checkbox next to **All Manual Tests**
4. Click the **Launch** button to execute the tests.

![Testomat.io - Select test plan](./images/New_FcKm9wJz_2024-07-10.png)

You will see the list of all test cases when the test execution is launched. Mark them as passed, skipped or failed. When a test check fails, you can write the description of the failure, attach a relevant image or link/create a defect.

![Testomat.io - Execute tests](./images/New_3ccsUbOe_2024-07-10.png)

Once the run is finished, the overall results of it are available for your review.

## Import Automated Tests

Now let's have a look at the import process for your automated tests. When your project is created, click the **Import from Source Code** button.

![Testomat.io - Import test cases](./images/New_3EXiVWPT_2024-07-25.png)

Or another case:

![Testomat.io - Import automated tests another way](././images/New_GhgayW5f_2024-07-25.png)

In the **Import** section, you are asked to pick the framework, programming language and operating system you are using for testing.

![Testomat.io - Copy instructions](./images/New_eUYumU81_2024-07-25.png)

> If you don't see the framework you work with in this list - please contact us, and we will do our best to add support for it soon! 

Once you have chosen the project parameters, you will be provided with a command that you need to copy and execute in a terminal. Before running this command, please check if your environment matches these requirements:
* If you run tests in NodeJS (JavaScript, TypeScript), you should have NodeJS 10+ and npm to be installed to be able to run this command.
* If you run tests in PHP - you will need PHP > 7.2 and Composer installed. 

Open a terminal, navigate to the tests folder in your project and execute the command. Seeing a report on how many tests were found means that the import command was executed successfully:

![Testomat.io - Execute command in terminal, automated tests found and sent](./images/New_koBKlQw7_2024-07-26.png)

If you don't see a similar message, this might be because our default settings do not work for you. Please check the command's API change command parameters so it could find tests. The most common issues with import are different file naming format and/or incorrect directory for import.

When the tests are finally imported, reopen the project, and you will see that all tests with their folders and files are shown on Testomat.io.

![Testomat.io - Imported automated tests](./images/New_hcbaJeTv_2024-07-26.png)

All imported tests are marked as "Automated" by default. If you click on any of those tests, you will see its code and a link to its repository. Please, check that the link actually points to the corresponding file. Otherwise, you might want to change the repository URL in project settings. 

![Testomat.io - Automated test source code](./images/New_cIVsD22d_2024-07-26.png)

## Run Automated Tests

First, go to the **Runs** page, click on the **Extra** button and pick **Setup Automated**

![Testomat.io - Import automated tests](./images/New_KDQj4E92_2024-10-26.png)

Then you need to pick your framework from the dropdown. Testomat.io will generate instructions regarding your framework. You may need to make few changes to your code, namely, add the Testomat.io plugin.

![Testomat.io - Choose test automation framework](./images/New_yAgJow0e_2024-10-26.png)

Please note that you need to start generated commands in your terminal from your project folder.

![Testomat.io - Execute test cases](./images/New_7kkpQA0c_2024-10-26.png)

If you have successfully launched your automated tests, a new Test Run will appear on Runs page.

![Testomat.io - Automated test run](./images/New_L8L968uj_2024-10-26.png)

## Test Run Report

Click on a run to see the report. Here you can find all the important information about the completed test run. Such as the duration of the run, the performer, and so on. You can also filter by status, find specific tests by tags, or sort by available methods. Moreover, you can see tests results in real-time.

To get a detailed report of the test run, click on the **Report** button.

![Testomat.io - Simplified test report](./images/New_kldg87VR_2024-10-26.png)

Now you can share the report with your stakeholders.

![Testomat.io - Detailed test report](./images/New_v6s3GenD_2024-10-26.png)

## Analytics

Testomat.io Analytics provides an extensive overview of testing data by tracking both automated and manual tests. You can visualize trends over time with custom charts, identify automation coverage, monitor failure patterns, and analyze metrics like flaky or slowest tests. Additional features include a failure board, label and tag statistics for better team insights, allowing for optimized testing and proactive bug prevention.

![Testomat.io - Analytics](./images/New_K2WAzUDa_2024-10-26.png)

Within the Analytics features, **Automation Coverage** stands out as particularly noteworthy. 

Automation coverage in Testomat.io offers insights into the scope of automated testing within a project, tracking the proportion of tests that are automated versus those that remain manual. Through its analytics, Testomat.io provides a detailed view of the automated test ratio, enabling teams to identify areas that may benefit from further automation. This feature helps streamline automation strategies, making it easier to optimize test coverage in line with project goals.

![Testomat.io - Automation Coverage](./images/New_GU20EwjQ_2024-10-26.png)

For more details, refer to the Testomat.io [Analytics](https://docs.testomat.io/usage/analytics/) documentation.

You’ve just scratched the surface of Testomat.io's features. Continue reading to fully explore [Testomat.io](https://app.testomat.io)!
