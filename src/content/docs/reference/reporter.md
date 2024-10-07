---
title: Testomat.io Reporter
description: The Testomat.io Reporter is a Node.js package designed to send test results directly to Testomat.io. It supports real-time reports, artifact uploads, and logs for Node.js frameworks like Jest and Playwright. It can also generate reports from JUnit files for other languages like Java, PHP, and Ruby. The package is configured via environment variables and integrates with CI workflows.
type: article
url: https://docs.testomat.io/reference/reporter/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Node.js, Jest, Playwright, JUnit, test reporting, real-time reports, CI integration, test artifacts, automated testing, test management
---

Testomat.io reporter is NodeJS package that sends test results to [app.testomat.io](https://app.testomat.io)

::: note
Testomatio Reporter is a standalone package that can be used without Testomat.io application.
[Open it on GitHub](https://github.com/testomatio/reporter)
:::

## Installation

To enable Testomat.io Reporter install `@testomatio/reporter` package


Use one of your favorite package managers:

```bash
npm install @testomatio/reporter --save-dev
```

```bash
pnpm install @testomatio/reporter --save-dev
```

```bash
yarn add @testomatio/reporter --dev
```

Reporter works differenttely depending on your current setup: 

* If you use **NodeJS** framework like Jest, Playwright, etc, you get realtime reports, automatic artifacts uploads, logs. [Learn how to set up frameworks reporter](/reference/reporter/frameworks/) 
* If you use **Java, Ruby, PHP, or other languages**, reports are created from JUnit file. [Learn how to set up JUnit reporter](/reference/reporter/junit/)

Reporter is configured through environment variables. [Learn more about configuration](/reference/reporter/pipes/testomatio/).
