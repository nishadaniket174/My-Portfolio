# ARCHITECTURAL DECISIONS (PORTFOLIO)

## ADR-001: Centralized Data Architecture
- **Status:** Active
- **Context:** Project details, problem statements, architectures, and external links must remain single-sourced to prevent UI drift and multiple inconsistent copies.
- **Decision:** Keep all project data in `tracked/src/data/site.ts`.

## ADR-002: Dual-Level Technical Project Presentation
- **Status:** Active
- **Context:** Faculty reviewers require deep engineering details (Problem statement, Architecture, Tech Stack rationales, Individual Contribution), while fast recruiter scans need high-level scannability.
- **Decision:** Present projects with a high-level tactical HUD card summary on the main grid, with an accessible, full-bleed or modal deep-dive inspection drawer providing the structured academic breakdown.

## ADR-003: Honest Representation of AI-Assisted Work
- **Status:** Active
- **Context:** Owner leverages modern AI agent tools. Faculty and recruiters value transparency in specification, prompt engineering, verification loops, and architectural guidance.
- **Decision:** Explicitly document the individual engineering contribution as architectural definition, feature specification, prompt iteration, code review, regression testing, and local verification.

## ADR-004: Strict Verification of External Links
- **Status:** Active
- **Decision:** Never invent repository links (e.g. Weekwise GitHub repo is explicitly marked as "Repository address pending" until verified by owner).
