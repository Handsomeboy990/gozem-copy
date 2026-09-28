import { useState } from "react";
import { AppShell, Button, Card, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { useNavigate } from "react-router-dom";

type DocKey = "nationalId" | "license" | "registration" | "insurance" | "inspection";

const DOC_KEYS: DocKey[] = ["nationalId", "license", "registration", "insurance", "inspection"];

export function Documents() {
  const { t } = useT();
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState<Record<DocKey, boolean>>({
    nationalId: true,
    license: true,
    registration: false,
    insurance: false,
    inspection: false,
  });

  return (
    <AppShell topBar={<TopBar title={t("driver.documents.title")} />}>
      <Card>
        <p>{t("driver.documents.description")}</p>
        {DOC_KEYS.map((key) => (
          <ListItem
            key={key}
            title={t(`driver.documents.${key}`)}
            subtitle={uploaded[key] ? t("driver.documents.uploaded") : t("common.empty")}
            onClick={() => setUploaded((prev) => ({ ...prev, [key]: true }))}
          />
        ))}
        <Button onClick={() => navigate("/home")}>{t("driver.documents.cta")}</Button>
      </Card>
    </AppShell>
  );
}
