---
permalink: /getting-started/import-tests-from-cucumber
title: Import Tests From Cucumber
editLink: false
---

# Import Tests From Cucumber

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


![image](https://user-images.githubusercontent.com/220264/107104996-d832f500-682c-11eb-9ee5-1c417353992f.png)

You can provide a repository URL on GitHub, GitLab, BitBucket or self-hosted. Testomatio will use that URL to navigate you from test cases straight to the source code. Please make sure that the URL is pointing to the directory where the tests are located. We will import tests from that directory in the next steps.

> If you have set a repository URL make sure that the path matches the one in URL repository. For instance, if you have URL: "https://github.com/testomatio/examples/tree/master/features" you should navigate to "features" within your project to import tests.

Click "Create" to start a new project.

## Import Tests from Feature Files

When a project created pick "Import from Source Code" button

![image](https://user-images.githubusercontent.com/220264/107105020-00225880-682d-11eb-985a-9843fedbcaf3.png)

On the Import screen, you will need to pick Cucumber as a framework. 

![image](https://user-images.githubusercontent.com/220264/107105023-057fa300-682d-11eb-8bad-c39ed610a157.png)

> If you use BDD with CodeceptJS you should choose CodeceptJS and select "Gherkin" as Project language.

To parse & import feature files **NodeJS 10+** with NPM is required.

Open a terminal, navigate to the project folder in your project and execute the command. By default, we assume that your features files are located in the "features" folder of your project. If you have stored it in a different folder - change the --dir  option of a command:

```
npx check-cucumber@latest "**/*.feature" --dir path/to/features
```

![image](https://user-images.githubusercontent.com/220264/107105061-2e079d00-682d-11eb-9865-0e00de9b2842.png)


When the command has finished you will see a number of tests imported. If it was not executed successfully try to change the pattern to match files or directory to scan. Open API reference of check-cucumber command to learn how to do that.

Refresh the page and you will see the imported test files

![image](https://user-images.githubusercontent.com/220264/107105070-365fd800-682d-11eb-8f30-6c259153b1ff.png)
