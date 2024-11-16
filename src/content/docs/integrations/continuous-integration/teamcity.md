---
title: Teamcity
description: Explore how to integrate continuous testing into your CI/CD pipeline using Testomat.io. This guide explains the setup process for Continuous Integration (CI), allowing users to connect their test management tool with popular CI tools like Jenkins, GitLab, and more. Learn how to automate test runs, manage reports, and streamline your testing workflows within a CI environment for effective test tracking and execution.
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
      content: Testomat.io, Continuous Integration, CI/CD, test automation, test management, Jenkins, GitLab, automated testing, CI tools, testing workflow, test reports
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