---
title: Configuration
description: This guide outlines how to configure Testomat.io Reporter using environment variables. It explains how to pass variables inline, via .env files, or CI secrets, and provides a comprehensive list of configuration options such as setting API keys, managing test reports, and customizing parallel test executions. Additionally, it covers artifact storage and pipeline configurations for GitHub and GitLab integrations.
type: article
url: https://docs.testomat.io/reference/reporter/configuration/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io Reporter, configuration, environment variables, CI secrets, test reporting, API keys, parallel execution, artifact storage, GitHub Pipe, GitLab Pipe
---


You can configure Testomat.io reporter with **environment variables**.

Environment variables can be either passed inline, or from `.env` file or from secrets, when running on CI.

> ℹ️ Specifying **any value** for truthy variables activates the setting, e.g. `TESTOMAT_ENABLE_SMTH=true`, `TESTOMAT_ENABLE_SMTH=1`, and even `TESTOMAT_ENABLE_SMTH=false`, `TESTOMAT_ENABLE_SMTH=0` etc do the same - **enable** the setting.

## Variables List

#### `TESTOMATIO` 

Alternatively, `TESTOMATIO_TOKEN` or `TESTOMATIO_API_KEY`

Your Project API key for reporting to Testomat.io.

#### `TESTOMATIO_CREATE`

Create test IDs.

#### `TESTOMATIO_DISABLE_BATCH_UPLOAD`

Disables batch uploading (multiple test results in one request) and uploads each test result one by one.

Example:

```
TESTOMATIO_DISABLE_BATCH_UPLOAD=true <actual run command>
```

#### `TESTOMATIO_ENV`

Specify environments to run the tests.

Example:

```
TESTOMATIO={API_KEY} TESTOMATIO_ENV="Windows, Chrome" <actual run command>
```

#### `TESTOMATIO_EXCLUDE_FILES_FROM_REPORT_GLOB_PATTERN`

Exclude tests from the report using [glob patterns](https://www.npmjs.com/package/glob).

Example:

```
TESTOMATIO_EXCLUDE_FILES_FROM_REPORT_GLOB_PATTERN="**/*.setup.ts" <actual run command>
```

For multiple patterns:

```
TESTOMATIO_EXCLUDE_FILES_FROM_REPORT_GLOB_PATTERN="**/*.setup.ts;tests/*.auth.js" <actual run command>
```

#### `TESTOMATIO_EXCLUDE_SKIPPED`

Exclude skipped tests from the report.

Example:

```
TESTOMATIO_EXCLUDE_SKIPPED=1 <actual run command>
```

#### `TESTOMATIO_INTERCEPT_CONSOLE_LOGS`

Intercept console logs and add them to your report.

Example:

```
TESTOMATIO_INTERCEPT_CONSOLE_LOGS=true <actual run command>
```

#### `TESTOMATIO_MAX_REQUEST_FAILURES_COUNT`

Maximum number of failed requests within 60 seconds. Default is 10.

Example:

```
TESTOMATIO_MAX_REQUEST_FAILURES_COUNT=5 <actual run command>
```

#### `TESTOMATIO_PROCEED`

Do not finalize the run.

Example:

```
TESTOMATIO_PREPEND_DIR="MyTESTS" TESTOMATIO=1111111 npx check-tests CodeceptJS "**/*{.,_}{test,spec}.js"
```

#### `TESTOMATIO_PREPEND_DIR`

Place all imported tests into a specific suite (folder).

#### `TESTOMATIO_RUN`

Add a report to the run by ID.

#### `TESTOMATIO_RUNGROUP_TITLE`

Add a report to a RunGroup.

Example:

```
TESTOMATIO={API_KEY} TESTOMATIO_RUNGROUP_TITLE="Build ${BUILD_ID}" <actual run command>
```

#### `TESTOMATIO_SHARED_RUN`

Report parallel execution to the same run.

Example:

```
TESTOMATIO={API_KEY} TESTOMATIO_TITLE="report for commit ${GIT_COMMIT}" TESTOMATIO_SHARED_RUN=1 <actual run command>
```

#### `TESTOMATIO_STACK_FILTER`

Stack trace filter configuration.

#### `TESTOMATIO_STACK_PASSED`

Enable stack traces and logs for passed tests (disabled by default).

Example:

```
TESTOMATIO={API_KEY} TESTOMATIO_STACK_PASSED=1 <actual run command>
```

#### `TESTOMATIO_TITLE`

Set the report title.

Example:

```
TESTOMATIO={API_KEY} TESTOMATIO_TITLE="title for the report" <actual run command>
```

#### `TESTOMATIO_TITLE_IDS`

Configure title IDs.



### Artifacts

Configuration for artifacts storage.

* `S3_ACCESS_KEY_ID`: Your S3 access key ID.
* `S3_BUCKET`: Your S3 bucket name.
* `S3_ENDPOINT`: Your S3 endpoint URL.
* `S3_REGION`: Your S3 region.
* `S3_SECRET_ACCESS_KEY`: Your S3 secret access key.

### Pipes

Configuration for CI/CD pipelines.

* `GH_PAT`: Your GitHub personal access token (to enable GitHub Pipe)
* `GITLAB_PAT`: Your GitLab personal access token (to enable Gitlab Pipe).


## Loading configuration from `.env` file

You can use `.env` file to store your environment variables. To read environment variables from `.env` file, use [dotenv](https://www.npmjs.com/package/dotenv) package:

```javascript
require('dotenv').config({ path: '.env' }); // or any other path
```

or

```javascript
import dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // or any other path
```

It is recommended to read `.env` file as early as possible in your application, preferably on test runner initialization.
E.g. in CodeceptJS you can do it in `codecept.conf.js` file. In Playwright: `playwright.config.js`. Jest: `jest.config.js`. Cypress: `cypress.config.js`. And so on.

It is recommended to add `.env` file to `.gitignore` to avoid committing sensitive data to the repository.

