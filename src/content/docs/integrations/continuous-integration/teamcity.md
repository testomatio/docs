---
title: Teamcity
description: Integrate TeamCity with Testomat.io for automated test execution and reporting. The guide details creating projects and build configurations in TeamCity, setting up access keys, defining project parameters, and adding build steps for executing tests. It ensures seamless CI/CD workflows with direct connections to Testomat.io.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/teamcity
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_VaIvGQ00_2024-08-26.ya6mJB8K_2glHuD.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: TeamCity, Testomat.io, CI/CD integration, automated testing, build configurations, access keys, test reporting, project parameters, test management
---

Let's create a new project in your Teamcity workspace:

![Testomat.io - Teamcity Create Project](./images/New_EDAEJzl6_2024-08-26.png)

On the same page Create Build Configuration.

_Build configurations define how to retrieve and build sources of a project._

Create a Access Key for the user:

![Testomat.io - Teamcity Access Token](./images/New_5chhY6y4_2024-08-26.png)

Setup variables:

![Testomat.io - Teamcity Set Project Parameters](./images/New_tfQsOc3l_2024-08-26.png)

Add a new Build Step: Command Line.

![Testomat.io - Teamcity Build Step](./images/New_IGaki6CP_2024-08-26.png)

Connect a Teamcity in Testomatio:

![Testomat.io - Connect Teamcity in Testomatio](./images/New_VaIvGQ00_2024-08-26.png)