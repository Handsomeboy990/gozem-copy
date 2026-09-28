import { AppShell, BottomNav, Button, Card, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF } from "@gozem/fake-data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { merchantNavItems } from "./nav";

const WALLET_BALANCE_XOF = 5425;

const GRID_ITEMS: { key: string; labelKey: string; href: string }[] = [
  { key: "store", labelKey: "merchant.home.myStore", href: "/store" },
  { key: "orders", labelKey: "merchant.home.orders", href: "/orders" },
  { key: "scan", labelKey: "merchant.home.scanToPay", href: "/scan-to-pay" },
  { key: "dispatcher", labelKey: "merchant.home.dispatcher", href: "/dispatcher" },
  { key: "ads", labelKey: "merchant.home.ads", href: "/ads" },
  { key: "redeem", labelKey: "merchant.home.redeem", href: "/redeem" },
  { key: "courier", labelKey: "merchant.home.courier", href: "/courier" },
  { key: "coupon", labelKey: "merchant.home.coupon", href: "/coupon" },
  { key: "profile", labelKey: "merchant.home.profile", href: "/profile" },
];

export function Home() {
  const { t } = useT();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell
      topBar={<TopBar title={t("merchant.home.title")} />}
      bottomNav={<BottomNav items={merchantNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p>{t("merchant.home.wallet")}</p>
        <p style={{ fontSize: "1.75rem", fontWeight: 700 }}>{formatXOF(WALLET_BALANCE_XOF)}</p>
        <Button type="button" onClick={() => navigate("/wallet")}>
          {t("merchant.home.recharge")}
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate("/wallet")}>
          {t("merchant.home.withdraw")}
        </Button>
        <Button type="button" variant="ghost" onClick={() => navigate("/wallet")}>
          {t("merchant.home.historyShort")}
        </Button>
      </Card>
      <Card>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2, 0.5rem)" }}>
          {GRID_ITEMS.map((item) => (
            <ListItem key={item.key} title={t(item.labelKey)} onClick={() => navigate(item.href)} />
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
