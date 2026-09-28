import type { BottomNavItem } from "@gozem/design-system";

/** Shared bottom navigation items for the driver/courier app. */
export function driverNavItems(t: (key: string) => string, pathname: string): BottomNavItem[] {
  return [
    { key: "home", label: t("driver.nav.home"), href: "/home", current: pathname === "/home" },
    { key: "wallet", label: t("driver.nav.wallet"), href: "/wallet", current: pathname === "/wallet" },
    { key: "history", label: t("driver.nav.history"), href: "/history", current: pathname === "/history" },
    { key: "profile", label: t("driver.nav.profile"), href: "/profile", current: pathname === "/profile" },
  ];
}
