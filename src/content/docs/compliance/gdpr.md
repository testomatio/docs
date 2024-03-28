---
title: GDPR Commitment
---

Testomat.io, or just Testomat, is really serious about following the GDPR rules that started on May 25, 2018. GDPR is a big deal because it helps protect people’s data in Europe. Testomat has to follow these rules because it works with people in Europe.

We want our users to know that we’re doing everything we can to follow these rules. If you have questions or worries about this, you can email our legal team at [contact page](/contact-us/contact-us).

## Controls Implementation Summary

- **Data Collection:**
  - Testomat.io gathers names, emails, and specific usage data to enhance its service and customer support.
    - **Name and Email:** These are utilized to offer personalized support, payments and assistance.
    - **Test Case Data:** The names, descriptions, source code, execution status of test cases are collected to build comprehensive test reports in Testomat.io.
    - **Automated Script Source Code:** Source Code is sent to Testomat.io to integrate manual and automated tests within one unified system. The source code is exclusively stored and displayed in Testomat.io and is not transmitted to any third parties.
    - **Integration with Tools:** Test case names, descriptions, and test results, including execution status, are transmitted to issue management systems (JIRA, Azure, Linear, etc), collaboration tools (like Slack, MS Teams), CI\CD tools (like GitHub, Gitlab, Azure) to facilitate test execution, defect creation and team communication.

- **Data Storage:**
  - **Artifacts for Automated Scripts:** Trace files, screenshots, videos, other artifacts related to automated scripts are not stored on Testomat.io servers. Users are encouraged to set up S3 Compatible Object Storage on platforms like Amazon, DigitalOcean, Minio, or Google Cloud (in interoperability mode) and configure test runners to upload artifacts directly to S3 storage.
    - **Storage Configuration:** By default, artifacts are uploaded to a public bucket. For enhanced privacy, users can enable private links by pre-signing URLs, ensuring each user gets a unique file access URL per session with a 10-minute duration.
  - **Files for Manual Tests:** Files attached to manual tests are securely stored in the Testomat.io database and are not transmitted to any third parties. This ensures the confidentiality and integrity of the files related to manual tests.

- **Data Security:**
  - Testomat.io uses secure methods to protect your data.
  - Primiraliry names and emails are used to Thrid Parties to provide customer support and help.
  - Names and emails may be stored in places with different data protection laws.
  - Check the list of [subprocessors](/security/subprocessors) used to provide seamless service.


- **Third-Party Services:**
  - Testomat.io may use other companies to:
    - Provide or improve the service.
    - These companies / services can’t use your data for anything other than helping Testomat.io to provide service.

- **User Rights:**
  - EU or EEA residents can:
    - Access, change, or delete their data.
    - Opt-out of receiving emails from Testomat.io at any time.

- **User Agreement and Policy Changes:**
  - Using Testomat.io means you agree to their data use policy.
  - Users will be informed of any changes to the Privacy Policy.

- **Contact:** 
  - For inquiries regarding the Privacy Policy, users can contact the company via email or the [contact page](/contact-us/contact-us) on the website.

For a comprehensive understanding of our practices and your rights, we encourage you to review the full version of our Privacy Policy at [Privacy Policy](https://testomat.io/privacy). 


## Common Questions about GDPR

#### 1. **Do we have to keep data in Europe?**
No! GDPR doesn’t say that data has to stay in Europe, but it does need to be looked after properly if it leaves Europe. 

#### 2. **What’s a Data Processing Agreement (DPA)?**
It’s a special agreement that talks about how we handle and look after the data you give us. It’s part of Privacy Policy.

#### 3. **Does GDPR affect companies outside of Europe?**
Yes! Any company, anywhere, has to follow GDPR if they’re dealing with people in Europe.

#### 4. **Do we need permission to handle people’s data?**
Yes, but there are other reasons we can use too, like if we have a legal reason, or if we have a contract with the person.

#### 5. **What’s the difference between a “data controller” and a “data processor”?**
A Data Controller decides how to use the data (like Testomat’s customers), and a Data Processor (like Testomat) uses the data as the controller wants.

#### 6. **Who helps Testomat with processing data?**
We use services like:
- **Crisp:** Customer support. Location: France
- **GitHub:** Issue management. Location: USA
- **Pipedrive:** Customer support. Location: Estonia
- **Calendly:** Planning customer calls. Location: USA
- **Stripe:** Payments services. Location: USA
- **SendPulse:** Email and marketing activities. Location: USA
- **Sendgrid:** Email delivery. Location: USA

Please check https://docs.testomat.io/security/subprocessors for more details about Subprocessors we use.

#### 9. **Does all data have to be encrypted?**
No, GDPR asks companies to protect data properly, but it doesn’t say exactly how, like saying it has to be encrypted.

### Note:
This is just to help you understand and isn’t legal advice. If you need legal advice about GDPR, please talk to a lawyer.
