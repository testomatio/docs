---
title: Csv
description: The CSV Pipe in Testomat.io allows you to export test results as a CSV file by setting the TESTOMATIO_CSV_FILENAME environment variable. This functionality integrates with CI workflows to generate reports in a simple, readable format, enabling easy sharing and analysis of test results across teams.
type: article
url: https://docs.testomat.io/reference/reporter/pipes/csv/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: CSV Pipe, Testomat.io, test reporting, CI integration, CSV export, test results, automated testing, TESTOMATIO_CSV_FILENAME
---
## CSV Pipe

CSV Pipe saves test result as CSV file

**🔌 To enable GitLab pipe set `TESTOMATIO_CSV_FILENAME` environment variable with the name of CSV file to save into**

Add an env to run by specifying the `TESTOMATIO_CSV_FILENAME` variable.

```bash
TESTOMATIO_CSV_FILENAME="report.csv" <actual run command>
```

