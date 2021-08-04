---
permalink: /usage/continious-integration
title: Continious Integration
editLink: false
---

# Continious Integration

Testomatio allows executing tests on CI from its interface. 
A single test, suite, test plan, or all tests can be executed automatically on CI.

Currently following CI systems supported:

* Jenkins
* Bamboo
* GitHub Actions

## Overview

Testomatio uses REST API to trigger jobs on external CI systems. IDs of tests or suites can be passed to the job so only a specific test or suite will be executed. The test runner greps all tests by their IDs and executes a subset of tests. Then a report is sent back to Testomatio via reporter.

![image](https://user-images.githubusercontent.com/220264/108282480-5e82fb80-718a-11eb-9c0c-691309813656.png)

Connecting CI server to Testomatio consist of the following steps:

1. Create Testomatio Project
2. Import automated tests into that project from a repository
3. [Assign Ids](#assigning-ids) for imported tests source code
4. Create a new job in CI according to instructions on this page
5. Connect CI server to Testomatio 
6. Run your tests or suites to get reports!

## Assigning IDs 

To execute a specific test or a suite a test runner should have a way to find a test by its unique name. For this reason, Testomatio IDs can be used. If tests in the source code will have Testomatio IDs it will be very simple to filter tests. We provide a semi-automatic way to assign Testomatio IDs to tests in source code.

For JavaScript frameworks use the same `check-tests` command you used for importing tests with `--update-ids`. The tests must be already imported in Testomatio:

```
TESTOMATIO={apiKey} npx check-tests <framework> <pattern> --update-ids 
```

For Cucumber tests use `check-cucumber` command with the similar `--update-ids` command. The command should be the same as for importing plus `--update-ids` option:

```
TESTOMATIO={apiKey} npx check-cucumber <pattern> --update-ids 
```

This command will update your source code. Please check the changes before committing it.
If the Testomatio IDs were placed correctly you can commit your changes to repository.

From now on, Testomatio can use Test IDs to run exact tests and suites on Continuous Integration servers.


## Configuring CI 

CI configuration has 3 steps:

* establishing a connection with CI
* setting up required input variables
* setting up custom configuration variables

Follow the guide for a corresponding CI to set it up.

### Jenkins

To connect Jenkins to Testomatio you will need a user and an API Token created.
API token can be added on "Configure" page of current user: 

![image](https://user-images.githubusercontent.com/220264/116779414-06684f80-aa7f-11eb-9a63-0231dd19f1be.png)

Then create a new Jenkins job. Select "Freestyle project".

![image](https://user-images.githubusercontent.com/220264/116780134-3154a280-aa83-11eb-8da9-3714a7909c48.png)

> It is recommended to avoid spaces in job name to prevent issues with connecting to this job via URL

Make this build parametrized:

![image](https://user-images.githubusercontent.com/220264/116779732-bc806900-aa80-11eb-9b3b-0415fe67b172.png)

Add the following parameters as a string with empty default values:

* `run`
* `testomatio`
* `grep`

If you use on-premise Testomatio setup you will also need to add `testomatio_url` parameter.

Inside "Build Triggers" select "Trigger build remotely"

![image](https://user-images.githubusercontent.com/220264/116779858-80013d00-aa81-11eb-840d-c272df2e5937.png)

Proceed with configuring the job and set all required parameters like SCM and build steps.

![image](https://user-images.githubusercontent.com/220264/116779906-bb9c0700-aa81-11eb-8de1-448ba9ddffd3.png)

Within a step pass in configured parameters as environment variables into the test runner. Let's take CodeceptJS command as an example:

```
TESTOMATIO_RUN=${run} TESTOMATIO=${testomatio} npx codeceptjs run --grep "${grep}"
```

> Prepend `TESTOMATIO_URL=${testomatio_url}` if you use on-premise versoin

![image](https://user-images.githubusercontent.com/220264/116780412-5518e800-aa85-11eb-88b8-b35853381a91.png)


Save the build and switch to Testomat.io. 

Open Settings and Connect a new CI:

![image](https://user-images.githubusercontent.com/220264/116780055-bb503b80-aa82-11eb-90b0-6287cdbe56c2.png)

Select "Jenkins" and fill in all required fields:

![image](https://user-images.githubusercontent.com/220264/116780079-e33f9f00-aa82-11eb-8678-3f2b5638b196.png)

* `Jenkins Hostname` - URL of Jenkins host 
* `Username` - a user on Jenkins which will trigger builds
* `API Token` - a token we created previously in the user's settings.
* `Job Name` - the name of a job we just created

Switch to Input variables tab and enable variables that was configured for parametrized builds:

![image](https://user-images.githubusercontent.com/220264/116780159-6d880300-aa83-11eb-9c8d-242c76accde2.png)

> Select `testomatio_url` if you use on-premise version.

Click "Save" and check the connection.

Now you can run a test or a group of tests via Jenkins CI. For a custom configuration read about [Environment Variables](#environment-configuration)

### Bamboo

Let's configure Bamboo CI server to work for CodeceptJS framework:

1. Create a plan for testomatio to run in testomatio

![Configure](https://user-images.githubusercontent.com/24666922/107243443-02fe9280-6a53-11eb-91e9-862a30c8daa3.png)

2. Note the plan key. In this case its "TES"
3. Configure the job to install node dependencies
![install](https://user-images.githubusercontent.com/24666922/107244050-9f289980-6a53-11eb-8942-f508c2f643ce.png)

4. Add the script to run codeceptJS tests:

```
TESTOMATIO_RUN=${bamboo.run} npx codeceptjs run --grep "${bamboo.grep}"
```
Following environment variables must be set:

* **Add `TESTOMATIO` environment variable with API key of Testomatio project.**
* If you are running a self-hosted Testomatio instance, add `TESTOMATIO_URL` variable to specify a host to which reports will be sent.

![Script](https://user-images.githubusercontent.com/24666922/107244927-95536600-6a54-11eb-94d7-812ddbe6d917.png)

5. Set an input variable. Open Plan configuration:

![image](https://user-images.githubusercontent.com/220264/113134762-e2b8ac00-9229-11eb-863c-21697595ae04.png)

add  `grep` and `run` variables with an empty string as a default value

![image](https://user-images.githubusercontent.com/220264/113135720-1f38d780-922b-11eb-9fda-1efe77951d98.png)

Now, configure Bamboo integration at Testomatio:

1. Go to settings > CI and enter the details of Bamboo server. [Check this](https://confluence.atlassian.com/bamboo/personal-access-tokens-976779873.html) to generate API token

![CI settings](https://user-images.githubusercontent.com/24666922/107245863-a51f7a00-6a55-11eb-89d9-52f66402ba0f.png)

A project and plan keys can be found from URL:

![image](https://user-images.githubusercontent.com/220264/108208802-2ea80980-7132-11eb-9315-cf0465826f55.png)

2. Enable `run` option on Input Variables tab. This allows CI to send a report to a specific Run inside Testomatio.

![image](https://user-images.githubusercontent.com/220264/113136335-ebaa7d00-922b-11eb-9012-72d0d9646380.png)

You can pass more input variables if you set them in [Environment Configuration](#environment-configuration)

3. Open Runs page (or any test or suite) then select `Run in CI` option in extra menu. 

![image](https://user-images.githubusercontent.com/220264/113136648-46dc6f80-922c-11eb-9e72-3a3356c5f647.png)

Select "Bamboo" profile in a list. Optionally, configure a Run Title and select a Test Plan.

![image](https://user-images.githubusercontent.com/220264/113136785-6f646980-922c-11eb-9dc0-d001bdf13610.png)

4. Launch a run and wait for the results.

![Runs view](https://user-images.githubusercontent.com/24666922/107249055-f67d3880-6a58-11eb-9794-539cfa797002.png)

### GitLab CI

1. Add new trigger https://docs.gitlab.com/ee/ci/triggers/README.html#adding-a-new-trigger
![image](https://user-images.githubusercontent.com/23012652/120804889-d1538f00-c54d-11eb-9566-d6a5e77e4945.png)
2. Create .gitlab-ci.yml file or add the job to existing one. E.g. - https://gitlab.com/bpastukh/testomat-example/-/blob/master/.gitlab-ci.yml
![image](https://user-images.githubusercontent.com/23012652/120804945-de707e00-c54d-11eb-842a-627ea5ada52d.png)
It should contain next commands:
```
    - export TESTOMATIO="#{testomatio}"
    - export TESTOMATIO_URL="#{testomatio_url}"
    - export TESTOMATIO_RUN="#{run}"
```
3. The job should include a step where the test runner is executed with --grep option and TESTOMATIO environment variables passed in. For instance:
```
    - npx codeceptjs run-workers 2 --grep "${grep}"
```
4. Connect a GitLab CI in Testomatio:
![image](https://user-images.githubusercontent.com/23012652/120805051-ffd16a00-c54d-11eb-8a71-b9a9aaaa2e28.png)
5. Save your connection
6. Now, open the "Configuration" tab and check the default ref value. ref is a target branch or a tag on which tests will be executed. By default, it is set to master (most of the repositories still use master as the main branch name, but we will adjust defaults accordingly when things change), but you can choose a different one, like main.
![image](https://user-images.githubusercontent.com/23012652/120805121-18da1b00-c54e-11eb-9ce5-01707b52634f.png)
7. run and testomatio inputs are passed from Testomatio. Enable them on the Input Variables tab
You can pass more input variables if you set them in Environment Configuration
![image](https://user-images.githubusercontent.com/23012652/120805180-27283700-c54e-11eb-9459-8f86fb175ad1.png)
8. When the connection is saved, open a test and select "Run in CI". Select a target ref and click "Launch"
9. This will start a new pipeline in GitLab CI please check that the job was successfully triggered and completed. After the job has finished a run report will be available on Runs page of Testomatio


### GitHub Actions

1. Create an [access token on GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with access to workflow scope:

![image](https://user-images.githubusercontent.com/220264/107864711-9971f000-6e67-11eb-845d-9155aee9c85e.png)

2. Create a workflow in a GitHub repository. Go to "Actions" tab in repository and click "Create Workflow" button. Then you will get a workflow template. A workflow filename will be used by Testomatio to call a specific workflow.

![image](https://user-images.githubusercontent.com/220264/108279592-84f26800-7185-11eb-93a9-a5862f0548e4.png)

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

![image](https://user-images.githubusercontent.com/220264/108280170-78224400-7186-11eb-8b1c-86f399b630a3.png)

You will need to enter the following

* GitHub Username
* OAuth token (created at step 1)
* organization/repository (or user/repository)
* workflow name, a file name with a workflow, like `testomatio.yml`

7. Save your connection
8. Now, open "Configuration" tab and check the default `ref` value. `ref` is a target branch or a tag on which a tests will be executed. By default, it is set to `master` (most of the repositories still use master as the main branch name, but we will adjust defaults accordingly when things change), but you can choose a different one, like `main`.
9. `run` and `testomatio` inputs are passed from Testomatio. Enable them on Input Variables tab

![image](https://user-images.githubusercontent.com/220264/113137542-57d9b080-922d-11eb-9672-c4a06c00255d.png)

You can pass more input variables if you set them in [Environment Configuration](#environment-configuration)

9. When the connection is saved, open a test and select "Run in CI". Select a target ref and click "Launch"

![image](https://user-images.githubusercontent.com/220264/108280786-5d040400-7187-11eb-810a-d639396c8a3e.png)

10. This will start a new job in GitHub Actions, please check that the job was successfully triggered and completed. After the job has finished a run report will be available on Runs page of Testomatio

## Input Variables

While connection settings can be different across CI settings, the list of input variables is the same. 

![image](https://user-images.githubusercontent.com/220264/113130343-a46cbe00-9224-11eb-8808-7fc096d2a335.png)

For example, Testomatio sends `grep` variable to CI to identify which tests should be executed. It may pass other input variables 
which can be used on CI to improve reporting.

Here is how `run` input variable can be accessed on different CIs:

* Atlassian Bamboo: `${bamboo.run}`
* GitHub Actions: `${github.event.inputs.run}`

Here is the list of preconfigured input variables:

* `run` - passes Run ID to CI. If this option is toggled on, when a run is created in Testomatio it is instantly added to the list of runs marked as "Scheduled". On CI `run` variable must be passed as `TESTOMATIO_RUN` environment variable to a reporter. This allows mapping a scheduled run to the run which is currently processed. **If `TESTOMATIO_RUN` is not set, a duplicate run will be created**.
* `testomatio` - passes project access key to CI. This input variable must be passed as `TESTOMATIO` environment variable to match the Testomatio project. Toggle on this option if you prefer not to hardcode Testomatio Project ID in CI configuration but to obtain this value on launch. This may be useful if you have a different Testomatio project configured for on CI run.
* `testomatio_url` - when working on a self-hosted Testomatio instance, this variable can be used to pass Testomatio endpoint to CI system. Pass `testomatio_url` environment variable to `TESTOMATIO_URL` 

## Environment Configuration

Sometimes extra configuration is required for CI job. For instance, extra configuration variables can be used to specify:

* browser
* target branch
* staging/production environments

Testomatio allows to predefine configuration variables and adjust them for each run. Config variables can be set in "Configuration" tab on CI connection settings.

![image](https://user-images.githubusercontent.com/220264/108283747-85dac800-718c-11eb-918b-50d3aa7a27da.png)

Config variables should be put per line with the default value passed in with `=`. The format is similar to `.env` file format:

```
browsers=chrome,firefox,safari
branch=main
user=admin@admin.com
password=123456
```

> To set a variable without a default value just pass it as on a line without `=`

Those variables will be available for a reconfiguration on each CI Run executed from Testomatio.
If a variable value contains comma `,` like in example above: `chrome,firefox,safari`, these values will be displayed with the select box. Otherwise, a simple input will be shown:

![image](https://user-images.githubusercontent.com/220264/108284411-d7378700-718d-11eb-99f7-590dedfc6d0a.png)

These variables will be passed to CI in the same manner as `grep` parameter. So, CI job should be prepared to handle these config variables. For instance, if GitHub Actions are used, values are passed as `inputs` and can be used like this:

```yaml
    - run: npx codeceptjs run --grep "${{ github.event.inputs.grep }}" --profile "${{ github.event.inputs.branch }}"
      env:
        TESTOMATIO: "${{ github.event.inputs.testomatio }}" # passed from Testomatio by default
        BROWSER: "${{ github.event.inputs.browser }}"
        TEST_USER: "${{ github.event.inputs.user }}"
        TEST_PASSWORD: "${{ github.event.inputs.password }}"
```

