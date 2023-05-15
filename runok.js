#!/usr/bin/env node
const { runok, tasks: { exec, writeToFile } } = require('runok');
const { Octokit } = require("@octokit/core");
const axios = require('axios').default;
const fs = require('fs');
const sections = require('./sections')
const humanize = (s) => s.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()+' '; });
const slugify = require('slugify')
const dasherize = (str) => slugify(str.toLowerCase());

const token = `7a1e0b27f7e1f9390a00e703d61f8d87255f1def`;
const octokit = new Octokit({ auth: token });

const FETCH_ISSUES_REQUEST = 'GET /repos/{owner}/{repo}/issues?labels={label}&sort=comments&direction=desc'


module.exports = {
  async docs() {

    if (!fs.existsSync('issues')){
        fs.mkdirSync('issues');
    }

    for (const section of sections) {
      const resp = await octokit.request(FETCH_ISSUES_REQUEST, {
        owner: 'testomatio',
        repo: 'docs',
        label: section
      })

      const dir = `src/${section}`;
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }

      const { title, body } = resp.data;

      for (const { title, body } of resp.data) {
        fs.writeFileSync(`src/${section}/${dasherize(title)}.md`,
`---
permalink: /${section}/${dasherize(title)}
title: ${title}
editLink: false
---

# ${title}

${body}`);
      }

      console.log(`${section}: ${resp.data.length} files written`)
      await writeToFile(`issues/${section}.js`, out => {
        out.line('module.exports = [');
        resp.data.forEach(({ title }) => out.line(`  "/${section}/${dasherize(title)}",`))
        out.line(']');
      });


    }
    if (!fs.existsSync('src/reference')){
        fs.mkdirSync('src/reference');
    }

    await this.docsReporter();
    await this.docsImporter();

    await writeToFile(`issues/reference.js`, out => {
      out.line('module.exports = [');
      out.line(' "/reference/import",')
      out.line(' "/reference/reporter",')
      out.line(']');
    });

    await writeToFile(`issues/index.js`, out => {
      out.line(`module.exports = {`)
      sections.forEach(section => out.line(`  "${section}": require('./${section}'),`))      
      out.line(`}`)
    });
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
