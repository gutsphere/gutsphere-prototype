---
name: gutsphere-design
description: Gutsphere product design system and UI rules. Use this skill whenever building, editing, or reviewing ANY Gutsphere UI — screens, components, pages, prototypes, Rails views, HTML, CSS, or React. Also trigger when the user mentions Gutsphere styling, colors, fonts, tokens, spacing, layout, or design consistency. This skill defines the exact colors, fonts, spacing, radii, components, and patterns that ALL Gutsphere interfaces must follow. Always read this skill before writing any Gutsphere UI code, even for small changes.
---

# Gutsphere Design System

This skill defines design rules, tokens, and patterns for all Gutsphere UI.

**Core rule: Do not invent design. Assemble from this system.**

---

## 1. Product Principles

- **Clarity over decoration** — No visual treatment unless it improves comprehension or trust
- **Consistency over novelty** — Repeated problems use repeated patterns
- **Mobile-first** — Design for mobile first, always
- **Dense but breathable** — Use hierarchy, grouping, spacing, progressive disclosure
- **Calm, trusted, health-grade** — Reassuring, capable, structured. No playful UI
- **One primary job per surface** — Every screen/card/section has one purpose

---

## 2. Visual Character

The interface should feel: clean, premium, calm, direct, legible, modern.

**Do not use:** flashy gradients, decorative icon overload, excessive glassmorphism, visually loud dashboards, novelty for novelty's sake.

**Do use:** generous whitespace, simple geometry, restrained color, strong type hierarchy, subtle elevation, clear grouping, obvious CTAs.

---

## 3. Fonts

```
Display / Headings:  Inter — weights 400, 500, 600, 700
Body / UI:           DM Sans — weights 400, 500, 600, 700, italic
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
--font-display: 'Inter', -apple-system, 'SF Pro Display', sans-serif;
--font-body: 'DM Sans', -apple-system, sans-serif;
```

**Rules:**
- Inter for all headings, page titles, section titles, sheet titles (17px+)
- DM Sans for everything else: body, cards, buttons, rows, labels, inputs
- Sentence case only. Prefer semibold over bold
- No more than 4 text sizes per screen
- Avoid center-aligned long-form text

### Type Scale

| Style | Size / Line / Weight | Font |
|-------|---------------------|------|
| display | 28 / 32 / 600 | Inter |
| title.1 | 24 / 30 / 600 | Inter |
| title.2 | 20 / 28 / 600 | Inter |
| title.3 | 18 / 24 / 600 | Inter |
| body | 15 / 22 / 400 | DM Sans |
| body.small | 14 / 20 / 400 | DM Sans |
| caption | 12 / 16 / 500 | DM Sans |
| label | 13 / 16 / 500 | DM Sans |

---

## 4. Colors

Use semantic roles, not raw hex.

### Brand
- `--coral: #EF5350` — primary actions, CTAs, active states, key highlights ONLY
- `--coral-glow: rgba(239,83,80,0.07)` — subtle brand backgrounds
- `--coral-light: rgba(239,83,80,0.14)` — brand border tints

### Backgrounds (warm, never pure white)
- `--white: #FFFFFF` — card surfaces
- `--sand: #F5EEE8` — page/app background
- `--sand-light: #FAF6F2` — elevated surfaces, row icons
- `--warm-cream: #FFFAF7` — gradient endpoints

### Text
- `--text-primary: #1C1917` — headings only
- `--text-secondary: #57534E` — body copy
- `--text-muted: #A8A29E` — supporting info
- `--text-hint: #C4BBB5` — labels, metadata

### Borders
- `--border: #E7E0DA` — default borders
- `--border-hover: #D4CCC5` — hover state borders

### Semantic
- `--green: #2E7D32` — success, positive, strong evidence
- Amber `#FEF3C7 / #92400E` — caution, moderate confidence
- Error `#DC2626` — destructive actions, validation errors

### Usage Rules
- Brand color ONLY for primary CTA, selected state, key emphasis
- Surfaces must remain neutral and calm (sand/cream/white)
- Do not introduce additional accent colors
- Do not use multiple colored icon backgrounds — use `--sand-light` uniformly
- Health trust rule: medically adjacent but not cold. Color supports trust, never dominates

---

## 5. Spacing

Use ONLY this scale. No arbitrary values.

| Token | Value |
|-------|-------|
| space.0 | 0 |
| space.1 | 4px |
| space.2 | 8px |
| space.3 | 12px |
| space.4 | 16px |
| space.5 | 20px |
| space.6 | 24px |
| space.8 | 32px |
| space.10 | 40px |
| space.12 | 48px |
| space.16 | 64px |

**Defaults:**
- Page padding mobile: 16px
- Card padding: 16px
- Gap between stacked cards: 12px
- Gap between sections: 16px
- Gap between tightly related items: 8px

---

## 6. Radius

| Token | Value | Use |
|-------|-------|-----|
| radius.sm | 8px | tags, small chips |
| radius.md | 12px | buttons, inputs, rows |
| radius.lg | 16px | cards |
| radius.xl | 20px | sheets, modals |
| radius.pill | 9999px | pills, segment tabs |

---

## 7. Shadows

Restrained elevation only.

- `shadow.sm` — cards: `0 1px 3px rgba(0,0,0,0.04)`
- `shadow.md` — sheets, dropdowns: `0 4px 16px rgba(0,0,0,0.08)`
- `shadow.lg` — high-priority overlays only

Prefer borders + subtle elevation. No dramatic shadows. No shadow stacking.

---

## 8. Components

Use shared primitives. Do not recreate in feature code.

### Button
- Variants: primary (coral), secondary (outline), ghost, destructive
- Full-width on mobile by default
- One primary button per section. Never two primary side by side
- Labels: 2–5 words, action-oriented ("Log symptom", "View pattern")
- Radius: md (12px)
- Must support: default, pressed, disabled, loading states

### Card
- One main job per card
- Padding: 16px. Radius: lg (16px)
- Do not nest cards unless pattern explicitly requires it
- Use section headers to break up dense screens

### Row / List Item
- Primary label + optional secondary text + optional status + right chevron
- Min height: 48px (touch target)
- Icon container: 40×40px, radius 12px, `--sand-light` background, `--text-secondary` color
- ALL row icons use the same neutral treatment. No colored icon backgrounds

### Segments / Tabs
- Use only for sibling views. Not for deep branching
- Top-level active: coral fill, white text
- Sub-level active: coral-glow fill, coral text
- Labels: short and obvious. Radius: pill

### Sheet / Modal
- Sheet on mobile by default
- Clear title (Inter, 18px, 600). Close affordance required
- Primary action anchored at bottom. Radius: xl (20px)

### Empty State
- Explain what the area is for, why it matters, what to do next
- Include one clear action

### Insight / Pattern Card
- Signal or title first, interpretation second, next step third
- Optional confidence indicator. Optional action CTA

---

## 9. Layout

### Mobile Screen Anatomy
1. Header (flex-shrink: 0, always visible)
2. Page title + contextual summary
3. Scrollable main content
4. Bottom nav (flex-shrink: 0, always visible)

### Navigation Structure
- **Bottom nav:** Today, Track, Patterns, Care, Chat
- **Header left:** Profile avatar (or back button on detail screens)
- **Header right:** Notifications bell
- **FAB:** Quick Add floating button
- **Sheets:** Quick logging and secondary workflows

### Bottom Nav Style
- Inactive: `#78716C`, semibold labels, 22px icons
- Active: frosted sand pill (`rgba(245,238,232,0.85)`), coral text, bolder icon stroke
- Not dark backgrounds. Not pure coral fill

---

## 10. Interaction Rules

### States
Every interactive element must support: default, pressed, disabled, focus, loading.

### Motion
- Subtle and purposeful only
- Page transitions: fade + translateX (0.3s ease)
- Card press: scale(0.985)
- Sheet: translateY with 0.35s ease
- No bouncy or playful motion in clinical flows

### Feedback
- Toast for lightweight confirmation
- Inline validation for forms
- Sheet/modal for multi-step decisions
- Confirmation only for destructive/irreversible actions

### Progressive Disclosure
Do not show every detail at once. Especially important for trackers, symptom logging, care guidance, and summaries.

---

## 11. Content Voice

Calm, direct, helpful, respectful, intelligent, human.

- Plain language. Concrete wording. No jargon unless medically necessary
- Explain the next step clearly. No hype language
- Non-diagnostic: "may", "appears to", "your data suggests" — never "confirmed", "diagnosed"
- Button labels: "Log symptom", "View pattern", "Start tracking", "Prepare for visit"
- Avoid vague: "Continue", "Submit", "Next" unless context is obvious

---

## 12. Core Screen Patterns

### Today
Command center. Priority order: what matters now → daily actions → latest patterns → guidance → quick access.

### Track
Fast capture. Optimize for speed. Reduce cognitive load. Context-specific fields only.

### Patterns
Signal first → meaning second → next step third. Confidence framing throughout.

### Care
Action-oriented. Separate self-care, navigation, and clinical. Action blocks, not essays.

### Chat
Guide-based contact list. Each guide is a specialist perspective. Should feel like contacting a trusted person, not using a chatbot.

### Summary / Reports
Structured, scannable, clinically readable. Signal first. Support export.

---

## 13. Anti-Patterns — Do NOT Do These

- Multiple competing primary actions on one screen
- Arbitrary spacing values outside the scale
- Colored icon backgrounds (use neutral `--sand-light` uniformly)
- Dark cards (`bg: --text-primary`) — use `coral-glow` for emphasis instead
- Random card styles or one-off visual treatments
- Deeply nested cards
- Large blocks of centered text
- Long explanatory paragraphs inside action surfaces
- Feature-specific style systems outside this shared system
- Decorative animation in clinical flows
- Diagnostic language ("confirmed", "diagnosed") in pattern descriptions

---

## 14. Priority Order for Tradeoffs

When forced to choose:
1. Clarity
2. Consistency
3. Accessibility
4. Speed of use
5. Elegance
6. Novelty

---

## 15. Checklist Before Outputting UI

- [ ] Used tokens only (no hardcoded colors, spacing, radius)?
- [ ] Used shared components (button, card, row, sheet, segments)?
- [ ] Matches an approved screen pattern?
- [ ] One primary CTA per section?
- [ ] Labels and hierarchy clear?
- [ ] Inter for headings, DM Sans for body?
- [ ] Neutral icon backgrounds throughout?
- [ ] Result is calm, structured, trustworthy?
- [ ] Non-diagnostic language for health content?
- [ ] Accessible (touch targets, labels, contrast)?
- [ ] No new ad hoc visual rules invented?

---

## Reference: CSS Variables

Copy into any Gutsphere project:

```css
:root {
  --font-display: 'Inter', -apple-system, 'SF Pro Display', sans-serif;
  --font-body: 'DM Sans', -apple-system, sans-serif;
  --coral: #EF5350;
  --coral-glow: rgba(239, 83, 80, 0.07);
  --coral-light: rgba(239, 83, 80, 0.14);
  --white: #FFFFFF;
  --sand: #F5EEE8;
  --sand-light: #FAF6F2;
  --warm-cream: #FFFAF7;
  --text-primary: #1C1917;
  --text-secondary: #57534E;
  --text-muted: #A8A29E;
  --text-hint: #C4BBB5;
  --border: #E7E0DA;
  --border-hover: #D4CCC5;
  --green: #2E7D32;
  --green-bg: #D1FAE5;
  --amber-bg: #FEF3C7;
  --amber-text: #92400E;
  --red: #DC2626;
  --red-bg: #FEE2E2;
  --space-0: 0; --space-1: 4px; --space-2: 8px; --space-3: 12px;
  --space-4: 16px; --space-5: 20px; --space-6: 24px; --space-8: 32px;
  --space-10: 40px; --space-12: 48px; --space-16: 64px;
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;
  --radius-xl: 20px; --radius-pill: 9999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.12);
  --page-px: 16px;
  --max-width: 430px;
}
```