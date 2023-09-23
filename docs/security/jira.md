---
permalink: /security/jira
title: JIRA Permissions
editLink: true
---

# JIRA Plugin Permissions and Security

## Overview
Testomat.io’s JIRA plugin is designed to enhance the integration between your testing environment and your JIRA projects. It accesses your JIRA projects to show tests that can be attached to any issue in JIRA, providing a seamless way to link your test suites with your project issues. Below is a detailed overview of the permissions required by Testomat.io and the scope of access within your JIRA projects.

## Permissions and Access Scope
- **Read Access:** Testomat.io has read access to all issues of a project it is enabled on. This is essential to fetch relevant details and display tests that can be attached to any issue in JIRA.
- **Write Properties:** Testomat.io can write properties to save tests data into JIRA storage attached to a specific issue. This is the only write operation performed by Testomat.io.
- **No Update or Delete Operations:** Testomat.io does not update or delete any issues on your JIRA. It strictly adheres to read and write properties operations to ensure the integrity of your JIRA issues.

## API Endpoints Accessed
Testomat.io accesses the following JIRA API endpoints:
- `GET /search?jql="epic link"=${key}&maxResults=1000`
- `GET /issue/:id`
- `GET /issue/${issueId}/properties/${slug}.testomatio.tests`
- `GET /search?jql=parent=${key}&maxResults=1000`
- `GET /search?jql=sprint=${sprintId}&maxResults=1000`
- `GET /search?jql=project=${projectId}&maxResults=1000`
- `GET /user/properties/testomatio.token`

## Security Note
While Testomat.io has access to all issues of a project it is enabled on, it is important to note that there are no restrictions on the JIRA API regarding which issues Testomat.io has access to. However, Testomat.io is committed to maintaining the highest standards of data integrity and security and only accesses data essential for the functionality of the app.

## JIRA Plugin features

Testomat.io Jira Plugin allows using Jira more efficiently. Namely, you can:

- link / unlink tests, suites, and test plans to Jira issues
- view, add and edit your tests directly from Jira
- execute tests and link test report to Jira issue
- tracebility matrix to understand coverage
- edit BDD / Gherkin feature files and scenarios
- create and manage branches within your project

For details on how to use Testomat.io JIRA Plugin, please refer to [JIRA guide](/usage/jira-plugin) in our documentation.

## Additional Information
For any concerns or additional information regarding the permissions and security of the Testomat.io JIRA plugin, please refer to our [Security Page](/security/overview) or [contact](/contact-us/contact-us) our support team.