<div align="center">

<br />

<!-- Logo -->
<img src="https://img.shields.io/badge/VINIMAY-ECO--SYSTEMS-3A684D?style=for-the-badge&labelColor=1A1A1A&color=3A684D" alt="VINIMAY" height="32" />

<br /><br />

# VINIMAY

### Give your wardrobe a second life. Earn credits. Shop better.

A feature-rich frontend for a clothing recycling and credit-based resale marketplace, built for urban Indian consumers. Upload pre-loved clothes, receive AI-powered valuations, schedule home pickups, and spend earned credits in a curated marketplace — all within a single, editorial-grade UI.

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=1A1A1A)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white&labelColor=1A1A1A)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=1A1A1A)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1A1A1A)
![License](https://img.shields.io/badge/License-MIT-3A684D?style=flat-square&labelColor=1A1A1A)

<br />

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Demo Credentials](#demo-credentials)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Mock Data](#mock-data)
- [Design Tokens](#design-tokens)
- [Known Limitations](#known-limitations)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

VINIMAY is a **frontend-only** demo application for a clothing recycling and resale platform. The project is designed as a pixel-accurate implementation of the VINIMAY design system — built around the philosophy of *"The Conscious Curator"*: editorial restraint, generous whitespace, tonal depth over hard borders, and a warm organic palette that feels as much like a high-end fashion lookbook as a functional tech product.

All data is mocked locally. There is no backend, no database, and no real payment processing. The app is intended as a UI prototype and design reference implementation.

---

## Screenshots

| Auth | Dashboard | Upload |
|:---:|:---:|:---:|
| Sign-in page with editorial split layout | Credit balance, activity feed, curated picks | Step-by-step clothing upload with image preview |

| Marketplace | AI Estimate | Wallet |
|:---:|:---:|:---:|
| Filterable 3-column product grid | AI-powered credit valuation with breakdown | Credit balance, transactions, redeem flow |

---

## Features

### Authentication
- Sign-in only with hardcoded demo credentials (no Sign-Up flow, no OTP)
- Credential validation with inline error messaging
- Redirect to dashboard on successful login
- Protected routes — all pages require authentication

### Dashboard
- Dark hero card showing live VMC credit balance and INR equivalent
- Gold Level progress ring with tier indicator
- 4-stat summary row: items recycled, CO₂ saved, pickups, purchases
- Recent activity feed with color-coded credit transactions
- Horizontally scrollable "Curated for You" product carousel
- Impact badges strip (Earth Saver, 5× Recycler, Warrior)
- AI valuation CTA banner

### Upload Flow (4-step)
1. **Upload Photos** — drag-and-drop or tap to upload, image preview grid (max 9 items)
2. **Add Details** — category chips, 2×2 condition grader, brand/price/description/colour inputs
3. **AI Estimate** — animated scan loader, itemised credit breakdown, confidence bar
4. **Schedule Pickup** — calendar date picker, time slot grid, address management, confirmation state

### Wallet
- Dark hero balance card with pending credits
- 3-stat summary (earned / spent / redeemed)
- Filterable transaction list (All / Earned / Spent / Pending) with no dividers
- Redeem modal with credit slider and live INR conversion

### Marketplace
- Left filter panel: category, condition, brand, price range slider, payment type
- 3-column product grid with condition badges and wishlist hearts
- Active filter chips with individual dismissal
- Sort dropdown

### Product Detail
- Split-layout image gallery with thumbnail strip and VINIMAY verification badge
- Price in VMC and INR with retail savings callout
- Size selector, condition card, seller profile
- "Add to Cart" and "Buy with Credits" CTAs
- Accordions for item details, delivery info, and reviews

### Profile
- User stats, achievement badge grid (locked/unlocked states)
- Recycling history timeline with status chips
- Account settings with toggle switches

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 (fully custom token set — no defaults used) |
| Routing | react-router-dom v6 |
| Icons | lucide-react |
| Fonts | Inter (400–700) + Playfair Display (700 italic) via Google Fonts |
| State | React `useState` / `useContext` only |
| Mock Data | Local TypeScript constants in `/src/data/mockData.ts` |
| Build | Vite |

No external UI component libraries. No state management libraries. No backend services.

---

## Design System

VINIMAY follows a custom design system built on four principles:

**The Conscious Curator** — editorial restraint, not marketplace clutter.

**Tonal Layering over Shadows** — depth is created by nesting `#FFFFFF` surfaces on `#F2F4F2` sections on a `#FAFAF8` canvas. The only permitted shadow is a diffused ambient: `0 12px 40px rgba(45, 52, 50, 0.06)`.

**No-Line Rule** — section boundaries are never defined by 1px solid borders. Separation comes from background color shifts or vertical whitespace only.

**Typography Duality** — Inter for all UI copy; Playfair Display (italic) reserved for exactly 8 specific hero/display moments throughout the app, creating an editorial fashion-magazine feel.

See [Design Tokens](#design-tokens) below for the full color and spacing reference.

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9+ or pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/vinimay.git
cd vinimay

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Demo Credentials

> ⚠️ This app uses hardcoded demo credentials. There is no real authentication system.

| Field | Value |
|---|---|
| Email | `demouser@mail.com` |
| Password | `DemoUser123` |

Entering any other combination will display: *"Invalid credentials."*

On successful login, you are redirected directly to `/dashboard`.

---

## Project Structure

```
vinimay/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Shared component library
│   │   ├── ui/
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── SecondaryButton.tsx
│   │   │   ├── GhostButton.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── InputField.tsx
│   │   │   ├── ConditionBadge.tsx
│   │   │   ├── VMCChip.tsx
│   │   │   ├── StatusChip.tsx
│   │   │   └── CategoryChip.tsx
│   │   ├── layout/
│   │   │   ├── SidebarNav.tsx
│   │   │   ├── TopNav.tsx
│   │   │   └── BottomNav.tsx      # Mobile glassmorphic nav
│   │   └── shared/
│   │       ├── CreditRing.tsx     # Animated circular progress
│   │       ├── ProgressBar.tsx
│   │       └── TransactionRow.tsx
│   ├── pages/
│   │   ├── AuthPage.tsx           # Sign-in only
│   │   ├── DashboardPage.tsx
│   │   ├── UploadPage.tsx
│   │   ├── EstimatePage.tsx
│   │   ├── SchedulePage.tsx
│   │   ├── WalletPage.tsx
│   │   ├── MarketplacePage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── ProfilePage.tsx
│   ├── data/
│   │   └── mockData.ts            # All mock users, products, transactions
│   ├── context/
│   │   └── AuthContext.tsx        # Simple auth state (isLoggedIn boolean)
│   ├── hooks/
│   │   └── useCountUp.ts          # Number animation hook
│   ├── tokens.css                 # CSS custom properties (design tokens)
│   ├── App.tsx                    # Router setup + protected routes
│   ├── main.tsx
│   └── index.css                  # Tailwind directives + font import
├── tailwind.config.ts             # Fully custom token overrides
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | AuthPage | Sign-in form. Hardcoded credential check. |
| `/dashboard` | DashboardPage | Credit hero, stats, activity feed, curated picks. |
| `/upload` | UploadPage | 4-step upload flow: photos → details → estimate → schedule. |
| `/upload/estimate` | EstimatePage | AI estimate loading animation + itemised credit breakdown. |
| `/upload/schedule` | SchedulePage | Calendar + time slot + address + confirmation. |
| `/wallet` | WalletPage | Balance card, transaction history, redeem modal. |
| `/marketplace` | MarketplacePage | Filtered product grid, 12 pre-loved items. |
| `/marketplace/:id` | ProductDetailPage | Gallery, product info, seller card, CTAs. |
| `/profile` | ProfilePage | Stats, badges, recycling history, settings. |

All routes except `/` are protected. Unauthenticated access redirects to `/`.

---

## Mock Data

All mock data lives in `/src/data/mockData.ts` and is imported directly into pages and components. The file exports:

### `currentUser`
```ts
{
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
  levelProgress: 75
}
```

### `products` — 12 items
Levi's · Zara · H&M · Tommy Hilfiger · FabIndia · AllSaints · Uniqlo · Massimo Dutti · North Face · Adidas · Polo Ralph Lauren · Gap

Each product has: `id`, `brand`, `name`, `condition` (Like New / Good / Fair), `size`, `vmc`, `inr`, `category`.

### `transactions` — 10 entries
Typed as `earned | spent | pending` with icon, title, date, and signed amount in VMC.

### `activities` — 5 entries
Recent activity feed items for the dashboard, with icon scheme and color coding.

---

## Design Tokens

The complete token set is defined in `tailwind.config.ts` and mirrored in `tokens.css`.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FAFAF8` | Page canvas |
| `surface` | `#FFFFFF` | Cards, modals |
| `surfaceLow` | `#F2F4F2` | Alternate section backgrounds |
| `surfaceContainer` | `#EBEFEC` | Input fills, nested containers |
| `primary` | `#1A1A1A` | Headings, secondary CTAs |
| `secondary` | `#3A684D` | Primary CTAs, active states, earn indicators |
| `secondaryDim` | `#2E5C41` | CTA gradient endpoint |
| `tertiary` | `#C8870A` | Amber — AI estimates, pending, rewards only |
| `tertiaryContainer` | `#FDF3DC` | Amber chip backgrounds |
| `onTertiary` | `#7A4F00` | Text on amber surfaces |
| `textMuted` | `#9B9B9B` | Placeholders, captions, labels |
| `danger` | `#C0392B` | Error states |

### Typography

| Role | Font | Size | Weight |
|---|---|---|---|
| Display / Hero | Playfair Display | 40–60px | 700 italic |
| H1 | Inter | 28px | 700 |
| H2 | Inter | 22px | 600 |
| Body | Inter | 14–16px | 400 |
| Label | Inter | 10–11px | 600, ALL CAPS |

### Spacing

8px base grid. Section padding: `5.5rem` (desktop). Component gap: `1rem` internal, `1.4–1.7rem` between list items.

### Border Radius

`6px` (chips) · `10px` (inputs) · `16px` (cards) · `24px` (hero cards) · `9999px` (pills, avatars)

---

## Known Limitations

- **No backend** — all data is static mock data. Nothing persists between sessions.
- **No real auth** — login works with a single hardcoded credential pair only.
- **No cart or checkout** — "Add to Cart" and "Buy with Credits" are UI-only; no basket state.
- **No image upload** — the upload drop zone shows mock previews; no actual files are processed.
- **No AI** — the estimate screen simulates an AI analysis with a timed animation; no model is invoked.
- **No payments** — the wallet and redeem flows are UI demos only.
- **Light mode only** — no dark mode implementation.

---

## Contributing

This is a UI prototype. If you'd like to contribute a fix, improvement, or page extension:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Follow the design system strictly — see `/DESIGN.md` for the full rules
4. Do not introduce new color values, fonts, or shadow styles outside the token set
5. Open a pull request with a clear description of what changed and why

**Design system compliance is required for all PRs.** Changes that introduce arbitrary colors, borders as section separators, or unapproved fonts will not be merged.

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

<div align="center">

Built with intention. Designed for circularity.

**VINIMAY ECO-SYSTEMS © 2024**

</div>
