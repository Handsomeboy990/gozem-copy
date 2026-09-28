import { WebsiteLayout } from "../components/WebsiteLayout";
import { Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";

/** W-08: terms and privacy summary, plain-language section list. */
export function Legal() {
  const { t } = useT();
  const termsSections = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `website.legal.termsSection${n}`);
  const privacySections = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `website.legal.privacySection${n}`);

  return (
    <WebsiteLayout>
      <h1>{t("website.legal.title")}</h1>
      <p>{t("website.legal.subtitle")}</p>

      <Card>
        <h2>{t("website.legal.termsTitle")}</h2>
        <p>{t("website.legal.termsSummary")}</p>
        <ul>
          {termsSections.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2>{t("website.legal.privacyTitle")}</h2>
        <p>{t("website.legal.privacySummary")}</p>
        <ul>
          {privacySections.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </Card>
    </WebsiteLayout>
  );
}
