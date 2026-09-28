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

## Escalations and de-escalations

None yet.

### Consumption, session 2

| Model | Dispatches | Tokens |
|---|---|---|
| sonnet | #4, #7, #8, #9, #10 | 641,596 |
| haiku | #5, #6 | 58,241 |
| opus | none | 0 |

Top consumer: #4 (craft-suite fixes), 412,009 tokens, 64 % of the session.

## Deferred by the owner re-scope (two hour deadline)

- Re-verification of `research/mobility.md` and `research/wallet-financing.md`
  (claims from the `r.jina.ai` proxy remain discarded, not re-sourced).
- `research/commerce.md`, driver / courier / merchant research.
- Opus source verification, the full specification and `RESUME_FR.md`.
- pr-reviewer review of the craft-suite PR, until after the mockup ships.
