import { useState } from "react";
import { AppShell, Button, Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

const referralCode = "AICHA-GZ10";

/** C-27: Referral (Parrainage). */
export function Referral() {
  const { t } = useT();
  const [shared, setShared] = useState(false);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.referral.title")} to="/promotions" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card style={{ textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>{t("customer.referral.codeLabel")}</p>
        <p style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: 2 }}>{referralCode}</p>
        <p style={{ fontSize: 12, color: "var(--color-grey)" }}>
          {t("customer.referral.rewardNote")} · {t("common.invented")}
        </p>
        <Button onClick={() => setShared(true)}>{t("customer.referral.share")}</Button>
        {shared ? <p role="status">✓</p> : null}
      </Card>
    </AppShell>
  );
}
