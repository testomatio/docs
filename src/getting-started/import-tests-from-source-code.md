---
permalink: /getting-started/import-tests-from-source-code
title: Import Tests From Source Code
editLink: false
---

# Import Tests From Source Code

> If you have end-2-end tests or API or unit tests already implemented you can import them into Testomat.io

## Why do I need to Import my tests?

Automated tests are hidden within the code and this gem is seen only to engineers. While they play an important role in product management they are not available to the whole team. To bring visibility of current tests and show what pieces of software are covered you can bring your tests into Testomatio. 

Also, when you have dozens of tests you may get lost in it. You may need to search around features and map them with specifications or Jira tickets. When automated tests are imported in Testomatio you can search around tests, plan new test cases, receive reports, and more! 

## Create a New Project

Register at app.testomat.io and activate your user account. Then create a new project.

![image](https://user-images.githubusercontent.com/220264/107104713-7f169180-682b-11eb-9c8d-ee4d5583e184.png)

When creating a project choose the type of project. If you plan to follow BDD descriptions or use Cucumber framework in the future - choose BDD style. If you are unsure - make a "Classical" project. Depending on your choice an interface will differ a bit.

* In **Classical project** test cases will be written in a free form in markdown format. Automated tests will be synced up with test cases so you will see the test description on one tab and test code on the second tab. When a description of a test case changes you will be notified that a test might need to be updated.
* Within **BDD project** you will have feature definitions written both in source code (by engineers) and in the Testomatio (by managers and QAs). So you will be able to track and plan Cucumber automation and synchronize the actual feature files with test cases. When the scenario has changed in the system but not updated in the code - you will be notified that the scenario is out of date.

> Within this guide, we assume that you are running Classical project. If you need to import BDD project, please continue with Import from Cucumber

![image](https://user-images.githubusercontent.com/220264/107104737-96ee1580-682b-11eb-9c95-f258d3ab1e34.png)

You can provide a repository URL on GitHub, GitLab, BitBucket or self-hosted. Testomatio will use that URL to navigate you from test cases straight to the source code. Please make sure that the URL is pointing to the directory where the tests are located. We will import tests from that directory in the next steps.

> If you have set a repository URL make sure that the path matches the one in URL repository. For instance, if you have URL: "https://github.com/testomatio/examples/tree/master/tests" you should navigate to "tests" within your project to import tests.

Click "Create" to start a new project.

## Import Tests

When a project created pick "Import from Source Code" button

![image](https://user-images.githubusercontent.com/220264/107104789-df0d3800-682b-11eb-86ec-88642d299d96.png)

On the Import screen you will need to pick a framework and a programming language you use for tests.

![image](https://user-images.githubusercontent.com/220264/107104794-e3d1ec00-682b-11eb-8913-3d0c563515eb.png)

> If you don't see your framework in a list - please contact us and we will try to add support for it soon! 

When you have chosen a framework and a language you will be provided with a command which you need to execute in a terminal. Please ensure your environment match the requirements:
* If you run tests in NodeJS (JavaScript, TypeScript) you should have NodeJS 10+ and npm to be installed to be able to run this command.
* If you run tests in PHP - you will need PHP > 7.2 and Composer installed. 

Open a terminal, navigate to the tests folder in your project and execute the command. 

![image](https://user-images.githubusercontent.com/220264/107104824-03691480-682c-11eb-9c1a-0ace4b446459.png)

After an import command was executed successfully you should see how many tests were found:

![image](https://user-images.githubusercontent.com/220264/107104827-09f78c00-682c-11eb-9cc5-b014113fb65f.png)

If you don't see this message, probably our defaults do not work for you. Please check the command's API change command parameters so it could find tests. The most common issue is a  different file naming format or incorrect directory for import.

![image](https://user-images.githubusercontent.com/220264/107104832-0fed6d00-682c-11eb-993a-afb4082cdf01.png)

After you imported tests reopen the project and you will see that all tests with their folders and files are shown on Testomatio.

![image](https://user-images.githubusercontent.com/220264/107104839-1845a800-682c-11eb-923f-23cf29f7687f.png)

All imported tests are marked as "Automated". If you click on any of those tests you will see its code and a link to its repository. Please check that a link actually points to the file, if not you can change URL in project settings. 

![image](https://user-images.githubusercontent.com/220264/107104862-3c08ee00-682c-11eb-8692-3df3e95c4aad.png)


## What's Next?

Ok, you imported your tests, now what?

* **Show your tests to your team**. You must be proud of your work!  🎉
* **Plan new tests** before automating them. Ask the manager to write test specification within Testomatio so you could start working on them. 
* All new tests will be marked as "manual" until you import them from code. You can check how many manual tests are left so you could see what is next to be implemented.
* **Receive run reports** - similarly to Importing tests you can receive reports on test execution. Open "Runs" page and follow instructions.
* **Add import command to CI** - reimport the tests on each commit to have your project up to date with source code.

