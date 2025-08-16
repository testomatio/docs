---
title: Tags
description: Learn how to create and assign tags in Testomat.io to organize test cases and suites. This guide explains the process of adding tags directly in the title, using autocomplete for existing tags, and refreshing the tag list. It also covers how to filter test cases by one or more tags for efficient test management and searching.
type: article
url: https://docs.testomat.io/advanced/tags-labels/tags
head: 
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, tags, labels, custom fields, test management, filter by tags,categorization, testing workflow, custom data, test organization, filter tests, QA, test case management.
---

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

## Tag Extraction Rules in Titles

When writing titles, Testomat.io automatically detects tags marked with the `@` symbol. However, not every `@` occurrence is considered a valid tag.
Below are detailed examples showing when tags **are recognized** and when they are **ignored**.

**✅ Valid Tag Examples**

```text
"title with a simple @tag and some other @tag1"
→ tags: ["tag", "tag1"]

"@tag1 supertitle with leading tag and @tag inside title"
→ tags: ["tag1", "tag"]

"title with commed taglist @tag1: @tag2."
→ tags: ["tag1", "tag2"]

"title with commed taglist @tag1, @tag2.asd"
→ tags: ["tag1", "tag2.asd"]

"title @tag1. zxc"
→ tags: ["tag1"]

"title @tag1.asd zxc"
→ tags: ["tag1.asd"]
```

**🚫 Ignored or Invalid Tags**

```text
"title with email test@test.test"
→ tags: []

"some_text_@tag"
→ tags: []

"some_text-@tag"
→ tags: []

"some_text*@tag"
→ tags: []
```

**➕ Math Operators in Tags**

```text
"title with commed taglist @tag1+@tag2=@tag3"
→ tags: ["tag1"]

"title with commed taglist @tag1-@tag2=@tag3"
→ tags: ["tag1"]

"title with commed taglist @tag1*@tag2=@tag3"
→ tags: ["tag1"]

"title with commed taglist @tag1=@tag2=@tag3"
→ tags: ["tag1"]

"'title @tag1=:-.( asd"
→ tags: ["tag1"]

"'title @tag1=:-.) asd"
→ tags: ["tag1=:-.)"]
```

**🔗 Tags Inside and Outside Brackets**

**Outside brackets (ignored):**

```text
"some_text (sometext)@tag1 [sometext]@tag3"
→ tags: []
```

**Inside brackets (partially detected):**

```text
"title (text @tag1)asda other text"
→ tags: ["tag1)asda"]

"title (text @tag1) asda"
→ tags: ["tag1)"]

"title (text @tag1( asda"
→ tags: ["tag1"]

"title [text @tag1]asda"
→ tags: ["tag1"]

"title [text @tag1] asda"
→ tags: ["tag1"]
```
With these rules, you can better understand how tags are parsed from titles and avoid common pitfalls such as emails, operators, or invalid symbols.

## Best Practices for Using Tags in Titles

To ensure your tags are recognized consistently and remain easy to manage:

* **Use simple words** → keep tags short, lowercase, and descriptive (e.g., `@smoke`, `@regression`).
* **Avoid special characters** → symbols like `+`, `-`, `*`, `_`, or `=` can break parsing or truncate tags.
* **Don’t use emails or URLs** → anything in the form `name@domain.com` is ignored.
* **Separate tags with spaces or commas** → `@smoke, @ui` is correctly detected, while `@smoke@ui` may not be.
* **Prefer placing tags at the end of titles** → improves readability and reduces the chance of misparsing inside brackets or punctuation.
* **Keep consistency across your project** → agree on a common set of tags within your team to make filtering and reporting easier.

