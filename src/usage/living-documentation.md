---
permalink: /usage/living-documentation
title: Living Documentation
editLink: false
---

# Living Documentation

Testomatio allows generating Living Documentation which is a dynamic document that provides information that is current, accurate, and easy to understand.

## How To Enable Living Documentation

Living Documentation can be enabled in Project Settings:

1. Go to Settings
2. Click on the Project tab
3. Click on the Enable Live Documentation checkbox
4. Click on the Update button
5. See the confirmation and generated link for Living Documentation

![image](https://user-images.githubusercontent.com/77803888/126028691-257eb2a2-c8c2-43af-8cb4-260afecf6ea9.png)

![image](https://user-images.githubusercontent.com/77803888/126028734-59df8280-2224-405f-960c-6a5de4a4b7d9.png)

### How to embed living documentation
Living documentation can be embedded into your website, you have a possibility to:
1. Embed specific suite
2. Embed specific test
3. Embed tests with a specific tag or jira id

## Suite

To embed a suite you have to go to a suite page in living documentation and press the button
![изображение](https://user-images.githubusercontent.com/23012652/126430924-638d2024-24a5-4e4b-bd8c-7643cbe75a7f.png)
![изображение](https://user-images.githubusercontent.com/23012652/126430962-a9691684-0f19-4e35-bbf4-cc935182ab7e.png)
Now embed URL is in your clipboard

## Test

To embed a test you have to go to a test page and press the button
![изображение](https://user-images.githubusercontent.com/23012652/126431106-f74c837a-1294-469f-ad3c-0f7647790102.png)
![изображение](https://user-images.githubusercontent.com/23012652/126431136-c366780f-42e9-462e-a1fd-4f40ac03bfa9.png)
Now embed url is in your clipboard

## Tests by Tag or Jira ID

To embed tests by @smoke tag you need to follow this template (don't forget to replace {project_slug} with the real value):

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?tag=@smoke"></iframe>
```

To embed test with jira id you need to follow this template (don't forget to replace {project_slug} and {jira_id} with the real values):

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?jira_id={jira_id}"></iframe>
```

## Tests parameters
You can provide extra parameters in the query string:

1. frame_params[expand_all] - expand all tests by default
2. frame_params[hide_code] - hide code in tests
3. frame_params[hide_description] - hide description in tests
4. frame_params[hide_attachments] - hide attachments in tests

E.g. 

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?tag=@smoke&frame_params[expand_all]=1&frame_params[hide_code]=1"></iframe>
```