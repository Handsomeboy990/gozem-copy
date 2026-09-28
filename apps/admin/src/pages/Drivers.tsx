import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, ListItem, Button, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { driverQueue } from "../data/queues";

type Decision = "pending" | "approved" | "rejected";

/** A-03: driver/courier document approval queue (mirrors D-04 uploads). */
export function Drivers() {
  const { t } = useT();
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});

  function decide(id: string, decision: Decision) {
    setDecisions((prev) => ({ ...prev, [id]: decision }));
  }

  return (
    <AdminLayout title={t("admin.drivers.title")}>
      <p>{t("admin.drivers.subtitle")}</p>
      {driverQueue.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        driverQueue.map((item) => {
          const status = decisions[item.user.id] ?? "pending";
          return (
            <Card key={item.user.id}>
              <ListItem
                title={item.user.fullName}
                subtitle={`${item.user.phone} · ${item.vehicle.model} (${item.vehicle.plate})`}
              />
              <p className="admin-doc-note">{t("admin.drivers.document")}</p>
              <p className={`admin-status admin-status--${status}`}>
                {t(`admin.drivers.status.${status}`)}
              </p>
              <div className="admin-actions">
                <Button
                  variant="primary"
                  onClick={() => decide(item.user.id, "approved")}
                  disabled={status !== "pending"}
                >
                  {t("admin.drivers.approve")}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => decide(item.user.id, "rejected")}
                  disabled={status !== "pending"}
                >
                  {t("admin.drivers.reject")}
                </Button>
              </div>
            </Card>
          );
        })
      )}
    </AdminLayout>
  );
}
