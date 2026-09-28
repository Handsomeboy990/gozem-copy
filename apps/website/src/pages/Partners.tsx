import { WebsiteLayout } from "../components/WebsiteLayout";
import { useT } from "@gozem/i18n";

/** W-06: partners page. */
export function Partners() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.partners.title")}</h1>
      <p>{t("website.partners.subtitle")}</p>
    </WebsiteLayout>
  );
}
