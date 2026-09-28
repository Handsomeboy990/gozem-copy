import { AppShell, Button, Card } from "@gozem/design-system";
import { financingContract, formatXOF } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

/** C-25: Vehicle financing (V+) explainer. */
export function Financing() {
  const { t } = useT();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.financing.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card style={{ background: "var(--color-primary-tint)" }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>{t("customer.financing.pitch")}</p>
        <p style={{ marginBottom: 0 }}>{t("customer.financing.body")}</p>
      </Card>
      <Card>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{t("customer.financing.totalLabel")}</span>
          <strong>{formatXOF(financingContract.totalXof)}</strong>
        </p>
        <p style={{ display: "flex", justifyContent: "space-between", marginBottom: 0 }}>
          <span>{t("customer.financing.dailyLabel")}</span>
          <strong>{formatXOF(financingContract.dailyDeductionXof)}</strong>
        </p>
        <p style={{ fontSize: 12, color: "var(--color-grey)" }}>{t("common.invented")}</p>
      </Card>
      <Button>{t("customer.financing.cta")}</Button>
    </AppShell>
  );
}
