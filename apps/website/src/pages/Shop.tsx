import { WebsiteLayout } from "../components/WebsiteLayout";
import { useT } from "@gozem/i18n";

/** W-04: shop (Achats) service page. */
export function Shop() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.shop.title")}</h1>
      <p>{t("website.shop.subtitle")}</p>
    </WebsiteLayout>
  );
}
