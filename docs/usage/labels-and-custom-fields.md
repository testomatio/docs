---
permalink: /usage/labels-and-custom-fields
title: Labels And Custom Fields
editLink: false
---

# Labels And Custom Fields

Labels & Custom Fields are powerful features in a test management system that allow users to categorize and organize their testing data.

**Labels** are keywords or phrases that can be applied to individual tests or test suites to provide an at-a-glance summary of the test's status, type, priority, or any other relevant information. Labels make it easy for users to filter and sort their tests to quickly find what they need.

**Custom fields**, on the other hand, are user-defined fields that can be added to a test case to capture specific information. For example, custom fields can be used to store information such as the tester's name, the expected result, the test environment, or the date the test was last run. Custom fields make it possible for users to tailor the test management system to their specific needs, and to store and retrieve data in a consistent and meaningful way.

Labels & Custom Fields can help users to streamline their testing process, increase the accuracy of their test data, and make it easier to find and analyze the information they need.

## How To Add Labels & Custom Fields

Labels can be easily added in Project Settings

1. Go to Settings
2. Pick Labels & Custom Fields
3. Enter a title for the label
4. Click Create

![CleanShot 2023-02-01 at 19 29 11@2x](images/216118898-c2ead11f-b9a2-44b5-919b-183176893c25.jpg)

## How To Setup A Label

Before setting up Labels & Custom Fields we need to learn about **Scope** and **Visibility** parameters.

**Scope** defines what pages you want to apply the Label & Custom Field. Here you can define on what pages you want to use it. You can apply it to tests, suites, runs, plans, and steps.

![CleanShot 2023-02-02 at 09 34 16@2x](images/216260430-126dd8e8-63a3-4b25-b3c5-c031b445ba5b.jpg)

**Visibility**  defines how a Label & Custom Field should be shown in UI. 

- Filter visibility will show a Label or Custom Field in the Filter Bar, so you can sort your items quickly.
- List visibility will show a Label or Custom Field in the tests tree, a list of runs, plans, or steps.

![CleanShot 2023-02-02 at 09 49 50@2x](images/216263721-7d2ec56c-e93f-4fa8-b422-826c78620e62.jpg)


Now it's time to set up your label!

1. Scope - pick entities you want this label to be applied
2. Visibility - labels can be shown in the Filter bar, in the list of entities, or in both views
3. Custom Field - expand label capability to a custom field

![CleanShot 2023-02-01 at 19 42 46@2x](images/216122416-d0dfc88a-41c2-4d6c-910c-d3a58a6d9cd8.jpg)

## How To Setup A Custom Field

There are such Field Types in Custom Fields: List, Number, and String. Let's take a look at each type.

### Custom Field: List

Custom Field with List type allows creating a list of your choice. You can put there any values to meet your testing needs. 
1. Pick a List type of Custom Field
2. Add a new item per line
3. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title
4. Click Save

![CleanShot 2023-02-01 at 20 15 52@2x](images/216128418-385fd425-18b9-4e47-9fbf-4f9bfa8a1b90.jpg)

### Custom Field: Number

1. Pick a Number type of Custom Field
2. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title
3. Click Save

![CleanShot 2023-02-01 at 20 19 37@2x](images/216129045-e65206c1-c271-40cf-8fdd-2173dd475a17.jpg)

### Custom Field: String

1. Pick a String type of Custom Field
2. Toggle **Hide custom field title if value is set** if you don't want to show Custom Field title
3. Click Save

![CleanShot 2023-02-01 at 20 20 49@2x](images/216129784-0b238427-9a86-4a70-9efc-ff5052770294.jpg)

## How To Assign Labels & Custom Fields

- Add labels on the entity level

1. Open a suite/ test
2. Click Extra button
3. Click Labels 

![CleanShot 2023-02-01 at 20 41 15@2x](images/216133765-c2d6d012-bd63-454a-9dec-07a163f67713.jpg)

4. Pick Labels & Custom Fields

![CleanShot 2023-02-01 at 20 44 39@2x](images/216134503-43fab8bd-da32-4b06-9875-cba56de22ca0.jpg)

- Mass-assign labels using our multiselection mode

1. Enable multiselection mode
4. Pick tests/ suites
5. Click Labels button

![CleanShot 2023-02-01 at 20 34 21@2x](images/216132278-17b886e4-9b6d-4afc-818d-431884c116c1.jpg)

4. Pick Labels & Custom Fields
5. Click Add

![CleanShot 2023-02-01 at 20 37 05@2x](images/216132725-7d129307-e1f1-4fae-a6b5-4454efc2db7f.jpg)

## How To Filter By Labels

You can click the Label on the Filter Bar

![CleanShot 2023-02-01 at 20 49 50@2x](images/216135753-4033ed5d-4344-4d28-bc74-9b2446ac3b07.jpg)

Or enable Filters, pick fields and values then click Apply

![CleanShot 2023-02-01 at 20 53 35@2x](images/216136782-bbd2b782-a269-4494-9afe-4b5d3e6991ad.jpg)


