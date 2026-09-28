# Research on Gozem (public sources only)

Evidence base for the specification in `docs/specification/`.

## Boundaries

Public sources only, as set in `docs/PROJECT_DECISIONS.md`: the Gozem public
website, App Store and Play Store listings, press, public videos, public help
pages and public social media. No account creation on Gozem, no authenticated
scraping, no APK or IPA decompiling, no bypass of any protection.

`https://gozem.co/robots.txt` returned HTTP 404 on 2026-09-28, so no path is
disallowed. Every fetch is still rate limited (at least 2 seconds between
requests to the same host).

## Layout

| Path | Content | Versioned |
|---|---|---|
| `research/*.md` | Findings, one file per domain | yes |
| `research/brand/` | Brand assets needed for the local reproduction, with `SOURCES.md` | yes |
| `research/raw/` | Bulky downloads (HTML snapshots, full screenshots) | no (gitignored) |

## Claim format

Every claim carries its source URL and access date, and a status:

- `OBSERVED`: read directly in a cited public source.
- `INFERRED`: deduced, with the reasoning stated.
- `UNKNOWN`: searched for and not found; listed as an open question.

Example:

```
- OBSERVED: Gozem offers moto rides in Cotonou.
  Source: https://gozem.co/fr/ (accessed 2026-09-28)
```
