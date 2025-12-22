---
title: Labels and Custom Fields
description: Learn how to use labels and custom fields in Testomat.io to organize and categorize tests, suites, runs, plans, and steps. This guide covers creating and setting up labels with specific scope and visibility, as well as configuring custom fields with List, Number, and String types. It also explains how to assign labels in bulk, make them required by default, filter by them, and manage user permissions for enhanced project organization and security.
type: article
url: https://docs.testomat.io/advanced/tags-labels/labels-and-custom-fields
head:
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, tags, labels, custom fields, Filter visibility, List visibility, Assign Labels, Mass-assign labels, filter by labels, Required Labels, Labels Permission, test management, categorization, testing workflow, custom data, test organization, filter tests, QA, test case management
---

## How to Add Labels & Custom Fields

Labels can be easily added in Project Settings

1. Go to Settings.
2. Select Labels & Fields.
3. Enter a title for the label.
4. Click Create button.

![Testomatio - Add Label](./images/Create_Labels.png)

## How to Setup a Label

Before setting up Labels & Custom Fields we need to learn about **Scope** and **Visibility** parameters.

**Scope** defines what pages you want to apply the Label & Custom Field. Here you can define on what pages you want to use it. You can apply it to tests, suites, runs, plans, steps and templates.

![Testomatio - Setup Label](./images/Labels.png)

**Visibility** defines how a Label & Custom Field should be shown in UI.

- Filter visibility will show a Label or Custom Field in the Filter Bar, so you can sort your items quickly.
- List visibility will show a Label or Custom Field in the tests tree, a list of runs, plans, or steps.

![Testomatio - Setup Label](./images/Visibility_Labels.png)

Now it's time to set up your label!

1. Scope - pick entities you want this label to be applied.
2. Visibility - labels can be shown in the Filter bar, in the list of entities, or in both views.
3. Custom Field - expand label capability to a custom field.

![Testomatio - Setup Label](./images/Setup_Labels.png)

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

4. Select Labels.
5. Click Add Custom Field.
6. Select Custom Fields.
7. Click Save button.

![Testomatio - Assign Label & Custom Field](./images/Set_Labels.gif)

OR:

1. Open a Suite/ Test.
2. Click Set Labels button the title name.
3. Select Labels & Custom Fields.
4. Click Save button.

![Testomatio - Assign Label & Custom Field](./images/Set_Labels_2.gif)

- Mass-assign labels using our multiselection mode

1. Enable multiselection mode.
2. Select Tests/ Suites.
3. Click Labels button.

![Testomatio - Multi-assign Label & Custom Field](./images/Mass_assign.png)

4. Select Labels & Custom Fields.
5. Click Add.

![Testomatio - Multi-assign Label & Custom Field](./images/Mass_assign_set_1.png)

:::note

To edit Labels & Custom fields or add a new one click **Manage labels** button directly from **Set Labels** page -> it will redirect you to **Labels** page.

:::

![Testomatio - Multi-assign Label & Custom Field](./images/Manage_Labels.png)

## How to Set Up Labels and Custom Fields as Required

If you want to have some **Custom Fields** as required by default when creating Test Cases or Suites, create a Template with those **Custom Fields** and set it up as the default:

1. Go to Settings -> Templates.
2. Open an existing Template or create a new one.
3. Enable Default option.
4. Select **Custom Fields** you want to make required.
5. Click Update button.

![Testomatio - Required Labels](./images/Required_Labels.png)

6. Go to Tests.
7. Click '+' to create new Test Case.
8. Add values to Custom fields via Set Labels page.

![Testomatio - Required Labels](./images/Required_Labels_2.gif)

## How to Filter by Labels and Custom Fields

You can click the Label on the Filter Bar

![Testomatio - Filter Label & Custom Field](./images/Filter_by_label_1.png)

Or enable Filters, pick fields and values then click Apply

![Testomatio - Filter Label & Custom Field](./images/Filter_by_label_2.png)

:::note

In case you need to filter your test cases by a few Labels and Custom Fields with multiple values, Testomat.io recommends using TQL for such search queries.

:::

## Multiple Values for Custom Fields

There might be cases where you need to assign the same label with different values to the same test case or suite.

To address this, Testomat.io enhanced the flexibility of Custom Fields by allowing multiple values to be assigned to test cases, suites, steps, etc.

Lets see how this works:

1. Open Test Case or Suite.
2. Click Extra button.
3. Click Labels.
4. Select Custom Field with multiple values.
5. Choose values from the displayed list for List Custom Field (or type a few values, separated by "," for Custom Field String).

![Testomatio - Multi-select Custom Field](./images/Multi-select_custom_field.gif)

Testomat.io also allows you to filter your test cases by one or a few Custom Field values.

![Testomatio - Multi-select Custom Field Filtering](./images/Custom_field_filter.gif)

## Permissions for Labels and Custom Fields

To manage Labels and Custom Fields at the Project level, Testomat.io introduces 'Labels Permission' feature, which allows you to have a better control over metadata, maintain consistency, and prevent unauthorized modifications of Labels and Custom Fields.

By default, this permission is disabled, allowing all users to create, edit, or delete Labels and Custom Fields. However, if the **Labels Permission** is enabled, only users with the **Owner** or **Manager** roles can create, edit, or delete Labels and Custom Fields. Team members with lower access levels can still use existing Labels and Custom Fields but will not be able to alter them.

This feature improves project organization, enhances security, and streamlines collaboration by ensuring structured and standardized test management.

To enable **Labels Permission** on Project level:

1. Open your project and go to Settings.
2. Select Project.
3. Enable **Labels permission**.

![Testomatio - Label Permission](./images/Permissions.png)

:::note

The **Owner** and **Manager** roles should be assigned to users in **Project Settings -> Users**.

:::

![Testomatio - Users](./images/Users.png)
