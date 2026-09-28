import { useState } from "react";
import { AppShell, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { users } from "@gozem/fake-data";

export function Dispatcher() {
  const { t } = useT();
  const [assigned, setAssigned] = useState(false);
  const courier = users.find((u) => u.role === "courier");

  return (
    <AppShell topBar={<TopBar title={t("merchant.dispatcher.title")} />}>
      <Card>
        <p>{t("merchant.dispatcher.description")}</p>
        {!assigned ? (
          <Button type="button" onClick={() => setAssigned(true)}>
            {t("merchant.dispatcher.assign")}
          </Button>
        ) : (
          <p role="status">
            {t("merchant.dispatcher.assigned")}: {courier?.fullName}
          </p>
        )}
      </Card>
    </AppShell>
  );
}
