# Mockup specification (owner approval gate)

Status: approved by the owner on 2026-09-28 at 16:27, with the answers in section 8.

## Résumé (FR)

Cette spécification décrit la maquette cliquable (PWA) du clone Gozem Bénin : cinq
applications (client `/app`, chauffeur/coursier `/driver`, marchand `/merchant`, back
office `/admin`, site public `/`), front end uniquement, données fictives (XOF, +229,
Cotonou), sans backend ni paiement réel. Chaque écran est classé OBSERVÉ (capture ou
page réelle) ou INFÉRÉ (raison donnée). L'app chauffeur et le back office n'ont aucune
source publique et sont donc entièrement inférés à partir des besoins des autres
applications. Un service worker et un manifeste distincts par application isolent
`/app`, `/driver`, `/merchant`, `/admin` du site public, chacun installable séparément.
Un bandeau permanent non masquable rappelle qu'il s'agit d'une reproduction de test,
sans affiliation avec Gozem, sur chaque écran. Les comptes de test sont fictifs, un par
rôle, avec un code OTP fixe affiché à l'écran. Trois questions bloquantes restent
ouvertes avant construction : la politique de données fictives pour les montants non
confirmés, la présence ou non de la marque FedaPay sur l'écran de paiement de cette
phase sans paiement réel, et le nom/l'icône affichés lors de l'installation de l'app.

## 1. Scope reminder

Front end only. Fake Benin data (XOF, +229, Cotonou and other confirmed cities). No
backend, no real payment processor, no real auth. OTP accepts a fixed code shown on
screen. FR/EN switch on every route. Permanent non-dismissible disclaimer banner on
every surface. Installable, offline-capable PWA. Mobile first. `docker compose up`.

Out of scope for this mockup phase (see section 9): real SMS/OTP delivery, real
FedaPay integration, real Gozem Money e-money product (confirmed not live in Benin,
research/wallet-financing.md section 0), intercity ride booking (UNKNOWN, no Gozem
product found), women-only rides (UNKNOWN, no evidence found), scheduled/advance
booking (UNKNOWN), live trip-sharing to a third party (UNKNOWN), in-app SOS button
(UNKNOWN), merchant "Publicité" full campaign builder (placeholder tile only), any
numeric fee/limit sourced only through the r.jina.ai proxy in
research/wallet-financing.md (recharge min/max, referral cap and reward, V+ contract
FCFA total, withdrawal PIN flow) - these are treated as discarded per instruction, not
rebuilt as fact.

## 2. Screen list per app

Source key: OBSERVED = seen directly in a screenshot, HTML page, or store listing on
disk. INFERRED = not directly observed; reason given. Routes are under the prefixes
fixed in docs/specification/MOCKUP_ARCHITECTURE.md.

### 2.1 Customer super-app, `/app` (32 screens)

| id | route | screen | content | source |
|---|---|---|---|---|
| C-01 | /app/onboarding | Splash / brand | Black background, wordmark, "AFRICA'S SUPER APP" | OBSERVED, research/raw/commerce/consumer_ss7.png |
| C-02 | /app/onboarding/phone | Phone entry | +229 phone field, continue button | INFERRED, standard phone-based signup implied by Terms registration clause (research/wallet-financing.md 4.2) |
| C-03 | /app/onboarding/otp | OTP verification | Fixed test code shown on screen, no network call | INFERRED, owner scope decision (this brief) |
| C-04 | /app/home | Home / dashboard | Wallet balance strip, service grid (Zem, Tricycle, Voiture, Coursier, Crédit, Food, Shopping, Billetterie), merchant banner, bottom nav (Accueil, Aide, Adresses, Activités, Compte) | OBSERVED, research/raw/commerce/consumer_ss1.png |
| C-05 | /app/ride/destination | Pick destination | Map, address search, saved addresses | OBSERVED (map+picker on ss8), split into its own step for a clickable flow |
| C-06 | /app/ride/class | Choose class | Zem / Tricycle / Taxi / Clim+ / Eco+ with ETA and price, promo shortcut | OBSERVED, research/raw/commerce/consumer_ss8.png; classes per research/mobility.md 1.1-1.2 (Prestige and À l'heure excluded, not confirmed live in Benin) |
| C-07 | /app/ride/searching | Searching for driver | Spinner, "average wait ~5 min" copy | INFERRED, no direct screenshot; wait-time claim OBSERVED in Play Store description (mobility.md 1.1) |
| C-08 | /app/ride/assigned | Driver assigned | Champion card: name, rating, plate, call/message | OBSERVED, research/raw/commerce/consumer_ss2.png |
| C-09 | /app/ride/tracking | In trip | Live map, fare-details link | OBSERVED, research/raw/commerce/consumer_ss2.png |
| C-10 | /app/ride/arrived | Arrived / trip summary | Distance, duration, fare breakdown | INFERRED, standard step between trip end and payment, no direct screenshot |
| C-11 | /app/ride/pay | Pay | Wallet / cash / card choice, fare details | OBSERVED (payment methods, mobility.md 4; fare-details link on ss8); FedaPay branding pending Q2 |
| C-12 | /app/ride/rate | Rate driver | 1-5 star rating | INFERRED from Help Center article title (mobility.md 2), no screenshot |
| C-13 | /app/wallet | Wallet (Portefeuille) | Balance, recharge CTA, dated transaction list | OBSERVED, research/raw/commerce/consumer_ss3.png |
| C-14 | /app/wallet/recharge | Recharge wallet | Choose operator (MTN, Moov), amount, confirm | OBSERVED CTA "Recharger" (ss3); MTN/Moov OBSERVED (Play Store description, mobility.md 4); exact min/max discarded (r.jina.ai), field left generic |
| C-15 | /app/wallet/history | Transaction history (full list) | Dated list, same data as C-13 balance strip | OBSERVED as part of ss3, split into its own screen for a full list view |
| C-16 | /app/food | Food browse | Category chips, "Sélection de la semaine" merchant cards, promo banner | OBSERVED, research/raw/commerce/consumer_ss4.png |
| C-17 | /app/food/merchant | Merchant detail + catalogue | Cover photo, rating, minimum order, delivery fee, category-tabbed products | INFERRED from the merchant app's own storefront screen (merchant_ss3.png); no direct customer-side screenshot |
| C-18 | /app/food/cart | Cart (Panier) | Line items, subtotal, checkout CTA | INFERRED, bottom nav item "Panier" visible on ss4 |
| C-19 | /app/food/order | Order confirmation / tracking | Order status, ETA | INFERRED, bottom nav item "Commande" visible on ss4 |
| C-20 | /app/parcel | Parcel (Coursier) booking | Pickup/drop-off entry, price estimate | INFERRED from public Coursier service page (corporate_coursier_fr.html); no in-app screenshot, mirrors the ride-booking pattern |
| C-21 | /app/parcel/tracking | Parcel tracking | Live map, courier card | INFERRED, same reasoning as C-20, mirrors C-09 |
| C-22 | /app/shop | Shop (Achats) browse | Category grid, product cards | INFERRED, distinct "Shopping" grid icon on home (ss1) and a distinct public Achats service page (corporate_tg_achats.html); reuses C-16/C-18/C-19 pattern |
| C-23 | /app/tickets | Billetterie / my purchases | Tabs (À utiliser / Utilisés-Expirés), search, dated ticket list | OBSERVED, research/raw/commerce/consumer_ss5.png |
| C-24 | /app/topup | Achat de crédit | Airtime/data top-up, recharge for self or a contact, recent list | OBSERVED, research/raw/commerce/consumer_ss6.png |
| C-25 | /app/financing | Vehicle financing (V+) explainer | "Finance ta voiture sans apport initial" marketing copy, "become a Champion" CTA | INFERRED entry point, from gozem.co/bj/fr/ homepage V+ copy (wallet-financing.md 2.1); full application flow lives in /driver |
| C-26 | /app/promotions | Promo code entry | Code field, active promotions list | OBSERVED, promo field on ss8; Help Center titles (mobility.md 2) |
| C-27 | /app/referral | Referral (Parrainage) | Show/share referral code | INFERRED, program existence OBSERVED via a Gozem Bénin Facebook post reference (wallet-financing.md 3.2); exact mechanics (cap, reward window) sourced only through r.jina.ai, discarded, built generic |
| C-28 | /app/profile | Profile (Compte) | Name, phone, language, saved payment methods | INFERRED, bottom nav item "Compte" (ss1), no content screenshot |
| C-29 | /app/history | Trip/order history | Dated list (Activités) | OBSERVED, Help Center article title (mobility.md 2); bottom nav item "Activités" (ss1) |
| C-30 | /app/history/receipt | Invoice/receipt | Fare/order line items, total | OBSERVED, Help Center article title (mobility.md 2) |
| C-31 | /app/support | Help (Aide) | FAQ list, contact options | INFERRED, bottom nav item "Aide" (ss1); Help Center body content blocked by Cloudflare, generic content |
| C-32 | /app/addresses | Saved addresses | List, add/edit address | OBSERVED as bottom nav item name (ss1); content INFERRED |

### 2.2 Driver / courier app, `/driver` (12 screens, entirely inferred)

No public screenshot exists for `com.gozem.provider` (research/ui-inventory.md, driver
section). Every screen below is INFERRED from the customer and merchant flows plus the
vehicle-financing research, as instructed.

| id | route | screen | content | source |
|---|---|---|---|---|
| D-01 | /driver/onboarding | Splash | Champion branding | INFERRED, mirrors C-01 |
| D-02 | /driver/onboarding/phone | Phone entry | +229 phone field | INFERRED, mirrors C-02 |
| D-03 | /driver/onboarding/otp | OTP verification | Fixed test code | INFERRED, mirrors C-03 |
| D-04 | /driver/onboarding/documents | Document upload | National ID, driving licence, vehicle registration, insurance, technical inspection | INFERRED from required-documents list, wallet-financing.md 2.2 (press/corporate synthesis, not r.jina.ai) |
| D-05 | /driver/home | Home, online/offline toggle | Status switch, today's earnings summary | INFERRED, no direct source |
| D-06 | /driver/request | Incoming request | Rider/order, pickup, countdown, accept/decline | INFERRED, mirrors merchant order-detail structure (merchant_ss5.png, OBSERVED pattern reused) |
| D-07 | /driver/trip | Active trip / navigation | Map, rider contact, arrived/complete actions | INFERRED, no direct source |
| D-08 | /driver/trip/complete | Trip complete / collect payment | Fare summary, payment confirmation | INFERRED, mirrors merchant scan-to-pay confirmation structure (merchant_ss1.png) |
| D-09 | /driver/wallet | Driver wallet / earnings | Balance, recharge/withdraw, dated list | INFERRED, wallet exists app-wide (mobility.md 4) |
| D-10 | /driver/financing | Vehicle financing (V+) status | Program terms (zero down payment for cars, daily deduction), contract status | INFERRED from wallet-financing.md 2.1-2.3 (press/corporate sources); no in-app screenshot |
| D-11 | /driver/profile | Profile / documents | Name, phone, vehicle, document status | INFERRED, no direct source |
| D-12 | /driver/history | Trip / earnings history | Dated list | INFERRED, mirrors C-29 |

### 2.3 Merchant app, `/merchant` (14 screens)

| id | route | screen | content | source |
|---|---|---|---|---|
| M-01 | /merchant/onboarding | Splash / login | Merchant branding, login | INFERRED, mirrors C-01 |
| M-02 | /merchant/onboarding/otp | OTP verification | Fixed test code | INFERRED, mirrors C-03 |
| M-03 | /merchant/home | Home dashboard | Wallet balance, Recharger/Retrait/Historique, grid (My store, Commande, Scan to pay, Dispatcher, Publicité, Redeem, Coursier, Profil) | OBSERVED, research/raw/commerce/merchant_ss2.png |
| M-04 | /merchant/store | Store profile + catalogue | Cover photo, identity, rating, minimum order, delivery fee, category-tabbed products | OBSERVED, research/raw/commerce/merchant_ss3.png |
| M-05 | /merchant/orders | Orders list | Pause toggle, tabs (Nouvelles, En cours, Prêtes, Historique), prep time / lateness flag | OBSERVED, research/raw/commerce/merchant_ss6.png |
| M-06 | /merchant/orders/detail | Order detail (accept/decline) | Order number, prep countdown, customer name, itemised products, Accepter/Annuler | OBSERVED, research/raw/commerce/merchant_ss5.png |
| M-07 | /merchant/scan-to-pay | Scan to pay result | Green checkmark, payer identity, amount, reference, Fermer | OBSERVED, research/raw/commerce/merchant_ss1.png |
| M-08 | /merchant/coupon | Ticket/coupon redemption | Event details, "Coupon récupéré" state, purchaser identity, reference | OBSERVED, research/raw/commerce/merchant_ss4.png |
| M-09 | /merchant/wallet | Wallet (Recharger/Retrait/Historique) | Balance, actions, dated list | OBSERVED as grid entry points on ss2; own screen INFERRED split |
| M-10 | /merchant/dispatcher | Dispatcher | Assign delivery to a courier | INFERRED, entry point visible on ss2, destination screen not captured |
| M-11 | /merchant/redeem | Redeem | Enter/scan a redemption code | INFERRED, same reasoning |
| M-12 | /merchant/courier | Coursier | Request a merchant-initiated delivery | INFERRED, same reasoning |
| M-13 | /merchant/ads | Publicité | Placeholder: campaign list, "coming soon" state, not built out | INFERRED, entry point visible on ss2, no destination screen captured, out of scope for full build |
| M-14 | /merchant/profile | Profil | Business identity, contact, hours | INFERRED, entry point visible on ss2, content not captured |

### 2.4 Admin back office, `/admin` (7 screens, entirely inferred, no Gozem source)

No public source describes a Gozem admin interface (research/ui-inventory.md, admin
section: "UNKNOWN in full ... must be designed from the product's own functional
requirements"). The set below is derived only from the administrative counterpart each
other app's screens already imply (an approval step for D-04's documents, a resolution
path for C-31/C-12, a reconciliation view for C-13/D-09/M-09 wallets, a creation point
for C-26 promo codes). Owner should treat this section as provisional.

| id | route | screen | content | source |
|---|---|---|---|---|
| A-01 | /admin/login | Admin login | Email/password, no OTP | INFERRED, standard back-office pattern |
| A-02 | /admin/dashboard | Ops dashboard | Active rides/orders, drivers online, KPI tiles | INFERRED, functional necessity, no Gozem source |
| A-03 | /admin/drivers | Driver/courier approval queue | Pending documents (D-04), approve/reject | INFERRED, functional necessity |
| A-04 | /admin/merchants | Merchant approval queue | Pending merchant onboarding, approve/reject | INFERRED, functional necessity |
| A-05 | /admin/disputes | Dispute / support queue | Tickets from C-31 support and C-12 ratings | INFERRED, functional necessity |
| A-06 | /admin/payouts | Payout reconciliation | Driver/merchant wallet balances, payout status | INFERRED, functional necessity |
| A-07 | /admin/content | Content management | Promo codes (C-26), banners | INFERRED, functional necessity |

### 2.5 Public website, `/` (8 screens)

Single route per page; language is switched by the same shared LanguageSwitch
component used in every other app (per MOCKUP_ARCHITECTURE.md fixed contracts),
not by a separate `/en/` URL tree, for consistency across the mockup.

| id | route | screen | content | source |
|---|---|---|---|---|
| W-01 | / | Homepage | Hero, service overview, download CTAs, mission statement | OBSERVED, research/raw/commerce/homepage_bj.html, corporate_bj_root.html |
| W-02 | /services/ride | Ride service page | Zem, Tricycle, Taxi, Clim+, Eco+ descriptions | OBSERVED, site_corporate_bj_voiture.html, corporate_voiture.html |
| W-03 | /services/food | Food service page | Food delivery pitch | OBSERVED, corporate_tg_food.html (Togo template, structurally shared) |
| W-04 | /services/shop | Shop (Achats) service page | Shop/grocery pitch | OBSERVED, corporate_tg_achats.html (Togo template, structurally shared) |
| W-05 | /services/parcel | Coursier service page | Parcel delivery pitch | OBSERVED, corporate_coursier_fr.html |
| W-06 | /partners | Partners page | Partner logos/list | OBSERVED, partners_en.html |
| W-07 | /about | About / corporate | Mission ("faire sourire l'Afrique"), office presence | OBSERVED, site_corporate_bj_root.html, mobility.md 8 |
| W-08 | /legal | Terms & privacy summary | Section list of the 22-clause Terms and the 8-section Privacy Policy, plain-language summary | OBSERVED, wallet-financing.md 4.1-4.3 (website.gozem.co and gozem.co/privacy.html, not r.jina.ai) |

Total: 32 + 12 + 14 + 7 + 8 = 73 screens.

## 3. Journeys (ordered screen ids)

1. New customer, first ride (Zem): C-01, C-02, C-03, C-04, C-05, C-06, C-07, C-08, C-09, C-10, C-11, C-12
2. Returning customer, food order: C-04, C-16, C-17, C-18, C-19
3. Customer, shop order: C-04, C-22, C-18, C-19
4. Customer, parcel delivery: C-04, C-20, C-21
5. Customer, wallet top-up: C-04, C-13, C-14
6. Customer, buy and use a ticket: C-04, C-23
7. Customer, airtime top-up: C-04, C-24
8. Customer, promo code and referral: C-04, C-26, C-27
9. Customer, support and history: C-04, C-29, C-30, C-31
10. Driver, onboarding to first completed trip: D-01, D-02, D-03, D-04, D-05, D-06, D-07, D-08, D-09
11. Driver, vehicle financing: D-05, D-11, D-10
12. Merchant, fulfil an order: M-01, M-02, M-03, M-05, M-06
13. Merchant, scan to pay: M-03, M-07
14. Merchant, redeem a coupon: M-03, M-08
15. Admin, approve a new driver: A-01, A-02, A-03
16. Visitor, browse the site to a service page: W-01, W-02

## 4. Stack, layout, contracts (from MOCKUP_ARCHITECTURE.md)

| Choice | Justification |
|---|---|
| Vite 5 | Fastest dev/build loop, near-zero config, fits a 60 minute build |
| React 18 | Team familiarity, largest component ecosystem, fast to scaffold five apps |
| TypeScript 5 | Shared types for fake data and i18n keys catch mismatches across 3 parallel engineers |
| React Router 6 | Simple nested routes per app prefix, no server needed for a static PWA |
| vite-plugin-pwa 0.20 | Generates manifest and service worker (Workbox) with near-zero config |
| Zustand 4 | Tiny local state (language, fake session) without a backend or Redux ceremony |
| CSS Modules + design tokens (CSS custom properties) | No CSS framework lock-in, tokens map directly to Gozem brand colours |
| pnpm workspaces | Single repo, isolated packages per app, fast installs on a 16 GB machine |
| nginx:alpine | Tiny static file server, low memory footprint, standard PWA header support |
| Playwright 1.47 | One tool for smoke tests across all five apps and both languages |

Layout: `packages/design-system`, `packages/fake-data`, `packages/i18n` shared by five
apps (`apps/customer` at `/app`, `apps/driver` at `/driver`, `apps/merchant` at
`/merchant`, `apps/admin` at `/admin`, `apps/website` at `/`), built by nginx behind one
container. Fixed contracts: `tokens.css`; component list (`Banner`, `Button`, `Input`,
`OtpInput`, `Card`, `BottomNav`, `TopBar`, `LanguageSwitch`, `EmptyState`);
`fake-data/types.ts` (`User`, `Ride`, `Order`, `WalletTx`, `Vehicle`, `Merchant`);
i18n key naming `app.section.key`; each app's own typed `routes.ts`; `Banner` rendered
by a root layout in every app, non-dismissible, fixed height. Colour and font tokens
come from `research/brand/BRAND.md` (primary green `#179138` and font `Inter` are
OBSERVED in the public gozem.co theme CSS; other colours are INFERRED from screenshots).

## 5. Service worker scope decision

Decision: per-app service worker and manifest, one pair per build, each scoped to its
own route prefix (`/`, `/app/`, `/driver/`, `/merchant/`, `/admin/`). This is already
the direction fixed in MOCKUP_ARCHITECTURE.md ("single manifest and service worker per
app build"); this section makes the scope rule explicit and binding.

Mechanics: each app is built with its own Vite `base` equal to its route prefix, so
vite-plugin-pwa's `generateSW` emits that app's `sw.js` and registration script inside
that prefix, and the manifest's `scope` and `start_url` match the same prefix. Per the
Service Worker specification, a browser resolves overlapping registrations by the
longest matching scope: once a visitor has loaded `/app/` at least once, its `/app/`
scoped worker takes precedence for every `/app/*` request, regardless of whether a
root-scoped worker from the website is also registered.

Gate correction (delivery orchestrator): the longest-scope rule only holds once the
app worker is registered. On a first navigation to `/app/` after visiting `/`, the
website's root worker still controls the request, and Workbox's `navigateFallback`
would answer it with the website shell. The website build therefore also sets
`navigateFallbackDenylist` to `^/app/`, `^/driver/`, `^/merchant/` and `^/admin/`, so
those navigations go to the network (nginx) and the right app registers its own worker.
The smoke test below starts with the visit to `/`, which covers this case.

Reason: this avoids a single shared worker that would need to special-case four path
prefixes (fragile, easy to break on a route rename) and matches the requirement that
each app install separately with its own name/icon/start_url on the visitor's home
screen.

Smoke test verification (Playwright, added to the existing smoke suite): for each of
`/`, `/app/`, `/driver/`, `/merchant/`, `/admin/`, load the page, read
`navigator.serviceWorker.getRegistrations()`, and assert exactly one registration whose
`scope` equals `origin + prefix` (not `origin + '/'` for the four app prefixes). Then,
in the same browser context, visit `/` followed by `/app/`, and assert the `/app/` page
is controlled by a worker whose `scriptURL` contains `/app/`, not by the website's
worker. Finally, go offline (Playwright `context.setOffline(true)`) after a first
visit and assert the shell still renders for each prefix.

## 6. Fake data

Datasets (in `packages/fake-data`), all clearly fictitious: rides across Cotonou
communes plus Akpakpa, Fidjrossè, Calavi (research/mobility.md 1.7); 2-3 sample
merchants/restaurants and their product catalogues; sample parcel deliveries; wallet
transactions in XOF; a sample V+ financing contract status; a sample billetterie
event/ticket; promo codes using an obviously fictitious prefix (for example
`TESTGOZEM10`), never a real code found in research (`M324`, `CLIM800` are not reused).

Five fictitious test accounts, one per role, phone numbers in the Benin format:

| Role | Email | Phone |
|---|---|---|
| Client | client@gozem-copy.test | +229 97 00 00 01 |
| Driver | driver@gozem-copy.test | +229 97 00 00 02 |
| Courier | courier@gozem-copy.test | +229 97 00 00 03 |
| Merchant | merchant@gozem-copy.test | +229 97 00 00 04 |
| Admin | admin@gozem-copy.test | +229 97 00 00 05 |

Fixed OTP code: `123456`, shown as static, highlighted text on every OTP screen
(C-03, D-03, M-02); no SMS is sent, no network call is made.

## 7. Acceptance for the mockup

1. Every route listed in section 2 renders without a client-side error at 375 px and
   at 1280 px viewport width.
2. The disclaimer banner (FR and EN text as specified in the task) is visible and
   non-dismissible on every route.
3. The FR/EN switch changes visible text on every route, including the banner.
4. Each of the five apps is independently installable (its own manifest, name, icon,
   start_url).
5. After a first visit to a given app prefix, the app shell (shared components, last
   loaded screen's static markup) loads while offline, per the smoke test in section 5.
6. `docker compose up` serves all five entry URLs (`/`, `/app`, `/driver`, `/merchant`,
   `/admin`) with no additional setup step.

## 8. Blocking questions

Only questions whose answer changes what is built; the source and the task brief do
not resolve these.

1. Fake-data policy for fields whose real value is UNKNOWN or was discarded per this
   task's r.jina.ai instruction (wallet recharge min/max, referral reward amount and
   user cap, V+ financing contract total in FCFA): invent plausible round numbers for
   visual realism, or render these fields as generic, non-numeric placeholders?
2. This mockup phase has no real payment integration, but the project's general
   payment decision (PROJECT_DECISIONS.md) names FedaPay sandbox for later phases.
   Should the C-11 pay screen (and equivalent food/shop/parcel checkout screens) show
   FedaPay by name/logo as a "coming in the next phase" preview option, or omit any
   FedaPay reference until that integration actually exists?
3. The disclaimer banner exists so the reproduction is never mistaken for the real
   Gozem app. Should that same intent extend to the installed PWA's own name and icon
   (for example "Gozem Copy (Test)" instead of "Gozem"), or is the in-app banner alone
   sufficient and the installed app should use the exact Gozem name/icon?

### Owner answers (2026-09-28, 16:27)

1. Unknown or discarded values use plausible invented XOF figures, each marked
   "invented" in the mockup data and listed below.
2. FedaPay is shown by name and logo as a preview on the payment and checkout
   screens (C-11 and the food, shop and parcel checkouts). No real call is made.
3. The installed PWA uses the exact "Gozem" name and icon. The permanent in-app
   disclaimer banner stays mandatory on every screen.

Invented values (fictitious, for visual realism only):

| Field | Invented value |
|---|---|
| Wallet recharge minimum | 500 XOF |
| Wallet recharge maximum | 500,000 XOF |
| Referral reward per referred user | 1,000 XOF |
| Referral cap | 10 referrals |
| V+ financing contract total (car) | 6,500,000 XOF |
| V+ daily deduction (car) | 12,000 XOF |
| Sample ride fares (Zem, Tricycle, Taxi, Clim+, Eco+), Cotonou, about 5 km | 700, 900, 1,500, 2,500, 1,800 XOF |

## 9. Out of scope (explicit)

Real SMS/OTP delivery; real FedaPay integration; the real Gozem Money e-money product
(confirmed Togo-only, not Benin, research/wallet-financing.md section 0); a formal
intercity ride product; a women-only ride mode; scheduled/advance-booking rides; a
live trip-sharing-to-a-contact feature; an in-app SOS button; a full merchant
advertising campaign builder (M-13 stays a placeholder); any backend, database, real
authentication, or real payment processing; deployment outside `docker compose up` on
the local machine.
