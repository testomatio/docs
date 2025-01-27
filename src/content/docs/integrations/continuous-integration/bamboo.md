---
title: Atlassian Bamboo
description: This guide explains integrating Atlassian Bamboo with Testomat.io for continuous integration. It includes configuring Bamboo plans, setting environment variables, and running tests with the CodeceptJS framework. Steps to connect Bamboo to Testomat.io via API keys and enable reporting are also provided.
type: article
url: https://docs.testomat.io/integrations/continuous-integration/bamboo
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/107243443-02fe9280-6a53-11eb-91e9-862a30c8daa3.BauIFFjd_yu79I.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Atlassian Bamboo, Testomat.io, CI integration, continuous integration, CodeceptJS, test automation, API token, environment variables, test reporting, Bamboo plan setup
---

Let's configure Bamboo CI server to work for CodeceptJS framework:

1. Create a plan for testomatio to run in testomatio

![Configure](./images/107243443-02fe9280-6a53-11eb-91e9-862a30c8daa3.png)

2. Note the plan key. In this case its "TES"
3. Configure the job to install node dependencies
![install](./images/107244050-9f289980-6a53-11eb-8942-f508c2f643ce.png)

4. Add the script to run codeceptJS tests:

```
TESTOMATIO_RUN=${bamboo.run} npx codeceptjs run --grep "${bamboo.grep}"
```
Following environment variables must be set:

* **Add `TESTOMATIO` environment variable with API key of Testomatio project.**
* If you are running a self-hosted Testomatio instance, add `TESTOMATIO_URL` variable to specify a host to which reports will be sent.

![Script](./images/107244927-95536600-6a54-11eb-94d7-812ddbe6d917.png)

5. Set an input variable. Open Plan configuration:

![image](./images/113134762-e2b8ac00-9229-11eb-863c-21697595ae04.png)

add  `grep` and `run` variables with an empty string as a default value

![image](./images/113135720-1f38d780-922b-11eb-9fda-1efe77951d98.png)

Now, configure Bamboo integration at Testomatio:

1. Go to settings > CI and enter the details of Bamboo server. [Check this](https://confluence.atlassian.com/bamboo/personal-access-tokens-976779873.html) to generate API token

![CI settings](./images/107245863-a51f7a00-6a55-11eb-89d9-52f66402ba0f.png)

A project and plan keys can be found from URL:

![image](./images/108208802-2ea80980-7132-11eb-9315-cf0465826f55.png)

2. Enable `run` option on Input Variables tab. This allows CI to send a report to a specific Run inside Testomatio.

![image](./images/113136335-ebaa7d00-922b-11eb-9012-72d0d9646380.png)

You can pass more input variables if you set them in [Environment Configuration](./index.md#environment-configuration)

3. Open Runs page (or any test or suite) then select `Run in CI` option in extra menu.

![image](./images/113136648-46dc6f80-922c-11eb-9e72-3a3356c5f647.png)

Select "Bamboo" profile in a list. Optionally, configure a Run Title and select a Test Plan.

![image](./images/113136785-6f646980-922c-11eb-9dc0-d001bdf13610.png)

4. Launch a run and wait for the results.

![Runs view](./images/107249055-f67d3880-6a58-11eb-9794-539cfa797002.png)
