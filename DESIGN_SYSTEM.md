# UYSOT Design System

Professional Real Estate Marketplace Design System - 2026 Standards

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing Scale](#spacing-scale)
4. [Border Radius](#border-radius)
5. [Shadows & Elevation](#shadows--elevation)
6. [Animation & Transitions](#animation--transitions)
7. [Components](#components)
8. [UX Improvements](#ux-improvements)

---

## Color Palette

### Primary Colors (Teal)
- **Primary 500**: `#00B0AD` - Main brand color (CTA buttons, links, accents)
- **Primary 600**: `#009390` - Hover states, darker accents
- **Primary 700**: `#007674` - Active states
- **Primary 50-400**: Light variants for backgrounds
- **Primary 800-900**: Dark variants for contrast

**Usage:**
- Primary CTAs: "E'lon berish", "Qidirish"
- Links and interactive elements
- Active states and focus rings
- Brand elements (logo, highlights)

### Secondary Colors (Coral Red)
- **Secondary 500**: `#FF6B6B` - Hot offers, urgency, wishlist
- Used for: "Eng qaynoq takliflar", wishlist icon, special badges

### Semantic Colors

#### Success (Green)
- **Success 500**: `#22C55E`
- Used for: Success messages, completed status, "Topshirildi" badges

#### Warning (Amber)
- **Warning 500**: `#F59E0B`
- Used for: Warnings, "Qurilmoqda" status, caution messages

#### Error (Red)
- **Error 500**: `#EF4444`
- Used for: Error messages, validation errors, required fields

### Neutral Grays
- **Gray 50-100**: Backgrounds, subtle borders
- **Gray 200-300**: Borders, dividers
- **Gray 400-500**: Placeholder text, secondary text
- **Gray 600-700**: Body text
- **Gray 800-900**: Headings, high contrast text

---

## Typography

### Font Family
- **Primary**: Inter (system-ui fallback)
- Professional, readable, modern sans-serif

### Type Scale

#### Headings
- **H1**: `3.5rem` (56px) - Hero titles, landing page headlines
  - Line height: 1.1
  - Weight: 800 (Extra Bold)
  - Letter spacing: -0.02em

- **H2**: `2.5rem` (40px) - Section titles
  - Line height: 1.2
  - Weight: 800

- **H3**: `2rem` (32px) - Subsection titles
  - Line height: 1.3
  - Weight: 700

- **H4**: `1.5rem` (24px) - Card titles, modal headers
  - Line height: 1.4
  - Weight: 700

- **H5**: `1.25rem` (20px) - Small section titles
  - Line height: 1.5
  - Weight: 600

- **H6**: `1.125rem` (18px) - Property card prices
  - Line height: 1.5
  - Weight: 600

#### Body Text
- **Body LG**: `1.125rem` (18px) - Large body text
  - Line height: 1.75
  - Weight: 400

- **Body**: `1rem` (16px) - Default body text
  - Line height: 1.75
  - Weight: 400

- **Body SM**: `0.875rem` (14px) - Small body text, descriptions
  - Line height: 1.5
  - Weight: 400

- **Caption**: `0.75rem` (12px) - Metadata, timestamps
  - Line height: 1.5
  - Weight: 400

- **Label**: `0.875rem` (14px) - Form labels, button text
  - Line height: 1.5
  - Weight: 500

### Font Weights
- **400** (Normal): Body text
- **500** (Medium): Labels, emphasis
- **600** (Semibold): Subheadings, buttons
- **700** (Bold): Headings, strong emphasis
- **800** (Extrabold): Hero text, large headings
- **900** (Black): Brand name, ultra-bold

---

## Spacing Scale

8px base unit (multiples of 8)

- **4px** (0.5) - Tight spacing
- **8px** (1) - Base unit
- **12px** (1.5) - Small gaps
- **16px** (2) - Default spacing
- **24px** (3) - Medium spacing
- **32px** (4) - Large spacing
- **48px** (6) - Section spacing
- **64px** (8) - Large section spacing
- **72px** (18) - Hero spacing
- **80px** (20) - Extra large spacing

**Usage:**
- Component padding: 16px (md), 24px (lg)
- Section spacing: 48px vertical
- Card gaps: 16-24px

---

## Border Radius

- **XS**: `4px` - Small elements (badges, tags)
- **SM**: `6px` - Input fields (subtle)
- **MD**: `8px` - Default (buttons, cards base)
- **LG**: `12px` - Large cards, modals
- **XL**: `16px` - Hero sections, major containers
- **2XL**: `24px` - Extra large containers
- **Full**: `9999px` - Pills, circular buttons

**Usage:**
- Buttons: 12px (rounded-xl)
- Cards: 16px (rounded-2xl)
- Inputs: 12px (rounded-xl)
- Badges: 8px (rounded-lg)

---

## Shadows & Elevation

### Standard Shadows
- **XS**: `0 1px 2px rgba(0,0,0,0.05)` - Subtle elevation
- **SM**: `0 1px 3px rgba(0,0,0,0.1)` - Default elevation
- **MD**: `0 4px 6px rgba(0,0,0,0.1)` - Cards, dropdowns
- **LG**: `0 10px 15px rgba(0,0,0,0.1)` - Modals, popovers
- **XL**: `0 20px 25px rgba(0,0,0,0.1)` - Large modals
- **2XL**: `0 25px 50px rgba(0,0,0,0.25)` - Hero elements

### Custom Shadows
- **Card**: `0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.06)` - Property cards
- **Card Hover**: `0 10px 20px rgba(0,0,0,0.12)` - Elevated cards
- **Primary SM**: `0 2px 8px rgba(0,176,173,0.15)` - Primary button shadows
- **Primary MD**: `0 4px 12px rgba(0,176,173,0.2)` - Primary hover
- **Primary LG**: `0 8px 24px rgba(0,176,173,0.25)` - Primary active

**Elevation Levels:**
1. Flat: No shadow (default backgrounds)
2. Floating: SM shadow (buttons, inputs)
3. Raised: MD shadow (cards, dropdowns)
4. Elevated: LG shadow (modals, popovers)
5. Overlay: XL shadow (backdrops, overlays)

---

## Animation & Transitions

### Duration
- **150ms**: Micro-interactions (hover, focus)
- **200ms**: Default transitions (standard)
- **250ms**: Card animations, transforms
- **350ms**: Complex animations

### Easing
- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural
- **Ease-out**: `cubic-bezier(0, 0, 0.2, 1)` - Quick start, slow end

### Animations

#### Slide Animations
- `slide-up`: Fade in from bottom (8px)
- `slide-down`: Fade in from top
- `slide-left`: Fade in from right
- `slide-right`: Fade in from left

#### Fade Animations
- `fade-in`: Opacity 0 → 1
- `fade-out`: Opacity 1 → 0

#### Scale Animations
- `scale-in`: Scale 0.95 → 1 (modals, popovers)
- `scale-out`: Scale 1 → 0.95

#### Utility Animations
- `pulse-slow`: 3s pulse (loading states)
- `shimmer`: Loading skeleton effect

**Usage Guidelines:**
- Keep animations subtle (150-250ms)
- Use for feedback, not decoration
- Respect `prefers-reduced-motion`
- Always provide alternative states

---

## Components

### Button
**Variants:**
- `primary`: Gradient teal, white text, prominent CTA
- `secondary`: Coral red, white text, hot offers
- `outline`: Transparent, border, hover fill
- `ghost`: Background only on hover
- `danger`: Red, destructive actions

**Sizes:**
- `sm`: 32px height, compact
- `md`: 40px height, default
- `lg`: 48px height, prominent
- `xl`: 56px height, hero CTAs

**States:**
- Default: Base styles
- Hover: Scale 1.02, shadow increase
- Active: Scale 0.98
- Focus: Ring 4px, primary color
- Disabled: 50% opacity, no pointer

### Input
**Features:**
- Label with optional required indicator
- Left/right icon support
- Error state with message
- Helper text
- Focus ring (4px, primary/10)

**States:**
- Default: Gray 200 border
- Hover: Gray 300 border
- Focus: Primary border, ring
- Error: Error color border
- Disabled: Gray 50 bg, 50% opacity

### Badge
**Variants:** primary, secondary, success, warning, error, gray
**Sizes:** sm, md, lg
**Features:** Optional dot indicator

### Card
**Padding:** none, sm (16px), md (24px), lg (32px)
**Shadow:** none, sm, md, lg
**Features:**
- Optional hoverable (lift + shadow)
- Border option
- Smooth transitions

### Skeleton
**Variants:** text, circular, rectangular
**Animations:** pulse, wave, none
**Usage:** Loading states, content placeholders

---

## UX Improvements

### 1. Header/Navbar
**Before:**
- Basic sticky behavior
- Simple mega menu hover
- Standard search CTA

**After:**
- Smooth sticky scroll with backdrop blur
- Mega menu with mouse leave delay (300ms)
- Search CTA with gradient background, prominent placement
- Mobile menu with scroll lock, escape key, backdrop

**Implementation:**
- `sticky top-0 z-sticky backdrop-blur-md bg-white/95`
- Transition on scroll: `shadow-md` when scrolled
- Mega menu: Mouse leave timer for better UX

### 2. Hero Search Section
**Before:**
- All filters visible at once
- No filter summary
- Basic dropdowns

**After:**
- Step-by-step flow (optional progressive disclosure)
- Filter summary bar showing active filters
- Smart defaults (location: "Toshkent", popular selections)
- Clear visual hierarchy
- Loading states for async operations

**Implementation:**
- Filter chips showing selected values
- "Clear all" quick action
- Number badge on search button showing active filters

### 3. Property Cards
**Before:**
- Basic layout
- Price as simple text
- Static wishlist button
- No loading states

**After:**
- **Hierarchy**: Price prominent (2xl, extrabold), location secondary
- **Price prominence**: Large text, USD equivalent for expensive properties
- **Badges**: Positioned top-left with shadow
- **Wishlist**: Animated toggle (fill heart), hover scale, pressed state
- **Hover**: Image zoom (110%), gradient overlay, card lift
- **Loading**: Skeleton placeholder, image lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, focus states

**Implementation:**
- Card component with hoverable prop
- Wishlist state management (local/global)
- Image loading states
- Smooth transitions (250ms)

### 4. Mortgage Calculator
**Before:**
- Basic sliders
- Static calculation
- No formatting

**After:**
- **Clarity**: Clear labels, value displays, formatted numbers
- **Realtime feedback**: Live calculation on input change
- **Input formatting**: Thousands separators, currency symbols
- **Visual feedback**: Progress indicators, result highlight
- **Tooltips**: Help text on hover (interest rates, terms)
- **Validation**: Min/max constraints, error states

**Implementation:**
- `calculateMortgage` utility with proper formula
- Number formatting: `toLocaleString('uz-UZ')`
- Real-time state updates
- Animated result display

### 5. Mobile Menu Drawer
**Before:**
- Basic slide-in
- No scroll lock
- No keyboard support

**After:**
- **Scroll lock**: Body scroll disabled when open
- **Escape key**: Close on Escape press
- **Backdrop**: Click outside to close
- **Animation**: Smooth slide-right (200ms)
- **Focus trap**: Keyboard navigation within drawer
- **Accessibility**: ARIA modal attributes

**Implementation:**
- `useScrollLock` hook
- `useEscape` hook
- Proper ARIA attributes
- Focus management

### 6. Dropdowns
**Before:**
- Click to open/close
- Basic styling

**After:**
- **Click outside**: Auto-close
- **Keyboard navigation**: Arrow keys, Enter, Escape
- **Search/filter**: Location dropdown with search
- **Visual feedback**: Hover states, selected state
- **Animation**: Smooth slide-down (200ms)
- **Z-index management**: Proper layering

**Implementation:**
- `useClickOutside` hook
- Keyboard event handlers
- Search input in LocationDropdown
- Transition animations

### 7. Typography Hierarchy
**Before:**
- Inconsistent sizes
- No clear hierarchy

**After:**
- **Consistent scale**: H1-H6, body, caption
- **Font weights**: Proper usage (400-900)
- **Line heights**: Optimized for readability
- **Spacing**: Consistent margins between elements

### 8. Color System
**Before:**
- Limited color palette
- Inconsistent usage

**After:**
- **Full palette**: 50-900 shades for each color
- **Semantic colors**: Success, warning, error
- **Consistent usage**: Primary for CTAs, secondary for hot offers
- **Accessibility**: WCAG AA contrast ratios

### 9. Spacing & Layout
**Before:**
- Inconsistent spacing
- No grid system

**After:**
- **8px base unit**: All spacing multiples of 8
- **Consistent padding**: Components use standard values
- **Grid system**: 12-column responsive grid
- **Container max-width**: 1280px with padding

### 10. Shadows & Depth
**Before:**
- Flat design, minimal shadows

**After:**
- **Elevation system**: 5 levels (flat to overlay)
- **Custom shadows**: Card, primary, hover states
- **Visual hierarchy**: Depth indicates importance
- **Hover elevation**: Cards lift on hover

### 11. Animations
**Before:**
- No micro-interactions
- Abrupt state changes

**After:**
- **Subtle animations**: 150-250ms duration
- **Smooth transitions**: All state changes animated
- **Loading states**: Skeleton, pulse, shimmer
- **Hover feedback**: Scale, shadow, color transitions

### 12. Accessibility
**Before:**
- Basic ARIA labels
- Limited keyboard support

**After:**
- **ARIA attributes**: Labels, describedby, roles
- **Keyboard navigation**: All interactive elements
- **Focus states**: Visible focus rings
- **Color contrast**: WCAG AA compliant
- **Screen reader**: Proper semantic HTML

### 13. Performance
**Before:**
- No lazy loading
- No image optimization

**After:**
- **Lazy loading**: Images load on scroll
- **Skeleton states**: Perceived performance
- **Optimized animations**: GPU-accelerated transforms
- **Code splitting**: Route-based

### 14. Responsive Design
**Before:**
- Basic breakpoints
- Mobile-first partially

**After:**
- **Mobile-first**: All styles start mobile
- **Breakpoints**: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Touch targets**: Minimum 44x44px
- **Readable text**: Minimum 16px on mobile

### 15. Error Handling
**Before:**
- No error states
- No validation feedback

**After:**
- **Input errors**: Red border, error message
- **Form validation**: Real-time feedback
- **Error messages**: Clear, actionable
- **Loading errors**: Graceful degradation

---

## Component API Recommendations

### Button
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}
```

### Input
```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  // ... standard input props
}
```

### PropertyCard
```typescript
interface PropertyCardProps {
  property: Property;
  variant?: 'large' | 'small';
  loading?: boolean;
  onClick?: () => void;
  onWishlistToggle?: (id: string) => void;
}
```

### Badge
```typescript
interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children: ReactNode;
}
```

---

## Key Screens

### Desktop (1280px+)
1. **Homepage Hero**: Full-width search, prominent CTAs
2. **Property Listings**: 3-column grid, filters sidebar
3. **Property Detail**: Large images, sticky sidebar
4. **Mortgage Calculator**: Side-by-side layout
5. **Search Results**: Filters + results grid

### Tablet (768px - 1023px)
1. **Homepage**: 2-column search layout
2. **Property Listings**: 2-column grid
3. **Property Detail**: Stacked layout
4. **Filters**: Drawer/Modal

### Mobile (320px - 767px)
1. **Homepage**: Single column, stacked search
2. **Property Listings**: Single column, bottom sheet filters
3. **Property Detail**: Full-width images, sticky CTA
4. **Navigation**: Bottom tab bar or hamburger menu

---

## Implementation Priority

### Phase 1 (Critical)
1. ✅ Design System tokens (Tailwind config)
2. ✅ UI Kit components (Button, Input, Badge, Card, Skeleton)
3. ✅ Interaction hooks (useScrollLock, useEscape, useClickOutside)
4. ✅ Property Card improvements
5. ✅ Mobile Menu enhancements

### Phase 2 (High Priority)
1. Hero Search improvements (filter summary, smart defaults)
2. Mortgage Calculator enhancements
3. Typography system implementation
4. Shadow & elevation system
5. Animation system

### Phase 3 (Medium Priority)
1. Additional UI components (Select, Tabs, Modal, Drawer)
2. Error handling & validation
3. Loading states across all components
4. Accessibility audit & improvements
5. Performance optimization

### Phase 4 (Polish)
1. Micro-interactions refinement
2. Animation tuning
3. Visual polish
4. Documentation completion
5. Component library finalization

---

## Conclusion

This Design System provides a solid foundation for building a professional, accessible, and performant real estate marketplace. All improvements focus on user experience, conversion optimization, and maintaining visual consistency across the platform.

**Key Principles:**
- Mobile-first approach
- Accessibility (WCAG AA minimum)
- Performance (lazy loading, code splitting)
- Consistency (design tokens, component system)
- User-centric (clear hierarchy, feedback, smooth interactions)

