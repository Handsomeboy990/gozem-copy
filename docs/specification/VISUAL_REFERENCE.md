# Visual reference (measured from public store screenshots)

Authorization: `docs/PROJECT_DECISIONS.md` rows Identity, Hosting, Repository,
Disclaimer (owner-authorized faithful reproduction, private repo, never
deployed publicly, permanent non-affiliation disclaimer). This note extracts
exact measurements under that scoped exception. It is direction for
`ui-ux-engineer` and `frontend-engineer` to build an original implementation
from; it is not a substitute for reading the reference images, and the
reference PNGs/JPG themselves stay under `research/raw/`, never copied into
the apps wholesale (only the small, named crops listed below are copied, as
authorized).

All eight `consumer_ss*.png` and six `merchant_ss*.png` files are 333x592 px
marketing renders (a phone mockup centred on a coloured background with a
one-line headline above it), not raw device screenshots. Measurements below
are taken on the phone's screen area inside that mockup, which was located by
scanning pixel columns/rows for the bezel edge on `consumer_ss1.png`: the
screen content spans approximately x:[63,263], y:[128,566] in the 333x592
source (200 px wide, 438 px tall). The same phone frame template is reused
across all eight consumer screenshots and separately across the six merchant
screenshots (merchant frame is a dark bezel, not green), so this bounding box
is applied to every image; per-image drift is +/-3 px, not re-derived for
each file given the time box. Scale factor used throughout: 375 / 200 =
1.875x (a raw px in the source phone area = 1.875 px at a 375 px viewport).

`shot1.jpg` in `research/raw/mobility/` (800x391) was opened and sampled: it
is fully white (RGB extrema (255,255,255) on every channel, all pixels) on
disk today, effectively empty. It carries no visual information; not used
below, and not cropped from.

## consumer_ss1.png -> C-04 /app/home (home / dashboard)

Top to bottom, in the 200x438 phone area, raw px then px at 375 width:

| section | raw y range | raw h | h @375w | notes |
|---|---|---|---|---|
| Top bar | 128-160 | 32 | 60 | white bg; avatar circle left, GOZEM wordmark centre-left, bell+badge right |
| Promo banner (photo) | 160-284 | 124 | 233 | rounded-corner photo card, dark gradient overlay bottom-left, white pill tag top-left ("Commande ta voiture"), white caption text bottom-left |
| Gap | 284-296 | 12 | 23 | white |
| Wallet strip | 296-332 | 36 | 68 | bg `#e2f1ff`; "Portefeuille" label + bold balance left, white pill button "+ Recharger" right |
| Gap | 332-336 | 4 | 8 | white |
| Service icon grid | 336-472 | 136 | 255 | 2 rows x 4 cols, circular tiles bg `#f3f5f4`, label below each in dark grey |
| "Recommandé pour vous" band | 472-536 | 64 | 120 | red gradient bg (`#9d222d` dark edge to `#c5313b` lighter edge), white bold heading + "Tout afficher" link, one merchant card visible, small yellow badge accent |
| Bottom nav | 536-566 | 30 | 56 | white bg, 5 items, active item ("Accueil") in brand green, rest grey |

Total phone screen height 438 raw -> 821 px @375 width (matches 375 x
~2.19 aspect, close to a modern phone screen).

Measured colours (hex, sampled pixel position in the 333x592 source):
- Brand green (marketing bg, and confirmed reused for the active bottom-nav
  icon / wordmark strokes): `#179138` at (166,0) and consistent across the
  green background field.
- Wallet strip background: `#e2f1ff` at (166,300), flat across (166,296) to
  (166,328).
- Service icon tile background: `#f3f5f4` at (84,350) and repeated at each
  tile centre column (x=84,132,180,228 at y=350/420).
- Icon glyph colours (row 2, y=420-422): Credit `#2a51ab`/`#3355ad` (blue),
  Food `#d76633`/`#de6d33` (orange), Shopping `#c8313e` (crimson), Billetterie
  `#ab0d26`/`#971c2e` (dark red).
- "Recommandé" band red: `#9d222d` at (100,485), `#c5313b` at (200,510)
  (diagonal gradient, dark to lighter).
- Yellow accent on that band: `#ffda23` and `#facb00`, sampled at (166,528)
  and (166,532).

Type scale (visual estimate, not pixel-measured per glyph given the time
box): wallet balance bold ~20-22px @375w; section headings ("Recommandé pour
vous") bold ~18px; icon tile labels ~12px regular; bottom nav labels ~11px.

Copy exactly as shown (FR): "Portefeuille", "+ Recharger", "Zem", "Tricycle",
"Voiture", "Coursier", "Crédit", "Food", "Shopping", "Billetterie",
"Recommandé pour vous", "Tout afficher", bottom nav "Accueil", "Aide",
"Adresses", "Activités", "Compte". Marketing headline above the phone (not
in-app copy): "Vos besoins quotidiens en une seule appli".

## consumer_ss2.png -> C-08 / C-09 /app/ride/assigned, /app/ride/tracking

Map fills the full screen behind a rounded white bottom sheet. Sheet, bottom
up: status line "En route vers votre destination" (bold, ~15px), driver row
(circular avatar left ~40px diameter, name + heart/rating emoji, star rating
"4.0" in green pill, vehicle description text below in grey), two round
action buttons (message, call) in brand green, bottom row of two pill links
"Portefeuille" and "Détails tarif" each with a small icon. A white circular
back button sits top-left over the map; two white circular map controls
(layers, locate-me) stack bottom-right above the sheet. Map pin (red circle
outline) marks a point of interest; a solid brand-green teardrop marks the
vehicle.

Copy (FR): "En route vers votre destination", "Portefeuille", "Détails
tarif". Marketing headline: "Transport / En 1 clic, un Champion vient et vous
amène à votre destination".

## consumer_ss3.png -> C-13 /app/wallet

Top to bottom (own phone-area scan at x=166, colours flat and clean on this
screenshot so read with more confidence than the visual-estimate screens):
- Header: back arrow (white) top-left, filter/settings icon top-right, label
  "Portefeuille" (small, translucent white) then bold "12 345 F" balance,
  white pill button "+ Recharger" top-right of the balance row. Header
  background flat blue `#0a67b1` (sampled repeatedly from y=0 to y=204 in the
  source, i.e. the header is tall, roughly 80 raw px of phone content ->
  150px @375w).
- List area background `#fafafa` / `#f2f2f2` for section dividers, grouped by
  month ("Mars 4 transactions", "Février 6 transactions" as light-grey
  section headers), each row: bold title, grey subtitle (reference /
  transaction detail), right-aligned amount in green for a credit (for
  example "+500 F") or in red/black for a debit (for example "-275 F"), and a
  small grey timestamp under the subtitle.

Measured colours: header blue `#0a67b1` (x166, multiple y from 0 to 204);
list background `#fafafa`/`#f2f2f2`.

Copy (FR, exact list entries visible): "Portefeuille", "12 345 F",
"+Recharger", "Mars", "4 transactions", "Recharge", "Par TMoney:
22892343322, Réf: 168976456-Gmgu45", "En attente...", "1 000 F", "Monnaie",
"Monnaie de la course: 24333434", "Solde portefeuille: 500 F", "+500 F",
"Paiement de la course", "Paiement de la course: 22727322", "Solde
portefeuille: 0 F", "-275 F", "Paiement de produit", "Paiement de la
commande 539317 avec OK Tacos", "Solde portefeuille: 275 F", "-275 F",
"Février", "6 transactions". Marketing headline: "Portefeuille / Payez en
espèces ou par carte, ou rechargez votre portefeuille via Mobile Money".

## consumer_ss4.png -> C-16 /app/food (and shared pattern for C-22 /app/shop)

Top to bottom: location row ("Livraison à" grey label, "Localisation
actuelle" bold + chevron, green; search icon right), horizontal scroll of
circular category chips with photo thumbnails (Tacos, Pasta, Fried Rice,
Burger, Pizza...) and a label under each, section heading "Sélection de la
Semaine" (bold), horizontally-scrollable merchant cards (rounded photo cover,
white heart/favourite toggle top-right, ETA pill "25-35 mins" overlapping the
photo bottom-right, merchant name bold, rating "4.2 (2179)" with a green
star, "Livraison à: 750 F" and cuisine tags below), second section "A ne pas
rater!!!!" with a green discount ribbon ("10% de réduction"). Bottom nav has
4 items this time (Food, Favori, Panier with a badge, Commande), not 5.

Copy (FR): "Livraison à", "Localisation actuelle", "Tacos", "Pasta", "Fried
Rice", "Burger", "Pizza", "Sélection de la Semaine", "OK Tacos", "4.2
(2179)", "Livraison à: 750 F", "Américain - Fastfood - Français - Indien -
Libanais...", "A ne pas rater!!!!", "Tout afficher", "Profitez des promos en
cours !!!", "10% de réduction", nav "Food", "Favori", "Panier", "Commande".
Marketing headline: "Food / Shopping / Commandez auprès d'une variété de
restaurants et de marchands près de chez vous".

Note: the merchant photo and name ("OK Tacos") belong to that merchant, not
to Gozem; not cropped, not reproduced, used here only as a textual record of
the layout pattern (a rounded photo card, badge, rating row).

## consumer_ss5.png -> C-23 /app/tickets (Billetterie)

Header: back arrow, centred title "Mes achats". Two-tab segmented control
("A Utiliser" underlined in green / active, "Utilisés / Expirés" grey),
search field below (grey rounded bar, magnifier icon, placeholder "Rechercher
un achat"), then a date-grouped list ("Aujourd'hui", then a calendar date),
each ticket row: ticket number + expiry pill top row, event/artist name
(bold), venue line, "Total payé" left / price bold right, small square event
thumbnail on the right edge, an optional strikethrough original price next to
a discount percentage.

Copy (FR): "Mes achats", "A Utiliser", "Utilisés / Expirés", "Rechercher un
achat", "Aujourd'hui", "N°: DP249549", "Exp : dans 8 jours", "TAYC en Concert
à Lomé", "Ticket VIP", "Total payé :", "4 500 F", "N°: DP249549", "Exp : dans
3 jours", "Elias Group", "VEGEDREAM au PALAIS des CONGRES de Lomé", "9 000
F", "-50%", "4 500 F", "21 décembre 2022", "Terry S.", "Ticket concert live
GROOVE ZIK Lomé". Marketing headline: "Billeterie / Accédez aux événements
autour de vous avec notre Billetterie en ligne".

## consumer_ss6.png -> C-24 /app/topup (Achat de crédit)

Header: back arrow, centred title "Recharge de crédit". Green-tinted rounded
call-to-action card ("Lancer une nouvelle recharge de crédit" with a phone
icon in a green circle), section "Acheter à nouveau" with a horizontal row of
circular contact avatars (first is "Moi-même" with a photo, others are
initials-in-circle placeholders like "HM" on a pink circle, or plain grey
circles), section "Recharges récentes" with rows: small avatar/photo left,
reference + green "Envoyé" status pill top row, greyed-out placeholder bar
(phone number masked), date/time left and amount bold right.

Copy (FR): "Recharge de crédit", "Lancer une nouvelle recharge de crédit",
"Acheter à nouveau", "Moi-même", "96 52 52...", "Hodabalo...", "Adjo D.",
"Recharges récentes", "Ref: 1452145281521", "Envoyé", "22 Avril 2022 -
16h45", "9 000 F", "20 Avril 2022 - 08h23", "12 500 F". Marketing headline:
"Achat de crédit / Rechargez du crédit ou de la donnée mobile pour vous et
vos proches".

## consumer_ss7.png -> C-01 /app/onboarding (splash)

Full-bleed photo (a person looking at a phone, warm indoor light) under a
dark gradient. Centred lockup near the top: "GOZEM" wordmark in white with
the stylised "O" (a ring built from two nested strokes, opening at the
bottom-left, reused as the standalone brand mark elsewhere) then "AFRICA'S
SUPER APP" in a smaller white tracked caption underneath. Two thin white
horizontal rules near the bottom, offset from one another, no button.

Copy: "GOZEM", "AFRICA'S SUPER APP" (marketing chrome only, this is the
in-app splash itself, not a headline over it).

## consumer_ss8.png -> C-05/C-06 /app/ride/destination, /app/ride/class

Map fills the top of the screen (route line in brand green with small green
"go" markers along it, a red-outline circular pin at the destination, white
circular back button top-left, two white circular map controls stacked
top-right). Below, a white rounded sheet: heading "Sélection du véhicule"
(bold), then a vertical list of vehicle-class rows, each: small icon left
(motorbike / tricycle / car / car with snowflake for AC), name + ETA
("à 3 min") stacked, price right-aligned bold, first row ("Zem") highlighted
with a pale green row background and a green radio dot. Two pill buttons
below the list ("Portefeuille", "Code Promo"), then a full-width rounded
green CTA button "Commander - Zem".

Copy (FR): "Sélection du véhicule", "Zem", "à 3 min", "300 F", "Tricycle",
"à 1 min", "950 F", "Taxi", "à 2 min", "1 550 F", "Clim+", "à 0 min", "2 050
F", "Portefeuille", "Code Promo", "Commander - Zem". Marketing headline:
"Transport / Motos, tricycles ou voitures, déplacez-vous en toute sécurité".

## merchant_ss1.png -> M-07 /merchant/scan-to-pay (result)

Dark rounded card on a black background: close ("x") top-left, a
scan-frame-corners icon top-right, large green filled checkmark circle
centred, bold heading "Paiement collecté", circular customer photo, bold
name, "Montant et Description" small grey label, very large bold amount
("2,500 F"), description paragraph in grey, green monospace-style reference
code, timestamp, full-width outlined green "Fermer" button at the bottom (not
filled, green border and text on white/near-white card).

Copy (FR): "Paiement collecté", "Mamadou D.", "Montant et Description",
"2,500 F", "Paiement de 5L de carburants sans plomb, d'huile à moteur
ZGH-350 Total, et de 3 flacons de lave injecteur turbo Max GTH", "Réf :
GG211026.1124.C4866", "26 Sept. 2021 · 11:24", "Fermer". Marketing headline:
"Effectuez les collectes de paiements."

## merchant_ss2.png -> M-03 /merchant/home (dashboard)

Top bar (white, black bezel around it): hamburger icon left, "GOZEM"
wordmark centred, bell icon right. Wallet card directly under it, flat blue
background `#176096` (sampled at x=166 from y=208 to y=252 in the source,
darker/more saturated than the customer wallet's `#0a67b1`), label
"Portefeuille" then bold balance "5 425 F", three inline icon+label actions
to its right ("Rechar.", "Retrait", "Histori."). Below, a white area with two
rows of 4 circular white icon tiles with a thin border and a green (or blue,
for two of them) glyph: row 1 "My store" (green shopfront), "Commande" (green
document/list, small red count badge "3" top-right of the tile), "Scan to
pay" (green scan-corners), "Dispatcher" (green signpost/diamond); row 2
"Publicité" (blue megaphone), "Redeem" (green scan/coupon), "Coursier"
(orange parcel/moped), "Profil" (blue person-in-circle).

Measured colours: wallet header blue `#176096` (x166,y208-252); icon glyph
green confirmed at (228,285-288) = `#008700`/`#349b4d`, consistent with the
customer app's brand green.

Copy (FR): "GOZEM", "Portefeuille", "5 425 F", "Rechar.", "Retrait",
"Histori.", "My store", "Commande", "Scan to pay", "Dispatcher", "Publicité",
"Redeem", "Coursier", "Profil". Marketing headline: "Découvrez l'application
partenaire Gozem" (with "partenaire Gozem" in the brand green).

## merchant_ss3.png -> M-04 /merchant/store (store profile + catalogue)

Full-width cover photo (store interior), white circular back button
top-left, small circular store logo badge overlapping the bottom of the
cover photo on the left, store name (bold), category subtitle (grey), a row
of three stats separated by dividers (rating with star, "avis" count;
minimum order amount; delivery fee amount), outlined green pill button
"Afficher les N avis" full width, a grey rounded search bar ("Rechercher un
Big Burger"), then a horizontal scroll of category tabs with emoji (green
underline on the active tab, "Boulangerie" active), and below, a product list
grouped by category with a checkbox, product name, and price.

Copy (FR): "2day Market", "Supermarché", "4,0", "1095 avis", "1 000 F",
"Achat min", "500 F", "Livraison", "Afficher les 1095 avis", "Rechercher un
Big Burger", "Boulangerie", "Fruits & Légume", "Boissons...", "Croissant
beurre". Marketing headline: "Prenez en main la gestion de votre commerce".

## merchant_ss4.png -> M-08 /merchant/coupon (ticket/coupon redemption)

Same dark-card layout as merchant_ss1 (close + scan icon top row). Event
cover image (16:9, rounded top corners), green pill status badge "Coupon
récupéré" with a ticket icon and the redemption date under it, event title
(bold), a truncated description paragraph, then a purchaser row (circular
avatar, name), and a details block: "Référence" (green value), "Date d'achat"
value, "Valable jusqu'à" value, "Détails de la vente" link at the bottom.

Copy (FR): "Coupon récupéré", "Récupéré le 25 mars 2022", "Top Gun :
Maverick - Première", "Après plus de 30 ans de service en tant que l'un des
meilleurs aviateurs de la Marine, Pete "Maverick" Mitchell est à sa place,
repoussant les limites en tant que pilote d'essai courageux et e...",
"Megan E.", "Référence", "GDP21548", "Date d'achat", "23 mai à 11:24",
"Valable jusqu'à", "27 mai 2022", "Détails de la vente". Marketing headline:
"Gérez vos ventes de tickets et coupons".

Note: the event cover image is a promotional still for "Top Gun: Maverick",
Paramount's trademarked film material, shown here only in the source
screenshot's description. It is not cropped, not reproduced anywhere in this
project; the reproducible pattern is the layout (cover image, status badge,
title, purchaser row, reference block), not this specific poster.

## merchant_ss5.png -> M-06 /merchant/orders/detail (accept/decline)

Pale green header band: back arrow, order number "N°: 2264" bold, "Temps
restant" small label with a clock icon and a bold green-outlined pill
countdown ("15 min") right-aligned, "A préparer pour : 12:39" and "Client :
Brandon C." lines. White content area: collapsible product block ("Produit
1" bold, chevron), each line item with a green checkmark, quantity x name,
price right-aligned, indented "Suppléments au choix" / "Suppléments Boissons"
sub-lines, a "Sous total" row, then a divider and bold "Total de la commande"
row. Two full-width buttons at the bottom: filled green "Accepter", outlined
red/white "Annuler la commande".

Copy (FR): "N°: 2264", "Temps restant", "15 min", "A préparer pour : 12:39",
"Client : Brandon C.", "Produit 1", "Double cheese Burger", "Pain maison
steak haché, fromage fondu, cornichons, oignon, moutarde", "2 500 F",
"Suppléments au choix", "1 x Frites de pommes", "400 F", "Suppléments
Boissons", "1 x Coca-Cola", "500 F", "Sous total", "3 400 F", "Total de la
commande", "3 400 F", "Accepter", "Annuler la commande". Marketing headline:
"Gérez les commandes en autonomie".

## merchant_ss6.png -> M-05 /merchant/orders (list)

Green header bar (flat brand green, not the pale band of ss5): back arrow,
centred title "Commandes", right a white pill toggle with a pause icon and
"Pause" label. Below, white content: "3 nouvelles commandes" bold left, "Trier"
dropdown label with chevron right, then a list of order rows: order number +
customer name + time (grey, small) top-left, price bold under it, right side
either a green-outlined pill "A préparer pour: HH:MM" or, for a late order, a
red "En retard de" label with a bold red value ("3 jours"). Bottom nav, 4
tabs: "Nouvelles" (active, green + underline), "En cours", "Prêtes",
"Historique".

Copy (FR): "Commandes", "Pause", "3 nouvelles commandes", "Trier", "N°:
2264", "Brandon C. · 12:24", "A préparer pour", "3 400 F", "12:39", "N°:
2263", "Abdoulaye K. · 12:00", "5 300 F", "12:20", "N°: 2262", "Louisa A. ·
26 juin.", "8 900 F", "En retard de", "3 jours", "Nouvelles", "En cours",
"Prêtes", "Historique". Marketing headline: "Ne manquez jamais une
commande".

## Visual language (tokens to add or change)

Colours (design tokens, names are directional, not the reference's variable
names):
- `color.brand.green` = `#179138` (primary brand green; consumer app chrome,
  active icons, CTAs).
- `color.brand.green.icon` = `#008700` (a slightly punchier green used for
  small glyphs, sampled on the merchant grid; close enough to the primary
  green to treat as one token with a light tint/shade pair rather than two
  separate hues).
- `color.wallet.customer` = `#0a67b1` (customer wallet header blue).
- `color.wallet.merchant` = `#176096` (merchant wallet header blue, darker
  navy than the customer one; keep as a distinct token, do not merge).
- `color.surface.wallet-strip` = `#e2f1ff` (light blue strip behind the home
  balance summary).
- `color.surface.tile` = `#f3f5f4` (neutral circular icon-tile background,
  used consistently for every service icon).
- `color.accent.red` = a two-stop gradient from `#9d222d` to `#c5313b` (the
  "Recommandé pour vous" band; also close to the merchant "En retard de" red
  and the debit-amount red in the wallet list, worth a single semantic
  `color.danger`/`color.promo` token rather than three separate reds).
- `color.accent.yellow` = `#ffda23` / `#facb00` (small promo/badge accents
  only, never a large surface).
- `color.icon.blue` = `#2a51ab` (Crédit / Publicité / Profil glyphs).
- `color.icon.orange` = `#d76633` (Food / Coursier glyphs).
- `color.text.grey` = mid-grey observed consistently for subtitles and
  timestamps across every screen (list subtitle, ETA caption, review count);
  not pixel-sampled individually, treat as a single `color.text.muted` token
  in the 40-55% black range and tune it in the implementation rather than
  copying an exact reference value here.

Radii and shadows (visual estimate, this reference is too small/compressed
to measure a precise radius or blur in px with confidence): every photo
card, wallet strip, bottom sheet and modal card uses a consistently large
corner radius relative to its size (roughly a "medium" 12-16px radius token
at 375px width for small cards, larger, near-20px, for the home promo banner
and the bottom sheets); icon tiles are full circles; buttons are full
pill-radius. Shadows are soft and shallow, used only to lift a sheet or a
floating circular control off the map/photo behind it, never as a heavy card
shadow on flat list rows.

Type scale (visual estimate, see per-screen notes above for the two screens
where flat colour made reading easier; not pixel-measured glyph by glyph
elsewhere): a bold "amount"/heading size around 18-22px @375w, a bold
"title" size around 15-16px, a regular "body" size around 13-14px, and a
"caption"/muted size around 11-12px, reused everywhere (list rows, cards,
nav labels) rather than a wider scale. Icon style throughout is a filled,
two-tone flat illustration (not an outline/stroke icon set): each service or
action glyph is a small flat-colour pictogram inside a circular or square
tile, not a line icon.

Bottom-nav spec (customer app, 5 items on the home/main tab group, 4 items
on the food/shop tab group): fixed to the viewport bottom, white background,
icon above a small label, active item in brand green (icon + label + a green
accent, for example an underline on the merchant orders list), inactive
items in muted grey, no dividers between items, roughly 56px tall @375w
including safe-area padding.

Top-bar spec: customer app shows a circular avatar (left), the GOZEM
wordmark centred-left, a bell icon with a small red numeric badge (right), on
a white background, roughly 60px tall @375w; sub-screens (wallet, tickets,
top-up, ride flows) replace this with a back arrow + centred page title
pattern instead, keeping the same white background and height. Merchant app
top bar swaps the avatar for a hamburger icon, keeps the centred GOZEM
wordmark and the bell.

Card styles: three recurring card shapes across both apps: (1) a full-bleed
rounded photo card with a bottom-left text/badge overlay (home promo banner,
food merchant cards, coupon event cover); (2) a flat white list row with a
leading small icon/avatar, a two-line text stack, and a trailing bold value
(wallet transactions, order list, ticket list); (3) a bottom-sheet/modal card
with a large centred status icon or amount and one or two full-width
buttons (scan-to-pay result, order accept/decline, ride driver-assigned
sheet). Every app should share these three as reusable components rather
than rebuilding a bespoke card per screen.
