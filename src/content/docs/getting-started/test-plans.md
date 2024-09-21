---
title: Test Plans
description: Explore how to create and manage test plans in Testomat.io. This guide covers manual, automated, and mixed test plans, detailing how to organize test cases, run tests on CI, and combine manual and automated test reports. Learn how to configure Continuous Integration and use filters for efficient test management.
type: article
url: https://docs.testomat.io/getting-started/test-plans/
head:
  - tag: meta
    attrs:
      name: og:image
      content: ./images/New_BVGb17Wo_2024-09-10.png
      
  - tag: meta
    attrs:
      name: keywords
      content: test plans, manual tests, automated tests, CI/CD, test case management, mixed test plans, continuous integration, QA, Testomat.io, testing strategy, test reports
---

Test Plan is a detailed document that outlines the testing strategy, objectives, schedule, resources, and scope of a testing effort. It acts as a blueprint for how testing will be conducted, ensuring all stakeholders are aware of what will be tested, when, how, and by whom. A well-defined test plan is essential for ensuring product quality and aligning the testing process with project goals.

To create a test plan in Testomat.io, go to the **Plans** page and click the **+** button. The **Plans** page allows to search and filter previously created plans. You can also view and edit test cases that contain plans.

![Testomat.io - Test Plans page](./images/New_F3lDOnIP_2024-09-10.png)

After that, you should select the type of plan you want to create:

* **Manual** - Test plan for manual test runs
* **Automated** - Test plan for automated test runs on CI
* **Mixed** - Automated tests on CI combined with manual run

![Testomat.io - New Plan](./images/New_BVGb17Wo_2024-09-10.png)

## Manual

By choosing manual plan, you can easily customize your selection of test cases:

* Select test cases by Checking Tests & Suites
* Select test cases by Tags
* Select test cases by Labels
* Select test cases by Query

For more details on using the Query Language, visit the [dedicated page](https://docs.testomat.io/usage/query-language/).

Additionally, you can run your Automated tests as Manual using a toggle switch.

![Testomat.io - Create Manual Plan](./images/New_JxL6qSdU_2024-09-10.gif)

## Automated

By choosing automated plan, you need to configure **Continuous Integration**. Also, tests need to have IDs. This can be done by adding the `--update-ids` option when importing tests.

To learn how to set up Continuous Integration in Testomat.io, visit the [dedicated page](https://docs.testomat.io/usage/continuous-integration/).

![Testomat.io - Create Automated Plan](./images/New_O9I32YCX_2024-09-15.gif)

After running tests via CI, the report will be sent to Testomat.io. You can view it on the **Runs** page.

![Testomat.io - GitHub Actions](./images/New_KoPkaO0N_2024-09-15.png)

Automated run report:

![Testomat.io - Automated Plan Report](./images/New_Q8Cq5xGN_2024-09-15.png)

A **Plan ID** can also be used to run an Automated Plan. To learn how to do this, visit the [Filter Test](https://docs.testomat.io/reference/reporter/pipes/testomatio/#filter-tests) page (currently available for Playwright and CodeceptJS frameworks). 

## Mixed

Mixed Plan is a combination of automated and manual tests. Automated tests are running in **Continuous Integration**, while you run manual tests in parallel. As a result, you get one report for both automated and manual runs.

![Testomat.io - Create Mixed Plan](./images/New_UhbNVumq_2024-09-15.gif)