---
permalink: /getting-started/managing-runs
title: Managing Runs
editLink: true
---

# Managing Runs

## Reports

When you run tests with Testomat.io it will generate a Run Report with the results. We have such options as **basic view** and **extended view**. Let's have a look at each of them.

**Basic view**

Clicking on the Test Run will toggle RunReport screen in basic view.

![toggle RunReport screen](images/1-1.png)

Here you can see 1. a list of tests, 2. their status (Passed/ Failed/ Skipped), 3. general information on the Run Result.

![run overview](images/2-2.png)

Also, you can click on test and open it to see details.

![see details](images/3.png)

**Extended view**

If you click on Report button you will see the extended view of the Run Report.

![Report button](images/4.png)

You can see such options here: 1. a list of tests 2. overview of all executed tests 3. Report Summary.

![Report Details](images/5.png)

You can sort suites by Name and by Failed status in the Overview widget. 

![Averview widget](images/6.gif)

You can use ↓ and ↑ keys to navigate the tests and have a quick view of details for each test.

![3333333](images/108555900-d07c5180-72fe-11eb-82e7-f8b058438eca.gif)

## RunGroups

You can group your Runs within Testomat.io. To do this you need to click on New Group button

![New Group button](images/7.png)

On New RunGroup screen you need

1. Add a Name of a group
2. Choose Merge strategy
3. Choose a group type (optional)
4. Click on Save button

![New RunGroup screen](images/8.png)

A New RunGroup will appear on Runs page

![RunGroup will appea](images/9.png)

To put Manual Run to a RunGroup you need to open it and click on Add Manual Run button

![put Manual Run](images/10.png)

To put an Automated Run to a RunGroup you need to execute your tests with Testomat.io providing TESTOMATIO_RUNGROUP_TITLE="Build ${BUILD_ID}". 

Now you can see Test Runs in a created RunGroup

![Test Runs in a created RunGroup](images/11.png)

## Merge Strategy

With Testomat.io you can use different Merge Strategies for Test Runs analysis. It helps to aggregate results when a group contains multiple runs.

You can use it when merging few Runs:

![merge str](images/12.png)

Or when you add/edit RunGroup

![merge str 2](images/13.png)

## Merge Runs

With Testomat.io you can merge your Test Runs. To do this you need to choose Test Runs you want to merge and click on Merge button on the top of the page

![merge runs](images/14.png)

Here you will need to 1. Select testing Environment 2. Enter a name for merged run 3. Choose a Merging Strategy 4. Decide to keep original runs or not. 5. Click on Merge button

![merge runs steps](images/15.png)

Your merged run will appear in the list of runs on the Runs page 

![merged run](images/16.png)

## Relaunch Runs

For some reason, you may need to re-check some tests in your Run manually. You can use Relaunch Run options for such cases. To do this you need to 1. click on the menu button and 2. click on Relaunch manually button

![Relaunch Run](images/17.png)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![relaunched Run](images/18.png)

When you finish you need to click on Finish button. You will see tests with new status and new Run Status

![new status](images/19.png)

Also, your Test Run will contain updated information on its results: You will see a changed tag and Run status.

![New statuses](images/20.png)

## Launch a Copy

If you need need to re-check some tests in your Run manually, but for some reason, you want to save this Test Run you can use Launch a copy option. To do this you need to 1. click on the menu button and 2. click on Launch a Copy button.

![Launch a Copy button](images/21.png)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![test run copy](images/22.png)

When you finish you need to click on Finish button. You will see a new Test Run tests with new status and new Run Status:

![new Test Run tests](images/23.png)

On the Runs page you will see a copy of your Test Run with new tests results:

![copy of your Test Run](images/24.png)










 












