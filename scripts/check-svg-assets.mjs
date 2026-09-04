import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const svgRoot = path.join(root, "docs", "assets", "svg");
const files = [];
const issues = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (entry.name.toLowerCase().endsWith(".svg")) files.push(fullPath);
  }
}

walk(svgRoot);

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);

  if (!/<svg\b/i.test(text)) issues.push(`${relative}: missing <svg> root.`);
  if (!/\bviewBox=["'][^"']+["']/i.test(text)) issues.push(`${relative}: missing viewBox.`);
  if (/<script\b/i.test(text)) issues.push(`${relative}: contains a <script> tag.`);

  const openSvg = (text.match(/<svg\b/gi) || []).length;
  const closeSvg = (text.match(/<\/svg>/gi) || []).length;
  if (openSvg !== closeSvg) {
    issues.push(`${relative}: unbalanced svg tags (${openSvg} open, ${closeSvg} close).`);
  }
}

if (issues.length > 0) {
  console.error("SVG asset issues:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`OK: ${files.length} SVG assets checked; structure looks valid.`);
