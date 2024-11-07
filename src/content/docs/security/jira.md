---
title: JIRA Plugin Permissions and Security
description: The Testomat.io JIRA plugin enhances integration with JIRA projects by linking test cases to issues. It offers read access to project issues and writes properties for storing test data. The plugin ensures data security and performs no update or delete operations. Features include linking/unlinking tests, viewing/editing tests in JIRA, running tests, and attaching reports.
type: article
url: https://docs.testomat.io/security/jira/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: JIRA integration, Testomat.io, test management, test linking, security, test data, API access, BDD, traceability matrix, test reports, JIRA plugin
---

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

## FAQ

#### Q: If we connect the Jira app, what access would Testomat.io gain? Can it access all projects?
**A:** When connected, Testomat.io gains read access to all issues of the projects it is enabled on, allowing it to display tests that can be attached to any Jira issue. It does not have restrictions on the Jira API regarding which issues it can access. However, Testomat.io strictly adheres to accessing only the necessary data for its functionality and maintains high standards of data integrity and security. It does not update or delete any issues on your Jira and only performs write operations to save test data into Jira storage attached to a specific issue.

#### How can we be confident in the security and privacy of the JIRA Plugin app?
**A:** We understand the concerns regarding security and privacy. Testomat.io is committed to maintaining the highest standards of security and data protection. Testomat.io only accesses data essential for its functionality and does not perform any operations that would compromise the integrity of your Jira issues. If you have specific concerns or need more information, please feel free to [Contact](/contact-us/contact-us) our support team, and we will be happy to assist you.

#### Does your app have any compliance certifications?
Our application has completed the CAIQ Lite Questionnaire, which provides comprehensive answers covering all compliance and security levels. We strictly adhere to all CAIQ points, ensuring that our security practices align with industry standards and best practices for safeguarding user data. We are committed to maintaining full compliance in areas such as data protection, risk management, and access control. We provide our CAIQ Lite Questionnaire responses upon request via email. [Contact](/contact-us/contact-us) our support team, and we will be happy to assist you.


## Additional Information
For any concerns or additional information regarding the permissions and security of the Testomat.io JIRA plugin, please refer to our [Security Page](/security/overview) or [Contact](/contact-us/contact-us) support team.