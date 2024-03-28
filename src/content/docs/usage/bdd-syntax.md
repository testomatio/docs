---
title: BDD syntax
---

Testomat.io provides a user-friendly tool for Behavior-driven development. Here you can find a quick Gherkin Syntax reference.

## Keywords

Gherkin uses a set of special **keywords** to give structure and meaning to executable specifications. Each line that isn’t a blank line has to start with a **Gherkin keyword**, followed by any text you like. The only exceptions are the **feature** and **scenario** descriptions. The primary keywords are:
`Feature:`
`Rule:`
`Scenario:`
`Given`, `When`, `Then`, `And`, `But` for steps (or *)
`Background:`
`Scenario Outline:` (or `Scenario Template:`)
`Examples:` (or Scenarios)

Also, you should remember these rules:

- **The keyword names are case-sensitive.** This means that writing _**Scenario outline**_ instead of **Scenario Outline** or _**scenario**_ instead of **Scenario** will lead to an error.
- Do not forget to use` : `after keywords that imply descriptions.
- Both feature and scenario descriptions can be multiline. The text in the first line after the Feature and Scenario keywords is called the feature or scenario name. The other lines are called a feature description (or scenario description).
- Each .feature file can have only one Feature element.

