import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, users } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

const AMOUNT_XOF = 2500;
const REFERENCE = "GZ211026.1124.C4866";

export function ScanToPay() {
  const { t } = useT();
  const navigate = useNavigate();
  const payer = users.find((u) => u.role === "client");

  return (
    <AppShell topBar={<TopBar title={t("merchant.scanToPay.title")} />}>
      <Card style={{ textAlign: "center" }}>
        <p aria-hidden="true" style={{ fontSize: "2rem", color: "var(--color-success, #179138)" }}>
          ✓
        </p>
        <p role="status" style={{ fontWeight: 700 }}>
          {t("merchant.scanToPay.result")}
        </p>
        <p>{payer?.fullName}</p>
        <p>{t("merchant.scanToPay.amount")}</p>
        <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>{formatXOF(AMOUNT_XOF)}</p>
        <p>{t("merchant.scanToPay.description")}</p>
        <p>
          {t("merchant.scanToPay.reference")}: {REFERENCE}
        </p>
        <Button type="button" onClick={() => navigate("/home")}>
          {t("common.close")}
        </Button>
      </Card>
    </AppShell>
  );
}
