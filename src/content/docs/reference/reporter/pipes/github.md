---
title: Github
description: The GitHub Pipe feature in Testomat.io enables automated comments on pull requests, summarizing test results with key metrics like passed/failed/skipped tests, stack traces, and slowest tests. It integrates through the GH_PAT environment variable, with options to keep previous reports using GH_KEEP_OUTDATED_REPORTS. This enhances CI workflows by providing detailed feedback directly in GitHub.
type: article
url: https://docs.testomat.io/reference/reporter/pipes/github/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/github.C03cgmD4_Z2jb7MH.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: GitHub Pipe, Testomat.io, pull request comments, test reporting, CI integration, GitHub Actions, GH_PAT, automated testing, test management
---
## GitHub Pipe

GitHub Pipe adds a comment with a summary of a run to a Pull Request:

![](./images/github.png)

This summary will contain:

- Status of a test run
- Number of failed/passed/skipped tests
- Stack traces of failing tests (first 20)
- Screenshots of failed tests (if available)
- List of 5 slowest tests

**🔌 To enable GitHub pipe set `GH_PAT` environment with GitHub Private Access Token**

When using GitHub Actions inside Pull Request you can set GH_PAT from `github.token` system variable. Here is a sample workflow:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    permissions:
      # These permissions are required for testomat to create comments on pull requests
      issues: write
      pull-requests: write
    # pre-execution steps
    - name: Run Tests
      run: <actual test command with @testomatio/reporter enabled>
      env:
        GH_PAT: ${{ github.token }}
```

### Keep Outdated Reports

If a pipeline is executed multiple times, comment with previous reports will be deleted. To keep them pass `GH_KEEP_OUTDATED_REPORTS` variable:

```yaml
- name: Run Tests
  run: <actual test command with @testomatio/reporter enabled>
  env:
    GH_PAT: ${{ github.token }}
    GH_KEEP_OUTDATED_REPORTS: 1
```

