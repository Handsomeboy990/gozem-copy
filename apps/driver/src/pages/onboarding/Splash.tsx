import { AppShell, Button, Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { useNavigate } from "react-router-dom";

export function Splash() {
  const { t } = useT();
  const navigate = useNavigate();
  return (
    <AppShell>
      <Card style={{ textAlign: "center", marginTop: "var(--space-8, 2rem)" }}>
        <h1 style={{ margin: 0 }}>{t("common.appName")}</h1>
        <p>{t("driver.onboarding.tagline")}</p>
        <Button onClick={() => navigate("/onboarding/phone")}>
          {t("driver.onboarding.cta")}
        </Button>
      </Card>
    </AppShell>
  );
}
