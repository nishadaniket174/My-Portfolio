# CHANGE LOG: ARCHITECTURAL OVERHAUL

## [2026-11-01] Architectural Overhaul: Lab-Style High-Visibility Theme & Fluid Motion Architecture

### Overview
Overhauled the visual design system to eliminate raw color inversion in light mode, replacing it with a custom industrial "Lab-Style" engineering palette. Structured hardware-accelerated cubic-bezier transitions for background, border, text, and shadow shifts to ensure zero stepping or flashing. Retained all tactical identity markers (badges, HUD status beacons, monograms, corner ticks) across both themes.

---

### Key Architectural Changes
1. **Lab-Style High-Visibility Theme:**
   - **File Modified:** `tracked/src/styles/global.css`
   - **Palette Specification:**
     - *Background:* Soft slate `#F8FAFC`, secondary container `#F1F5F9`.
     - *Panels & Cards:* Pure crisp lab-grade white `#FFFFFF` with tailored ambient slate drop shadow (`--panel-shadow: 0 8px 24px rgba(15, 23, 42, 0.08)`).
     - *Typography:* Slate-900 `#0F172A` for primary headlines, Slate-700 `#334155` for high-readability body copy, and Slate-500 `#64748B` for micro-labels.
     - *Accents:* Accessible deep technical amber `#B45309` and industrial indigo `#4F46E5`.
     - *Line Work:* Controlled slate-line boundary tokens (`rgba(71, 85, 105, 0.22)`) and high-contrast separators (`rgba(30, 41, 59, 0.55)`).

2. **Fluid Hardware-Accelerated Transitions:**
   - **File Modified:** `tracked/src/styles/global.css`
   - Configured non-flashing cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`) across `background-color`, `border-color`, `color`, and `box-shadow` for universal element transitions.
   - Preserves GPU compositing and eliminates sudden flashes during theme switching.

3. **Component Polish & Tactical Integrity:**
   - **Hero (`tracked/src/components/Hero.module.css`):** Configured responsive white-to-slate gradient overlay on `.stage` in High-Visibility mode to maintain HUD corner brackets and typography contrast.
   - **Skills (`tracked/src/components/Skills.module.css`):** Transitioned `.itemCard` background to theme-aware `--card-bg` token so cards render cleanly in both Night and Lab modes.
   - **Projects (`tracked/src/components/ProjectCard.module.css`):** Tech pills and interactive links dynamically leverage theme tokens with high-contrast text and border separation.
   - **About (`tracked/src/components/About.module.css`):** Fact panels upgraded with subtle elevation shadows to enhance visual separation.
   - **Header (`tracked/src/components/Header.module.css`):** Glassmorphic header backdrop calibrated for translucent slate on scroll in High-Visibility mode.

---

## [2026-11-01] Architectural Overhaul: System Preferences, Visual Protocols & Accessible Scalability

### Overview
Implemented an accessible, customizable "System Settings" layer without violating zero-git-access constraints. Created `SystemSettingsContext` with persistent local storage, interactive high-contrast theme switching ("Tactical Night" vs. "High-Visibility" light mode), dynamic typography scaling across four accessible tiers (`sm`, `md`, `lg`, `max`), tactical click ripples and active state feedback, and streamlined section-to-section scroll entrance animations via Framer Motion.

---

### Key Architectural Changes
1. **Context & State Management:**
   - **File Created:** `tracked/src/context/SystemSettingsContext.tsx`
   - **Capabilities:** Manages `ThemeMode` (`'tactical-night' | 'high-visibility'`) and `FontSizeScale` (`'sm' | 'md' | 'lg' | 'max'`). Automatically binds data attributes (`data-theme`, `data-font-scale`) to `document.documentElement` and persists selections across page visits in `localStorage`.

2. **Tactical UI Control Panel:**
   - **Files Created:**
     - `tracked/src/components/TacticalSettings.tsx`
     - `tracked/src/components/TacticalSettings.module.css`
   - **Capabilities:** Floating header control trigger `[SYS_CONFIG]` featuring an animated tactical radar pulse, collapsible high-tech command panel with click-outside protection, one-tap theme switching, and a 4-tier font scalability grid (`COMPACT 88%`, `STANDARD 100%`, `LARGE 115%`, `A11Y-MAX 130%`).

3. **Styling & Accessibility Hierarchy:**
   - **File Modified:** `tracked/src/styles/global.css`
   - **Capabilities:**
     - *Tactical Night:* Deep black `#070707`, tactical panels `#121212`, amber gold accent `#c9b25a`.
     - *High-Visibility:* Clean command center slate/gray `#f8f9fa`, pure white panels `#ffffff`, high-contrast deep amber `#b45309`, and slate-900 typography `#0f172a`.
     - *Typography Scalability:* Variable `--base-font-size` dynamically driven by root attributes from 16px to 23px with REM-based scaling across all components.
     - *Click Ripple & Activation:* Added tactile `:active { transform: scale(0.97); }` and button hover states.
   - **File Modified:** `tracked/src/components/Scene.module.css`
     - Adapted background ambient vignette and grid line tokens to blend seamlessly with High-Visibility mode.

4. **Interactive Motion & Polish:**
   - **File Modified:** `tracked/src/App.tsx`
     - Wrapped the main application in `SystemSettingsProvider`.
     - Integrated Framer Motion `motion.div` section wrappers with calibrated `whileInView` reveals (`duration: 0.6`, `ease: 'easeOut'`).
   - **File Modified:** `tracked/src/components/Journey.tsx`
     - Added staggered list reveals and interactive slide-in hover response.
   - **File Modified:** `tracked/src/components/Header.tsx` & `tracked/src/components/Header.module.css`
     - Placed `TacticalSettings` seamlessly into the primary header bar alongside mobile menu triggers.

---

## [2026-11-01] Architectural Overhaul: Dynamic Content, Category Transitions & WIP Diagnostics

### Overview
Executed a full-scale architectural overhaul targeting professional B.Tech student positioning (Newton School of Technology, AI/ML specialization, Year 01), expanding skills with deep mathematical & system foundations, implementing category transitions with tactical filter matrices, and designing a managed, blurred-out "Work in Progress / System Update" diagnostic overlay for project initiatives.
