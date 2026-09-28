import { AppShell, BottomNav, EmptyState, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, rides } from "@gozem/fake-data";
import { Link, useLocation } from "react-router-dom";
import { driverNavItems } from "./nav";

export function History() {
  const { t } = useT();
  const location = useLocation();

  return (
    <AppShell
      topBar={<TopBar title={t("driver.history.title")} />}
      bottomNav={<BottomNav items={driverNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      {rides.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        rides.map((ride) => (
          <ListItem
            key={ride.id}
            title={`${ride.pickup} -> ${ride.dropoff}`}
            subtitle={`${formatXOF(ride.fareXof)} · ${new Date(ride.createdAt).toLocaleDateString()} · ${ride.status}`}
          />
        ))
      )}
    </AppShell>
  );
}
