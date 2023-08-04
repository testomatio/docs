---
permalink: /getting-started/running-automated-tests
title: Running Automated Tests
editLink: true
---

# Running Automated Tests

### Why Do I Need to Enable Test Run Report

You have already [imported automated tests](https://docs.testomat.io/getting-started/import-tests-from-source-code/) and you wonder what's next? Testomat.io will help you to generate a run command to use on your machine or on your CI. As a result, you will get human-readable Run Reports with lots of additional information.

Testomat.io has a friendly UI that helps to set up automated test reporting. So there is no need to learn all technical documentation in the very first steps. Let's see how it works.

### Launch Automated Tests

First, go to the Runs page, click on the Extra button and pick **Setup Automated**

![Import automated tests](images/2023-08-04_23.00.40@2x.png)

Then you need to pick your framework from the dropdown.

![Choose test automation framework](images/2023-08-04_23.02.20@2x.png)

Testomat.io will generate instructions regarding your framework. You may need to make few changes to your code, namely, add the Testomat.io plugin.

![Make configuration seetings](images/2023-08-04_23.05.14@2x-1.png)

Please note that you need to start generated commands in your terminal from your project folder.

![Execute test cases](images/2023-08-04_23.11.43@2x.png)


> Also, you can add advanced options to your command to enable extra options. For example, you can give a title to your report by passing it as environment variable to `TESTOMATIO_TITLE` or can add environments to run by providing `TESTOMATIO_ENV`. 
Learn more about [advanced reporting options here](https://docs.testomat.io/reference/reporter/#advanced-usage).

If you have successfully launched your automated tests, a new Test Run will appear on Runs page.

![Automated test run](images/2023-08-04_23.13.11@2x.png)

You can see tests results in real-time in the Run Report.

![Simplified test report](images/2023-08-04_23.21.08@2x.png)

As soon as all tests are completed you can check Run Report with details.

![Detailed test report](images/2023-08-04_23.21.47@2x.png)





