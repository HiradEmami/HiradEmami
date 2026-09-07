import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([
  ".git",
  ".github",
  ".idea",
  ".local",
  "node_modules",
  "output",
]);
const checkedExtensions = new Set([".md", ".html", ".svg"]);
const files = [];
const missing = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (checkedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
}

function exactPathExists(fullPath) {
  if (!fs.existsSync(fullPath)) return false;

  const relative = path.relative(root, fullPath);
  let current = root;

  for (const segment of relative.split(path.sep)) {
    if (!segment) continue;

    const names = fs.readdirSync(current);
    if (!names.includes(segment)) return false;

    current = path.join(current, segment);
  }

  return true;
}

function normalizeLocalTarget(rawTarget, sourceFile) {
  let target = rawTarget.trim();
  if (
    !target ||
    target.startsWith("#") ||
    /^(https?:|mailto:|data:|tel:)/i.test(target)
  ) {
    return null;
  }

  target = target.split(/[?#]/)[0];
  if (!target) return null;

  try {
    target = decodeURIComponent(target);
  } catch {
    // Keep the raw target if it is not valid percent-encoded text.
  }

  return path.resolve(path.dirname(sourceFile), target);
}

walk(root);

const markdownLinkPattern = /!?\[[^\]]*\]\(([^)]+)\)/gi;
const htmlAttributePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const targets = [
    ...Array.from(text.matchAll(markdownLinkPattern), (match) => match[1]),
    ...Array.from(text.matchAll(htmlAttributePattern), (match) => match[1]),
  ];

  for (const rawTarget of targets) {
    const resolved = normalizeLocalTarget(rawTarget, file);
    if (!resolved) continue;

    if (!resolved.startsWith(root) || !exactPathExists(resolved)) {
      missing.push(`${path.relative(root, file)} -> ${rawTarget}`);
    }
  }
}

if (missing.length > 0) {
  console.error("Missing local links or assets:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(
  `OK: ${files.length} Markdown, HTML, and SVG files checked; no missing local links.`,
);
