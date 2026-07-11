# Design System Master File — WorkSphere

> **LOGIC:** When building a specific page, first check `design-system/worksphere/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** WorkSphere
**Type:** SaaS RH multi-tenant, B2B, professionnel
**Generated:** 2026-07-06
**Category:** HR Management / Employee Experience
**Style:** HRFlow — Warm-Professional, Trust & Care, Approachable
**Perf:** ⚡ Excellent | **A11y:** ✓ WCAG AAA

---

## Conventions

**Stack : Angular (standalone components) + Tailwind CSS v4.**

- Utiliser **exclusivement des classes utilitaires Tailwind** pour le style.
- Éviter le CSS custom sauf animations complexes non couvrables par Tailwind.
- Les couleurs du design system sont déclarées comme **variables CSS personnalisées** ET
  mappées dans la configuration Tailwind v4 via `@theme` pour être utilisables via des
  classes comme `bg-primary`, `text-secondary`, `border-surface`, etc.
- Les composants Angular doivent être **standalone** (`standalone: true`).
- Pas de `ViewEncapsulation.None` sauf justification — utiliser les classes Tailwind globalement.
- Les icônes doivent être des **SVG** (Heroicons, Lucide) — jamais d'emojis.
- Privilégier `@if` / `@for` (nouvelle syntaxe de contrôle Angular) plutôt que `*ngIf` / `*ngFor`.
- **Aucun effet glassmorphism** sauf si explicitement prévu par HRFlow. Rester "warm-professional".

---

## Tailwind v4 Configuration (CSS-first via `@theme`)

Toutes les couleurs, polices et tokens sont déclarés dans `src/styles.css` via `@theme`.

```scss
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');

@theme {
  /* ── Colors ── */
  --color-primary: #7C3AED;
  --color-primary-hover: #5B21B6;
  --color-primary-light: #A78BFA;
  --color-primary-50: #F5F3FF;
  --color-primary-100: #EDE9FE;

  --color-secondary: #0D9488;
  --color-secondary-light: #5EEAD4;

  --color-tertiary: #F97316;
  --color-tertiary-light: #FFEDD5;

  --color-surface: #FFFFFF;
  --color-surface-raised: #F9FAFB;
  --color-background: #FAFAFA;
  --color-background-alt: #F3F4F6;

  --color-text: #1F2937;
  --color-text-secondary: #4B5563;
  --color-text-muted: #6B7280;
  --color-text-inverse: #FFFFFF;
  --color-text-heading: #111827;

  --color-border: #E5E7EB;
  --color-border-light: #F3F4F6;
  --color-border-focus: #7C3AED;

  --color-success: #059669;
  --color-success-light: #ECFDF5;
  --color-success-dark: #065F46;
  --color-error: #EF4444;
  --color-error-light: #FEF2F2;
  --color-error-dark: #991B1B;
  --color-warning: #D97706;
  --color-warning-light: #FFFBEB;
  --color-warning-dark: #92400E;
  --color-info: #2563EB;
  --color-info-light: #EFF6FF;

  --color-tooltip: #1E1B4B;

  /* ── Fonts ── */
  --font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-heading: 'Lexend', 'DM Sans', sans-serif;
  --font-mono: 'Roboto Mono', ui-monospace, monospace;

  /* ── Border Radius ── */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* ── Shadows (HRFlow Elevation) ── */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.10);
  --shadow-focus: 0 0 0 3px rgba(124, 58, 237, 0.25);
}
```

---

## Color Palette

| Role | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| **Primary** | `#7C3AED` | `bg-primary` | Primary actions, nav accents |
| **Secondary** | `#0D9488` | `bg-secondary` | Tags, progress indicators |
| **Tertiary** | `#F97316` | `bg-tertiary` | Alerts, badges, warmth |
| **Background** | `#FAFAFA` | `bg-background` | Page background |
| **Surface** | `#FFFFFF` | `bg-surface` | Cards, modals |
| **Success** | `#059669` | `bg-success` | Approved, completed |
| **Warning** | `#D97706` | `bg-warning` | Pending review |
| **Error** | `#EF4444` | `bg-error` | Rejected, failed |
| **Info** | `#2563EB` | `bg-info` | Informational banners |

---

## Typography

| Element | Font | Weight | Size | Line Height | Tailwind Classes |
|---------|------|--------|------|-------------|-----------------|
| **H1** | Lexend | 700 (bold) | 32px | 40px | `font-heading text-[32px] font-bold leading-[40px] text-text-heading` |
| **H2** | Lexend | 600 (semibold) | 24px | 32px | `font-heading text-[24px] font-semibold leading-[32px] text-text-heading` |
| **H3** | Lexend | 600 (semibold) | 20px | 28px | `font-heading text-[20px] font-semibold leading-[28px] text-text-heading` |
| **H4** | Lexend | 600 (semibold) | 16px | 24px | `font-heading text-[16px] font-semibold leading-[24px] text-text-heading` |
| **Body** | DM Sans | 400 (regular)| 14px | 22px | `font-sans text-[14px] leading-[22px] text-text` |
| **Small** | DM Sans | 400 (regular)| 12px | 18px | `font-sans text-[12px] leading-[18px] text-text-secondary` |
| **Mono** | Roboto Mono | 400 (regular)| 13px | 20px | `font-mono text-[13px] leading-[20px]` |

---

## Spacing Scale

Base unit: **8px**

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| xs | 4px | `p-1`, `gap-1` | Tight gaps, icon padding |
| sm | 8px | `p-2`, `gap-2` | Inline spacing |
| md | 16px | `p-4`, `gap-4` | Component internal padding |
| lg | 24px | `p-6`, `gap-6` | Section gaps |
| xl | 32px | `p-8`, `gap-8` | Card padding |
| 2xl | 48px | `p-12`, `gap-12` | Page section spacing |
| 3xl | 64px | `p-16`, `gap-16` | Layout margins |

---

## Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| none | 0px | `rounded-none` | — |
| sm | 4px | `rounded-sm` | Chips, small elements |
| md | 8px | `rounded-md` | Buttons, cards, inputs |
| lg | 12px | `rounded-lg` | Modals, panels |
| full | 9999px| `rounded-full`| Avatars, pills |

---

## Elevation

| Level | Description | Tailwind | Usage |
|-------|-------------|----------|-------|
| sm | 1px offset, 2px blur, #000000 at 5% | `shadow-sm` | Inputs, chips |
| md | 2px offset, 8px blur, #000000 at 8% | `shadow-md` | Cards, dropdowns |
| lg | 4px offset, 16px blur, #000000 at 10% | `shadow-lg` | Modals, elevated |
| focus | 3px ring #7C3AED at 25% | `shadow-focus` ou `ring-[3px] ring-primary/25` | Focus ring |

---

## Components Specs (Tailwind Classes)

### Buttons

```html
<!-- Primary -->
<!-- Sizes: sm (6px 12px, text 12px, h 32px), md (8px 16px, text 14px, h 40px), lg (10px 24px, text 16px, h 48px) -->
<button class="bg-primary text-text-inverse font-sans text-[14px]
               px-[16px] py-[8px] h-[40px] rounded-md
               transition-colors hover:bg-primary-hover
               focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25
               disabled:opacity-50 disabled:cursor-not-allowed">
  Primary Button
</button>

<!-- Secondary -->
<button class="bg-transparent text-primary border border-primary font-sans text-[14px]
               px-[16px] py-[8px] h-[40px] rounded-md
               transition-colors hover:bg-primary-50
               focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25
               disabled:opacity-50 disabled:cursor-not-allowed">
  Secondary Button
</button>

<!-- Ghost -->
<button class="bg-transparent text-text-muted font-sans text-[14px]
               px-[16px] py-[8px] h-[40px] rounded-md
               transition-colors hover:bg-background-alt
               focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25
               disabled:opacity-50 disabled:cursor-not-allowed">
  Ghost Button
</button>

<!-- Destructive -->
<button class="bg-error text-text-inverse font-sans text-[14px]
               px-[16px] py-[8px] h-[40px] rounded-md
               transition-colors hover:bg-error-dark
               focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25
               disabled:opacity-50 disabled:cursor-not-allowed">
  Destructive Action
</button>
```

### Cards

```html
<!-- Default Card -->
<div class="bg-surface border border-border shadow-sm rounded-md p-[24px]
            transition-colors hover:bg-surface-raised">
  <h3 class="font-heading text-[20px] font-semibold text-text-heading">Card Title</h3>
  <p class="font-sans text-[14px] text-text mt-[8px]">Card content goes here.</p>
</div>

<!-- Elevated Card -->
<div class="bg-surface shadow-md rounded-md p-[24px]
            transition-colors hover:bg-surface-raised">
  <h3 class="font-heading text-[20px] font-semibold text-text-heading">Elevated Card</h3>
</div>
```

### Inputs

```html
<!-- Default Input with Label & Helper -->
<div class="flex flex-col">
  <label class="font-sans font-medium text-[14px] text-primary mb-[4px]">Label</label>
  <input class="h-[40px] px-[12px] py-[8px] bg-surface border border-border rounded-md shadow-none
                font-sans text-[14px] text-text
                transition-colors
                hover:border-primary-light
                focus:border-primary focus:ring-[3px] focus:ring-primary/25 focus:outline-none
                disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
         placeholder="Enter text..." />
  <span class="font-sans font-normal text-[12px] text-tertiary mt-[4px]">Helper text</span>
</div>

<!-- Error Input -->
<div class="flex flex-col">
  <label class="font-sans font-medium text-[14px] text-primary mb-[4px]">Label</label>
  <input class="h-[40px] px-[12px] py-[8px] bg-error-light border border-error rounded-md shadow-none
                font-sans text-[14px] text-text
                focus:outline-none focus:ring-[3px] focus:ring-primary/25"
         value="Invalid input" />
  <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Error helper text</span>
</div>
```

### Chips

```html
<!-- Filter Chip -->
<span class="inline-flex items-center px-[8px] py-[4px] bg-primary-50 text-primary border border-primary rounded-full font-sans text-[12px]">
  Filter Chip
</span>

<!-- Status Chips -->
<!-- Active -->
<span class="inline-flex items-center px-[8px] py-[4px] bg-success-light text-success rounded-full font-sans text-[12px]">
  Active
</span>

<!-- Pending -->
<span class="inline-flex items-center px-[8px] py-[4px] bg-warning-light text-warning rounded-full font-sans text-[12px]">
  Pending
</span>

<!-- Inactive -->
<span class="inline-flex items-center px-[8px] py-[4px] bg-error-light text-error rounded-full font-sans text-[12px]">
  Inactive
</span>
```

### Lists

```html
<!-- Lists -->
<ul class="flex flex-col font-sans font-normal text-[14px]">
  <!-- Default Row -->
  <li class="flex items-center h-[48px] px-[16px] py-[12px] border-b border-border bg-surface
             hover:bg-primary-50 transition-colors">
    List Item 1
  </li>
  <!-- Selected Row -->
  <li class="flex items-center h-[48px] px-[16px] py-[12px] border-b border-border bg-primary-100 border-l-[3px] border-l-primary
             hover:bg-primary-50 transition-colors">
    Selected Item
  </li>
</ul>
```

### Checkboxes

```html
<label class="flex items-center gap-[8px] cursor-pointer group">
  <!-- Unchecked/Checked uses peer in Tailwind or Angular binding -->
  <input type="checkbox" class="peer sr-only" />
  <div class="w-[18px] h-[18px] rounded-[4px] border-[2px] border-[#D1D5DB] bg-surface
              peer-checked:bg-primary peer-checked:border-primary
              peer-disabled:opacity-50
              flex items-center justify-center transition-colors">
    <!-- SVG Checkmark (white) shown only when checked -->
    <svg class="w-[12px] h-[12px] text-white hidden peer-checked:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  <span class="font-sans font-normal text-[14px] text-text peer-disabled:opacity-50">Checkbox Label</span>
</label>
```

### Radio Buttons

```html
<label class="flex items-center gap-[8px] cursor-pointer group">
  <input type="radio" class="peer sr-only" name="radio-group" />
  <div class="w-[18px] h-[18px] rounded-full border-[2px] border-[#D1D5DB] bg-surface
              peer-checked:border-primary
              peer-disabled:opacity-50
              flex items-center justify-center transition-colors">
    <!-- Inner Dot -->
    <div class="w-[10px] h-[10px] rounded-full bg-primary hidden peer-checked:block"></div>
  </div>
  <span class="font-sans font-normal text-[14px] text-text peer-disabled:opacity-50">Radio Label</span>
</label>
```

### Tooltips

```html
<!-- Tooltip -->
<div class="absolute z-50 bg-[#1E1B4B] text-[#FFFFFF] font-sans font-normal text-[12px]
            rounded-[4px] shadow-md px-[10px] py-[6px] max-w-[240px]">
  Tooltip content goes here.
  <!-- Arrow (implementation may vary based on positioning) -->
  <div class="absolute w-[6px] h-[6px] bg-[#1E1B4B] rotate-45 -bottom-[3px] left-1/2 -translate-x-1/2"></div>
</div>
```

---

## Do's and Don'ts

1. **Do** use warm, people-centric language in labels (e.g., "Team Members" not "Users").
2. **Do** pair purple primary with teal for status and progress to keep the palette balanced.
3. **Do** use avatars and initials in list rows to humanize data.
4. **Don't** use destructive red for non-critical actions — reserve it for irreversible operations.
5. **Don't** place more than two primary buttons in a single view.
6. **Do** maintain generous whitespace around employee profile cards.
7. **Don't** use bright tertiary orange for large surfaces — limit it to badges and small accents.
8. **Do** provide clear loading and empty states for org charts and team lists.
9. **Don't** display sensitive employee data (salary, SSN) without explicit reveal interactions.
10. **Do** ensure all form flows have progress indicators for multi-step processes.

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (SVG: Heroicons/Lucide)
- [ ] All icons from consistent icon set, fixed viewBox 24×24, `w-5 h-5` (or sized appropriately via `w-[20px] h-[20px]`)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions
- [ ] Focus states visible for keyboard navigation (`focus-visible:ring-[3px]`)
- [ ] `prefers-reduced-motion` respected via `motion-safe:` prefix
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] All styles use Tailwind utility classes (no custom CSS)
- [ ] Colors reference design system tokens (`bg-primary`, not `#7C3AED`)
- [ ] Angular standalone components throughout
- [ ] Fonts: Lexend for headings, DM Sans for body, Roboto Mono for mono
- [ ] Pas de rouge destructif pour les actions non-critiques.
- [ ] Pas plus de 2 boutons primaires par vue.
- [ ] Whitespace généreux autour des cards employé.
- [ ] Pas d'affichage de données sensibles sans interaction explicite.
