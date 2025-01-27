---
title: Jenkins
description: Learn how to integrate Jenkins with Testomat.io for continuous integration. This guide covers creating Jenkins jobs, configuring parameters, triggering builds remotely, and connecting Jenkins with Testomat.io using API tokens. It also includes steps for passing environment variables for test execution and enabling on-premise setups.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/jenkins
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/116780079-e33f9f00-aa82-11eb-8678-3f2b5638b196.D7Y2cqI3_Z9GgQv.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Jenkins, Testomat.io, CI integration, continuous integration, API token, build configuration, test automation, environment variables, test reporting, on-premise setup, Jenkins job setup
---

To connect Jenkins to Testomatio you will need a user and an API Token created.
API token can be added on "Configure" page of current user:

![image](./images/116779414-06684f80-aa7f-11eb-9a63-0231dd19f1be.png)

Then create a new Jenkins job. Select "Freestyle project".

![image](./images/116780134-3154a280-aa83-11eb-8da9-3714a7909c48.png)

> It is recommended to avoid spaces in job name to prevent issues with connecting to this job via URL

Make this build parametrized:

![image](./images/116779732-bc806900-aa80-11eb-9b3b-0415fe67b172.png)

Add the following parameters as a string with empty default values:

* `run`
* `testomatio`
* `grep`

If you use on-premise Testomatio setup you will also need to add `testomatio_url` parameter.

Inside "Build Triggers" select "Trigger build remotely"

![image](./images/116779858-80013d00-aa81-11eb-840d-c272df2e5937.png)

Proceed with configuring the job and set all required parameters like SCM and build steps.

![image](./images/116779906-bb9c0700-aa81-11eb-8de1-448ba9ddffd3.png)

Within a step pass in configured parameters as environment variables into the test runner. Let's take CodeceptJS command as an example:

```
TESTOMATIO_RUN=${run} TESTOMATIO=${testomatio} npx codeceptjs run --grep "${grep}"
```

> Prepend `TESTOMATIO_URL=${testomatio_url}` if you use on-premise versoin

![image](./images/116780412-5518e800-aa85-11eb-88b8-b35853381a91.png)


Save the build and switch to Testomat.io.

Open Settings and Connect a new CI:

![image](./images/116780055-bb503b80-aa82-11eb-90b0-6287cdbe56c2.png)

Select "Jenkins" and fill in all required fields:

![image](./images/116780079-e33f9f00-aa82-11eb-8678-3f2b5638b196.png)

* `Jenkins Hostname` - URL of Jenkins host
* `Username` - a user on Jenkins which will trigger builds
* `API Token` - a token we created previously in the user's settings.
* `Job Name` - the name of a job we just created

Switch to Input variables tab and enable variables that was configured for parametrized builds:

![image](./images/116780159-6d880300-aa83-11eb-9c8d-242c76accde2.png)

> Select `testomatio_url` if you use on-premise version.

Click "Save" and check the connection.

Now you can run a test or a group of tests via Jenkins CI. For a custom configuration read about [Environment Variables](./index.md#environment-configuration)