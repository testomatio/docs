# Testomatio Docs Builder

Documentation is saved as static markdown files under `src/content/docs`.

## 📋 Editing a Page

* Recommended to open VSCode editor by pressing `.`.
* Open a markdown file inside `src/content/docs` directory
* Save and commit 

## 📁 Adding a new Section to Documentation page

Docs for importer and reporter are auto-generated from corresponding repositories:

```
./runok.js docs
```

## 🔨 Customization

This static website is built with Vuepress.

To start the website locally

* clone this repo
* install dependencies with npm
* fetch all documenation pages

```
./runok.js docs
```
* start a dev server

```
npm run dev
```

