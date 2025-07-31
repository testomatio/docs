---
title: PHP Test Frameworks
description: Learn how to integrate PHP test frameworks like Codeception and PHPUnit with Testomat.io. The guide covers installation, setting API keys, and configuring test reporting. It supports seamless integration for automated test results with real-time reporting, enhancing test management workflows.
type: article
url: https://docs.testomat.io/test-reporting/php
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, PHP, Codeception, PHPUnit, test reporting, automated testing, CI integration, API keys, real-time reports, test management
---

:::note
 Taken from [PHP Reporter Readme](https://github.com/testomatio/php-reporter)
:::
 

## Installation

```
composer require testomatio/reporter --dev
```

### Codeception

> [!NOTE]
> For Codeception 4.x install `testomatio/php-reporter` version 0.4.0, for Codeception 5+ install `1.0.0` version of this reporter.

Get API key from Testomatio application and set it as `TESTOMATIO` environment variable.
Run your tests with`Testomatio\Reporter\Codeception` extension enabled: 

On Linux/MacOS:

```
TESTOMATIO={apiKey} php vendor/bin/codecept run --ext "Testomatio\Reporter\Codeception"
```

On Windows

```
set TESTOMATIO={apiKey}&& php vendor/bin/codecept run  --ext "Testomatio\Reporter\Codeception"
```

Alternatively, you can add `Testomatio\Reporter\Codeception` extension to suite or global config. 
Reporter will be started only when `TESTOMATIO` environment variable is set:

```yml
extensions:
  enabled:
    - Testomatio\Reporter\Codeception
```

### PHPUnit

> PHPUnit v10+ is not implemented yet

Add `Testomatio\Reporter\PHPUnit` listener to `phpunit.xml` or `phpunit.dist.xml`

```xml
<listeners>
    <listener class="Testomatio\Reporter\PHPUnit" file="vendor/testomatio/php-reporter/src/PHPUnit.php" />
</listeners>
```
Run tests and provide `TESTOMATIO` API key as environment variable:

On Linux/MacOS:

```
TESTOMATIO={apiKey} php vendor/bin/phpunit
```

On Windows

```
set TESTOMATIO={apiKey}&& php vendor/bin/phpunit
```

