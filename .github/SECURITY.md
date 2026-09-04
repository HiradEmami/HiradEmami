# Security Policy

## Scope

This repository is my main GitHub profile repository. It mainly contains Markdown, SVG assets, profile links, and documentation.

Security reports are welcome when they relate to:

- Exposed secrets, tokens, credentials, or private information.
- Malicious or suspicious links in the README or documentation.
- Unsafe third-party assets, badges, scripts, or generated images referenced by this repository.
- Problems in linked public project documentation that could mislead users into unsafe behavior.

Reports about unrelated projects, generic dependency notices, or automated findings without a concrete impact may be closed without action.

## Reporting a Vulnerability

Please do not open a public issue for security-sensitive reports.

Send a private report through one of the contact channels listed in the root README. Include:

- A clear summary of the issue.
- The affected file, link, or asset.
- Steps to reproduce or verify the issue.
- The potential impact.
- Any suggested fix, if you have one.

If the report includes sensitive details, keep the initial message brief and ask for a secure follow-up channel.

## Link Integrity

This repository uses an automated link checker in [`workflows/links.yml`](./workflows/links.yml).

The workflow checks Markdown, HTML, and SVG files on pull requests, pushes to `master`, a weekly schedule, and manual dispatch. This helps catch broken profile links, moved GitHub Pages routes, unavailable badges, and remote asset failures.

The link checker is a quality signal, not a substitute for security review. If a link appears malicious, hijacked, misleading, or connected to exposed secrets, report it privately through this security process instead of only relying on the automated workflow.

## Response Expectations

I aim to review valid security reports promptly, but this is a personal profile repository rather than a production software package.

For confirmed issues, I will prioritize:

- Removing exposed secrets or private information.
- Replacing unsafe links or assets.
- Correcting misleading or risky documentation.
- Updating link-checking configuration when a recurring failure points to a real repository risk.
- Adding attribution when a report materially improves the repository.

## Public Disclosure

Please allow time for review and remediation before publicly disclosing a security issue connected to this repository.
