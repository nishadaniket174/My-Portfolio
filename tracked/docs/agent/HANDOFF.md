# PORTFOLIO HANDOFF DOCUMENT

## Current Status
- Application: `tracked/` running React 19 + TypeScript 5.9 + Vite 7 + Framer Motion.
- Build Status: Verified with zero TypeScript or Vite bundle errors (`npm run build` passes in ~540ms).
- Project Philosophy: **Quality over quantity**. The **Engineering // Projects & Systems** section focuses strictly on two substantial, meaningful projects:
  1. **Weekwise:** Adaptive student study-planning & schedule recovery platform.
     - Live Demo: `https://calendar-kappa-five-87.vercel.app/`
     - GitHub Repository: `https://github.com/nishadaniket174/Calendar`
     - Features complete academic dossier (Problem Statement, Solution Architecture, Tech Stack rationales, Individual Contribution, Roadmap).
  2. **minigit:** Systems-level cleanroom Git implementation built from scratch in Python.
     - GitHub Repository: `https://github.com/nishadaniket174/minigit`
     - Features complete systems breakdown (Content addressing, SHA-1 object store, binary index, commit DAGs, CLI interop with real Git).
- Proof of Work: **LLM Playground** and **Token Explorer** remain exclusively featured in the Proof of Work block under Skills to avoid redundant duplication.
- Git Status: No Git operations were performed. Working tree remains clean for owner review.

## Key Files
- `tracked/src/data/site.ts`: Central data repository containing `Project` and `TechnicalProjectDetails`.
- `tracked/src/components/Projects.tsx`: 2-project grid with interactive technical specification modal.
- `tracked/src/components/ProjectCard.tsx`: Tactical HUD card presentation with quick summary and direct GitHub/Live Demo links.
- `tracked/src/components/ProjectModal.tsx`: Accessible deep-dive modal rendering Problem Statement, Architecture, Stack rationales, and Individual Contribution.
- `tracked/docs/`: Continuity documentation (`planning/`, `architecture/`, `agent/`).

## Verification Commands
```bash
cd tracked
npm run build
```
