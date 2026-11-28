# AGENT OPERATIONAL & CODING GUIDELINES

## 1. Operating Rules & Core Constraints

### 1.1 Strict Mode & Scope Boundaries
- **Project Context:** First-year B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning at Newton School of Technology (Ajeenkya D. Y. Patil University).
- **Application Directory:** `tracked/` is the active application root.
- **Inspect Before Action:** Every future agent must read project instructions, documentation (`tracked/docs/`), and inspect the current Git working tree before modifying code.
- **Preserve Existing Architecture & Visual Identity:** Maintain the tactical/HUD-inspired UI, dark visual atmosphere, technical typography, Framer Motion transitions, and CSS Module styling conventions.
- **Centralized Data Truth:** All portfolio data, project metadata, skills taxonomy, and contact info reside in `tracked/src/data/site.ts`. Components must consume data from this source.
- **Honesty & Verification:** Never invent skills, project features, grades, or repository links. Never claim unverified or unreleased features. Differentiate completed implementations from planned work. Clearly acknowledge AI-assisted development tools honestly and professionally.
- **Git Restrictions:** STRICTLY NEVER run `git push`, never commit, never change branches, never alter remotes, and never perform destructive Git operations (`git reset`, `git clean`).

---

## 2. Technical Stack
- **Framework:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript 5.9 (`tsc -b`)
- **Build Tool:** Vite 7
- **Styling:** CSS Modules (`*.module.css`) + Global tokens in `tracked/src/styles/global.css`
- **Animation:** Framer Motion (`framer-motion`)

---

## 3. Mandatory Workflow for Future Agents
1. Read `tracked/AGENTS.md` and `tracked/docs/agent/HANDOFF.md`.
2. Inspect `tracked/docs/agent/SESSION_LOG.md` and current uncommitted changes with `git status --short`.
3. Check `tracked/docs/planning/ROADMAP.md` for immediate pending work.
4. Keep changes focused and minimally scoped.
5. Verify build cleanliness with `cd tracked && npm run build`.
6. Update `tracked/docs/agent/SESSION_LOG.md` and `tracked/docs/agent/HANDOFF.md` before concluding.
