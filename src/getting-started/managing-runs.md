---
permalink: /getting-started/managing-runs
title: Managing Runs
editLink: false
---

# Managing Runs

## Reports

When you run tests with Testomat.io it will generate a Run Report with the results. We have such options as **basic view** and **extended view**. Let's have a look at each of them.

**Basic view**

Clicking on the Test Run will toggle RunReport screen in basic view.

![33](https://user-images.githubusercontent.com/77803888/108555719-87c49880-72fe-11eb-9503-efd242e5a44f.jpg)

Here you can see 1. a list of tests, 2. their status (Passed/ Failed/ Skipped), 3. general information on the Run Result.

![333](https://user-images.githubusercontent.com/77803888/108555736-8dba7980-72fe-11eb-9f52-f23a6e44cce1.jpg)

Also, you can click on test and open it to see details.

![3333](https://user-images.githubusercontent.com/77803888/108555750-93b05a80-72fe-11eb-993d-b935e8297f39.jpg)

**Extended view**

If you click on Report button you will see the extended view of the Run Report.

![33333](https://user-images.githubusercontent.com/77803888/108555796-a32fa380-72fe-11eb-9cee-11e4583a85ef.jpg)

You can see such options here: 1. a list of tests 2. overview of all executed tests 3. Report Summary.

![333333](https://user-images.githubusercontent.com/77803888/108555804-a7f45780-72fe-11eb-9729-346afc64d287.jpg)

If you hover your tests in Overview field you will see a summary of the test and its status. Also, you can click on a test and see its details.

![33333333](https://user-images.githubusercontent.com/77803888/108556510-c7d84b00-72ff-11eb-9002-0e4913c4f5ef.gif)

You can use ↓ and ↑ keys to navigate the tests and have a quick view of details for each test.

![3333333](https://user-images.githubusercontent.com/77803888/108555900-d07c5180-72fe-11eb-82e7-f8b058438eca.gif)

## RunGroups

You can group your Runs within Testomat.io. To do this you need to click on New Group button

![4](https://user-images.githubusercontent.com/77803888/108557489-5bf6e200-7301-11eb-875c-3c651955e05b.jpg)

On New RunGroup screen you need
1. Choose a group type
2. Add a Name of a group
3. Choose Merge strategy
4. Click on Save button

![44](https://user-images.githubusercontent.com/77803888/108557953-f2c39e80-7301-11eb-8994-a478077b48a2.jpg)

A New RunGroup will appear on Runs page

![444](https://user-images.githubusercontent.com/77803888/108558191-3cac8480-7302-11eb-8365-22b3dcd095c4.jpg)

To put Manual Run to a RunGroup you need to open it and click on Add Manual Run button

![4444](https://user-images.githubusercontent.com/77803888/108558574-c9efd900-7302-11eb-91b6-e8e58d517b13.jpg)

To put an Automated Run to a RunGroup you need to execute your tests with Testomat.io providing TESTOMATIO_RUNGROUP_TITLE="Build ${BUILD_ID}". 

Now you can see Test Runs in a created RunGroup

![44444](https://user-images.githubusercontent.com/77803888/108561751-6fa54700-7307-11eb-9a79-3321608fa71c.jpg)

## Merge Strategy

With Testomat.io you can use different Merge Strategies for Test Runs analysis. It helps to aggregate results when a group contains multiple runs.

You can use it when merging few Runs:

![5](https://user-images.githubusercontent.com/77803888/108630710-d7c26d00-746e-11eb-8b44-a3f5dcfdfe23.jpg)

Or when you add/edit RunGroup

![55](https://user-images.githubusercontent.com/77803888/108630727-ed379700-746e-11eb-8965-fbafb42c61d8.jpg)

## Merge Runs

With Testomat.io you can merge your Test Runs. To do this you need to choose Test Runs you want to merge and click on Merge button on the top of the page

![6](https://user-images.githubusercontent.com/77803888/108630814-72bb4700-746f-11eb-8122-ef4f38a1481c.jpg)

Here you will need to 1. Select testing Environment 2. Enter a name for merged run 3. Choose a Merging Strategy 4. Click on Merge button

![66](https://user-images.githubusercontent.com/77803888/108630945-30ded080-7470-11eb-8399-18d103243939.jpg)

Your merged run will appear in the list of runs on the Runs page 

![666](https://user-images.githubusercontent.com/77803888/108630987-65528c80-7470-11eb-8f98-4922d5058ee6.jpg)

## Relaunch Runs

For some reason, you may need to re-check some tests in your Run manually. You can use Relaunch Run options for such cases. To do this you need to 1. click on the menu button and 2. click on Relaunch manually button

![7](https://user-images.githubusercontent.com/77803888/108631310-f1b17f00-7471-11eb-86fb-07a024cf804c.jpg)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![77](https://user-images.githubusercontent.com/77803888/108631334-24f40e00-7472-11eb-8678-ea187b495b49.jpg)

When you finish you need to click on Finish button. You will see tests with new status and new Run Status

![777](https://user-images.githubusercontent.com/77803888/108631339-2ae9ef00-7472-11eb-8f4c-8736dd084826.jpg)

Also, your Test Run will contain updated information on its results: You will see a changed tag and Run status.

![7777](https://user-images.githubusercontent.com/77803888/108631468-b5cae980-7472-11eb-8306-2b5a2c48ebc5.jpg)

## Launch a Copy

If you need need to re-check some tests in your Run manually, but for some reason, you want to save this Test Run you can use Launch a copy option. To do this you need to 1. click on the menu button and 2. click on Launch a Copy Manually button.

![8](https://user-images.githubusercontent.com/77803888/108631687-bb74ff00-7473-11eb-981d-49e770c67dcd.jpg)

Your Test Run will open in Manual Run window and you will be able to re-check tests and change their status:

![88](https://user-images.githubusercontent.com/77803888/108631721-e9f2da00-7473-11eb-95c5-d4d3fc5fc606.jpg)

When you finish you need to click on Finish button. You will see a new Test Run tests with new status and new Run Status:

![888](https://user-images.githubusercontent.com/77803888/108631777-41914580-7474-11eb-8441-b898f0ae70f4.jpg)

On the Runs page you will see a copy of your Test Run with new tests results:

![8888](https://user-images.githubusercontent.com/77803888/108631835-99c84780-7474-11eb-837e-2469c0b4ec85.jpg)










 












