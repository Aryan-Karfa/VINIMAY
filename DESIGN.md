# Design System Strategy: The Conscious Curator

## 1. Overview & Creative North Star
This design system is built on the philosophy of **"The Conscious Curator."** In a world of cluttered marketplaces, we stand apart through editorial restraint and high-fashion intentionality. We do not simply "list" items; we curate an experience that feels as much like a high-end fashion lookbook as it does a functional tech platform.

The system breaks the "standard app" mold by leveraging **intentional asymmetry**, generous **white space (white space as a feature, not a void)**, and a sophisticated interplay between structured sans-serif utility and expressive serif storytelling. We move away from rigid containers and heavy borders, opting instead for a layered, organic feel that mimics the tactile experience of fine paper and sustainable fabrics.

---

### 2. Colors & Tonal Depth
Our palette is rooted in organic warmth. While standard tech uses sterile grays, we use `surface` tones with a hint of bone and linen to ground the experience.

#### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or separate content blocks. Structural boundaries must be achieved through background color shifts (e.g., a `surface-container-low` section sitting on a `background` base) or through the use of vertical whitespace (`spacing-12` or `spacing-16`).

#### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
- **Level 0 (Base):** `background` (#FAFAF8) – The canvas.
- **Level 1 (Sections):** `surface-container-low` (#F2F4F2) – For alternate content blocks.
- **Level 2 (Cards/Modals):** `surface-container-lowest` (#FFFFFF) – High-priority interactive elements.
- **Level 3 (Elevated):** `surface-bright` – Floating elements or active states.

#### The "Glass & Gradient" Rule
To escape the "flat" look, use **Glassmorphism** for floating UI like the mobile navigation bar or sticky headers. Apply `surface` colors at 80% opacity with a `20px` backdrop blur. 
*   **Signature Textures:** For primary CTAs and hero sections, use a subtle linear gradient (135°) transitioning from `secondary` (#3A684D) to `secondary_dim` (#2E5C41). This adds a "soul" and depth that flat color cannot provide.

---

### 3. Typography
Typography is our primary tool for brand authority. We balance the precision of 'Inter' with the editorial flair of 'Playfair Display' (referenced in tokens as our expressive serif).

- **Display & Headline (Serif):** Use `display-lg` through `headline-sm` for hero taglines, section headers, and "Fashion-Tech" moments. This should feel like a magazine masthead.
- **Title & Body (Sans):** Use `title-lg` and `body-md` for functional information. Inter provides the "Tech" in fashion-tech—clean, legible, and confident.
- **Labels (Caps/Monospace Style):** Use `label-md` in all-caps with `0.05em` letter spacing for tags (e.g., "SUSTAINABILITY SCORE") to create a utilitarian, "architectural" feel.

---

### 4. Elevation & Depth
We eschew traditional drop shadows for **Tonal Layering**.

- **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` background. The subtle shift in hex value creates a soft, natural lift without the "dirty" look of standard shadows.
- **Ambient Shadows:** If a floating effect is required (e.g., a "Sell" button), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(45, 52, 50, 0.06)`. The shadow color must be a tint of `on_surface`, never pure black.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **20% opacity**. 100% opaque borders are strictly forbidden.
- **Glassmorphism:** Use for persistent navigation. It allows the rich photography of the marketplace to bleed through, softening the edges of the interface.

---

### 5. Components

#### Buttons
- **Primary:** Pill-shaped (`rounded-full`). Background: `secondary` (#3A684D). Text: `on_secondary`.
- **Secondary:** Pill-shaped. Background: `primary` (#1A1A1A). Text: `on_primary`.
- **Ghost:** Pill-shaped. 1.5px border using `outline_variant` at 40% opacity. 

#### Cards & Lists
- **The "No-Divider" Rule:** Never use horizontal lines to separate list items. Use `spacing-4` (1.4rem) or `spacing-5` (1.7rem) of vertical gap to let the content breathe.
- **Cards:** Use `radius-lg` (16px). For high-end product cards, allow images to "bleed" to the edges or overlap the container slightly for an editorial look.

#### Inputs
- **Surface:** Use `surface_container` (#EBEFEC) background.
- **Focus State:** Transition to a 1.5px border of `secondary` (Sustainability Green).

#### Navigation
- **Mobile Bottom Nav:** Use a glassmorphic blur with `surface_container_lowest` at 85% opacity.
- **Desktop Sidebar:** Fixed, high-contrast. Use `primary` text on `background`.

#### Custom Component: The "Credit Chip"
- A specialized chip for the marketplace credits. Use `tertiary_container` (Amber Light) with `on_tertiary_container` (Amber Text). Apply a subtle `0.5px` border of `tertiary` to make it feel like a "coin" or "reward."

---

### 6. Do's and Don'ts

#### Do
- **Do** use intentional white space. If a layout feels "full," remove an element.
- **Do** overlap typography on imagery. A `display-sm` headline slightly overlapping a product photo creates a premium, bespoke feel.
- **Do** use the `Amber` scale (`tertiary`) exclusively for AI estimates and rewards to maintain its "precious" meaning.

#### Don't
- **Don't** use standard "Material Design" blue or generic "Success" greens. Stick to our sustainability-focused `secondary` green.
- **Don't** use hard 90-degree corners. Even "sharp" elements should use `radius-sm` (0.5rem) to maintain the "organic" brand warmth.
- **Don't** center-align long blocks of text. Editorial layouts are traditionally left-aligned or use asymmetric "staggered" grids.

---

### 7. Spacing Scale
Always use the 8px-based scale for consistency. 
- **Section Padding:** Use `spacing-16` (5.5rem) or `spacing-20` (7rem) for desktop to create the AJIO-inspired "generous" feel.
- **Component Gap:** Use `spacing-3` (1rem) for internal card elements.

*Director's Note: Every pixel should feel like it was placed by a designer, not a framework. If the layout feels too "balanced," nudge an image off-center. If it feels too "tech," add more Playfair Display. We are building a gallery, not a database.*