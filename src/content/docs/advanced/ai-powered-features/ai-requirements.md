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

A dedicated **'Requirements'** page brings all your requirements into a single, convenient workspace, where you can view, organize, and update all requirements in one place, eliminating the need to jump between different parts of a project.

When you add a **Requirement source** (Jira issue, Confluence page, PDF file, etc.) in Testomat.io, the system analyzes the description and automatically generates a structured requirement summary. You can also view all suites linked to a requirement, the original source, and any added attachments directly from the 'Requirement details' page.

![Testomat.io - AI-powered](./images/Requirement_page_details_1.gif)

AI can analyze requirement descriptions and suggest relevant test data examples that support broader test coverage and more effective validation of business requirements.

**Based on the requirement analysis, you’ll be offered two intelligent options:**

- **Generate New Suites:** Create a new test suite with AI-suggested test cases.
- **Analyze Existing Coverage:** Review existing suites and receive suggestions for coverage improvements.

This feature is available both at the **project level** and within individual **test suites**, enabling flexible, requirements-driven testing whether you’re planning at a high level or working in a focused domain.

**Key benefits:**

- **Automation:** Speeds up the transition from business requirements to actionable test cases.
- **Traceability:** Ensures alignment between business goals and actual test coverage.
- **Efficiency:** Reduces manual effort and identifies potential gaps in test planning.

:::note

By default, AI-powered generative features are disabled for your confidence. 
You can enbable AI at any time on Company Settings page by following the instructions in the [Administration section](https://docs.testomat.io/management/company/administration/#ai).

:::

# Requirements Page Overview

**On 'Requirements' page, you can perform the following actions::**

1. Link new requirement (check sections below for more details).
2. Filter requirements by sourse type, level, and status.
3. Search for specific information within your requirements.
4. Change the **Requirements Display View**: List view vs. Suite view (check section below for more information).
5. **'Chat with Requirements'** using AI assistant ([Read more](https://docs.testomat.io/advanced/ai-powered-features/ai-requirements/#chat-with-requirements)).
6. View **'Requirement details'** page.
7. Edit Requirement.
8. Delete Requirement.

![Testomat.io - Requirements page](./images/Req_page_1.png)

### Requirements Display View

**Select the requirements display view based on your current workflow:**

- **'Display as List':** Work with requirements at the **Requirement level**. All requirements are displayed in a single list, allowing you to view details, link suites to the selected requirement, add attachments, or requirement notes.

- **'Display by Suites':** Work with the requirements at the **Suite level**. All suites are displayed in one list alongside their linked requirements. It helps identify suites that lack coverage and allows you to attach or detach requirements easily, and as well change the requirement details.

## Add Requirements to an Empty Project

You can add requirements to a new project to drive test generation from the start.

Once a project is created (BDD or Classical), set up the integration for your **Requirement Source** (see detailed instructions for [JIRA](https://docs.testomat.io/integrations/issues-management/jira/#connecting-to-jira-project) and [Confluence](https://docs.testomat.io/integrations/issues-management/confluence)). Then, proceed with adding requirements:

1. Open **'Requirements'** page.
2. Click **'+New Requirements'** or **'+Add Requirement'** button.

![Testomat.io - Empty Project](./images/Req_empty_project_1.png)

3. Select your requirement source (e.g., Jira).
4. Enter the source identifier (e.g., **'Jira Issue ID'**).
5. Click **'Save'** button.

![Testomat.io - Empty Project](./images/Req_empty_project_2.png)

After the requirement is linked to a project you can use AI Assistant to analyze requirements for edge cases and potential solutions. You can also create suites and test cases based on these requirements.

:::note

You can add a new requirement to your ongoing project any time following the same steps.

:::

## Link Requirement to an Existing Suite Case

Testomat.io allows you to link a requirement to an existing suite case directly from its page.
To link the requirement that is already added to the project, follow these steps:

1. Open your Suite Case.
2. Select **'Requirements'** option from the **'Extra menu'** dropdown list.

OR

Click **'Attach Requirements'** button under the Suite title.

3. Open **'All Requirements'** tab.
4. Select the requirement that you want to link to the Suite from the list by clicking on **'Attach'** button.

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

To set up the **Requirement as Global** it should not be linked to any specific Suites.

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

If you added some changes to the original source of your requirement, you would want it to be updated in your Testomat.io Project as well. To sync changes made in the original external source (e.g., an updated Jira ticket) you need:

1. Go to **'Requirements'** page.
2. Open requirement that was updated.
3. Click **'Extra menu'** button.
4. Click **'Refresh Requirement'** option.

![Testomat.io - Refresh Requirement](./images/Refresh_Requirement_1.png)

After the refreshment your requirement is automatically updated so you don't need to link the requirement again or update it manually.

![Testomat.io - Refresh Requirement](./images/Refresh_Requirement_2.gif)

## Analyze Requirements for Edge Cases

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Analyze Requirement'** button on **'Summary'** tab.

![Testomat.io - Requirement](./images/AI_edge_case_1.png)

4. Click **'Analyze For Edge Cases'** button inside the AI Assistant.

![Testomat.io - Requirement](./images/AI_edge_case_2.png)

5. Check suggestions from AI Assistant and add them as the edge cases solution.
6. Click **'Copy'** button to copy the edge case and add manually it to your requirement if needed.
7. Ask AI to generate more Edge cases by clicking on **'Think of more edge cases'** button.
8. Improve the previous answer or ask about more details by sending relevant request via the **'Follow up'** input field.

![Testomat.io - Requirement](./images/AI_edge_case_3.png)

## Create a Suite Case from Requirements

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Analyze Requirement'** button on **'Summary'** tab.

![Testomat.io - Requirement](./images/AI_edge_case_1.png)

4. Click **'Suggest Suites'** button inside the AI Assistant.

![Testomat.io - Requirement](./images/AI_edge_case_4.png)

:::note

Use **'Follow up'** feature to improve suggested suite case options.

:::

5. Click **'Add'** button to add suggested suite to your project.

![Testomat.io - Requirement](./images/AI_edge_case_5.png)

:::note

Suite cases added from the Requirement page via AI Assistant are automatically linked to the requirement.

:::

After adding the Suite Case to your project, you can begin creating your test cases manually or use AI to generate them for you by clicking **'Suggest Tests to {Suite_name}'** button.

![Testomat.io - Requirement](./images/AI_edge_case_6.png)

## Generate Test Cases from Requirements Page

If there is a suite case linked to the requirement, you can generate test cases usin AI-feature.

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Analyze Requirement'** button on **'Summary'** tab.

![Testomat.io - Requirement](./images/AI_edge_case_1.png)

4. Click **'Add tests to {Suite_name} Suite'** option.

![Testomat.io - Requirement](./images/AI_edge_case_7.png)

5. Click **'Suggest More Tests'** button to generate more test cases if you need.
6. Check suggested test cases and add the relevant ones by clicking **'Add'** button.

![Testomat.io - Requirement](./images/AI_edge_case_8.png)

:::note

Double-click on suggested test case title for editing it before adding it to your suite.

![Testomat.io - Requirement](./images/AI_edit_TC_1.png)

:::

7. Click **'Write Description'** button to add description to the selected test case.

![Testomat.io - Requirement](./images/AI_edge_case_9.png)

8. Click **'Update Test Description'** button to add generated test description to the selected test case.
9. Click **'Edit'** button if you want manually update your test case description before saving it.

![Testomat.io - Requirement](./images/AI_edge_case_10.png)

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

## Chat with Requirements

Use **'Chat with Requirements'** AI feature to ask specific questions about your project documentation. The AI assistant can search, filter, summarize, or analyze your requirements in real-time to provide immediate insights.

![Testomat.io - Chat with Requirements](./images/Chat_with_Requirements.gif)

## Additional AI-Features for Requirements

### Clarify Requirement

Use the **'Clarify Requirement'** feature to identify edge cases and explore potential logic resolutions within your requirements.

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Extra-menu'** button on **'Summary'** tab.
4. Select **'Clarify Requirement'** option from dropdown menu.

![Testomat.io - Clarify Requirement](./images/Clarify_Requirement_1.gif)

### Analyze Tests Coverage

Use **'Analyze Tests Coverage'** to ensure your requirements are fully covered by your test cases and to identify redundancy.

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Extra-menu'** button on **'Summary'** tab.
4. Select **'Analyze Tests Coverage'** option from dropdown menu.

![Testomat.io - Analyze Tests Coverage](./images/Analyze_Tests_Coverage.gif)

5. Click **'Add Missing Tests to {suite_name}'** button to add test cases that will help to increase test coverage.
6. Click **'Remove Redundant Tests'** button to remove tests that are not relevant for the requirement if there are any.

### Find Tests For Requirement

This feature helps you quickly locate existing test cases that already associated with a specific requirement, and as well test cases that could be potential associated with it.

1. Open **'Requirements'** page.
2. Click on the added **Requirement** to open it.
3. Click **'Extra-menu'** button on **'Summary'** tab.
4. Select **'Find Tests For Requirement'** option from dropdown menu.

![Testomat.io - Find Tests For Requirement](./images/Find_Tests_For_Requirement_1.gif)
