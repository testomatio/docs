---
title: Testomat.io Reporter
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

* If you use **NodeJS** framework like Jest, Playwright, etc, you get realtime reports, automatic artifacts uploads, logs. [Learn how to set up frameworks reporter](./reporter/frameworks.md) 
* If you use **Java, Ruby, PHP, or other languages**, reports are created from JUnit file. [Learn how to set up JUnit reporter](./reporter/junit.md)

Reporter is configured through environment variables. [Learn more about configuration](./reporter/pipes/testomatio.md).
