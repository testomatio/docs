# Testomatio Docs Builder

**GitHub Issues** of this repository are used as documentation pages.
To update documentation - create or edit an issue in this repository and update changelog file. This will rebuild the documentation website.

## ✍ Creating a Page

* [Create a new Issue](https://github.com/testomatio/docs/issues/new/choose)
* Write a documentation page
  * Add as many images as you need. Upload them by pasting images into issue
* Add a label to the issue. Labels represent [sections of website](https://github.com/testomatio/docs/blob/master/sections.js).
* Save an issue
* [Update CHANGELOG file](https://github.com/testomatio/docs/edit/master/CHANGELOG.md), add a note about your change in a free format.

In a few minutes a documentation site will be updated.

## 📋 Editing a Page

* Open an issue
* Edit it and save
* [Update CHANGELOG file](https://github.com/testomatio/docs/edit/master/CHANGELOG.js), add a note about your change in a free format.

## 📁 Adding a new Section to Documentation page

* Add new item to [sections of website](https://github.com/testomatio/docs/blob/master/sections.js).
* Create a new label for issues
* Attach this label to an issue

## 🔽 How to Reorder Pages

Issues are sorted by the count of comments. If you want a page to be shown first just add a comment to issue. The issue that has more comments will be shown first on the site.

## 🗄️ Where Are Backups?

Backups are automatically generated on each page build.
Restore a page from a markdown file in [archive branch](https://github.com/testomatio/docs/tree/archive/src) when needed.

## 🤔 Why do we use this approach?

* To keep all Testomatio information on GitHub
* Because GitHub issues editor is really nice:
  * to upload images via Ctrl-V
  * has markdown support
  * has previews
* Easy to share with team
* Because that's free!

## 🔨 Customization

This static website is built with Vuepress.

To start website locally

* clone this repo
* install dependencies with yarn
* fetch all documenation pages

```
./runok docs
```
* start a dev server

```
npm run dev
```

Website structue is defined in `src/.vuepress/config.yml`
