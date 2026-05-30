# Stitch Prototype Generation Prompt — Sunny's Personal Website

## Overview

Generate a high-fidelity prototype for a personal website named **"Sunny"**. The site consists of **4 pages**: Home, About, Contact, and Works. Apply the **Serif editorial design system** described below throughout all pages. No real photographs or human avatars should appear anywhere in the prototype — use placeholder geometry, monogram initials, or decorative SVG shapes instead.

---

## Design System Summary

### Visual Style
- **Overall aesthetic:** Minimalist editorial — calm, warm, timeless. Think luxury print magazine.
- **Typography:**
  - Headlines: `Playfair Display` (serif) — used for all h1/h2/h3.
  - Body & UI: `Source Sans 3` (sans-serif).
  - Labels / small caps: `IBM Plex Mono`, uppercase, letter-spacing 0.15em.
- **Color Palette:**

| Role | Hex | Usage |
|---|---|---|
| Background | `#FAFAF8` | Warm ivory canvas |
| Primary text | `#1A1A1A` | Rich black body text |
| Secondary text | `#6B6B6B` | Warm gray captions |
| **Primary accent** | `#E8C84A` | Warm light yellow — brand identity |
| **Secondary accent** | `#5BAD72` | Muted green — paired with yellow for CTAs / highlights |
| Border | `#E8E4DF` | Thin rule lines and card edges |
| Card surface | `#FFFFFF` | Pure white card lift from ivory bg |

- **Borders:** 1px thin rule lines in `#E8E4DF`; accent top-border on cards `2px #E8C84A`.
- **Shadows:** Very subtle — `0 4px 12px rgba(26,26,26,0.06)`.
- **Border radius:** `rounded-lg` (8px) for cards; `rounded-md` (6px) for buttons & inputs.
- **Spacing:** Generous — section vertical padding `py-32` to `py-40`; max content width `max-w-5xl`.
- **Whitespace:** Active design element — let content breathe.

### Interaction & Motion Notes (annotate in prototype)
- Page transitions: **fade-in / fade-out** (opacity 0 → 1, 400ms ease-out).
- Mouse cursor: replaced by a **small animated sunflower icon** (annotate with a label).
- Loading screen: **vintage CRT TV power-on effect** — scanlines appear, image flickers in from center (annotate with label).
- Scroll effects: none (no parallax or scroll-triggered animations).
- All hover states: subtle — `200ms ease-out`; border color shifts; no dramatic movement.

---

## Global Layout

### Navbar (appears on all 4 pages)
- **Position:** Fixed, horizontally centered at the **top** of the viewport.
- **Style:** Floating pill shape — white background `#FFFFFF`, 1px border `#E8E4DF`, subtle shadow, `border-radius: 9999px`.
- **Width:** Auto-width based on content, centered on page.
- **Logo:** A stylized **sunflower icon** (geometric SVG, no photo) followed by wordmark **"SUNNY"** in Playfair Display italic, colored `#E8C84A`.
- **Nav links (left to right):** `Home` · `About` · `Contact` · `Works`
  - Font: Source Sans 3, medium weight, letter-spacing 0.05em.
  - Active page: underline in `#E8C84A`.
  - Hover: text color shifts to `#E8C84A`.
- **No hamburger / mobile menu** needed in this prototype (desktop viewport only).

### Footer (appears on all pages)
- Thin top rule `1px #E8E4DF`.
- Centered text: `© 2026 Sunny` in IBM Plex Mono small caps, muted gray.
- Minimal vertical padding `py-8`.

---

## Page 1 — Home

### Layout
Single full-viewport hero section. No scroll sections below the fold.

### Content
1. **Sunflower Logo Mark** — centered, large geometric sunflower SVG (no photo), approximately 80×80px. Use concentric circles + petal shapes in `#E8C48A` and `#E8C84A`. No human image.

2. **Headline:**
   ```
   HI, HERE IS SUNNY
   ```
   - Font: Playfair Display, `font-size: 4.5rem` (72px), normal weight, letter-spacing `-0.02em`.
   - Color: `#1A1A1A`.
   - Centered.

3. **Subheading / tagline** (one line below headline):
   ```
   AI Product Manager · Builder · Dreamer
   ```
   - Font: IBM Plex Mono, uppercase, `font-size: 0.75rem`, letter-spacing `0.15em`.
   - Color: `#6B6B6B`.
   - Centered. Flanked left and right by thin horizontal rule lines extending to `max-w-xs`.

4. **CTA Button — "Contact Me":**
   - Style: Filled, background `#5BAD72` (green accent), text white, Source Sans 3 medium, letter-spacing 0.05em.
   - Size: `height: 48px`, `padding: 0 2rem`, `border-radius: 6px`.
   - Centered below tagline, margin-top `2.5rem`.
   - Hover state annotation: border shifts, slight brightness increase.

5. **Decorative elements:**
   - Two thin horizontal rules at 1/3 and 2/3 viewport height, full width, `#E8E4DF`, 1px, very low opacity (~20%).
   - Ambient soft glow: large blurred circle `120px`, opacity 8%, color `#E8C84A`, positioned behind the sunflower.

### Spacing
- All content vertically centered in viewport.
- Background: `#FAFAF8`.

---

## Page 2 — About

### Layout
Two visual zones stacked vertically:
1. **Section header** (top, full width).
2. **Content area** (single centered column, `max-w-2xl`).

### Content

#### Section Label (at top)
```
— ABOUT ME —
```
- IBM Plex Mono, uppercase, letter-spacing 0.15em, color `#E8C84A`, centered.
- Rule lines extending left and right.

#### Self-Introduction Block
- **No avatar photo.** Use a decorative monogram placeholder instead: a square `120×120px` card, white background, 1px border `#E8C84A` (accent top border 2px), centered inside place the initials **"S"** in Playfair Display, `font-size: 3rem`, color `#E8C84A`.

- **Body text** below monogram:
  ```
  I am a continuously upgrading AI Product Manager,
  with keen perception of cutting-edge AI technology.
  I love trying things hands-on and turning ideas into reality.
  ```
  - Font: Source Sans 3, `font-size: 1.125rem`, line-height `1.75`, color `#1A1A1A`.
  - Centered alignment.
  - Max-width `max-w-xl`, centered on page.

#### Thin rule divider
- 1px `#E8E4DF`, width `120px`, centered, margin `2.5rem auto`.

#### Tags / Keywords row (optional decorative)
Three pill tags centered in a row:
- `AI` · `Product` · `Builder`
- Style: border `1px #E8C84A`, text `#E8C84A`, background transparent, IBM Plex Mono small caps, `padding: 4px 16px`, `border-radius: 9999px`.

### Spacing
- Section top padding `pt-40` (accounts for fixed navbar).
- Generous `py-32` overall.

---

## Page 3 — Contact

### Layout
Centered single column, `max-w-lg`, vertically centered in viewport.

### Content

#### Section Label
```
— CONTACT ME —
```
Same label style as About page.

#### Contact Cards
Two horizontally placed cards side by side (`gap-6`, `max-w-sm` each):

**Card 1 — WeChat**
- Card: white background, 1px border `#E8E4DF`, accent top border `2px #E8C84A`, `border-radius: 8px`, padding `p-8`.
- Icon area: a simple geometric QR code placeholder (`80×80px` square grid of small squares in `#1A1A1A`, no real QR).
- Label below icon: `WeChat` in IBM Plex Mono uppercase, letter-spacing 0.15em, color `#6B6B6B`.
- Sub-label: `Scan to connect` in Source Sans 3, `font-size: 0.875rem`, muted gray.

**Card 2 — GitHub**
- Same card style.
- Icon area: GitHub's octocat silhouette as a simple geometric shape / or just the GitHub logo mark in `#1A1A1A`, `48×48px`.
- Label: `GitHub` in IBM Plex Mono uppercase.
- Sub-label: `@sunny` in Source Sans 3, muted gray.
- A small arrow `→` in `#E8C84A` at bottom right of card (indicates link).

#### Note
```
No human avatar or photograph. Use abstract decorative SVG icons only.
```

### Spacing
- `py-32`, cards centered.

---

## Page 4 — Works (Portfolio)

### Layout
Centered single column, vertically centered in viewport.

### Content

#### Section Label
```
— WORKS —
```
Same label style.

#### "Coming Soon" State
- Large display text:
  ```
  Coming Soon
  ```
  - Font: Playfair Display italic, `font-size: 3.5rem`, color `#1A1A1A`, centered.

- Subtext below:
  ```
  Something is being crafted. Stay tuned.
  ```
  - Source Sans 3, `font-size: 1rem`, color `#6B6B6B`, centered.

- Decorative element: three horizontal rule lines stacked with `gap-3`, each progressively shorter (100%, 60%, 30% of a `200px` base width), color `#E8C84A`, centered — suggesting a loading / building metaphor.

- Optional: a single small sunflower SVG icon (same as navbar logo, `32×32px`) centered below the rule lines, with a rotation animation annotation (slow spin 10s).

### Spacing
- `py-40`, all content vertically centered.

---

## Prototype Annotation Notes

Please add the following annotation callouts in the prototype:

1. **[Cursor FX]** On all pages — label the cursor area: *"Custom cursor: replaced with a small animated sunflower that rotates slowly. Petals are yellow `#E8C84A`."*

2. **[Page Load FX]** On Home page — label the initial viewport: *"Loading screen: vintage CRT TV power-on effect. Screen is black → horizontal scanlines appear → image snaps in from center with a brief brightness flicker. Duration ~1.2s."*

3. **[Page Transition FX]** On nav links — label: *"Click triggers fade-out (opacity → 0, 200ms), then new page fades in (opacity 0→1, 400ms). Smooth, no translate."*

4. **[Sunflower Logo]** On navbar — label: *"SVG geometric sunflower. 8 elliptical petals in `#E8C84A` arranged radially around a circle center. No raster image."*

5. **[No Images]** Global annotation: *"This prototype contains NO photographs, avatar images, or raster illustrations. All visuals are SVG geometry, monograms, or CSS shapes."*

---

## Summary Checklist

- [ ] 4 pages: Home, About, Contact, Works
- [ ] Fixed floating pill navbar on all pages with sunflower logo
- [ ] Warm ivory background `#FAFAF8` throughout
- [ ] Yellow `#E8C84A` primary accent + green `#5BAD72` CTA
- [ ] Playfair Display for all headlines
- [ ] IBM Plex Mono small caps for all section labels
- [ ] No human photos or avatars anywhere
- [ ] Annotated: cursor FX, loading FX, page transition FX
- [ ] Thin rule lines as structural elements throughout
- [ ] Generous whitespace — editorial, not cramped
