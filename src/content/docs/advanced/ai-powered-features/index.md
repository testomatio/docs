---
title: AI-Powered Features
description: Learn how to use AI-powered generative features to simplify and enhance your test management workflows in Testomat.io. This guide covers how to work with AI-powered generative features on Suites, Tests, Test Code levels, explain autotest failures Based on Logs, check Jira requirement for Suites linked to Jira issues.
type: article
url: https://docs.testomat.io/advanced/ai-powered-features
---

Testomat.io introduces **AI-powered generative features** to simplify and enhance your test management workflows. These tools leverage artificial intelligence to assist QA engineers by automating test documentation, generating actionable insights, and providing answers about their projects.

Testomat.io uses **Groq** (not Grok designed by xAI by Elon Musk) as the main AI provider, it was founded in 2016 by a group of former Google engineers.

**Groq** uses opensource models like Llama or Mixtral and doesn't train its own models. However, we urge you to ensure compliance with data privacy regulations when sharing sensitive information. Enable AI features only if you are sure that your data is not sensitive. 

:::note

By default, AI-powered generative features are disabled for Company in Company Settings. 
You can enbable AI at any time by following the instructions in the [Administration section](https://docs.testomat.io/management/company/administration/#ai).

:::


## Summarize Suite Description Based on Tests

You can automatically generate a suite description by analyzing the test cases within it. This saves time by eliminating the need for manual suite documentation and ensures descriptions accurately reflect test content:

1. Go to 'Tests'.
2. Select Suite with test cases.
3. Click on **'Summarize'** button.

![Testomat.io - AI-powered](./images/AI_1.png)

:::note

**'Summarize'** button shows only when the Suite has tests (testCount > 0) and 'Suite Summary' modal is opened.

:::

Also you can copy (1) AI answer or regenared (2) it if needed.

![Testomat.io - AI-powered](./images/AI_2.png)

## Generate Test Description Based on Test Code

Use AI to analyze your test code and produce detailed test descriptions. Bridges the gap between technical code and human-readable documentation, improving collaboration between technical and non-technical team members:

1. Go to 'Tests'.
2. Select Test Case with code.
3. Click on **'Write Description from Code'** button.

![Testomat.io - AI-powered](./images/AI_3.png)

Test Summary is created:

![Testomat.io - AI-powered](./images/AI_4.png)

:::note

**'Write Description from Code'** button shows only when the test has code (model.code exists) and 'Test Summar' modal is opened.

:::

## Generate Code Based on Test Description

Provide a test description, and the AI generates the corresponding test automation code. Please note that generated code may be not completely comprehensive.

## Ask Questions About Your Projects Based on Tests

Interact with your test data using natural language queries to extract insights, identify gaps, or troubleshoot issues. Simplifies test analysis, making it easier to find information without navigating through large datasets manually.

## Explain Autotest Failures Based on Logs

Analyzes test execution logs to identify and explain reasons behind failures. Reduces debugging time by providing actionable insights directly within the Testomat UI.

## Check Jira Requirement for Suites Linked to Jira Issues

Automatically verifies if test suites meet the requirements of their linked Jira issues. Provides visibility between testing efforts and business requirements, improving traceability and accountability.

## Check Jira Requirements for Automated Test Cases
Ensures that automated test case is aligned with the requirements in Jira, closing the loop between automation and requirement coverage.