---
title: Living Documentation
---

Testomatio allows generating Living Documentation which is a dynamic document that provides information that is current, accurate, and easy to understand.

## How To Enable Living Documentation

Living Documentation can be enabled in Project Settings:

1. Go to Settings
2. Click on the Project tab
3. Click on the Enable Live Documentation checkbox
4. Click on the Update button
5. See the confirmation and generated link for Living Documentation

![image](./images/126028691-257eb2a2-c8c2-43af-8cb4-260afecf6ea9.png)

![image](./images/126028734-59df8280-2224-405f-960c-6a5de4a4b7d9.png)

## How To Embed Living Documentation

Living documentation can be embedded into your website, you have a possibility to:

- Embed specific suite
- Embed specific test
- Embed tests with a specific tag or Jira id

## Suite

To embed a suite you have to go to a suite page in living documentation and press the button

![image](./images/130801014-45e91892-25a5-474b-9d49-031a6be18401.png)

Now embed URL is in your clipboard

![image](./images/130801649-8e99f6ff-1632-44c7-a057-105c8dd2c2b8.png)

## Test

To embed a test you have to go to a test page and press the button

![image](./images/130801915-38fdf9d1-d241-47ff-9424-fd40abe7e55d.png)

Now embed URL is in your clipboard

![image](./images/130802115-186917ac-ca9c-4200-80f9-bcaea4ae30a0.png)

## Tests by Tag or Jira ID

To embed tests by `@smoke` tag you need to follow this template (don't forget to replace {project_slug} with the real value):

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?tag=@smoke"></iframe>
```

To embed test with Jira id you need to follow this template (don't forget to replace {project_slug} and {jira_id} with the real values):

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?jira_id={jira_id}"></iframe>
```

## Tests parameters

You can provide extra parameters in the query string:

1. frame_params[expand_all] - expand all tests by default
2. frame_params[hide_code] - hide code in tests
3. frame_params[hide_description] - hide description in tests
4. frame_params[hide_attachments] - hide attachments in tests

Example

```
<iframe src="https://beta.testomat.io/docs/projects/{project_slug}/tests/embed?tag=@smoke&frame_params[expand_all]=1&frame_params[hide_code]=1"></iframe>
```

## Embed Link For Confluence 

With Testomat.io Living documentation, you can enrich your Confluence by adding tests or suites.
This can be done within a Confluence page:

1. click on the Insert button
2. type 'iframe' in search field
3. pick Iframe plugin

![image](./images/130810167-eb154e62-2722-425f-b469-72acdd83b2f8.png)

4. enter the embed URL you generated in the Living documentation
5. fill in the fields of your choice
6. click on Publish button

![image](./images/130811206-e30402e6-5fc2-4dd2-9638-8e5152813898.png)

Example 

![image](./images/130814083-bab61314-ecd0-4510-858a-54eafdbe5418.png)




