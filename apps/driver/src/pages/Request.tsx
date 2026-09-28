import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, rides } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

export function Request() {
  const { t } = useT();
  const navigate = useNavigate();
  const ride = rides.find((r) => r.status === "requested") ?? rides[0];

  return (
    <AppShell topBar={<TopBar title={t("driver.request.title")} />}>
      <Card>
        <p>{t("driver.request.countdown")}</p>
        <p>
          <strong>{t("driver.request.pickup")}</strong>: {ride.pickup}
        </p>
        <p>
          <strong>{t("driver.request.dropoff")}</strong>: {ride.dropoff}
        </p>
        <p>
          <strong>{t("driver.request.fare")}</strong>: {formatXOF(ride.fareXof)}
        </p>
        <Button type="button" onClick={() => navigate("/trip")}>
          {t("driver.request.accept")}
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate("/home")}>
          {t("driver.request.decline")}
        </Button>
      </Card>
    </AppShell>
  );
}
