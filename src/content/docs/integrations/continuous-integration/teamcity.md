---
title: TeamCity
description: Integrate TeamCity with Testomat.io for automated test execution and reporting. The guide details creating projects and build configurations in TeamCity, setting up access keys, defining project parameters, and adding build steps for executing tests. It ensures seamless CI/CD workflows with direct connections to Testomat.io.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/teamcity
head:
  - tag: meta
    attrs:
      name: keywords
      content: TeamCity, Testomat.io, CI/CD integration,  CI connection, CI Integration, TeamCity project, automated testing, build configurations, Access Token, access keys, test reporting, project parameters, test management, environment variables, automated tests
---

Before configuring the TeamCity and Testomat.io integration, create a new project in your TeamCity workspace:

![Testomat.io - TeamCity Create Project](./images/TeamCity_1.png)

On the same page Create Build Configuration.

**Build configurations define how to retrieve and build sources of a project.**

Create a Access Token for the user:

![Testomat.io - TeamCity Access Token](./images/TeamCity_2.png)

Open **'Parameters'** and setup new environment variables with empty default values:

- ```run```
- ```testomatio```
- ```grep```
- ```testomatio_url```

![Testomat.io - TeamCity Set Project Parameters](./images/TeamCity_3.png)

Add a new Build Step: Command Line.

Script should include a step where the test runner is executed with `—grep` option and `TESTOMATIO` environment variables passed in.

For instance: ```- npx codeceptjs run-workers 2 --grep "${grep}"```

![Testomat.io - TeamCity Build Step](./images/TeamCity_4.png)

Save the build and switch to Testomat.io. To integrate TeamCity with your Testomat.io project follow the steps described below:

1. Go to **'Settings'**.
2. Select **'Continuous Integration'**.
3. Click **'Connect to CI'**.

![Testomatio - CI](./images/CI_4.png)

4. Select **'TeamCity'** and enter following details on the **'Connection'** tab:

- `Teamcity Host`.
- `API token` - API token from TeamCity Domain Authentication.
- `Build Name`.

![Testomatio - TeamCity](./images/TeamCity_5.png)

5. Switch to **'Input Variables'** tab and select checkboxes:

- Send Run ID as `run` input (required for scheduled jobs).
- Send Testomat.io API key as `testomatio` input.
- Send Testomat.io Server URL as `testomatio_url` input (if you use on-premise setup).

:::note

You can set and pass more input variables if you set them in [Environment Configuration](./index.md#environment-configuration). For example: test environment, browser, branch, etc.

:::

6. Click on **'Save'** button to save the connection.

![Testomatio - TeamCity](./images/TeamCity_6.png)

7a. When the connection is saved, open **'Runs'** page and select `Run Automated Tests in CI` option in extra menu.

![Testomatio - CI Run](./images/CI_Run_1.png)

8a. Select **'TeamCity'** profile in a list, select a target ref or any other variables, if any were configured. Optionally, select a **Test Plan** or create a new one.

9a. Click on **'Launch'** button and wait for the results.

![Testomatio - TeamCity](./images/TeamCity_7.png)

OR

7b. On **'Tests'** page select any automated suite or test case -> click **'Extra menu'** button -> select **'Run Tests'** option -> open **'Run in CI'** tab.

8b. Select **'TeamCity'** profile in a list, as well, select a target ref or any other variables, if any were configured.

9b. Click on **'Launch'** button and wait for the results.

![Testomatio - TeamCity](./images/TeamCity_7b.gif)

This will start a new job in TeamCity, please check that the job was successfully triggered and completed. After the job has finished, a run report will be available on Runs page of Testomat.io.

![Testomatio - TeamCity](./images/TeamCity_8.png)