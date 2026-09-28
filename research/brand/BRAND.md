# Gozem brand notes (Benin reproduction)

Access date for every item below: 2026-09-28, unless stated otherwise.
Scoped-exception reproduction (see top of agent output / handoff): items below
that are OBSERVED are candidates for faithful reproduction under the
authorized-exception gate in `docs/PROJECT_DECISIONS.md`; INFERRED items are
visual estimates only and need a second, direct-CSS pass before being taken
as exact values (see "Not obtained" at the end).

## Colours

Theme CSS was fetched this session (`custom.css`, `component.css` under
`gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/`); the four hex
values below are sampled directly from that CSS, not a visual estimate.

- OBSERVED, primary brand green, `#179138`, CSS custom property
  `--Colors-Green-Gozem-100`. 17 occurrences in `custom.css`, 12 in
  `component.css`; used as text/border/background colour on active
  pagination controls, slider nav buttons and active dots.
  Source: https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/custom.css?ver=1790603290
  and .../component.css, fetched 2026-09-28, saved to
  research/raw/brand/custom.css and research/raw/brand/component.css.
- OBSERVED, light green tint, `#E8F4EB` (3 occurrences, `custom.css`) and
  `#C5EBCF` (1 occurrence, `component.css`), CSS custom property
  `--Colors-Green-Gozem-20`. Used as the background of the active/current
  pagination pill.
  Source: same two CSS files as above, fetched 2026-09-28.
- OBSERVED, dark neutral grey, `#6C6C6C`, CSS custom property
  `--Colors-Grey-Grey-70`. 9 occurrences in `custom.css`, 2 in
  `component.css`; used as secondary body/label text colour.
  Source: same two CSS files, fetched 2026-09-28.
- OBSERVED, near-black neutral, `#1A1A1A`, CSS custom property
  `--Colors-Grey-Grey-100`. 2 occurrences in `custom.css`; used as primary
  text colour.
  Source: research/raw/brand/custom.css, fetched 2026-09-28.
- INFERRED (unchanged, not covered by this session's CSS pass), deep blue,
  used for wallet/credit-top-up screens specifically (distinct from the
  primary green, appears to be a secondary/service colour for the
  "Portefeuille"/"Achat de crédit" flows). Estimated #1A5FAE to #1D6BC4.
  `custom.css`/`component.css` are the public marketing-site (WordPress)
  theme, not the in-app UI, so they do not carry this colour; still needs a
  direct read of the app's own styling to confirm.
  Source: research/raw/commerce/consumer_ss3.png, consumer_ss6.png, viewed
  2026-09-28.
- INFERRED (unchanged, same scope caveat as above), deep red/maroon, used for
  the food/shopping and billetterie (ticketing) marketing slides, and for a
  "Recommandé pour vous" merchant banner on the home screen. Estimated
  #A5273A to #B5303F.
  Source: research/raw/commerce/consumer_ss4.png, consumer_ss5.png,
  consumer_ss1.png (bottom banner), viewed 2026-09-28.
- INFERRED (unchanged, same scope caveat as above), near-black used as a
  full-slide background on several merchant-app marketing slides
  (distinct from the `#1A1A1A` text-grey confirmed above; this is a
  photographic/design background, not necessarily the same token). Estimated
  #0A0A0A to #121212.
  Source: research/raw/commerce/consumer_ss7.png, merchant_ss1.png,
  merchant_ss2.png, merchant_ss4.png, viewed 2026-09-28.
- OBSERVED: white and green are used as the two colours of a recurring
  horizontal double-stripe graphic motif in the lower third of nearly every
  marketing slide (both consumer and merchant screenshots), independent of
  the slide's own background colour.
  Source: all consumer_ss*.png and merchant_ss*.png, viewed 2026-09-28.

## Fonts

- OBSERVED: `font-family: Inter;` is the declared typeface for body/UI text
  across both theme CSS files (12 declarations in `custom.css`, general use
  in `component.css`).
  Source: research/raw/brand/custom.css, research/raw/brand/component.css,
  fetched 2026-09-28.
- OBSERVED: `font-family: 'Font Awesome 5 Free';` is used for icon glyphs;
  loaded separately via
  `https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/plugins/css/font-awesome.css?ver=6.7.2`
  (linked in the homepage `<head>`, not itself fetched this session).
  Source: research/raw/commerce/homepage_bj.html, line 88, read 2026-09-28;
  research/raw/brand/custom.css and component.css, fetched 2026-09-28.
- Not obtained: no `@font-face` rule or Google Fonts / webfont `<link>` for
  "Inter" was found in either fetched CSS file or in
  `research/raw/commerce/homepage_bj.html` within this session's time box, so
  the actual font-file source (self-hosted path, CDN, or system-font
  fallback) is not established. Treat "Inter" as the confirmed name only, not
  yet as a confirmed file source.

## Logo variants

- OBSERVED, file saved this session: wordmark "GOZEM", all caps, bold
  geometric sans, with the letter "O" (second character) replaced by a
  circular/spiral swirl mark in green, on a white background.
  Source: https://gozem.co/bj/wp-content/uploads/sites/6/2020/03/gozem-logo-hq-150x150.png
  (150x150 PNG) and
  https://gozem.co/bj/wp-content/uploads/sites/6/2020/03/gozem-logo-hq.png
  (650x160 PNG, larger variant found linked from the same JSON-LD block as
  the 150x150 one), both fetched 2026-09-28, saved to
  research/brand/gozem-logo-hq-150x150.png and
  research/brand/gozem-logo-hq.png. No SVG logo was found linked from
  `homepage_bj.html`; the only `.svg` reference on the page is the WordPress
  emoji sprite path, unrelated to the Gozem brand.
- OBSERVED (description only, file not downloaded this session): a second
  wordmark spelling "GOZEM" appears inside the partner/merchant in-app header
  itself (merchant_ss2.png) as "G[swirl]ZEM" in a bold sans, black on white
  app-bar; and a white wordmark with a standalone green swirl icon appears on
  black marketing slides (merchant_ss1.png).
  Source: research/raw/commerce/consumer_ss7.png, merchant_ss1.png,
  merchant_ss2.png, viewed 2026-09-28.
- OBSERVED, files saved this session: favicon set,
  `https://gozem.co/bj/wp-content/uploads/sites/6/2019/10/favicon-1-150x150.png`
  (150x150 PNG) and
  `https://gozem.co/bj/wp-content/uploads/sites/6/2019/10/favicon-1.png`
  (250x250 PNG, also used as apple-touch-icon), fetched 2026-09-28, saved to
  research/brand/favicon-1-150x150.png and research/brand/favicon-1.png.
  Source: research/raw/commerce/homepage_bj.html, line 148-150, read
  2026-09-28.

## Icon style

- OBSERVED: service icons on the consumer home screen (consumer_ss1.png) are
  flat, filled, rounded-corner-square or circular badges, one colour per
  service category (green moto for Zem, green/teal tricycle, green car,
  green courier figure, blue wallet/credit icon, red/orange food icon, pink
  shopping bag, red ticket icon), each sitting on a light grey circular
  background.
- OBSERVED: marketing-slide "feature" icons (top-right corner of every
  consumer_ss*/merchant_ss* slide) are a small circular colour badge
  containing a simple line-art pictogram (car, wallet, ticket roll, phone
  with arrow, moto, store, scan-corners, document/ledger), matching the
  slide's own theme colour.
  Source: all consumer_ss*.png and merchant_ss*.png, viewed 2026-09-28.

## Tone and key wording (FR / EN)

- OBSERVED (FR, meta description, English text but served on the FR page):
  "Gozem is Africa's #1 Super App — providing various on-demand
  transportation, shopping, delivery, and financial services in one app for
  users in West and Central Africa."
  Source: research/raw/commerce/homepage_bj.html, line 8, read 2026-09-28.
- OBSERVED (EN, marketing slide): "AFRICA'S SUPER APP".
  Source: research/raw/commerce/consumer_ss7.png, viewed 2026-09-28.
- OBSERVED (FR, marketing slide headline): "Vos besoins quotidiens en une
  seule appli."
  Source: research/raw/commerce/consumer_ss1.png, viewed 2026-09-28.
- OBSERVED (FR, mission statement, already logged in research/mobility.md
  section 8): "Notre mission est de faire sourire l'Afrique."
  Source: https://website.gozem.co/corporate-bj/, per research/mobility.md.
- OBSERVED, tone pattern across marketing slides: short imperative or
  benefit-led headline in bold ("Gérez", "Prenez en main", "Ne manquez
  jamais une commande", "Découvrez l'application partenaire Gozem",
  "Effectuez les collectes de paiements"), followed by one plain-sentence
  subhead. Consistently energetic/direct, second person informal ("vos",
  "vous"), no exclamation overuse except promo callouts.
  Source: all consumer_ss*.png and merchant_ss*.png, viewed 2026-09-28.
- OBSERVED, button/label wording seen in-product screenshots: "Recharger",
  "Commander - Zem", "Accepter", "Annuler la commande", "Fermer", "Tout
  afficher", "Afficher les 1095 avis", "Scan to pay" (kept in English inside
  an otherwise French merchant UI).
  Source: consumer_ss1.png, consumer_ss8.png, merchant_ss1.png,
  merchant_ss3.png, merchant_ss5.png, viewed 2026-09-28.
- OBSERVED, service/screen names as shown in-product: "Portefeuille", "Achat
  de crédit", "Billetterie", "Commandes", "My store", "Dispatcher",
  "Publicité", "Redeem", "Coursier", "Profil" (last six from the merchant
  app home grid, mixed FR/EN in the same screen).
  Source: consumer_ss3.png, consumer_ss5.png, consumer_ss6.png,
  merchant_ss2.png, merchant_ss6.png, viewed 2026-09-28.

## Not obtained this session

- `https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/style.css`
  returned HTTP 404 (nginx default page, 146 bytes) when fetched 2026-09-28;
  the empty/error response was discarded, not saved. `custom.css` and
  `component.css` (the two files that did resolve) already carried the hex
  colours and `font-family` declarations needed for this pass.
- The blue, red/maroon and full-slide near-black colours (see "Colours"
  above) remain INFERRED: they are visible in app marketing screenshots but
  are not present in the two public marketing-site theme CSS files fetched
  this session, which is the WordPress site, not the mobile app's own
  styling. Confirming those would need a source for the app's own UI (out of
  scope for a curl-based public-page fetch).
- The concrete font-file source for "Inter" (self-hosted path, CDN, or
  system-font stack) was not found within this session's fetches; only the
  `font-family` name is confirmed.
