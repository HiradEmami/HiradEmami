# Documentation Index

This folder contains the deeper profile pages behind the main GitHub README.

## Main Pages

| Page | Purpose |
| --- | --- |
| [Projects](./pages/PROJECTS.md) | Selected project work, current direction, and first-look guidance. |
| [AI Domains](./pages/AI_DOMAIN.md) | Technical domains behind the profile: ML systems, infrastructure, RL, robotics, and education. |
| [Labs](./pages/LABS.md) | Dedicated overview for Neural Lab, Molecule Lab, and Model Forge. |
| [Collaboration](./pages/COLLAB.md) | Collaboration interests, fit, operating style, and contact path. |

## Maintenance Pages

| Page | Purpose |
| --- | --- |
| [Roadmap](./meta/ROADMAP.md) | Near-term direction for labs, README UX Kit, and AI domain docs. |
| [Style Guide](./meta/STYLE_GUIDE.md) | SVG layout, color, spacing, alt text, and visual restraint rules. |
| [Motion System](./meta/MOTION_SYSTEM.md) | Animation timing and intensity guidance for profile SVGs. |
| [Asset Index](./meta/ASSET_INDEX.md) | Inventory of major SVG assets and where they are used. |
| [Visual Audit](./meta/VISUAL_AUDIT.md) | Current SVG quality bar for layout, motion, spacing, and accessibility. |
| [Showcase Strategy](./meta/SHOWCASE_STRATEGY.md) | GitHub, LinkedIn, and collaboration messaging for sharing the profile system. |

## Local Checks

Run this before opening a pull request or after moving docs/assets:

```powershell
npm run check
```

The local checks validate internal Markdown, HTML, and SVG links; SVG structure; and image alt text while ignoring unpublished folders such as `.git`, `.idea`, `.local`, `node_modules`, and `output`.

Available commands:

| Command | Purpose |
| --- | --- |
| `npm run check:local` | Validate internal links and local asset references. |
| `npm run check:svg` | Check SVG assets for expected structure. |
| `npm run check:alt` | Confirm image alt text is present in Markdown/HTML. |
| `npm run check` | Run the full local quality gate. |

GitHub Actions remains the full remote link checker for badges, external URLs, and scheduled validation.

## Asset Folders

| Folder | Contents |
| --- | --- |
| [`assets/svg/system/`](./assets/svg/system/) | Main profile system cards, lab visuals, buttons, and architecture maps. |
| [`assets/svg/projects/`](./assets/svg/projects/) | Project showcase cards and project-page visual panels. |
| [`assets/svg/navigation/`](./assets/svg/navigation/) | Navigation buttons used across docs pages. |
| [`easter-eggs/`](./easter-eggs/) | Hidden/easter-egg content. |

## Root And GitHub Files

The profile README stays at the repository root. GitHub-recognized community files live under `.github/` to keep the root cleaner while preserving GitHub conventions:

- [`../README.md`](../README.md)
- [`../.github/CONTRIBUTING.md`](../.github/CONTRIBUTING.md)
- [`../.github/CODE_OF_CONDUCT.md`](../.github/CODE_OF_CONDUCT.md)
- [`../.github/SECURITY.md`](../.github/SECURITY.md)
