---
title: Import Tests From Qase
description: Learn how to import tests from Qase using the CSV import feature in Testomat.io. This guide walks you through formatting and uploading your test cases, making it easy to migrate or bulk add tests efficiently.
type: article
url: https://docs.testomat.io/project/import-export/import-tests-from-qase
head:  
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, CSV, Qase, test import, Qase migration, manual tests, automated tests, test management, custom XLS
---

Export your tests in Qase as a CSV file and import that file into Testomat.io. Your folders come across as the same tree, and each test keeps its steps and expected results.

## Export Qase tests

Export your tests from Qase:

1. Open your Qase project.
2. Export your test cases as a **CSV** file.
3. Save it on your computer.

![Exporting tests from the Qase project](./images/export-from-qase.png)

## Import your Qase file

Start importing your tests to Testomat.io:

1. Open your project and go to the **Tests** tab.
2. Click the (`…`) menu.
3. Choose **Import from other TMS**. 

![Tests tab with the extra menu](./images/att1_436.png)

In the **Imports** window:

1. Click **Import**.
2. Choose **Import from CSV**. A sidebar opens on the right.
3. Choose **Qase** from the dropdown. 
4. Click **Choose file**, select your exported CSV.
5. Click **Create**.

![image Import from Spreadsheet button](./images/att2_436.png)

Testomat.io reads the file, and your tests appear on the **Tests** page.

:::note

Your Qase tests arrive as classic test cases. For the full walkthrough, including how to keep Qase properties as custom fields, see [Migration from Qase](https://docs.testomat.io/tutorials/migration-from-qase).

:::

## Example file

Not sure your export looks right? Download the [sample](https://testomatio-artifacts.ams3.cdn.digitaloceanspaces.com/documentation/Qase.csv) and compare the first row with yours.

## If this doesn't work

* **The import fails.** Check that the first row of your file holds column names.
* **Your folders are flat.** Make sure you picked **Qase** in the dropdown, not another format.
* **Something is still off.** Contact [support](https://docs.testomat.io/support) with your file attached.

## Next steps

* [Migration from Qase](https://docs.testomat.io/tutorials/migration-from-qase) - the full tutorial, including how to carry Qase properties over as custom fields.
* [Import from CSV/XLSX](https://docs.testomat.io/project/import-export/import/import-tests-from-csv-xlsx) - the column reference and every other supported format.
* [Labels and Custom Fields](https://docs.testomat.io/advanced/tags-labels/labels-and-custom-fields) - organize your imported tests by status, severity, or any Qase property.