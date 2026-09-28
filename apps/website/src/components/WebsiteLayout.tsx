import type { ReactNode } from "react";
import { AppShell } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { Link, useLocation } from "react-router-dom";
import "./website-layout.css";

interface NavItem {
  key: string;
  to: string;
  labelKey: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", to: "/", labelKey: "website.nav.home" },
  { key: "ride", to: "/services/ride", labelKey: "website.nav.ride" },
  { key: "food", to: "/services/food", labelKey: "website.nav.food" },
  { key: "shop", to: "/services/shop", labelKey: "website.nav.shop" },
  { key: "parcel", to: "/services/parcel", labelKey: "website.nav.parcel" },
  { key: "partners", to: "/partners", labelKey: "website.nav.partners" },
  { key: "about", to: "/about", labelKey: "website.nav.about" },
  { key: "legal", to: "/legal", labelKey: "website.nav.legal" },
];

/** Shared layout for every public website page: logo, nav, banner and language switch via AppShell. */
export function WebsiteLayout({ children }: { children: ReactNode }) {
  const { t } = useT();
  const location = useLocation();
  return (
    <AppShell
      topBar={
        <nav className="site-nav" aria-label={t("website.nav.ariaLabel")}>
          <Link to="/" className="site-nav__brand">
            <img src="/gozem-logo-hq.png" alt={t("common.appName")} className="site-nav__logo" />
          </Link>
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className="site-nav__link"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      }
    >
      {children}
    </AppShell>
  );
}
