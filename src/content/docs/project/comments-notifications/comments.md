---
title: Comments
description: Comment on tests, suites, and plans in Testomat.io. This guide covers posting a comment, editing and deleting your own comments, and how comments behave when a suite is shared with another project.
type: article
url: https://docs.testomat.io/project/comments-notifications/comments
head:
  - tag: meta
    attrs:
      name: keywords
      content: comments, comment on a test, comment on a suite, comment on a plan, edit a comment, delete a comment, test case discussion, shared projects, collaboration, Testomat.io
---

Comments are for your work convenience. Comments keep a discussion next to the test it is about. 

Everyone who opens the test later sees the context, and everyone already in the thread knows when it updates.

![What comments give you: context, thread updates, editing, and project scope](./images/comments-mindmap.png)

## Comment on a Test, Suite, or Plan

1. Open the test, the suite, or the plan you want to discuss.
2. Open the **Comments** tab.
3. Enter your comment.
4. Click **Comment**.

![The Comments tab on a test, with one comment in the thread](./images/3-test-comments.png)

Your comment appears in the thread with your name and the time you posted it. Everyone who has already commented there is notified that the conversation has updated.

:::note

To pull one specific person in, mention them with `@`. See [Mentions and notifications](./mentions-and-notifications.md).

:::

## Edit or delete a comment

You can edit or delete your own comments after posting. 

Editing also lets you remove a mention you no longer need. To edit a comment:

1. Open the test or the suite you want to discuss.
2. Open the **Comments** tab.
3. Edit your comment.
4. Click **Update**.

:::caution[Important]

Deleting a comment removes it from the thread for everyone. This cannot be undone.

:::

## Comments in Test Plans

Discuss a plan with your team right next to it. Plan comments work the same as comments on tests and suites: you can use Markdown and mention people with `@`. The plan header shows the number of comments.

To close the comments panel, press **Esc** or click **X**.

:::note

Users with read-only access can read plan comments. They cannot add comments.

:::

## Comments in shared projects

Comments are always project-specific. When a suite or test [is shared](https://docs.testomat.io/project/tests/sharing-tests-and-suites/#share-a-test-suite-or-folder) with another project, its comments are not transferred with the shared tests.

:::note

The same applies in the other direction: a comment left in a target project is not visible in the source project.

:::

## Next steps

- [Mentions and notifications](./mentions-and-notifications.md)
- [Running tests manually](https://docs.testomat.io/project/runs/running-tests-manually)
- [Sharing Tests and Suites](https://docs.testomat.io/project/tests/sharing-tests-and-suites)
