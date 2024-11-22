---
title: Bitbucket Pipelines
description: Integrate Bitbucket Pipelines with Testomat.io to streamline test execution and reporting. This guide explains setting up API tokens, configuring pipeline parameters, and running tests with environment variables like TESTOMATIO. It includes instructions for handling grep options, on-premise setups, and connecting Testomat.io for seamless CI/CD integration.
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
      content: Bitbucket Pipelines, Testomat.io, CI/CD integration, automated testing, test reporting, API tokens, environment variables, test management, on-premise setups
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