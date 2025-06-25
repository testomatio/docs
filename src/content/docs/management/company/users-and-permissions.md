---
title: Users and Permissions
description: Explore how Testomat.io simplifies managing teams and subscriptions with the Companies feature. This guide explains how to invite and manage users, assign roles (like Owner, Manager, QA, and Read-Only), and create or assign teams to projects. It also covers managing accountant users, archiving projects, and maintaining efficient team workflows.
type: article
url: https://docs.testomat.io/management/company
head:    
  - tag: meta
    attrs:
      name: keywords
      content: Testomat.io, companies, team management, roles, project access, accountant users, read-only users, subscription management, team workflows, project archive, QA tools
---


Testomat.io Team implemented Companies feature to simplify work with your team and subscriptions.
Now all your projects can be stored inside created Company and you can easily access them from Companies page.

:::note

Each user may have only one company, so you will not shuffle your projects with others.

:::

![Testomatio - Companies](./images/Companies.png)

On the Companies page, you have a list of companies you participate in with mentioning your role in them.

![Testomatio - Companies](./images/Companies_n.png)

## Users Roles

Testomat.io provides different roles within projects and companies to make your testing process more convenient.
Different team members have different access levels to management options. 

### Roles Within a Company 

- **Owner** is a team member who created a company, can purchase a subscription, invite/delete members to a company and a project, change other team members' roles inside the company, create projects, and has access to all features within the project.
- **Manager** is a team member who can purchase a subscription, create projects, invite members to a company and a project, can change other team members' roles inside the company, except the owner role, and has access to all features within the project.
- **QA** is a team member who can create projects and has access to all features within the project.
- **Accountant** is a team member who can only update subscriptions and it is free of charge.
- **Read-only** is a team member who has permissions for viewing or reading information, but can't make any changes. It is free of charge and available in Professional and Enterprise plans.

### Roles Within a Project

- **Owner** is a team member who created a project, can invite/delete members and Support user to a project, change other team members' roles inside the project, and has access to all features within the project.
- **Manager** - is a team member who has almost the same rights as the project owner: can invite/delete members and Support user to a project, has access to all features within the project but can't change other team members' roles inside the project.
- **Regular User** - is a team member who has access to all project features but limited access to project settings, can't invite or delete members and Support user to a project, nor change their roles within the project.
- **Read-only** - is a team member who has permissions for viewing or reading information, but can't make any changes. All team members with a read-only role at the company level automatically have a read-only role at the project level, and this role can only be changed to a non-read-only role at the company level.

:::note

The role within the **Company** does not always match the role within the **Project**. For example, user with the owner role at the Company level may be added to the Project within the Company as the regular user or read-only.
As well, the same user within a Company may have different roles on different projects.

:::

## How to Create a Company

To create a Company click 'Create Company to Upgrade' button on 'Dashboard' page

![Testomatio - Create company](./images/Create_company_1.png)

OR

Go to 'Companies' page and click 'Create' button

![Testomatio - Create company](./images/Create_company_2n.png)

After, enter a Company name or keep the name displayed by default and click 'Create' button

![Testomatio - Create company](./images/Create_company_3.png)

The Company is now successfully created, and you can continue to set it up.

![Testomatio - Create company](./images/Create_company_4.png)

## How to Invite a User to a Company

Follow these steps to invite users to your company:

1. Go to the 'Companies' page.
2. Click 'Invite' button.

![Testomatio - Invite_users](./images/Invite_users_n.png)

3. Enter user's mail (to invite multiple users, use a comma as a separator and enter the users' emails that you need).

![Testomatio - Invite_users](./images/Invite_users_2n.png)

4. Select a role 'Accountant User' or 'Read Only Mode', if needed.

5. Click 'Invite' button.

![Testomatio - Invite_users](./images/Invite_users_3n.png)

After the users are added to a Company you can add them to your Project.

## How to Add a User to a Project

There are two ways to add a user to a Project: from the **Company Settings** or directly from the **Project Settings**.

### How to Add a User to a Project from the Company Settings

1. Go to the ‘Companies’ page.
2. Select Company.

![Testomat.io - Company](./images/Team_1n.png)

3. Click on ‘Actions’ button and pick ‘Projects Access’ option or click on member’s name.

![Testomatio - Invite_users](./images/Invite_users_4n.png)

4. Choose the project via ‘Add to Project’ button or add to all projects with one click via ‘Add to All Projects’ button.

![Testomatio - Invite_users](./images/Invite_users_5n.png)

5. See that a member was successfully added to projects and click ‘Back’ button.

![Testomatio - Invite_users](./images/Invite_users_6n_.png)

6. See that projects appeared in added member’s line.

![Testomatio - Invite_users](./images/Invite_users_7n.png)

### How to Add a User to a Project from the Project Settings

1. Go to the ‘Dashboard’ page.
2. Select Company and Project.

![Testomat.io - Project](./images/User_1.png)

3. Go to Settings-> Users.
4. Click ‘Invite’ button.

![Testomat.io - Project](./images/User_2.png)

5. Choose a User from the dropdown list.
6. Click ‘Send’ button.

![Testomat.io - Project](./images/User_3.png)

7. Invitation has been sent.

![Testomat.io - Project](./images/User_4.png)

:::note

Only company members can be added to the Project via Project Settings.

:::

## How to Manage Team Members on Company Level

All invited members have a **QA** role by default. You can change the member's role on the Company Team Members page ('Companies' page -> Select Company -> 'Actions' button). 

![Testomatio - Manage team member](./images/Manage_team_member_1n.png)
 
You can delete a team member by clicking on the 'Delete' button.

![Testomatio - Delete team member](./images/Delete_team_member_n.png)

With this action deleted team members will be moved to the **Removed** section. 

![Testomatio - Delete team member](./images/Delete_team_member_2n.png)

So you can reactivate them at any time with previous role by clicking on the 'Reactivate' button or with Read-Only permissions by clicking on the 'Make Read-Only' button

![Testomatio - Reactivate team member](./images/Reactivate_n.png)

## How to Manage Team Members on Project Level

You can manage team members not only at **Company Level** but as well at **Project Level**.

All invited to the project members have a **Regular User** role by default. You can change the member's role within the project on the Users page (Select Project -> Settings -> Users -> click on 'Extra menu' button).

![Testomatio - Manage team member Project](./images/Users_roles.png)

You can delete a team member from the project by clicking on the 'Remove' button.

![Testomatio - Manage team member Project](./images/Remove_user.png)

:::note

In case, if a user deleted at the **company level** - they will be automatically **deleted from all projects** within the company.
In case, if a user removed at the **project level** - they will be deleted **only from that project**, but remain in the company and can be added to a project again at any time.

:::

## Export Users List

You may need to get data about users who are members of your company. Fortunately, Testomat.io makes it easy and convenient:

![Testomat.io - Export Users List](./images/Export_Users_List_n.png)

:::note

Only users with Owner or Manager roles can export Users List

:::

The exported .csv file contains the following information about the company's users:

1. Name.
2. Email.
3. Role.
4. Status.
5. Paused At (UTC).
6. Last Login (UTC).

![Testomat.io - Exported File](./images/Exported_File_n.png)

## Teams 

You need to manage project access for some user groups. With this feature, you can import all users of one project into another. Namely, you can group users into different **teams** to add them to different projects. 

[![Testomatio - Teams](./images/170760639-2b8710a6-20fb-4ae0-ad1e-d393295676b8.jpg)](https://youtu.be/_ejW1C9ciLo)


### How To Create a Team 

To create a Team you need:

1. Go to the 'Companies' page.
2. Open your Company. 

![Testomat.io - Teams](./images/Team_1n.png)

3. Click 'Extra menu' button.
4. Select 'Teams' option from the list.

![Testomat.io - Teams](./images/Team_2n.png)

5. Click 'Create New Team' button.

![Testomat.io - Teams](./images/Team_3.png)

6. Enter Team name.
7. Click 'Create' button.

![Testomat.io - Teams](./images/Team_4.png)

Team is created and now you need to add Projects and Users to your new team.

### How To Assign a Team To a Project

To add Projects:

1. Click 'Add Project' button.

![Testomat.io - Teams](./images/Team_5.png)

2. Select projects from the list.
3. Click 'Add Project' button.

![Testomat.io - Add Project](./images/Add_project.png)

To add Users:

1. Click 'Add User' button.

![Testomat.io - Add User](./images/Add_user.png)

2. Select users from the list.
3. Click 'Add User' button.

![Testomat.io - Add User](./images/Add_user_2.png)

You can also edit your Team, add/remove user or assign the Team to another project by editing it at any time later.

Namely, you can:

1. Delete a team from a project by removing a project from the Team.
2. Delete a user from the Team.
3. Assign the Team to a project by adding a project to the Team.
4. Add a new member to the Team.

![Testomat.io - Edit Team](./images/Edit_team.png)

5. Edit the Team name.
6. Delete the Team.

![Testomat.io - Edit Team](./images/Edit_team_2.png)


## Read-Only User

Some of your company members such as managers, BA, or other stakeholders may need to have read-only access to Tests, Run Reports, and Analytics in order to read, but not change any data. You can invite read-only users or make existing users read-only on the Company page. 

[![CleanShot 2022-05-27 at 20 27 19@2x](./images/170760796-fb2e6618-88b2-478b-ad34-a986a0933dc2.jpg)](https://youtu.be/W09O9jEXAIo)


### Invite Read-Only User to a Company

1. Click on 'Invite' button from Company page.
2. Enter valid user's email.
3. Select 'Read Only Mode' option.
4. Click 'Invite' button.

![Testomat.io - Read-Only](./images/Read_only_n.png)

### Make a Company Member Read-Only 

1. Click on 'Actions' button for selected member from Company page.
2. Click on 'Make Read-Only' option from the dropdown menu.

![Testomat.io - Read-Only](./images/Read_only_2n.png)

### Make the Read-Only Users a Member

1. Click on 'Actions' button for selected Read-Only user from Company page.
2. Click on 'Grant Write Access' option from the dropdown menu.

![Testomat.io - Read-Only](./images/Read_only_3n.png)

:::note

Read-Only users are free of charge and available in Professional and Enterprise plans.

:::

## Accountant User

The Accountant user in a system is a role assigned to a user responsible for managing financial records, tracking expenses, and overseeing payments. They are typically the primary point of contact for any billing-related inquiries or issues.

**Common Permissions for Accountant User:**

1. **View Invoices & Transactions** – Access to all past and current invoices, receipts, and payment history.
2. **Manage Billing Information** – Update company billing details, tax information, and payment methods.
3. **Download Financial Reports** – Export financial summaries, statements, or transaction reports.
4. **Monitor Subscription Plans** – Review and track active subscriptions or service plans.
5. **Limited Payment Permissions** – In some systems, accountants can process payments; in others, they can only review them.

**Restricted Permissions for Accountant User:**

1. No access to system administration settings.
2. No ability to modify user roles or permissions.
3. Limited or no access to operational features beyond financial management.

### How to Add an Accountant User to a Company

Our system allows the addition of Accountant users for free, it means that multiple individuals or entities can be designated as Accountant users without incurring any additional charges specifically for that role. This can be advantageous for businesses or organizations that require multiple people to manage the billing and financial aspects of their accounts.

There are 2 ways to add a Accountant user:

1. You can invite the Accountant user to your company.

![Testomat.io - Accountant](./images/Accountant_n.png)


2. You can make existing company user Accountant.

![Testomat.io - Accountant](./images/Accountant_2n.png)


## Project Archive 

There may be completed projects that are not being developed or paused for some reason. So you may need to **archive** such projects not to mix up current work. In this case the archived project is removed from the Dashboard but still displayed on Company Projects page with **Archived** status, so it can be easily accessed and restored at any time.

### How to Archive Project

1. Go to Company page.
2. Click on 'Extra manu' button.
3. Select 'Projects' option.

![Testomat.io - Archive](./images/Archive_n.png)

4. Click on 'Extra menu' button for project that you want to archive.
5. Click on 'Archive' option.

![Testomat.io - Archive](./images/Archive_2.png)

### How to Restore Archived Project

1. Select your company on Dashboard page.
2. Click on 'Manage' button.

![Testomat.io - Archive](./images/Restore_1.png)

3. Click on 'Extra menu' button for project with **Archived** status.
4. Click on 'Unarchive' option.

![Testomat.io - Archive](./images/Restore_2.png)