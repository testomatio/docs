---
title: AI-Powered Features
description: Learn how to use AI-powered generative features to simplify and enhance your test management workflows in Testomat.io. This guide covers how to work with AI-powered generative features on Suites, Tests, Test Code levels, explain autotest failures Based on Logs, check Jira requirement for Suites linked to Jira issues.
type: article
url: https://docs.testomat.io/advanced/ai-features/ai-powered-features
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, AI-powered features, test management, automate test documentation, Groq, summarize suite description, suggest test cases, generate test case description, generate code, generate bug description, analyze failed automated test cases, explain autotest failures, test coverage, test automation, debugging, defect logging, test coverage improvements, requirements-driven testing, traceability, alignment, AI Assistant, test design, software testing
---

Testomat.io introduces **AI-powered generative features** to simplify and enhance your test management workflows. These tools leverage artificial intelligence to assist QA engineers by automating test documentation, generating actionable insights, and providing answers about their projects.

Testomat.io uses **Groq** (not Grok designed by xAI by Elon Musk) as the main AI provider, it was founded in 2016 by a group of former Google engineers.

**Groq** uses opensource models like Llama or Mixtral and doesn't train its own models. However, we urge you to ensure compliance with data privacy regulations when sharing sensitive information. Enable AI features only if you are sure that your data is not sensitive. 

:::note

By default, AI-powered generative features are disabled for your confidence. 
You can enbable AI at any time on Company Settings page by following the instructions in the [Administration section](https://docs.testomat.io/management/company/administration/#ai).

:::

## AI-Powered Chat with Tests

**'Chat with Tests'** feature — an AI-powered assistant that allows you to ask questions about existing tests in your project. The AI analyzes your test repository and responds with insights, summaries, or clarifications based on the actual test content.

This interactive capability makes it easier to explore, understand, and manage large sets of tests without manually browsing through them.

You can use **'Chat with Tests'** feature on Project or Folder level.

### Use 'Chat with Tests' Feature at the Project Level

1. Go to 'Tests' page.
2. Click on **'Chat with tests'** AI icon displayed in the header.

![Testomat.io - AI-powered](./images/AI_Chat_1.png)

3. Select a pre-configured AI promt offered by Testomat.io, update it as needed:

- **Summarize this project, list all features tested, separate by sections, use bullet points** - if you want to have short overview on your project.

- **Suggest new test cases for the first suite in the project** - if you want AI to gerenare new test cases.

- **Create plan with 30 tests for smoke testing max. Pick at least one test from each suite, trying to cover most crucial features** - if you want AI to generate smoke test plan for you.

OR

Create you own AI-promt.

4. Click on **'Ask'** button.

![Testomat.io - AI-powered](./images/AI_Chat_2.gif)

### Use 'Chat with Tests' at the Folder Level

You can also use **'Chat with Tests'** on folder level to analyze and summarize information within the selected folder:

1. Go to 'Tests' page.
2. Select the Folder.
3. Click on **'Chat with Tests'** button.

![Testomat.io - AI-powered](./images/AI_Chat_3.gif)

## Summarize Suite Description Based on Test Cases

You can automatically generate a suite description by analyzing the test cases within it. This saves time by eliminating the need for manual suite documentation and ensures descriptions accurately reflect the test content:

1. Go to 'Tests'.
2. Select Suite with test cases.
3. Click on **'Summarize'** button.

![Testomat.io - AI-powered](./images/AI_1.png)

:::note

**'Summarize'** button appears only when the Suite contains tests (testCount > 0) and 'Suite Summary' modal is open.

:::

AI-generated response will include the suggested **suite summary** and **suggested actions**.


You can copy (1) AI-generated response, regenarate it (2), and as well, you can edit it, improve, change formatting, or add specific sections using **'Follow up'** input field (3) if suggestion is unsatisfactory:

![Testomat.io - AI-powered](./images/AI_2.png)

On **'Suggested Actions'** side, you can directly save the description to your suite (4).

If your suite already has a description, you can click the 'Show Diff' button (5) to compare your current description with the AI’s suggestion.


![Testomat.io - AI-powered](./images/AI_11.png)

## Suggest Test Cases

You can also use AI to enhance your test coverage by creating additional test cases based on test cases that you already have in your test suite, as well they can be created based on Suite description or Requirements.
This feature makes it easier to create comprehensive test suites. 

1. Open Test Suite that already contains Test Cases.
2. Click on 'Extra menu' button.
3. Select **'Suggest Tests'** option.

![Testomat.io - AI-powered](./images/AI_8.gif)

You can review the suggested tests, select those that align with their needs, and directly add them to the suite.
As well, you can generate more test cases, by clicking the **'Suggest More Tests'** button (1). 

Testomat.io recommends adding only the necessary tests cases to your suite!

If your test suite is linked to requirements (e.g., User story in Jira), AI will suggest checking your existing test cases for redundancy by clicking the **'Remove Redundant Tests'** button (2).

![Testomat.io - AI-powered](./images/AI_12.png)

You can remove redundant test cases directly within the AI-assistance window:

![Testomat.io - AI-powered](./images/AI_13.gif)

:::note

You always need explicitly select which test cases to add or remove.

:::

This feature accelerates test creation, enhances coverage by identifying overlooked scenarios, and streamlines workflows by reducing manual effort while maintaining test quality.

## Suggest Test Case Description

This feature allows you to create test case description based just on its name or improve description that you previously added to your test case.

1. Open Test Case.
2. Click on **'Suggest Description'** button.

![Testomat.io - AI-powered](./images/AI_9.gif)

## Generate Test Case Description Based on Test Code

Use AI to analyze your test code and produce detailed test descriptions. Bridges the gap between technical code and human-readable documentation, improving collaboration between technical and non-technical team members:

1. Go to 'Tests'.
2. Select Test Case with code.
3. Click on **'Write Description from Code'** button.

![Testomat.io - AI-powered](./images/AI_3.png)

Test Summary is created:

![Testomat.io - AI-powered](./images/AI_4.png)

:::note

**'Write Description from Code'** button shows only when the test has code.

:::

## Generate Code Based on Test Casse Description

Provide a test description, and the AI generates the corresponding test automation code. Please note that generated code may be not completely comprehensive.

Code will be created based on the project framework settings and other tests in this suite.
Use it as boilerplate code only.

To check your Project framework settings go to Project Settings page:

![Testomat.io - AI-powered](./images/Project_settings.png)

## Generate Bug Description Based on the Test Case

When you executing tests and creating a new defect, Testomat.io will automatically suggest a concise, context-aware bug title and a description. These suggestions are based on the test case content and its execution results, helping teams report issues faster and more consistently.

**Why is this useful:**

- **Speeding up defect logging:** Testers can instantly use or refine AI-suggested bug details, reducing time spent writing repetitive or obvious issue reports.
- **Maintaining consistent bug reporting standards:** The AI helps standardize descriptions across team members, which improves clarity and communication with developers.
- **Assisting less experienced testers:** Junior team members or non-technical testers can rely on AI-generated suggestions as a starting point, ensuring important details aren’t missed.

## Analyze Failed Automated Test Cases

Use AI to analyze your failed automated tests to understand ans summarize main reasons for your tests to fail.

:::note

Shows only for finished, automated runs with 5+ failures.

:::

1. Go to 'Runs' page.
2. Open finished automated run.
3. Click on **'Clusterize Errors'** button.

![Testomat.io - AI-powered](./images/AI_5.png)

Example of errors clustarization:

![Testomat.io - AI-powered](./images/AI_6.png)

## Explain Autotest Failures Based on Logs

Using stack trace, code of test, test execution logs and screenshot of failure, AI will identify and explain reasons behind failures. It helps to reduce debugging time by providing actionable insights directly within the Testomat UI. It also offers you a possible fixes.

The same as in the previous case, it also available only for finished, automated runs with 5+ failures.

1. Go to 'Runs' page.
2. Open finished automated run.
3. Click on Failed Test Case.
4. Click on **'Explain Failure'** button.

![Testomat.io - AI-powered](./images/AI_7.gif)

## Test Run Summary 

Testomat.io allows you to use AI-powered feature to analyze and summarize your finished test runs. It highlights risk areas and provides recommendations for improvements based on test results.

1. Go to 'Runs' page.
2. Select finished test run for statistics snalysis.
3. Click on **'Run Summary'** button.

![Testomat.io - AI-powered](./images/AI_run_summary_1.png)

![Testomat.io - AI-powered](./images/AI_run_summary_2.png)

:::note

**AI-powered features** are available for Classic and BDD projects.

:::

## Project Runs Status Report

**AI-Powered Project Runs Status Report** feature automatically generates a **high-level status report** based on the latest project's test runs information — powered by AI.

The **Runs Status Report** gives you a quick overview of test stability, critical issues, and performance trends across recent runs. It helps QA teams and stakeholders understand what’s working well and where attention is needed — without digging through individual test logs.

**What’s included:**

- **Summary Overview** – Total test runs, overall pass rate, trends, and key action items.
- **Area-Specific Stability** – Performance insights grouped by feature areas (e.g. subscriptions, user roles, etc.).
- **Flaky & Failed Tests** – Highlights of recurring issues or flaky behavior with potential risk.
- **Execution Time Trends** – How test durations are behaving over time.
- **Top Errors** – Most frequent failure messages to help speed up debugging.
- **Systematic Failures** – Pinpointed test cases that failed consistently and may block critical flows.
- **Note** - Hightlights the test runs that were analyzed in the Run Status Report by AI.

**To access this feature:**

1. Go to 'Runs' page.
2. Click on **'Run Status Report'** button. 

![Testomat.io - AI-powered Project Runs Status Report](./images/AI_14.gif)

This report is available automatically based on recent test run history, giving your team instant visibility into the health of your project.