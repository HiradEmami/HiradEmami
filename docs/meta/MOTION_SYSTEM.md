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

## Reduced Motion

Every animated SVG must be completely still, and still readable, for visitors who set `prefers-reduced-motion: reduce`. A media query cannot stop SMIL, so:

- Write motion as CSS `@keyframes` in the file's `<style>` (`opacity`, `stroke-dashoffset`, `r` / `rx` / `ry` / `y`, `transform`) with `linear` timing, and end the stylesheet with the block below.
- The element's own attributes are what reduced-motion visitors see, so they must describe a good still frame.
- Do not animate `transform` on an element that also has a `transform` attribute: the animation replaces the attribute instead of adding to it. Put the static transform on a wrapper group.
- Keep SMIL only where CSS has no equivalent: `gradientTransform`, filter values such as `stdDeviation` and `baseFrequency`, and `<animateMotion>`. Give an animated gradient or filter a static twin (`id="…Still"`) and point its references at the twin inside the media query. Give `<animateMotion>` targets `class="signal-dot"` and hide that class there.

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
  [stroke="url(#edge)"] { stroke: url(#edgeStill); }
  .signal-dot { display: none; }
}
```

## Practical Defaults

```css
/* Calm outer border */
@keyframes dash-1 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -560px; } }
.dash-1 { animation: dash-1 22s linear infinite; }

/* Slow route flow */
@keyframes dash-2 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -176px; } }
.dash-2 { animation: dash-2 16s linear infinite; }

/* Subtle core pulse */
@keyframes pulse-1 { 0%, 100% { r: 32px; } 50% { r: 36px; } }
.pulse-1 { animation: pulse-1 8s linear infinite; }
```

## Review Checklist

- Does the SVG still look good when rendered small in GitHub Markdown?
- Are text blocks readable without animation?
- With reduced motion switched on, is the SVG completely still and still readable?
- Does anything overlap when viewed at profile width?
- Are at least some panels static or nearly static?
- Is the motion supporting hierarchy instead of stealing attention?
