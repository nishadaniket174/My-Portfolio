# CHANGE LOG: ARCHITECTURAL OVERHAUL

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

