# Collaboration Guide

Thanks for your interest in collaborating.

This repository is my main GitHub profile repository, so contributions should improve the accuracy, clarity, maintainability, or presentation of my public profile and related documentation.

## Good Contribution Areas

Useful contributions include:

- Fixing typos, broken links, layout issues, or rendering problems.
- Improving accessibility for SVGs, badges, images, and Markdown content.
- Suggesting clearer wording for project descriptions or collaboration areas.
- Reporting broken external assets or third-party README widgets.
- Proposing small improvements to profile documentation.

For collaboration on machine learning infrastructure, MLOps, research tooling, reinforcement learning, robotics, or distributed AI systems, please open an issue or contact me through the links in the root README.

## Before Opening a Pull Request

Please keep changes focused and easy to review.

- Do not rewrite the full README without prior discussion.
- Do not replace the profile style or visual identity without opening an issue first.
- Keep generated assets, SVG changes, and Markdown changes scoped to the specific improvement.
- Avoid adding heavy external dependencies or new third-party services unless there is a clear reason.
- Do not include secrets, private information, unpublished material, or confidential project details.
- Follow the SVG motion guidance in [`../docs/meta/MOTION_SYSTEM.md`](../docs/meta/MOTION_SYSTEM.md) when adding or changing animated assets.

## Pull Request Expectations

A good pull request should include:

- A short explanation of what changed.
- Screenshots or rendered previews for visual changes when possible.
- A note about any external services, images, badges, or generated assets added.
- A clear reason for the change.

## Link Checking

This repository uses a GitHub Actions link checker at `.github/workflows/links.yml`.

The workflow runs on pull requests, pushes to `master`, a weekly schedule, and manual dispatch. It checks Markdown, HTML, and SVG files because this profile depends heavily on links, badges, GitHub Pages routes, and remote visual assets.

When contributing:

- Keep internal links relative when possible.
- Make sure GitHub Pages links point to the intended final route.
- Prefer stable external URLs over temporary preview links.
- Avoid adding third-party badge or image services unless they are useful and reliable.
- If a remote badge or stats service fails because of rate limiting, document that in the pull request.

`mailto:` links are intentionally ignored through `.lycheeignore` because external email validation is noisy and not useful for this profile repository.

## Issues

When opening an issue, include:

- What you expected to happen.
- What actually happened.
- The browser, device, or GitHub surface where you saw the problem, if it is visual.
- Links or screenshots when they help explain the issue.

## Security Reports

Please do not report security issues publicly. Use the process in [`SECURITY.md`](./SECURITY.md).
