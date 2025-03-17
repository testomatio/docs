---
title: Google Workspace
description: Learn how to configure Google Workspace Single Sign-On (SSO) for Testomat.io using SAML authentication. The guide explains the steps to create a custom SAML app, map user attributes, set up the SSO connection, and enable seamless access for company users.
type: article
url: https://docs.testomat.io/integrations/single-sign-on/google
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/image-9.CKQEsfJP_Z1D7nMH.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Google Workspace, Testomat.io, SSO, Single Sign-On, SAML, user authentication, identity provider, company domain, attribute mapping, test management, integration setup, security
---

Inside Google Admin open **Apps** > **Web & Mobile Apps**:

![Alt text](./images/image-9.png)

Add Custom SAML App.

Use "Testomatio" as **App Name** and continue

![Alt text](./images/image-10.png)

Copy the following information:

* **SSO URL**
* **Entity ID**
* **Certificate** should be downloaded as file

And continue.

![Alt text](./images/image-11.png)

On this step fill the form:

* **ACS URL**: `https://app.testomat.io/users/saml/auth`
* **Entity ID**: `https://app.testomat.io/users/saml/metadata`

![Alt text](./images/2023-10-04_19.14.58@2x.png)

On the next page add attributes mappings:

* Add `email`
* Last name as `last_name`
* First name as `first_name`

![Alt text](./images/image-13.png)

Finish set up.

Now, open Company page in Testomat.io and select Single Sign On options

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to(optional).
3. Enable SAML:

![Alt text](./images/image-6.png)

4. Set **Entity ID** you copied previously as **IdP Entity ID**
5. Set **SSO URL** you copied previously as **Sign In URL**
6. Upload certificate.

![Alt text](./images/image-5.png)

And save the form.

Now, use any assigned user from Okta to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.