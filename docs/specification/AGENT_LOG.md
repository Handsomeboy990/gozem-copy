# Agent and model routing log

Every agent dispatch of the specification phase, with the model chosen and
why. Routing follows the craft-suite `model-routing` skill: a complexity tier
maps to a model tier (`fast`, `balanced`, `strongest`), resolved here to
`haiku`, `sonnet`, `opus` as set by the owner for this run.

The owner's `~/.claude/craft.config.yaml` has no `model_routing` section, so
every tier would resolve to the runtime default (the parent session model).
The resolution above is therefore passed explicitly on every dispatch through
the `model` parameter. See `docs/CRAFT_SUITE_GAPS.md`, gap G2.

## Dispatches

| # | Agent type | Task | Complexity | Model | Reason | Outcome |
|---|---|---|---|---|---|---|
| 1 | general-purpose | Research: mobility | MEDIUM | sonnet | Web research and extraction, balanced tier | Launched before the owner directive restricting dispatch to craft-suite agents. Output kept only after re-verification by a craft agent |
| 2 | general-purpose | Research: food, shop, parcel | MEDIUM | sonnet | Same | Same |
| 3 | general-purpose | Research: wallet, financing, promotions, legal | MEDIUM | sonnet | Same | Same |

### Session 2 (resumed run, 2026-09-28 afternoon)

Routing follows craft-suite `model-routing` 1.1.0 from branch
`feat/researcher-agent-and-routing` (installed, not yet merged). Actual tokens
and duration come from each task notification (`subagent_tokens`,
`duration_ms`). The expected envelope column applies the G6 rule, deferred in
craft-suite but applied by hand here.

| # | Agent type | Task | Complexity | Model | Override / reason | Expected tokens | Actual tokens | Duration | Outcome |
|---|---|---|---|---|---|---|---|---|---|
| 4 | documentation-engineer | craft-suite G1+G4, G2, G3 on one branch | MEDIUM | sonnet | none; owner rule: craft-suite edits on sonnet | not set (G6 arrived mid-dispatch) | 412,009 | 57 min | 3 commits, six test scripts green at each commit; overran the 20 min time box |
| 5 | pr-author | Open craft-suite PR into `dev` | LOW | haiku | none; mechanical | 20k | 58,241 | 7.6 min | PR opened: https://github.com/Handsomeboy990/craft-suite/pull/53 (verified with `gh pr list`) |
| 6 | researcher | Spawnability test | LOW | haiku | none | 1k | 0 | 0 | Failed: agent type not found; types load at session start. Restart needed |
| 7 | design-research | Brand tokens, logo, UI inventory (G3 exception), fallback for `researcher` | MEDIUM | sonnet | none; extraction | 120k | 76,516 | 5 min | Partial: exception judged applicable; UI inventory written; colours and font only INFERRED and no logo file, because Bash had no classifier verdict during the whole dispatch |
| 8 | software-architect | Mockup stack section | LOW | sonnet | opus not needed: small, reversible static-mockup decision | 40k | 20,405 | 1 min | `MOCKUP_ARCHITECTURE.md` written; service-worker scope overlap left open, passed to #10 |
| 9 | researcher | Retry of #7's missing items: exact hex, fonts, logo files from public CSS and images | LOW | sonnet | same tier on purpose: #7 failed on tooling, not model depth, so `output-quality-failure` does not apply | 40k | 37,982 | 3.2 min | First successful `researcher` spawn. `#179138` and `Inter` OBSERVED in public theme CSS (verified by grep); 4 logo/favicon PNGs saved; style.css 404 |
| 10 | requirements-analyst | `MOCKUP_SPEC.md`, the single approval gate | MEDIUM | sonnet | owner re-scope: cheapest capable model for a bounded synthesis | 80k | 94,684 | 6.6 min | 73 screens, 16 journeys, 3 blocking questions. Gate correction by the orchestrator: website service worker `navigateFallbackDenylist` for the four app prefixes |
| 11 | frontend-engineer | Mockup scaffold: workspace, design-system, i18n, fake-data, five app shells, docker | MEDIUM | sonnet | none; implementation | 80k | 76,710 | 14.5 min | 6 commits, `pnpm build` green for 5 apps; Docker build not run by it, fails at `corepack prepare` (orchestrator check) |
| 12 | frontend-engineer | Customer app, 32 screens | MEDIUM | sonnet | none | 150k | 112,467 | 13.5 min | 32 routes, journeys 1 to 9, 4 commits |
| 13 | frontend-engineer | Driver and merchant apps, 26 screens | MEDIUM | sonnet | none | 130k | 98,223 | 10.5 min | 13 + 15 routes, journeys 10 to 14 |
| 14 | frontend-engineer | Admin and website apps, 15 screens | MEDIUM | sonnet | none | 100k | 99,369 | 9 min | 7 + 8 routes, journeys 15 and 16 |
| 15 | devops-engineer | Docker build fix | LOW | haiku | none; mechanical Dockerfile fix | 20k | 26,768 | 16 min | Partial: corepack replaced (7a6fbe7); build still fails, npm registry fetch errors in the container |
| 16 | playwright-engineer | Smoke suite | MEDIUM | sonnet | none | 80k | not reported | not reported | Failed: API error (no response), no files written |
| 17 | design-verification | Rendered UI against spec and screenshots | MEDIUM | sonnet | none | 60k | 61,173 | 10 min | 1 blocker (FedaPay logo), 4 major, 2 minor; banner PASS on every sampled route |
| 18 | frontend-engineer | Fix #17 findings and the `dev` script | LOW | sonnet | none | 50k | 79,311 | 16 min | 5 commits: BottomNav, TopBar logo, FedaPay logo (fedapay.com public SVG), merchant i18n and labels, `dev` script |
| 19 | playwright-engineer | Smoke suite, retry of #16 | MEDIUM | sonnet | same tier: #16 failed on an API error, not on output quality | 60k | 52,167 | 10 min | 316 tests: 309 passed, 3 failed, 4 skipped; retry: merchant offline reload still fails |
| 20 | devops-engineer | Make `docker compose up` work | LOW | sonnet | ESCALATION haiku to sonnet, `output-quality-failure` (failed gate: #15 left the build failing) | 30k | not in notification at log time | about 14 min | Registry unreachable under pnpm's concurrent load (container and host); fell back to serving host-built `dist` with nginx (485a635). Orchestrator check: 8 URLs return 200, 11 MiB of 256 MiB |

## Escalations and de-escalations

| Task | Prior | New | Trigger | Reason | Expected benefit |
|---|---|---|---|---|---|
| Docker build (#15 to #20) | haiku | sonnet | `output-quality-failure`, failed gate | #15 fixed corepack but left the build failing on registry fetch errors and stopped | Diagnosis of the container network, and a fallback that does not depend on the registry |

Retries on the same tier, not escalations: #9 (tooling outage in #7), #19 (API error in #16).

### Gate evidence observed by the orchestrator (17:25 to 17:38)

- `pnpm run build`: exit 0, 5 of 5 apps generate a service worker.
- `npx playwright test` in `e2e/`: `1 failed, 4 skipped, 311 passed (2.1m)`. The failure is
  `[desktop] offline resilience > merchant still shows the disclaimer banner offline after reload` (`net::ERR_FAILED`). Known gap, not root-caused.
- `docker compose up`: container `gozem-copy-web-1` up, `/`, `/app/`, `/app/wallet`, `/driver/`, `/merchant/`, `/admin/`, `/app/sw.js`, `/app/manifest.webmanifest` all 200.

### Consumption, session 2

| Model | Dispatches | Tokens |
|---|---|---|
| sonnet, spec phase | #4, #7, #8, #9, #10 | 641,596 |
| haiku, spec phase | #5, #6 | 58,241 |
| sonnet, build phase | #11 to #14, #16 to #20 | 579,420 known (#16 and #20 not reported) |
| haiku, build phase | #15 | 26,768 |
| opus | none | 0 |

Top consumer: #4 (craft-suite fixes), 412,009 tokens, 64 % of the session.

## Deferred by the owner re-scope (two hour deadline)

- Re-verification of `research/mobility.md` and `research/wallet-financing.md`
  (claims from the `r.jina.ai` proxy remain discarded, not re-sourced).
- `research/commerce.md`, driver / courier / merchant research.
- Opus source verification, the full specification and `RESUME_FR.md`.
- pr-reviewer review of the craft-suite PR, until after the mockup ships.
