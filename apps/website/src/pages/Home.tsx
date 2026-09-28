import { WebsiteLayout } from "../components/WebsiteLayout";
import { Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { Link } from "react-router-dom";

const SERVICES = [
  { key: "ride", to: "/services/ride" },
  { key: "food", to: "/services/food" },
  { key: "shop", to: "/services/shop" },
  { key: "parcel", to: "/services/parcel" },
];

const APP_ENTRIES = [
  { key: "customer", href: "/app/" },
  { key: "driver", href: "/driver/" },
  { key: "merchant", href: "/merchant/" },
  { key: "admin", href: "/admin/" },
];

/** W-01: homepage, links to the four app entry URLs with full navigations (per task brief). */
export function Home() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <section className="site-hero">
        <img src="/gozem-logo-hq.png" alt={t("common.appName")} className="site-hero__logo" />
        <h1>{t("website.home.heroTitle")}</h1>
        <p>{t("website.home.heroSubtitle")}</p>
      </section>

      <section>
        <h2>{t("website.home.servicesTitle")}</h2>
        <div className="site-grid">
          {SERVICES.map((service) => (
            <Card key={service.key}>
              <Link to={service.to} className="site-card__title">
                {t(`website.nav.${service.key}`)}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2>{t("website.home.downloadTitle")}</h2>
        <p>{t("website.home.downloadSubtitle")}</p>
        <div className="site-app-links">
          {APP_ENTRIES.map((entry) => (
            <a key={entry.key} className="site-app-link" href={entry.href}>
              {t(`website.home.entry.${entry.key}`)}
            </a>
          ))}
        </div>
      </section>

      <section>
        <p className="site-mission">{t("website.home.mission")}</p>
      </section>
    </WebsiteLayout>
  );
}
