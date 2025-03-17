---
title: Okta
description: Learn how to configure Okta Single Sign-On (SSO) with Testomat.io using SAML authentication. This guide explains setting up the integration, assigning users, configuring identity provider details, and troubleshooting for seamless access to your Testomat.io projects.
type: article
url: https://docs.testomat.io/integrations/single-sign-on/okta
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/194427516-2a6336b7-f419-4390-a1a4-30ce528045ba.9RNoCLUD_DRdDW.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, Okta, SSO, Single Sign-On, SAML, identity provider, user authentication, company domain, project assignment, integration setup, test management, security
---

Okta authorization can be enabled via SAML. As a prerequisite a [company](https://docs.testomat.io/subscriptions/companies/) for your domain should be created on Testomat.io. 

Log in to Okta as Administrator and **Create Application Integration**

![2022-10-06_11-52](././images/194427516-2a6336b7-f419-4390-a1a4-30ce528045ba.png)

Choose **SAML 2** as sign-in method

![2022-10-06_11-52_1](././images/194427643-4af9baff-2934-4b5f-a972-b29c706212c1.png)

Set "Testomat.io" as the application name and click "Next"

![image](././images/194428326-ba6d0b70-5f36-4a7e-bee2-cc83266c2a85.png)

In the next step, you need to set values for **Single sign on URL**:

```
https://app.testomat.io/users/saml/auth
```

and **Audience URI (SP Entity ID)**:

```
https://app.testomat.io/users/saml/metadata
```

![Alt text](./images/image-1.png)

Specify the **Attribute Statements**:

* `email` should be set to `user.email`
* `name` should be set to `user.firstName + " " + user.lastName`

![2022-10-06_12-29](./images/194431376-68ce56b2-9056-4057-8e9d-3cd2d7709351.png)

Click "Next" to proceed.

On the lastest step check **I'm an Okta customer adding an internal app**

![2022-10-06_12-30](./images/194430057-41f53e5e-b522-4c2c-86a7-351a252a275e.png)

And finish the integration of application.

After interaction was saved click **View SAML setup instructions**

![2022-10-06_12-31](./images/194430131-d1c72622-0a5b-4fda-9217-45d2d2f192be.png)

The following information is needed to proceed with integration.

* **Identity Provider Single Sign-On URL**
* **Identity Provider Issuer**
* **X.509 Certificate**

![Alt text](./images/image-2.png)

Assign users to this application so they could join Testomat.io:

![Alt text](./images/image-7.png)


Now, open Company page in Testomat.io and select Single Sign On options

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to(optional).
3. Enable SAML:

![Alt text](./images/image-6.png)

4. Set **Identity Provider Issuer** from Okta as **IdP Entity ID**
5. Set **Identity Provider Single Sign-On URL** from Okta as **Sign In URL**
6. Upload certificate.

![Alt text](./images/image-5.png)

7. Set `Authn Context` by selecting "Password Protected Transport". The actual value should become:

```
urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
```

![alt text](./images/image-17.png)

And save the form.

Now, use any assigned user from Okta to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

> In case user sees 404 page on Okta, check that Single Sign-On URL was correctly set.