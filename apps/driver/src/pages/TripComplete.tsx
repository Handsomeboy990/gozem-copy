import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, rides } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

export function TripComplete() {
  const { t } = useT();
  const navigate = useNavigate();
  const ride = rides.find((r) => r.status === "requested") ?? rides[0];

  return (
    <AppShell topBar={<TopBar title={t("driver.tripComplete.title")} />}>
      <Card style={{ textAlign: "center" }}>
        <p>{t("driver.tripComplete.amount")}</p>
        <p style={{ fontSize: "1.75rem", fontWeight: 700 }}>{formatXOF(ride.fareXof)}</p>
        <p>
          {t("driver.tripComplete.method")}: {t("driver.tripComplete.cash")}
        </p>
        <Button type="button" onClick={() => navigate("/wallet")}>
          {t("driver.tripComplete.confirm")}
        </Button>
      </Card>
    </AppShell>
  );
}
