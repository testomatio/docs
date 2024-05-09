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

        // Get the folder name from the file path
        const folderName = path.basename(path.dirname(filePath));

        // Translate the folder name to human readable format
        const category = folderName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        const headings = {};
        for (let i = 0; i <= 6; i++) {
          const level = `lvl${i}`;
          const regex = new RegExp(`^#{${i}}\\s+(.*)$`, 'gm');
          const matches = fileContent.match(regex) || [];
          headings[level] = matches.map(match => match.replace(regex, '$1'));
        }


        const { data: frontmatter, content } = matter(fileContent)
        data.push({
            id: i++,
            title: frontmatter.title,
            category,
            url: filePath.replace(docsDir, '').replace('.md', ''),
            content: removeMd(content).replace(/\n/g, ""),
            ...headings,
        });

        // Add or update the record in the Algolia index
      }
    }
  }
  
  // Start walking from the docs directory
walkSync(docsDir);      


console.log(data);

// 2. Send the dataset in JSON format
await client.index("docs").deleteAllDocuments();
const res = await client.index("docs").addDocuments(data)
await client.waitForTask(res['taskUid']);
const docs = await client.index('docs').getDocuments();
console.log('Doooocs!')
console.log(docs);
