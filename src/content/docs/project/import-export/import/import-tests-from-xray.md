---
title: Import Tests From XRay
description: Learn how to import tests from XRay into Testomat.io using the migration script that utilizes the XRay API.
type: article
url: https://docs.testomat.io/project/import-export/import-tests-from-xray
head:
  - tag: meta
    attrs:
      name: og:image

  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, CSV, XRay, test import, XRay migration, manual tests, automated tests, test management
---

> If you have existing tests in XRay and want to migrate to Testomat.io, you can use our migration script, which pulls test cases via the XRay API and converts them into Testomat.io’s format.

## Import XRay Project via Migration Script

This method is ideal if you need to migrate test cases directly from XRay, including custom fields or complex structures.

### Steps:

1. Open your project in Testomat.io.  
2. Go to the **Imports** tab.  
3. Click the **Import from CSV** button.

![Import from CSV button](./images/import_fromcsv_button.png)

4. From the dropdown, select **XRay**.  
5. Follow the instructions in the [advanced XRay migration script](https://github.com/testomatio/migrate-xray) to export your tests via API and convert them into a CSV format compatible with Testomat.io.

![Import from XRay Script](./images/XRay_script.png)







