---
title: Classical Project
description: Learn how to create effective test designs with Testomat.io. This guide covers building test scenarios, using various test design techniques, and integrating them into your project workflow for improved test case management and automated test runs.
type: article
url: https://docs.testomat.io/project/tests/classical-test-case-editor
head:
  - tag: meta
    attrs:
      name: keywords
      content: test design, test cases, test management, test automation, testing techniques, Testomat.io, BDD, Gherkin, Cucumber, test scenarios, project workflow, software testing
---

A Classical project stores each test as a Markdown document. It is the default choice for manual testing. 

Choose a Classical project if you:

- are moving from spreadsheets or another test management system;
- work mostly with manual tests;
- use an automation framework that does not use Cucumber;
- want to write tests in your own words.

:::note

Choose the project type when you create the project. You cannot change it later. Classical projects do not support Gherkin scenarios. See [Classical vs BDD](https://docs.testomat.io/project/tests/classical-vs-bdd).

:::

## Folders, Suites, and Tests

A Classical project uses three types of items: folders, suites and tests. 

A folder can contain other folders and suites. A suite contains tests. Tests are the final level of the project structure.

Use folders to organize your suites. Use suites to group related tests.

![Folder holds suites, a suite holds tests](./images/classical-projects/project-structure.png)

You can also change an empty suite into a folder, or change a folder back into a suite.

This structure keeps your tests organized. You can also connect a manual test to automation later without moving it to another part of the project.

## Suite Descriptions

A suite can have its own description. Use it for information that applies to all tests in the suite, such as:

- system settings,
- dependencies,
- test data,
- setup steps.

Add this information once at the suite level instead of repeating it in every test. See [Suites and Folders](https://docs.testomat.io/project/tests/suites-and-folders) for more information.

## Test Descriptions

Classical test descriptions use Markdown. With Markdown, you can add:

- headings,
- lists,
- bold text,
- images,
- attachments.

If you use the same structure for several tests, save it as a template and apply it with **Use template** in the editor. Templates are managed in project settings. See [Templates](https://docs.testomat.io/management/project/templates).

:::note

AI-generated tests use the same Markdown format as manually created tests.

:::

![Test case editor with test description formatted as Markdown](./images/classical-projects/1-test-overview.png)

## Tags

Tags group tests across suites. Add a tag right in the test title with the `@` symbol:

```text
Checkout works with a saved card @smoke @payments
```

Testomat.io picks the tags out of the title and shows them next to the test. See [Tags](https://docs.testomat.io/advanced/tags-labels/tags).

## Test Priority

Priority shows which tests matter most. The priority icon appears next to the test title and in the test tree, and you can filter tests by it.

| Level | Meaning |
| --- | --- |
| **Low** | Low-importance test |
| **Normal** | Default priority |
| **High** | High-importance test |

Set priority when you create a test, change it while editing, or update many tests at once. See [Test Priority](https://docs.testomat.io/project/tests/test-priority).

## Steps and Expected Results

The Steps Database is a shared list of reusable steps for the whole project. It helps you:

- find existing steps with autocomplete while writing a test,
- rename a step in one place and update it in every test that uses it.

Testomat.io saves a step to the Steps Database only when it is written as a list item under a `## Steps` heading.

![A step written once goes into the Steps Database and is reused by every test](./images/classical-projects/steps-database.png)

:::note

If you want to reuse a step in other tests, create it as a list item from the start.

:::

For example:

```markdown
## Steps
* Go to the payment page
* Verify that Payment page loads
* Enter credit card details and submit
* Verify that Payment is processed and confirmation page loads
```

| How you write it | What Testomat.io does |
| --- | --- |
| Plain text | Shows it in the test, but does not save it to the Steps Database |
| List item | Saves it and makes it available in autocomplete and the Steps editor |
| Nested list, table, or subheading | Saves it and makes it available in autocomplete and the Steps editor |

### Expected Results as Nested List

This format is useful for breaking down each step into multiple sub-steps, each with its own expected result.

```markdown
## Steps

1. Step 1
   - Expected result: Step 1.1
   - Expected result: Step 1.2
2. Step 2
   - Expected result: Step 2.1
   - Expected result: Step 2.2
3. Step 3
   - Expected result: Step 3.1
   - Expected result: Step 3.2
```

 Write expected results as list items if you want to save and reuse them.

![Steps with their expected results in test case rich editor](./images/classical-projects/2-steps-with-expected-results.png)

### Separated Expected Results

The verification actions can be listed under a separate section for expected results. This can be used to provide a summary of the expected behavior and can be helpful in identifying any gaps in the test coverage.

```
## Steps
* Step 1
* Step 2
* Step 3

## Expected results:
* Verify that ...
* Verify that ...
* Verify that ...
```

When a test contains a `## Steps` heading, the preview shows steps in rich editor. Use it to edit steps and expected results without opening the full test editor. See [Steps](https://docs.testomat.io/project/steps-snippets/steps) for more information.

## Dynamic Parameters

Dynamic parameters turn one test into a data-driven test. Write a placeholder in the steps, fill in a table of values, and Testomat.io runs the test once per row. Each row counts as a separate test in the run.

Use `${ParameterName}` or `{{ParameterName}}` in the description or the steps:

```text
Open home page {{URL}}
Enter an invalid mobile number ${Mobile No}
```

See [Dynamic Parameters](https://docs.testomat.io/project/tests/dynamic-parameters).

## Automation Mapping
In a Classical project, Testomat.io connects automated tests to your test cases using the test title and file path.
Your manual test steps do not need to match functions in your automation code. You can describe the steps in plain language. This approach works with automation frameworks:

- Playwright,
- Cypress,
- JUnit,
- pytest,
- RSpec.

## Test Editor

The Classical editor opens when you create a test or edit an existing one.

![The Edit Test window with the title, editor tabs, formatting toolbar, and Save button](./images/classical-projects/3-testomatio-test-case-editor.png)

It contains the test title, description, and tools for editing the test.

| Control | What it does |
| --- | --- |
| Test title field | Enter the test title and add tags. |
| Set priority | Set how important the test is, from Low to High. |
| Assign to | Assign the test to a user. The user must already be a member of the project. |
| Formatting toolbar | Format the test description. |
| Editing area | Add requirements, preconditions, steps, and expected results. |
| Preview | See how the finished test looks. |
| Edit steps | Edit steps and expected results in a Rich editor. |
| Attachments | Add files to the test. |
| Draw | Add a diagram or drawing. |
| Markdown | Write the test in Markdown. |
| Editor options | Turn autocomplete and spell check on or off. See [Editor Options](#editor-options). |
| Full screen | Open the editor in full-screen mode. |
| Set labels | Add labels or custom fields. |
| Use template | Apply a saved test template. |
| Change state | Change the test state, such as manual or automated. |
| Save | Save your changes. |
| Dictate | Speak the text instead of typing it. Needs AI features turned on. |
| Go back | Return to the previous screen. |
| Close | Close the editor. |
| Link to Issue | Link the test to an issue in Jira or another tracker. |
| Set milestone | Add the test to a milestone. |

## Suite Editor

The suite editor works in much the same way, but it has fewer controls because suites do not have steps or a state.

| Control | What it does |
| --- | --- |
| Suite title field | Enter the suite title and add tags. |
| Formatting toolbar | Format the suite description. |
| Assign to | Assign the suite to a user. The user must already be a member of the project. |
| Editing area | Write the suite description. |
| Preview | See how the suite looks. |
| Attachments | Add files to the suite. |
| Extra menu | Open additional suite options. |
| Editor options | Turn autocomplete and spell check on or off. See [Editor Options](#editor-options). |
| Full screen | Open the editor in full-screen mode. |
| Set labels | Add labels or custom fields. |
| Use template | Apply a saved suite template. |
| Save | Save your changes. |
| Dictate | Speak the text instead of typing it. Needs AI features turned on. |
| Go back | Return to the previous screen. |
| Close | Close the editor. |

## Editor Options

The gear icon next to the template picker opens the editor options. They are the same in the test and suite editors, and each one is a switch you can turn on or off at any time.

![The editor options menu with Autocomplete Steps, Autocomplete Snippets, and Spell check turned on](./images/classical-projects/5-editor-options.png)

| Option | What it does |
| --- | --- |
| **Autocomplete Steps** | Suggests steps from your project as you type. |
| **Autocomplete Snippets** | Suggests snippets as you type. |
| **Spell check** | Underlines possible spelling mistakes on the **Markdown** tab. On by default. |

### Fix a Spelling Mistake

Spell check works on the **Markdown** tab of the test and suite editors. It reads your text a moment after you stop typing, and again when you leave the editor. Markdown syntax is skipped, so headings, formatting, and code-like text are never underlined.

1. Click the underlined word.
2. In the **Quick Fix** list, pick a suggested correction.

![The Quick Fix list on an underlined word in the test editor](./images/classical-projects/6-spell-check-quick-fix.png)

Is the word a product name or a term your team uses? Click **Add "…" to dictionary** instead. It won't be underlined again.

The suite editor works the same way:

![The Quick Fix list on an underlined word in the suite editor](./images/classical-projects/7-suite-spell-check.png)

Prefer to write without it? Turn off **Spell check** in the editor options.

## Block and Markdown Modes

You can edit the same test description in two modes.

The block editor splits the content into separate blocks. Each step can have its own expected result and image. This makes longer tests easier to read.
The Markdown editor shows the same content as Markdown view.

Both modes edit the same description, so you can switch between them any time.

## Link Tests and Suites

You can link a test, suite, or folder from a description by adding its ID.

After you save the description, the ID becomes a clickable link. Click it to open a preview of the linked item in a side panel.

![Test case editor overview](./images/classical-projects/4-linked-test-in-test-description.png)

If the ID stays as plain text, check that you added the item ID rather than its full URL.

:::note

In a Classical project, use the ID without `#`.

:::

## Next Steps

- [BDD Test Case Editor](https://docs.testomat.io/project/tests/bdd-test-case-editor)
- [Classical vs BDD](https://docs.testomat.io/project/tests/classical-vs-bdd)
