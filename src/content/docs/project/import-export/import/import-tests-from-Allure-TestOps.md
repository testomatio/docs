---
title: Import Tests From Allure TestOps
description: Learn how to import tests from Allure TestOps using a customizable migration script for more advanced, tailored imports.
type: article
url: https://docs.testomat.io/project/import-export/import-tests-from-allure-testops
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, CSV, Allure TestOps, test import, migration, manual tests, automated tests, test management, custom CSV, convert tests.
---

Bringing tests from Allure TestOps into Testomat.io: export them from TestOps, run a script that converts the file, then upload what the script produced.


![Export from Allure TestOps, convert the file with the script, then import it as Testomatio](./images/allure-migration-map.png)

:::note

Allure TestOps files must be converted into the Testomat.io format before export.

:::

## Export from Allure TestOps

1. Open your project in Allure TestOps.
2. Export your test cases as a **CSV** file.
3. Save the file on your computer.

## Convert the file

The migration script turns your Allure CSV into a file Testomat.io can read. You can also use it to rename columns or restructure your cases on the way across.

1. Open the [migration script instructions](https://github.com/testomatio/migrate-allure) on GitHub.
2. Follow the setup steps there and run the script against your Allure file.
3. Save the file the script produces. That is the one you upload.

## Import Allure TestOps file

Start importing your tests to Testomat.io:

1. Open your project and go to the **Tests** tab.
2. Click the (`…`) menu.
3. Choose **Import from other TMS**. 

![Tests tab with the extra menu](./images/att1_436.png)

In the **Imports** window:

1. Click **Import**.
2. Choose **Import from CSV**. A sidebar opens on the right.
3. Choose **Testomatio** from the dropdown. 
4. Click **Choose file**, select your exported and converted CSV.
5. Click **Create**.

![image Import Testomat](./images/att2_436_allure.png)

:::note

If you have not made a project yet, [create one first](https://docs.testomat.io/getting-started/#create-project).

:::

## If this doesn't work

- **There is no Allure option in the dropdown.** There is not meant to be one. Pick **Testomatio** instead.
- **The import fails.** Check that you uploaded the file the script produced, not your original Allure export.
- **Something is still off.** Contact [support](https://docs.testomat.io/support) with your file attached.

## Next steps

* [Import from CSV/XLSX](https://docs.testomat.io/project/import-export/import/import-tests-from-csv-xlsx) - the column reference and every other supported format.
* [Running Tests Manually](https://docs.testomat.io/project/runs/running-tests-manually) - run the tests you just imported and record the results.
* [Labels and Custom Fields](https://docs.testomat.io/advanced/tags-labels/labels-and-custom-fields) - organize your imported tests by priority, type, or any Allure field.