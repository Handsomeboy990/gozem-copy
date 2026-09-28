import { useState } from "react";
import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { rides, users } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

export function Trip() {
  const { t } = useT();
  const navigate = useNavigate();
  const [arrived, setArrived] = useState(false);
  const ride = rides.find((r) => r.status === "requested") ?? rides[0];
  const rider = users.find((u) => u.role === "client");

  return (
    <AppShell topBar={<TopBar title={t("driver.trip.title")} />}>
      <Card>
        <p>
          <strong>{t("driver.trip.rider")}</strong>: {rider?.fullName}
        </p>
        <p>
          <strong>{t("driver.request.pickup")}</strong>: {ride.pickup}
        </p>
        <p>
          <strong>{t("driver.request.dropoff")}</strong>: {ride.dropoff}
        </p>
        <Button type="button" variant="secondary">
          {t("driver.trip.call")}
        </Button>
        {!arrived ? (
          <Button type="button" onClick={() => setArrived(true)}>
            {t("driver.trip.arrived")}
          </Button>
        ) : (
          <Button type="button" onClick={() => navigate("/trip/complete")}>
            {t("driver.trip.completeCta")}
          </Button>
        )}
      </Card>
    </AppShell>
  );
}
