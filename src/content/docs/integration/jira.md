---
title: Jira
description: Learn how to integrate Jira with Testomat.io for seamless test management. This guide covers installing the Jira plugin, connecting projects, linking tests and suites to Jira issues, and automating issue creation for failed tests and runs. Streamline your workflow by managing both testing and issue tracking from a single platform.
type: article
url: https://docs.testomat.io/integration/jira/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/191561367-9e4be6fc-2f06-414d-a590-5ae85ee2d26b.DDEoSJfA_1OC1KS.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Jira integration, test management, issue tracking, linking tests, Jira issues, plugin setup, automated issues, test defects, QA tools
---

## Installing Testomatio Plugin in JIRA

Install [Testomatio Plugin from Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224120/testomatio?hosting=cloud&tab=overview)

> We also provide a Testomatio Plugin for Jira Server. Contact Testomatio Team to learn more about it.

## Connecting to JIRA project

<Aside>
Please note connecting to JIRA project requires admin rights to enable two-way integration capabilities like editing test cases or executing tests directly in JIRA. So user that is used to make JIRA configuration on project settings should have JIRA admin rights otherwise Testomat.io project won't possible to connect to JIRA.
</Aside>

To link tests to JIRA issues connect a Testomatio project to JIRA project.

* Open a Testomatio project
* Navigate to "Setting" > "JIRA Integration"
* Click "Add Jira project"

![CleanShot 2022-09-21 at 18 58 45@2x](./images/191553780-32626df6-72cf-459c-a3ef-9feb899c10a7.jpg)

Provide connection details:

* Email (or username for Jira Server setup)
* API token (or password for Jira Server setup)
* Jira URL
* Project ID

If you use JIRA Cloud, obtain an API token for your user account.
If you use JIRA Server, use the password from your user account.

![CleanShot 2022-09-21 at 19 02 04@2x](./images/191554363-292706f8-1ea4-47cb-8b4e-e88e6bbb0227.jpg)

Click "Save"

Once the project is connected you will see your integration listed on the Settings page

> You can connect to multiple JIRA projects from a Testomatio project. Follow the same instructions to connect to another project.

![CleanShot 2022-09-21 at 19 06 05@2x](./images/191555232-7c48a635-dbf5-49ff-8b7b-b87f323aec11.jpg)

## Linking Test to JIRA Issue

To link a test to an issue, open a test in a Testomatio project that previously was connected to JIRA project. Select "Attach Jira Issue" in the dots menu.

![CleanShot 2022-09-21 at 19 24 14@2x](./images/191559194-3e330a81-d98c-4f24-8978-e64632ae68ef.jpg)

When attaching a test to an issue you can either link to an existing issue or create a new one.

![CleanShot 2022-09-21 at 19 26 51@2x](./images/191559583-504e867b-185a-4672-94d9-53ae6813a514.jpg)

This test will be displayed in Jira under the Issue view:

![CleanShot 2022-09-21 at 19 34 33@2x](./images/191561367-9e4be6fc-2f06-414d-a590-5ae85ee2d26b.jpg)

Please note, that you can link a test to multiple issues. In this case their IDs will be displayed in test view in Testomatio:

![CleanShot 2022-09-21 at 19 28 55@2x](./images/191560321-46482505-4509-454a-a633-a7be87816520.jpg)

## Linking Suite to JIRA Issue

A suite can be attached to a JIRA issue similarly to a test. When attaching a suite, **all tests inside that suite will be linked to a JIRA issue** (this doesn't include tests from sub-suites). 

![CleanShot 2022-09-21 at 19 36 25@2x](./images/191562188-4192ca13-e0ca-429b-815b-b0ffd680ec57.jpg)

If your tests from the linked Suite are not shown in the Jira issue, click on the menu-button and on "Testomatio"

![CleanShot 2022-09-21 at 19 40 19@2x](./images/191562634-894acdb6-9316-4427-9185-e0bd34e3aa83.jpg)

Now tests from added Suite are shown in the Jira issue:

![CleanShot 2022-09-21 at 19 44 06@2x](./images/191563321-14208936-0c61-4886-882a-7b7db081e9fb.jpg)

If you unlink an issue from a suite, all tests of this suite will be unlinked as well.

## Creating JIRA Issue

Testomat.io makes it incredibly convenient to create issues for Jira directly from your Runs. With just a few clicks, you can instantly log detailed bug reports, complete with test context and steps to reproduce. 

### Failed Test

To create a JIRA issue for a Failed Test,  open a Run with a failed test. Find a test in list, move the cursor over it and click on the **Link to Issue** icon:

![Testomatio.io - Creating JIRA Issue for Failed Test](./images/New_7T8nObH5_2024-10-19.png)

You can link it to an existing issue **(1)** or create a new one **(2)**.

Once you have decided to create an issue in your Jira project, you can select its ticket types **(3)**.

![Testomatio.io - Link Failed Test to existing issue or create a new one](./images/New_Y2SJbV9K_2024-10-19.png)

You can even create an issue as a subtask by **specifying a Parent ticket**:

![Testomatio.io - Creating JIRA Issue as Subtask](./images/New_8rxMYOhd_2024-10-19.png)

The generated ticket will contain the specified information, as well as information about the test run and a web link to the test run report:

![Testomatio.io - Created ticket in Jira](./images/New_8ENxIFXB_2024-10-19.png)

### Failed Run

To create a JIRA issue for a Failed Manual or Automated Run, open the run and select the **Link to Issue** option from the dots menu:

![Testomatio.io - Creating JIRA Issue for Failed Run](./images/New_cLq5eNs9_2024-10-19.png)

Create a new issue for a run or append to an existing issue.

![Testomatio.io - Link Failed Run to existing issue or create a new one](./images/New_tYJ8Bm2P_2024-10-19.png)
