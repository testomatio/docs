---
title: GitHub Actions
description: Explore how to integrate continuous testing into your CI/CD pipeline using Testomat.io. This guide explains the setup process for Continuous Integration (CI), allowing users to connect their test management tool with popular CI tools like Jenkins, GitLab, and more. Learn how to automate test runs, manage reports, and streamline your testing workflows within a CI environment for effective test tracking and execution.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/github
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/108279592-84f26800-7185-11eb-93a9-a5862f0548e4.l4dPi24m_Z1CfwNn.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Continuous Integration, CI/CD, test automation, test management, Jenkins, GitLab, automated testing, CI tools, testing workflow, test reports
---

1. Create an [access token on GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with access to workflow scope:

![image](./images/107864711-9971f000-6e67-11eb-845d-9155aee9c85e.png)

2. Create a workflow in a GitHub repository. Go to "Actions" tab in repository and click "Create Workflow" button. Then you will get a workflow template. A workflow filename will be used by Testomatio to call a specific workflow.

![image](./images/108279592-84f26800-7185-11eb-93a9-a5862f0548e4.png)

3. This workflow will be used solely by Testomatio so it should start only on `workflow_dispatch` event. The event should be defined with the following input parameters:

```yaml
name: Testomatio Tests

on:
  workflow_dispatch:
    inputs:
      grep:
        description: 'tests to grep '
        required: false
        default: ''
      run:
        required: false
      testomatio:
        required: false
```

4. The job should include a step where the test runner is executed with `--grep` option and TESTOMATIO environment variables passed in. For instance:

```yaml
    - run: npx codeceptjs run --grep "${{ github.event.inputs.grep }}"
      env:
        TESTOMATIO: "${{ github.event.inputs.testomatio }}"
        TESTOMATIO_RUN: "${{ github.event.inputs.run }}"
```

5. Connect a GitHub Actions CI in Testomatio:

![image](./images/108280170-78224400-7186-11eb-8b1c-86f399b630a3.png)

You will need to enter the following

* GitHub Username
* OAuth token (created at step 1)
* organization/repository (or user/repository)
* workflow name, a file name with a workflow, like `testomatio.yml`

7. Save your connection
8. Now, open "Configuration" tab and check the default `ref` value. `ref` is a target branch or a tag on which a tests will be executed. By default, it is set to `master` (most of the repositories still use master as the main branch name, but we will adjust defaults accordingly when things change), but you can choose a different one, like `main`.
9. `run` and `testomatio` inputs are passed from Testomatio. Enable them on Input Variables tab

![image](./images/113137542-57d9b080-922d-11eb-9672-c4a06c00255d.png)

You can pass more input variables if you set them in [Environment Configuration](#environment-configuration)

9. When the connection is saved, open a test and select "Run in CI". Select a target ref and click "Launch"

![image](./images/108280786-5d040400-7187-11eb-810a-d639396c8a3e.png)

10. This will start a new job in GitHub Actions, please check that the job was successfully triggered and completed. After the job has finished a run report will be available on Runs page of Testomatio