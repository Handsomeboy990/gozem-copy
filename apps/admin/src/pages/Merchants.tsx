import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, ListItem, Button, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { merchantQueue } from "../data/queues";

type Decision = "pending" | "approved" | "rejected";

/** A-04: merchant onboarding approval queue. */
export function Merchants() {
  const { t } = useT();
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});

  function decide(id: string, decision: Decision) {
    setDecisions((prev) => ({ ...prev, [id]: decision }));
  }

  return (
    <AdminLayout title={t("admin.merchants.title")}>
      <p>{t("admin.merchants.subtitle")}</p>
      {merchantQueue.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        merchantQueue.map((merchant) => {
          const status = decisions[merchant.id] ?? "pending";
          return (
            <Card key={merchant.id}>
              <ListItem
                title={merchant.name}
                subtitle={`${merchant.category} · ${merchant.commune}`}
              />
              <p className={`admin-status admin-status--${status}`}>
                {t(`admin.merchants.status.${status}`)}
              </p>
              <div className="admin-actions">
                <Button
                  variant="primary"
                  onClick={() => decide(merchant.id, "approved")}
                  disabled={status !== "pending"}
                >
                  {t("admin.merchants.approve")}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => decide(merchant.id, "rejected")}
                  disabled={status !== "pending"}
                >
                  {t("admin.merchants.reject")}
                </Button>
              </div>
            </Card>
          );
        })
      )}
    </AdminLayout>
  );
}
