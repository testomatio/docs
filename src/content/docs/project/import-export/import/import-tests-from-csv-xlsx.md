---
title: Import from CSV/XLSX
description: Learn how to import tests from CSV or XLSX files into Testomat.io. This guide covers the process of importing test cases from systems like TestRail, Zephyr, Qase, and more. It also introduces an experimental feature to convert CSV/XLSX data into BDD scenarios, and provides instructions for creating custom XLS files for importing.
type: article
url: https://docs.testomat.io/project/import-export/import-tests-from-csv-xlsx
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, CSV, XLS, XLSX, TMS, test import, BDD scenarios, TestRail, Zephyr, Qase, QTest, Testmo, XRay manual tests, automated tests, test management, custom XLS
---

Testomat.io allows you to import tests from **CSV** or **XLSX** files. This is useful if you are migrating from another Test Management System (TMS) or if you already have test cases documented in spreadsheets.

## Supported Test Management Systems

Testomat.io supports importing test cases from many popular TMS tools. There are two ways to import:

- **Direct Import** via built-in integration
- **CSV/XLSX Import** supported for selected TMS formats

### Supported For CSV/XLSX Import

Click any tool below to see step-by-step instructions:

- [Allure TestOps](https://docs.testomat.io/project/import-export/import/import-tests-from-allure-testops/)
- [Qase](https://docs.testomat.io/project/import-export/import/import-tests-from-qase/)
- [QTest](https://docs.testomat.io/project/import-export/import/import-tests-from-qtest/)
- [QMetry](https://docs.testomat.io/project/import-export/import/import-tests-from-qmetry/)
- [TestCaseLabs](https://docs.testomat.io/project/import-export/import/import-tests-from-testcaselabs/)
- [Testmo](https://docs.testomat.io/project/import-export/import/import-tests-from-testmo/)
- [Testomat.io](https://docs.testomat.io/project/import-export/import/import-tests-from-csvxlsx/)
- [TestRail](https://docs.testomat.io/project/import-export/import/import-tests-from-testrail/)
- [XRay](https://docs.testomat.io/project/import-export/import/import-tests-from-xray/)
- [Zephyr](https://docs.testomat.io/project/import-export/import/import-tests-from-zephyr/)

## Import from CSV/XLSX in Classical Projects

Import your tests to Testomat.io:

1. Open your project.
2. Go to the **Tests** tab.
3. Click the (`...`) menu.
4. Choose **Import from other TMS**.

![The ... menu on the Tests tab, with Import from other TMS](./images/att1_436.png)

In the **Imports** window:

1. Click **Import**.
2. Choose **Import from CSV**. A sidebar opens on the right.
3. Pick the tool your file came from, for example **Qase**.
4. Click **Choose file**, select your CSV or XLSX.
5. Click **Create**.

![The Import tests from CSV/XLSX sidebar with the source dropdown and Choose file](./images/att2_436.png)

Testomat.io reads the file, and your tests appear on the **Tests** page.

## Import from CSV/XLSX in BDD Projects

The process is the same as for the Classical Project. 
1. Open your project.
2. Go to the **Tests** tab.
3. Click the (`...`) menu.
4. Choose **Import from other TMS**.

![BDD project import process](./images/bdd-import-flow.png)

In the **Imports** window:

1. Click **Import**.
2. Choose **Import from CSV**.
3. Pick the tool your file came from, for example **Qase**.
4. Click **Choose file**, select your CSV or XLSX.
5. Click **Create**.

When checked, all rows from the CSV/XLSX file are converted into **BDD scenarios**.

Mapping:
- Precondition = **Given**
- Step = **When**
- Expected Result = **Then**
All imported tests are saved as **feature files** in your project.

## Сreate Custom XLS for Testomat.io

You can also create your own XLS file to import tests into Testomat.io:

| Column name | Content                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ID          | leave it empty                                                                                                  |
| Title       | put the title of your test here, one title per row                                                              |
| Status      | goes for test type manual or automated, can be blank                                                            |
| Folder      | enter the suite name here, and use `/suite name/sub-suite name` format to create suites nesting                 |
| Emoji       | can be blank                                                                                                    |
| Priority    | you can set priority to your test normal, important, high, critical or low, can be blank                        |
| Tags        | place here any tags you need, can be blank                                                                      |
| Owner       | name of test owner, can be blank                                                                                |
| Description | put here the description of your test, [Markdown format ](https://www.markdownguide.org/basic-syntax/)supported |
| Labels      | place here labels and custom fields, can be blank                                                               |   
| Issues      | place here Jira key in format ABC-123 or other IMS keys, can pass multiple Jira keys separated by a comma, can be blank|                                                               | 

You can download the custom Testomat.io example file [here](https://testomatiofiles.ams3.cdn.digitaloceanspaces.com/Testomat_example.xlsx).

## Next steps

* [Running Tests Manually](https://docs.testomat.io/project/runs/running-tests-manually) - run the tests you just imported and record the results.
* [Labels and Custom Fields](https://docs.testomat.io/advanced/tags-labels/labels-and-custom-fields) - organize imported tests by severity, type, or any field your team uses.
* [Import Tests From Source Code](https://docs.testomat.io/project/import-export/import/import-tests-from-source-code) - have automated tests too? Connect them to the same project.