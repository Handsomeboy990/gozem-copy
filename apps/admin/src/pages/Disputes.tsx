import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, ListItem, Button, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { disputeQueue } from "../data/queues";

type Decision = "pending" | "resolved";

/** A-05: dispute/support queue, from C-31 support and C-12 ratings. */
export function Disputes() {
  const { t } = useT();
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});

  return (
    <AdminLayout title={t("admin.disputes.title")}>
      <p>{t("admin.disputes.subtitle")}</p>
      {disputeQueue.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        disputeQueue.map((item) => {
          const status = decisions[item.id] ?? "pending";
          return (
            <Card key={item.id}>
              <ListItem
                title={item.subject}
                subtitle={`${item.customerName} · ${t(`admin.disputes.source.${item.source}`)}`}
              />
              <p className={`admin-status admin-status--${status === "resolved" ? "approved" : "pending"}`}>
                {t(`admin.disputes.status.${status}`)}
              </p>
              <div className="admin-actions">
                <Button
                  variant="primary"
                  onClick={() => setDecisions((prev) => ({ ...prev, [item.id]: "resolved" }))}
                  disabled={status === "resolved"}
                >
                  {t("admin.disputes.resolve")}
                </Button>
              </div>
            </Card>
          );
        })
      )}
    </AdminLayout>
  );
}
