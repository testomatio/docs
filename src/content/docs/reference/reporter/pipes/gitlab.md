---
title: GitLab
description: The GitLab Pipe in Testomat.io enables automatic test result reporting directly into GitLab merge requests. It provides detailed test metrics, including passed, failed, and skipped tests, along with stack traces. The integration is achieved through environment variables like GITLAB_TOKEN, improving visibility into test results within the GitLab CI/CD pipeline.
type: article
url: https://docs.testomat.io/reference/reporter/pipes/gitlab/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/test-reporting-heat-map.CoE-TwPN_Z20qVi.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: GitLab Pipe, Testomat.io, merge request comments, test reporting, CI integration, GitLab CI/CD, GITLAB_TOKEN, automated testing, test management
---
## GitLab Pipe

Similarly to [GitHub Pipe](./github.md#github-pipe), GitLab Pipe adds a comment with a summary of a run to a Merge Request:

This summary will contain:

- Status of a test run
- Number of failed/passed/skipped tests
- Stack traces of failing tests (first 20)
- Screenshots of failed tests (if available)
- List of 5 slowest tests

**🔌 To enable GitLab pipe set `GITLAB_PAT` environment with GitLab Private Access Token**

### Keep Outdated Reports

If a pipeline is executed multiple times, comment with previous reports will be deleted. To keep them set `GITLAB_KEEP_OUTDATED_REPORTS=1`.

