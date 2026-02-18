---
title: Azure Pipelines
description: Integrate Azure Pipelines with Testomat.io to automate test execution and reporting. This guide explains setting up CI connections, creating input variables, and configuring pipelines to run tests with tools like CodeceptJS, Jest, or Playwright. It also details passing custom variables and specifying branches for targeted testing.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/azure
head:  
  - tag: meta
    attrs:
      name: keywords
      content: Azure DevOps, Testomat.io, CI connection, CI Integration, Azure Pipeline, Personal Access Token, Continious Integration, Test Automation, Test Management, Microsoft Azure, input variables, configuration, workflows, test reporting
---

To connect Azure DevOps to Testomat.io, first you need to create an Private Access Token (PAT).
Learn how to create a PAT following the link - [Create PAT](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows).

And follow the instructions below:

1. Create a **PAT** in your Azure DevOps account with permission to **Read & Execute Build**.

![Testomatio - Azure Pipeline](./images/Azure_D_1.png)

2. Obtain the **ID** of a Pipeline you want to execute. Open a Pipeline and copy its ID from `definitionId` query parameter. On this screenshot the ID is `1`.

![Testomatio - Azure Pipeline](./images/Azure_D_2.png)

3. Create a new **CI connection** inside your project in Testomat.io: go to **'Settings' -> 'Continuous Integration' ->** click **'Connect to CI'** select **'Azure Pipelines'**

![Testomatio - Azure Pipeline](./images/Azure_D_3.png)

4. Enter following details on the **'Connection'** tab:

- `Personal Access Token` - PAT created, in Azure DevOps during Step 1.
- `Azure DevOps Organization`.
- `Azure DevOps Project`.
- `Azure DevOps Pipeline Id` - open a pipeline and copy a number value of `definitionId` param from URL (in our case `definitionId = 1`).
- `Azure Server URL` - in case you use self-hosted Azure DevOps Server instead of Azure Cloud.

![Testomatio - Azure Pipeline](./images/Azure_D_4.png)

5. Switch to **'Input Variables'** tab and select checkboxes:

- Send Run ID as `run` input (required for scheduled jobs).
- Send Testomat.io API key as `testomatio` input.
- Send Testomat.io Server URL as `testomatio_url` input (if you use on-premise setup).

6. Save the conection

![Testomatio - Azure Pipeline](./images/Azure_D_5.png)

7. Testomat.io will need to send Input Variables into a Pipeline. For this, you need to enable them inside a Pipeline using **Azure DevOps UI**. Open a Pipeline and edit it.

![Testomatio - Azure Pipeline](./images/Azure_D_6.png)

8. Click **'Variables'** button

![Testomatio - Azure Pipeline](./images/Azure_D_7.png)

9. Create the following variables:

- `grep`
- `run`
- `testomatio`
- `testomatio_url`

![Testomatio - Azure Pipeline](./images/Azure_D_8.png)

Do not set defaults to this variable and tick **'Let users override this value when running this pipeline'** so Testomat.io could set these variables via API request.

![Testomatio - Azure Pipeline](./images/Azure_D_9.png)

10. Update the Pipeline to use passed variables. Update the script and pass environment variables to a test runner. Each variable can be accessed as `$(variable)`.
For CodeceptJS this command will look the following way:

```yaml
- script: |
    TESTOMATIO=$(testomatio) TESTOMATIO_URL=$(testomatio_url) TESTOMATIO_RUN=$(run) npx codeceptjs run --grep="$(grep)"
  displayName: 'run tests'
```

:::note

If you use Jest, Playwright, Cucumber, Cypress, etc. replace  `npx codeceptjs run` with the execution command of your test runner.

:::

You can pass more custom variables into a Pipeline defining them in a Pipeline UI first and listing them in Testomat.io configuration as well. These variables should be set in Azure in the same way as `grep`. See [Environment Configuration](./index.md#environment-configuration) to see how they can be configured in Testomat.io.

To specify a different branch to run tests add `ref` parameter on **'Configuration'** tab specifying target ref.

![Testomatio - Azure Pipeline](./images/Azure_D_10.png)

To specify `develop` branch add this as config parameter:

```
ref=refs/heads/develop
```