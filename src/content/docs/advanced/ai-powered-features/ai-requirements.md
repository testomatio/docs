---
title: AI-Requirements
description: Discover Testomat.io's AI-powered features that analyze your requirements from Jira to enhance test coverage. Learn how this intelligent analysis helps improve requirement management at various levels within your projects and test suites levels.
type: article
url: https://docs.testomat.io/advanced/ai-features/ai-requirements
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, AI-Powered Requirements, AI-Requirements, test coverage, product requirements, Jira integration, structured requirement description, AI-suggested test cases, analyze existing suites, test coverage improvements, requirements-driven testing, traceability, alignment, Jira as Requirement Source, Confluence as Requirement Source, Confluence, AI-Analyze Requirements for Edge Cases, AI Assistant, test design, test management, software testing
---

## AI-Powered Requirements

Testomat.io introduces another AI-powered feature - **AI-Requirements** that helps to streamline test coverage alignment with product requirements. 

A dedicated **'Requirements'** page brings all your requirements into a single, convenient workspace, allowing you to view, organize, and update requirements in one place — without jumping across different parts of the project.

When you add a **Requirement source** (Jira issue, Confluence page, PDF file, etc.) in Testomat.io, the system will analyze it's description and automatically suggest a structured requirement summary. Also, by clicking on the requirement, you can check all suites linked to it, requirement source and added attachments.

![Testomat.io - AI-powered](./images/Requirement_page_details_1.gif)

**Based on the requirement analysis, you’ll be offered two intelligent options:**

- Generate a new test suite with suggested test cases.
- Analyze existing suites and suggest test coverage improvements.

This feature is available both at the **project level** and within individual **test suites**, enabling flexible, requirements-driven testing whether you’re planning at a high level or working in a focused domain.

**Key benefits:**

- Automates the transition from requirements to test cases.
- Ensures traceability and alignment between business goals and test coverage.
- Reduces manual effort and potential gaps in test planning.

:::note

By default, AI-powered generative features are disabled for your confidence. 
You can enbable AI at any time on Company Settings page by following the instructions in the [Administration section](https://docs.testomat.io/management/company/administration/#ai).

:::

# Requirements Page Overview

**On 'Requirements' page you can:**

1. Link new requirement (check ['Add Requirements to a Project'](https://docs.testomat.io/advanced/ai-powered-features/ai-requirements/#add-requirements-to-a-project) section for more details).
2. Filter requirements by sourse type, level and status.
3. Search for the information inside the requirements.
4. Change the **Requirements Display** view (check section below for more information).
5. Use AI feature **'Chat with Requirements'**.
6. View **'Requirement details'** page.
7. Edit Requirement.
8. Delete Requirement.

![Testomat.io - Requirements page](./images/Req_page_1.png)

### Requirements Display View

**Select the requirements display view based on your needs:**

- **'Display as List':** allows you to work with requirements on the **Requirements level**. All the requirements are displayed in one list. In this view you can view requirement details, link suites to the selected requirement, add attachments or requirement notes.

- **'Display by Suites':** allows you to work with the requirements on the **Suites level**. All the suites are displayed in one list with the requirements linked to each suite. In this view you can see what suites don't have any requirements linked, what requirements are added to the specific suite and check if nothing was missed, you can attach/detach the requirement to the selected suite and as well change the requirement details.

## Add Requirements to an Empty Project

You can start a new project by first adding your requirements.

Once a project is created (BDD or Classical), set up the integration for your **Requirement Source** (see detailed instructions for [JIRA](https://docs.testomat.io/integrations/issues-management/jira/#connecting-to-jira-project) and [Confluence](https://docs.testomat.io/integrations/issues-management/confluence)). Then, proceed with adding requirements:

1. Open **'Requirements'** page.
2. Click **'+New Requirements'** or **'+Add Requirement'** button.

![Testomat.io - Empty Project](./images/Req_empty_project_1.png)

3. Select your requirement source (Jira in our case).
4. Enter **'Jira Issue ID'**.
5. Click **'Save'** button.

![Testomat.io - Empty Project](./images/Req_empty_project_2.png)

After the requirement is linked to Testomat.io you can use AI Assistant to analyze requirements for edge cases and potential solutions. You can also create suites and test cases based on these requirements.

:::note

You can add a new requirement to your ongoing project any time following the same steps.

:::

## Link Requirement to an Existing Suite Case

Testomat.io allows you to link a requirement that was already added to the Project to an existing suite case directly from its page. To do that, follow these steps:

1. Open your Suite Case.
2. Click **'Extra menu'** button.
3. Select **'Requirements'** option from the dropdown list.
4. Open **'All Requirements'** tab.
5. Select the requirement that you want to link to the Suite from the list by clicking on **'Attach'** button.

![Testomat.io - Link Requirements](./images/Requirements_1.gif)

To unlink the requirement from the suite, follow Steps 1-3 and on **'Attached to suite'** or **'All Requirements'** tab click **'Detach'** button for requirement that you want to unlink.

![Testomat.io - Unlink Requirements](./images/Unlink_Requirement_1.png)

## Jira as a Requirement Source

Testomat.io not only allows you to start a new project with requirements but also to link requirements to an ongoing project at any time.

**To add Jira as a Requirement Source:**

1. Open your Project in Testomat.io. 
2. Go to **'Requirements'** page.
3. Click **'+Add Requirement'** button.

OR

Access **'Requirements'** page via **'Extra menu'** button on **'Tests'** page.

4. Select **'Jira'** as your Requirement Source.
5. Enter **'Jira Issue ID'**.
6. Click **'Save'** button.

![Testomat.io - AI-powered](./images/AI_Jira_Req_1.gif)

Same as for a new project, after the requirement is linked to your project, you can start using AI-features for analyzing it, and generating suites, test cases, and edge cases to cover your requirements.

:::note

To use AI-Requirements feature, first connect Testomat.io to your Jira project. See detailed instructions in the ['Connecting to JIRA project'](https://docs.testomat.io/integrations/issues-management/jira/#connecting-to-jira-project) section.

:::

## Confluence as a Requirement Source

Testomat.io allows you to use your Confluence space as a source of requirements. First, connect your Confluence space to your Testomat.io project, similar to setting up Jira. For detailed setup instructions, refer to the ['Confluence'](https://docs.testomat.io/integrations/issues-management/confluence) section.

Once connected, the system can analyze your Confluence pages to extract requirement descriptions, assess traceability, identify edge cases, and generate relevant test suites and test cases.

This integration bridges the gap between documentation and test planning, enabling seamless test coverage based on the requirements your teams already maintain.

**To add Confluence as a Requirement into your project:**

1. Go to **'Requirements'** page.
2. Click **'+Add Requirement'** button.

OR

Access **'Requirements'** page via **'Extra menu'** button on **'Tests'** page.

3. Select **'Confluence'** as your Requirement Source.
4. Enter **'Confluence page url'**.
5. Click **'Save'** button.

![Testomat.io - Confluence](./images/Confluence_Req_1.gif)

## Files & Text as a Requirement Source

Testomat.io allows you to use not only Jira or Confluence as a Requirement Source, but also add text files, docs, spreadsheets or even screenshots and images.

**Supported sources include:**

- **Files** — PDF, DOCX, XLSX, CSV, TXT, Markdown, and others.
- **Plain text** — paste any text and instantly convert it into structured requirements.

This makes it much easier to import requirements from PRDs, customer documentation, spreadsheets, briefs, or any internal artifacts your team already uses.

**To add requirement:**

1. Go to **'Requirements'** page.
2. Click **'+Add Requirement'** button.

![Testomat.io - Files & Text as a Requirement Source](./images/Add_file_req_1.png)

- **To add a file as a requirement source:**
3. Select **'File'**. 
4. Enter **Title**.
5. Upload any file in allowed format via **'Browse a file'**.
6. Click **'Save'** button.

![Testomat.io - Files & Text as a Requirement Source](./images/Add_file_req_2.png)

- **To add a plain text as a requirement source:**
3. Select **'Text'**.
4. Enter **Title**.
5. Add **Description**.
6. Click **'Save'** button.

:::note

**Minimum 500 characters** is required for **Text requirement**.
You can add images and other files to this requirement after saving.

:::

![Testomat.io - Files & Text as a Requirement Source](./images/Add_file_req_3.png)

## Global Requirements Setup

If you set up **Requirements as Global** on a **Project level**, it will allow the system to automatically attach selected requirements to **every newly created test** inside the project.
This is especially useful for teams working with mandatory compliance rules, overarching documentation, or project-wide standards that must be reflected in all tests.

**To set up Requirements as Global:**

1. Go to **'Requirements'** page.
2. Select a Requirement you want to set up as global.
3. Click **'Extra menu'** button.
4. Select **'Make Global'** option.

![Testomat.io - Requirements as Global](./images/Global_req_1.png)

This ensures consistency and saves time by eliminating repeated manual assignment.

:::note

To set up the **Requirement as Global** it should not be linked to any Suites.

![Testomat.io - Requirements as Global](./images/Global_req_2.png)

:::

## AI-Powered Image Understanding for Requirements

With this feature you can attach images directly to your requirements, and AI will automatically analyze them and include their content in the requirement summary. This enriched summary is then used during test generation, ensuring that visual details are not missed.

:::note

All the attachments added to the requirements are also automatically added to the suites and test cases created from these requirements and displayed in the **'Attachments'** tab.

:::

![Testomat.io - Image Source](./images/Image_req_1.gif)

The same behavior now applies to **Jira- and Confluence-based requirements**:
if your Jira ticket or Confluence page includes attachments (images, diagrams, files), Testomat.io will import them, analyze them, and enrich the requirements summary — giving you more accurate AI-generated tests.

The requirements created based on the attached image will be displayed on **'Summary'** tab under main requirements details in the **'Attached Image'** section.

![Testomat.io - Image Source](./images/Image_req_2.png)

## Edit Linked Requirements

The original requirement cannot be edited inside Testomat.io, as it comes from an external source. But you can clarify any missing details from the original requirement or add some notes:

1. Go to **'Requirements'** page.
2. Select the Requirement.
3. Click **'Extra menu'** button.
4. Select **'Edit Requirement Notes'** option.

![Testomat.io - Edit Linked Requirements](./images/Edit_req_1.png)

5. Add additional information/edge cases/notes.
6. Click **'Save'** button.

![Testomat.io - Edit Linked Requirements](./images/Edit_req_2.png)

After notes are added and saved, they will be displayed on **'Summary'** tab under main requirements details in the **'Requirement Notes'** section.

![Testomat.io - Edit Linked Requirements](./images/Edit_req_3.png)

## Refresh the Requirement

If you added some changes to the original source of your requirement, you would want it to be updated in your Testomat.io Project as well. To resync the requirement you need:

1. Go to **'Requirements'** page.
2. Open requirement that was updated.
3. Click **'Extra menu'** button.
4. Click **'Refresh Requirement'** option.

![Testomat.io - Refresh Requirement](./images/Refresh_Requirement_1.png)

After the refreshment your requirement is automatically updated so you don't need to link the requirement again or update it manually.

![Testomat.io - Refresh Requirement](./images/Refresh_Requirement_2.gif)

## Analyze Requirements for Edge Cases

1. On **'Requirements'** page open added **Requirement**.
2. Click **'Analyze Requirement'** button.

![Testomat.io - Jira](./images/AI_Jira_2.png)

3. Click **'Analyze For Edge Cases'** button inside the AI Assistant.

![Testomat.io - Jira](./images/AI_Jira_3.png)

4. Check suggestions from AI Assistant and add them as the edge cases solution.
5. Click **'Save Clarification'** to the requirement if needed.

![Testomat.io - Jira](./images/AI_Jira_4.png)

6. Ask AI to generate more Edge cases by clicking on **'Think of more edge cases'** button.
7. Improve the previous answer or ask about more details by sending relevant request via the **'Follow up'** input field.

![Testomat.io - Jira](./images/AI_Jira_5.png)

## Create a Suite Case from Requirements

1. Open added Requirement.
2. Click **'Analyze Requirement'** button.

![Testomat.io - Jira](./images/AI_Jira_2.png)

3. Click **'Create a Test Suite'** button inside the AI Assistant.

![Testomat.io - Jira](./images/AI_Jira_6.png)

4. Add suggested test suite to your project.

![Testomat.io - Jira](./images/AI_Jira_7.png)

After adding the Suite Case to your project, you can begin creating your test cases or use AI to generate them for you.

## Generate Test Cases from Requirements Page

1. Open added Requirement.
2. Click **'Analyze Requirement'** button.

![Testomat.io - Jira](./images/AI_Jira_2.png)

3. Click **'Add tests to {Suite_name} Suite'** option.

![Testomat.io - Jira](./images/AI_Jira_8.png)

4. Check suggested test cases and add the relevant ones by clicking **'Add'** button.

![Testomat.io - Jira](./images/AI_Jira_9.png)

5. Click **'Write Description'** button to add description to the selected test case.

![Testomat.io - Jira](./images/AI_Jira_10.png)

6. Click **'Update Test Description'** button to add genearted test description to the test case.

![Testomat.io - Jira](./images/AI_Jira_11.png)

:::note

You always need explicitly select which test cases to add and update their descriptions as needed.

:::

## Suggest Test Cases Based on Requirements from Suite Level

You can also generate test cases directly from a Suite if it has a linked requirement.

1. Open Suite Case with the linked requirement.
2. Click **'Extra menu'** button on 'Summarize' button.
3. Select **'Suggest Tests'** option from the dropdown list.

![Testomat.io - Suggest Tests](./images/AI_Suggest_tests_1.png)

Similar to the previous case, review the suggested test cases, add the relevant ones, and write descriptions for the selected test cases directly from the AI-assistant window.

![Testomat.io - Suggest Tests](./images/AI_Suggest_tests_2.gif)

All added test cases will be displayed in your Suite after AI-assistant window is closed.

![Testomat.io - Suggest Tests](./images/AI_Suggest_tests_3.png)