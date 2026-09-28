# Sources for research/brand/BRAND.md

## Fetched this session (2026-09-28), one curl request each, 2s apart, no
retries, no bypass of any protection (`robots.txt` at the site root returned
404, no disallow rules encountered)

- https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/custom.css?ver=1790603290
  -> research/raw/brand/custom.css (HTTP 200, 18094 bytes)
- https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/component.css
  -> research/raw/brand/component.css (HTTP 200, 6533 bytes)
- https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/css/style.css
  -> HTTP 404 (nginx default error page, 146 bytes); response discarded, not
  saved to disk
- https://gozem.co/bj/wp-content/uploads/sites/6/2020/03/gozem-logo-hq-150x150.png
  -> research/brand/gozem-logo-hq-150x150.png (HTTP 200, 3391 bytes, PNG
  150x150)
- https://gozem.co/bj/wp-content/uploads/sites/6/2020/03/gozem-logo-hq.png
  -> research/brand/gozem-logo-hq.png (HTTP 200, 20111 bytes, PNG 650x160;
  larger variant, URL found in the same JSON-LD/uploads path as the
  150x150 one while re-reading research/raw/commerce/homepage_bj.html, not
  itself linked by a distinct HTML tag)
- https://gozem.co/bj/wp-content/uploads/sites/6/2019/10/favicon-1-150x150.png
  -> research/brand/favicon-1-150x150.png (HTTP 200, 5776 bytes, PNG 150x150)
- https://gozem.co/bj/wp-content/uploads/sites/6/2019/10/favicon-1.png
  -> research/brand/favicon-1.png (HTTP 200, 9996 bytes, PNG 250x250)

No `.svg` logo was found: the only `.svg` reference in
`research/raw/commerce/homepage_bj.html` is the WordPress core emoji sprite
path (`https://s.w.org/images/core/emoji/17.0.2/svg/`), unrelated to the
Gozem brand, so it was not fetched.

## Already-downloaded files re-read this session (2026-09-28)

- local: research/raw/commerce/homepage_bj.html
  public URL: https://gozem.co/bj/
  date on disk: 2026-09-28 (pre-existing)
- local: research/raw/commerce/consumer_ss1.png through consumer_ss8.png (8
  files)
  public source: Google Play Store listing screenshots for `com.gozem`
  date on disk: 2026-09-28 (pre-existing)
- local: research/raw/commerce/merchant_ss1.png through merchant_ss6.png (6
  files)
  public source: Google Play Store listing screenshots for
  `com.gozem.merchant`
  date on disk: 2026-09-28 (pre-existing)

## Third-party brand assets (2026-09-28)

- apps/customer/public/fedapay-logo.svg <- https://fedapay.com/_next/static/media/logo_fedapay.f31cf8ed.svg (date 2026-09-28; third-party brand shown as a payment preview)

## URLs referenced but not fetched

- https://gozem.co/bj/wp-content/themes/gozem-revamp-theme/assets/plugins/css/font-awesome.css?ver=6.7.2
  (Font Awesome icon-font CSS, referenced in `<link rel="stylesheet">` in
  `homepage_bj.html` line 88, name only used in BRAND.md, file itself not
  fetched: out of scope for this pass, which targeted the theme's own
  colour/font CSS)
