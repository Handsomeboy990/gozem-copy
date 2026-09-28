import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, ListItem, Button, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF } from "@gozem/fake-data";
import { payoutQueue } from "../data/queues";

type Decision = "pending" | "paid";

/** A-06: driver/merchant wallet payout reconciliation (mirrors C-13/D-09/M-09). */
export function Payouts() {
  const { t } = useT();
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});

  return (
    <AdminLayout title={t("admin.payouts.title")}>
      <p>{t("admin.payouts.subtitle")}</p>
      {payoutQueue.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        payoutQueue.map((item) => {
          const status = decisions[item.id] ?? "pending";
          return (
            <Card key={item.id}>
              <ListItem title={item.name} subtitle={t(`admin.payouts.role.${item.role}`)} />
              <p className="admin-kpi__value">{formatXOF(item.balanceXof)}</p>
              <p className="admin-invented">{t("common.invented")}</p>
              <p className={`admin-status admin-status--${status === "paid" ? "approved" : "pending"}`}>
                {t(`admin.payouts.status.${status}`)}
              </p>
              <div className="admin-actions">
                <Button
                  variant="primary"
                  onClick={() => setDecisions((prev) => ({ ...prev, [item.id]: "paid" }))}
                  disabled={status === "paid"}
                >
                  {t("admin.payouts.pay")}
                </Button>
              </div>
            </Card>
          );
        })
      )}
    </AdminLayout>
  );
}
