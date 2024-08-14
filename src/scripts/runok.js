#!/usr/bin/env node
const { runok, tasks: { exec, writeToFile } } = require('runok');
const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const humanize = (s) => s.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()+' '; });
const slugify = require('slugify')
const dasherize = (str) => slugify(str.toLowerCase());
const { globSync } = require('glob');
const { execSync } = require('child_process');

require('dotenv').config();

const token = process.env.GH_PAT;

const FETCH_ISSUES_REQUEST = 'GET /repos/{owner}/{repo}/issues?labels={label}&sort=comments&direction=desc'


module.exports = {
  async docs() {
    await this.docsImporter();
    await this.docsReporter();
  },

  async docsImages() {
    const files = globSync("src/content/docs/**/*.md");

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
            updatedContent = updatedContent.replace(imageUrl, `./images/${path.basename(imageUrl)}`);
          } catch (err) {}
          continue;
        }
        // try {
        //   fs.renameSync(path.join('docs/.vuepress/public', imageUrl), path.join(destinationFolder, path.basename(imageUrl)), { overwrite: true });
        // } catch (err) {}
        updatedContent = updatedContent.replace(imageUrl, `./images/${path.basename(imageUrl)}`);
      }

      // updatedContent = content.replace(/!\[.*?\]\((\/assets\/.*?)\)/g, "![$&](images$1)");

      // console.log(updatedContent);
      fs.writeFileSync(file, updatedContent);
    }
  },

  async docsReporter() {
    execSync('rm -rf tmp/reporter');
    execSync('rm -rf tmp/php-reporter');
    execSync('rm -rf tmp/pytest-reporter');

    const destinationFolder = path.resolve(path.join(__dirname, '../content/docs/reference/reporter'));

    console.log(destinationFolder);

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }

    execSync(`git clone https://github.com/testomatio/reporter.git tmp/reporter --depth=1`);
    execSync(`cp -R tmp/reporter/docs/** ${destinationFolder}`);

    const phpReporterUrl = 'https://github.com/testomatio/php-reporter'
    execSync(`git clone ${phpReporterUrl}.git tmp/php-reporter --depth=1`);
    const phpReadme = 'tmp/php-reporter/README.md';

    const pytestReporterUrl = 'https://github.com/testomatio/pytestomatio'
    execSync(`git clone ${pytestReporterUrl}.git tmp/pytest-reporter --depth=1`);
    const pytestReadme = 'tmp/pytest-reporter/README.md';

    const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

    console.log(destinationFolder)

    const files = globSync(`${destinationFolder}/**/*.md`);

    for (const file of files) {
      let title = humanize(path.basename(file, '.md')).trim();
      title[0] = title[0].toUpperCase();
      const titleId = title.toUpperCase();

      if (titleId === 'FRAMEWORKS') title = "NodeJS Test Frameworks";
      if (titleId === 'TESTOMATIO') title = "Advanced Options"
      if (titleId === 'JUNIT') title = "JUnit Reporter"
      let contents = fs.readFileSync(file).toString()
      contents = contents.replace(/^#\s.+/gm, '');
      // fix links
      contents = contents.replace(/(\.md)(?=\))/g, '');

      contents = `---\ntitle: ${capitalize(title)}\n---\n${contents}\n`;

      fs.writeFileSync(file, contents)
    }

    let phpContents = fs.readFileSync(phpReadme).toString().replace(/^#\s.+/gm, '');
    phpContents = `\n:::note\n Taken from [PHP Reporter Readme](${phpReporterUrl})\n:::\n ${phpContents}\n`

    writeToFile('../content/docs/reference/reporter/php.md', cfg => {
      cfg.line('---');
      cfg.line(`title: PHP Test Frameworks`);
      cfg.line('---\n');
      cfg.line(phpContents);
    });

    let pytestContents = fs.readFileSync(pytestReadme).toString().split('## Change')[0];
    pytestContents = `\n:::note\n Taken from [Pytestomatio Reporter Readme](${pytestReporterUrl})\n:::\n\n${pytestContents}\n`

    writeToFile('../content/docs/reference/reporter/python.md', cfg => {
      cfg.line('---');
      cfg.line(`title: Python Test Frameworks`);
      cfg.line('---\n');
      cfg.line(pytestContents);
    });


  },

  async docsImporter() {

    const destinationFolder = '../content/docs/reference/importer';

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }

    const response = await axios.get(`https://raw.githubusercontent.com/testomatio/check-tests/master/README.md`);
    let content = (await response.data).toString();
    content = content.split('\n');
    content = content.slice(content.indexOf('## CLI') + 2).join('\n').replace(/#\s/g, '## ')

    writeToFile('\,/content/docs/reference/import-js.md', cfg => {
      cfg.line(`---
title: Import JavaScript Tests
---


Testomat.io can import automated tests into a project.
We provide CLI tools for different frameworks so you get visibility of your tests in seconds.
On this page we collect the reference to them. Learn how to install and configure test importer for your project.

## JavaScript

> 📑 This documentation is taken from open-source project [testomatio/check-tests](https://github.com/testomatio/check-tests)

${content}`)});

    const response2 = await axios.get(`https://raw.githubusercontent.com/testomatio/php-list-tests/master/README.md`);
    let content2 = (await response2.data).toString();
    content2 = content2.split('\n').slice(3).join('\n').replace(/#\s/g, '## ')


    writeToFile('../content/docs/reference/import-php.md', cfg => {
      cfg.line(`---
title: Import PHP Tests
---


> 📑 This documentation is taken from open-source project [testomatio/php-list-tests](https://github.com/testomatio/php-list-tests)

${content2}`)
    });

    const response3 = await axios.get(`https://raw.githubusercontent.com/testomatio/check-cucumber/master/README.md`);
    let content3 = (await response3.data).toString().split('\n');
    content3 = content3.slice(content3.indexOf('## Cli') + 2).join('\n')


    writeToFile('../content/docs/reference/import-bdd.md', cfg => {
      cfg.line(`---
title: Import Cucumber BDD Tests
---

> 📑 This documentation is taken from open-source project [testomatio/check-cucumber](https://github.com/testomatio/check-cucumber)

${content3}
`)});

    },


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
