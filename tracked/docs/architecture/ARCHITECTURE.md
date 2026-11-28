# TECHNICAL PORTFOLIO ARCHITECTURE

## System Overview
The portfolio is structured as a modular single-page application engineered in React 19, TypeScript, Vite, and Framer Motion, styled with CSS Modules and a global tactical HUD design system.

## Project Presentation Architecture
1. **Data Model (`tracked/src/data/site.ts`):**
   - Each project contains both summary card metadata (`title`, `code`, `status`, `category`, `description`, `technologies`, `github`, `demo`) and in-depth academic review telemetry (`problemStatement`, `proposedSolution`, `architecture`, `techStackDetailed`, `individualContribution`, `documentationUrl`).
2. **Component Separation:**
   - `Projects.tsx`: Manages category state and project cards.
   - `ProjectCard.tsx`: Compact HUD card displaying core telemetry and action triggers.
   - `ProjectModal.tsx`: Focus-trapped, accessible deep-dive technical overview with tabbed or sectioned review for faculty evaluation.
3. **Responsive & Accessible Standards:**
   - WCAG AA compliant contrast in both Tactical Night and High-Visibility Lab themes.
   - Keyboard accessible (`Esc` to close modal, `Enter`/`Space` to trigger).
   - Clean scroll lock when inspect drawer is open.
