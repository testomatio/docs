---
title: Auto-Import
---

It is recommended to re-import your automated tests regularely. 
This task can be accomplished by CI. On every push to main branch you can import automated tests and update their IDs for new tests added. This will keep tests in Testomat.io and in codebase in sync.

## GitHub Actions

If you use GitHub Actions you can use the following workflow file to perform auto-import. 

* We use `check-tests` command with Playwright with TypeScript configured but you can replace it with a framework of your choice. 
* `TESTOMATIO` token must be passed as a [secret variable](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) into a workflow
* Changes to tests are automatically committed via `git-auto-commit-action`

```yaml
name: Update Test IDs

on:
  push:
    branches:
      - main
      - master

jobs:
  update-tests:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Import tests and update IDs
      run: npx check-tests Playwright "**/*{.,_}{test,spec,cy}.ts" --update-ids --typescript
      env:
        TESTOMATIO: ${{ secrets.TESTOMATIO }}

    - name: Commit and push changes
      uses: stefanzweifel/git-auto-commit-action@v4
      with:
        commit_message: "Updated test IDs"
```

### GitLab

*Coming soon....*

### Jenkins

*Coming soon...*