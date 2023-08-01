---
permalink: /integration/okta-connection
title: Okta Connection
editLink: false
---

# Okta Connection

Okta authorization can be enabled via SAML. As a prerequisite a [company](https://docs.testomat.io/subscriptions/companies/) for your domain should be created on Testomat.io. 

Log in to Okta as Administrator and **Create Application Integration**

![2022-10-06_11-52](/assets/194427516-2a6336b7-f419-4390-a1a4-30ce528045ba.png)

Choose **SAML 2** as sign-in method

![2022-10-06_11-52_1](/assets/194427643-4af9baff-2934-4b5f-a972-b29c706212c1.png)

Set "Testomat.io" as the application name and click "Next"

![image](/assets/194428326-ba6d0b70-5f36-4a7e-bee2-cc83266c2a85.png)

In the next step, you need to set values for **Single sign on URL**. Use the following URL format and replace <COMPANY_NAME> with a name of your company (use one word). 

```
https://testomatio.us.auth0.com/login/callback?connection=<COMPANY_NAME>
```

⚠️ This word will be used on Testomat.io side for connection so please **inform the Testomat.io team which COMPANY_NAME have you used**.

As Audience URI (SP Entity ID) use the following value:

```
urn:auth0:testomatio:<COMPANY_NAME>
```
> Replace <COMPANY_NAME> with your actual company name same as in value above.


Specify the **Attribute Statements**:

* `id` should be set `user.login`
* `name` should be set to `user.firstName + " " + user.lastName`
* `email` should be set to `user.email`

![2022-10-06_12-29](/assets/194431376-68ce56b2-9056-4057-8e9d-3cd2d7709351.png)

Click "Next" to proceed.

On the lastest step check **I'm an Okta customer adding an internal app**

![2022-10-06_12-30](/assets/194430057-41f53e5e-b522-4c2c-86a7-351a252a275e.png)

And finish the integration of application.

After interaction was saved click **View SAML setup instructions**

![2022-10-06_12-31](/assets/194430131-d1c72622-0a5b-4fda-9217-45d2d2f192be.png)

The following information is needed by Testomat.io Team to proceed with integration.

* **Identity Provider Single Sign-On URL**
* **X.509 Certificate**

![image](/assets/194430424-d9b5a8ea-cc7c-4abc-96a1-7f4bb985fe03.png)

Please copy them and **send to Testomat.io team**, this is required to establish connection on our side. 

⚠️ To sum up this is the **information Testomat.io requires to proceed integration**:

* <COMPANY_NAME> value
* **Identity Provider Single Sign-On URL**
* **X.509 Certificate**

After Testomat.io team confirmed the integration you may try to invite users to the application. Use Okta interface to allow user or group access to Testomat.io application.

![image](/assets/194430955-259faf69-2fe2-49a2-93f1-223a9edb1e69.png)

These users should also be [invited from Testomat.io](https://docs.testomat.io/subscriptions/companies/#how-to-invite-a-user-to-a-company) from a company page.

After everything is configured, and users are invited use Single Sign-On button to log in into Testiomat.io

![image](/assets/193945922-c6ed5091-7482-4358-a3a0-3cbdbb86e411.png)

