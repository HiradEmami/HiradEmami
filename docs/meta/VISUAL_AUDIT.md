# Visual Audit

This audit defines the quality bar for the major README and docs SVGs.

## Audit Scope

Major visuals are the SVGs used as navigation, headers, lab cards, project cards, profile maps, collaboration panels, and AI-domain diagrams under `docs/assets/svg/`.

## Current Standard

| Requirement | Standard |
| --- | --- |
| Text readability | Text must fit inside its visual container and remain readable at README widths. |
| Layout | Shapes, labels, routes, and subtitles must not overlap. |
| Spacing | Dense panels need clear gutters between title, content, and footer zones. |
| Motion | Border motion is slow, core pulses are subtle, and route signals are staggered. |
| Repetition | New SVGs should use a distinct composition unless they are part of a matched set. |
| Accessibility | Every major SVG usage needs useful alt text in the Markdown file that embeds it. |

## README-Level Visuals

| Asset | Role | Decision |
| --- | --- | --- |
| `docs/assets/svg/pages/system_access_title.svg` | Section title | Keep. It gives the portal area a clear entry point. |
| `docs/assets/svg/system/portal_main.svg` | Primary website route | Keep prominent. This is the main visual destination. |
| `docs/assets/svg/system/neural_lab.svg` | Lab route | Keep, paired with the other lab cards. |
| `docs/assets/svg/system/molecule_lab.svg` | Lab route | Keep, paired with the other lab cards. |
| `docs/assets/svg/system/model_forge.svg` | Lab route | Keep, paired with the other lab cards. |
| `docs/assets/svg/system/explore_labs_button.svg` | Dedicated labs CTA | Keep. It replaces plain text with a focused route. |
| `docs/assets/svg/pages/hirad_core.svg` | Identity/system panel | Keep. It carries the profile positioning. |
| `docs/assets/svg/system/profile_architecture.svg` | System map | Keep below the core panel, not before the lab routes. |
| `docs/assets/svg/pages/tech_projects_panel.svg` | Projects route | Keep as navigation, not as a large hero. |
| `docs/assets/svg/pages/ai_domains.svg` | AI domain route | Keep as navigation, not as a large hero. |
| `docs/assets/svg/pages/collaboration_panel.svg` | Collaboration route | Keep near the contact section. |

## Docs-Level Visuals

| Asset group | Standard |
| --- | --- |
| Navigation SVGs | Consistent size and simple labels. |
| Project cards | Slow border animation, no competing motion across every panel. |
| Collaboration diagrams | More editorial and structured than project cards. |
| AI-domain diagrams | Unique compositions for core domains and engineering principles. |
| Lab diagrams | Spacious enough that Model Forge and lower labels do not collide. |

## Restraint Rule

Do not add a new major visual if a text section would be clearer. Add visuals when they improve navigation, compress a complex comparison, or make the profile system easier to inspect.

## Verification

Run the local link check after asset movement:

```powershell
npm run check
```

For layout-sensitive SVG edits, inspect the rendered result in GitHub preview or a browser before committing.
