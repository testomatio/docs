---
permalink: /reference/import
title: Import Tests
editLink: false
---

# Import Tests

Testomat.io can import automated tests into a project.
We provide CLI tools for different frameworks so you get visibility of your tests in seconds.
On this page we collect the reference to them. Learn how to install and configure test importer for your project.

## JavaScript

> 📑 This documentation is taken from open-source project [testomatio/check-tests](https://github.com/testomatio/check-tests)


Use this checker as CLI tool with any Continuous Integration service.

Run `check-tests` via npx:

```sh
npx check-tests <framework> "<tests>" --no-skipped
```

#### Development

To change host of endpoint for receiving data, and set it to other than app.testomat.io use TESTOMATIO_URL environment variable:

TESTOMATIO_URL=http://local.testomat.io

> This checker will fail a build if exclusive tests (with `.only` or `fit` or `fdescribe` found)

#### Arguments:

- test framework
- glob pattern to match tests in a project, example: `tests/**_test.js'`. **It is important to include glob pattern in double quotes `"` so wildcard could be used correctly.**

#### CLI Options:

- `--no-skipped` - fail when skipped tests found
- `--typescript` - enable typescript support
- `-g, --generate-file <fileName>` - Export test details to document
- `-u, --url <url>`, Github URL to get file link (URL/tree/master)

#### Example

To generate test document

```
check-tests mocha "tests/*_test.js" -g Test-doc.md -u https://github.com/testomatio/check-tests/tree/master
```

Check tests for CodeceptJS

```
npx check-tests codeceptjs "tests/**_test.js"
```

Check tests for Protractor

```
npx check-tests protractor "spec/**.spec.js"
```

Check tests for Protractor with TypeScript

```
npx check-tests protractor "spec/**.spec.ts" --typescript
```

Check tests for Cypress.io

```
npx check-tests cypress "cypress/integration/**.js"
```

Check tests for Testcafe

```
npx check-tests testcafe "tests/**.js"
```

#### Sample Output

List CodeceptJS tests

![](https://user-images.githubusercontent.com/24666922/78563263-505d1280-7838-11ea-8fbc-18e942d48485.png)

When found `.only` test:

```
✗ npx check-tests mocha "test/**/**_test.js"

[[ Tests checker by testomat.io ]]
Error: Exclusive tests detected. `.only` call found in test/checkout/important_test.js:290
Remove `.only` to restore test checks

```

### Using in Testomatio

This library is used by [Testomatio](https://testomat.io) to import tests.

### Importing Into Project

Use `TESTOMATIO` environment variable with a valid API key to import data into a project.
API key can be obtained on project settings page or on "Import From Source" page.

For example:

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js"

```

### Disable Detached Tests

If a test from a previous import was not found on next import it is marked as "detached".
This is done to ensure that deleted tests are not staying in Testomatio while deleted in codebase.

To disable this behavior and don't mark anything on detached on import use `--no-detached` option

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --no-detached
```

### Synchronous Import

By default `check-tests` doesn't wait for all tests to be processed. It sends request to Testomatio and exits. To wait for processing to finish use `--sync` option.

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --sync
```

Please note, that this will take a long time on a large codebase.

### Auto-assign Test IDs in Source Code

To disable guess matching for tests it is recommend to use Testomatio IDs to map a test in source code to a test in Testomatio. Testomatio IDs can be put automatically into the test names into source code when `--update-ids` option is used:

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --update-ids
```

Tests imported with `--update-ids` will be processed in synchronouse mode, so the script will finish after all tests are processed.

### Clean Test IDs

If you want to import the synced project as new project, you have to clean the test ids. To clean the project use `--clean-ids`

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --update-ids
```

TESTOMATIO is API key for old project.

**Note:** If you don't have access to the old project you can still clean the project using `--unsafe-clean-ids`. This will clear the IDs that match the regex `@T****`. So if you have a tag like `@Test` this may also be removed. If you use this option make sure if all the test titles a proper before committing the tests in GIT.

#### Import Into a Specific Suite

To put all imported tests into a specific suite (folder) pass in `TESTOMATIO_PREPEND_DIR` environment variable:

```
TESTOMATIO_PREPEND_DIR="MyTESTS" TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js"
```

### TypeScript

For TypeScript projects `@babel/core` and `@babel/plugin-transform-typescript` packages are used. GitHub Action already contains those modules, while CLI version of this tool tries to automatically install them on first run.

If you face issues parsing TypeScript file menitioning `@babel/core` or `@babel/plugin-transform-typescript` try to install them manually:

```
npm i @babel/core @babel/plugin-transform-typescript --save-dev
```

Now tests TypeScript can be imported with `--typescript` option:

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --typescript
```

### Limitations

- Can't analyze included tests from external files
- Can't analyze dynamically created tests

### License MIT

Part of [Testomat.io](https://testomat.io)

## Cucumber
> 📑 This documentation is taken from open-source project [testomatio/check-cucumber](https://github.com/testomatio/check-cucumber)

To import tests into Testomatio run `check-cucumber` via npx:

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber
```

**Note: replace API_KEY wit key from Testomatio**

### CLI Options:

- `-d, --dir` - Directory of the project
- `-c, --codeceptjs` - If it is codeceptjs project use this option

**Note :** Running this will create Suites with folder and file name as sub suites.

To change host of endpoint for receiving data, and set it to other than app.testomat.io use TESTOMATIO_URL environment variable:

TESTOMATIO_URL=https://beta.testomat.io

### Sample Output

![check-cucumber-output](https://user-images.githubusercontent.com/24666922/78559548-2dc7fb00-7832-11ea-8c69-0722222a82fe.png)

### Assign IDs

To set Testomatio IDs for scenarios and features in files run this command with `--update-ids` option.

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --update-ids
```

Scenarios should already be imported into Testomatio

### Disable Detached Tests

If a test from a previous import was not found on next import it is marked as "detached".
This is done to ensure that deleted tests are not staying in Testomatio while deleted in codebase.

To disable this behavior and don't mark anything on detached on import use `--no-detached` option

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --no-detached
```

## Synchronous Import

By default `check-cucumber` doesn't wait for all tests to be processed. It sends request to Testomatio and exits. To wait for processing to finish use `--sync` option.

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --sync
```

Please note, that this will take a long time on a large codebase.

## Clean Test IDs

If you want to import the synced project as new project, you have to clean the test ids. To clean the project use `--clean-ids`

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --clean-ids
```

TESTOMATIO is API key for old project.

**Note:** If you don't have access to the old project you can still clean the project using `--unsafe-clean-ids`. This will clear the IDs that match the regex `@T****`. So if you have a tag like `@Test` this may also be removed. If you use this option make sure if all the test titles a proper before committing the tests in GIT:

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --unsafe-clean-ids
```

### Import Into a Specific Suite

To put all imported tests into a specific suite (folder) pass in `TESTOMATIO_PREPEND_DIR` environment variable:

```
TESTOMATIO_PREPEND_DIR="MyTESTS" TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber
```

---

License MIT.

Part of [Testomat.io](https://testomat.io/)




## PHP

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


