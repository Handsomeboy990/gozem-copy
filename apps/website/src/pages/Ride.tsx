import { WebsiteLayout } from "../components/WebsiteLayout";
import { Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { rideClasses, formatXOF } from "@gozem/fake-data";

/** W-02: ride service page, Zem/Tricycle/Taxi/Clim+/Eco+ descriptions. */
export function Ride() {
  const { t } = useT();
  return (
    <WebsiteLayout>
      <h1>{t("website.ride.title")}</h1>
      <p>{t("website.ride.subtitle")}</p>
      <div className="site-grid">
        {rideClasses.map((rideClass) => (
          <Card key={rideClass.id}>
            <p className="site-card__title">{rideClass.label}</p>
            <p>{formatXOF(rideClass.fareXof)}</p>
            <p className="site-invented">{t("website.ride.inventedFare")}</p>
          </Card>
        ))}
      </div>
    </WebsiteLayout>
  );
}
