import { Link, useNavigate } from "react-router-dom";
import { BottomNav, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";

/** Outline icon set for the bottom nav, per the visual reference (flat outline strokes, not filled). */
function NavIcon({ path }: { path: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const NAV_ICON_PATHS: Record<string, string> = {
  home: "M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9",
  support: "M12 17h.01M12 14c0-2 2-2 2-4a2 2 0 1 0-4 0M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  addresses: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  activity: "M12 7v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  profile: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0",
};

/** Shared bottom navigation, wired to react-router Link (design-system stays router-agnostic). */
export function CustomerBottomNav({ current }: { current: string }) {
  const { t } = useT();
  const items = [
    { key: "home", label: t("customer.nav.home"), href: "/home" },
    { key: "support", label: t("customer.nav.support"), href: "/support" },
    { key: "addresses", label: t("customer.nav.addresses"), href: "/addresses" },
    { key: "activity", label: t("customer.nav.activity"), href: "/history" },
    { key: "profile", label: t("customer.nav.profile"), href: "/profile" },
  ].map((item) => ({
    ...item,
    current: item.key === current,
    icon: <NavIcon path={NAV_ICON_PATHS[item.key]} />,
  }));

  return (
    <BottomNav
      items={items}
      renderLink={(item, children) => (
        <Link key={item.key} to={item.href}>
          {children}
        </Link>
      )}
    />
  );
}

/** Shared top bar with a back control that preserves history when no explicit target is given. */
export function BackTopBar({ title, to }: { title: string; to?: string }) {
  const navigate = useNavigate();
  const { t } = useT();
  return (
    <TopBar
      title={title}
      leading={
        <button
          type="button"
          aria-label={t("common.back")}
          onClick={() => (to ? navigate(to) : navigate(-1))}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ←
        </button>
      }
    />
  );
}

/** Home top bar: avatar left, GOZEM wordmark centre-left, bell with badge right (C-04 reference). */
export function HomeTopBar({ notificationCount = 0 }: { notificationCount?: number }) {
  const { t } = useT();
  return (
    <TopBar
      leading={
        <img
          src={`${import.meta.env.BASE_URL}ref/avatar-placeholder.png`}
          alt={t("customer.home.avatarAlt")}
          style={{ width: 32, height: 32, borderRadius: "999px", objectFit: "cover", display: "block" }}
        />
      }
      title={
        <img
          src={`${import.meta.env.BASE_URL}ref/logo-gozem-topbar.png`}
          alt="Gozem"
          className="gz-topbar__logo"
        />
      }
      trailing={
        <button
          type="button"
          aria-label={t("customer.home.notificationsAlt")}
          style={{ position: "relative", background: "none", border: "none", cursor: "pointer", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {notificationCount > 0 && (
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                minWidth: 16,
                height: 16,
                borderRadius: "999px",
                background: "var(--color-danger)",
                color: "var(--color-white)",
                fontSize: 10,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 3px",
              }}
            >
              {notificationCount}
            </span>
          )}
        </button>
      }
    />
  );
}
