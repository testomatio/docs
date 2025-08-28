---
title: TestNG Integration with Testomat.io
description: Learn how to integrate TestNG with Testomat.io using Java-Reporter for efficient test management and detailed reporting. This guide covers adding Maven/Gradle dependencies, importing TestNG tests, configuring Java-Reporter properties, and customizing test runs for seamless test reporting workflows.
type: article
url: https://docs.testomat.io/tutorials/javareporter/testng
head:
  - tag: meta
    attrs:
      name: keywords
      content: TestNG integration, Testomat.io, Java-Reporter, TestNG tests, test reporting, Maven dependency, Gradle dependency, test management, Java test automation, test run customization, test properties configuration
---
<!--
    ## TestNG Integration Setup
        - Maven/Gradle dependencies
        - Java-Reporter library setup
        - Version management

    ## Test Import and Synchronization
        - Importing TestNG tests to Testomat.io
        - Using Java-Check-Tests CLI
        - Cross-platform commands (UNIX/MAC/Windows)

    ## Java-Reporter Configuration
        - TestNG-platform.properties setup
        - Required properties (listening, API key)
        - Property configuration methods
        - Environment variables vs JVM properties

    ## Test Run Customization
        - Basic run properties (title, environment, group)
        - Advanced properties (shared runs, export options)
        - Public vs private results
        - Integration with existing runs
-->


# TestNG integration with Testomat.io

This guide demonstrates how to integrate TestNG with [Testomat.io](https://app.testomat.io) for efficient test management
and detailed reporting.

---

## Adding the dependency

Add the proper **Maven/Gradle** snippet to your **pom.xml/build.gradle** file.

```xml

<dependency>
    <groupId>io.testomat</groupId>
    <artifactId>java-reporter-testng</artifactId>
    <version>0.7.4</version>
</dependency>
```

```properties
    implementation group: 'io.testomat', name: 'java-reporter-testng', version: '0.7.4'
```

> NOTE: There might be an updated version of the library published. You can check it in
> the [Maven Central Repository](https://central.sonatype.com/artifact/io.testomat/java-reporter-testng)

---

## Importing TestNG tests to [Testomat.io](https://app.testomat.io)

It is important to import your test codebase to [Testomat.io](https://app.testomat.io) to see the correct project
structure and test source code in the UI.

You can easily do this with the following commands:

Here is the command for UNIX/MAC users:

```bash
  export TESTOMATIO_URL=... && \
  export TESTOMATIO=... && \
  curl -L -O https://github.com/testomatio/java-check-tests/releases/latest/download/testomatio.jar && \
  java -jar testomatio.jar sync
```

And here is the command for Windows users:

```cmd
    set TESTOMATIO_URL=...&& ^
    set TESTOMATIO=...&& ^
    curl -L -O https://github.com/testomatio/java-check-tests/releases/latest/download/testomatio.jar&& ^
    java -jar testomatio.jar sync
```

This will download the **testomatio.jar** file – a CLI tool that is used to import tests.
> NOTE: More information about test importing can be found in the related
> tutorial [Import tests with Java-Check-Tests CLI](java-check-tests.md)
> and [Java-Check-Tests repository](https://github.com/testomatio/java-check-tests)

---

## Configure Java-Reporter in your project

1. You will need to provide some properties for reporting.  
   The list of required properties is quite short:
    - `testomatio.listening=true` – enables the reporting as a whole.
    - `testomatio.api.key` – the particular project API key you can obtain in [Testomat.io](https://app.testomat.io) >
      Account > Access-Tokens

   There are four ways to provide properties:
    - System environment
    - JVM properties
    - `testomatio.properties` file in the resources folder
    - `testomatio.url=https://beta.testomat.io` – if you run on beta, add this property as the library reports to
      https://app.testomat.io

   The most reliable and convenient way is to use the properties file.

   > - If you use the **JVM-properties** approach, use the **dot notation** (`testomatio.api.key`)

   > - When using environment variables, write properties in constant case (`TESTOMATIO_API_KEY`)

   > Names of the properties **remain the same** in both approaches.

2. When you have synchronized your code and provided the required properties, that's basically all: run your tests and see
   the results in the [Testomat.io UI](https://app.testomat.io)

    - ***Run customization with additional properties***

   | Setting                    | What it does                          | Default             | Example                      |
               |----------------------------|---------------------------------------|---------------------|------------------------------|
   | **`testomatio.run.title`** | Custom name for your test run         | `default_run_title` | `"Nightly Regression Tests"` |
   | **`testomatio.env`**       | Environment name (dev, staging, prod) | _(none)_            | `"staging"`                  |
   | **`testomatio.run.group`** | Group related runs together           | _(none)_            | `"sprint-23"`                |
   | **`testomatio.publish`**   | Make results publicly shareable       | _(private)_         | `1`                          |

    - Advanced customization

   | Setting                             | What it does                                                | Example                    |
            |-------------------------------------|-------------------------------------------------------------|----------------------------|
   | **`testomatio.url`**                | Custom Testomat.io URL (for enterprise)                     | `https://app.testomat.io/` |
   | **`testomatio.run.id`**             | Add results from current run to another that already exists | `"run_abc123"`             |
   | **`testomatio.create`**             | Auto-create missing tests in Testomat.io                    | `true`                     |
   | **`testomatio.shared.run`**         | Shared run name for team collaboration                      | `"team-integration-tests"` |
   | **`testomatio.shared.run.timeout`** | How long to wait for shared run (seconds)                   | `3600`                     |
   | **`testomatio.export.required`**    | Exports your test code to Testomat.io                       | `true`                     |

3. As you can see, there is the `testomatio.export.required` property in the list.
   It allows you to sync the codebase with [Testomat.io](https://app.testomat.io), but in a slightly different way
   than the [Java-Check-Tests CLI](https://github.com/testomatio/java-check-tests).
   It will also import your test codebase but ***when you run tests*** and ***only the tests in this run***.

### If you need more information, have any suggestions, or encounter any problems with Java Reporter, create an issue in its repository: [Java-Reporter repository](https://github.com/testomatio/java-reporter/tree/1.x)