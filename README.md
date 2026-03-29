# VINIMAY — Anti-Gravity Production Prompt
### Clothing Recycling & Credit-Based Marketplace · Strict UI Fidelity Mode
### For: Bolt / v0 / Anti-Gravity or any vibe-coding tool

---

## ⛔ FIDELITY LOCK — READ THIS FIRST. EVERY RULE IS MANDATORY.

You are reproducing a **specific, already-designed UI** for an app called **VINIMAY**. Screenshots and a design system document have been provided. Your job is not to design — it is to **build exactly what is shown**. Every layout, color, font, spacing decision, and component has already been made. You are the engineer, not the designer.

Violating any rule below means the output is wrong. There are no partial credits.

### The 12 Laws of VINIMAY Fidelity

1. **NO INVENTED COLORS.** Use only the hex values in Section 2. If a color is not in that table, it does not exist in this project. Do not reach for Tailwind's default palette, shadcn defaults, or any other arbitrary color.

2. **NO BORDERS TO DEFINE SECTIONS.** Per the design system's "No-Line Rule": structural separation is achieved ONLY through background color shifts between surface tiers OR vertical whitespace. Never use `border` or `divide-*` to separate content blocks.

3. **NO HARD SHADOWS.** Elevation is achieved through tonal layering (a `#FFFFFF` card on a `#F2F4F2` background). The only permitted shadow is: `box-shadow: 0 12px 40px rgba(45, 52, 50, 0.06)`. No `shadow-md`, no `shadow-lg`, no black-tinted shadows.

4. **NO GENERIC FONTS.** The only permitted typefaces are `Inter` (400, 500, 600, 700) and `Playfair Display` (700 italic, used exclusively for hero/display moments). No Roboto, no DM Sans, no Poppins.

5. **NO FLAT PRIMARY CTAs.** Primary action buttons use forest green `#3A684D` as background — NOT black. Black `#1A1A1A` is for secondary CTAs. This is visible in every screenshot.

6. **NO ARBITRARY GRADIENTS.** The ONLY permitted gradient is on primary CTAs: `linear-gradient(135deg, #3A684D, #2E5C41)`. No other gradients anywhere.

7. **NO GLASSMORPHISM ON CONTENT.** Glassmorphism applies ONLY to the mobile bottom navigation bar. All content cards are flat `#FFFFFF` surfaces.

8. **NO DIVIDERS IN LISTS.** Activity feeds, transaction lists, and repeating list items are separated ONLY by vertical gap. No `<hr>`, no `border-bottom`, no divider components anywhere.

9. **NO OMITTING MOCK DATA.** Every page renders with the exact realistic mock data in Section 7. No placeholder text, no empty arrays.

10. **NO RENAMING.** The app is **VINIMAY**. The credit token is **VMC**. Full name is **VINIMAY Credits**. These strings appear verbatim throughout.

11. **DO NOT REDESIGN.** Screenshots have been provided. If the screenshot shows a two-column layout, build a two-column layout. If it shows a dark hero card, build a dark hero card. If it shows Playfair italic on the balance figure, use Playfair italic. Reproduce — do not reinterpret.

12. **CONFIRM EACH PAGE.** After each page, output: `/* VINIMAY FIDELITY CHECK: [PageName] — colors match spec, layout matches screenshot, mock data populated */`

---

## SECTION 1 — TECH STACK

```
Framework:  React + Vite  (or Next.js 14 App Router)
Language:   JavaScript (ES2022)
Styling:    Tailwind CSS with ALL defaults overridden via tokens below
Icons:      lucide-react
Fonts:      Google Fonts — Inter (400,500,600,700) + Playfair Display (700 italic)
Routing:    react-router-dom v6
State:      useState / useContext only
Mock Data:  /src/data/mockData.js — see Section 7
```

**Tailwind config override — copy verbatim into tailwind.config.js:**
```ts
export default {
  theme: {
    extend: {
      colors: {
        background:        '#FAFAF8',
        surface:           '#FFFFFF',
        surfaceLow:        '#F2F4F2',
        surfaceContainer:  '#EBEFEC',
        primary:           '#1A1A1A',
        onPrimary:         '#FFFFFF',
        secondary:         '#3A684D',
        secondaryDim:      '#2E5C41',
        onSecondary:       '#FFFFFF',
        tertiary:          '#C8870A',
        tertiaryContainer: '#FDF3DC',
        onTertiary:        '#7A4F00',
        textPrimary:       '#1A1A1A',
        textSecondary:     '#5A5A5A',
        textMuted:         '#9B9B9B',
        textDisabled:      '#C4C4C4',
        outlineVariant:    'rgba(90,90,90,0.20)',
        danger:            '#C0392B',
        dangerLight:       '#FDECEA',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        xl:   '20px',
        '2xl':'24px',
        full: '9999px',
      },
      boxShadow: {
        ambient: '0 12px 40px rgba(45, 52, 50, 0.06)',
        none:    'none',
      },
    },
  },
}
```

---

## SECTION 2 — COLOR TOKENS (SINGLE SOURCE OF TRUTH)

| Token | Hex | Role |
|---|---|---|
| `background` | `#FAFAF8` | Page canvas — warm off-white |
| `surface` | `#FFFFFF` | Cards, modals, elevated containers |
| `surfaceLow` | `#F2F4F2` | Alternate section backgrounds |
| `surfaceContainer` | `#EBEFEC` | Input field fills, nested containers |
| `primary` | `#1A1A1A` | Near-black — secondary CTAs, headings |
| `secondary` | `#3A684D` | Forest green — PRIMARY CTAs, active states |
| `secondaryDim` | `#2E5C41` | Gradient endpoint for green CTAs |
| `tertiary` | `#C8870A` | Amber — AI estimates, pending, rewards ONLY |
| `tertiaryContainer` | `#FDF3DC` | Amber chip/tag backgrounds |
| `onTertiary` | `#7A4F00` | Text on amber surfaces |
| `textPrimary` | `#1A1A1A` | Primary body text |
| `textSecondary` | `#5A5A5A` | Subheadings, labels |
| `textMuted` | `#9B9B9B` | Placeholder, meta, captions |
| `outlineVariant` | `rgba(90,90,90,0.20)` | Ghost button borders ONLY |
| `danger` | `#C0392B` | Errors, destructive actions |

**Color rules extracted from screenshots:**
- Dashboard VMC hero card: solid `#1A1A1A` hardcoded — not surfaced from a token
- "AVAILABLE BALANCE" chip: `#3A684D` bg, white text, pill shape
- Activity amounts: green `#3A684D` for +, `#1A1A1A` for −, amber `#C8870A` for pending
- Condition badge "LIKE NEW": `#3A684D` bg / "GOOD": `#C8870A` bg / "FAIR": `#5A5A5A` bg
- Gold progress ring: stroke `#C8870A` on dark background

---

## SECTION 3 — TYPOGRAPHY RULES

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap" rel="stylesheet">
```

**Playfair Display is used in EXACTLY these 8 places (per screenshots):**
1. Auth H1: "Give your wardrobe a second life." — serif 52px 700 NOT italic, `#1A1A1A`
2. Auth right panel: "Fashion is" serif 60px white + "circular." serif 60px italic `#3A684D`
3. Dashboard hero balance: "2,340 VMC" — serif italic 52px white
4. Upload page title: "Curate Your " (Inter) + "Archive" (serif italic 28px `#1A1A1A`)
5. Dashboard section header: "Recent Activity" — serif 700 22px NOT italic
6. Dashboard section header: "Curated for You" — serif 700 22px NOT italic
7. Dashboard CTA banner: "Earn more by recycling." — serif italic 28px `#1A1A1A`
8. AI Estimate result: "340 VMC" portion — serif italic 48px `#3A684D`

**All other text: Inter only. No exceptions.**

**Label style** (used for ALL form field labels, filter headers, stat labels per screenshots):
ALL CAPS · Inter 600 · 10–11px · letter-spacing 0.05em · color `#9B9B9B`
Examples: "FULL NAME", "COUNTRY", "MOBILE", "EMAIL", "PASSWORD", "REFERRAL CODE (OPTIONAL)",
"ITEMS RECYCLED", "CO2 SAVED", "PICKUPS", "PURCHASED", "AVAILABLE BALANCE",
"CATEGORY", "CONDITION", "BRAND", "ESTIMATED PRICE (INR)", "DESCRIPTION", "PRIMARY COLOR",
"IMPACT BADGES", "CURRENT STATUS"

---

## SECTION 4 — COMPONENT LIBRARY SPEC

Build ALL of these before any page.

### `<PrimaryButton>` — Green gradient CTA
```
Background:    linear-gradient(135deg, #3A684D, #2E5C41)
Text:          #FFFFFF, Inter 600, 14px, letter-spacing 0.02em
Border-radius: 9999px
Padding:       14px 32px
Border:        none
Shadow:        0 12px 40px rgba(45, 52, 50, 0.06)
Hover:         brightness(1.08), scale(1.01), 180ms ease
Active:        scale(0.99)
```
Used for: "Create Account", "Analyze with AI", "Recycle Now", "Confirm Pickup", "Start New Valuation", "Accept & Schedule Pickup"

### `<SecondaryButton>` — Dark CTA
```
Background:    #1A1A1A
Text:          #FFFFFF, Inter 600, 14px
Border-radius: 9999px
Padding:       14px 32px
Hover:         #333333, scale(1.01)
```
Used for: "Redeem Credits" (on dark hero card uses inverted: white bg, black text), "Upload Clothes" ghost on dark card, "Start New Valuation"

### `<GhostButton>`
```
Background:    transparent
Border:        1.5px solid rgba(90,90,90,0.40)
Text:          #1A1A1A, Inter 600, 14px
Border-radius: 9999px
Padding:       13px 30px
Hover:         background #F2F4F2
```

### `<Card>`
```
Background:    #FFFFFF
Border-radius: 16px
Shadow:        0 12px 40px rgba(45, 52, 50, 0.06)
Border:        NONE — never add a border to a card
Padding:       20px 24px
Hover:         translateY(-2px), shadow intensifies
Transition:    all 0.2s ease
```

### `<InputField>`
```
Background:    #EBEFEC
Border:        1px solid transparent
Border-radius: 10px
Padding:       12px 16px
Font:          Inter 400 14px, color #1A1A1A
Placeholder:   #9B9B9B
Focus:         border: 1.5px solid #3A684D
Label:         ALL CAPS, Inter 600, 10px, #9B9B9B, letter-spacing 0.05em, displayed above field
```

### `<ConditionBadge>` — overlaid on product images, bottom-left
```
Like New:  bg #3A684D  text #FFFFFF
Good:      bg #C8870A  text #FFFFFF
Fair:      bg #5A5A5A  text #FFFFFF
Poor:      bg #C0392B  text #FFFFFF
Style:     Inter 600 10px uppercase 0.05em letter-spacing, radius 6px, padding 4px 8px
Position:  absolute bottom-left, 12px inset from edges
```

### `<VMCChip>` — Credit display
```
Background:    #FDF3DC
Border:        0.5px solid #C8870A
Border-radius: 9999px
Text:          #7A4F00, Inter 600, 13px
Padding:       4px 10px
```

### `<StatusChip>` — for "AVAILABLE BALANCE" style labels
```
Background:    #3A684D
Text:          #FFFFFF, Inter 600, 10px, uppercase, letter-spacing 0.05em
Border-radius: 9999px
Padding:       4px 12px
```

### `<CategoryChip>` — Upload page / filter panel
```
Default:   bg #FFFFFF, border 1.5px solid rgba(90,90,90,0.3), text #1A1A1A, Inter 500 14px
Selected:  bg #3A684D, border transparent, text #FFFFFF
Padding:   8px 20px, radius 9999px
```

### `<SidebarNav>` — Dashboard / Upload / Wallet layout
```
Width:       176px, fixed left, height 100vh
Background:  #FAFAF8  (same as page — no visual separation)
Border:      NONE — sidebar has no right border
Logo:        "VINIMAY" Inter 700 18px top, padding 24px
Nav items:   Icon 18px + label Inter 500 15px, color #5A5A5A
Active:      color #3A684D, font-weight 600, bg #EBEFEC, radius 8px, full-width pill
Gap:         4px between items
Bottom:      Credit status card (bg #EBEFEC, radius 12px) + "Recycle Now" PrimaryButton
```

### `<TopNav>` — Marketplace / Upload alternate view
```
Background:  #FAFAF8
Border:      NONE
Height:      56px
Logo:        left, Inter 700 18px
Center:      nav links, Inter 500 14px #5A5A5A, active: #3A684D + 2px underline
Right:       Bell icon + user avatar circle 36px
```

---

## SECTION 5 — PAGE-BY-PAGE BUILD SPEC

---

### PAGE 1: Auth / Onboarding (`/`)

**Layout:** Two-column split, full viewport height. Left 40% / Right 60%.
Mobile: Left panel full-width, right panel hidden.

**LEFT PANEL — bg `#FAFAF8`, padding 48px:**

Logo row (top):
- Circular icon: 32px, bg `#3A684D`, white leaf SVG, radius full
- "VINIMAY" Inter 700 18px `#1A1A1A`

Headline block:
- "Give your wardrobe a second life." — Playfair Display 700 52px NOT italic, `#1A1A1A`, line-height 1.15
- Subtext: "Earn VINIMAY Credits for every piece you recycle. Shop pre-loved fashion with zero guilt." — Inter 400 14px `#5A5A5A`

Tab switcher:
- Outer container: bg `#EBEFEC`, radius 9999px, padding 4px
- Active tab: bg `#FFFFFF`, radius 9999px, shadow-ambient, text `#1A1A1A`, Inter 600 14px
- Inactive: no bg, text `#9B9B9B`
- Tabs: "Sign Up" / "Sign In"

Sign Up Form:
- FULL NAME → placeholder "Arjun Mehta"
- COUNTRY + MOBILE side by side (50/50): dropdown "+91 (IN)" + placeholder "98765 43210"
- EMAIL → placeholder "hello@vinimay.com"
- PASSWORD → placeholder "••••••••" + Eye/EyeOff toggle right inside input
- REFERRAL CODE (OPTIONAL) → placeholder "FASHION2024"

CTA: "Create Account" `<PrimaryButton>` full-width green gradient

Divider: "OR CONTINUE WITH" — Inter 500 12px `#9B9B9B` centered, lines via background color bars not borders

Social buttons (two ghost, side by side): "🌐 Google" / "🍎 Apple"

Footer: "BY JOINING, YOU AGREE TO OUR TERMS AND PRIVACY POLICY" — Inter 400 11px `#9B9B9B`

**RIGHT PANEL — bg `#2C2C2A`, overflow hidden, full height:**
- Fashion photo filling panel: `object-fit: cover`, olive/dark jacket product shot
- Bottom gradient overlay: `linear-gradient(to top, rgba(30,40,30,0.85), transparent 50%)`
- Floating pill badge mid-panel: "CURATION & CONSCIOUSNESS" — outlined pill, rgba(255,255,255,0.35) border, white Inter 600 10px uppercase 0.1em
- Hero text (bottom-left of panel):
  - "Fashion is" — Playfair Display 700 60px white, NOT italic
  - "circular." — Playfair Display 700 italic 60px `#3A684D`
- Stats row at very bottom (3 columns):
  - "12,000+" headline white / "ITEMS RECYCLED" 10px white 60%
  - "₹45L+" headline white / "CREDITS DISTRIBUTED" 10px white 60%
  - "3.2T" headline white / "CO₂ SAVED" 10px white 60%
  - Separated by 1px rgba(255,255,255,0.15) vertical lines (decorative only)
- Social proof: 3 overlapping avatars (32px circles, -8px overlap) + "+5k" green pill + "Join a community of 50,000+ conscious curators." Inter 400 12px white 70%
- Copyright: "© 2024 VINIMAY ECO-SYSTEMS" Inter 400 10px white 40%, bottom-right

OTP Screen (conditional render after "Create Account" click):
- Same left panel, replace form with:
  - "Verify your number" headline
  - "We sent a code to +91 987 654 3210" Inter 400 14px muted
  - 6 individual input boxes in a row (each 48×56px, bg surfaceContainer, radius md, center-aligned)
  - Auto-focus next on entry, shake on wrong code
  - "Resend code in 28s" countdown timer
  - "Verify & Continue" `<PrimaryButton>` full-width

---

### PAGE 2: Dashboard (`/dashboard`)

**Layout:** `<SidebarNav>` fixed left + main content scrollable.

**Top Bar (inside main content):**
- Search: full-width pill input, bg `#EBEFEC`, radius 9999px, magnifier icon `#9B9B9B`, placeholder "Search marketplace..."
- Right: Bell icon (lucide, 20px) with 6px amber dot `#C8870A` + avatar 36px circle + "Aria Chen" Inter 600 13px + "GOLD MEMBER" 10px muted caps

**Credit Hero Card — full-width:**
```
Background:    #1A1A1A  (hardcoded)
Border-radius: 24px
Padding:       40px 48px
No border. No shadow.
```
Left side:
- `<StatusChip>` "AVAILABLE BALANCE"
- "2,340 VMC" — Playfair Display 700 italic 52px white
- "≈ ₹23,400 marketplace value" — Inter 400 16px rgba(255,255,255,0.65)
- Buttons row: "Redeem Credits" (white bg, `#1A1A1A` text, radius full) + "Upload Clothes" (ghost: border rgba(255,255,255,0.35), white text)

Right side (absolute or flex):
- SVG circular ring, 100px diameter
  - Track: circle, stroke rgba(255,255,255,0.12), stroke-width 8
  - Progress: stroke `#C8870A`, 75% of circumference, stroke-dashoffset animation
  - Center: Star icon 20px `#C8870A` + "GOLD LEVEL" Inter 600 11px white + "75% to Platinum" Inter 400 10px rgba(255,255,255,0.55)

**Stats Row — 4 cards, CSS grid-cols-4, gap 16px:**
Each `<Card>` padding 20px 24px:
- Icon circle 32px bg `#EBEFEC`, icon 16px `#3A684D`
- "ITEMS RECYCLED" label caps 10px muted above
- "23" Inter 700 28px `#1A1A1A`

| Icon (lucide) | Label | Value |
|---|---|---|
| Leaf | ITEMS RECYCLED | 23 |
| Wind | CO2 SAVED | 18.4 kg |
| Truck | PICKUPS | 7 |
| ShoppingBag | PURCHASED | 5 |

**Two-column section (grid-cols-[60%_40%], gap 24px):**

LEFT — Recent Activity:
- "Recent Activity" Playfair Display 700 22px NOT italic
- "VIEW ALL" Inter 600 12px `#3A684D` right
- 3 activity item cards, NO dividers, gap `gap-4`:
  - `<Card>` padding 16px 20px
  - Left: 36px icon circle (green/muted/amber bg) + lucide icon 16px
  - Middle: title Inter 600 14px / subtitle Inter 400 12px `#9B9B9B`
  - Right: amount Inter 700 14px (green/dark/amber)

```
CheckCircle  green-bg  | "Pickup completed — 3 items"  | "Today, 2:40 PM"    | +180 VMC  green
ShoppingCart muted-bg  | "Purchased: Levi's 511"        | "Oct 24, 11:15 AM"  | -220 VMC  dark
Sparkles     amber-bg  | "AI Estimate accepted"         | "Pending verification" | 95 VMC amber
```

Impact Badges card:
- Background `#3A684D` solid, radius 16px, padding 24px
- "IMPACT BADGES" Inter 600 10px white uppercase 0.05em
- 3 badges in a row (flex, justify-evenly): icon 24px white + label Inter 600 11px white, centered column
- Badges: Globe "EARTH SAVER" / RecycleIcon "5X RECYCLER" / Shield "WARRIOR"

RIGHT — Curated for You:
- "Curated for You" Playfair Display 700 22px NOT italic
- Prev/Next ghost icon buttons top-right (24px circle ghost)
- Horizontal scroll row, 4 product cards each ~200px wide, NO scrollbar shown:
  - Image: square, radius 16px, object-fit cover
  - `<ConditionBadge>` bottom-left
  - Levi's item: extra chip "8.5 CO2 SAVED" — bg `#EBEFEC`, text `#3A684D`, Inter 600 10px caps
  - Brand label-sm caps muted / Name Inter 600 14px / "450 VMC" Inter 700 15px green + "≈ ₹4,500" muted 12px

Mock: Levi's 501 (Like New) / Patagonia Cotton Tee (Good) / Zara Heritage Biker Jacket (Fair) / H&M Wool Coat (Good)

CTA Banner below (full width):
- Background `#F2F4F2`, radius 24px, padding 40px, centered content
- "Earn more by recycling." Playfair Display italic 28px `#1A1A1A`
- Subtext Inter 400 14px `#5A5A5A` max-width 400px centered
- "Start New Valuation" `<SecondaryButton>` centered

---

### PAGE 3: Upload Clothes (`/upload`)

**Layout:** `<SidebarNav>` + main content, max-width 760px.
Sidebar shows "Upload" as active item, green text + `#EBEFEC` bg.
Sidebar top: "2,340 VMC" Inter 600 14px green / "SUSTAINABILITY LEVEL: GOLD" 10px muted caps

**Page Title:**
"Curate Your " Inter 700 28px `#1A1A1A` inline + "Archive" Playfair Display italic 28px `#1A1A1A`

**Step Indicator (4 steps):**
- Active circle (step 1): 28px, bg `#3A684D`, white Inter 600 13px "1"
- Inactive: bg `#EBEFEC`, `#9B9B9B` text
- Connector: 1px `#EBEFEC` horizontal line (decorative only, permitted as UI element not section separator)
- Labels: "UPLOAD PHOTOS" green caps 10px (active) / others muted

**Upload Drop Zone:**
- bg `#FFFFFF`, radius 16px, `border: 2px dashed rgba(90,90,90,0.25)` — ONLY permitted dashed border
- Min-height 160px
- Upload icon: 48px circle bg `#EAF3EC`, CloudUpload icon 24px `#3A684D`
- "Drag & drop or tap to upload" Playfair Display italic 20px `#1A1A1A`
- "PNG, JPG up to 10MB each" Inter 400 13px `#9B9B9B`

**Uploaded Items Grid:**
- "UPLOADED ITEMS (5/9)" label caps 10px muted
- 3×2 CSS grid, each cell 160×160px, radius 12px, overflow hidden
- Filled cells: actual image (object-fit cover) + "×" button (20px circle, `#1A1A1A` bg, white ×, top-right 8px inset)
- Empty cell: bg `#F2F4F2`, "+" icon `#9B9B9B` centered

Mock 5 filled: white sneaker / denim jacket / blue jeans / rust-red kurta / black graphic tee (last image per screenshot)

**Category Chips (horizontal scroll):**
"CATEGORY" label above.
Chips: Tops (selected green) / Bottoms / Outerwear / Ethnic / Dresses / Accessories

**Condition Grid (2×2, gap 12px):**
"CONDITION" label above.
Each `<Card>` padding 16px 20px:
- Selected "Like New": bg `#F0F7F3`, border `1.5px solid #3A684D`
- Unselected: `<Card>` default (white + shadow, no border)
- Icon circle 32px left + title Inter 600 14px + subtitle Inter 400 12px `#9B9B9B`

```
Leaf  green-bg  | "Like New"  | "Tags on or unworn"
Check muted-bg  | "Good"      | "Minor visible wear"
Clock muted-bg  | "Fair"      | "Visible pilling/fade"
Wrench muted-bg | "Poor"      | "Needs repair"
```

**Form Fields:**
- BRAND + ESTIMATED PRICE (INR) side by side, each `<InputField>`
- DESCRIPTION — `<InputField>` as textarea, 4 rows, placeholder "Tell us about the fabric, fit, and any memories attached to this piece..."
- PRIMARY COLOR — "PRIMARY COLOR" label above, 10 circles 28px each in a row:
  white / black / `#3A684D` / yellow / dark-red / cobalt-blue / pink / gray / navy / orange
  Selected: 3px ring offset in `#3A684D`

**Bottom CTA:**
- "✦ Analyze with AI" `<PrimaryButton>` full-width green gradient
- Caption: "Our AI will verify the quality and suggest a competitive price range." Inter 400 12px `#9B9B9B` centered

---

### PAGE 4: AI Estimate (`/upload/estimate`)

**Layout:** Centered, max-width 600px.

**Loading state (1500ms on mount):**
- CSS animated scan lines over shirt silhouette SVG (3 horizontal lines, keyframe sweep top-to-bottom)
- "Analyzing your items..." Inter 600 16px `#1A1A1A`
- Rotating subtext every 600ms with opacity fade: "Checking fabric quality..." / "Assessing brand value..." / "Calculating market demand..."

**Result card (after loading, fade-in):**
Amber notice strip — bg `#FDF3DC`, radius 12px, padding 12px 20px:
- "✦ AI ESTIMATE READY" Inter 600 11px `#7A4F00` uppercase 0.05em

Credit display:
- "You'll earn" Inter 400 16px `#5A5A5A` + "340 VMC" Playfair Display italic 700 48px `#3A684D` (inline)
- "≈ ₹3,400 in marketplace credits" Inter 400 14px `#9B9B9B`

Breakdown `<Card>`:
- Header row: "ITEM / CONDITION / CATEGORY / CREDITS" label-sm muted caps
- NO horizontal lines. Rows separated by gap 1.4rem
- Each row: name Inter 600 14px / `<ConditionBadge>` / category chip / "95 VMC" Inter 700 14px `#3A684D`
- Total row: "Total" Inter 700 14px left / "340 VMC" Inter 700 18px `#3A684D` right

| Item | Condition | Category | VMC |
|---|---|---|---|
| Blue Oxford Shirt | Good | Tops | 95 |
| Levi's 511 Jeans | Like New | Bottoms | 145 |
| Bomber Jacket | Fair | Outerwear | 60 |
| White Kurta | Good | Ethnic | 40 |

Confidence bar:
- Label: "AI Confidence: 87%" Inter 600 13px `#1A1A1A`
- Bar: bg `#EBEFEC`, fill `#3A684D`, height 6px, radius 9999px, animate 0→87% over 800ms on mount

Disclaimer: Inter 400 12px `#9B9B9B`

CTAs: "Accept & Schedule Pickup" `<PrimaryButton>` + "Edit Items" `<GhostButton>` (side by side)

Expandable "How credits are calculated":
- Chevron toggle, `<Card>` that expands via max-height animation
- 4 rows: Brand Weight 30% / Condition Score 40% / Market Demand 20% / Sustainability Bonus 10%
- Each row: label Inter 500 14px + mini bar (same style as confidence bar, proportional fill)

---

### PAGE 5: Pickup Scheduler (`/upload/schedule`)

**Layout:** Two-column 50/50 desktop. Stacked mobile.

**Left — Calendar:**
- Month header: "April 2026" Inter 700 18px + lucide ChevronLeft/Right 20px
- 7 columns, day headers "Su Mo Tu We Th Fr Sa" label-sm muted
- Available date cell: Inter 500 14px `#1A1A1A` + 4px green dot below
- Selected: 36px circle bg `#1A1A1A`, white text
- Today: 36px circle border `1.5px solid #3A684D`, text `#3A684D`
- Unavailable: `#C4C4C4`, cursor not-allowed

**Right — Slots / Address / Summary:**
"Select Time Slot" Inter 600 16px

2×4 time slot grid, gap 12px:
- Default: `<Card>` padding 12px 16px, time Inter 500 14px
- Selected: border `1.5px solid #3A684D`, bg `#F0F7F3`, Check icon `#3A684D` right
- Slots: 9:00 AM–11:00 AM / 11:00 AM–1:00 PM / 2:00 PM–4:00 PM / 4:00 PM–6:00 PM (×2 columns)

"PICKUP ADDRESS" label + address `<Card>`:
- "Home" Inter 600 14px
- "204, Rahul Apartments, Koramangala, Bengaluru 560034" Inter 400 13px `#5A5A5A`
- "Edit" link `#3A684D`
- "+ Add New Address" `<GhostButton>` below

Order summary (bg `#F2F4F2`, radius 12px, padding 16px — no border):
- Items: 4 pieces / Estimated Credits: 340 VMC / Pickup Date: — / Time: —

"Confirm Pickup" `<PrimaryButton>` full-width

Success state (conditional on confirm click):
- CheckCircle SVG animates scale 0→1 with spring ease, stroke `#3A684D`, 64px
- "Pickup Scheduled!" Inter 700 22px `#1A1A1A`
- Descriptive text Inter 400 14px `#5A5A5A`
- "Back to Dashboard" `<SecondaryButton>` centered

---

### PAGE 6: Marketplace (`/marketplace`)

**Layout:** `<TopNav>` + left filter panel 210px + product grid. Background `#FAFAF8`.

TopNav shows "Marketplace" as active (green + 2px underline).

**Filter Panel (left, 210px):**
- "Filters" Playfair Display 700 20px + "CLEAR ALL" Inter 600 11px `#3A684D` right
- Sections separated by spacing-12 — ZERO borders between sections
- Payment: radio rows — "Pay with Credits" (green radio dot) / "Pay with Cash"
- "CATEGORIES" label + list: Tops checked green / Bottoms / Outerwear
- "CONDITION" label + chips: "Like New" (green selected) / "Good" / "Fair"
- "BRAND" label + checkbox list: Levi's / Zara / H&M / FabIndia (green checkbox when checked)
- "PRICE RANGE (VMC)" label + range slider: 0–1000 VMC
  - Track bg `#EBEFEC`, filled track `#3A684D`, thumb circle `#3A684D`, no default browser styling

**Active filter chips + sort (above grid):**
- "TOPS ×" and "LIKE NEW ×" chips: bg `#EBEFEC`, border `0.5px solid #3A684D`, text `#3A684D`, × in `#3A684D`
- "Sort by: Featured ▾" Inter 500 14px right

**Product Grid — CSS grid-cols-3, gap 20px:**
Each product card:
- Image: full-width, aspect-ratio 3/4, radius 16px 16px 0 0, object-fit cover, position relative
- `<ConditionBadge>` inside image, bottom-left 12px inset
- Heart button: 32px white circle, position top-right 10px inset, Heart icon 16px `#1A1A1A`
- Card body bg `#FFFFFF` radius 0 0 16px 16px, padding 12px 16px 16px:
  - Brand label-sm ALL CAPS `#9B9B9B`
  - Name Inter 600 15px `#1A1A1A`
  - "220 VMC" Inter 700 16px `#3A684D` + "or ₹2,200" Inter 400 13px `#9B9B9B`
- Full card shadow: `0 12px 40px rgba(45, 52, 50, 0.06)`

**All 12 mock products** (from Section 7) rendered. All conditions, prices, brands as specified.

---

### PAGE 7: Product Detail (`/marketplace/:id`)

**Layout:** Two-column, 55% left / 45% right. Stacked mobile.

**Left — Image Gallery:**
- Main image: full-width radius 24px, aspect-ratio 1/1, object-fit cover
- "VERIFIED BY VINIMAY" — `<StatusChip>` green, absolute bottom-left 16px inset on image
- Thumbnail row: 4 images 72×72px, radius 10px, gap 8px
- Active thumbnail: border `2px solid #3A684D`

**Right — Product Details:**
- Brand: label-sm ALL CAPS `#9B9B9B`
- Name: Inter 700 28px `#1A1A1A`
- Stars: 4 filled stars `#C8870A` + 1 empty + "12 reviews" Inter 400 13px `#9B9B9B`
- Price block:
  - "220 VMC" Inter 700 28px `#3A684D`
  - "or ₹2,200" Inter 400 14px `#9B9B9B` on same line
  - "₹5,499 retail" Inter 400 13px `#9B9B9B` with text-decoration line-through below
  - "You save ₹3,299 vs retail" Inter 500 13px `#3A684D`
- Sizes: S / M / L / XL pill grid
  - Selected (M): bg `#1A1A1A`, text white, radius 9999px, padding 8px 20px
  - Default: bg `#EBEFEC`, text `#1A1A1A`
- Condition card (bg `#F2F4F2`, radius 12px, padding 16px — no border):
  - `<ConditionBadge>` "Good" + "Worn approximately 5–8 times. No stains, minor fabric pilling at collar. All buttons intact." Inter 400 13px `#5A5A5A`
- Seller card (`<Card>`):
  - 36px avatar circle initials "PS" Inter 600 `#3A684D` bg `#EBEFEC`
  - "Sold by Priya S., Mumbai" Inter 600 14px
  - "4.8 ★ seller rating" + "12 items sold" Inter 400 12px `#9B9B9B`
- CTA stack: "Add to Cart" `<SecondaryButton>` full-width + "Buy with Credits" `<PrimaryButton>` full-width
- Wishlist: `<GhostButton>` full-width with Heart icon left

Accordions (below fold) — bg shift on open, NO borders:
- "Item Details" / "Pickup & Delivery" / "Reviews"
- Reviews: 3 `<Card>` items, avatar + name + star row + date + body text

---

### PAGE 8: Wallet (`/wallet`)

**Layout:** `<SidebarNav>` "Wallet" active + single column max-width 720px.

**Hero Balance Card — bg `#1A1A1A`, radius 24px, padding 40px 48px:**
- "VINIMAY WALLET" Inter 600 10px white uppercase opacity 0.6
- "2,340 VMC" Playfair Display italic 700 52px white
- "₹23,400 equivalent" Inter 400 14px rgba(255,255,255,0.65)
- Buttons: "Redeem" (bg white, text `#1A1A1A`, radius full) + "Transfer" (ghost: border rgba(255,255,255,0.35), text white)
- Horizontal rule: 1px rgba(255,255,255,0.12) — decorative only
- "Pending Credits: 340 VMC" Inter 500 14px `#C8870A`

**Stats Row (3 cards):**
- Credits Earned: "3,180 VMC" / Credits Spent: "840 VMC" / Redemptions: "₹4,200"

**Filter tabs:**
- "All" / "Earned" / "Spent" / "Pending"
- Active: bg `#1A1A1A`, white text, radius 9999px, Inter 600 13px, padding 8px 20px
- Inactive: bg `#EBEFEC`, `#5A5A5A` text

**Transaction list — gap `gap-4`, NO dividers:**
Each `<Card>` padding 16px 20px:
- Left: 36px icon circle (green bg for earned, `#EBEFEC` for spent, amber bg for pending) + 16px lucide icon
- Middle: title Inter 600 14px + date Inter 400 12px `#9B9B9B`
- Right: "+" or "−" + amount Inter 700 14px (green/dark/amber as specified)

All 10 mock transactions rendered from Section 7.

**Redeem Modal:**
- Overlay: rgba(26,26,26,0.5) + `backdrop-filter: blur(4px)` — the ONLY permitted blur
- Modal: bg `#FFFFFF`, radius 24px, padding 32px, max-width 440px, shadow-ambient
- "Redeem VINIMAY Credits" Inter 700 22px
- 3 radio option cards (NOT native radios — styled `<Card>` items, selected has `1.5px solid #3A684D` border)
- VMC slider: track `#EBEFEC`, fill `#3A684D`, thumb `#3A684D`, step 50, min 100 max 2340
- "= ₹X equivalent" live-update below slider: Inter 700 18px `#3A684D`
- "Confirm Redemption" `<PrimaryButton>` full-width

---

### PAGE 9: Profile (`/profile`)

**Layout:** `<SidebarNav>` "Profile" active + single column max-width 680px.

**Profile header:**
- Avatar: 80px circle, bg `#EBEFEC`, "AM" Inter 700 28px `#3A684D`
- "Arjun Mehta" Inter 700 24px
- "@arjunvinimay" Inter 400 14px `#9B9B9B`
- "Gold Recycler" badge: bg `#FDF3DC`, border `0.5px solid #C8870A`, text `#7A4F00`, Inter 600 12px, radius full
- "Edit Profile" `<GhostButton>` right-aligned

**Stats row (3 `<Card>`):** Recycled 23 items / Earned 3,180 VMC / CO₂ Saved 18.4 kg

**Achievement Badges (3×2 grid):**
- Unlocked: `<Card>`, icon circle `#EBEFEC`, name Inter 600 14px, description Inter 400 12px `#9B9B9B`
- Locked: same card but `filter: grayscale(1) opacity(0.45)` + lucide Lock icon overlay (16px, centered)
- 6 badges: Earth Saver / 5-Time Recycler / First Upload / Referral Star / Style Curator / Green Warrior

**Recycling History Timeline:**
- Left: 2px `#EBEFEC` vertical line (decorative, NOT a section border)
- Each entry: 8px `#3A684D` circle dot on the line + date label + summary + status chip + VMC
- Status chips: "Credited" (green) / "Picked Up" (`#185A8D` blue-ish) / "Approved" (amber) / "Pending" (muted)

**Account Settings (bg shift to `#F2F4F2` — NO border):**
- Toggle rows with NO dividers (gap only): Notifications / Email updates / Push alerts
- Toggle ON: bg `#3A684D`, thumb white. Toggle OFF: bg `#EBEFEC`, thumb `#9B9B9B`
- Links: "Address Book" / "Payment Preferences" with ChevronRight `#9B9B9B`
- "Delete Account" Inter 400 14px `#C0392B`, bottom, no button wrapper

---

## SECTION 6 — ROUTING

```
/                    → AuthPage
/dashboard           → DashboardPage
/upload              → UploadPage
/upload/estimate     → EstimatePage
/upload/schedule     → SchedulePage
/wallet              → WalletPage
/marketplace         → MarketplacePage
/marketplace/:id     → ProductDetailPage
/profile             → ProfilePage
```

---

## SECTION 7 — MOCK DATA (`/src/data/mockData.js`)

```typescript
export const currentUser = {
  name: "Arjun Mehta",
  username: "@arjunvinimay",
  initials: "AM",
  level: "Gold",
  credits: 2340,
  inrEquivalent: 23400,
  pendingCredits: 340,
  itemsRecycled: 23,
  co2Saved: 18.4,
  pickupsDone: 7,
  itemsPurchased: 5,
  creditsEarned: 3180,
  creditsSpent: 840,
  redemptions: 4200,
  levelProgress: 75,
};

export const transactions = [
  { id:1,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (3 items)",  date:"Mar 25, 2026", amount:180  },
  { id:2,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Levi's 511 Slim",  date:"Mar 22, 2026", amount:-220 },
  { id:3,  type:"earned",  icon:"Users",       title:"Referral Bonus: Priya S.",    date:"Mar 18, 2026", amount:50   },
  { id:4,  type:"earned",  icon:"Upload",      title:"Upload Approved: 2 shirts",   date:"Mar 15, 2026", amount:120  },
  { id:5,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Pottery Barn Bag", date:"Mar 10, 2026", amount:-90  },
  { id:6,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (4 items)",  date:"Mar 05, 2026", amount:200  },
  { id:7,  type:"pending", icon:"Star",        title:"Weekly Streak Bonus",         date:"Mar 01, 2026", amount:25   },
  { id:8,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Zara Midi Skirt",  date:"Feb 26, 2026", amount:-150 },
  { id:9,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (5 items)",  date:"Feb 20, 2026", amount:310  },
  { id:10, type:"pending", icon:"Gift",        title:"Sign-up Bonus",               date:"Feb 14, 2026", amount:50   },
];

export const products = [
  { id:1,  brand:"LEVI'S",           name:"511 Slim Fit Jeans",         condition:"Like New", size:"M",  vmc:220, inr:2200, category:"Bottoms"   },
  { id:2,  brand:"ZARA",             name:"Floral Print Midi Dress",    condition:"Good",     size:"S",  vmc:180, inr:1800, category:"Dresses"   },
  { id:3,  brand:"H&M",              name:"Relaxed Fit Hoodie",         condition:"Good",     size:"L",  vmc:130, inr:1300, category:"Tops"      },
  { id:4,  brand:"TOMMY HILFIGER",   name:"Essential Piqué Polo",       condition:"Like New", size:"M",  vmc:150, inr:1500, category:"Tops"      },
  { id:5,  brand:"FABINDIA",         name:"Cotton Block Print Kurta",   condition:"Like New", size:"XL", vmc:200, inr:2000, category:"Ethnic"    },
  { id:6,  brand:"ALLSAINTS",        name:"Balfern Leather Jacket",     condition:"Fair",     size:"S",  vmc:450, inr:4500, category:"Outerwear" },
  { id:7,  brand:"UNIQLO",           name:"Supima Cotton Tee",          condition:"Like New", size:"M",  vmc:80,  inr:800,  category:"Tops"      },
  { id:8,  brand:"MASSIMO DUTTI",    name:"Wool Blend Overcoat",        condition:"Like New", size:"L",  vmc:520, inr:5200, category:"Outerwear" },
  { id:9,  brand:"NORTH FACE",       name:"Venture Rain Jacket",        condition:"Good",     size:"XL", vmc:310, inr:3100, category:"Outerwear" },
  { id:10, brand:"ADIDAS",           name:"Stan Smith Originals",       condition:"Like New", size:"42", vmc:280, inr:2800, category:"Footwear"  },
  { id:11, brand:"POLO RALPH LAUREN",name:"Slim Fit Oxford Shirt",      condition:"Good",     size:"L",  vmc:190, inr:1900, category:"Tops"      },
  { id:12, brand:"GAP",              name:"Icon Denim Jacket",          condition:"Like New", size:"M",  vmc:210, inr:2100, category:"Outerwear" },
];

export const activities = [
  { icon:"CheckCircle", colorScheme:"green", title:"Pickup completed — 3 items", sub:"Today, 2:40 PM",      amount:"+180 VMC", sign:"positive" },
  { icon:"ShoppingCart",colorScheme:"muted", title:"Purchased: Levi's 511",      sub:"Oct 24, 11:15 AM",    amount:"-220 VMC", sign:"negative" },
  { icon:"Sparkles",    colorScheme:"amber", title:"AI Estimate accepted",        sub:"Pending verification", amount:"95 VMC",   sign:"pending"  },
  { icon:"Users",       colorScheme:"green", title:"Referral bonus credited",     sub:"Mar 18, 2026",        amount:"+50 VMC",  sign:"positive" },
  { icon:"Upload",      colorScheme:"green", title:"Upload approved — 2 shirts",  sub:"Mar 15, 2026",        amount:"+120 VMC", sign:"positive" },
];
```

---

## SECTION 8 — ANIMATION SPEC

```
Card hover:        translateY(-2px), shadow increases. 200ms ease.
Button hover:      scale(1.01) + brightness(1.08). 180ms ease.
Button active:     scale(0.99). 80ms.
Page load cards:   fadeUp (opacity 0→1, translateY 12→0, 300ms ease). Stagger 50ms per card.
Number count-up:   0 → target value over 1200ms easeOut on mount.
Progress bars:     0% → target% over 800ms ease-out on mount.
Confidence bar:    0% → 87% over 800ms on estimate page.
Credit ring:       stroke-dashoffset 0→75% over 1000ms on dashboard mount.
Tab switcher:      Pill slides via CSS transition 200ms, no full page navigation.
Loading scanner:   3 horizontal lines, CSS keyframes sweep top→bottom, 400ms loop.
Accordion:         max-height 0→content height, overflow hidden, 250ms ease.
Modal:             Overlay fade-in 200ms + modal scale 0.95→1 200ms ease.
OTP wrong code:    Shake keyframe: translateX −8px→8px→−4px→4px→0, 400ms.
Success checkmark: scale 0→1.1→1, stroke-dashoffset reveal, 600ms spring.
```

---

## SECTION 9 — RESPONSIVE BREAKPOINTS

```
< 768px   Mobile:  Sidebar hidden. Bottom glassmorphic nav. Single-column layouts. 2-col product grid.
768–1024px Tablet: Icon-only sidebar (40px). 2-col grids. Top nav collapses.
> 1024px  Desktop: Full sidebar 176px. 3-col marketplace. Side-by-side detail pages.
```

**Mobile bottom nav spec (ONLY glassmorphism in the entire app):**
```
Position:         fixed, bottom 0, full width
Background:       rgba(255,255,255,0.85)
Backdrop-filter:  blur(20px)
Border-top:       1px solid rgba(255,255,255,0.6)
Height:           64px + safe-area-inset-bottom
5 items:          Home / Upload / Wallet / Market / Profile
Active icon:      #3A684D, 22px, label Inter 600 10px #3A684D
Inactive icon:    #9B9B9B, 22px, label Inter 400 10px #9B9B9B
```

---

## SECTION 10 — FINAL FIDELITY CHECKLIST

Run this check before marking any page as done:

- [ ] Every color on screen exists in Section 2's token table — zero invented colors
- [ ] Zero 1px solid borders used as section or content separators
- [ ] Zero default Tailwind colors anywhere (no blue-500, gray-200, slate-100, etc.)
- [ ] Zero lorem ipsum or empty placeholder arrays — all mock data from Section 7 rendered
- [ ] Playfair Display appears in exactly the 8 moments listed in Section 3, nowhere else
- [ ] All primary "earn/recycle/submit" CTAs use green gradient `#3A684D → #2E5C41`
- [ ] Amber `#C8870A` used ONLY for AI estimates, pending transactions, and reward moments
- [ ] All list/feed items separated by CSS gap only — no dividers or borders
- [ ] Glassmorphism appears ONLY on mobile bottom nav and overlay backdrops
- [ ] All INR formatted with `Intl.NumberFormat('en-IN')` — example: ₹23,400
- [ ] "VINIMAY" and "VMC" appear exactly as written, no variations
- [ ] Each completed page outputs: `/* VINIMAY FIDELITY CHECK: [PageName] ✓ */`

---

*You have been given four reference screenshots, a complete design system document (DESIGN.md), a full token spec, and exhaustive page-by-page build instructions. There is nothing left to interpret, invent, or improve. Build the VINIMAY UI exactly as described and shown. Start with the shared component library in Section 4, then build each page in order from Section 5. Do not ask clarifying questions. Begin immediately.*
