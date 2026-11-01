# CHANGE LOG: ARCHITECTURAL OVERHAUL

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

---

### Phase 1: Content & Identity (About & Skills)
- **Files Modified:**
  - `tracked/src/data/site.ts`
  - `tracked/src/components/About.tsx`
  - `tracked/src/components/About.module.css`
- **What Changed:**
  - Updated `profile` in `site.ts`: Added `academicYear` ("Year 01 // Undergraduate"), refined `education`, `college` (Newton School of Technology, Pune), and updated `intro` & `about` copy to reflect a Gen-Z high-velocity technical tone with recruiter-grade polish.
  - Updated facts array in `About.tsx` to include `Timeline`, `Specialization`, `Institution`, and `Program`.
  - Added tactical sub-header indicator `[IDENTITY_MATRIX // VERIFIED]` and responsive styles for clean rendering across mobile and desktop.
  - Expanded `skillCategories` in `site.ts`:
    - *Current Learning*: Python Systems & OOP, Computational Logic & Optimization, Scientific Computing Stack (NumPy, Pandas, Vectorized Ops).
    - *Research Interests*: Neural Networks & Deep Learning (architectures, backpropagation, adaptive optimizers), NLP (transformers, embeddings, tokenization), Computer Vision (spatial representations, convolutions).
    - *Academic Foundations*: Algorithms & Data Structures (dynamic programming, Big-O, tree/graph search), Calculus & Linear Algebra (matrix decompositions, gradients, Hessians, Riemannian optimization), Discrete Math & Probability (predicate calculus, Bayesian inference).

---

### Phase 2: Project Logic & Dynamic States (Projects)
- **Files Modified:**
  - `tracked/src/data/site.ts`
  - `tracked/src/components/Projects.tsx`
  - `tracked/src/components/Projects.module.css`
  - `tracked/src/components/ProjectCard.tsx`
  - `tracked/src/components/ProjectCard.module.css`
- **What Changed:**
  - Refactored project schema in `site.ts` to include `category`: `'Python' | 'System & Artificial Intelligence' | 'Projects'` and a managed `archiveStatus` configuration (`code`, `notice`, `syncProgress`).
  - Added dynamic filter bar in `Projects.tsx` for tactical switching between categories (`ALL`, `Python`, `System & Artificial Intelligence`, `Projects`) with Framer Motion layout animations.
  - Implemented the "Research" WIP diagnostic state in `ProjectCard.tsx`:
    - Clicking any project card or pressing Enter/Space toggles a tactical blurred overlay (`backdropFilter: 'blur(8px)'`).
    - Renders a Call of Duty-inspired system stream diagnostics readout (`ACCESSING ARCHIVE // SYSTEM UPDATE`, pulsing HUD beacon, notice message, sync telemetry status).
    - Architecture is fully data-driven via `archiveStatus` in `site.ts`, making it straightforward to toggle or substitute with live production assets without UI refactoring.

---

### Phase 3: Platform Optimization & Infrastructure
- **Files Modified / Created:**
  - `tracked/tsconfig.node.json` (Synced to fix workspace TypeScript build pipeline)
  - `change_log.md` (Created this persistent architectural changelog in workspace root)
- **Responsive & Mobile Polish:**
  - Optimized grid breaks and font clamps on `Projects.module.css`, `ProjectCard.module.css`, and `About.module.css`.
  - Maintained GPU acceleration (`transform`, `opacity`, `backdropFilter`) and smooth scrolling throughout.
