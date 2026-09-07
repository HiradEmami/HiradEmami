import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([".git", ".idea", ".local", "node_modules", "output"]);
const files = [];
const issues = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (/\.(md|html)$/i.test(entry.name)) files.push(fullPath);
  }
}

walk(root);

const htmlImagePattern = /<img\b[^>]*>/gi;
const altPattern = /\balt=["']([^"']*)["']/i;
const markdownImagePattern = /!\[([^\]]*)\]\([^)]+\)/gi;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);

  for (const match of text.matchAll(htmlImagePattern)) {
    const tag = match[0];
    const alt = tag.match(altPattern)?.[1]?.trim();
    if (!alt) issues.push(`${relative}: HTML image missing alt text: ${tag}`);
  }

  for (const match of text.matchAll(markdownImagePattern)) {
    const alt = match[1].trim();
    if (!alt) issues.push(`${relative}: Markdown image missing alt text.`);
  }
}

if (issues.length > 0) {
  console.error("Image alt text issues:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`OK: ${files.length} Markdown/HTML files checked; image alt text is present.`);
