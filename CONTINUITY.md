# Continuity

Last updated 2026-09-28 15:45. The delivery orchestrator is running in the
background; this note describes the state at that time.

## Completed

- Project decisions validated by the owner: `docs/PROJECT_DECISIONS.md`.
- Keys the owner must provide: `KEYS_TO_PROVIDE.md` (only FedaPay sandbox keys so
  far; not needed for the current mockup scope).
- Private GitHub repository `Handsomeboy990/gozem-copy`. `main` holds the first
  commit; branch `docs/gozem-specification` (pushed) holds the research
  conventions (`research/README.md`), the craft-suite gap log
  (`docs/CRAFT_SUITE_GAPS.md`) and the routing log
  (`docs/specification/AGENT_LOG.md`).
- Public-source research, NOT committed and NOT verified by a craft agent:
  `research/mobility.md` (ride classes, pricing, payment, cities) and
  `research/wallet-financing.md` (wallet, Gozem Money, V+ financing, referral,
  terms). Raw downloads in `research/raw/` (gitignored).
- craft-suite (`~/Importants/skills/claude-writer-suite`) reinstalled with
  `bash install.sh --all` (167 skills, 26 agents) at the start of the session.

## Current state

- No application code exists yet. No specification exists yet.
- craft-suite branch `feat/researcher-agent-and-routing` has 45 uncommitted
  changes: new agent `agents/research/researcher.md` (G1, G4), model-routing
  changes (G2), docs and tests updated. G3 (design-research exception) and G6
  (token budget) are not visible yet. No PR is open.
- Food / shop / parcel research (`research/commerce.md`) was never written: its
  agent was killed by a session restart.

## Decisions

- Scope for the 2-hour deadline (owner, 15:40): a clickable PWA mockup of every
  screen of every app, fake data, no backend. Rejected: a working Transport
  slice, and Transport + wallet.
- A single approval gate: `docs/specification/MOCKUP_SPEC.md` (screen list and
  stack). Rejected: two separate gates (spec, then architecture), which cost
  about 30 minutes.
- Exact Gozem identity is allowed because use is local only (Docker, never
  deployed), the repository is private, and a permanent disclaimer banner is
  shown. A public deployment was rejected for impersonation risk.
- Only craft-suite agents and skills. Gaps are fixed inside craft-suite.
- No agent merges any PR (the permission classifier refused self-merge with
  `--admin`). The owner merges. craft-suite is installed from its unmerged
  branch so fixes are usable immediately.
- No accounts on Gozem, no authenticated scraping, no APK decompiling, no
  bypass of protections.

## Remaining

1. Orchestrator: commit the craft-suite fixes G1, G2, G6 (and G3 if quick) on
   `feat/researcher-agent-and-routing`, push, open a PR, get a pr-reviewer
   review, reinstall from the branch.
2. Orchestrator: write `docs/specification/MOCKUP_SPEC.md` (French summary at
   the top), then stop for the owner's validation (target about 16:25).
3. After approval: build the design system, then the apps with at most 3
   parallel frontend-engineer agents; Playwright smoke test of every route,
   design-verification, `docker compose up` check, PR to `main` (target
   about 17:45).
4. Deferred until after the mockup: re-verify `research/*.md` with craft
   researchers, write `research/commerce.md` and the driver / merchant
   research, then the full specification.
5. Owner: merge the PRs in both repositories; delete
   `.claude/settings.local.json` at the end of the test (temporary permission).

## Risks

- The new `researcher` agent may only become spawnable after a session
  restart. Fallback agreed: design-research (curl) for brand research.
- `research/wallet-financing.md` contains claims fetched through the r.jina.ai
  proxy, which bypassed Gozem's Zendesk Cloudflare challenge. They must be
  discarded or re-sourced before any use.
- Public Gozem store screenshots have not been obtained yet, so screen fidelity
  depends on the next research step.
- Several agents share one working tree and one branch. A broad `git add -A`
  by one agent can commit another agent's files.
- Session usage limits: the research agents used about 165k to 176k tokens
  each. A full build (not the mockup) is estimated at tens of millions of
  tokens over 1 to 3 weeks.

## Verification

- `gh repo view Handsomeboy990/gozem-copy`: visibility PRIVATE.
- `bash install.sh --all`: "167 skills installed", "26 agents installed".
- `https://gozem.co/robots.txt` returned HTTP 404 (checked by the
  orchestrator), so no path is disallowed.
- No tests exist yet; no build has been run.

## Context

- Real objective: prove craft-suite runs a delivery autonomously with per-task
  model switching (opus for analysis, sonnet for implementation and research,
  haiku for mechanical work) and token management (gap G6).
- Machine: 4 cores, 16 GB RAM (about 8 GB free), 47 GB free disk. At most 2 or
  3 agents in parallel.
- `.claude/settings.local.json` (gitignored) holds the owner's temporary
  permission for agents to edit craft-suite and run its installer.
- Test accounts for our platform only: [address removed],
  [address removed].
- Market: Benin (XOF, +229, Cotonou). FR and EN are both confirmed on Gozem's
  public site.
