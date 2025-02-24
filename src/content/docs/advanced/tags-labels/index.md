---
title: Tags, Labels And Custom Fields
description: Discover how to use labels, custom fields and tags in Testomat.io to enhance your test management. This guide explains how to categorize and organize tests with tags, labels, define custom fields for tailored test information, and filter by these fields for improved workflow efficiency. Learn to configure tags, labels and custom fields to streamline testing and improve data accessibility.
type: article
url: https://docs.testomat.io/advanced/tags-labels
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/216135753-4033ed5d-4344-4d28-bc74-9b2446ac3b07.DZ17yVlm_Z1QLJs2.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, tags, labels, custom fields, test management, categorization, testing workflow, custom data, test organization, filter tests, QA, test case management
---

Tags, Labels & Custom Fields are powerful features in a test management system that allow users to categorize and organize their testing data.

**Tags and Labels** are keywords or phrases that can be applied to individual tests or test suites to provide an at-a-glance summary of the test's status, type, priority, or any other relevant information. They make it easy for users to filter and sort their tests to quickly find what they need.

**Custom fields**, on the other hand, are user-defined fields that can be added to a test case to capture specific information. For example, custom fields can be used to store information such as the tester's name, the expected result, the test environment, or the date the test was last run. Custom fields make it possible for users to tailor the test management system to their specific needs, and to store and retrieve data in a consistent and meaningful way.

Tags, Labels & Custom Fields can help users to streamline their testing process, increase the accuracy of their test data, and make it easier to find and analyze the information they need.

## How to Create and Assign Tags 

You can easily create tags directly to Test Cases or Suites via their titles

1. Open Test Case/ Suite
2. Click Edit button
3. Create tag starting with **@** symbol, directly within the Test Case or Suite title
4. Click Save button

![Testomatio - Add tag](./images/Add_Tag.gif)

All previously created tags are automatically saved in the system. To reuse a tag, simply type the **@** symbol in the Test Case title field and select the desired tag from the autocomplete dropdown.

![Testomatio - Autocomplete tag](./images/Autocomplete_tag.png)

:::note

In case if you don't see a previously created tag in the autocomplete dropdown, refresh the page. Alternatively, go to **Settings -> Project** and click the **'Recalculate Tags'** button.

:::

![Testomatio - Recalculate Tags](./images/Recalculate_Tags.png)

## How to Filter by Tags

1. Enable Filters
2. Select one or a few Tags from **Tag** dropdown list
3. Click Apply button

![Testomatio - Filtering by Tags](./images/Tag_filtering.png)

## How to Add Labels & Custom Fields

Labels can be easily added in Project Settings

1. Go to Settings.
2. Select Labels & Custom Fields.
3. Enter a title for the label.
4. Click Create button.

![Testomatio - Add Label](./images/Create_Labels.png)

## How to Setup a Label

Before setting up Labels & Custom Fields we need to learn about **Scope** and **Visibility** parameters.

**Scope** defines what pages you want to apply the Label & Custom Field. Here you can define on what pages you want to use it. You can apply it to tests, suites, runs, plans, steps and templates.

![Testomatio - Setup Label](./images/Labels.png)

**Visibility**  defines how a Label & Custom Field should be shown in UI. 

- Filter visibility will show a Label or Custom Field in the Filter Bar, so you can sort your items quickly.
- List visibility will show a Label or Custom Field in the tests tree, a list of runs, plans, or steps.

![Testomatio - Setup Label](./images/Visibility_Labels.png)


Now it's time to set up your label!

1. Scope - pick entities you want this label to be applied.
2. Visibility - labels can be shown in the Filter bar, in the list of entities, or in both views.
3. Custom Field - expand label capability to a custom field.

![Testomatio - Setup Label](./images/Setup_Labels.png)

You can also use **Quick create label** feature to create labels directly from a Test Case or Suite:

1. Open Test Case/ Suite.
2. Click Extra button.
3. Click Labels.
4. Type Label name in 'Quick create label' field.
5. Click Create button.
6. Select newly Created Label.

![Testomatio - Quick Create Label](./images/Quick_create_label.gif)

:::note

Labels created via **Quick Create Label** feature use default minimal settings and can be assigned only to the entity level where it was created. You can modify these settings later by navigating to **Settings -> Labels&Fields**.

:::

Example of default settings for Label, created via **Quick create label** feature on Suite level:

![Testomatio - Quick Create Label](./images/Quick_create_label_settings.png)

## How to Setup a Custom Field

There are such Field Types in Custom Fields: List, Number, and String. Let's take a look at each type.

### Custom Field: List

Custom Field with List type allows creating a list of your choice. You can put there any values to meet your testing needs. 

1. Select a List type of Custom Field.
2. Add a new item per line.
3. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title.
4. Click Save button.

![Testomatio - Custom Field List](./images/Custom_Field_List.png)

### Custom Field: Number

1. Select a Number type of Custom Field.
2. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title.
3. Click Save button.

![Testomatio - Custom Field Number](./images/Custom_Field_Number.png)

### Custom Field: String

1. Select a String type of Custom Field.
2. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title.
3. Click Save button.

![Testomatio - Custom Field String](./images/Custom_Field_String.png)

## How to Assign Labels & Custom Fields

- Add labels on the entity level

1. Open a Suite/ Test.
2. Click Extra button.
3. Click Labels.

![Testomatio - Assign Label & Custom Field](./images/Assing_Label.png)

4. Select Labels & Custom Fields.

![Testomatio - Assign Label & Custom Field](./images/Set_Labels.png)

- Mass-assign labels using our multiselection mode

1. Enable multiselection mode.
2. Select Tests/ Suites.
3. Click Labels button.

![Testomatio - Multi-assign Label & Custom Field](./images/Mass_assign.png)

4. Select Labels & Custom Fields.
5. Click Add.

![Testomatio - Multi-assign Label & Custom Field](./images/Mass_assign_set_label_temporary.png)

## How to Filter by Labels

You can click the Label on the Filter Bar

![Testomatio - Filter Label & Custom Field](./images/Filter_by_label_1.png)

Or enable Filters, pick fields and values then click Apply

![Testomatio - Filter Label & Custom Field](./images/Filter_by_label_2.png)

## Multiple Values for Custom Fields

There might be cases where you need to assign the same label with different values to the same test case or suite. 

To address this, Testomat.io enhanced the flexibility of Custom Fields by allowing multiple values to be assigned to test cases, suites, steps, etc.

Lets see how this works:

1. Open Test Case or Suite.
2. Click Extra button.
3. Click Labels.
4. Select Custom Field with multiple values.
5. Choose a value (type value and click Enter if you use Custom Field Number or String).
6. Choose the same Custom Field with another value.

![Testomatio - Multi-select Custom Field](./images/Multi-select_custom_field.gif)

Testomat.io also allows you to filter your test cases by one or a few Custom Field values.

![Testomatio - Multi-select Custom Field Filtering](./images/Custom_field_filter.gif)

## Tags vs Labels: What to Choose

While both tags and labels help organize and categorize your tests, they serve slightly different purposes and excel in different situations. Understanding these differences can help you make the most of them.

#### Key Differences:

| Criteria | Tag | Label |
|---|---|---|
| Purpose | To categorize and/or organize tests | To identify meta data related to tests or object |
| Generality | More general | More specific |
| Applications | More for automated tests less for manual | More for manual tests, less for automated |
| Usage | Less flexible for describing specific details. More constant | More flexible, easy to change and manage, can have complex types and multiple values |
| Use cases | Catigorization, filtering, search, test plans, coverage, analytics | Track the progress, maintain, review, steps, runs, collaboration |


The choice between Tags and Labels depends on your specific needs. For automated tests and broad categorization, Tags are the better choice

Conversely, Labels offer greater flexibility. You can mark test cases/ suites without altering their titles, customize Labels with various data types, and even assign multiple values to a single Label. 

By understanding their strengths, you can leverage both Tags and Labels effectively to organize and manage your testing efforts.

