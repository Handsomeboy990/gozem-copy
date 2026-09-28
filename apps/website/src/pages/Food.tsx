import { WebsiteLayout } from "../components/WebsiteLayout";
import { Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { merchants } from "@gozem/fake-data";

/** W-03: food service page. */
export function Food() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.food.title")}</h1>
      <p>{t("website.food.subtitle")}</p>
      <div className="site-grid">
        {merchants.slice(0, 2).map((merchant) => (
          <Card key={merchant.id}>
            <p className="site-card__title">{merchant.name}</p>
            <p>{merchant.category} · {merchant.commune}</p>
          </Card>
        ))}
      </div>
    </WebsiteLayout>
  );
}
