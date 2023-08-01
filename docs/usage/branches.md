---
permalink: /usage/branches
title: Branches
editLink: true
---

# Branches

The typical day-to-day workflow includes changes that developers make to the code. So as code is changing, quality assurance needs to update the tests to keep code tests coverage update. You may need to add tests for a new feature, but you don't want to affect existing suites and tests. Or there are a lot of specialists in the team and you don't want to affect each other's work and you need to write tests separately. 
For all these cases Testomat.io implemented tests branching and versioning, which helps software testing teams working on different parts of a project without impacting each other. Teams can more efficiently organize work on a shared tests base by branching and merging.

## How To Create A Branch

![image](images/131292618-54b5a3bf-13ec-4aa2-8120-f40899d9f48c.png)

1. enter the name for your branch
2. click on Create button

![image](images/131292774-322b171a-421b-447d-90ba-1c805d4bd7e0.png)

Here is your branch created:

![image](images/131293112-7fcf2b80-27c9-4d48-aeb3-5c468f3e68df.png)

Now you can switch to a created branch

![image](images/131306785-a428e7ad-83cc-4542-b47e-0551c8d3ab19.png)

![image](images/131306597-e3c82f06-d352-4faf-9e62-74cdc8c70104.png)

## Work Within The Branch

Now you work inside the branch

![image](images/131307137-afae47ce-17f5-4bc2-91a9-6dfd691e85d1.png)

You can create suites and tests within the branch au usual. Suites and tests changed (1) and created (2) within the branch are marked with a badge, so you won't miss them.

![image](images/131308407-7f044c31-4123-4982-9891-049a5db91c1a.png)

![image](images/131310594-620fd0a8-5e43-426d-91cb-ba70448be39b.png)

Also, you can view **Forks for tests changed in different branches** and switch to that branches. You need to open a test and switch to the Forks tab.

![Ability-to-View-Branch-Forks](images/131476415-f50aac9a-760c-4ed6-9a67-2c169d855e6f.gif)

You can compare changes with Main 

![screencast 2021-08-30 11-43-23](images/131313266-66a5c413-8c4e-4e73-a7ad-4afe515082d4.gif)

You can switch to Main from the Branches page

![image](images/131321183-37ad9b3e-9e8f-43e6-9860-205168095580.png)

Or from the chosen Branch

![image](images/131321253-ad719a86-c5c9-43e4-97e0-8f2bb864a1e5.png)

## Automated tests in Branches

When testing different versions of your software you may need to add automated tests to a specific branch for some reason. Testomat.io allows working with automated tests within a branch, separately from Main. 
You can import tests into a chosen branch or create a new branch during import using `TESTOMATIO_BRANCH` parameter. 
Learn more [here.](https://docs.testomat.io/reference/import/#import-into-a-branch-2)

## Merge And Replace To Main

After all work within the branch was done, you can merge or replace your changes to the main or replace

![image](images/131388624-1426d010-8f45-4cbd-8eca-2dec71af1432.png)

When the branch is merged it goes to the Merged tab.

![image](images/131389066-d8ceb313-6fbd-4d00-aa72-d8d5f813f2f4.png)

You can use filters to find the exact branch quickly.

![Filters-for-Branches](images/131480685-2228f66f-aa9b-4461-8fa0-0ada5b95d312.gif)

## Difference between Merge And Replace

**Merge** merges all changes except diverged tests and suites, which means Testomat.io will merge only changed within the current branch tests and suites, so the Main will be complemented.

**Replace** merges all changes with diverged tests, replaces them in the Main, which means Testomat.io will fully replace the Main with the current branch. So previous changes within the Main can be off-track.
