# Craft Suite gaps found during delivery

Gaps in craft-suite (`Handsomeboy990/craft-suite`, local clone
`~/Importants/skills/claude-writer-suite`) found while delivering this
project. Each entry says what was missing, when it blocked, what was done, and
the pull request when one exists.

## Status summary

| Id | Gap | Blocking | State | PR |
|---|---|---|---|---|
| G1 | No research agent; no craft agent has WebSearch or WebFetch | Yes, research phase | Fixed on branch, commit `a5ca2a1`; installed; not spawnable until the session restarts (G7) | https://github.com/Handsomeboy990/craft-suite/pull/53 |
| G2 | `model-routing` cannot escalate on a weak result, and an empty `model_routing` config silently disables switching | No, worked around by explicit `model` on every dispatch | Fixed on branch, commit `190daa6`; installed | https://github.com/Handsomeboy990/craft-suite/pull/53 |
| G3 | `design-research` forbids exact colours, logos and brands, which contradicts an owner-authorized faithful reproduction | Yes, for brand research through that agent | Fixed on branch, commit `59ed0ac`, per the owner decision (scoped exception); installed | https://github.com/Handsomeboy990/craft-suite/pull/53 |
| G4 | The `source-verification` skill has no agent that owns it | No, would be covered by G1 | Fixed with G1: `researcher` owns it | https://github.com/Handsomeboy990/craft-suite/pull/53 |
| G5 | A single code owner cannot satisfy "Require review from Code Owners" on their own PR | No | Handled by the merge rule: agents open PRs and a craft `pr-reviewer` posts findings; the owner merges. No agent merges, no `--admin` | n/a |
| G6 | No token budget or usage-limit management for long autonomous deliveries | No | Deferred by the owner until after the mockup; its rules are applied by hand in `docs/specification/AGENT_LOG.md` | none |
| G7 | An agent installed mid-session is not spawnable until the session restarts | Yes, for `researcher` in this session | Observed, not fixable in craft-suite; documented. Fallback used: `design-research` | none |
| G8 | `install.sh --configure` cannot set `model_routing`; `CHANGELOG.md` lags `CONTINUITY.md` with no check | No | New, found during G2; not fixed | none |

Installed version: `bash install.sh --all` was run on 2026-09-28 with the
unmerged branch `feat/researcher-agent-and-routing` checked out (167 skills,
27 agents). Until the owner merges the PR into `dev`, the installed suite is
ahead of `dev`.

The craft-suite PR review by `pr-reviewer` was deferred by the owner until
after the mockup ships.

## G1. No research agent

- Missing: `agents/research/` is empty. The research tree ships five skills
  (`research-core`, `source-research`, `source-verification`,
  `synthesis-reporting`, `competitive-analysis`) and no agent runs them. No
  craft agent declares `WebSearch` or `WebFetch`; the only web access a craft
  agent has is `curl` through Bash, with no search.
  `docs/agents/README.md` in craft-suite already lists `research` under "What
  is not yet built". `install.sh` `resolve_agents` says the same in a comment.
- When it blocked: 2026-09-28, at the start of phase 1 (requirements analysis),
  when the owner directive required every dispatch to use a craft agent. The
  three research dispatches already running were `general-purpose` agents,
  launched before the directive arrived.
- What was prepared: a `researcher` agent in `agents/research/`, tools `Read,
  Grep, Glob, Bash, Write, WebSearch, WebFetch`, thin, citing the five research
  skills, with boundaries for public sources, robots.txt, rate limits, no
  account creation, no authenticated scraping, no decompiling, no uncited
  source. Wiring needed: `AGENT_NAMES` in `tests/validate-orchestration.sh`,
  `agents/README.md`, counts in `AGENTS.md`, `README.md`, `README.fr.md`,
  `install.sh` (menu, `agent_domains` to `research engineering`,
  `domain_wanted`, `resolve_agents`), `docs/agents/README.md`, plugin build,
  `CHANGELOG.md`, `CONTINUITY.md`, then the six test scripts.
- What happened: the dispatch to `documentation-engineer` that would have made
  the change on branch `feat/researcher-agent` was refused by the Claude Code
  auto mode permission classifier, category "Self-Modification": craft-suite
  installs into `~/.claude/agents` and `~/.claude/skills`, which configure the
  agent runtime itself. The refusal was not worked around.
- What the owner must do, one of:
  1. Make the change in craft-suite yourself (the list above is the full
     surface), merge it into `dev`, run `bash install.sh --all`, then restart
     the session so the new agent type is loaded; or
  2. Add a permission rule allowing edits to
     `~/Importants/skills/claude-writer-suite` and runs of its `install.sh`,
     then restart and relaunch this phase.
- Whether a newly installed agent is spawnable without a restart was not
  tested, because nothing was installed.

## G2. Model routing

`engineering/dev-skills/model-routing` lets the orchestrator choose a model
per dispatch (section 7 step 6, dispatch override) and escalate on
reclassification (section 6). Three things are missing for this run's
requirement:

1. Escalation on a weak result. The only trigger is a `task-complexity`
   reclassification. "The balanced model returned shallow or wrong output" is
   not a trigger, so the escalation the owner asked for has no rule to cite.
   Proposed: an `output-quality-failure` transition in
   `resources/tier-table.json` and `resources/fixtures.json` (one tier
   stronger, reason required, the failed output kept for comparison), plus the
   matching sentence in section 6.
2. Empty configuration. `routing-policy.md` says an empty tier leaves the
   choice to the runtime. On Claude Code an omitted `model` inherits the parent
   session model, so an empty `model_routing` section means every dispatch runs
   on the orchestrator's model and no switching happens, silently. The owner's
   `~/.claude/craft.config.yaml` has no `model_routing` section. Proposed: the
   skill states this consequence, and `install.sh --configure` offers the
   `fast: haiku`, `balanced: sonnet`, `strongest: opus` mapping.
3. No routing log artefact. Section 8 defines an announcement per dispatch but
   no durable record. Proposed: a routing log format that an orchestrator
   keeps in the project, like `docs/specification/AGENT_LOG.md` here.

Not applied, for the same permission reason as G1. Worked around in this run
by passing `model` explicitly on every dispatch and logging it in
`docs/specification/AGENT_LOG.md`.

## G3. Design research versus an authorized reproduction

`agents/design/design-research.md` forbids copying exact colours, curves,
timings, logos, brands and trademarked material. `docs/PROJECT_DECISIONS.md`
requires the exact Gozem identity for a private, local, never deployed test
with a permanent non-affiliation banner. These are incompatible. Relaxing an
ethics boundary is the owner's decision, not an agent's. Options for the owner:

- an explicit "authorized reproduction" mode, modelled on
  `authorized-pentesting`: written authorization on record, private scope, no
  public deployment, disclaimer mandatory; or
- keep the boundary, and have brand facts (hex values, font names, logo
  source URLs) recorded as research facts by the `researcher` agent of G1,
  with `design-research` limited to layout and interaction principles.

## G4. Source verification has no owner

The `source-verification` skill exists; no agent owns it. The orchestrator
brief asks for cross-checking of conflicting claims on the strongest tier.
The `researcher` agent of G1 would own it; a separate verifier would only be
needed if independence from the original researcher is required.

## G5. Self-approval under CODEOWNERS

`dev` requires one approving review from a code owner, and
`.github/CODEOWNERS` names only `@Handsomeboy990`, the account the agents push
as. GitHub does not let an author approve their own pull request. With
`enforce_admins` off, a merge is possible only with `gh pr merge --admin`,
which skips the review requirement. Not reached in this run.
