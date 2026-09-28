# Project decisions (validated by the owner on 2026-09-28)

This file records the decisions the owner validated before any work started.
Agents treat it as binding. Anything not listed here is an open question and
must be asked, never assumed.

## Purpose

The real objective is to prove that craft-suite
(`Handsomeboy990/craft-suite`) can deliver a large project autonomously, with
agents that switch models per task. Reproducing the Gozem super-app (Benin) as
faithfully as possible is the test case.

Only craft-suite agents and skills may be used. When craft-suite lacks an
agent, a skill or a protocol, it is added to craft-suite itself (branch, PR,
tests, reinstall). Each gap is logged in `docs/CRAFT_SUITE_GAPS.md`.

## Scope

| Topic | Decision |
|---|---|
| Services | All Gozem services: ride hailing (moto, car, tricycle and every other ride class Gozem offers), food delivery, shop / groceries, parcel delivery, Gozem Money wallet (transfers, bill payment, top-up), vehicle financing, and any other service found during research |
| Applications | All: customer app, driver / courier app, merchant app, admin back office, public website |
| Platform | Web only, delivered as a clean, installable, offline-capable PWA (no native app) |
| Market | Benin only (XOF currency, Benin phone format +229, Benin mobile money operators) |
| Languages | French and English, if and only if Gozem offers both; research must confirm |
| Identity | Exact Gozem identity (name, logo, colours, wording, screen structure) |
| Disclaimer | A permanent, visible banner on every surface: "Reproduction for testing purposes, not affiliated with Gozem" (FR/EN) |
| Stack | Chosen by the software architect, each choice justified in a decision record |
| SMS / OTP | Simulated (no real SMS provider). OTP codes readable in a dev inbox or log |
| Payments | FedaPay sandbox |
| Hosting | Local only, fully dockerized (`docker compose up`). Never deployed publicly |
| Repository | `Handsomeboy990/gozem-copy`, **private** |
| Keys | Every key the owner must provide is listed in `KEYS_TO_PROVIDE.md` |

## Research boundaries

- Allowed: public sources only. Gozem public website, public App Store and
  Play Store listings and screenshots, press, public videos and demos, public
  help / FAQ pages, public social media. Respect robots.txt and rate-limit
  every fetch.
- Not allowed: creating accounts on Gozem, automated sign-up, scraping the
  authenticated app, decompiling or reverse engineering the APK/IPA, bypassing
  any protection.
- Test accounts on OUR platform: `[address removed]` and
  `[address removed]`, seeded for each role (customer, driver, courier,
  merchant, admin).
- Where public sources do not show a screen or rule, the specification marks
  it as an inferred requirement with its source of inference, so the owner can
  review it at the specification gate.

## Delegation

The owner grants full rights to the delivery orchestrator for this project:
commits, branches, push, pull requests, merging its own validated pull
requests into `main`, dependency changes (justified), local database
operations. Two rules are never delegated: a destructive operation is counted
and confirmed with the owner first, and a leaked secret is reported for
rotation, never silently removed.

## Gates requiring the owner

1. Specification (cahier des charges) approval.
2. Architecture proposal approval.

After those two approvals, agents work end to end without the owner, except
to request missing keys.

## Machine constraints

4 CPU cores, 16 GB RAM (about 8 GB free), 47 GB free disk. At most two
implementation agents run in parallel. Docker services are sized for this
machine (memory limits on every container). Heavy steps (full builds, full
browser test suites) run one at a time.
