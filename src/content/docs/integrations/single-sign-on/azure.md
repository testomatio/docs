---
title: Microsoft Entra ID (formerly Azure AD)
description: Learn how to set up Single Sign-On (SSO) for Testomat.io with Microsoft Entra ID (formerly Azure AD) using SAML authentication. This guide explains configuring the Azure portal, mapping user attributes, assigning users, and setting up the SSO connection in Testomat.io to enable secure and seamless user access.
type: article
url: https://docs.testomat.io/integrations/single-sign-on/azure
head:
  - tag: meta
    attrs:
      name: og:image
      content: https://docs.testomat.io/_astro/image-14.D25uAC23_ZByl9V.webp
      
  - tag: meta
    attrs:
      name: keywords
      content: Azure AD, Microsoft Entra ID, Testomat.io, SSO, Single Sign-On, SAML, user authentication, identity provider, attribute mapping, company domain, integration setup, test management, security
---

Open Azure portal and search for Entra ID service:

![EntraID](./images/image-14.png)

Add new Enterprise application

![Alt text](./images/image-16.png)

On the next screen create a new Application

![Create Application](./images/image-15.png)

Enter the "Testomat" as the name of integration, select Integrate any other application you don't find in the gallery (Non-gallery) and click Create. 

Select **Single Sign On** on the left and click "SAML" to configure connection settings.

On the **Basic SAML Configuration** fill in following values

* `Identifier (Entity ID)` → `https://app.testomat.io/users/saml/metadata`
* `Reply URL (ACS URL)` → `https://app.testomat.io/users/saml/auth`
* `Sign on URL` → `https://app.testomat.io/users/sso`


Save this form. Now edit **Attributes & Claims**.

Remove default attributes.

Add the following attributes that will be sent to Testomat.io:

* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` → `email`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`         → `name`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`    → `first_name`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname`      → `last_name`


Close the dialog. 

On **SAML Signing Certificate** card download **Certificate (Base 64)**.

On **Set up Testomat** card copy following values

* **Login URL** 
* **Azure ID Idenitifier** 

Add Users to application on the **Users and Groups** section in sidebar. This users will be able to log in to Testomat.io via SAML.

Now, open Company page in [Testomat.io](https://app.testomat.io/companies) and select Single Sign On options

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to (optional).
3. Enable SAML:

![Alt text](./images/image-6.png)

4. Set **Azure ID Idenitifier** (or Azure Entra ID) from Microsoft Entra ID (formerly Azure AD) as **IdP Entity ID**. Should be like `https://sts.windows.net/.../` (ensure it ends with `/`)
5. Set **Login URL** from Microsoft Entra ID as **Sign In URL**
6. Upload certificate.

![Alt text](./images/image-5.png)

7. Set `Authn Context` by selecting "Password Protected Transport". The actual value should become:

```
urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
```

![alt text](./images/image-17.png)

And save the form.


Now, use any assigned user from Microsoft Entra ID (formerly Azure AD) to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

> In case user sees 404 page on Microsoft Entra ID (formerly Azure AD), check that Single Sign-On URL was correctly set.
