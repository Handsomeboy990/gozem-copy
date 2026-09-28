import type { ReactNode } from "react";
import { AppShell } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { NavLink } from "react-router-dom";
import "./admin-layout.css";

interface NavItem {
  key: string;
  to: string;
  labelKey: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "dashboard", to: "/dashboard", labelKey: "admin.nav.dashboard" },
  { key: "drivers", to: "/drivers", labelKey: "admin.nav.drivers" },
  { key: "merchants", to: "/merchants", labelKey: "admin.nav.merchants" },
  { key: "disputes", to: "/disputes", labelKey: "admin.nav.disputes" },
  { key: "payouts", to: "/payouts", labelKey: "admin.nav.payouts" },
  { key: "content", to: "/content", labelKey: "admin.nav.content" },
];

/** Shared layout for every authenticated admin screen: sidebar nav on desktop, stacked on 375px. */
export function AdminLayout({ title, children }: { title: string; children: ReactNode }) {
  const { t } = useT();
  return (
    <div className="admin-shell">
      <AppShell
        topBar={
          <nav className="admin-nav" aria-label={t("admin.nav.ariaLabel")}>
            <span className="admin-nav__brand">{t("common.appName")} Admin</span>
            <ul className="admin-nav__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "admin-nav__link" + (isActive ? " admin-nav__link--active" : "")
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <h1 className="admin-page-title">{title}</h1>
        {children}
      </AppShell>
    </div>
  );
}
