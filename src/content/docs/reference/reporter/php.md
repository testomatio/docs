---
title: PHP Test Frameworks
---


:::note
 Taken from [PHP Reporter Readme](https://github.com/testomatio/php-reporter)
:::
 

## Installation

```
composer require testomatio/reporter --dev
```

### Codeception

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


