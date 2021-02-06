#!/usr/bin/env node
const { runok, tasks: { exec, writeToFile } } = require('runok');
const { Octokit } = require("@octokit/core");
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


  }
}

if (require.main === module) runok(module.exports);
