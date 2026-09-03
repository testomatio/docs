---
title: API Access
description: Learn how to use Testomat.io API tokens to securely connect and interact with your test management projects. This guide covers access token types, authentication requests, suite and test retrieval, and operations with test runs for efficient integration and automation.
type: article
url: https://docs.testomat.io/advanced/api-access
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, API access, API token, test management, test automation, test documentation, test suites, test runs, REST API, automation, CI/CD integration, autotest failures, explain failures, test coverage, debugging, test design, Jira integration, traceability, software testing, generate test cases, analyze logs
---
 
Testomat.io has an API you can use to connect your own tools to your projects, automate work, and pull data out. Requests and responses follow the [JSON API](https://jsonapi.org) standard.
 
## Access tokens

Access to the API goes through **access tokens**. Only a system or a person with a token can reach your projects. There are two types of tokens.
 
| Token | What it opens | Use it for |
| ----- | ------------- | ---------- |
| **General token** | All projects in your account | Admin work and automation across several projects |
| **Project token** | One project | Importing tests and reporting results |
 
![Testomat.io - Access Tokens](./images/1-access-tokens.png)
 
## Log in to the API
 
Every API call needs a JWT token. You get one by logging in first.
 
1. Send a login request. Use your API token:

   ```bash
   POST /api/login
 
   {
     "api_token": "testomat_EXAMPLETOKENt7dp5VFPR_h8b8SO12EXAMPLETOKEN"
   };
   ```
 
   Or use your email and password:
   ```bash
   POST /api/login
 
   {
     "email": "test.testomat@gmail.com",
     "password": "Test123!"
   };
   ```
 
2. Take the JWT from the response:
   ```json
   {
     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
   ```
 
3. Put that JWT in the Authorization header of every request you send next.

## Read suites and tests
 
Suites sit inside other suites, so one request is not enough. You build the tree step by step.
 
1. Ask for the root suites:
   ```bash
   GET /api/<project_name>/suites
   ```
 
2. Take each suite ID from the response and ask for that suite:
   ```bash
   GET /api/<project_name>/suites/:suite_id
   ```
 
3. Repeat step 2 for every child suite you get back, until nothing new comes.
Each suite response holds the suite metadata (name, ID, description, and so on), the IDs of its child suites, and the tests inside it.
 
## Work with runs and results
 
:::note
 
`/run/...` and `/testrun/...` are two different things. `/run/...` returns a **Run** — the execution session itself, with the list of tests in it. `/testrun/...` returns **Test Run** records — the *results* of the single tests that ran inside a run.
 
:::
 
All runs in a project:
 
```bash
GET /api/{project_id}/runs
```
 
One run by its ID:
 
```bash
GET /api/{project_id}/run/{id}
```
 
All test results from one run:
 
```bash
GET /api/{project_id}/testruns?run_id={run_id}
```
 
## Public API v2
 
Public API v2 uses the same request and response shape for every endpoint. That makes it easier to write an integration and easier for an AI agent to use. It supports requests to a branch, grouped counts, run statistics, analytics, and pagination. For additional information see [Testomat.io API Reference](https://app.testomat.io/docs/openapi).
 
### Testomat.io MCP Server v2.0
 
The MCP Server speaks the Model Context Protocol, so AI assistants can work with [Public API v2](./public-api-v2.md) directly. It can do the following:
 
- Full CRUD support for core entities.
- Read-only tags access.
- Issues management.
- Smart search.
- Issue linking.
- API compatibility layer.
- Run management.
- TQL-based search standardization.
- Safe TQL usage guidance.

## Importing and reporting
 
Importing and reporting use a **project token**, not a JWT. One token opens one project, which is all these operations need: sending tests into a project, and reporting results back to it.
 
- [Importing API (1.0.0)](https://testomatio.github.io/check-tests)
- [Reporting API (1.0.0)](https://testomatio.github.io/reporter)