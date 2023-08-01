---
permalink: /usage/test-artifacts
title: Test Artifacts
editLink: true
---

# Test Artifacts

To inspect a failing test additional files can be attached to a test. These files are called test artifacts. Testomat.io does not store test artifacts on its own servers. However, you can upload test artifacts to arbitrary S3 compatible storage and allow Testomat.io to display them.

To have test artifacts uploaded you need to have S3 Object Storage bucket on AWS, DigitalOcean, Azure, or Google Cloud in interoperability mode. Testomat.io reporter will upload files to these services and send links back to Testomat.io.

By using external storage Testomat.io allows getting full control over how the storage is used. You can either clean up old test artifacts or contrary extend storage to store all history for all periods. S3 was chosen as a de-facto standard for file storage so all cloud providers support it. If you don't have S3 storage yet, you can purchase one from your favorite cloud provider and create a new bucket (storage space) on it. Testomat.io has no direct access to artifacts storage.  

Test artifacts can be uploaded with **public (default) or private** access to a bucket

![testomatio-s3](images/142726285-1ce87a76-3e1c-47ec-8f35-f3baddcf1684.png)

1. reporter sends a file to S3 storage and sends link back to Testomat.io
2. Testomat.io displays artifacts by the link in public mode or pre-signed links in private mode

## Public Access

**By default files sent from a test runner are created with `public-read` access mode**.  In this mode uploaded files (screenshots and videos) can be accessed by any user via a permalink. A bucket can be configured to disable the public listing of files, an arbitrary user can't access a file without knowing that permalink.

Stored files will be served publicly via an appropriately configured ACL (Access Control List) or ACP (Access Control Policy).

## Private Access

If you need a more secure approach use **private access** mode. In this case, you will need to configure access credentials for Testomat.io, so it could access files inside a bucket.

Testomat.io will require read access to S3 storage to access those files and pre-sign them. Provide credentials to access the S3 bucket where test artifacts are stored on "Project > Settings > Artifacts" page:

![image](images/142726276-7863a036-0347-4cc6-a919-000008bffa92.png)

> Test Artifacts settings are available only to managers and owners of a project

## Configuration

Testomat.io reporter uses environment variables to pass configuration to upload screenshots. If `S3_BUCKET` environment variable is defined reporter will start uploading test artifacts.

We recommend storing S3 configuration in `.env` files when running tests locally and using job configuration when running on the Continuous Integration server.

```
# enable private access mode
TESTOMATIO_PRIVATE_ARTIFACTS=1

# s3 upload config
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_REGION=
S3_BUCKET=
S3_ENDPOINT=

```
> `S3_ENDPOINT` is required only if you use S3 provider other than AWS 

To disable publishing of artifacts use `TESTOMATIO_DISABLE_ARTIFACTS=1` environment variable.

Examples of upload configuration defined in environment variables:

##### AWS

Upload to AWS with private access mode:

```
TESTOMATIO_PRIVATE_ARTIFACTS=1
S3_ACCESS_KEY_ID=11111111111111111111
S3_SECRET_ACCESS_KEY=2222222222222222222222222222222222222222222
S3_BUCKET=artifacts
S3_REGION=us-west-1
```

##### DigitalOcean

Upload to DigitalOcean in private access mode:

```
TESTOMATIO_PRIVATE_ARTIFACTS=1
S3_ENDPOINT=https://ams3.digitaloceanspaces.com
S3_ACCESS_KEY_ID=11111111111111111111
S3_SECRET_ACCESS_KEY=2222222222222222222222222222222222222222222
S3_BUCKET=artifacts
S3_REGION=ams3
```

##### Minio

Upload to Minio in public access mode:

```
S3_ENDPOINT=http://company.storage.com
S3_ACCESS_KEY_ID=minio
S3_SECRET_ACCESS_KEY=minio123
S3_BUCKET=testomatio
S3_FORCE_PATH_STYLE=true
```

## NodeJS Reporter

If you successfully configured `@testomatio/reporter` to work with the current test runner you can set up S3 credentials via environment variables.

We recommend using [dotenv](https://www.npmjs.com/package/dotenv) library in development mode to store all config variables in a file. Create .env files in the same folder where a test configuration is stored and add require('dotenv').config(); to the top of the file:

```js
// config file
require('dotenv').config()

// ...
```

Testomatio Reporter automatically uploads saved artifacts for the following test frameworks:

* Playwright 
* CodeceptJS
* Сypress
* WebdriverIO

If you use other test runners or you want to add more files to test report you can add this via `@testomatio/reporter` API. To attach a file inside a test, add a filename of an existing file to  `global.testomatioArtifacts` array:

```js
// inside a test:

// attach a local file to a report
global.testomatioArtifacts.push(fileName);

// attach a picture inside a test

global.testomatioArtifacts.push('img/file.png');

// attach a picture and add a name to it
global.testomatioArtifacts.push({ name: 'Screenshot', path: 'img/file.png' });
```

Artifacts will be uploaded for the current test when it is finished:

If everything was configured correctly test artifacts will be uploaded on the next run. 
