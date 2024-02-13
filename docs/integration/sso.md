---
permalink: /integration/sso
title: Single Sign On
editLink: true
---

## Single Sign On

Single Sign On is **enterprise** feature that allows you to login users from your Identity Provider into Testomat.io. All new members will be auto-provisioned. If you reach limit of paid seats, all new members will be added as `read-only`. So no matter of how many peoples joined, you won't be charged more than your current plan. You can manage your seats, and specify which users should be active and which to be read-only on your [Company Members](https://docs.testomat.io/subscriptions/companies/#how-to-invite-a-user-to-a-company) page.

This guide shows how to set up SSO connection via SAML for various SAML providers

### Prerequisites

* You have a company in Testomat.io, and you are [**owner of this company**](/subscriptions/companies#roles-within-a-company).
* Company is on an enterprise plan.
* You have SAML identity provider like Okta or Google Workspace (formerly called G Suite)
* You and all potential company members use emails from the same domain name (like: user1@companyname.com, user2@companyname.com, etc)

If you are ready, proceed to configure identity provider:

* [Okta](#okta)
* [Google Workspace](#google-workspace)
* [Azure AD](#azure-ad)
* [Custom SAML](#custom-saml)

### Okta


Okta authorization can be enabled via SAML. As a prerequisite a [company](https://docs.testomat.io/subscriptions/companies/) for your domain should be created on Testomat.io. 

Log in to Okta as Administrator and **Create Application Integration**

![2022-10-06_11-52](images/194427516-2a6336b7-f419-4390-a1a4-30ce528045ba.png)

Choose **SAML 2** as sign-in method

![2022-10-06_11-52_1](images/194427643-4af9baff-2934-4b5f-a972-b29c706212c1.png)

Set "Testomat.io" as the application name and click "Next"

![image](images/194428326-ba6d0b70-5f36-4a7e-bee2-cc83266c2a85.png)

In the next step, you need to set values for **Single sign on URL**:

```
https://app.testomat.io/users/saml/auth
```

and **Audience URI (SP Entity ID)**:

```
https://app.testomat.io/users/saml/metadata
```

![Alt text](images/image-1.png)

Specify the **Attribute Statements**:

* `email` should be set to `user.email`
* `name` should be set to `user.firstName + " " + user.lastName`

![2022-10-06_12-29](images/194431376-68ce56b2-9056-4057-8e9d-3cd2d7709351.png)

Click "Next" to proceed.

On the lastest step check **I'm an Okta customer adding an internal app**

![2022-10-06_12-30](images/194430057-41f53e5e-b522-4c2c-86a7-351a252a275e.png)

And finish the integration of application.

After interaction was saved click **View SAML setup instructions**

![2022-10-06_12-31](images/194430131-d1c72622-0a5b-4fda-9217-45d2d2f192be.png)

The following information is needed to proceed with integration.

* **Identity Provider Single Sign-On URL**
* **Identity Provider Issuer**
* **X.509 Certificate**

![Alt text](images/image-2.png)

Assign users to this application so they could join Testomat.io:

![Alt text](images/image-7.png)


Now, open Company page in Testomat.io and select Single Sign On options

![Company Settings](images/image-3.png)

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to(optional).
3. Enable SAML:

![Alt text](images/image-6.png)

4. Set **Identity Provider Issuer** from Okta as **IdP Entity ID**
5. Set **Identity Provider Single Sign-On URL** from Okta as **Sign In URL**
6. Upload certificate.

![Alt text](images/image-5.png)

And save the form.

Now, use any assigned user from Okta to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

> In case user sees 404 page on Okta, check that Single Sign-On URL was correctly set.

### Google Workspace

Inside Google Admin open **Apps** > **Web & Mobile Apps**:

![Alt text](images/image-9.png)


Add Custom SAML App.

Use "Testomatio" as **App Name** and continue

![Alt text](images/image-10.png)

Copy the following information:

* **SSO URL**
* **Entity ID**
* **Certificate** should be downloaded as file

And continue.

![Alt text](images/image-11.png)

On this step fill the form:

* **ACS URL**: `https://app.testomat.io/users/saml/auth`
* **Entity ID**: `https://app.testomat.io/users/saml/metadata`

![Alt text](images/2023-10-04_19.14.58@2x.png)

On the next page add attributes mappings:

* Add `email`
* Last name as `last_name`
* First name as `first_name`

![Alt text](images/image-13.png)

Finish set up.

Now, open Company page in Testomat.io and select Single Sign On options

![Company Settings](images/image-3.png)

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to(optional).
3. Enable SAML:

![Alt text](images/image-6.png)

4. Set **Entity ID** you copied previously as **IdP Entity ID**
5. Set **SSO URL** you copied previously as **Sign In URL**
6. Upload certificate.

![Alt text](images/image-5.png)

And save the form.

Now, use any assigned user from Okta to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

### Azure AD

Open Azure portal and search for Entra ID service:

![EntraID](images/image-14.png)

Add new Enterprise application

![Alt text](images/image-16.png)

On the next screen create a new Application

![Create Appliaction](images/image-15.png)

Enter the "Testomat" as the name of integration, select Integrate any other application you don't find in the gallery (Non-gallery) and click Create. 

Select **Single Sign On** on the left and click "SAML" to configure connection settings.

On the **Basic SAML Configuration** fill in following values

* `Identifier (Entity ID)` → `https://app.testomat.io/users/saml/metadata`
* `Reply URL (ACS URL)` → `https://app.testomat.io/users/saml/auth`
* `Sign on URL` → `https://app.testomat.io/users/sso`


Save this form. Now edit **Attributes & Claims**.

Remove default attributes.

Add the following attributes that will be sent to Testomat.io:

* `name` attribute:
  * Name: `name`
  * Source: Attribute
  * Source attribute: `user.displayname`
* `email` attribute:
  * Name: `email`
  * Source: Attribute
  * Source attribute: `user.mail`

Close the dialog. 

On **SAML Signing Certificate** card download **Certificate (Base 64)**.

On **Set up Testomat** card copy following values

* **Login URL** 
* **Azure ID Idenitifier** 

Add Users to application on the **Users and Groups** section in sidebar. This users will be able to log in to Testomat.io via SAML.

Now, open Company page in [Testomat.io](https://app.testomat.io/companies) and select Single Sign On options

![Company Settings](images/image-3.png)

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to (optional).
3. Enable SAML:

![Alt text](images/image-6.png)

4. Set **Azure ID Idenitifier** from Azure AD as **IdP Entity ID**
5. Set **Login URL** from Azure AD as **Sign In URL**
6. Upload certificate.

![Alt text](images/image-5.png)

And save the form.


Now, use any assigned user from Azure AD to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

> In case user sees 404 page on Azure AD, check that Single Sign-On URL was correctly set.

# Custom SAML

SAML providers can have different UI and different terms. In this section we will try to narrow down what configuration should be done to integrate any custom SAML provider without getting into the details.

On the SAML provider side, you will need to create a new SAML application for `Testomat` and put the following values:

* Name: `Testomat`, basically the name of the application on provider's side.
* **ACS URL** (or Reply URL, SSO URL, etc): `https://app.testomat.io/users/saml/auth`
* **Entity ID**: `https://app.testomat.io/users/saml/metadata`

Testomat.io will need user attributes like name and email to receive from SAML provider.

Create attributes:
* `email` → email is used to identify the user on Testomat.io side.
* `name` → this will be a full name or a display name. If your SAML provider stores a first name and last name, use `first_name` and `last_name` attributes instead.

We will need the following information from SAML provider to proceed with configuration on Testomat.io side. All of these values should be generated by service provider:

* Certificate file (X509 or Base 64)
* IdP Entity ID (or just Entity ID)
* Sign in URL (or Login URL)

Add users into SAML connection to ensure that they will be able to login to Testomat.io

Now, open Company page in [Testomat.io](https://app.testomat.io/companies) and select Single Sign On options

![Company Settings](images/image-3.png)

> If you don't see Single Sign On option, check that you are an owner of this company

Fill in the form:

1. **Company domain**. This is required to identify SSO connection by user's email. Example: `mycompany.com`.
2. **Default Projects**. Select projects to new users will be added to (optional).
3. Enable SAML:

![Alt text](images/image-6.png)

4. Set **IdP Entity ID**
5. Set **Sign In URL**
6. Upload certificate file.

![Alt text](images/image-5.png)

And save the form.


Now, use any assigned user from SAML provider to Log In into Testomat.io. Select "SSO" on the Sign In page, enter the email, and if everything is correct user will get inside Testomat.io, assigned to your company and added to default projects.

> In case user sees 404 page on SAML provider, check that Single Sign-On URL was correctly set.