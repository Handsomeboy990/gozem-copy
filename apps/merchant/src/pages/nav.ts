import type { BottomNavItem } from "@gozem/design-system";

/** Shared bottom navigation items for the merchant app. */
export function merchantNavItems(t: (key: string) => string, pathname: string): BottomNavItem[] {
  return [
    { key: "home", label: t("merchant.nav.home"), href: "/home", current: pathname === "/home" },
    { key: "orders", label: t("merchant.nav.orders"), href: "/orders", current: pathname === "/orders" },
    { key: "wallet", label: t("merchant.nav.wallet"), href: "/wallet", current: pathname === "/wallet" },
    { key: "profile", label: t("merchant.nav.profile"), href: "/profile", current: pathname === "/profile" },
  ];
}
