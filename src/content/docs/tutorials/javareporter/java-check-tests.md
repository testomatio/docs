---
title: Java-check-tests CLI
description: Learn how to our tests source code with Testomat.io using Java-Check-Tests for efficient Java test management and synchronization. The guide covers importing JUnit5 and TestNG tests, syncing test IDs, managing test codebase, and configuring CLI commands for seamless test management workflows.
type: article
url: https://docs.testomat.io/tutorials/javareporter/java-check-tests
head:
  - tag: meta
    attrs:
      name: keywords
      content: Java-check-tests, Testomat.io, JUnit5, TestNG, test synchronization, test import, Java test management, CLI tool, test IDs, test codebase, Java automation, maven dependency
---
<!--
    ## Importing Java Tests with CLI
        - JUnit5 tests import
        - TestNG tests import
        - Prerequisites (maven dependencies)
        - Sync command usage
        - Add IDs to test methods

    ## CLI Commands and Options
        - sync command (import + pull-ids)
        - import command
        - pull-ids command
        - clean-ids command
        - directory options

    ## Configuration and Setup
        - Environment variables (TESTOMATIO_URL, TESTOMATIO)
        - One-liner sync commands for different OS
        - Jar file management
-->

# Import tests with Java-Check-Tests CLI

Java-check-tests is a CLI tool developed for convenient import of your test codebase (JUnit5 and TestNG) to Testomat.io.  
The repository can be found [here](https://github.com/testomatio/java-check-tests/tree/main).  
***It is important to sync your tests with the Testomat.io server to create proper test folder structure and  
to be able to see the source code of your tests in the UI***

## The CLI is capable of:
- Importing your tests to Testomat.io
- Add/update your tests IDs with your tests on the server
- Removing the IDs if you don't need them

This simple guide will show you how to synchronize your test codebase with Testomat.io.

**Prerequisites:**  
You need to add the **java-reporter** dependency of the actual version to your `pom.xml` file, as the CLI will add annotations from it to your  
tests when the sync command runs:
```xml
<dependency>
    <groupId>io.testomat</groupId>
    <artifactId>java-reporter-junit</artifactId>
    <version>0.7.4</version>
</dependency>
```
or:
```xml
<dependency>
    <groupId>io.testomat</groupId>
    <artifactId>java-reporter-testng</artifactId>
    <version>0.7.4</version>
</dependency>
```

> **NOTE**: when you read this, the version might be updated (check it here: [JUnit](https://central.sonatype.com/artifact/io.testomat/java-reporter-junit) / [TestNG](https://central.sonatype.com/artifact/io.testomat/java-reporter-testng))
---
## Synchronizing your test codebase
By default, this will import ***all*** the tests from the directory you run the query in and recursively from all the directories  
inside. To change the directory, use the `--directory` property (see below).  
There is a convenient way to do this in one move - use the oneliners that will download the latest version of  
**java-check-tests** and run the `sync` command.  
Here is one for UNIX/MAC users:
```bash
  export TESTOMATIO_URL=... && \
  export TESTOMATIO=... && \
  curl -L -O https://github.com/testomatio/java-check-tests/releases/latest/download/testomatio.jar && \
  java -jar testomatio.jar sync
```
And this one is for Windows users:
```cmd
    set TESTOMATIO_URL=...&& ^
    set TESTOMATIO=...&& ^
    curl -L -O https://github.com/testomatio/java-check-tests/releases/latest/download/testomatio.jar&& ^
    java -jar testomatio.jar sync
```

The `TESTOMATIO_URL` here is the server URL. In general, this will be `https://app.testomat.io` or `https://beta.testomat.io`.   
`TESTOMATIO` is your project API key that you can get from **Testomat.io > Account > Access-Tokens**.  
Troubleshooting: check if you haven't missed any whitespaces while editing the query.
>**NOTE**: This command will download the jar file **testomatio.jar** to the directory from which you run the query.  
>This file will remain in the directory and **won't be removed automatically**.

After you run this command, here is what you are supposed to see:
> **In the terminal:**
>
<img src="img/firstSyncConsoleResult.png" alt="First sync command run console result image" style="max-width: 47%; height: auto;">

> **In the Testomat.io UI:**
>
<img src="img/uiImportResult.png" alt="UI import result image" style="max-width: 47%; height: auto;">

> **In your test classes:**
>
<img src="img/codebaseDiff.png" alt="Codebase diff image after sync" style="max-width: 47%; height: auto;">

If you already have the `testomatio.jar` in the directory and need to sync again, run this:

```bash
  java -jar testomatio.jar --url=... --apikey=...
```

### What it does implicitly:
The `sync` command runs `import` and `pull-ids` consecutively after import succeeds.  
The **import** command parses your codebase and imports it to Testomat.io.  
The **pull-ids** command adds or updates the @TestId annotations to your test methods and related imports to the test classes.


---

## Command options
Optionally, you can use a property for the CLI to search for tests in another directory by providing:
- `--directory=./relative/path/from/current`. This option works for other commands as well.
---

## Other commands
Since the `testomatio.jar` is already in your project, you can use other commands:
> `clean-ids`
>
This command will remove all the IDs from test methods and related imports from the test classes.  
`--directory` works for this command.
If you have already removed the jar from the project, you can run the oneliner you used to sync,  
but change `sync` to `clean-ids`.
<br/>
<br/>


>`import`
> 
This allows you to import your codebase to Testomat.io without adding/updating the IDs.  
`--url` and --`apikey` are required(both).  
`--directory` is optional.
<br/>
<br/>

As you can see, the Java-Check-Tests usage is pretty straightforward.  
If you need more information, have any suggestions, or encounter any problems with this CLI, create an issue in its repository: [Java-check-tests repository](https://github.com/testomatio/java-check-tests/tree/main)