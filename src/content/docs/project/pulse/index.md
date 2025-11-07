---
title: Pulse
description: Pulse in Testomat.io tracks all changes to test cases and test suites, providing transparency and control over project modifications. It monitors creation details, updates, and offers a history of changes. With its recovery feature, deleted items can be easily restored. The Bulk Restore option allows users to recover multiple deleted tests and suites simultaneously.
type: article
url: https://docs.testomat.io/project/pulse
head: 
  - tag: meta
    attrs:
      name: keywords
      content: Pulse, Testomat.io, test case tracking, test suite monitoring, version history, change tracking, test recovery, Bulk Restore, test management, test suite restoration
---

# Introducing Pulse

**Pulse** is a powerful feature in [Testomat.io](https://app.testomat.io) that brings full visibility, traceability, and control to your QA workflow. It tracks every change made within your projects — from new test creation to updates and deletions — giving you a clear picture of how your testing assets evolve over time.  

Pulse provides instant insight into team activity and testing progress, helping **QA Leads** and **Project Managers** stay informed without manually requesting status updates.

---

## What is Pulse

Pulse acts as your project’s **activity log** and **version history**, automatically recording all modifications across test cases, test suites, and folders. It’s designed to ensure transparency, accountability, and easy recovery, so your team can work confidently knowing that every action is tracked and reversible.

With Pulse, you can:

- See **who made a change**, **what was changed**, and **when** it happened.  
- Review the **the history** of edits, additions, or deletions for any test or suite.  
- **Restore deleted items** or roll back to previous versions with a single click.  

For **QA Engineers**, this means full control over versioned work. For **managers**, it offers a reliable audit trail and a clear view of project momentum over time.

This ensures you’ll never lose important test data or struggle to understand how your project has evolved — Pulse keeps your QA process transparent and your history intact.

---

## How Pulse Works

You can access Pulse directly from the **Pulse** tab in your Testomat.io project. There, you’ll find a chronological list of all activities recorded over the last **90 days**. Each entry contains detailed information about the change, including timestamps, item type, and the responsible team member.

### Activity Types

Pulse categorizes changes into three main types, accessible via separate tabs:

- **Created** — new tests, test suites, or folders added to the project.  
- **Changed** — updates to existing items, such as editing test descriptions, modifying states (e.g., from *Automated* to *Detached*), or renaming a suite.  
- **Deleted** — items removed from the project, including tests, suites, or entire runs.

Every recorded event provides a clear snapshot of the change and supports **rollback functionality**, so you can revert to a previous version or recover deleted items when needed.  

**QA Leads** can use this overview to identify active contributors, while **PMs** can quickly assess whether recent changes align with sprint goals or release timelines.

![Testomat.io - Pulse Activity Tabs](./images/Pulse_activity_tabs.gif)

---

## Filtering and Navigation

Pulse includes powerful filters to help you quickly find the information you need. You can narrow down activities based on:

- **Item Type** – view only *tests* or *suites*.  
- **Date Range** – filter changes within a specific time window.  
- **Changed By** – see actions performed by a particular user.

Each filter can be applied individually or in combination, enabling precise tracking of team activity and project evolution.  

This makes it easy to monitor specific team members’ contributions or isolate changes from a given testing phase. 

![Testomat.io - Pulse Activity Tabs](./images/Pulse_filters.gif)

---

## Bulk Restore

Bulk Restore is a great extension for Pulse. It is designed to save you time and effort by allowing you to restore multiple deleted tests and suites at once.

With Bulk Restore, you can:

* **Batch Restore:** Quickly and efficiently recover multiple deleted tests and suites at once, eliminating the need to restore each item individually.

* **Multi-Selection Mode:** Easily activate multi-select mode, choose the tests and suites you wish to restore, and bring them all back with a single action.

![Testomat.io - Bulk Restore](./images/New_85QaXaUI_2024-07-30.gif)