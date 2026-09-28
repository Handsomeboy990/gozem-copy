import { WebsiteLayout } from "../components/WebsiteLayout";
import { useT } from "@gozem/i18n";
import { communes } from "@gozem/fake-data";

/** W-07: about/corporate page, mission statement and office presence. */
export function About() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.about.title")}</h1>
      <p className="site-mission">{t("website.about.mission")}</p>
      <p>{t("website.about.presence")} {communes.join(", ")}.</p>
    </WebsiteLayout>
  );
}
