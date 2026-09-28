import { AppShell, BottomNav, Button, Card, EmptyState, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, walletTx } from "@gozem/fake-data";
import { Link, useLocation } from "react-router-dom";
import { merchantNavItems } from "./nav";

const BALANCE_XOF = 5425;

export function Wallet() {
  const { t } = useT();
  const location = useLocation();

  return (
    <AppShell
      topBar={<TopBar title={t("merchant.wallet.title")} />}
      bottomNav={<BottomNav items={merchantNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p>{t("merchant.wallet.balance")}</p>
        <p style={{ fontSize: "1.75rem", fontWeight: 700 }}>{formatXOF(BALANCE_XOF)}</p>
        <Button type="button">{t("merchant.wallet.recharge")}</Button>
        <Button type="button" variant="secondary">
          {t("merchant.wallet.withdraw")}
        </Button>
      </Card>
      <Card>
        <h2 style={{ fontSize: "1rem" }}>{t("merchant.wallet.history")}</h2>
        {walletTx.length === 0 ? (
          <EmptyState title={t("common.empty")} />
        ) : (
          walletTx.map((tx) => (
            <ListItem
              key={tx.id}
              title={tx.label}
              subtitle={`${tx.type === "credit" ? "+" : "-"}${formatXOF(tx.amountXof)} · ${new Date(tx.createdAt).toLocaleDateString()}`}
            />
          ))
        )}
      </Card>
    </AppShell>
  );
}
