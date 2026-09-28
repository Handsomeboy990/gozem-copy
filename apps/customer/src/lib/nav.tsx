import { Link, useNavigate } from "react-router-dom";
import { BottomNav, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";

/** Shared bottom navigation, wired to react-router Link (design-system stays router-agnostic). */
export function CustomerBottomNav({ current }: { current: string }) {
  const { t } = useT();
  const items = [
    { key: "home", label: t("customer.nav.home"), href: "/home" },
    { key: "support", label: t("customer.nav.support"), href: "/support" },
    { key: "addresses", label: t("customer.nav.addresses"), href: "/addresses" },
    { key: "activity", label: t("customer.nav.activity"), href: "/history" },
    { key: "profile", label: t("customer.nav.profile"), href: "/profile" },
  ].map((item) => ({ ...item, current: item.key === current }));

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
