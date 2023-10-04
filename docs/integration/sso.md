---
permalink: /integration/sso
title: Single Sign On
editLink: true
---

## Single Sign On

Single Sign On is **enterprise** feature that allows you to login users from your Identity Provider into Testomat.io. All new members will be auto-provisioned. If you reach limit of paid seats, all new members will be added as `read-only`. So no matter of how many peoples joined, you won't be charged more than your current plan. You can manage your seats, and specify which users should be active and which to be read-only on your [Company Members](https://docs.testomat.io/subscriptions/companies/#how-to-invite-a-user-to-a-company) page.

This guide shows how to set up SSO connection via SAML for various SAML providers

### Prerequisites

* You have a compay in Testomat.io, and you are [**owner of this company**](/subscriptions/companies#roles-within-a-company).
* Company is on an enterprise plan.
* You have SAML identity provider like Okta or GSuite
* You and all potential company members use emails from the same domain name (like: user1@companyname.com, user2@companyname.com, etc)

If you are ready, proceed to configuring identity provider:

* [Okta](#okta)
* [GSuite](#gsuite)

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

### GSuite

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
