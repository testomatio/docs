---
title: Query Language
description: Explore how to filter and retrieve test data using Testomat.io Query Language (TQL). This guide explains the use of basic selection operators like and, or, not, and introduces variables such as tags, labels, priorities, and dates. Learn how to write complex queries to efficiently manage test suites and filter tests based on various criteria, enhancing test tracking and organization.
type: article
url: https://docs.testomat.io/usage/query-language/
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/image-10.CseiEB5H_m3LwE.webp

  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, query language, TQL, test filtering, test management, test queries, variables, priority filter, tag filter, automation, QA tools, testing efficiency
---

TQL or **Testomat.io Query Language** is a flexible way to filter tests data inside Testomat.io. Query Language provides basic selection operators like **and**, **or** and **not** and braces to prioritize selection.

## Writing Queries

To access Query Language Editor click on the button right to search field on Tests screen:

![TQL Access](./images/image-9.png)

This will open an extended TQL editor which allows to write queries in a dedicated interface with some hints provided:

![Alt text](./images/image-10.png)

A query can select tests by comparing its fields. The basic comparison operators are: `==` for 'equals' and `!=` for 'not equals'.

The most popular use case would be selecting tests by tag A or by tag B.

This could be written as following query:

```ruby
tag == 'A' or tag == 'B'
```

if a test needs to have both tags at once, use `and` operator:

```ruby
tag == 'A' and tag == 'B'
```

In case you want tests with tag A excluding tests that contain tag B, this should be the query:

```ruby
tag == 'A' and not (tag == 'B')
```
or the same with `!=`

```ruby
tag == 'A' and tag != 'B'
```

In case you build a complex query use braces `()` to explicitly set priority of comparison. For instance, to select tests with tag A or tests with both tags B and C, use braces to set priority:

```ruby
tag == 'A' or (tag == 'B' and tag == 'C')
```

<Aside type="caution" title="Important">

**Use braces** when you have combination of `and` / `or` operators. Query like `A and B or C and D` is ambiguous, so it should be rewritten to something like: `(A and B) or (C and D)` to explicitly set the order of operators.

</Aside>

Please note, that most of variables requires values in string format wrapped into single or double quotes:

```
tag == A <- won't work !!!

tag == 'A' <- will work
```

Also, the equality should always be set as `==`:

```
tag = 'A' <- won't work !!!!

tag == 'A' <- will work
```
### Multiple values

It may be necessary to find multiple values associated with a single variable. Fortunately, TQL provides a straightforward solution. The following syntax can be used to achieve this:

```
jira in ['LMP-100', 'LMP-104', 'LMP-144', 'LMP-214', 'LMP-219']
```

![Testomat.io - TQL Multiple values](./images/New_mYtOus61_2024-10-14.png)

## Tests Variables

In previous section we used `tag` in the query. `tag` is an allowed query variable. Here is a comprehenisve list of variables you can use in the query:


| Variable     | Description                                | Example                              |
|--------------|--------------------------------------------|--------------------------------------|
| tag          | Match tests by tag                          | `tag == 'important'`                |
| label        | Match tests by label or custom field        | `label == 'Automatable'`            |
|              |                                            | `label == 'Severity:🔥Critical'` (please note that you need to include emojis if you use them as value in custom fields)    |
| priority     | Match tests by priority                     | `priority >= 'normal'`              |
|              |                                            | `priority == 'critical'`            |
| issue        | Match tests by issue as URL or Jira issue key| `issue == 'https://github.com/o/r/issues/1'` |
|              |                                            | `issue == 'JST-2'`                   |
| jira         | Match tests by Jira issue key               | `jira == 'JST-2'`                    |
| state        | Match tests by automation state             | `state == 'automated'`              |
|              |                                            | `state == 'manual'`                 |
|              |                                            | `state == 'sync'`                   |
|              |                                            | `state == 'unsync'`                 |
| status       | Match tests by run status                   | `status == 'passed'`                |
|              |                                            | `status == 'failed'`                |
| created_at   | Match tests by creation date                | `created_at >= 3.days_ago`          |
|              |                                            | `created_at < 1.month_ago`          |
|              |                                            | `created_at == today()`             |
|              |                                            | `created_at <= '2023-12-31'`        |
| updated_at   | Match tests by last update                  | `updated_at >= 3.days_ago`          |
|              |                                            | `updated_at <= '2023-12-31'`        |
| run_at       | Match tests by last execution date          | `run_at < 1.week_ago`               |
|              |                                            | `run_at == today()`                 |
| created_by   | Match tests by author's name                | `created_by == 'Antonio Primus'`   |
| assigned_to  | Match tests by assignee's name              | `assigned_to == 'Antonio Primus'`  |
| suite        | Match tests inside a folder or suite        | `suite % 'Checkout'`                |
|              |                                            | `suite == '{SUITE_ID}'`             |
| test         | Match tests by title or ID                  | `test % 'User login'`               |
|              |                                            | `test == '{TEST_ID}'`               |

#### Examples

```ruby
# list tests linked to specific jira issues
jira in ['JST-1', 'JST-2', 'JST-3']

# failed tests with either smoke or stage1 tag
tag in ['smoke', 'stage1'] and status == 'failed'

# list important and automatable tests by label
label == 'Automatable' and priority > 'normal'

# list recently created tests
created_at < 1.month_ago
```

## Runs Variables

Testomat.io has implemented a Query Language for Runs to make the search more flexible. You are already familiar with some of the variables from the previous section, but more new features have been implemented for Runs, which gives you new opportunities.

Before diving into the details of variables, it's important to understand that variables starting with `has_` are used to filter **test runs** by whether they match certain **test criteria**. Specifically:

* `has_test`: This variable allows you to filter runs based on whether they contain specific tests, which are identified by their title or ID. In other words, you can use `has_test` to find test runs that include tests that match a given name or ID.

| Variable          | Description                                            | Example                                           |
|-------------------|--------------------------------------------------------|---------------------------------------------------|
| title             | Match runs by title                                    | `title == 'Run title'`                            |
|                   |                                                        | `title % 'Manual tests'`                          |
| plan              | Match runs by plan                                     | `plan == '{PLAN_ID}'`                             |
|                   |                                                        | `plan % 'Smoke tests'`                            |
| env               | Match runs by environment                              | `env == 'Production'`                             |
|                   |                                                        | `env in ['Windows', 'Linux']`                          |
| tag               | Match runs by tag                                      | `tag == 'slow'`                                   |
| label             | Match runs by label or custom field                    | `label IN ['Severity:🔥Critical', 'Automatable']` |
| jira              | Match runs by jira_id or Jira issue key                | `jira == 'JST-1'`                                 |
| duration          | Match runs by duration in seconds                      | `duration < 1000`                                 |
| passed_count      | Match runs by number of passed tests                   | `passed_count > 100`                              |
| failed_count      | Match runs by number of failed tests                   | `failed_count < 10`                               |
| skipped_count     | Match runs by number of skipped tests                  | `skipped_count < 10`                              |
| automated         | Match runs by automated                                | `automated`                                       |
| manual            | Match runs by manual                                   | `manual`                                          |
| mixed             | Match runs by mixed                                    | `mixed`                                           |
| finished          | Match runs by finished                                 | `finished`                                        |
| unfinished        | Match runs by unfinished                               | `unfinished`                                      |
| passed            | Match runs by passed status                            | `passed`                                          |
| failed            | Match runs by failed status                            | `failed`                                          |
| terminated        | Match runs by terminated                               | `terminated`                                      |
| published         | Match runs by published                                | `published`                                       |
| private           | Match runs by private                                  | `private`                                         |
| archived          | Match runs by archived                                 | `archived`                                        |
| unarchived        | Match runs by unarchived                               | `unarchived`                                      |
| with_defect       | Match runs that have linked defects                    | `with_defect`                                     |
| has_test          | Match runs containing tests by their title or ID       | `has_test == '{TEST_ID}'`                         |
|                   |                                                        | `has_test % 'Important test'`                     |
| has_test_tag      | Match runs containing tests with specific tags         | `has_test_tag == 'regression'`                    |
| has_test_label    | Match runs containing tests with specific labels       | `has_test_label == 'Automatable'`                 |
| has_suite         | Match runs containing suites by their title or ID      | `has_suite % 'Users'`                             |
| has_message       | Match runs containing tests with messages              | `has_message == "Result message"`                 |
| has_assigned_to   | Match runs containing tests assigned to specific users | `has_assigned_to IN ['John Doe', 'Jane Smith']`   |
| has_retries       | Match runs containing tests with retries               | `has_retries > 2`                                 |
| has_test_duration | Match runs containing tests with specific durations    | `has_test_duration <= 1.minute`                   |
| created_at        | Match runs by creation time                            | `created_at <= 1.week_ago`                        |
| updated_at        | Match runs by last update                              | `updated_at >= 5.days_ago`                        |
| finished_at       | Match runs by finish time                              | `finished_at < 7.days_ago`                        |

#### Examples

```ruby
# match failed runs with all User tests
failed and has_test % 'User'

# match runs with tests from Smoke Tests plan
finished and plan % 'Smoke Tests'

# match runs with tests with @regression tag
failed and has_test_tag == 'regression'

# list all runs with tests that have tests as flaky
finished and finished_at < 1.week_ago and has_test_label == 'Flaky'

# list all runs with tests that have connection errors
failed and has_message % 'Connection Error'

# list all runs with tests that have retries
finished and has_retries > 2

# list all runs that contain Jira Issues or Issues linked to tests results
finished and with_defect

# automated tests executed in pruection and had Server error in messages
automated and env == 'Production' and has_message % 'Server Error'
```

## Filter By Priority

Priority variable allow additional comparisons operators to be used `>` `<` `>=`, `<=`. So you can select tests with a priority higher than normal:

```ruby
priority > 'normal'
```

## Filter By Title

To match test by its title or its suite title a special operator `%` was introduced. This allows to match all tests containing a text inside its title. For instance, this query will match all tests with word `User` in their title:

```ruby
# when searching for tests
test % 'User'

# when searching for runs containing test
has_test % 'User'
```

Searched text should be longer than 4 chars.

This also works for suites, so you can select all tests from a suite containing `User` word:


```ruby
# when searching for tests from a suite
suite % 'User'

# when searching for runs containing tests from a suite
has_suite % 'User'
```

However, if there are multiple suites with word User in their title, **only the first suite will be selected**.


## Dates

When you deal with date variables like `created_at`, `run_at`, and others you can set absolute date in `YYYY-MM-DD` format or use functions like `days_ago`, `weeks_ago`, `months_ago` to specify a date from now.

Examples:

```ruby
1.day_ago
3.days_ago


1.week_ago
2.weeks_ago

1.month_ago
5.months_ago
```

There is also `today()` function that can be used to specify current date. For instance, to list all tests created today use this query:

```ruby
created_at == today()
```

To list all tests created for the previous week use `1.week_ago` with `>` operator:

```ruby
created_at > 1.week_ago
```


## Users

Variables like `assigned_to` or `created_by` require user names to be passed as value. For instance, this will select all tests created by John Snow.

```ruby
created_by == 'John Snow'

created_by IN ['John Snow', 'John Doe']
```

Filtering always happens by user name, not by email or user ID. Also, user should exist inside the project.
