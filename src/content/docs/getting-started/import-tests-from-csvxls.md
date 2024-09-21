---
title: Import Tests From CSV/XLS
description: Learn how to import tests from CSV or XLS files into Testomat.io. This guide covers the process of importing test cases from systems like TestRail, Zephyr, Qase, and more. It also introduces an experimental feature to convert CSV/XLS data into BDD scenarios, and provides instructions for creating custom XLS files for importing.
type: article
url: https://docs.testomat.io/getting-started/import-tests-from-csvxls/
head:
  - tag: meta
    attrs:
      name: og:image
      content: ./images/149755082-09d0526f-5950-4b03-bb7c-dda84f3ea9c0.png
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, CSV, XLS, test import, BDD scenarios, TestRail, Zephyr, Qase, QTest, manual tests, automated tests, test management, custom XLS
---

> If you have tests in CSV/XLS format - follow this guide to learn how to import your tests to Testomat.io

For now, Testomat.io supports import from CSV/XLS for these systems:

- TestRail
- Zephyr
- Qase
- QTest
- Testomat.io 

## How To Import Tests From CSV/XLS

You can use **Import from CSV** button on Tests page :

![image](./images/149749728-40f8b5b0-f945-4a41-b1f7-62b11d45a774.png)

Or use **Imports** button on the side menu:

![image](./images/149753594-80142936-904c-48bd-8446-22d941f7c257.png)

Then click on the Menu button and pick **Import From CSV**

![image](./images/149753979-19e83701-d1bc-407f-993c-52b7701f2c38.png)

Pick the format you are going to import:

![image](./images/149754376-e6dc82ad-2ee5-416b-be50-51227255f3a2.png)

Click on **Choose file** and pick your file:

![image](./images/149755082-09d0526f-5950-4b03-bb7c-dda84f3ea9c0.png)

Now click on **Create** button

![image](./images/149755688-4bacbc4e-6c37-4094-ad91-9d4de42afdd9.png)

And see Testomat.io importing your tests 

![Import From TR](./images/149757000-33a76baa-503f-4fbe-b9db-4339eff07e20.gif)

## Example Files For Import 

Here you can find samples for each of supported formats:

- [TestRail](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/TestRail.csv
)
- [Zephyr](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/Zephyr.xls
)
- [Qase](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/Qase.csv)
- [QTest](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/qtest.xls
)
- [Testomat.io](https://testomatio-artifacts.ams3.digitaloceanspaces.com/documentation/testomatio.xlsx)



## Import CSV/XLS As BDD

> Please note that this is experimental feature and some data can be imported wrongly. 

Testomat.io allows converting CSV/XLS to BDD Scenarios, where your Precondition equals **Given**, Step = **When**, and Expected Result = **Then**.


![image](./images/149758030-698bfebd-6045-4db9-976c-5c1f95ded5e0.png)

For this moment this feature is implemented for TestRail and QTest. But you can request it for other systems [here](https://testomat.nolt.io/).

## Create Custom XLS For Testomat.io

You can create your own XLS to import your tests to Testomat.io. There are such rules to create custom XLS files for Testomat.io import
| Column name  |  Content |
|---|---|
|ID|leave it empty|
|Title |put the title of your test here, one title per row|
|Status | goes for test type manual or automated, can be blank|
|Folder| place here the name of the suite, and use `/suite name/sub-suite name` format to create suites nesting|
|Emoji |can be blank| 
|Priority| you can set priority to your test normal, important, high, critical or low, can be blank|
|Tags| place here any tags you need,  can be blank|
|Owner |name of test owner, can be blank|
|Description |put here the description of your test, [Markdown format ](https://www.markdownguide.org/basic-syntax/)supported|

You can download the custom Testomat.io example file [here](https://testomatio-artifacts.ams3.digitaloceanspaces.com/documentation/testomatio.xlsx).







