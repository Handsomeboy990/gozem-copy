import { AppShell, BottomNav, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { financingContract, formatXOF } from "@gozem/fake-data";
import { Link, useLocation } from "react-router-dom";
import { driverNavItems } from "./nav";

export function Financing() {
  const { t } = useT();
  const location = useLocation();
  const remaining = financingContract.totalXof - financingContract.paidXof;

  return (
    <AppShell
      topBar={<TopBar title={t("driver.financing.title")} />}
      bottomNav={<BottomNav items={driverNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p>{t("driver.financing.terms")}</p>
        <p>
          <strong>{t("driver.financing.status")}</strong>: {t("driver.financing.active")}
        </p>
        <p>
          <strong>{t("driver.financing.total")}</strong>: {formatXOF(financingContract.totalXof)}
        </p>
        <p>
          <strong>{t("driver.financing.paid")}</strong>: {formatXOF(financingContract.paidXof)}
        </p>
        <p>
          <strong>{t("driver.financing.remaining")}</strong>: {formatXOF(remaining)}
        </p>
        <p>
          <strong>{t("driver.financing.daily")}</strong>: {formatXOF(financingContract.dailyDeductionXof)}
        </p>
        <p>
          <em>{t("common.invented")}</em>
        </p>
      </Card>
    </AppShell>
  );
}
