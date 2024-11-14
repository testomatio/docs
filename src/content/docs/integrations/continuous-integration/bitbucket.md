---
title: Bitbucket Pipelines
description: Explore how to integrate continuous testing into your CI/CD pipeline using Testomat.io. This guide explains the setup process for Continuous Integration (CI), allowing users to connect their test management tool with popular CI tools like Jenkins, GitLab, and more. Learn how to automate test runs, manage reports, and streamline your testing workflows within a CI environment for effective test tracking and execution.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/bitbucket
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_RtsIVB63_2024-08-26.Bw6arZ-4_Z103qFK.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Continuous Integration, CI/CD, test automation, test management, Jenkins, GitLab, automated testing, CI tools, testing workflow, test reports
---

To connect Bitbucket to Testomatio you will need a API Token created. API token can be added on "Repository settings" page of current user:

![Testomat.io - Bitbucket API Token](./images/New_TZ0DW4li_2024-08-24.png)

Then create a new Bitbucket project. Select button "Create" on the top and "Project".

![Testomat.io - Bitbucket New Project](./images/New_fcRot0eP_2024-08-24.png)

Make this build parametrized:

![Testomat.io - Bitbucket Workspace Variables](./images/New_MvzBQxer_2024-08-24.png)

Add the following parameters as a string with empty default values:

- ```run```
- ```testomatio```
- ```grep```

The job should include a step where the test runner is executed with —grep option and TESTOMATIO environment variables passed in.

For instance: ```- npx codeceptjs run-workers 2 --grep "${grep}"```

![Testomat.io - Bitbucket Job Step](./images/New_VP5qjT1L_2024-08-26.png)

If you use on-premise Testomatio setup you will also need to add ```testomatio_url``` parameter.

Save the build and switch to Testomat.io.

![Testomat.io - Bitbucket Continuous Integration](./images/New_suL5Muya_2024-08-24.png)

Connect Bitbucket Pipelines in Testomatio:

![Testomat.io - Connect a Bitbucket Pipelines in Testomatio](./images/New_RtsIVB63_2024-08-26.png)