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

## Escalations and de-escalations

None yet.
