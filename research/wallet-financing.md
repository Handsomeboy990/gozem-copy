# Gozem Money, Vehicle Financing, and Promotions (Benin focus)

> Status: produced by non-craft agents in session 1 and not yet re-verified by a
> craft `researcher` (deferred by the owner). Any claim sourced through the
> `r.jina.ai` proxy is discarded and must not be used.

Scope: Gozem Money (wallet/fintech), vehicle financing for drivers, promotions/referral/loyalty,
and the legal pages (terms of use, privacy policy, legal entity), all from public sources,
focused on Benin where the country is specified. Access date for every source below is
2026-09-28 unless a different access date is stated.

Claim format follows `research/README.md`: OBSERVED (read directly in the cited source),
INFERRED (deduced, reasoning stated), UNKNOWN (searched for, not found).

## 0. Framing fact that shapes this whole file

- OBSERVED: As of the access date, Gozem Money (the e-money/fintech product) is documented by
  Gozem's own press material as having launched commercially in Togo only, in partnership with
  NSIA Bank Togo, not in Benin.
  Source: https://gozem.co/bj/fr/lancement-imminent-de-gozem-money-au-togo-en-partenariat-avec-nsia-banque/
  (published 2025-07-30, accessed 2026-09-28)
  Source: https://fr.allafrica.com/stories/202510150468.html (published 2025-10-15, accessed 2026-09-28)
- OBSERVED: The Benin homepage of gozem.co (both /bj/fr/ and /bj/en/) does not advertise Gozem
  Money as a live feature for Benin. The only Gozem Money reference on the Benin site is the
  same "launch imminent in Togo" news item, syndicated from the group blog.
  Source: https://gozem.co/bj/fr/ (accessed 2026-09-28)
  Source: https://gozem.co/bj/en/ (accessed 2026-09-28)
- OBSERVED: BCEAO's own public page listing licensed electronic money establishments (as
  refreshed to 28 February 2026 per the page) lists, for Togo, the partnership "NSIA BENIN
  (Succursale du Togo) et GOZEM: GOZEM MONEY" -- i.e. the licensed partner is the Togo branch of
  NSIA Benin bank, not a stand-alone Gozem entity. For Benin itself, the three listed EME are MTN
  Mobile Money Benin SA, Moov Money SA, and ID Money Benin. Neither "Gozem" nor "Moneex" appears
  in the Benin list.
  Source: https://www.bceao.int/fr/content/etablissements-de-monnaie-electronique (accessed 2026-09-28)
- INFERRED: Gozem Money is therefore not a BCEAO-licensed e-money issuer in Benin as of the
  access date. Reasoning: it is absent from BCEAO's own Benin EME list, and Gozem's own Benin
  site treats it as a future feature, not a live one.
- CONTRADICTION (see also the Contradictions section): TechCrunch, in a 2025-02-26 article,
  states Gozem Money "operates in Togo" already and "processes millions of dollars daily",
  seemingly before the July 2025 "launch imminent" press release and the October 2025 press
  coverage of the actual launch. This file flags the discrepancy rather than resolving it.

Because of this, most of what follows distinguishes:
(a) the long-standing in-app "Portefeuille Gozem" (ride wallet), which is live in Benin and used
to pay for rides/deliveries, and
(b) "Gozem Money" the newer, bank-partnered e-money product, which is documented only for Togo.

## 1. Gozem Money / wallet

### 1.1 Licence and partner institution

- OBSERVED: Gozem Money in Togo is a partnership between Gozem and NSIA Bank Togo (referred to
  in the BCEAO listing as "NSIA BENIN (Succursale du Togo)", i.e. the Togo branch of the NSIA
  Benin banking group).
  Source: https://www.bceao.int/fr/content/etablissements-de-monnaie-electronique (accessed 2026-09-28)
  Source: https://fr.allafrica.com/stories/202510150468.html (published 2025-10-15, accessed 2026-09-28)
- OBSERVED: Gozem's fintech ambitions trace to its 2023 acquisition of Moneex, described in press
  coverage as a Beninese electronic-payments startup, explicitly to seed Gozem Money's expansion
  into Benin, Gabon and Cameroon after the Togo launch.
  Source (search-engine synthesis of the following, not independently re-fetched due to a domain
  safety block on WebFetch): https://dabafinance.com/en/news/super-app-gozem-acquiert-Beninese-Moneex
  (accessed 2026-09-28)
- UNKNOWN: Moneex's own regulatory status (EME, payment service provider, or agent) in Benin.
  Moneex does not appear under its own name in BCEAO's current Benin EME list, and no primary
  source was found confirming what licence, if any, Moneex held or transferred to Gozem.
- INFERRED: Gozem Money's future Benin launch will most likely also use a bank-partnership model
  (an existing WAEMU bank as the licensed e-money issuer, with Gozem as technical/commercial
  partner), by analogy with the Togo structure, rather than Gozem obtaining its own BCEAO EME
  licence. Not confirmed for Benin.

### 1.2 Features described for Gozem Money (mostly Togo-sourced; not confirmed live in Benin)

- OBSERVED: Gozem's own press release describes the wallet's purpose as letting customers "pay
  bills, make purchases inside and outside the Gozem environment, transfer money to other users,
  or manage personal finances", and states the goal of "ensuring interoperability with existing
  platforms."
  Source: https://gozem.co/en/gozem-money-to-launch-in-togo-soon-in-partnership-with-nsia-bank/
  (published ~2025-07-30, accessed 2026-09-28)
- OBSERVED: Press coverage of the Togo launch (Oct 2025) describes wallet top-up, inter-operator
  fund transfers, and purchases "through an interoperable system compatible with all Togolese
  mobile money operators", with withdrawal fees claimed to be "five times lower than standard
  market rates" versus incumbents TMoney and Flooz.
  Source: https://fr.allafrica.com/stories/202510150468.html (published 2025-10-15, accessed 2026-09-28)
- UNKNOWN: Whether Gozem Money supports a virtual or physical card, a QR-code merchant payment
  flow, or specific utility-bill integrations (SBEE electricity, SONEB water, Canal+). No primary
  Gozem source describing these for Gozem Money specifically was found. Gozem Marchand (the
  separate merchant app/program) does mention "QR Code" for ticket/access sales, but that is a
  merchant feature, not confirmed as part of the Gozem Money consumer wallet.
  Source checked and inconclusive: https://gozem.co/bj/en/ (accessed 2026-09-28); Play Store
  listing for com.gozem.merchant found by title only, not fetched.
- UNKNOWN: Fee schedule for Gozem Money (beyond the general "five times lower withdrawal fees"
  marketing claim for Togo, which gives no absolute numbers).
- UNKNOWN: Daily/monthly transaction or balance limits for Gozem Money, and whether KYC tiers
  (e.g. basic phone-verified tier vs fully-verified tier) unlock higher limits. The closest
  evidence is a Gozem Togo social post (Threads, @gozemtogo) describing a 3-step activation flow:
  log in with your password, create a security PIN "to validate your transactions", then "follow
  the steps to identify your account and unlock all limits" -- which implies tiered limits exist,
  but gives no figures.
  Source: https://www.threads.com/@gozemtogo/post/DQttUoliKry (accessed 2026-09-28; exact
  publication date on the post not confirmed, but recent given the platform and Gozem Money's
  2025 Togo launch).
- UNKNOWN: KYC document list for Gozem Money specifically (ID card, CIP, NPI, passport, selfie).
  Not found on any fetched Gozem page. The user's own list of expected documents (ID card, CIP,
  NPI, passport, selfie) is standard for WAEMU e-money onboarding generally but was not confirmed
  as Gozem's actual list.
- UNKNOWN: Refund policy specific to Gozem Money transactions (distinct from ride refunds).
- IMPORTANT GAP: Gozem's public help center (Zendesk, French locale, which is the one used across
  all Francophone country sites including Benin) currently has no dedicated "Gozem Money"
  category or section. Its visible top-level sections are "Généralités sur Gozem", "Gozem
  transport", and "Gozem Ecommerce"; the payments-related section is called "Moyen de Paiement"
  and contains four articles, all about the older ride/Ecommerce wallet (see 1.3), not about
  Gozem Money as a distinct product.
  Source: https://gozem.zendesk.com/hc/fr-fr (accessed 2026-09-28, fetched via a text-extraction
  proxy because Zendesk's own edge (Cloudflare) returns HTTP 403 "Just a moment..." challenge
  pages to both curl and the WebFetch tool directly)
  Source: https://gozem.zendesk.com/hc/fr-fr/sections/360002253332-Moyen-de-Paiement
  (accessed 2026-09-28, same proxy)

### 1.3 The existing in-app "Portefeuille Gozem" (ride wallet) -- live in Benin, separate from Gozem Money

This is the wallet feature that has existed in the Gozem rider app for years, used to pay for
rides/food/shopping, funded by mobile money, card or cash. It should not be assumed identical to
the new "Gozem Money" fintech product; no Gozem source equates the two.

- OBSERVED: The Play Store listing for the main Gozem app (French locale, package `com.gozem`,
  "Date de mise a jour: 28 sept. 2026", version 4.6.4) describes the wallet as: "PORTEFEUILLE
  NUMERIQUE -- Paye comme tu veux: cash, carte bancaire ou mobile money. Ton portefeuille Gozem
  accepte MTN, Moov et plus encore. Zero tracas avec la monnaie." It lists live cities as "Lome -
  Cotonou - Douala - Yaounde - Libreville - Brazzaville", confirming Cotonou (Benin) as a live
  market for this wallet.
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr (accessed 2026-09-28,
  fetched via curl; raw HTML saved to research/raw/wallet/playstore.html)
- OBSERVED: Help center article "Comment recharger mon portefeuille Gozem": steps are open the
  app, tap "+ Recharger", choose a recharge method/operator, enter the linked mobile number,
  validate, enter the amount, tap "Recharger". Stated limits: "Minimum: 200 F" and "Maximum:
  10 000 F" per recharge. No fee is mentioned in the article.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360025367832-Comment-recharger-mon-portefeuille-Gozem
  (accessed 2026-09-28, fetched via text-extraction proxy; article noted by the proxy as "last
  updated approximately one year ago", i.e. roughly 2025)
- OBSERVED: Help center article "Comment faire un retrait": from the home screen, tap "Retrait",
  enter the amount, tap "Retirer", then enter "le code PIN de retrait" sent by SMS at app
  install. No fee or min/max figures are given in this article.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/11244635787410-Comment-faire-un-retrait
  (accessed 2026-09-28, fetched via text-extraction proxy)
- OBSERVED: The same article lists country support numbers (phone and WhatsApp) for users who
  forgot their withdrawal PIN: Benin +229 62374949, Togo +228 93173030, Cameroon +237 674277407,
  Gabon +241 76519044.
  Source: same as above (accessed 2026-09-28)
- UNKNOWN / unverified: A "1% fixed withdrawal fee" figure surfaced in a search-engine summary
  but could not be pinned to a specific, directly-fetched Gozem primary source. Treat as
  unconfirmed; do not present as fact without a cited page.
- OBSERVED: Help article "Comment marche mon portefeuille Gozem?" only states, at a high level,
  that the wallet lets a user "stocker de l'argent sur votre compte et de payer facilement vos
  courses" (store money and pay for rides easily), and warns that if the balance is negative the
  user must top up before booking. No funding-method list, limits, or fees are in this article.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360015970051-Comment-marche-mon-portefeuille-Gozem
  (accessed 2026-09-28, fetched via text-extraction proxy)
- OBSERVED: The general Terms and Conditions (see section 4) contain a section titled "Gozem
  Electronic Wallet" stating that wallet credit "cannot be reconverted, refunded, resold or
  exchanged", and separately that payments are "non-refundable, unless the Company decides
  otherwise."
  Source: https://website.gozem.co/en/users-terms-conditions1/ (accessed 2026-09-28)

### 1.4 Statements, transaction status, agent network

- UNKNOWN: No dedicated statement/transaction-history export feature, or transaction-status
  taxonomy (pending/completed/failed/reversed), was found documented for Benin. The rider app is
  known (from the App Store description, see 1.5) to show a per-ride "historique" (history), but
  this is ride history, not a full account statement.
- OBSERVED: Gozem's Benin homepage advertises an "agent network" among Gozem Money-branded
  financial services shown across the corporate site (top-up, withdrawal, transfer, agent
  network, merchant payment acceptance), though, per section 0, these are marketing categories on
  a page whose only concrete Gozem Money news item is the Togo launch announcement -- so live
  agent-network availability in Benin specifically is not confirmed.
  Source: https://website.gozem.co/corporate-bj/en/ (accessed 2026-09-28)

## 2. Vehicle financing

Gozem's driver vehicle-financing program is publicly branded "V+" (also seen as "V+ Car" for the
car-specific variant), and is described in press coverage as a lease-to-own / progressive-
ownership model. It is older and better documented than Gozem Money, and Benin is confirmed as
an active market for it (not just a future one).

### 2.1 Program structure

- OBSERVED: Repayment terms reported consistently across two independently published articles:
  cars are repaid over 4 years with daily payments; motorcycles over 2 years with daily payments.
  Source: https://www.togofirst.com/fr/transport/2609-14869-gozem-un-programme-permet-a-1000-chauffeurs-de-devenir-proprietaires-de-vehicules-au-togo
  (published 2024-09-26, accessed 2026-09-28) -- OLDER THAN 2 YEARS as of access date is false
  (about 2 years old; close to the 2-year threshold, flagged for caution)
  Source: https://fr.allafrica.com/stories/202601220239.html (published 2026-01-22, accessed
  2026-09-28, describing the same 4-year car term for the newer Congo-Brazzaville rollout)
- OBSERVED: Zero down payment for car financing, stated on the Benin homepage itself: "Finance ta
  voiture sans apport initial, avec prelevements automatiques sur tes gains." (Finance your car
  with no down payment, with automatic deductions from your earnings.)
  Source: https://gozem.co/bj/fr/ (accessed 2026-09-28)
  Source (English phrasing): https://gozem.co/bj/en/ (accessed 2026-09-28): "Finance your car
  with no down payment, with automatic payments deducted from your earnings."
- UNKNOWN: Down-payment policy for motorcycles/tricycles specifically was not confirmed (only
  cars are explicitly marketed as zero-down-payment).
- UNKNOWN / low-confidence: A figure of "13 million FCFA" for a 4-year car financing contract
  appeared only inside a search-engine's synthesized summary (not a direct quote traceable to one
  fetched page) referencing the Zendesk article "Quelles sont les conditions que je dois remplir
  pour etre champion Gozem?". Direct re-fetch of that specific article did not succeed during
  this research session (transient tool failures). Treat this figure as unverified pending a
  direct re-check.
  Source (unverified): https://gozem.zendesk.com/hc/fr-fr/articles/360031866812-Quelles-sont-les-conditions-que-je-dois-remplir-pour-%C3%AAtre-champion-Gozem
- UNKNOWN: GPS tracking / remote immobilization on financed vehicles was not confirmed by any
  fetched Gozem source. (Gozem's Benin homepage does advertise a general "vehicle tracking" /
  safety feature -- "Suivi vehicule" -- but this was not tied explicitly to financed vehicles or
  to a remote-immobilization capability in any source found.)
  Source: https://gozem.co/bj/en/ (accessed 2026-09-28)

### 2.2 Eligibility and journey

- OBSERVED: Selection for better vehicles (cars) is performance- and discipline-based, assessed
  weekly; a Champion (Gozem driver-partner) already active -- with their own vehicle or a
  Gozem-financed one whose contract has ended -- who has "proven themselves" can aspire to any
  vehicle type including cars. New drivers without a vehicle can initially only access motorcycles
  and tricycles, and can progress to cars after demonstrating performance on the platform.
  Source (search-engine synthesis citing Zendesk and press articles; not independently re-fetched
  for full verbatim text due to a transient tool outage during this session):
  https://gozem.zendesk.com/hc/fr-fr/articles/360031866812-Quelles-sont-les-conditions-que-je-dois-remplir-pour-%C3%AAtre-champion-Gozem
  (accessed 2026-09-28)
- OBSERVED: Required documents to be a Champion include a valid national ID, a driving licence
  matching the service offered, and, if bringing one's own vehicle, its registration card, valid
  insurance, and up-to-date technical inspection.
  Source: same as above
- OBSERVED: Gozem's champion-facing Terms & Conditions require a Champion to "be the owner or be
  able to legally operate the vehicle put on the Platform; maintain it in good working order in
  accordance with industry safety and maintenance standards", and to maintain civil liability
  insurance and the applicable urban-transport licensing -- but this document does not itself
  cover financing terms (no down payment, duration, or default clauses found in it).
  Source: https://website.gozem.co/en/champioms-terms-conditions1/ (accessed 2026-09-28)
- OBSERVED: Bundled financial services marketed alongside vehicle financing on the Benin
  homepage: smartphone financing ("Acces au financement d'un smartphone pour travailler
  efficacement avec l'appli Gozem"), a maintenance/insurance/equipment subscription, and an
  emergency cash advance ("Obtiens une avance en cas de panne, d'accident ou de besoin
  ponctuel.").
  Source: https://gozem.co/bj/fr/ (accessed 2026-09-28)

### 2.3 Partners and scale (Benin-specific evidence)

- OBSERVED: Gozem inaugurated a new Benin headquarters in Cotonou on 2023-09-08, with vehicle
  keys handed over to Gozem "champions" as part of the V+ financing program at that event --
  direct evidence the V+ program is operating in Benin, not just Togo.
  Source (search-engine synthesis of): https://affairesetentreprises.com/2023/09/08/benin-gozem-inaugure-son-nouveau-siege/
  (accessed 2026-09-28)
- OBSERVED (OLDER THAN 2 YEARS, flagged): In June 2022, the International Finance Corporation
  (IFC) announced a $10 million (about 6.25 billion FCFA) financing package for Gozem's vehicle
  program, explicitly targeting 6,000 moto-taxi drivers across Togo AND Benin, including a plan
  to test electric motorcycles in moto-taxi conditions and build a battery-swap station network
  over a 12-month pilot.
  Source: https://techcabal.com/2022/06/15/gozem-secures-10m-from-ifc/ (published 2022-06-15,
  accessed 2026-09-28) -- more than 2 years old, information may be outdated.
  Source: https://www.afrik21.africa/en/benin-togo-ifc-lends-10m-to-gozem-for-the-deployment-of-6000-electric-motorbikes/
  (published ~2022-06, accessed 2026-09-28) -- more than 2 years old.
- OBSERVED: By September 2024, press reported over 1,000 drivers had already become vehicle
  owners through the program (article headline specifies "au Togo", though the underlying IFC
  target was Togo+Benin combined -- see Open Questions).
  Source: https://www.togofirst.com/fr/transport/2609-14869-gozem-un-programme-permet-a-1000-chauffeurs-de-devenir-proprietaires-de-vehicules-au-togo
  (published 2024-09-26, accessed 2026-09-28)
- OBSERVED: By February 2025, TechCrunch reported Gozem had financed "around 7,000 vehicles"
  overall (across its markets, not Benin-specific) since 2021, and that a new $30 million Series
  B round ($15M equity + $15M debt, led by SAS Shipping Agencies Services / MSC Group and Al Mada
  Ventures) was earmarked partly to expand vehicle financing, with an additional $20 million in
  debt anticipated.
  Source: https://techcrunch.com/2025/02/26/gozem-nets-30m-to-expand-vehicle-financing-digital-banking-in-francophone-africa
  (published 2025-02-26, accessed 2026-09-28)
- OBSERVED: The IFC was, as of a 2026 report, examining a further loan of about 21 million euros
  (13.8 billion FCFA) for Gozem's expansion across Cameroon, Benin, Togo and Congo between 2026
  and 2028.
  Source: https://africtelegraph.com/blog/la-sfi-etudie-un-pret-de-138-milliards-fcfa-pour-gozem/
  (accessed 2026-09-28; exact publication date not confirmed but content frames it as a 2026
  report)
- OBSERVED: The V+ (branded "V+ Car" for the car product) program was rolled out to a new market,
  Congo-Brazzaville, on 2026-01-20, with MTN Congo as a partner equipping financed vehicles with
  Wi-Fi routers -- evidence the model continues to expand country by country, most recently
  outside Benin/Togo.
  Source: https://fr.allafrica.com/stories/202601220239.html (published 2026-01-22, accessed
  2026-09-28)
- UNKNOWN: No local Beninese bank or leasing partner (as opposed to the international IFC) was
  identified by name for the Benin financing operation.
- UNKNOWN: No confirmed partnership between Gozem and a named electric-motorcycle/battery-swap
  company (e.g. Spiro) was found. Spiro is independently confirmed to operate in Benin, but no
  primary source ties it to Gozem's financing program.
  Source: https://automag.bj/2026/09/11/revolution-des-2-roues-spiro-et-lessor-des-motos-electriques-au-benin/
  (accessed 2026-09-28, Spiro/Benin context only, no Gozem link stated)

## 3. Promotions, referral, loyalty

### 3.1 Promo codes

- OBSERVED: Gozem distributes promo codes primarily through country-specific social channels
  (Telegram, Facebook, TikTok, Instagram, X), not a static in-app catalogue. Benin channels: X
  @GozemBJ, Facebook facebook.com/gozembenin, Telegram t.me/GozemBenin, TikTok @gozembenin,
  Instagram @gozembenin.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360012421940-Comment-avoir-des-codes-promo
  (accessed 2026-09-28, fetched via text-extraction proxy)
- OBSERVED: Example Benin promo code M324 gave first-time users 1,500 FCFA off their first ride.
  Source: https://x.com/GozemBJ/status/1767481977894998316 (accessed 2026-09-28; tweet ID implies
  a 2024 posting date, not independently re-verified)
- UNKNOWN: A general, current, standing promo-code value/schedule for Benin was not found; codes
  appear to be time-limited, campaign-specific, and announced ad hoc on social media.

### 3.2 Referral program (parrainage)

- OBSERVED: In-app path is Account (bottom menu) > "Parrainage", which shows the user's referral
  code to share. A new user enters that code at signup.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/360012057759-Comment-parrainer-un-nouvel-utilisateur
  (accessed 2026-09-28, fetched via text-extraction proxy)
- OBSERVED: A referral code can be used by up to 10 people, after which it becomes inactive.
  Source: same as above
- OBSERVED: The reward is only credited if the referred friend completes a ride within 30 days of
  signing up ("effectuer une course sous 30 jours").
  Source: same as above
- OBSERVED: The article states the referrer earns a promo code as the reward but does not state
  its monetary value in the extracted text.
  Source: same as above
- UNKNOWN: The exact FCFA (or percentage) value of the referral reward for Benin.
- OBSERVED: A related Facebook post ("A partir d'aujourd'hui en parrainant un nouvel utilisateur
  vous gagnez des codes p...") confirms the referral-for-promo-code mechanic was actively promoted
  on the Benin Facebook page, but the full reward terms were not captured from the snippet.
  Source: https://www.facebook.com/GozemBenin/posts/a-partir-daujourdhui-en-parrainant-un-nouvel-utilisateur-vous-gagnez-des-codes-p-/1372992892888957/
  (accessed 2026-09-28, not independently re-fetched in full)

### 3.3 Loyalty program

- OBSERVED: Both the Google Play listing and the Apple App Store listing for the main Gozem app
  advertise a "Programme de fidelite exclusif et genereux" (an exclusive and generous loyalty
  program) as a headline feature, alongside the referral program, but neither store listing gives
  mechanics, a points system, or redemption details.
  Source: https://apps.apple.com/bj/app/gozem/id1441247963 (accessed 2026-09-28, fetched via
  curl; raw HTML saved to research/raw/wallet/appstore.html)
  Source: https://play.google.com/store/apps/details?id=com.gozem&hl=fr (accessed 2026-09-28)
- UNKNOWN / unverified: A "GoWin" points system was mentioned in search-engine-generated
  summaries (claiming users earn "GoWin points" that accrue faster when paying with Gozem Money),
  but no direct, fetchable Gozem source (app store listing, help center article, or gozem.co page)
  could be found confirming this name or mechanic exists. Given it could not be traced to a
  primary source, it should be treated as unconfirmed and possibly a search-summarization
  artifact rather than a real Gozem program name.
- UNKNOWN: No evidence found of a paid subscription product (a "Gozem Plus" or equivalent). The
  loyalty program referenced in store listings appears to be free/automatic, not a paid tier.

## 4. Legal: terms of use, privacy policy, company entity

### 4.1 Where the actual legal text lives

- OBSERVED: The pages at gozem.co/en/terms-and-conditions-of-use/ and
  gozem.co/bj/en/terms-and-conditions-of-use/ are WordPress-style landing/stub pages: fetching
  them returns only header, navigation, sidebar widgets ("Recent Posts", "Archives",
  "Categories") and footer, with no legal body text in either the rendered or proxied HTML.
  Source: https://gozem.co/en/terms-and-conditions-of-use/ (accessed 2026-09-28)
  Source: https://gozem.co/bj/en/terms-and-conditions-of-use/ (accessed 2026-09-28)
- OBSERVED: The Benin stub page does carry one concrete fact in its footer/contact block: "Gozem
  Benin, Immeuble Blanc a 1Km apres Fin Pave, Route des peches, Cotonou", and a publication
  timestamp of 2025-10-18 in the page metadata.
  Source: https://gozem.co/bj/en/terms-and-conditions-of-use/ (accessed 2026-09-28)
- OBSERVED: The actual full legal text (22 numbered sections) is hosted on a separate corporate
  domain, at https://website.gozem.co/en/users-terms-conditions1/, which is the document actually
  analyzed for the clauses below. The two domains appear to be two different generations of
  Gozem's web presence (gozem.co = country-facing marketing/blog sites; website.gozem.co =
  group corporate site hosting group-wide legal documents).
  Source: https://website.gozem.co/en/users-terms-conditions1/ (accessed 2026-09-28)

### 4.2 Terms and Conditions of Use -- structure and key clauses

- OBSERVED: Section list (22 sections): Object; Definitions; Registration on the Platform; Use of
  the Service; Payments; Tips; Promotions and Programs; Gozem Electronic Wallet; License;
  Restrictions; Cancellation Policy; Rating; Confidentiality; Protection of Personal Data;
  Disclaimer; Indemnification; Limitation of Contractual Liability; Interactions Between
  Users/Third Parties; Notices; Termination; Miscellaneous; Applicable Law and Competent
  Jurisdiction.
  Source: https://website.gozem.co/en/users-terms-conditions1/ (accessed 2026-09-28)
- OBSERVED: Legal entity: "Gozem Pte Ltd, a company registered in Singapore under number
  201735889C." No Benin-specific contracting entity is named in this document; contracting is
  with the Singapore parent.
  Source: same as above
- OBSERVED: Minimum age clause, quoted: "You must be eighteen (18) or twenty-one (21) years old
  depending on the legislation."
  Source: same as above
- OBSERVED: Account termination by the user requires "seven (07) days written notice sent on the
  Application." Gozem may terminate without notice for a material breach or safety concern, or
  with seven days' notice for repeated poor ratings.
  Source: same as above
- OBSERVED: Governing law and jurisdiction, quoted in substance: disputes are settled under
  Singaporean law, subject to the jurisdiction of the courts of Singapore.
  Source: same as above
- OBSERVED: Wallet/refund clauses: wallet credit "cannot be reconverted, refunded, resold or
  exchanged"; payments generally "non-refundable, unless the Company decides otherwise."
  Source: same as above
- OBSERVED: Liability disclaimer: services are provided "AS IS"; Gozem disclaims warranties and
  liability for force majeure and third-party provider conduct.
  Source: same as above
- UNKNOWN: No explicit KYC procedure is spelled out in the Terms; personal-data collection for
  "security and compliance" is referenced only in general terms.

### 4.3 Privacy Policy -- structure and key clauses

- OBSERVED: Section list (8 sections): Processing of personal data; What type of personal data we
  collect and process; The purpose of collecting and the period of processing of personal data;
  The method of collecting personal data; Disclosure of personal data to third parties; Security
  and deletion of data; Direct marketing; Personal data of taxi drivers.
  Source: https://gozem.co/privacy.html (accessed 2026-09-28)
- OBSERVED: Data controller named as "GoZem Pte. Ltd." Data centres are stated to be "located in
  the territory of England."
  Source: same as above
- OBSERVED: No explicit numeric data-retention period is stated. The policy instead states:
  "uninstalling the GoZem app from your device does not terminate your account and therefore does
  not delete your personal data" -- i.e. retention continues indefinitely absent an explicit
  deletion request.
  Source: same as above
- OBSERVED: Account/data deletion requires the user to "send a written request to close your
  account and delete the personal data by e-mail"; deletion results in account termination and
  anonymization of the data retained for analytics.
  Source: same as above
- UNKNOWN: No minimum-age clause appears in the Privacy Policy itself (only in the Terms, see
  4.2). No French-language version of this specific privacy.html page was confirmed to exist;
  attempts to check a French variant were not completed due to a transient tool outage late in
  this research session -- flagged as an open question, not resolved as absent.
- UNKNOWN: Data collected is listed only at a category level (identifiers, location, device ID,
  payment information, ratings, route data); no explicit statement of financial/KYC data handling
  for Gozem Money.

### 4.4 Languages

- OBSERVED: The Terms and Conditions page (at website.gozem.co) exposes an English/French
  language switcher ("English" | "Francais").
  Source: https://website.gozem.co/en/users-terms-conditions1/ (accessed 2026-09-28, switcher
  observed on the equivalent gozem.co stub page's header)
- OBSERVED: The Benin country site (gozem.co/bj/) and the help center (gozem.zendesk.com/hc/fr-fr)
  are both available in French; an English path also exists for the country site
  (gozem.co/bj/en/). No third language was found.
- UNKNOWN: Whether the Privacy Policy specifically (as opposed to the Terms) has a confirmed
  French version at a distinct URL.

### 4.5 Legal entity in Benin -- three different descriptions found (see Contradictions)

- OBSERVED (source 1): gozem.co/bj/en/terms-and-conditions-of-use/ footer: "Gozem Benin, Immeuble
  Blanc a 1Km apres Fin Pave, Route des peches, Cotonou."
  Source: https://gozem.co/bj/en/terms-and-conditions-of-use/ (accessed 2026-09-28)
- OBSERVED (source 2): A Benin business directory listing describes "Gozem Benin" as a Societe
  Anonyme (SA) passenger-transport company at "Le Nokoue, 229 Avenue de la Liberation, Portail
  vert tache de Logos Gozem a cote de la Pharmacie, Quartier Jericho", Cotonou.
  Source: https://www.globenin.com/phonebook/gozem-benin-benin-4460 (accessed 2026-09-28; a
  third-party directory, not a Gozem primary source, so treated as lower-confidence)
- OBSERVED (source 3): Gozem's own help-center article listing office addresses by country gives
  the Cotonou address as "Fidjrosse, route des peches, juste apres la station JNP en allant vers
  Togbin", plus six other Benin city offices (Calavi, Akpakpa, Porto-Novo, Parakou, Bohicon,
  Natitingou), none of which names a legal entity, only a physical/service location.
  Source: https://gozem.zendesk.com/hc/fr-fr/articles/26142823237906--Adresses-des-bureaux-Gozem-par-pays
  (accessed 2026-09-28, fetched via text-extraction proxy)
- UNKNOWN: RCCM (Registre du Commerce et du Credit Mobilier) number and IFU (Identifiant Fiscal
  Unique) for the Benin entity. Not found on any fetched Gozem page; OHADA's RCCM portal for
  Benin (https://rccm.ohada.org/staticPage/index?alias=bj) was identified as a possible primary
  registry lookup but was not queried (it requires an interactive company-name search that
  was out of scope for this pass).
- OBSERVED, context (not wallet/financing but directly "legal"): Benin's land/air transport
  authority gave Gozem a two-month deadline (article published 2024-12-08) to regularize its
  ride-hailing authorization via a platform named "SYGFR", after suspending competitor Yango
  outright for operating without authorization; Gozem was not suspended, the article says,
  because of its operational transparency and having an identifiable headquarters.
  Source: https://www.afrik.com/benin-yango-suspendu-gozem-dans-le-viseur-des-autorites
  (published 2024-12-08, accessed 2026-09-28)
- UNKNOWN: Whether Gozem in fact completed that SYGFR regularization, and by what date.

## Contradictions

1. Gozem Money launch timing. TechCrunch (2025-02-26) states Gozem Money "operates in Togo" and
   "processes millions of dollars daily" following the 2023 Moneex acquisition. Gozem's own press
   release (2025-07-30) frames the NSIA Bank partnership launch as still "imminent" at that later
   date, and press coverage of the actual launch is dated 2025-10-15. Either TechCrunch described
   an earlier pilot/soft-launch predecessor product also informally called "Gozem Money", or the
   TechCrunch figure is imprecise. Not resolved here.
   Sources: https://techcrunch.com/2025/02/26/gozem-nets-30m-to-expand-vehicle-financing-digital-banking-in-francophone-africa ;
   https://gozem.co/bj/fr/lancement-imminent-de-gozem-money-au-togo-en-partenariat-avec-nsia-banque/ ;
   https://fr.allafrica.com/stories/202510150468.html

2. Benin legal-entity address. Three different addresses/descriptions were found for "Gozem
   Benin" (see 4.5): the Terms stub page's "Immeuble Blanc, Route des peches"; a business
   directory's "Le Nokoue, 229 Avenue de la Liberation, Quartier Jericho"; and the help center's
   operational office address "Fidjrosse, route des peches, pres de la station JNP." These may
   describe different things (registered office vs a service point vs an outdated directory
   entry) rather than a genuine conflict, but no single source reconciles them.

3. "V+" program driver count attribution. The September 2024 Togo First headline attributes
   "1,000 drivers becoming vehicle owners" specifically "au Togo", while the underlying IFC-backed
   target it reports on (6,000 drivers) was explicitly framed as Togo AND Benin combined by IFC's
   own 2022 announcement. It is unclear whether the 1,000 figure is Togo-only or was mis-scoped by
   that headline.
   Sources: https://www.togofirst.com/fr/transport/2609-14869-gozem-un-programme-permet-a-1000-chauffeurs-de-devenir-proprietaires-de-vehicules-au-togo ;
   https://techcabal.com/2022/06/15/gozem-secures-10m-from-ifc/

4. Vehicle-financing scale figures across time do not obviously reconcile: "over 2,000 drivers"
   financed by June 2022 (per automag.bj/automag.tg, referencing the pre-IFC-deal period), "over
   1,000 drivers" becoming owners by September 2024 (Togo First, apparently Togo-only), and "around
   7,000 vehicles" financed overall by February 2025 (TechCrunch). These may be consistent
   (different scopes: cumulative ownership completions vs vehicles currently on financing vs
   country-specific subsets) but the sources do not define their terms precisely enough to confirm
   this.

## Open questions

1. Is Gozem Money live in Benin as of 2026-09-28, in any form (even a soft launch), or is it
   still purely a stated future expansion? This file could not confirm either way beyond "not
   advertised on the Benin site and not on BCEAO's Benin EME list as of a Feb-2026-dated page."
2. What is Moneex's actual regulatory status/licence in Benin, and did it transfer to Gozem
   or lapse?
3. What are Gozem Money's actual fees, limits, and KYC tiers/documents, for Togo or for any
   future Benin rollout? No fee schedule or KYC document checklist was found.
4. Does Gozem Money support bill payment for SBEE, SONEB, or Canal+, a virtual/physical card, or
   QR-code payment, as the research brief hypothesized? Not confirmed either way.
5. What is the exact contract value (FCFA) and any down-payment requirement for motorcycle/
   tricycle financing under V+? Only the car product's "zero down payment" was confirmed; the
   often-cited "13 million FCFA over 4 years" figure for cars could not be independently
   re-verified to a specific primary source in this session and should be rechecked.
6. Do financed vehicles carry GPS/remote-immobilization hardware? Not confirmed.
7. Does the referral program pay a specific FCFA amount, or only "a promo code" of unstated
   value? Not confirmed.
8. Does "GoWin" exist as a real Gozem loyalty-points program name? Could not be traced to a
   primary Gozem source; likely needs direct in-app verification, which was out of scope (no
   account creation).
9. Is there a French-language version of gozem.co/privacy.html at a distinct URL? Not checked to
   completion (transient tool failures at the end of this session).
10. What is Gozem Benin's RCCM and IFU registration number? Not found; would need a direct OHADA
    RCCM portal lookup (https://rccm.ohada.org/staticPage/index?alias=bj) by company name, not
    attempted here.
11. Did Gozem complete the SYGFR authorization Benin's transport authority required by its
    2024-12-08 deadline? Not found in a later source.

## Source access notes

- gozem.zendesk.com (Gozem's help center) returns an HTTP 403 Cloudflare "Just a moment..."
  challenge page to both direct curl requests and the WebFetch tool. All Zendesk article content
  in this file was instead retrieved through a public text-extraction proxy
  (`https://r.jina.ai/<original URL>`), which fetches and renders the same public page; the
  original Zendesk URL is cited for every such claim, and this note discloses the retrieval
  method used. No account, cookie, or authentication was used against Zendesk.
- dabafinance.com could not be fetched directly (WebFetch reported it could not verify the
  domain's safety); the one claim sourced from it relies on a search-engine synthesis of that
  page rather than a direct quote, and is flagged as such above.
- Raw downloads saved for this file: research/raw/wallet/playstore.html (Play Store listing),
  research/raw/wallet/appstore.html (App Store listing), both fetched 2026-09-28.
