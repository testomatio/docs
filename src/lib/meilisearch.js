import * as dotenv from "dotenv"
dotenv.config()

import { MeiliSearch } from "meilisearch"
const client = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_MASTER_KEY,
})

// 1. Build a dataset
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import removeMd from "remove-markdown"

const filenames = fs.readdirSync(path.join("./src/content/docs"))
const docsDir = 'src/content/docs';

const data = []
let i = 0;

 function walkSync(currentPath) {
    const files = fs.readdirSync(currentPath);
  
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
  
      if (stat.isDirectory()) {
        walkSync(filePath);
      } else if (path.extname(filePath) === '.md') {
        // Process the Markdown file
        const fileContent = fs.readFileSync(filePath, 'utf8');

        const { data: frontmatter, content } = matter(fileContent)
        data.push({
            id: i++,
            title: frontmatter.title,
            url: filePath.replace(docsDir, '').replace('.md', ''),
            content: removeMd(content).replace(/\n/g, ""),
        });

        // Add or update the record in the Algolia index
      }
    }
  }
  
  // Start walking from the docs directory
walkSync(docsDir);      


console.log(data);

// 2. Send the dataset in JSON format
const res = await client.index("docs").addDocuments(data)
await client.waitForTask(res['taskUid']);
const docs = await client.index('docs').getDocuments();
console.log('Doooocs!')
console.log(docs);