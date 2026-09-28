# Gozem Mobility Research (Benin)

> Status: produced by non-craft agents in session 1 and not yet re-verified by a
> craft `researcher` (deferred by the owner). Any claim sourced through the
> `r.jina.ai` proxy is discarded and must not be used.

Scope: ride-hailing / mobility vertical of Gozem in Benin (Cotonou and other
cities where evidence exists). Public sources only. Access date for every
claim below is 2026-09-28 unless a different access date is stated. Publication
dates are noted where the source shows one; anything published before
2024-09-28 (more than two years before the access date) is flagged as
POSSIBLY OUTDATED.

Claim format follows `research/README.md`: OBSERVED (read directly in a cited
source), INFERRED (deduced, reasoning stated), UNKNOWN (searched for, not
found).

---

## 1. Ride classes

Two site structures were found for Gozem's own domains and both were checked:
`gozem.co` / `gozem.co/bj/` (main consumer site) and `website.gozem.co`
(a separate "corporate" WordPress site with per-country paths such as
`/corporate-bj/`, `/corporate-tg/`, `/corporate/` for the global/default
version). The two sites do not list identical service catalogues (see
Contradictions, section 9).

### 1.1 Top-level classes advertised on the main site and in the app

- OBSERVED: The Gozem Benin corporate homepage lists three "Mobilité" classes:
  **Zem**, **Tricycle**, **Taxi**.
  - Zem: "Une solution rapide et économique pour se déplacer partout, même
    aux heures de pointe." (a fast, economical solution to get around
    everywhere, even during rush hour)
  - Tricycle: "Un transport couvert, abordable et pratique pour rester à
    l'abri du soleil tout en respectant votre budget." (covered, affordable,
    practical transport to stay out of the sun and within budget)
  - Taxi: "Le confort et la tranquillité d'un voyage en voiture avec
    chauffeur, qui vous permet de parcourir de longues distances en toute
    sécurité." (comfort and peace of mind of a car ride with a driver, for
    long distances in complete safety)
  Source: https://website.gozem.co/corporate-bj/ (accessed 2026-09-28)

- OBSERVED: The live Google Play Store listing description (French locale)
  for the main Gozem app lists four transport options under "TRANSPORT POUR
  TOUTE OCCASION":
  - "Zem – Transport à deux roues rapide et économique"
  - "Tricycle – Roule avec tes amis à prix avantageux"
  - "Taxi – Un taxi économique rien que pour toi"
  - "Clim+ – Confort maximal en véhicule climatisé"
  The listing adds: "Prix fixés à l'avance. Pas de mauvaises surprises. Temps
  d'attente moyen : 5 minutes." (fixed prices in advance, no bad surprises;
  average wait time 5 minutes.) Cities named in the listing: "Lomé • Cotonou
  • Douala • Yaoundé • Libreville • Brazzaville" (Cotonou is the only Benin
  city named).
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (accessed 2026-09-28, live HTML fetched and parsed)

- OBSERVED: The App Store (Apple, US storefront) summary describes the app
  primarily around moto-taxis ("zemidjans"), with fixed pricing, multiple
  payment options, 24/7 availability, trained/insured drivers, and an
  average wait time "around 5 minutes." This text reads as older/generic
  copy focused on Togo/Lomé and does not name Benin explicitly (see
  Contradictions, section 9).
  Source: https://apps.apple.com/us/app/gozem/id1441247963 (accessed
  2026-09-28)

### 1.2 Extended car sub-tiers ("Voiture" service page)

- OBSERVED: The Gozem Benin corporate site's car service page
  (`/corporate-bj/voiture/`) lists five car sub-services under "Nos services
  voiture," each with a short description:
  - **Taxi**: "Le service standard pour vos déplacements quotidiens à petit
    prix. Une voiture, un chauffeur, et la simplicité Gozem."
  - **Clim+**: "Un trajet au frais, même sous la chaleur. Choisissez une
    voiture équipée de climatisation pour plus de confort."
  - **Eco+**: "L'option la plus économique. Pour se déplacer à moindre coût,
    sans compromis sur la sécurité."
  - **Prestige**: "Un service haut de gamme avec des véhicules soignés et des
    chauffeurs sélectionnés pour une expérience premium."
  - **À l'heure** (hourly rental with driver): "Louez une voiture avec
    chauffeur pour une durée définie, pratique pour vos courses,
    rendez-vous ou visites multiples."
  Source: https://website.gozem.co/corporate-bj/voiture/ (raw HTML fetched
  and parsed; accessed 2026-09-28)

- OBSERVED: A section of that same page, titled "Confort," under the
  Prestige tier, contains placeholder text: "Lorem ipsum dolor sit amet
  consectetur. Enim sapien morbi pulvinar ut purus non augue." This is
  visible on both the Benin-specific page and the global/default
  `website.gozem.co/corporate/fr/voiture/` page, indicating unfinished
  content in production. Flagged for the reproduction: do not treat this
  filler text as real product copy.
  Source: https://website.gozem.co/corporate-bj/voiture/ and
  https://website.gozem.co/corporate/fr/voiture/ (accessed 2026-09-28)

- OBSERVED: Gozem Benin's own Facebook page announced the ECO+ service
  ("Découvrez le tout nouveau service : ECO+ ... Faites désormais des
  courses à petits prix") confirming ECO+ was actively marketed to Benin
  customers, not only a template entry on the corporate site. Exact
  publication date of the post was not retrieved (social post, no visible
  date in the search snippet).
  Source: https://www.facebook.com/GozemBenin/posts/... (title only,
  accessed via search 2026-09-28); INFERRED that ECO+ is live in Benin,
  not just listed generically.

- OBSERVED: Gozem Togo's corporate car page exists at the equivalent path
  (`website.gozem.co/corporate-tg/voiture/`), confirming the same five-tier
  structure is templated per country rather than being Benin-unique.
  Source: search result title "TAXI · VOITURE AVEC CHAUFFEUR – Togo
  Corporate ..." at https://website.gozem.co/corporate-tg/voiture/
  (accessed 2026-09-28 via search; page itself not separately fetched)

### 1.3 Tricycle / Kéké terminology

- OBSERVED: Gozem's own site copy and navigation label the three-wheeler
  service "TRICYCLE · BAJAJ TAXI" in the global site footer navigation.
  Source: https://website.gozem.co/corporate/fr/voiture/ raw HTML (accessed
  2026-09-28)
- INFERRED: "Kéké" is a widely used local/colloquial name (of Yoruba origin)
  for motorcycle/tricycle taxis in Benin and neighbouring Nigeria, but
  Gozem's own branding consistently uses "Tricycle," not "Kéké." No
  Gozem-published page was found using the word "Kéké" for its own product.
  Source (general term background, not Gozem-specific):
  https://en.wikipedia.org/wiki/Z%C3%A9midjan and general search results
  (accessed 2026-09-28)

### 1.4 Capacity per class

- OBSERVED (third-party, not Gozem-published): A driver-recruitment guide
  lists indicative vehicle/capacity mapping for Gozem Cotonou: Zem
  (motorcycle) = 1 passenger, Tricycle = 3 passengers, Taxi (car) = 4
  passengers, Clim+ (air-conditioned car) = 4 passengers. This is a
  third-party (automag.bj) article, not an official Gozem capacity chart,
  so treat the exact numbers as INFERRED/indicative rather than a confirmed
  official spec.
  Source: https://automag.bj/2025/08/29/devenir-chauffeur-gozem-a-cotonou-trucs-et-astuces/
  (published 2025-08-29, accessed 2026-09-28)
- UNKNOWN: No official Gozem page states passenger capacity per class in
  Benin explicitly.

### 1.5 Women-only rides

- UNKNOWN: No evidence was found of a Gozem women-only ride class, women
  driver program, or "ladies" mode in Benin or elsewhere in Gozem's markets.
  Multiple targeted searches (French and English) returned only unrelated
  results (general ride-hailing safety articles, Uber/other competitors'
  women-only features). This appears to be a real absence, not a search
  failure, but is listed as an open question below.

### 1.6 Intercity rides

- UNKNOWN: No Gozem product page, app-store description, or press article
  was found describing a formal "intercity" ride-hailing product (i.e., a
  booked, price-fixed ride between cities such as Cotonou-Porto-Novo or
  Cotonou-Parakou). Gozem has physical office presence in several Beninese
  cities beyond Cotonou (see 1.7), which suggests city-level (not
  necessarily intercity) service in each, but no evidence of a distinct
  "intercity" ride product or fare structure was found.
- OBSERVED (for context, not a Gozem service): Long-distance travel between
  Beninese cities is otherwise served by shared bush taxis from stations
  such as Gare de Jonquet and Gare de Gbégamey, per general travel-guide
  sources, not by Gozem.
  Source: search results summarizing https://thingstodoinbenin.com/transportation/
  and related pages (accessed 2026-09-28)

### 1.7 Cities in Benin

- OBSERVED: Gozem launched operations in Cotonou, Benin on 1 July 2019.
  Source: https://mandelbrot.substack.com/p/dans-la-tete-de-gozem-la-super-app-africaine-mon-bilan-apres-3-ans-962735
  (published 2022-01-20; POSSIBLY OUTDATED, over 2 years old; accessed
  2026-09-28)
- OBSERVED: A Gozem help-center article titled "Adresses des bureaux Gozem
  par pays" (office addresses by country) was found via search, with a
  snippet indicating Gozem has office locations in Calavi (Abomey-Calavi,
  near Kpota/Bidossessi), Porto-Novo (near the Danto traffic light),
  Parakou (Aérodrome roundabout), and Bohicon, in addition to Cotonou. The
  article itself could not be opened directly (see section 8, Zendesk
  access note), so this is based on the search-result snippet only, not a
  full read of the article.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/26142823237906--Adresses-des-bureaux-Gozem-par-pays
  (title and snippet found via search, accessed 2026-09-28; full article
  content not retrievable; see section 8)
- OBSERVED: The Play Store app description names only "Cotonou" for Benin
  among the cities it lists, while not mentioning Porto-Novo,
  Abomey-Calavi, Parakou, or Bohicon. See Contradictions (section 9) for
  the tension between this and the office-locations snippet above.

---

## 2. Customer booking journey

Evidence for the booking journey is drawn from Gozem's own marketing copy
(app description, corporate site) and from third-party descriptions; the
Gozem Help Center (Zendesk), which would normally document each step in
detail, could not be crawled directly (see section 8).

- OBSERVED: Pickup and destination are entered/located via GPS in the app,
  and the estimated route/price is shown before the ride is confirmed, with
  no negotiation.
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (app description, accessed 2026-09-28); corroborated by
  https://benin360.com/transport-cotonou-benin/ ("observations terrain,
  Mai 2026," accessed 2026-09-28)

- OBSERVED: Billing differs by class: Zem (motorcycle) is billed by distance
  only; Tricycle and Taxi/car are billed by distance plus estimated time to
  destination. This matches the title and search-snippet content of a
  Gozem Help Center article, "Comment suis-je facturé une fois ma course
  commandée?", though the article's full body text could not be opened
  directly (Cloudflare-protected; see section 8); the claim below is based
  on the search-engine snippet of that article, corroborated independently
  by the benin360.com article.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360032280491-Comment-suis-je-factur%C3%A9-une-fois-ma-course-command%C3%A9e
  (snippet only, accessed 2026-09-28) and
  https://benin360.com/transport-cotonou-benin/ (accessed 2026-09-28)

- OBSERVED: A fare estimate can be seen before ordering a driver ("Champion"
  in Gozem's terminology). This matches the title of a Help Center article,
  "Est-ce que je peux voir le prix de la course sans commander un
  champion ?", full body not retrievable (see section 8).
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360015760032-Est-ce-que-je-peux-voir-le-prix-de-la-course-sans-commander-un-champion
  (title/snippet only, accessed 2026-09-28)

- OBSERVED: Multiple simultaneous ride bookings are possible ("J'aimerais
  commander plusieurs champions Gozem, je fais comment ?"; Help Center
  article title), e.g. booking a ride for someone else while booking one's
  own.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360015969811-J-aimerais-commander-plusieurs-champions-Gozem-je-fais-comment
  (title/snippet only, accessed 2026-09-28)

- OBSERVED: Drivers ("Champions") are described by Gozem as trained,
  verified, and insured ("Chauffeurs formés, vérifiés et assurés"); GPS
  tracking of the trip is advertised ("Suivi GPS en temps réel").
  Source: Play Store description, https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (accessed 2026-09-28)

- OBSERVED: After the trip, the passenger can rate the driver on a 1-5 star
  scale (1 = bad experience, 5 = excellent), per the title/snippet of the
  Help Center article "J'aimerais donner mon avis sur un champion, je fais
  comment ?"
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360015758552-J-aimerais-donner-mon-avis-sur-un-champion-je-fais-comment
  (snippet only, accessed 2026-09-28)

- OBSERVED: Trip history and past-ride details are available under a
  "Historique" (History) tab in the app profile menu, per the title/snippet
  of "Comment vérifier l'historique de ses courses."
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/11132307370514-Comment-v%C3%A9rifier-l-historique-de-ses-courses
  (snippet only, accessed 2026-09-28)

- OBSERVED: An invoice/receipt can be obtained for an order, per the title
  of Help Center article "Comment obtenir une facture pour ma commande ?"
  (full body not retrieved).
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360021500399-Comment-obtenir-une-facture-pour-ma-commande
  (title only, accessed 2026-09-28)

- UNKNOWN: Whether cancellation can be done in-app unilaterally by the rider
  at any time, the exact cancellation window, and any cancellation fee
  amount in XOF. Help Center article titles exist ("Dans quel cas puis-je
  annuler une course ?", "Puis-je annuler ma commande une fois qu'elle est
  passée ?") but their bodies could not be read (see section 8). No
  cancellation fee figure was found in any accessible source.

- UNKNOWN: Waiting-fee policy and amount (e.g., a fee charged if the driver
  waits beyond a grace period at pickup). Not found in any accessible
  source.

- UNKNOWN: Scheduled/advance-booking rides ("réserver une course à
  l'avance"). No Gozem-specific evidence was found confirming this feature
  exists for Benin or any other Gozem market. (A similar feature exists at
  a different, unrelated company, Eurecab, which appeared in a search
  result for a related query; that result is about Eurecab, not Gozem, and
  must not be read as describing Gozem's policy.)

- UNKNOWN: A live/real-time "share my trip" feature with a named contact
  (of the kind common on Uber/Bolt) was not confirmed for Gozem. The only
  passenger-facing tracking claim found is generic "Suivi GPS en temps
  réel" in the app description; whether the passenger can share a live link
  with a third party is not documented in any accessible source.

- UNKNOWN: A dedicated in-app SOS/emergency button for passengers was not
  confirmed. The only safety-adjacent, driver-facing feature confirmed is
  vehicle anti-theft tracking for drivers ("Protège ta voiture grâce au
  tracking intégré contre le vol") and driver accident coverage, both
  aimed at Champions (drivers), not riders.
  Source: https://website.gozem.co/corporate-bj/ (accessed 2026-09-28)

- OBSERVED: Promo codes exist and are entered in-app. Help Center article
  titles found: "Comment avoir des codes promo," "Comment ajouter un code
  promo," "Où puis-je trouver un code promo et comment l'utiliser ?"
  (bodies not retrieved). Real, observed promo codes referenced in social
  posts/third-party pages include "CLIM800" (800 F off a Clim+ ride),
  "JUIN15," and "MONGOZEM" (reported 50% reduction); these are time-boxed
  marketing promotions, not standing discounts, and their exact terms were
  not independently verified beyond the search snippets citing them.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360012421940-Comment-avoir-des-codes-promo
  (title only), and search-result summaries (accessed 2026-09-28)

---

## 3. Pricing (XOF)

Gozem does not publish a formal public rate card (base fare / per-km /
per-minute / minimum fare / surge table) on its website or app-store
listings. The figures below come from third-party observation and one
dated press statement; treat all as approximate and time-bound, not an
official tariff sheet.

- OBSERVED: "GoZem charge 750 F de prise en charge [base fare] avec une
  commission de 20 %" ("GoZem charges 750 F base fare with a 20% commission")
 ; stated in the context of a government-convened meeting between the
  Minister of Transport (Jacques Ayadji), GoZem, Yango, and a drivers'
  union about falling fares and driver hardship in Benin.
  Source: https://lanouvelletribune.info/2025/07/gozem-et-yango-au-benin-une-regulation-du-secteur-en-vue/
  (published 2025-07-11, accessed 2026-09-28)

- OBSERVED (third-party field observation, not an official rate card):
  - Zem (moto): roughly 300-800 FCFA for typical urban trips in Cotonou.
  - Car/Taxi: roughly 1,500-3,500 FCFA for typical trips; airport to
    Fidjrossè roughly 3,000-5,000 FCFA.
  - Zem billed by distance only; Tricycle and car billed by distance plus
    estimated time.
  Source: https://benin360.com/transport-cotonou-benin/ (the article
  self-describes its pricing section as "observations terrain; Mai 2026";
  accessed 2026-09-28)

- OBSERVED: Driver operating-cost context cited in the same regulation
  article: fuel at 690 F, insurance at 70,000 F, technical inspection at
  15,000 F (figures given as background for why drivers say the 750 F base
  fare / 20% commission structure is unsustainable, not a Gozem-published
  cost breakdown).
  Source: https://lanouvelletribune.info/2025/07/gozem-et-yango-au-benin-une-regulation-du-secteur-en-vue/
  (published 2025-07-11, accessed 2026-09-28)

- OBSERVED: A related article (undated exact publication date; page shows
  "1 year ago" relative to a 2026 access) covering the same driver-hardship
  story states competitor Yango pays as little as 300-400 FCFA per ride in
  some cases, and that "les plateformes continuent de prélever leurs
  commissions habituelles" (platforms continue collecting their usual
  commissions) despite falling fares; i.e., commissions were not reduced
  even as gross fares fell. This is presented as context on the competitive
  pricing environment Gozem operates in, not a Gozem-specific commission
  figure beyond the 20% cited above.
  Source: https://www.actusdubenin.com/politique-societe/vtc-au-benin-tarifs-en-baisse-reduction-des-commissions-les-chauffeurs-gozem-et-yango-crient-leur-detresse/
  (accessed 2026-09-28; exact publication date not confirmed, shown as
  roughly one year before access, i.e. circa 2025; flagged as uncertain
  dating)

- OBSERVED: Time-boxed promo/discount examples: "CLIM800" promo code cited
  as giving 800 F off a Clim+ ride (one user reported paying 500 F for a
  ride originally quoted at 1,300 F).
  Source: search-result summaries citing TikTok/Facebook Gozem posts
  (accessed 2026-09-28); treat as anecdotal, not an official price list.

- UNKNOWN: Official minimum fare, per-km rate, per-minute rate, and surge
  pricing rules/multipliers. Not published anywhere found.
- UNKNOWN: Whether the 750 F base fare / 20% commission figures (July 2025)
  are still current at the access date (2026-09-28); no more recent, more
  specific figure was found. Given Gozem's dynamic, app-calculated pricing
  model, actual fares likely vary by route/time and may have changed since
  July 2025.

---

## 4. Payment methods

- OBSERVED: The Play Store app description states: "Paye comme tu veux :
  cash, carte bancaire ou mobile money. Ton portefeuille Gozem accepte MTN,
  Moov et plus encore." (Pay how you want: cash, bank card, or mobile
  money. Your Gozem wallet accepts MTN, Moov, and more.)
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (accessed 2026-09-28)

- OBSERVED: MTN Mobile Money (MoMo) is described as the dominant mobile
  money option in Benin generally (around 70% market share cited), with
  Moov also present; this is general market context, not a Gozem-specific
  claim, but supports why Gozem names MTN and Moov specifically.
  Source: https://techcabal.com/2025/10/14/togos-gozem-expands-into-mobile-money-with-new-fintech-platform/
  (accessed 2026-09-28)

- OBSERVED: A historical partnership between Gozem and Moov (via Etisalat
  Benin, Moov's former brand) allowed Gozem bike riders/drivers in Benin to
  pay/top up using Moov Money.
  Source: https://www.techinafrica.com/benin-based-gozem-team-etisalat-integrate-moov-money/
  (accessed 2026-09-28; original article date not confirmed; likely
  several years old given the Etisalat branding, which predates the Moov
  rebrand; flagged POSSIBLY OUTDATED / superseded by direct Moov branding)

- OBSERVED: Gozem acquired Moneex, a Beninese electronic-payments startup,
  in November 2023, as a step toward launching its own "Gozem Money"
  wallet.
  Source: search-result summary citing Gozem/Moneex coverage (accessed
  2026-09-28)

- OBSERVED: "Gozem Money," an in-app mobile-money wallet developed with
  NSIA Bank, was announced for a Q4 2024 launch, starting in Togo, with
  stated plans to expand to Benin, Gabon, and Cameroon.
  Source: https://gozem.co/en/gozem-the-african-super-app-expands-its-ecosystem-with-an-innovative-mobile-money-solution-available-from-the-fourth-quarter-of-2024/
  (accessed 2026-09-28); corroborated by
  https://techcabal.com/2025/10/14/togos-gozem-expands-into-mobile-money-with-new-fintech-platform/
  (accessed 2026-09-28)
- UNKNOWN: Whether Gozem Money had actually launched in Benin specifically
  by the access date (2026-09-28), as opposed to remaining Togo-only or
  being in a rollout phase. No source confirms a completed Benin launch
  date for the wallet.

- UNKNOWN: Celtiis (the Benin state-linked telecom operator's own "Celtiis
  Cash" mobile-money product) as a Gozem payment method. No evidence was
  found that Gozem integrates Celtiis Cash; only MTN and Moov are named in
  Gozem's own app description. This should be treated as "not confirmed,"
  not as a confirmed absence, since Gozem's wallet copy says "et plus
  encore" (and more) without listing every operator.

- OBSERVED: Cash payment at trip end is confirmed as an option ("cash à
  destination") alongside mobile money, depending on the driver's settings,
  per benin360.com.
  Source: https://benin360.com/transport-cotonou-benin/ (accessed
  2026-09-28)

---

## 5. Ratings, support/help center, notifications

### 5.1 App ratings

- OBSERVED: Google Play Store (French locale, `com.gozem`): rating value
  4.63 (out of 5), 64,967 ratings, category "MAPS_AND_NAVIGATION," content
  rating "3 ans et plus" (3+), first release date shown in page data as
  5 November 2018, install count band "1 000 000+" ("1 M+").
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (raw HTML fetched and parsed directly; accessed 2026-09-28)

- OBSERVED: Apple App Store (US storefront, app ID 1441247963): rating 4.6
  out of 5 stars from 4,800 ratings; category "Travel"; age rating 4+; size
  211.5 MB; supported languages "English and French"; shown as last updated
  15 September 2024, version 4.6.4.
  Source: https://apps.apple.com/us/app/gozem/id1441247963 (accessed
  2026-09-28). The "last updated" date is over two years before the access
  date and is FLAGGED AS POSSIBLY OUTDATED; the app has very likely
  received updates since; direct re-verification via `curl` was blocked by
  Apple's server returning HTTP 429 (rate limited) on repeated attempts, so
  a fresher read could not be obtained within this research session.

- Note: The two stores' rating counts (64,967 on Play vs 4,800 on Apple) are
  not contradictory; they reflect different, independently-collected
  review pools on two different platforms with likely very different
  Android/iOS install bases in Gozem's markets, not a data error.

### 5.2 Help Center / support

- OBSERVED: Gozem operates a Zendesk-hosted Help Center at
  `gozem.zendesk.com/hc/fr-fr`, linked from the main site and the corporate
  site footer under "Centre d'aide."
  Source: https://website.gozem.co/corporate-bj/ (link observed in page
  HTML; accessed 2026-09-28)

- IMPORTANT ACCESS NOTE: The Zendesk help center is protected by a
  Cloudflare bot-challenge ("Just a moment...", JS challenge page) on both
  a browser-header `curl` request and the WebFetch tool, returning HTTP 403
  before the challenge and serving the challenge page itself on direct
  fetch. Per the research boundaries (no bypass of any protection), no
  attempt was made to solve or circumvent this challenge. As a result, all
  Help Center claims in this file are based on article TITLES and short
  snippets surfaced by web search, not on the full article text, and are
  marked accordingly above. A category was identified: "Clients"
  (category ID 360000954032).
  Source: https://gozem.zendesk.com/hc/fr-fr (attempted access blocked;
  category id/name from search snippet; accessed 2026-09-28)

- OBSERVED: A support email is published: support@gozem.co (customer
  support) and group@gozem.co (general/complaints).
  Source: https://website.gozem.co/corporate-bj/ (accessed 2026-09-28)

- UNKNOWN: The full taxonomy of Help Center categories beyond "Clients"
  (e.g., whether there are separate top-level categories for "Champions"/
  drivers, "Marchands"/merchants, billing, safety) could not be enumerated
  due to the Cloudflare block described above.

### 5.3 Notifications

- UNKNOWN: No public source describes Gozem's push-notification content or
  triggers (e.g., driver arriving, trip started, promo alerts) in any
  detail beyond the generic "suis ta livraison en temps réel" (track your
  delivery in real time) copy used for the food-delivery vertical, and the
  general "Suivi GPS en temps réel" claim for rides.

---

## 6. App store listing facts

- OBSERVED: Main consumer app; Google Play package id `com.gozem`, listed
  title (French store) "Gozem - Taxi, food & livraison." Two companion apps
  from the same developer account were also found: `com.gozem.provider`
  ("Gozem Champion," for drivers) and `com.gozem.merchant` ("Gozem
  Marchand," for business/merchant partners).
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=en_US
  and https://play.google.com/store/apps/developer?id=Gozem&hl=en_US
  (accessed 2026-09-28)

- OBSERVED: Apple App Store; app id 1441247963, developer "GoZem Pte Ltd"
  (developer page id 1441247962). A separate "Gozem Marchand" app exists at
  id 1571944859.
  Source: https://apps.apple.com/us/app/gozem/id1441247963 and
  https://apps.apple.com/us/developer/gozem-pte-ltd/id1441247962 (accessed
  2026-09-28)

- OBSERVED: Full Google Play description text (French locale) was
  retrieved verbatim (excerpted through this file, e.g. sections 1.1, 4).
  It opens with "UNE SEULE APPLI POUR TOUT FAIRE" and states "Plus d'1
  million d'utilisateurs nous font confiance" (over 1 million users trust
  us). It lists transport, food delivery, grocery delivery, package
  delivery/logistics, and a digital wallet as the app's pillars, and
  closes by naming Lomé, Cotonou, Douala, Yaoundé, Libreville, Brazzaville
  as available cities, with "Et de nouvelles villes bientôt !" (and new
  cities soon).
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr
  (raw HTML fetched and parsed directly; accessed 2026-09-28)

- Screenshots: ATTEMPTED but not obtained. The Play Store listing's
  screenshot images could not be reliably distinguished from reviewer
  avatar/thumbnail images in the static (non-JavaScript-rendered) HTML;
  a small sample of candidate image URLs downloaded for inspection turned
  out to be blank/placeholder images, not real screenshots. The Apple App
  Store page could not be re-fetched via `curl` for image extraction
  because Apple's server returned HTTP 429 (rate limited) on repeated
  attempts within the 2-second-per-request rate limit used. No screenshot
  images were saved to `research/raw/mobility/` as a result. This is
  listed as an open question (section 11) rather than described from
  memory or inference.

- OBSERVED: "What's new" (Apple App Store, as read via the page's visible
  update notes at access time): recent entries were generic, e.g.
  "Corrections de bugs" (bug fixes), with no feature-specific changelog
  visible for the version shown (4.6.4, dated 15 September 2024 per the
  page). This is POSSIBLY OUTDATED given the two-year gap to the access
  date.
  Source: https://apps.apple.com/us/app/gozem/id1441247963 (accessed
  2026-09-28)

---

## 7. Languages

- OBSERVED: Both `gozem.co` and `website.gozem.co` (including the
  Benin-specific `/corporate-bj/` pages) offer a French/English language
  switcher in the header and footer ("Français Français English" /
  "English Français English" toggle patterns observed in raw HTML), and an
  English homepage exists at `/corporate-bj/en/homepage-en/`.
  Source: https://website.gozem.co/corporate-bj/ and
  https://website.gozem.co/corporate-bj/en/homepage-en/ (raw HTML fetched;
  accessed 2026-09-28)

- OBSERVED: The Apple App Store listing states supported languages
  "English and French."
  Source: https://apps.apple.com/us/app/gozem/id1441247963 (accessed
  2026-09-28)

- CONFIRMED: English exists for both the marketing site and the app store
  listing. This directly answers the "confirm whether English exists"
  requirement.

- UNKNOWN: Whether the Gozem mobile app's in-app interface (not just the
  app-store listing page or the marketing website) offers a full English
  UI inside Benin, or defaults to French for Benin users regardless of
  phone language. Not confirmed by any source read.
- UNKNOWN: Any local Beninese-language support (Fon, Yoruba, or others) in
  the app or on the website. No evidence found; likely absent, but not
  explicitly documented as absent anywhere either.

---

## 8. Company facts relevant to reproduction

- OBSERVED: Gozem was founded in 2018 in Lomé, Togo, by Gregory Costamagna,
  Raphael Dana, and Emeka Ajene, initially as a motorcycle-taxi
  ride-hailing service.
  Source: https://techcrunch.com/2021/12/01/francophone-african-super-app-gozem-grabs-5m-to-expand-and-offer-more-services/
  (published 2021-12-01; POSSIBLY OUTDATED, nearly 5 years old; accessed
  2026-09-28)

- OBSERVED: Gozem launched in Cotonou, Benin on 1 July 2019.
  Source: https://mandelbrot.substack.com/p/dans-la-tete-de-gozem-la-super-app-africaine-mon-bilan-apres-3-ans-962735
  (published 2022-01-20; POSSIBLY OUTDATED; accessed 2026-09-28)

- OBSERVED: As of the most recent evidence found, Gozem operates in five
  countries: Togo, Benin, Cameroon, Gabon, and Congo-Brazzaville (the
  Brazzaville/Congo launch reported November 2025).
  Source: https://techafricanews.com/2025/11/06/gozem-launches-in-brazzaville-expanding-its-super-app-footprint-across-central-africa/
  (published 2025-11-06, accessed 2026-09-28); corroborated by the country
  switcher on https://website.gozem.co/corporate-bj/ listing Bénin, Togo,
  Cameroon, Gabon, Congo-Brazzaville, Mondial (accessed 2026-09-28)

- OBSERVED: Gozem's Benin office/HQ address is published as "Gozem Bénin,
  Immeuble Blanc à 1Km après Fin Pavé, Route des pêches, Cotonou."
  Source: https://website.gozem.co/corporate-bj/ (accessed 2026-09-28)

- OBSERVED: A new Benin headquarters was inaugurated around September 2023.
  Source: https://affairesetentreprises.com/2023/09/08/benin-gozem-inaugure-son-nouveau-siege/
  (published 2023-09-08; POSSIBLY OUTDATED, 3 years old; accessed
  2026-09-28; article content summarized via search, not independently
  re-verified in full)

- OBSERVED: Gozem's stated company mission (French-language corporate
  site): "Notre mission est de faire sourire l'Afrique." (Our mission is to
  make Africa smile.)
  Source: https://website.gozem.co/corporate-bj/ (accessed 2026-09-28)

- OBSERVED: Funding history reported across multiple press sources:
  - Seed-stage funding totaling roughly $7M raised in tranches through
    2020-2021 (POSSIBLY OUTDATED figures, ~5 years old).
  - Series A: $5M, announced around December 2021.
    Source: https://techcrunch.com/2021/12/01/francophone-african-super-app-gozem-grabs-5m-to-expand-and-offer-more-services/
    (published 2021-12-01, POSSIBLY OUTDATED; accessed 2026-09-28)
  - Series B: $30M ($15M equity + $15M debt), led by SAS Shipping Agencies
    Services and Al Mada Ventures. Reported completion/finalization date
    of 25 February 2025 in one source and public announcement coverage
    dated around 30-31 July 2025 in others (see Contradictions, section 9,
    for this date discrepancy).
    Sources: https://website.gozem.co/corporate-bj/ (news list showing
    "Gozem réalise un Series B de 30 millions de dollars..." dated
    30/07/2025); search-result summary citing frenchweb.fr / techcabal
    coverage referencing a 25 February 2025 finalization (accessed
    2026-09-28)

- OBSERVED: IFC (International Finance Corporation) partnered with Gozem on
  a $10M vehicle-financing project aimed at 6,000 moto-taxi drivers in Togo
  and Benin, reported around June 2022, including a later electric-bike /
  battery-swap pilot component.
  Source: https://www.connectingafrica.com/investment/gozem-ifc-partner-on-10m-moto-taxi-financing-project
  and https://techcabal.com/2022/06/15/gozem-secures-10m-from-ifc/
  (both reporting June 2022; POSSIBLY OUTDATED, over 4 years old; accessed
  2026-09-28)

- OBSERVED: Gozem acquired Delivroum, a food-delivery service, around
  October 2020 (POSSIBLY OUTDATED, ~6 years old), and Moneex, a Beninese
  electronic-payments startup, around November 2023 (POSSIBLY OUTDATED, ~3
  years old).
  Source: search-result summaries (accessed 2026-09-28); original press
  releases not independently re-verified in full text.

- OBSERVED (recent, 2025): Gozem reports roughly 10,000 registered drivers
  and over 1 million users across its four-then-five-country footprint, and
  more than 30 million completed trips/orders since 2018.
  Source: search-result summary citing coverage of Gozem's 2025 growth
  (techcabal.com/frenchweb.fr-adjacent reporting), accessed 2026-09-28.
  These are more recent than, and should be preferred over, the
  "800,000+ users / 5M+ trips" figures reported in the 2021-2022 press
  (see Contradictions, section 9).

- OBSERVED: Benin's ride-hailing/VTC sector faced a government-convened
  regulatory discussion in July 2025 involving Gozem, competitor Yango, and
  a drivers' union, over falling fares and driver income; Gozem's Benin CEO
  named in that context is Didier Thèsè.
  Source: https://lanouvelletribune.info/2025/07/gozem-et-yango-au-benin-une-regulation-du-secteur-en-vue/
  (published 2025-07-11, accessed 2026-09-28)

- CONFIRMED: No Wikipedia article exists for Gozem at the time of this
  research (searched specifically for `en.wikipedia.org/wiki/Gozem` and
  variants; none found).
  Source: search results (accessed 2026-09-28)

---

## 9. Contradictions between sources

1. **Service catalogue: 3-4 classes (app/main site) vs. 5+ car sub-tiers
   (corporate site).** The Play Store app description and the main
   `gozem.co`/`corporate-bj` homepage advertise four rider-facing classes
   (Zem, Tricycle, Taxi, Clim+). The separate `website.gozem.co`
   "corporate" site's dedicated car page lists five car sub-tiers (Taxi,
   Clim+, Eco+, Prestige, À l'heure) not all of which appear in the app
   description. A Gozem Benin Facebook post specifically announcing ECO+
   suggests at least Eco+ is genuinely live in Benin, but Prestige and
   À l'heure are not confirmed as live/marketed to Benin riders beyond
   their presence in what looks like templated corporate-site copy
   (which also contains unremoved "Lorem ipsum" placeholder text; see
   section 1.2). Treat Eco+ as likely real; treat Prestige and À l'heure
   as unconfirmed for Benin specifically.

2. **Cities named for Benin: "Cotonou" only (app description) vs. five
   cities (office-locations Help Center article snippet).** The Play Store
   description names only Cotonou for Benin. A Help Center article title
   found via search ("Adresses des bureaux Gozem par pays") suggests
   offices also in Porto-Novo, Abomey-Calavi (Calavi), Parakou, and
   Bohicon; but that article's full body could not be read (Cloudflare
   block), so this is a snippet-level claim, not a confirmed city-coverage
   list. It is plausible that having an office in a city does not imply
   full on-demand ride coverage there.

3. **User/trip metrics: 2021-2022 figures vs. 2025 figures.** Press from
   December 2021/January 2022 cites "800,000+ registered users" and "5+
   million completed trips." More recent 2025 reporting cites "over 1
   million users" and "more than 30 million trips/orders." These are not
   necessarily contradictory (the metric plausibly grew over ~4 years) but
   should not be mixed as if from the same point in time; the file uses the
   2025 figures as current and flags the 2021-2022 figures as outdated.

4. **Series B ($30M) completion date.** One source path (Gozem's own
   `corporate-bj` news list) dates the Series B announcement article to
   30/07/2025. A separate search-result summary (citing frenchweb.fr/
   techcabal-adjacent coverage) states the round was "finalized" on 25
   February 2025. These may describe different milestones (internal close
   vs. public press announcement) rather than a true conflict, but the
   exact sequence was not independently reconciled in this research pass.

5. **App Store description content (Togo/Lomé-centric) vs. actual
   multi-country app.** The Apple App Store listing's descriptive text, as
   read via automated fetch, reads as centered on Togo and "zemidjans" in
   Lomé specifically, without naming Benin, even though the app clearly
   serves Benin (confirmed via Play Store description, corporate site, and
   press). This suggests the App Store copy may be older/generic and not
   fully country-inclusive, or that the automated fetch surfaced a cached/
   partial version of the listing. Not independently re-verified against a
   second live fetch due to Apple rate-limiting encountered in this
   session (HTTP 429).

6. **"Reduced commissions" claim vs. "usual commissions continued."** One
   article headline (actusdubenin.com) frames the story as tariffs and
   commissions both falling ("tarifs en baisse, réduction des
   commissions"), while the article's own body text says platforms
   "continuent de prélever leurs commissions habituelles" (commissions were
   not reduced). This is an internal inconsistency within that single
   source (headline vs. body), not a cross-source contradiction, but is
   flagged because it affects how the 20% commission figure should be
   read: as of July 2025, commissions were reported as unchanged even as
   gross fares/tariffs fell.

---

## 10. Sources index (most useful)

- https://website.gozem.co/corporate-bj/ (Benin corporate homepage, raw
  HTML)
- https://website.gozem.co/corporate-bj/voiture/ (Benin car service tiers,
  raw HTML)
- https://website.gozem.co/corporate/fr/voiture/ (global/default car
  service tiers, raw HTML, for comparison)
- https://play.google.com/store/apps/details?id=com.gozem&hl=fr (live app
  listing, raw HTML fetched directly)
- https://apps.apple.com/us/app/gozem/id1441247963 (Apple App Store
  listing)
- https://lanouvelletribune.info/2025/07/gozem-et-yango-au-benin-une-regulation-du-secteur-en-vue/
  (2025-07-11, pricing/commission and regulatory context)
- https://benin360.com/transport-cotonou-benin/ (field-observed pricing,
  dated "Mai 2026" internally)
- https://automag.bj/2025/08/29/devenir-chauffeur-gozem-a-cotonou-trucs-et-astuces/
  (2025-08-29, driver/vehicle-class detail)
- https://techafricanews.com/2025/11/06/gozem-launches-in-brazzaville-expanding-its-super-app-footprint-across-central-africa/
  (2025-11-06, current country footprint)
- https://techcrunch.com/2021/12/01/francophone-african-super-app-gozem-grabs-5m-to-expand-and-offer-more-services/
  (2021-12-01, founding/funding history, outdated but useful for origin
  facts)
- https://gozem.zendesk.com/hc/fr-fr (Help Center; access blocked by
  Cloudflare; titles only, via search)

---

## 11. Open questions (not publicly findable in this research pass)

- Exact cancellation window and cancellation-fee amount (in XOF) for rider
  cancellations, and whether it differs by ride class.
- Exact waiting-fee policy and amount (grace period, per-minute charge
  after that period).
- Whether Gozem offers scheduled/advance-booking rides in Benin (or any
  market) at all; no evidence found either way beyond an absence of any
  confirming source.
- Whether a live trip-sharing (share ETA/location with a contact) feature
  exists for riders, beyond generic "real-time GPS tracking" marketing
  copy.
- Whether a dedicated in-app SOS/panic button exists for riders.
- Whether any women-only ride or women-driver program exists in Benin or
  any Gozem market.
- Whether there is a formal, Gozem-branded "intercity" ride product between
  Beninese cities, as opposed to ordinary city-level rides that happen to
  be available in several cities.
- The full, current Help Center category taxonomy and article bodies
  (blocked by Cloudflare bot-challenge on gozem.zendesk.com; not bypassed,
  per the research boundaries).
- Whether "Gozem Money" (the NSIA Bank-partnered wallet) has actually
  launched for end users in Benin by the access date, versus remaining
  Togo-only.
- Whether Celtiis/Celtiis Cash is an accepted top-up or payment rail inside
  the Gozem wallet in Benin.
- Actual screenshot images and their captions for the Google Play and
  Apple App Store listings (attempted; not obtained; see section 6).
- Current, re-verified Apple App Store "last updated" date/version (the
  value read, 15 September 2024 / v4.6.4, is likely stale; a fresh check
  was blocked by Apple's rate limiting, HTTP 429, during this session).
- Precise passenger capacity per ride class as an official Gozem figure
  (only a third-party driver-recruitment article's numbers were found).
- Reconciling the Series B completion date (25 February 2025 vs. 30-31
  July 2025 press coverage).
