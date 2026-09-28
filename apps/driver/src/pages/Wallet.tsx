import { AppShell, BottomNav, Button, Card, EmptyState, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, walletTx } from "@gozem/fake-data";
import { Link, useLocation } from "react-router-dom";
import { driverNavItems } from "./nav";

export function Wallet() {
  const { t } = useT();
  const location = useLocation();
  const balance = walletTx.reduce((sum, tx) => sum + (tx.type === "credit" ? tx.amountXof : -tx.amountXof), 0);

  return (
    <AppShell
      topBar={<TopBar title={t("driver.wallet.title")} />}
      bottomNav={<BottomNav items={driverNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p>{t("driver.wallet.balance")}</p>
        <p style={{ fontSize: "1.75rem", fontWeight: 700 }}>{formatXOF(balance)}</p>
        <Button type="button">{t("driver.wallet.recharge")}</Button>
        <Button type="button" variant="secondary">
          {t("driver.wallet.withdraw")}
        </Button>
      </Card>
      <Card>
        <h2 style={{ fontSize: "1rem" }}>{t("driver.wallet.history")}</h2>
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
