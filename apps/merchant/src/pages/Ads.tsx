import { AppShell, Card, EmptyState, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";

export function Ads() {
  const { t } = useT();

  return (
    <AppShell topBar={<TopBar title={t("merchant.ads.title")} />}>
      <Card>
        <EmptyState title={t("merchant.ads.comingSoon")} description={t("merchant.ads.description")} />
      </Card>
    </AppShell>
  );
}
