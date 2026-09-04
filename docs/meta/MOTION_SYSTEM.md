# Motion System

This repository uses animated SVGs as part of the profile identity. Motion should feel like a calm system interface, not a page where every component is competing for attention.

## Timing Rules

| Motion type | Target duration | Notes |
| --- | --- | --- |
| Outer borders | `18s-24s` | Slow, subtle movement only. |
| Small card borders | `16s-22s` | Use lower opacity and longer dash segments. |
| Route / signal lines | `14s-18s` | Should feel like slow data flow, not fast scanning. |
| Core node pulses | `7s-12s` | Small radius changes only. |
| Orbital rings | `18s-45s` | Slow rotation; avoid multiple fast rings in one SVG. |
| Cursor blink | `1s-1.2s` | Terminal cursor blink is allowed to be faster. |

## Visual Rules

- Borders should use `stroke-opacity` around `0.5-0.75`.
- Prefer long dash segments for borders, such as `420 120` or `520 150`.
- Avoid animating every panel border at the same speed.
- Stagger panel durations by a few seconds when several panels appear together.
- Use route animations sparingly; one or two active routes usually reads better than every route moving.
- Core pulses should be restrained: small radius changes, slow timing, and no aggressive opacity flashing.
- Decorative particles should move or pulse slowly, or stay static.

## Practical Defaults

```svg
<!-- Calm outer border -->
<animate attributeName="stroke-dashoffset" from="0" to="-560" dur="22s" repeatCount="indefinite"/>

<!-- Slow route flow -->
<animate attributeName="stroke-dashoffset" from="0" to="-176" dur="16s" repeatCount="indefinite"/>

<!-- Subtle core pulse -->
<animate attributeName="r" values="32;36;32" dur="8s" repeatCount="indefinite"/>
```

## Review Checklist

- Does the SVG still look good when rendered small in GitHub Markdown?
- Are text blocks readable without animation?
- Does anything overlap when viewed at profile width?
- Are at least some panels static or nearly static?
- Is the motion supporting hierarchy instead of stealing attention?
