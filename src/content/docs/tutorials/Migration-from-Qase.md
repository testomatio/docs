---
title: Migration from Qase
description: Learn how to migrate your test cases from Qase into Testomat.io. This guide walks you through exporting your cases as CSV, importing them, keeping your folder structure intact, and verifying that everything landed correctly.
type: article
url: https://docs.testomat.io/tutorials/migration-from-qase
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/New_b1BS3EKN_2024-08-29.DGrFkMLR_ZOOgn1.webp

  - tag: meta
    attrs:
      name: keywords
      content: Qase migration, Testomat.io, import tests from Qase, migrate test cases, CSV import, test suites, folders, steps, expected results, test management, QA
---

Welcome!

In this tutorial you will export your cases from Qase as a CSV file, import that file, and check that everything works correctly. Qase and Testomat.io store same things, so a migration is simple.

![Export from Qase, import into Testomat.io, then check the result](./images/migration-from-qase/migration-flow.png)

## Export from Qase

First, get your test cases out of Qase as a file.

1. Open your project in Qase.
2. Export your test cases as a **CSV** file.
3. Save the file on your computer.

![The export option in a Qase project, with CSV selected](./images/migration-from-qase/1-export-from-qase.png)

Open the file and check the first row. It should hold column names like Title and Folder - that is how Testomat.io knows what each column means.

:::note

Not sure yours looks right? Download the [sample Qase CSV](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/Qase.csv) and compare. Every column is explained in [Import from CSV/XLSX](https://docs.testomat.io/project/import-export/import/import-tests-from-csv-xlsx/).

:::

## Import into Testomat.io

Now you upload a **CSV** file. 

1. Open your project and go to the **Tests** tab.
2. In menu (`...`), click **Import from other TMS** and the **Imports** window will open.
3. Click **Import**.
4. Choose **Import from CSV**. **Import tests from CSV/XLSX** sidebar opens on the right.

![The Import from other TMS button on the Tests tab of a new project](./images/migration-from-qase/2-import-from-tms.png)

Next, in the **Import tests from CSV/XLSX** sidebar:

1. Choose **Qase** from the dropdown.
2. Select the CSV file you exported.
3. Click **Create**.

![Choosing Qase as the source and selecting the exported CSV file](./images/migration-from-qase/3-choose-qase-source.png)

After Testomat.io reads the file, your test cases appear on the **Tests** page.

You do not have to rebuild anything: you picked Qase in the dropdown, Testomat.io knows how your file is built. Your tests are in the same folders they were in Qase, and each test keeps its steps and expected results.

:::note

Your Qase tests are imported as classic test cases in Testomat.io.

:::

**If this doesn't work**

* **The import fails with an error.** A missing header row is the most common cause.
* **Your folders are flat.** Confirm you picked **Qase** in the dropdown - not another format.
* **Something is still off.** Contact [support](https://docs.testomat.io/support).

![Export your CSV, check the headers, import it, and check the result](./images/migration-from-qase/migration-flowchart.png)

Something missing or in the wrong place? Fix it in your CSV file and import again. That is much faster than editing tests one by one.

## Next steps

* Moving from another tool? See [Import Tests From TestRail](https://docs.testomat.io/project/import-export/import/import-tests-from-testrail/), [Import Tests From QTest](https://docs.testomat.io/project/import-export/import/import-tests-from-qtest/), and [Import Tests From Testmo](https://docs.testomat.io/project/import-export/import/import-tests-from-testmo/).
* Connect automated tests in [Import Tests From Source Code](https://docs.testomat.io/project/import-export/import/import-tests-from-source-code/).
* Connect an AI assistant to your project with [MCP - Connect AI Assistant](https://docs.testomat.io/tutorials/mcp-connection).