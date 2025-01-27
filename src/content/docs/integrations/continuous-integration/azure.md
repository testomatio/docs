---
title: Azure Pipelines
description: Integrate Azure Pipelines with Testomat.io to automate test execution and reporting. This guide explains setting up CI connections, creating input variables, and configuring pipelines to run tests with tools like CodeceptJS, Jest, or Playwright. It also details passing custom variables and specifying branches for targeted testing.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/azure
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/201498983-384a2dd1-1c60-4d2f-bc52-2cb4cd39c0f4.DtHkN85P_2qiNEv.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Azure Pipelines, Testomat.io, CI/CD integration, automated testing, test reporting, CodeceptJS, Jest, Playwright, input variables, environment configuration
---

1. Create a Personal Access Token in your user account with permission to Read & Execute Build

![image](./images/201498799-e2fe4d62-dbc5-4b05-a6aa-158a6043a915.png)

2. Obtain the ID of a pipeline you want to execute. Open a pipeline and copy its ID from `definitionId` query parameter. On this screenshot the ID is `1`:

![image](./images/201498917-5d342aa9-495a-4329-b4da-25f8a86f56bb.png)

3. Create a new CI connection on Continuous Integration page in Settings in Testomat.io.

![image](./images/201498983-384a2dd1-1c60-4d2f-bc52-2cb4cd39c0f4.png)

4. Fill in Private Access Token, Organization name, Project name, ID of a Pipeline

5. Switch to "Input Variables" tab and check boxes:

* Send Run ID as 'run' input (required for scheduled jobs)
* Send Testomatio API key as 'testomatio' input
* Send Testomatio Server URL as 'testomatio_url' input (If you use on-premise setup)

6. Save the conection

7. Testomat.io will need to send input variables into a pipeline. We need to enable them inside a pipeline using Azure DevOps UI. Open a Pipeline and edit it.

![image](./images/201499184-cdaff7a1-7e13-482e-bf7b-43517963cec9.png)

8. Click "Variables" button

![image](./images/201499223-64fd4478-e981-42cb-abff-accc9ebcfb4f.png)

9. Create the following variables:

* `grep`
* `run`
* `testomatio`
* `testomatio_url`

![2022-11-13_01-56](./images/201499260-77f27aed-64fb-4067-8943-3272a35f4072.png)

Do not set defaults to this variable and tick "Let users override this value when running this pipeline" so Testomat.io could set these variables via API request.

![image](./images/201499290-cdc67537-e526-4274-84b1-fc5675de87ab.png)

10. Update the pipeline to use passed variables. Update the script and pass environment variables to a test runner. Each variable can be accessed as `$(variable)`. For CodeceptJS this command will look the following way:

```yaml
- script: |
    TESTOMATIO=$(testomatio) TESTOMATIO_URL=$(testomatio_url) TESTOMATIO_RUN=$(run) npx codeceptjs run --grep="$(grep)"
  displayName: 'run tests'
```
> If you use Jest, Playwright, Cucumber, Cypress, etc replace  `npx codeceptjs run` with the execution command of your test runner.

You can pass more custom variables into a pipeline defining them in a Pipeline UI first and listing them in Testomat.io configuration as well. These variables should be set in Azure  in the same way as `grep`. See [Environment Configuration](./index.md#environment-configuration) to see how they can be configured in Testomat.io

To specify a different branch to run tests add `ref` parameter on Configuration tab specifying target ref.

![image](./images/205988656-7b8e0b6c-860e-4d49-9e6b-c5f450fecb50.png)

To specify `develop` branch add this as config parameter:

```
ref=refs/heads/develop
```