---
title: Public API v2
description: Work with Testomat.io Public API v2 — request tests, suites, and runs from a specific branch, get aggregated counts, break a run down by suite or label, read analytics, and page through large responses.
type: article
url: https://docs.testomat.io/advanced/api-access/public-api-v2
head:
  - tag: meta
    attrs:
      name: keywords
      content: Public API v2, REST API, branch-aware requests, aggregated counts, run statistics, run breakdown, analytics API, pagination, total_pages, has_more, Testomat.io
---

Public API v2 gives every endpoint the same request and response shape, so
integrations behave predictably. This page covers the requests you need most
when you build a dashboard or an external report: branch-aware reads,
aggregated counts, run breakdowns, analytics, and pagination.

Every request uses a token in the `Authorization` header. See
[API Access](./index.md) for how to create one.

## Request data from a branch

Work with tests, suites, and runs from a specific project branch. Test and suite
changes stay isolated from Main.

```bash
curl "https://app.testomat.io/api/v2/my-project/tests?branch=feature-checkout" \
  -H "Authorization: Bearer $TESTOMATIO_TOKEN"
```

The response contains only the records that exist on that branch.

## Get aggregated counts

Request totals grouped by a field, such as test state or run status, without
downloading every record.

```bash
curl "https://app.testomat.io/api/v2/my-project/tests?count=true&group_by=state" \
  -H "Authorization: Bearer $TESTOMATIO_TOKEN"
```

The response shows how many tests are **Manual** and how many are
**Automated**, which is what a dashboard or a summary report usually needs.

## Break a run down by group

Analyze a run by suite, tag, label, assignee, or priority. Each group includes
passed, failed, skipped, and pending result counts.

```bash
curl "https://app.testomat.io/api/v2/my-project/runs/RUN_ID/stats/suites" \
  -H "Authorization: Bearer $TESTOMATIO_TOKEN"
```

Replace `suites` with `tags`, `labels`, `assignees`, or `priorities` to change
the breakdown.

## Read analytics data

Retrieve saved charts or aggregated trend data for external dashboards, reports,
and AI tools.

```bash
curl "https://app.testomat.io/api/v2/my-project/analytics/stats/success-rate-by-date?days=30" \
  -H "Authorization: Bearer $TESTOMATIO_TOKEN"
```

Available reports include success rate, automation rate, test-run activity, and
priority trends.

## Page through large responses

Paginated responses include `total_pages` and `has_more`, so your integration
knows whether another page needs to be requested.

```bash
curl "https://app.testomat.io/api/v2/my-project/tests?page=2&per_page=50" \
  -H "Authorization: Bearer $TESTOMATIO_TOKEN"
```

```json
{
  "meta": {
    "total_pages": 26,
    "has_more": true
  }
}
```

Keep requesting the next page while `has_more` is `true`.

If this doesn't work:

- `401 Unauthorized` — the token is missing, expired, or belongs to another
  account. Create a new token on the Access Tokens page.
- A branch request returns Main data — check the branch name spelling; it must
  match the branch in the project exactly.
- A count request returns full records — `count=true` and `group_by` must both
  be present.

## Next steps

- [API Access](./index.md)
- [Interacting via API](https://docs.testomat.io/tutorials/interacting-via-api)
- [Testomat.io API Reference](https://app.testomat.io/docs/openapi)
