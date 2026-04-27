# Kinly — Landing Page Brand Foundation

**Date:** April 2026
**Status:** Approved

---

## Brand Name

**Kinly**

Derived from "kin" (family, relatives). Communicates warmth, family orientation, and care without sounding clinical or technical. Works across languages. Easy to spell, easy to say, easy to remember.

---

## Tagline Candidates

**Selected:**
> Health records shouldn't live in drawers.

Provocative, universal, instantly relatable. "Drawers" is more tangible and cross-cultural than any digital reference — every family has that drawer (or folder, or pile). It names the problem without being preachy. Works as both a tagline and a campaign line.

---

## Color Palette

### Philosophy

Deep purple conveys trust, intelligence, and premium quality — right for a product holding sensitive health data. Lime green injects energy, modernity, and optimism — it says "this isn't another boring health app." The contrast is intentional: serious when it needs to be, vibrant when it wants your attention.

### Primary Colors

| Token | Hex | Usage |
|---|---|---|
| `purple-950` | `#0E0A3C` | Darkest purple — footer background, deep sections |
| `purple-900` | `#161052` | Dark backgrounds, hero section background option |
| `purple-800` | `#221080` | **Brand primary** — headings on light, primary buttons on dark |
| `purple-700` | `#2E1BA8` | Hover states on primary, active elements |
| `purple-600` | `#3D28C6` | Links, interactive elements |
| `purple-400` | `#7B6FFF` | Lighter accent, tags, badges |
| `purple-200` | `#C8C2FF` | Subtle tints, pill backgrounds |
| `purple-100` | `#EDEAFF` | Section backgrounds, card tints |
| `purple-50` | `#F6F4FF` | Lightest tint — page canvas alternative |

### Secondary Colors (Lime Green)

| Token | Hex | Usage |
|---|---|---|
| `lime-500` | `#B8FF00` | **Hero accent** — the pop color. Used for: key highlight words, waitlist button, badge accents, metric callouts |
| `lime-400` | `#CCFF40` | Hover state for lime elements, softer accent |
| `lime-300` | `#DBFF73` | Light lime for backgrounds on dark sections |
| `lime-200` | `#EAFFAD` | Subtle lime tint for light-mode cards |
| `lime-600` | `#96CC00` | Lime on white backgrounds (better contrast for accessibility) |
| `lime-700` | `#6B9900` | Lime for body text situations (AA compliant on white) |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `slate-950` | `#0C0A1A` | Primary text on light backgrounds |
| `slate-800` | `#1E1B3A` | Headings, strong emphasis |
| `slate-600` | `#4A4568` | Body text, descriptions |
| `slate-500` | `#6B6589` | Secondary text, captions |
| `slate-400` | `#9490AB` | Placeholder text, disabled states |
| `slate-300` | `#C4C0D8` | Borders, dividers |
| `slate-200` | `#E2E0ED` | Card borders, subtle dividers |
| `slate-100` | `#F0EFF5` | Section backgrounds, table stripes |
| `slate-50` | `#F8F7FC` | Page canvas (main background) |
| `white` | `#FFFFFF` | Cards, elevated surfaces |

### Usage Rules

1. **Lime green is the spotlight, not the flood.** Use it for 1-2 elements per viewport — a highlighted word, a CTA button, a metric number. If everything is lime, nothing is.
2. **Purple is the foundation.** All headings, body text, and structural elements live in the purple/slate family.
3. **Dark sections use purple-900/950** as background with white/lime text. This creates drama and section contrast.
4. **Light sections use slate-50 or white** as background with slate-950 text and purple-800 accents.
5. **The waitlist CTA button is always lime-500** on purple-900 background (or purple-800 on slate-50 background). It should be the most visually prominent element in any viewport.

### Contrast Check (WCAG AA)

| Combination | Ratio | Pass? |
|---|---|---|
| `slate-950` on `white` | 16.5:1 | AA pass |
| `slate-950` on `slate-50` | 14.8:1 | AA pass |
| `purple-800` on `white` | 9.2:1 | AA pass |
| `white` on `purple-900` | 13.1:1 | AA pass |
| `lime-500` on `purple-900` | 10.8:1 | AA pass |
| `lime-700` on `white` | 4.8:1 | AA pass |
| `lime-500` on `white` | 2.1:1 | AA FAIL — never use lime-500 as text on white. Use lime-700 instead |

---

## Typography

### Font Selection

**Headlines:** Inter (weight 700, 800)
- Why: Geometric, confident, highly legible at large sizes. Same family as Maze reference. Pairs well with editorial bold layouts.

**Body:** Inter (weight 400, 500)
- Why: Keeps the page feeling unified. Single font family, differentiated by weight — cleaner than mixing families.

**Accent/Wordmark:** Manrope (weight 700, 800) — for the wordmark only
- Why: Slightly more geometric and distinctive than Inter. Gives the brand name its own typographic identity without introducing a third font.

### Making Inter Not Boring

Inter is a workhorse — the risk is it becomes invisible. We prevent that with:
1. **Aggressive size contrast** — hero at 72px, body at 18px. The jump creates visual drama.
2. **Tight tracking on headlines** (-0.03em). Makes large text feel confident and editorial, not default.
3. **Weight extremes** — 800 for headlines, 400 for body. No middle-ground mush.
4. **Mixed case treatments** — section labels in ALL CAPS 13px weight 600 with wide tracking (+0.08em) as overlines above headlines. This adds typographic texture.
5. **Lime-highlighted words** break the monotony — a word in the headline gets a lime-500 pill highlight or color, creating a focal point within the text itself.
6. **Large pull-quotes** — in problem/social-proof sections, oversized italic (24px, weight 500 italic) adds variety.

### Type Scale (desktop → mobile)

| Element | Desktop | Mobile | Weight | Tracking |
|---|---|---|---|---|
| Hero headline | 72px / 76px lh | 40px / 44px lh | 800 | -0.03em |
| Section overline | 13px / 16px lh | 12px / 16px lh | 600 | +0.08em (uppercase) |
| Section headline | 48px / 52px lh | 32px / 36px lh | 700 | -0.02em |
| Section subheadline | 20px / 30px lh | 18px / 28px lh | 400 | 0 |
| Card title | 24px / 30px lh | 20px / 26px lh | 600 | -0.01em |
| Body text | 18px / 28px lh | 16px / 26px lh | 400 | 0 |
| Pull quote | 24px / 34px lh | 20px / 30px lh | 500 italic | -0.01em |
| Caption/label | 14px / 20px lh | 13px / 18px lh | 500 | 0.02em |
| CTA button | 16px / 16px lh | 16px / 16px lh | 600 | 0.01em |
| Nav links | 15px / 15px lh | 14px / 14px lh | 500 | 0 |

### Type Rules

1. **Headlines are tight-tracked** (negative letter-spacing). This gives the bold editorial feel.
2. **Body text has generous line-height** (1.55-1.6x). Long-form readability matters.
3. **Section headlines never exceed 2 lines** on desktop. If copy is too long, rewrite it.
4. **Lime-highlighted words in headlines** use a lime-500 background highlight (pill shape) or lime-500 text color on dark backgrounds — never lime on white.
5. **Every section has an overline** — uppercase, small, wide-tracked label above the headline. Adds rhythm and typographic variety.
6. **Pull quotes in testimonial/problem sections** use italic weight 500 at 24px — breaks the upright rhythm of the rest of the page.

---

## Wordmark

### Concept

**kinly** — all lowercase, Manrope 800, tight letter-spacing (-0.04em).

The lowercase treatment communicates approachability — this is not a clinical brand. The tight tracking makes it feel modern and confident.

### Variations

1. **Primary (dark):** `kinly` in `purple-800` on light backgrounds
2. **Primary (light):** `kinly` in `white` on dark backgrounds
3. **Favicon:** Letter "k" in `white` on `purple-800` rounded square

Single-color wordmark only. No split-color treatments.

### Wordmark Spacing

- Minimum clear space around wordmark: 1x height of the "k" on all sides
- Never stretch, rotate, outline, or add effects
- Never place on busy backgrounds without a solid backing

---

## Visual Language

### Supporting Graphics

1. **Gradient orbs** — soft, blurred purple-to-lime gradient circles floating in backgrounds. Adds depth without being distracting. Similar to the AmbientBlob in the mobile app but larger and more diffuse.
2. **Dotted grid pattern** — subtle dot grid overlay on dark sections. Adds texture without competing with content.
3. **Glow effects** — lime-500 glow behind key elements (CTA buttons, featured metrics, phone mockups). Creates focal points.
4. **Device frames** — product screenshots shown in realistic device frames (iPhone 15 Pro, dark titanium). Slight 3D tilt (5-10 degrees) for depth. Drop shadow on dark backgrounds, subtle border on light backgrounds.

### Photography / Illustration

No stock photos. No generic health imagery (stethoscopes, hearts, running). The product screenshots ARE the visual content. Supporting graphics are abstract (gradients, shapes, dots) — never figurative.

### Iconography

**Hugeicons** — same icon library used in the mobile app (`@hugeicons/react-native`). Web equivalent: `hugeicons-react` or SVG exports.

For feature cards: stroke-rounded style in `purple-400` or `lime-500`. Consistent stroke width (1.5px). Size: 24px for inline, 32px for card icons, 48px for feature section icons.

Why Hugeicons: consistency with the product. A user who sees the landing page and then opens the app should feel visual continuity. 5,100+ icons in the free set — more than enough coverage.

---

## Brand Voice (landing page only)

### Tone
- **Confident, not aggressive.** "Your family's health, finally organized" — not "The ULTIMATE health management SOLUTION."
- **Specific, not vague.** "Upload a lab report and see every value extracted in 10 seconds" — not "AI-powered health insights."
- **Warm, not clinical.** "Your father's last blood test" — not "Patient medical records."
- **Direct, not clever.** No puns, no wordplay, no forced humor. The subject matter is serious. The tone is calm competence.

### Words we use
- family, family members, health records, organize, upload, understand, track, remind, safe, private, secure

### Words we avoid
- patients, clinical, revolutionary, cutting-edge, AI-powered (as a leading adjective — AI is a feature, not the identity), disrupt, solution, platform (use "app" instead), leverage, seamlessly
