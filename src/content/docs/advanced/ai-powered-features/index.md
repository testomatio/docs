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

Also you can copy (1) AI answer or regenarate (2) it if needed.

![Testomat.io - AI-powered](./images/AI_2.png)

## Suggest Test Cases

You can also use AI to improve your test coverage by creating more test cases based on test cases that you already have in your Suite.

1. Open Suite Case with already added Test Cases.
2. Click on 'Extra menu' button.
3. Select **'Suggest Tests'** option.

![Testomat.io - AI-powered](./images/AI_8.gif)

## Suggest Test Case Description

This feature allows you to create test case description based just on its name or improve description that you previously added to your test case.

1. Open Test Case.
2. Click on **'Suggest Description'** button.

![Testomat.io - AI-powered](./images/AI_9.gif)

## Analyze Requirements

When you link a Jira issue as a requirement in Testomat.io, the system will analyze the issue’s description and automatically suggest a structured requirement description. Based on the analysis, you’ll be offered two intelligent options:

- Generate a new test suite with suggested test cases.
- Analyze existing suites and suggest test coverage improvements.

This feature is available both at the **project level** and within individual **test suites**, enabling flexible, requirements-driven testing whether you’re planning at a high level or working in a focused domain.

**Key benefits:**

- Automates the transition from requirements to test cases.
- Ensures traceability and alignment between business goals and test coverage.
- Reduces manual effort and potential gaps in test planning.

![Testomat.io - AI-powered](./images/AI_10.gif)

## Generate Bug Description Based on the Test Case

When you executing tests and creating a new defect, Testomat.io will automatically suggest a concise, context-aware bug title and a description. These suggestions are based on the test case content and its execution results, helping teams report issues faster and more consistently.

**Why is this useful:**

- **Speeding up defect logging:** Testers can instantly use or refine AI-suggested bug details, reducing time spent writing repetitive or obvious issue reports.
- **Maintaining consistent bug reporting standards:** The AI helps standardize descriptions across team members, which improves clarity and communication with developers.
- **Assisting less experienced testers:** Junior team members or non-technical testers can rely on AI-generated suggestions as a starting point, ensuring important details aren’t missed.

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

## Analyze Failed Automated Tests

Use AI to analyze your failed automated tests to understand ans summarize main reasons for your tests to fail.

:::note

Shows only for finished, automated runs with 5+ failures.

:::

1. Go to Runs.
2. Open finished automated run.
3. Click on 'Clusterize Errors' button.

![Testomat.io - AI-powered](./images/AI_5.png)

Example of errors clustarization:

![Testomat.io - AI-powered](./images/AI_6.png)

## Explain Autotest Failures Based on Logs

Analyzes test execution logs to identify and explain reasons behind failures. Reduces debugging time by providing actionable insights directly within the Testomat UI. It also offers you a possible fixes.

The same as in the previous case, it also available only for finished, automated runs with 5+ failures.

1. Go to Runs.
2. Open finished automated run.
3. Click on Failed Test Case.
4. Click on 'Explain Failure' button.

![Testomat.io - AI-powered](./images/AI_7.gif)

:::note

**AI-powered features** are available for Classic and BDD projects.

:::