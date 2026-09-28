import { AppShell, Card, EmptyState } from "@gozem/design-system";
import { useT } from "@gozem/i18n";

export function Home() {
  const { t } = useT();
  return (
    <AppShell>
      <Card>
        <EmptyState title={t("common.appName")} description="Gozem Merchant – placeholder home route" />
      </Card>
    </AppShell>
  );
}
