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

#### Test code

By default, check-test sends the code of the test hooks to the "client": before, beforeEach and after. 
In the "Codes" section you can see all the additional "context" of the test (Testomat.io).

To exclude hook code from a client test, use the --no-hooks option

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --no-hooks
```

#### Additional line number to the test code

To include line number code from a client test, use --line-numbers option.
_(By default Code section exclude "line number")_

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --line-numbers
```


### Import Parametrized Tests

It is possible to import parametrized tests if they use template literals with variables in thier names:

```js
['one', 'two', 'three'].forEach(() => {
  it(`this is test number ${parameter}`);
});
```

This test will be imported with its original name including a placeholder:

```
this is test number ${parameter}
```

When executed test will be reported with 3 results matched to the same test and param values will be added to the report.

### Disable Detached Tests

If a test from a previous import was not found on next import it is marked as "detached".
This is done to ensure that deleted tests are not staying in Testomatio while deleted in codebase.

To disable this behavior and don't mark anything on detached on import use `--no-detached` option

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --no-detached
```

This option could also be set via environment variable `TESTOMATIO_NO_DETACHED=1`.
If you don't want to pass it each time, create .env file in the root dir of your project with this variable set.

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

### Keep Test IDs Between Projects

To import tests with Test IDs set in source code into another project use `--create` option. In this case, a new project will be populated with the same Test IDs.

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --create
```

Without `--create` import will fail with a message that ID was not found.

### Clean Test IDs

If you want to import the synced project as new project, you have to clean the test ids.
To clean up test ids without connecting to Testomatio project use `--purge` option:

```
npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --purge
```

This method may be unsafe, as it cleans all `@S*` and `@T*` tags from tests and suites. So if you have a tag like `@Test1234` this may also be removed. If you use this option make sure if all the test titles a proper before committing the tests in GIT.

> **Note:** `--purge` is an alias of `--unsafe-clean-ids` option.

To clean only test ids set from a specific project use `--clean-ids` option instead:

```
TESTOMATIO=11111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --clean-ids
```

TESTOMATIO is API key of a project with existing test ids.

#### Import Into a Branch

Tests can be imported into a specific branch if `TESTOMATIO_BRANCH` parameter is used.
Branch is matched by its id. If branch was not found, it will be created.

```
TESTOMATIO_BRANCH=dev TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js"
```

#### Keep Structure of Source Code

When tests in source code have IDs assigned and those tests are imported, Testomat.io uses current structure in a project to put the tests in. If folders in source code doesn't match folders in Testomat.io project, existing structure in source code will be ignored. To force using the structure from the source code, use `--keep-structure` flag on import:

```
TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --keep-structure
```

#### Delete Empty Suites

If tests were marked with IDs and imported to already created suites in Testomat.io
newly imported suites may become empty. Use `--no-empty` option to clean them up after import.

```
TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --no-empty
```

> This prevents usage --keep-structure option.

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

### Programmatic API

Import Analyzer from module:

```js
const { Analyzer } = require('check-tests');

const framework = 'jest';
const pathToTests = './tests';
const pattern = '**/*[._-]{test,spec}.{ts,js}';

const analyzer = new Analyzer(framework, pathToTests);

// to enable typescript...
analyzer.withTypeScript();

// to enable babel plugins
analyzer.addPlugin('@babel/plugin-syntax-jsx');
analyzer.addPlugin('@babel/plugin-syntax-flow');

// to enable babel presets
analyzer.addPreset('@babel/preset-react');
analyzer.addPreset('@babel/preset-flow');

analyzer.analyze(pattern);

// stats on processed files
const stats = analyzer.stats;

// full info on parsed tests
const data = analyzer.rawTests;
```

### Debugging

Run import with `DEBUG="testomatio:*"` environment variable to get additional logs which may help understanding the cause of an issue. Usually it may happen because of a specific file that couldn't be parsed:

```
DEBUG="testomatio:*" npx check-tests@latest ....
```

### API Definition

API Endpoint to import test data into Testomat.io:

[Import API Reference](https://testomatio.github.io/check-tests/)

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

This option could also be set via environment variable `TESTOMATIO_NO_DETACHED=1`.
If you don't want to pass it each time, create .env file in the root dir of your project with this variable set.


## Synchronous Import

By default `check-cucumber` doesn't wait for all tests to be processed. It sends request to Testomatio and exits. To wait for processing to finish use `--sync` option.

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --sync
```

Please note, that this will take a long time on a large codebase.

## Clean Test IDs

If you want to import the synced project as new project, you have to clean the test ids.
To clean up test ids without connecting to Testomatio project use `--purge` option:

```
npx check-cucumber -d example/cucumber --purge
```

This method may be unsafe, as it cleans all `@S*` and `@T*` tags from tests and suites. So if you have a tag like `@Test1234` this may also be removed. If you use this option make sure if all the test titles a proper before committing the tests in GIT.

> **Note:** An alias of `--purge` option is `--unsafe-clean-ids`.

To clean only test ids set from a specific project use `--clean-ids` option instead:

```
TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber --clean-ids
```

TESTOMATIO is API key for old project.

### Import Into a Branch

Tests can be imported into a specific branch if `TESTOMATIO_BRANCH` parameter is used.
Branch is matched by its id. If branch was not found, it will be created.

```
TESTOMATIO_BRANCH="dev" TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js"
```

### Keep Structure of Source Code

When tests in source code have IDs assigned and those tests are imported, Testomat.io uses current structure in a project to put the tests in. If folders in source code doesn't match folders in Testomat.io project, existing structure in source code will be ignored. To force using the structure from the source code, use `--keep-structure` flag on import:

```
TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --keep-structure
```

> This may be helpful when you want to align current project with the source code and use the source code as the source of truth for tests.


### Delete Empty Suites

If tests were marked with IDs and imported to already created suites in Testomat.io
newly imported suites may become empty. Use `--no-empty` option to clean them up after import.

```
TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js" --no-empty
```

> This prevents usage --keep-structure option.

### Import Into a Specific Suite

To put all imported tests into a specific suite (folder) pass in `TESTOMATIO_PREPEND_DIR` environment variable:

```
TESTOMATIO_PREPEND_DIR="MyTESTS" TESTOMATIO=API_KEY npx check-cucumber -d example/cucumber
```

### Import Manual BDD Tests From Source Code

If you have manual tests in the repository and want to import them into Testomatio you can use `.manual.feature` extension in the feature file. Tests will be imported as well as automated tests and will be marked as `manual` in Testomatio. For instance:

```
mark-as-completed.manual.feature
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


