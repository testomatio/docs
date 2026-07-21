---
title: Classical vs BDD
description: Learn the fundamental differences between Classical and BDD projects in Testomat.io and why they must remain separate. This guide covers Markdown vs. Gherkin syntax, storage architecture, and automation mapping. It also provides insights into refactoring manual tests into Gherkin scenarios and explains why the strictness of BDD is essential for scalable, machine-readable test suites.
type: article
url: https://docs.testomat.io/project/classical_vs_bdd
head:
  - tag: meta
    attrs:
      name: keywords
      content: test design, test cases, test management, test automation, testing techniques, Testomat.io, BDD, Gherkin, Cucumber, test scenarios, project workflow, software testing, Classical Project, BDD Project, Markdown, CodeceptJS, manual test, automation test, refactoring tests
---

In the world of quality assurance, choosing the right framework is like choosing the right foundation for a building. Maintaining clear boundaries between project types is essential for ensuring test suite integrity and automation stability.

While both, **Classical** and **BDD** projects, allow you to manage manual and automated tests, their underlying logic, syntax, and storage methods are fundamentally different. Below is a guide to help you understand these differences and why keeping them in separate projects is a technical necessity.

## Classical vs BDD Projects

In Testomat.io, projects are categorized into two distinct types: **Classical** and **BDD**. Choosing the right project type at the beginning of your testing journey is crucial, as the underlying architecture and syntax requirements differ significantly between the two. This choice determines your editor, your automation workflow, and how your team collaborates.

### Classical Projects

Classical projects are designed for maximum flexibility, primarily using **Markdown** formatting for test cases. This format is ideal for manual testing and traditional automation workflows where you describe how a test should be performed through detailed steps and expected results.

- **Formatting:** Uses standard Markdown.
- **Structure:** Test-centric. Each test is an independent entity with its own description.
- **Automation:** Flexible mapping to various automation frameworks.
- **Best For:** Teams moving from spreadsheets or traditional TMS, and those using non-BDD automation frameworks (like Playwright, Cypress, or TestCafe).

### BDD (Behavior-Driven Development) Projects

BDD projects are built for collaboration and strict structure. They use **Gherkin syntax** (`Given`, `When`, `Then`). This project type is built with an automation-first mindset, ensuring that the business requirements and the test code stay in perfect synchronization. The goal here is to describe the behavior of the system in a way that business stakeholders, developers, and QAs all understand.

- **Formatting:** Strictly follows Gherkin syntax rules.
- **Structure:** Feature-file centric. Tests (Scenarios) are organized within Feature Files. In Testomat.io, a suite in a BDD project represents a `.feature` file.
- **Automation:** Each step in the description must correspond to a specific function in the underlying test code.
- **Best For:** Teams practicing 'Three Amigos' (business, developers, QAs) collaboration and using Cucumber-based frameworks. Those who want their documentation to serve as the direct source of truth for automation. 

### Key Differences at a Glance

| Feature | Classical Project | BDD Project |
| --- | --- | --- |
| **Editor** | Visual/Markdown Editor | Gherkin Editor (Scenario-based) |
| **Syntax** | Flexible (Bullet points, text) | Strict (Given, When, Then, And) |
| **Data Storage** | Inside the individual test case | Inside the Feature file (Suite level) |
| **Automation** | Syncs code to test descriptions | Syncs Feature files to step definitions |
| **Stakeholders** | Primarily QA and Developers | BA, Product Owners, Devs, and QA |
| **Main Focus** | Test execution steps | System behavior |

## Why You Cannot Combine Both in One Project

A common question is: **'Can I just add a few Gherkin tests to my Classical project?'** The short answer is **NO**. Testomat.io enforces a strict separation to protect your data integrity and workflow efficiency. Here is why:

1. **Syntax Strictness vs. Flexibility**

Gherkin is a much stricter format than Markdown. In a BDD project, the editor validates your syntax in real-time. If you try to move a flexible Markdown test into a Gherkin suite, the **syntax will break**. BDD requires specific keywords to function; without them, the 'Feature file' becomes unreadable to both the system and the automation parser.

2. **Different Storage Architecture**

In a Classical project, metadata (tags, descriptions) is stored at the **individual test level**. In BDD, the 'truth' lives in the **Feature File**. A suite in BDD is not just a folder; it is a physical `.feature file`. Mixing these would create a 'logical mess' where the system wouldn't know whether to treat a file as a collection of independent tests or a single synchronized document.

3. **Automation Mapping**

BDD automation relies on a 1:1 mapping between a Gherkin step and a function in your code.
**In BDD Projects:** Every step must have a corresponding function (Step Definition) in your code.
**In Classical Projects:** You have the freedom to write descriptive steps that don't necessarily map to code, providing more flexibility for manual testers.

Attempting to support both in one project would lead to inconsistency. You would end up having some tests that require strict code-mapping and others that don't, leading to broken automation reports and confusing 'out-of-sync' notifications.

## Moving Between Project Types

Because of the strictness of Gherkin, there has traditionally been no "one-click" way to turn a flexible Markdown test into a rigid BDD scenario. However, with the integration of **AI-feature** within Testomat.io, you now have three distinct paths depending on your timeline and automation goals:

**Option 1: AI-Powered Migration (Usign the 'Transform Project to BDD' AI-Agent)**

If you want to move your entire workspace to a BDD framework without the manual overhead, you can use the **'Transform Project to BDD'** feature. This AI-powered agent automatically analyzes your existing Classical tests and generates a new, structured BDD environment.

- **How it works:** The AI rewrites your test steps into a valid `Given/When/Then` Gherkin syntax and generates a **completely new BDD project** containing the converted suite.

- **Why use it:** It eliminates manual rewriting, standardizes test styles across the team, and makes your tests "automation-ready" in seconds.

- **Key Benefit:** It bridges the gap between descriptive manual steps and strict BDD requirements automatically.

:::note

Read more about Testomat.io **'Transform Project to BDD'** and other AI-agents on a separate [AI-Agents](https://docs.testomat.io/advanced/ai-powered-features/ai-agents/) page.

:::

**Option 2: Manual Refactoring**

For teams that want granular control or have highly complex logic that requires human nuance, manual refactoring remains the standard.

- **Classical → BDD:** You must create a new BDD project and manually rewrite tests to ensure each step follows Gherkin rules and is built for reusability.

- **BDD → Classical:** Currently, this direction is not supported as a direct migration due to the risk of losing the structured Feature file history and metadata.

**Option 3: The Hybrid Alternative (CodeceptJS)**

If you aren't ready to commit to the strict overhead of Gherkin but want BDD-style readability, we recommend **CodeceptJS**. Instead of a full project migration, you stay in your Classical project and write code that looks like BDD. This allows you to write 'Human-Readable' code (e.g., `I.click('Login')`) that fits perfectly into Classical projects while remaining easy for non-technical stakeholders to follow.

This gives you the descriptiveness of BDD without the strict overhead and formatting limitations of Gherkin.

:::note

Regardless of the method chosen, remember that BDD is a **'Behavioral Contract'**. Whether you use the AI or rewrite manually, ensure your team is prepared to map these new steps to corresponding functions in your automation code.

:::

### Example of Refactoring from a Classical format to Gherkin

Refactoring from a Classical format to Gherkin is less about changing the words and more about changing the philosophy. In a Classical project, you’re writing a 'How-to' guide for a human; in BDD, you’re writing a 'Behavioral Contract' that a machine can also read.

Here is a common scenario—User Authentication—refactored to show the shift from flexibility to strictness.

**Classical Project Manual Test:**

**Format:** Markdown
In this format, you can be as descriptive or as brief as you like. You can combine multiple actions into one step.

```
Test Case: Successful Login

1. Open the login page at https://app.testomat.io/login.
2. Enter a registered email and the correct password into the fields.
3. Hit the blue 'Sign In' button at the bottom of the form.

Expected Result: The user is redirected to the Project Dashboard and sees a "Welcome" toast message.
```

**The Refactored Gherkin Scenario (BDD Project):**

**Format:** Gherkin Syntax
Notice the use of specific keywords. Each line below would ideally map to a reusable 'Step Definition' in the automation code.

```
Feature: User Authentication
Scenario: Successful login with valid credentials

Given the user is on the Testomat.io login page
When the user enters valid credentials
And the user clicks the 'Sign In' button
Then the user should be redirected to the Project Dashboard
And a "Welcome" message should be displayed
```
**Why the BDD Version is 'Stricter'**
Switching to BDD isn't just a formatting change; it’s a shift toward a more disciplined testing architecture. Here is why the Gherkin format is considered 'stricter' than Classical Markdown:

1. **Atomicity:**

In a **Classical** project, a single step like `Login with valid credentials` is a black box — it’s easy to write but hard to automate efficiently.
**BDD** forces **Atomicity**. By breaking actions into individual lines (`Given I am on the login page`, `When I enter my email`), you create Reusable Building Blocks. If you have 50 tests that require a login, you only write the code for that 'step' once. In BDD, if a step isn't atomic, it isn't truly reusable.

2. **Resilience to UI Fluctuation (Abstraction):**

**Classical** tests often get bogged down in 'Implementation Noise' — mentioning a `red cancel button` or `the top-right dropdown`. If the UI changes, your documentation is instantly broken, 'outdated'.
**BDD** encourages **Abstract Logic**. You focus on the intent (e.g.,` When I cancel the transaction`) rather than the mechanics (`Click the red button`). This makes your test suite significantly more resilient to minor frontend updates.

3. **State Management (Explicit Preconditions):**

One of the biggest causes of flaky tests is a missing starting point. **Classical** tests often assume the user is already 'there'.
The `Given` keyword in **BDD** is a mandatory contract. It forces the author to define the exact state of the system before the action happens. This 'State Management' eliminates the "it works on my machine" excuse by ensuring every runner starts from the same functional baseline.

4. **Syntax Enforcement (The Parser Factor):**

In a **Classical** project, the editor is passive — it’s essentially a digital notepad. You can write whatever you want, and the system won't complain.
In **BDD**, the Gherkin Parser acts as a compiler. If you misspell a keyword or fail to follow the `Scenario:` structure, the test is syntactically invalid. This strictness ensures that your test suite is always machine-readable and ready for automation, preventing "junk" documentation from piling up.

While the **Classical** project offers the 'freedom to write', the **BDD** project offers the 'structure to scale'. The strictness of BDD is an upfront investment that pays off in lower maintenance and more reliable automation.