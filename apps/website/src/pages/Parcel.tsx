import { WebsiteLayout } from "../components/WebsiteLayout";
import { useT } from "@gozem/i18n";

/** W-05: Coursier (parcel) service page. */
export function Parcel() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.parcel.title")}</h1>
      <p>{t("website.parcel.subtitle")}</p>
    </WebsiteLayout>
  );
}
