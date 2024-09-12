---
title: Test Plans
---

Test Plan is a detailed document that outlines the testing strategy, objectives, schedule, resources, and scope of a testing effort. It acts as a blueprint for how testing will be conducted, ensuring all stakeholders are aware of what will be tested, when, how, and by whom. A well-defined test plan is essential for ensuring product quality and aligning the testing process with project goals.

To create a test plan in Testomat.io, go to the **Plans** page and click the **+** button. The **Plans** page allows to search and filter previously created plans. You can also view and edit test cases that contain plans.

![Testomat.io - Test Plans page](./images/New_F3lDOnIP_2024-09-10.png)

After that, you should select the type of plan you want to create:

* **Manual** - Test plan for manual test runs
* **Automated** - Test plan for automated test runs on CI
* **Mixed** - Automated tests on CI combined with manual run

![Testomat.io - New Plan](./images/New_BVGb17Wo_2024-09-10.png)

<!-- Test Plans
  Manual
   Select Tests by Checking Tests & Suites
   Select Tests by Tags
   Select Tests by Labels
   Select Tests by QueryLanguage (screenshots + link to query language page)
   Run Automated as Manual
  Automated
   How automated tests are executed on CI (link to CI)
     (or use plan ID with npx start-test-run (mentioned abow)
   Tests need IDs
  Mixed 
-->

## Manual

By choosing a manual plan, you can easily customize your selection of test cases:

* Select test cases by Checking Tests & Suites
* Select test cases by Tags
* Select test cases by Labels
* Select test cases by Query

For more details on using the Query Language, visit the [dedicated page](https://docs.testomat.io/usage/query-language/).

Additionally, you can run your Automated tests as Manual using a toggle switch.

![Testomat.io - Create Manual Plan](./images/New_JxL6qSdU_2024-09-10.gif)

## Automated