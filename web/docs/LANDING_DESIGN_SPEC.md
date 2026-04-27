# Kinly — Landing Page Design Spec

**Date:** April 2026
**Status:** Draft — awaiting approval
**Dependencies:** LANDING_BRAND.md (approved), LANDING_CONTENT.md (approved)

---

## Global Layout

### Grid
- Max content width: **1200px**, centered
- Padding: 80px horizontal on desktop, 24px on mobile
- Sections: full-bleed backgrounds, content constrained to grid

### Spacing System (section-level)
- Between sections: **120px** desktop, **80px** mobile
- Section internal padding (top/bottom): **100px** desktop, **64px** mobile
- Between headline and body: **24px**
- Between overline and headline: **12px**
- Between body and CTA/cards: **48px** desktop, **32px** mobile

### Responsive Breakpoints
- Desktop: >= 1024px
- Tablet: 768px – 1023px
- Mobile: < 768px

---

## Navigation Bar

**Layout:** Sticky top, full-width, `white` background with `rgba(255,255,255,0.85)` + `backdrop-blur(12px)` when scrolled. Height: **64px**. Z-index above all content.

**Left:** `kinly` wordmark in `purple-800`, Manrope 800, 22px
**Center-right:** `Features` | `How It Works` | `Security` — Inter 500, 15px, `slate-600`, hover → `purple-800`
**Right:** `Join the Waitlist` — pill button, `purple-800` bg, `white` text, 14px weight 600, padding 10px 24px, border-radius 9999px. Hover → `purple-700` with subtle scale(1.02)

**Mobile:** Wordmark left. Burger icon right. Slide-down menu on tap with links + CTA.

**Scroll behavior:** Appears transparent on hero (no bg), gains white background + bottom border (`slate-200`) on scroll (triggered at 60px scroll).

---

## Section 1 — Hero

**Background:** `slate-50` with two floating gradient orbs:
- Orb 1: top-right, 500px diameter, purple-400 → lime-500, opacity 0.12, blur 120px
- Orb 2: bottom-left, 400px diameter, purple-600 → purple-400, opacity 0.08, blur 100px

**Layout:** Two columns on desktop (55% text, 45% visual). Stacked on mobile (text above, visual below).

**Text column (left on desktop):**
- Overline: `YOUR FAMILY'S HEALTH COMPANION` — 13px, Inter 600, `purple-600`, tracking +0.08em, uppercase. Margin-bottom 12px.
- Headline: `Health records shouldn't live in drawers.` — 72px/76px, Inter 800, `slate-950`, tracking -0.03em. The word "drawers" wrapped in a `<span>` with `lime-500` background, padding 2px 12px, border-radius 8px, color `purple-950`. Mobile: 40px/44px.
- Subheadline: Inter 400, 20px/30px, `slate-600`. Max-width 540px. Margin-top 24px. Mobile: 18px/28px.
- Waitlist form: Margin-top 40px. Flexbox row on desktop, stacked on mobile.
  - Input: 48px height, `white` bg, border 1.5px `slate-300`, border-radius 12px, padding 0 16px, Inter 400 16px, placeholder `slate-400`. Focus: border `purple-600`, ring 3px `purple-100`.
  - Button: 48px height, `lime-500` bg, `purple-950` text, Inter 600 16px, border-radius 12px, padding 0 28px, margin-left 8px (desktop) or margin-top 12px (mobile, full-width). Hover: `lime-400`, scale(1.02). Active: `lime-600`.
  - Sub-text below form: 14px, Inter 400, `slate-500`, margin-top 12px.
- Trust strip: Margin-top 32px. Flex row, gap 24px. Each item: Hugeicon (16px, `slate-400`) + text (14px, Inter 500, `slate-500`). Mobile: wrap to 2 rows.

**Visual column (right on desktop):**
- Primary phone mockup: iPhone 15 Pro frame (dark titanium), showing Dashboard screen. Rotated 3deg clockwise. Width: 320px. Drop shadow: 0 25px 50px rgba(14, 10, 60, 0.15).
- Secondary phone mockup: Behind and to the left, 80% scale, showing MemberProfile. Rotated -2deg. Opacity 0.9. z-index behind primary.
- Lime glow: 300px circle, `lime-500` at opacity 0.08, blur 80px, centered behind the primary phone.
- Mobile: Single phone mockup, centered, no rotation, width 280px, margin-top 48px.

**Animations (on load, not scroll):**
- Overline: fade-up, 0ms delay
- Headline: fade-up, 100ms delay
- Subheadline: fade-up, 200ms delay
- Form: fade-up, 300ms delay
- Trust strip: fade-up, 400ms delay
- Primary phone: fade-up + slide from right 40px, 200ms delay, spring(0.7, 0.3)
- Secondary phone: fade-up + slide from right 60px, 400ms delay, spring(0.7, 0.3)
- Gradient orbs: fade-in over 1200ms, subtle float animation (translateY +/- 20px, 8s loop)

---

## Section 2 — The Problem

**Background:** `white`

**Layout:** Centered text top, then 3 cards in a row. Mobile: stacked.

**Text block:**
- Overline: `THE REALITY` — centered, same style as hero overline but color `purple-600`
- Headline: centered, 48px/52px, Inter 700, `slate-950`, max-width 700px, margin auto. Mobile: 32px/36px.

**Cards:** 3-column grid, gap 24px. Each card:
- Background: `slate-50`
- Border: 1px `slate-200`
- Border-radius: 16px
- Padding: 32px
- Icon: Hugeicon 40px in a 64px circle with `purple-100` bg, `purple-600` icon color
- Title: 20px, Inter 600, `slate-950`, margin-top 20px
- Body: 16px/26px, Inter 400, `slate-600`, margin-top 8px
- Mobile: single column, full-width cards

**Animations (scroll-triggered):**
- Text block: fade-up on scroll into view
- Cards: staggered fade-up, 100ms between each (left → right)

---

## Section 3 — Product Showcase

**Background:** `purple-900`. Full-bleed. This is the visual centerpiece of the page.

**Top text (centered):**
- Overline: `WHAT KINLY DOES` — `purple-400`, uppercase
- Headline: `Everything your family's health needs. One app.` — `white`, 48px. "One app." in `lime-500`.

**Feature blocks:** 4 blocks, alternating layout. Each block is a 2-column row (text + phone mockup). Odd blocks: text left, phone right. Even blocks: phone left, text right. Mobile: always stacked (text above, phone below).

**Each feature block:**
- Overline: `lime-500`, 13px, Inter 600, uppercase, tracking +0.08em
- Headline: `white`, 32px/38px, Inter 700, tracking -0.01em
- Body: `purple-200` (or `slate-300` — light enough to read on dark), 18px/28px, Inter 400, max-width 460px
- Phone mockup: iPhone 15 Pro frame (dark titanium), width 300px, showing the relevant screen. Subtle lime glow behind (200px, opacity 0.06). Slight tilt (2-3deg, alternating direction).

**Spacing between feature blocks:** 100px desktop, 64px mobile.

**Visual extras on dark section:**
- Subtle dot grid pattern: 1px dots in `purple-800` (slightly lighter than bg), spaced 32px apart, opacity 0.4. Covers the full section background.
- Top edge: gradient fade from `white` (previous section) to `purple-900`, height 80px. Creates a smooth transition instead of a hard color cut.
- Bottom edge: same gradient fade to next section's `slate-50`.

**Animations (scroll-triggered, per feature block):**
- Text: fade-up, 0ms
- Phone mockup: fade-up + slide from the side it's on (40px), 150ms delay, spring easing
- Each feature block triggers independently as it enters viewport

---

## Section 4 — How It Works

**Background:** `slate-50`

**Layout:** Centered text top, then 3 steps in a horizontal row with connecting lines. Mobile: vertical stack with a connecting vertical line.

**Text block:**
- Overline: `HOW IT WORKS` — `purple-600`
- Headline: `Up and running in under 2 minutes.` — 48px, `slate-950`

**Steps:** 3-column grid, gap 40px. Each step:
- Number: `lime-500`, 56px, Inter 800, tracking -0.03em. Positioned top-left of card.
- Connector line between steps: 2px dashed line in `slate-300`, horizontally connecting step 1 → 2 → 3. Positioned at the vertical center of the number. Mobile: vertical dashed line on the left side.
- Title: 20px, Inter 600, `slate-950`, margin-top 16px
- Body: 16px/26px, Inter 400, `slate-600`, margin-top 8px
- Icon: Hugeicon 32px, `purple-400`, positioned top-right of card (decorative, secondary to the number)

**Step card treatment:** No visible card. Clean, open layout. The numbers and connector line provide structure.

**Animations (scroll-triggered):**
- Headline: fade-up
- Steps: stagger left-to-right, 150ms each. Each step fades up + the number counts up from 00 to its value.
- Connector line: draws from left to right after all steps are visible (400ms duration)

---

## Section 5 — The AI Upgrade

**Background:** `white`

**Layout:** Centered text top, then a comparison component below.

**Text block:**
- Overline: `FOR THE AI-CURIOUS` — `purple-600`
- Headline: `Already using ChatGPT for health questions? You're halfway there.` — 48px, `slate-950`. "You're halfway there." in `lime-500` (text color, not highlight — because we're on white, use `lime-700` for AA contrast).
- Body paragraph: 18px/28px, Inter 400, `slate-600`, max-width 640px, centered. Margin-top 20px.

**Comparison component:**
Two-column layout with a center divider. Max-width 900px, centered.
- Left column header: `Without Kinly` — 16px, Inter 600, `slate-500`, with a small `slate-400` X icon
- Right column header: `With Kinly` — 16px, Inter 600, `purple-800`, with a small `lime-500` check icon
- Each row: left text in `slate-600` on `slate-50` bg, right text in `slate-950` on `lime-200` bg (very subtle lime tint)
- Row height: auto, padding 16px 20px, border-bottom 1px `slate-200`
- Border-radius on the whole table: 16px, overflow hidden
- Border: 1px `slate-200`
- Mobile: stacked — each row becomes a before/after pair

**Animations (scroll-triggered):**
- Text: fade-up
- Table: fade-up, 200ms delay
- Rows: stagger top-to-bottom, 80ms each, fade-up + slight slide-left (10px)

---

## Section 6 — Security & Trust

**Background:** `slate-50`

**Layout:** Centered text top, then 3 columns. Mobile: stacked.

**Text block:**
- Overline: `YOUR DATA IS SACRED` — `purple-600`
- Headline: `Your family's most sensitive data. Treated like it.` — 48px, `slate-950`

**Trust columns:** 3-column grid, gap 32px. Centered text in each.
- Icon: Hugeicon 48px in `purple-800`. No background circle — raw icon, bold.
- Title: 20px, Inter 600, `slate-950`, margin-top 20px
- Body: 16px/26px, Inter 400, `slate-600`, margin-top 8px, max-width 300px, centered text
- Mobile: stacked, centered

**Animations (scroll-triggered):**
- Text: fade-up
- Columns: stagger left-to-right, 100ms each. Icons scale from 0.8 → 1.0 with spring

---

## Section 7 — Stats

**Background:** `white`

**Layout:** Centered overline + headline, then 3 stat blocks in a row.

**Text block:**
- Overline: `BUILT FOR FAMILIES LIKE YOURS` — `purple-600`
- Headline: `The numbers so far.` — 48px, `slate-950`

**Stat blocks:** 3-column grid, gap 48px, centered text.
- Number: `lime-600` (contrast-safe on white), 64px, Inter 800, tracking -0.03em. Animated counter.
- Label: 16px, Inter 400, `slate-500`, margin-top 8px, max-width 200px, centered
- Dividers: thin vertical lines (`slate-200`, 1px, 60% height) between stat blocks on desktop. Hidden on mobile.
- Mobile: horizontal scroll or stacked

**Animations (scroll-triggered):**
- Numbers: count up from 0 to target value over 1.5 seconds, easeOut. Trigger once on first scroll into view.
- Labels: fade-up after number reaches target

---

## Section 8 — Final CTA

**Background:** `purple-950`. Full-bleed. Gradient orb: single large lime glow (600px, opacity 0.06, centered behind the headline).

**Layout:** Centered, single column. Generous padding (120px top/bottom desktop, 80px mobile).

- Headline: `Your family's health deserves better than drawers and memory.` — `white`, 48px, Inter 700. "drawers and memory." in `lime-500`. Mobile: 32px.
- Subheadline: `Join the waitlist and be the first to try Kinly.` — `purple-300`, 20px, Inter 400, margin-top 16px.
- Waitlist form: same specs as hero form, but lime button on dark background. Input border: `purple-700`. Input bg: `purple-900` with `white` text. Placeholder: `purple-400`. Margin-top 40px.
- Sub-text: `Free early access. No credit card required.` — `purple-400`, 14px.

**Animations (scroll-triggered):**
- Headline: fade-up
- Subheadline: fade-up, 100ms
- Form: fade-up, 200ms
- Lime orb: slow pulse (scale 1.0 → 1.05, 4s loop, opacity oscillate 0.04 → 0.08)

---

## Footer

**Background:** `purple-950` (continuous from Section 8 — no visual break between CTA and footer).

**Divider:** 1px line in `purple-800` separating CTA section from footer content.

**Layout:** 3-column grid on desktop (logo/tagline | product links | company links). Stacked on mobile.

**Left column:**
- `kinly` wordmark: `white`, Manrope 800, 20px
- Tagline below: `Your family's health, finally organized.` — `purple-400`, 14px, Inter 400, margin-top 8px
- Copyright: `(c) 2026 Kinly. All rights reserved.` — `purple-500`, 13px, margin-top 24px

**Middle column:**
- Header: `Product` — `purple-300`, 13px, Inter 600, uppercase, tracking +0.06em
- Links: `Features` | `How It Works` | `Security` — `purple-400`, 15px, Inter 400, line-height 2.0. Hover: `white`

**Right column:**
- Header: `Company` — same style as middle
- Links: `Privacy Policy` | `Terms of Service` | `Contact` — same style

**Social row:** Below columns, flex row, gap 16px. Hugeicons 20px in `purple-500`. Hover: `white`. Twitter/X, LinkedIn, Instagram.

**Bottom padding:** 48px below last element.

---

## Component Specs

### Waitlist Input + Button

**Desktop (inline):**
```
[  Enter your email          ] [ Join the Waitlist ]
```
- Container: flex row, gap 8px
- Input: flex-grow, height 52px, border-radius 12px
- Button: flex-shrink-0, height 52px, border-radius 12px, padding 0 28px

**Mobile (stacked):**
```
[  Enter your email                              ]
[          Join the Waitlist                      ]
```
- Both: width 100%, height 52px
- Gap: 12px

**States:**
- Default input: `white` bg, `slate-300` border
- Focus input: `purple-600` border, `purple-100` ring (3px)
- Button hover: scale(1.02), background lightens
- Button active: scale(0.98)
- Loading: button text replaced with a small spinner
- Success: form replaced with success message (fade transition, 400ms)

### Phone Mockup Frame

**Treatment:**
- Device: iPhone 15 Pro, dark titanium bezel
- Implementation: CSS border-radius (48px) + border (8px solid `#1a1a1a`) + inner border-radius (40px) for screen
- Screen: overflow hidden, showing the screenshot at full bleed within the inner radius
- Shadow on light bg: `0 25px 60px rgba(14, 10, 60, 0.12), 0 10px 20px rgba(14, 10, 60, 0.08)`
- Shadow on dark bg: `0 25px 60px rgba(0, 0, 0, 0.3)`
- Lime glow behind (dark sections only): radial gradient, `lime-500`, opacity 0.06, 1.5x width of phone

### Section Transition Gradients

Between light → dark sections and dark → light sections, instead of a hard color cut:
- Height: 80px
- Implementation: `linear-gradient(to bottom, [color-above], [color-below])`
- Placed as a pseudo-element at the bottom of the outgoing section

---

## Animation Choreography Summary

| Element | Trigger | Animation | Duration | Easing |
|---|---|---|---|---|
| Hero text | Page load | Staggered fade-up (translate 20px → 0) | 600ms each | ease-out |
| Hero phones | Page load | Fade-up + slide-right 40px | 800ms | spring(0.7, 0.3) |
| Gradient orbs | Page load | Fade-in + infinite float | 1200ms in, 8s loop | ease-in-out |
| Section text | Scroll into view | Fade-up (translate 20px → 0) | 600ms | ease-out |
| Cards/columns | Scroll into view | Staggered fade-up, 100ms gap | 500ms each | ease-out |
| Phone mockups | Scroll into view | Fade-up + slide from side 40px | 700ms | spring(0.8, 0.2) |
| Stat counters | Scroll into view (once) | Count 0 → value | 1500ms | ease-out |
| Connector line | After steps visible | Line draws left → right | 400ms | ease-in-out |
| CTA button | Hover | Scale 1 → 1.02 | 200ms | ease-out |
| Lime orb (CTA) | Always | Pulse scale + opacity | 4000ms loop | ease-in-out |
| Nav background | Scroll > 60px | Fade-in white bg | 200ms | ease-out |

**Intersection Observer settings:**
- Trigger threshold: 0.15 (element 15% in viewport)
- `triggerOnce: true` for all scroll animations — no replay on scroll back

---

## Responsive Summary

| Element | Desktop (>=1024) | Tablet (768-1023) | Mobile (<768) |
|---|---|---|---|
| Hero layout | 2 columns | 2 columns (55/45) | Stacked |
| Hero headline | 72px | 56px | 40px |
| Section headline | 48px | 40px | 32px |
| Problem cards | 3 columns | 3 columns | 1 column |
| Feature blocks | 2 columns alternating | 2 columns | Stacked |
| How it works steps | 3 columns + h-line | 3 columns | 1 column + v-line |
| Comparison table | 2 columns side by side | 2 columns | Stacked pairs |
| Trust pillars | 3 columns | 3 columns | 1 column |
| Stats | 3 columns + dividers | 3 columns | 1 column, no dividers |
| Waitlist form | Inline (input + button) | Inline | Stacked |
| Nav | Full links + CTA | Full links + CTA | Burger menu |
| Section padding | 100px top/bottom | 80px | 64px |
| Content max-width | 1200px | 100% - 48px | 100% - 48px |
| Phone mockups | 320px, tilted | 280px, tilted | 260px, no tilt |
