---
title: Import PHP Tests
description: Import PHP tests into Testomat.io using the list-tests CLI utility, which supports PHPUnit and Codeception. This guide explains how to install the tool, print and export test lists in markdown format, and import tests directly into Testomat.io by passing the API key for your project. Easily manage PHP tests and maintain live documentation with this integration.
type: article
url: https://docs.testomat.io/reference/import-php/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, PHP test import, PHPUnit, Codeception, CLI tool, test management, live documentation, markdown export, test synchronization, API key, QA tools
---


> 📑 This documentation is taken from open-source project [testomatio/php-list-tests](https://github.com/testomatio/php-list-tests)


This CLI utility prints all tests in PHP project **without executing them**.
Easily check the number tests and get live documentation for your tests in markdown format!

> Supports PHPUnit & Codeception.

This CLI script is also used to import tests into Testomat.io application.

### Installation

```
composer require testomatio/list-tests --dev
```

### Usage

To print all tests execute `list-tests` script pointing to directory with tests:

```
php vendor/bin/list-tests test/
```

This will print output similar to this: 

![](https://pbs.twimg.com/media/Ee5PXDOWkAEdiyz?format=jpg&name=large)

To print tests into a file execute command with `--markdown` option providing a filename to save info into:

```
php vendor/bin/list-tests tests --markdown test-docs.md
```

This command will save test list into "tests.md" file.

To show test list with links to corresponding files on GitHub/GitLab/BitBucket 
use `PREPEND_URL` environment variable and set a base URL for tests files.

```
PREPEND_URL=https://github.com/testomatio/php-list-tests/tests php vendor/bin/list-tests tests --markdown tests.md 
```

This will generate a file similar to [test-docs.md](test-docs.md) in this repository.

### Import into [Testomat.io](https://testomat.io)

This script can also import tests from PHP project into the testomat.io project.
Pass in TESTOMATIO API KEY of your project to import tests:

```
TESTOMATIO={api-key} php vendor/bin/list-tests tests 
``` 


