---
permalink: /integration/jira
title: Jira
editLink: false
---

# Jira

## Installing Testomatio Plugin in JIRA

Install [Testomatio Plugin from Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224120/testomatio?hosting=cloud&tab=overview)

> We also provide a Testomatio Plugin for Jira Server. Contact Testomatio Team to learn more about it.

## Connecting to JIRA project

To link tests to JIRA issues connect a Testomatio project to JIRA project.

* Open a Testomatio project
* Navigate to "Setting" > "JIRA Integration"
* Click "Add Jira project"

![image](https://user-images.githubusercontent.com/220264/107305516-cbf8a300-6a8b-11eb-8e0a-91f99883e561.png)

Provide connection details:

* Email (or username for Jira Server setup)
* API token (or password for Jira Server setup)
* Jira URL
* Project ID

If you use JIRA Cloud, obtain an API token for your user account.
If you use JIRA Server, use the password from your user account.

![image](https://user-images.githubusercontent.com/220264/107337523-26f9bc80-6ac3-11eb-9aae-1cf6dc212b16.png)

Click "Save"

Once the project is connected you will see your integration listed on the Settings page

> You can connect to multiple JIRA projects from a Testomatio project. Follow the same instructions to connect to another project.

![image](https://user-images.githubusercontent.com/220264/107337556-32e57e80-6ac3-11eb-856b-d1b322b4bee9.png)

## Linking Test to JIRA Issue

To link a test to an issue, open a test in a Testomatio project that previously was connected to JIRA project. Select "Attach Jira Issue" in the dots menu.

![image](https://user-images.githubusercontent.com/220264/107340353-53fb9e80-6ac6-11eb-95ee-6ff3105f3ab8.png)

When attaching a test to an issue you can either link to an existing issue or create a new one.

![image](https://user-images.githubusercontent.com/220264/107340378-5e1d9d00-6ac6-11eb-9097-624520da3ee1.png)

This test will be displayed in Jira under the Issue view:

![image](https://user-images.githubusercontent.com/220264/107340411-6b3a8c00-6ac6-11eb-87c4-b187fa36a4f8.png)

Please note, that you can link a test to multiple issues. In this case their IDs will be displayed in test view in Testomatio:

![image](https://user-images.githubusercontent.com/220264/107340452-75f52100-6ac6-11eb-8ba8-57174bfcf190.png)

## Linking Suite to JIRA Issue

A suite can be attached to a JIRA issue similarly to a test. When attaching a suite, **all tests inside that suite will be linked to a JIRA issue** (this doesn't include tests from sub-suites). 

![image](https://user-images.githubusercontent.com/220264/107340686-b9e82600-6ac6-11eb-8d91-e58e708961af.png)

If you unlink an issue from a suite, all tests of this suite will be unlinked as well.

## Creating JIRA Issue for a Failed Run

To create a JIRA Issue for a failed manual or automated run open a run and select "Attach Jira Issue" in the dots menu: 

![image](https://user-images.githubusercontent.com/220264/107340742-ca000580-6ac6-11eb-8f91-3a375a4c4aca.png)

Create a new issue for a run or attach it to an existing issue.

![image](https://user-images.githubusercontent.com/220264/107340760-cec4b980-6ac6-11eb-8faf-e250f10c5d68.png)

## Creating JIRA Issue for a Failed Test

Select a Run with a failed test. Find a test in a list and click "Create Jira Issue" button:

![image](https://user-images.githubusercontent.com/220264/107340804-d7b58b00-6ac6-11eb-8879-131c2b582af7.png)

You will be able to create a new issue for this test or link it to existing issue.

![image](https://user-images.githubusercontent.com/220264/107340822-dd12d580-6ac6-11eb-97b3-30d3f353f99b.png)

Created Issue will receive information on a test run and a web link to the Run report will be added:

![image](https://user-images.githubusercontent.com/220264/107340839-e308b680-6ac6-11eb-9481-a08099af4f4f.png)
