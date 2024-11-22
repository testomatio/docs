---
title: Circle CI
description: Integrate CircleCI with Testomat.io to automate test execution and reporting. This guide explains configuring the config.yml workflow, setting parameters, and passing environment variables for streamlined CI integration. It covers running tests via the Testomat.io interface and accessing test reports post-execution.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/circle
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://user-images.githubusercontent.com/77803888/154449593-38199ae5-1338-449b-baa8-6ea21304378d.png
      
  - tag: meta
    attrs:
      name: keywords
      content: CircleCI, Testomat.io, CI integration, automated testing, test reporting, config.yml, environment variables, CI workflows, Testomatio runs
---

1. Create an [access token on Circle CI](https://circleci.com/docs/2.0/api-developers-guide/#add-an-api-token):

<img width="730" alt="image" src="https://user-images.githubusercontent.com/77803888/154450570-2cfdf6ab-2976-433f-a081-11df773ef122.png">

2.  Create a workflow in `config.yml` file in `.circle` folder in the root folder in your repository.

3. This workflow will be used solely by Testomatio so it should start only on workflow_dispatch event. The event should be defined with the following input parameters:

```
parameters:
  testomatio:
    type: string
    default: ""

  run:
    type: string
    default: ""

  testomatio_url:
    type: string
    default: ""

  grep:
    type: string
    default: ""

```

4. The job should include a step where the test runner is executed with --grep option and TESTOMATIO environment variables passed in. For instance:

 ```
      - run:
          name: Run tests
          command: npx codeceptjs run --grep "<< pipeline.parameters.grep >>"
          environment:
            TESTOMATIO: << pipeline.parameters.testomatio >>
            TESTOMATIO_RUN: << pipeline.parameters.run >>
            TESTOMATIO_URL: << pipeline.parameters.testomatio_url >>
```

>  Select `testomatio_url` if you use on-premise version.

5. Connect a Circle CI in Testomatio:

<img width="1270" alt="image" src="https://user-images.githubusercontent.com/77803888/154449593-38199ae5-1338-449b-baa8-6ea21304378d.png">

You will need to enter the following:
- Circle CI Trigger Url (see how it works [here](https://circleci.com/docs/2.0/api-developers-guide/#getting-started-with-the-api))
- Circle Token (step 1)

6. Save your connection
7. Now, open "Configuration" tab and check Input Variables

<img width="1027" alt="image" src="https://user-images.githubusercontent.com/77803888/154450381-686d55e9-62be-489f-b641-4d2ccb1b50cf.png">

8. When the connection is saved, open a test and select "Run in CI". Select a target ref and click "Launch"

<img width="1074" alt="image" src="https://user-images.githubusercontent.com/77803888/154451539-77bdfd4e-10f5-49ad-a37e-f4ba7b85f90d.png">

9. This will start a new pipeline in Circle CI. Please check that the job was successfully triggered and completed. After the job has finished a run report will be available on the Runs page of Testomatio.