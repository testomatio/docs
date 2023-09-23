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

The Testomat.io Jira Plugin enhances your Jira experience, enabling a host of actions to be performed directly and seamlessly from Jira, streamlining your workflow and boosting efficiency.

Namely, you can:

- Connect multiple Testomat.io and JIRA projects easily.
- Quickly link/unlink tests, suites, and plans to JIRA issues.
- View and edit tests directly in JIRA.
- Use autocomplete and smart suggestions for creating tests.
- Easily modify BDD/Gherkin feature files and scenarios.
- Create multiple tests at once from checklists from bulk create 
- Run manual and automated tests from JIRA tickets.
- Attach test reports to JIRA issues with a click.
- Use tracebility matrix and reports to check test coverage in sprints and project.
- Manage project branches.

For details on how to use Testomat.io JIRA Plugin, please refer to [JIRA guide](/usage/jira-plugin) in our documentation.

## FAQ Section

#### Q: If we connect the Jira app, what access would Testomat.io gain? Can it access all projects?
**A:** When connected, Testomatio gains read access to all issues of the projects it is enabled on, allowing it to display tests that can be attached to any Jira issue. It does not have restrictions on the Jira API regarding which issues it can access. However, Testomatio strictly adheres to accessing only the necessary data for its functionality and maintains high standards of data integrity and security. It does not update or delete any issues on your Jira and only performs write operations to save test data into Jira storage attached to a specific issue.

#### How can we be confident in the security and privacy of the JIRA Plugin app?
**A:** We understand the concerns regarding security and privacy. Testomat.io is committed to maintaining the highest standards of security and data protection. Testomatio only accesses data essential for its functionality and does not perform any operations that would compromise the integrity of your Jira issues. If you have specific concerns or need more information, please feel free to [Contact](/contact-us/contact-us) our support team, and we will be happy to assist you.

## Additional Information
For any concerns or additional information regarding the permissions and security of the Testomat.io JIRA plugin, please refer to our [Security Page](/security/overview) or [Contact](/contact-us/contact-us) support team.