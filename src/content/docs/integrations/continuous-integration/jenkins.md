---
title: Jenkins
description: Learn how to integrate Jenkins with Testomat.io for continuous integration. This guide covers creating Jenkins jobs, configuring parameters, triggering builds remotely, and connecting Jenkins with Testomat.io using API tokens. It also includes steps for passing environment variables for test execution and enabling on-premise setups.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/jenkins
head:
  - tag: meta
    attrs:
      name: keywords
      content: Jenkins, Testomat.io, CI connection, CI Integration, Jenkins API Token, Freestyle project, build triggers, remote build, environment variables, CodeceptJS, Jenkins Hostname, input variables, environment configuration, automated tests, test plan
---

To connect Jenkins to Testomat.io you will need a user and an API Token created on Jenkins.
API token can be added on **'Configure'** page of the current user:

![Testomatio - Jenkins](./images/Jenkins.png)

Then, follow the instructions added below:

1. Create a new Jenkins job. Select **'Freestyle project'**.

![Testomatio - Jenkins](./images/Jenkins_1.png)

:::note

It is recommended to avoid spaces in Job Name to prevent issues with connecting to this job via URL.

:::

2. Make this build parametrized

![Testomatio - Jenkins](./images/Jenkins_2.png)

3. Add the following parameters as a string with empty default values:

- `run`
- `testomatio`
- `grep`

:::note

If you use on-premise Testomat.io setup you will also need to add `testomatio_url` parameter.

:::

4. Go to **'Build Triggers'** and select **'Trigger build remotely'**.

![Testomatio - Jenkins](./images/Jenkins_3.png)

5. Proceed with configuring the Job and set all required parameters like SCM and build steps.

![Testomatio - Jenkins](./images/Jenkins_4.png)

Within a step pass in configured parameters as environment variables into the test runner. Let's take CodeceptJS command as an example:

```
TESTOMATIO_RUN=${run} TESTOMATIO=${testomatio} npx codeceptjs run --grep "${grep}"
```

:::note

Prepend `TESTOMATIO_URL=${testomatio_url}` if you use on-premise version

:::

![Testomatio - Jenkins](./images/Jenkins_5.png)

6. Save the build.

After Jenkins is set up, go to Testomat.io and create a new **CI connection** inside your project: 

1. Go to **'Settings'**.
2. Select **'Continuous Integration'**.
3. Click **'Connect to CI'**.

![Testomatio - CI](./images/CI_4.png)

4. Select **'Jenkins'** and fill in all required fields:

- `Jenkins Hostname` - URL of Jenkins host.
- `Username` - a user on Jenkins which will trigger builds.
- `API Token` - a token we created previously in the user's settings.
- `Job Name` - the name of a job we just created.

![Testomatio - Jenkins](./images/Jenkins_7.png)

5. Switch to **'Input variables'** tab and enable variables that were configured for parametrized builds.

:::note

Don't forget to select `testomatio_url` if you use on-premise version.

:::

You can pass more input variables if you set them in [Environment Configuration](./index.md#environment-configuration). For example: test environment, browser, branch, etc.

6. Click **'Save'** button and check the connection.

![Testomatio - Jenkins](./images/Jenkins_8.png)

Now you can run a test or a group of tests via Jenkins CI. 

7a. Open **'Runs'** page then select `Run Automated Tests in CI` option in extra menu.

![Testomatio - CI Run](./images/CI_Run_1.png)

8a. Select **'Jenkins'** profile in a list. Optionally, select a **Test Plan** or create a new one.

![Testomatio - Jenkins](./images/Jenkins_9.png)

OR

7b. On **'Tests'** page select any automated suite or test case -> click **'Extra menu'** button -> select **'Run Tests'** option -> open **'Run in CI'** tab.

8b. Select **'Jenkins'** profile in a list.

![Testomatio - Jenkins](./images/Jenkins_9a.gif)

9. Launch a Run and wait for the results.

![Testomatio - Jenkins](./images/Jenkins_10.png)