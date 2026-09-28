import { AdminLayout } from "../components/AdminLayout";
import { Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { rides, orders, parcels, users } from "@gozem/fake-data";
import { driverQueue, merchantQueue } from "../data/queues";

/** A-02: ops dashboard, KPI tiles derived from the shared fake-data seed. */
export function Dashboard() {
  const { t } = useT();

  const activeRides = rides.filter((r) =>
    ["requested", "accepted", "ongoing"].includes(r.status)
  ).length;
  const activeOrders =
    orders.filter((o) => ["pending", "preparing", "delivering"].includes(o.status)).length +
    parcels.filter((p) => !["delivered", "cancelled"].includes(p.status)).length;
  const driversOnline = users.filter((u) => u.role === "driver" || u.role === "courier").length;
  const pendingApprovals = driverQueue.length + merchantQueue.length;

  const tiles = [
    { key: "activeRides", value: activeRides },
    { key: "activeOrders", value: activeOrders },
    { key: "driversOnline", value: driversOnline },
    { key: "pendingApprovals", value: pendingApprovals },
  ];

  return (
    <AdminLayout title={t("admin.dashboard.title")}>
      <p>{t("admin.dashboard.subtitle")}</p>
      <div className="admin-kpi-grid">
        {tiles.map((tile) => (
          <Card key={tile.key}>
            <p className="admin-kpi__value">{tile.value}</p>
            <p className="admin-kpi__label">{t(`admin.dashboard.${tile.key}`)}</p>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
}
