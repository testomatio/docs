#!/usr/bin/env node
const { runok, tasks: { exec, writeToFile } } = require('runok');
const { Octokit } = require("@octokit/core");
const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const sections = require('./sections')
const humanize = (s) => s.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()+' '; });
const slugify = require('slugify')
const dasherize = (str) => slugify(str.toLowerCase());
const { globSync } = require('glob');

const token = process.env.GH_PAT;
const octokit = new Octokit({ auth: token });

const FETCH_ISSUES_REQUEST = 'GET /repos/{owner}/{repo}/issues?labels={label}&sort=comments&direction=desc'


module.exports = {
  async docs() {
    // deprecated
  },

  async docsImages() {
    const files = globSync("docs/**/*.md");
    
    for (const file of files) {
      console.log(`Processing ${file}`);
      const content = fs.readFileSync(file).toString();

      const destinationFolder = path.join(path.dirname(file), 'images');

      if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
      }

      const imageUrls = content.match(/!\[.*?\]\((.*?)\)/g)?.map(match => match.match(/!\[.*?\]\((.*?)\)/)[1]) || [];
      console.log(imageUrls);

      let updatedContent = content;

      if (!imageUrls.length) continue;

      for (const imageUrl of imageUrls) {
        if (imageUrl.startsWith('http')) {
          try {
            await downloadImage(imageUrl, destinationFolder);
            updatedContent = updatedContent.replace(imageUrl, `images/${path.basename(imageUrl)}`);
          } catch (err) {}
          continue;
        }
        try {
          fs.renameSync(path.join('docs/.vuepress/public', imageUrl), path.join(destinationFolder, path.basename(imageUrl)), { overwrite: true });
        } catch (err) {}
        updatedContent = updatedContent.replace(imageUrl, `images/${path.basename(imageUrl)}`);
      }

      // updatedContent = content.replace(/!\[.*?\]\((\/assets\/.*?)\)/g, "![$&](images$1)");

      // console.log(updatedContent);
      fs.writeFileSync(file, updatedContent);
    }
  },

  async docsReporter() {

    const response = await axios.get(`https://raw.githubusercontent.com/testomatio/reporter/master/README.md`);
    let content = (await response.data).toString();
    content = content.split('\n').slice(2).join('\n')

    const response2 = await axios.get(`https://raw.githubusercontent.com/testomatio/php-reporter/master/README.md`);
    let content2 = (await response2.data).toString();
    content2 = content2.split('\n').slice(2).join('\n')


    writeToFile('src/reference/reporter.md', cfg => {
      cfg.line(`---
permalink: /reference/reporter
title: Reporter
editLink: false
---

# Reporter

Testomat.io provides several libraries for various testing frameworks.
On this page we collect the reference to them. Learn how to install and configure reporter for your project.
But make sure you imported tests first.

## JavaScript

> 📑 This documentation is taken from open-source project [testomatio/reporter](https://github.com/testomatio/reporter)

`)
      cfg.line(content);

      cfg.line(`

## PHP

> 📑 This documentation is taken from open-source project [testomatio/php-reporter](https://github.com/testomatio/php-reporter)
`);

      cfg.line(content2);
    })
  },

  async docsImporter() {

    const response = await axios.get(`https://raw.githubusercontent.com/testomatio/check-tests/master/README.md`);
    let content = (await response.data).toString();
    content = content.split('\n');
    content = content.slice(content.indexOf('## CLI') + 2).join('\n').replace(/#\s/g, '## ')

    const response2 = await axios.get(`https://raw.githubusercontent.com/testomatio/php-list-tests/master/README.md`);
    let content2 = (await response2.data).toString();
    content2 = content2.split('\n').slice(3).join('\n').replace(/#\s/g, '## ')

    const response3 = await axios.get(`https://raw.githubusercontent.com/testomatio/check-cucumber/master/README.md`);
    let content3 = (await response3.data).toString().split('\n');
    content3 = content3.slice(content3.indexOf('## Cli') + 2).join('\n')


    writeToFile('src/reference/import.md', cfg => {
      cfg.line(`---
permalink: /reference/import
title: Import Tests
editLink: false
---

# Import Tests

Testomat.io can import automated tests into a project.
We provide CLI tools for different frameworks so you get visibility of your tests in seconds.
On this page we collect the reference to them. Learn how to install and configure test importer for your project.

## JavaScript

> 📑 This documentation is taken from open-source project [testomatio/check-tests](https://github.com/testomatio/check-tests)

`)
      cfg.line(content);

    cfg.line(`## Cucumber
> 📑 This documentation is taken from open-source project [testomatio/check-cucumber](https://github.com/testomatio/check-cucumber)

${content3}
`);


      cfg.line(`

## PHP

> 📑 This documentation is taken from open-source project [testomatio/php-list-tests](https://github.com/testomatio/php-list-tests)
`)

      cfg.line(content2);
    })
  }

}

if (require.main === module) runok(module.exports);


async function downloadImage(imageUrl, destinationFolder) {
  try {
    const img = imageUrl.split('/')[imageUrl.split('/').length - 1];

    if (fs.existsSync(path.join(destinationFolder, img))) {
      console.log(`Image already exists: ${imageUrl}`);
      return path.join(destinationFolder, img);
    }

    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    const extension = contentType.split('/')[1];

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }

    const filename = path.join(destinationFolder, img);
    fs.writeFileSync(filename, response.data);

    console.log(`Downloaded image: ${imageUrl} => ${filename}`);
    return filename;
  } catch (error) {
    console.error(`Failed to download image: ${imageUrl} ${error}`);
    // process.exit(1);
    throw error;
    // return null;
  }
}

async function processMarkdown(markdownText) {
  const imageRegex = /!\[([^\]]*)\]\((https:\/\/user-images\.githubusercontent\.com[^)]+)\)/g;
  let updatedMarkdown = markdownText;

  let match;
  while ((match = imageRegex.exec(markdownText)) !== null) {
    const fullMatch = match[0];
    const altText = match[1] || '';
    const imageUrl = match[2];
    // const newImageUrl = imageUrl.slice(4, -1); // Removing "![](" and ")" from the URL
    const newImagePath = await downloadImage(imageUrl, 'src/.vuepress/public/assets');
    if (newImagePath) {
      const newImageTag = `![${altText}](/assets/${newImagePath})`;
      updatedMarkdown = updatedMarkdown.replace(fullMatch, newImageTag);
    }
  }

  return updatedMarkdown;
}