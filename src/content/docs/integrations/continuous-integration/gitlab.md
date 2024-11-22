---
title: GitLab CI
description: Learn how to integrate GitLab CI with Testomat.io to automate test execution and reporting. The guide covers configuring .gitlab-ci.yml, passing environment variables, and triggering pipelines for seamless CI/CD integration. It also explains setting input variables and running tests directly from the Testomat.io interface.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/gitlab
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/145948594-853bed0b-b913-4d36-a0b6-6bee1faced91.cz4gsMpJ_ZJSpXz.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, GitLab CI, CI/CD integration, automated testing, test reporting, pipelines, environment variables, test execution, .gitlab-ci.yml, input variables
---

#1. Add new trigger https://docs.gitlab.com/ee/ci/triggers/#trigger-a-pipeline

![image](./images/120804889-d1538f00-c54d-11eb-9566-d6a5e77e4945.png)

2. Create .gitlab-ci.yml file or add the job to existing one. E.g. -
https://gitlab.com/TetianaKhomenko/prod-setup/-/blob/main/.gitlab-ci.yml

![image](./images/145948594-853bed0b-b913-4d36-a0b6-6bee1faced91.png)
It should contain next commands:
```
    - export TESTOMATIO="${testomatio}"
    - export TESTOMATIO_URL="${testomatio_url}"
    - export TESTOMATIO_RUN="${run}"
```
3. The job should include a step where the test runner is executed with --grep option and TESTOMATIO environment variables passed in. For instance:
```
    - npx codeceptjs run-workers 2 --grep "${grep}"
```
4. Connect a GitLab CI in Testomatio:

![image](./images/120805051-ffd16a00-c54d-11eb-8a71-b9a9aaaa2e28.png)

5. Save your connection

6. Now, open the "Configuration" tab and check the default ref value. ref is a target branch or a tag on which tests will be executed. By default, it is set to master (most of the repositories still use master as the main branch name, but we will adjust defaults accordingly when things change), but you can choose a different one, like main.

![image](./images/120805121-18da1b00-c54e-11eb-9ce5-01707b52634f.png)

7. Run and testomatio inputs are passed from Testomatio. Enable them on the Input Variables tab. You can pass more input variables if you set them in Environment Configuration

![image](./images/120805180-27283700-c54e-11eb-9459-8f86fb175ad1.png)

8. When the connection is saved, open a test and select "Run in CI". Select a target ref and click "Launch"

9. This will start a new pipeline in GitLab CI please check that the job was successfully triggered and completed. After the job has finished a run report will be available on Runs page of Testomatio