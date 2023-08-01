---
permalink: /getting-started/running-automated-tests
title: Running Automated Tests
editLink: false
---

# Running Automated Tests

### Why Do I Need to Enable Test Run Report

You have already [imported automated tests](https://docs.testomat.io/getting-started/import-tests-from-source-code/) and you wonder what's next? Testomat.io will help you to generate a run command to use on your machine or on your CI. As a result, you will get human-readable Run Reports with lots of additional information.

Testomat.io has a friendly UI that helps to set up automated test reporting. So there is no need to learn all technical documentation in the very first steps. Let's see how it works.

### Launch Automated Tests

First, go to the Runs page, click on the Extra button and pick **Setup Automated**

![CleanShot 2022-08-11 at 11 09 45@2x](/assets/184094576-a38fc229-7fb0-47e5-afba-81480cad2de9.jpg)

Then you need to pick your framework from the dropdown.

![CleanShot 2022-08-11 at 11 34 24@2x](/assets/184095451-4fa4ef83-e9a9-4e47-bcc5-e432b6a8a920.jpg)

Testomat.io will generate instructions regarding your framework. You may need to make few changes to your code, namely, add the Testomat.io plugin.

![CleanShot 2022-08-11 at 17 02 28@2x](/assets/184152317-2e1efb83-e19b-4085-9ed7-713f4043d643.jpg)

Please note that you need to start generated commands in your terminal from your project folder.

> Also, you can add advanced options to your command to enable extra options. For example, you can give a title to your report by passing it as environment variable to `TESTOMATIO_TITLE` or can add environments to run by providing `TESTOMATIO_ENV`. 
Learn more about [advanced reporting options here](https://docs.testomat.io/reference/reporter/#advanced-usage).

If you have successfully launched your automated tests, a new Test Run will appear on Runs page.

![CleanShot 2022-09-21 at 20 40 27@2x](/assets/191573746-43fe87ce-4485-4fd4-b7d7-886377c90fee.jpg)

You can see tests results in real-time in the Run Report.

![CleanShot 2022-09-21 at 20 40 58@2x](/assets/191573926-146d5726-03f5-4b8a-9d94-da785f50c1fc.jpg)

As soon as all tests are completed you can check Run Report with details.

![CleanShot 2022-09-21 at 20 52 10@2x](/assets/191575972-10b1509e-678d-48ce-a571-566a9c1407d1.jpg)





