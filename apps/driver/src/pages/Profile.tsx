import { AppShell, BottomNav, Button, Card, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { users, vehicles } from "@gozem/fake-data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { driverNavItems } from "./nav";

export function Profile() {
  const { t } = useT();
  const navigate = useNavigate();
  const location = useLocation();
  const driver = users.find((u) => u.role === "driver");
  const vehicle = vehicles[1];

  return (
    <AppShell
      topBar={<TopBar title={t("driver.profile.title")} />}
      bottomNav={<BottomNav items={driverNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>{driver?.fullName}</p>
        <p>{driver?.phone}</p>
        <p>
          <strong>{t("driver.profile.vehicle")}</strong>: {vehicle.model} ({vehicle.plate})
        </p>
      </Card>
      <Card>
        <ListItem title={t("driver.profile.documents")} onClick={() => navigate("/onboarding/documents")} />
        <ListItem title={t("driver.profile.financing")} onClick={() => navigate("/financing")} />
      </Card>
      <Button type="button" variant="secondary" onClick={() => navigate("/onboarding")}>
        {t("driver.profile.logout")}
      </Button>
    </AppShell>
  );
}
