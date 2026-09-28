# Gozem UI inventory (Benin reproduction), by app

Access date 2026-09-28. One line per screen: what it shows, and its source
(a file already on disk, or OBSERVED/INFERRED per research/README.md
convention). Screens are named descriptively; Gozem's own in-app screen
names are not all public.

## Customer app (consumer)

1. Splash / brand screen: black background, wordmark, "AFRICA'S SUPER APP".
   OBSERVED, research/raw/commerce/consumer_ss7.png
2. Home / dashboard: wallet balance strip, service grid (Zem, Tricycle,
   Voiture, Coursier, Crédit, Food, Shopping, Billetterie), "Recommandé pour
   vous" merchant banner, bottom nav (Accueil, Aide, Adresses, Activités,
   Compte). OBSERVED, research/raw/commerce/consumer_ss1.png
3. Ride-class selection: map + vehicle picker (Zem/Tricycle/Taxi/Clim+ with
   ETA and price), wallet/promo-code shortcuts, "Commander" CTA. OBSERVED,
   research/raw/commerce/consumer_ss8.png
4. Ride tracking (en route): live map, driver ("Champion") card with rating,
   plate, call/message actions, fare-details link. OBSERVED,
   research/raw/commerce/consumer_ss2.png
5. Wallet ("Portefeuille"): balance, recharge CTA, dated transaction list.
   OBSERVED, research/raw/commerce/consumer_ss3.png
6. Food / Shopping ordering: category chips, "Sélection de la Semaine"
   merchant cards with rating/ETA, promo banner, bottom nav (Food, Favori,
   Panier, Commande). OBSERVED, research/raw/commerce/consumer_ss4.png
7. Billetterie (ticketing) / "Mes achats": tab (À Utiliser / Utilisés-
   Expirés), search, dated ticket list with price and expiry. OBSERVED,
   research/raw/commerce/consumer_ss5.png
8. Airtime/data top-up ("Achat de crédit"): "recharge for self or others"
   contact picker, recent recharges list. OBSERVED,
   research/raw/commerce/consumer_ss6.png
9. Driver/order rating screen. INFERRED from Help Center article title
   ("J'aimerais donner mon avis sur un champion"), no screenshot; see
   research/mobility.md section 2.
10. Trip history ("Historique") tab. INFERRED from Help Center article
    title, no screenshot; see research/mobility.md section 2.
11. Invoice/receipt view. INFERRED from Help Center article title, no
    screenshot; see research/mobility.md section 2.
12. Promo code entry. INFERRED from Help Center article titles and the promo
    field visible on screen 3 above; see research/mobility.md section 2.

Total: 8 screens OBSERVED directly from screenshots, 4 more INFERRED from
Help Center titles/UI hints, no direct screenshot for those 4.

## Driver / courier app ("Gozem Champion", package `com.gozem.provider`)

No public screenshot was obtained for this app this session or in prior
research (Play Store screenshot extraction failed; see research/mobility.md
section 6). Everything below is INFERRED from the app's existence, its
package name, and the customer-app/merchant-app screens that reference
driver-facing concepts.

1. Driver home / online-offline toggle. INFERRED (standard for this app
   category; no direct source).
2. Incoming ride/order request screen. INFERRED, no direct source.
3. Navigation / active-trip screen. INFERRED, no direct source.
4. Driver wallet / earnings. INFERRED, no direct source (Gozem Money wallet
   exists per research/mobility.md section 4, applies app-wide).
5. Driver profile / documents. INFERRED, no direct source.

Total: 0 screens OBSERVED, 5 INFERRED as an open gap; flagged for a
follow-up research pass once Bash/network access is restored (Play Store
listing for `com.gozem.provider` was not reachable this session).

## Merchant app ("Gozem Marchand", package `com.gozem.merchant`)

1. Payment collected confirmation (scan-to-pay result): green checkmark,
   payer identity, amount/description, reference, "Fermer". OBSERVED,
   research/raw/commerce/merchant_ss1.png
2. Home dashboard: wallet balance + Recharger/Retrait/Historique, grid (My
   store, Commande, Scan to pay, Dispatcher, Publicité, Redeem, Coursier,
   Profil). OBSERVED, research/raw/commerce/merchant_ss2.png
3. Store/commerce profile + catalogue: cover photo, store identity, rating,
   minimum order and delivery fee, search, category-tabbed product list.
   OBSERVED, research/raw/commerce/merchant_ss3.png
4. Ticket/coupon redemption: event details, "Coupon récupéré" state,
   purchaser identity, reference and validity dates. OBSERVED,
   research/raw/commerce/merchant_ss4.png
5. Order detail (accept/decline): order number, prep countdown, customer
   name, itemised products with add-ons, subtotal/total, Accepter/Annuler.
   OBSERVED, research/raw/commerce/merchant_ss5.png
6. Orders list ("Commandes"): pause toggle, tabs (Nouvelles, En cours,
   Prêtes, Historique), sortable list with prep time / lateness flag.
   OBSERVED, research/raw/commerce/merchant_ss6.png

Total: 6 screens OBSERVED directly from screenshots, 0 INFERRED gap beyond
what these 6 already establish (dispatcher, publicité and redeem entry
points are visible as grid items on screen 2 but their own destination
screens were not captured; counted as implied, not separately observed).

## Admin back office

No public source describes or shows a Gozem admin/back-office interface;
this is an internal tool, never exposed on the public marketing site, app
stores, or press. UNKNOWN in full.

1-N. All admin screens (ops dashboard, dispute handling, driver/merchant
approval, payout reconciliation, content management, etc.) are UNKNOWN, not
observable from any public source. This must be designed from the product's
own functional requirements at the specification stage, not from a Gozem
reference; flagged here rather than guessed.

Total: 0 screens OBSERVED, 0 safely INFERRED (any inference here would be
invention, not research); left as an explicit open item for the
specification phase.

## Public website

1. Benin homepage (`gozem.co/bj/`). OBSERVED,
   research/raw/commerce/homepage_bj.html
2. Global/English homepage. OBSERVED,
   research/raw/commerce/homepage_en.html
3. Corporate Benin root/homepage (`website.gozem.co/corporate-bj/`).
   OBSERVED, research/raw/commerce/corporate_bj_root.html and
   research/raw/mobility/site_corporate_bj_root.html /
   site_corporate_bj_home.html
4. Corporate Benin, English variant. OBSERVED,
   research/raw/mobility/site_corporate_bj_en.html
5. Car/"Voiture" service page (Benin). OBSERVED,
   research/raw/commerce/corporate_bj_root.html cross-ref and
   research/raw/mobility/site_corporate_bj_voiture.html,
   corporate_voiture.html
6. Gas/fuel service page (Benin). OBSERVED,
   research/raw/commerce/corporate_bj_gas.html
7. Coursier (courier/parcel) service page (FR). OBSERVED,
   research/raw/commerce/corporate_coursier_fr.html
8. Food service page (Togo template, structurally shared). OBSERVED,
   research/raw/commerce/corporate_tg_food.html
9. Achats/shop service page (Togo template, structurally shared). OBSERVED,
   research/raw/commerce/corporate_tg_achats.html
10. Partners page (EN). OBSERVED, research/raw/commerce/partners_en.html
11. Help Center home (Zendesk), access blocked by Cloudflare challenge;
    titles only known. OBSERVED (title/snippet only, not full page); see
    research/mobility.md section 5.2 and 8.

Total: 10 screens/pages OBSERVED with full or partial HTML on disk, 1 more
OBSERVED at title level only (Help Center, access-blocked by design, not
pursued further per boundaries).
