# SESSION LOG

## Session: 2026-11-28 - Quality Over Quantity: Project Streamlining & Calendar GitHub Integration

### Objective
Streamline the **Engineering // Projects & Systems** section to feature exactly two substantial, meaningful technical projects (**Weekwise** and **minigit**). Eliminate basic/placeholder projects and prevent duplication of projects already showcased in **Proof of Work** (**LLM Playground** and **Token Explorer**). Wire in the verified GitHub repository for Weekwise/Calendar (`https://github.com/nishadaniket174/Calendar`).

### Files Inspected & Modified
- `tracked/src/data/site.ts`:
  - Updated Weekwise (`WW-01`) GitHub repository to `https://github.com/nishadaniket174/Calendar` and verified live demo link `https://calendar-kappa-five-87.vercel.app/`.
  - Added minigit (`MG-02`) with in-depth systems architecture breakdown, SHA-1 content addressing, binary index staging, Python 3.10+ stack rationales, individual contribution, and verified GitHub repository `https://github.com/nishadaniket174/minigit`.
  - Removed project clutter (DATA-04, LOGIC-05, and duplicate entries of LLM Playground / Token Explorer from the Projects section).
- `tracked/src/components/Projects.tsx`:
  - Updated category filter matrix to clean 2-tier classification (`ALL`, `Systems & Applications`, `Python`).
- `tracked/src/components/Projects.module.css`:
  - Tuned `.grid` to a focused 2-column layout (`repeat(2, 1fr)`) with single-column responsive collapse on mobile/tablet.
- `tracked/docs/planning/PROJECT_BRIEF.md`, `tracked/docs/agent/HANDOFF.md`, and `change_log.md`:
  - Updated project registers and handoff state.

### Checks Performed
- `cd tracked && npm run build` (tsc -b && vite build): Succeeded cleanly with 0 errors.
- Node inspection script verified presence of Weekwise and minigit alongside their respective GitHub URLs and confirmed absence of duplicates and basic placeholders.
- Zero Git operations executed (no commits, no pushes, no branch modifications).

---

## Session: 2026-11-28 - Technical Project Presentation Upgrade

### Objective
Enhance existing portfolio to showcase in-depth technical projects meeting faculty evaluation standards (Problem statement, Solution architecture, Tech stack with rationales, Individual contribution, GitHub & live links), featuring Weekwise, LLM Playground, and Token Explorer without altering visual identity or breaking existing sections.

### Files Inspected
- `tracked/src/App.tsx`
- `tracked/src/data/site.ts`
- `tracked/src/components/Projects.tsx`
- `tracked/src/components/ProjectCard.tsx`
- `tracked/src/components/ProjectCard.module.css`
- `tracked/src/components/Skills.tsx`
- `tracked/src/components/Contributions.tsx`
- `.agent-workspace/` logs and historical changelogs.

### Files Created & Modified
- Created `tracked/AGENTS.md`, `tracked/README.md`.
- Created `tracked/docs/planning/PROJECT_BRIEF.md`, `ROADMAP.md`, `DECISIONS.md`.
- Created `tracked/docs/agent/SESSION_LOG.md`, `HANDOFF.md`.
- Modified `tracked/src/data/site.ts` with expanded `TechnicalProject` schema and comprehensive project data.
- Upgraded `tracked/src/components/ProjectCard.tsx`, `ProjectCard.module.css`, `Projects.tsx`, `Projects.module.css` with in-depth technical review modal.

### Checks Performed
- `cd tracked && npm run build` (Clean compile and Vite production build).
- Verified responsive layout and accessibility attributes.
