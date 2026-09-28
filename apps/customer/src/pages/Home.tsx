import { Link } from "react-router-dom";
import { AppShell } from "@gozem/design-system";
import { formatXOF, walletTx } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { CustomerBottomNav, HomeTopBar } from "../lib/nav";

const balanceXof = walletTx.reduce((sum, tx) => sum + (tx.type === "credit" ? tx.amountXof : -tx.amountXof), 0);

const REF = `${import.meta.env.BASE_URL}ref/`;

/** C-04: Home / dashboard. */
export function Home() {
  const { t } = useT();

  const services: Array<{ key: string; label: string; to: string; icon: string }> = [
    { key: "zem", label: t("customer.home.zem"), to: "/ride/destination?class=zem", icon: "icon-zem.png" },
    { key: "tricycle", label: t("customer.home.tricycle"), to: "/ride/destination?class=tricycle", icon: "icon-tricycle.png" },
    { key: "car", label: t("customer.home.car"), to: "/ride/destination?class=taxi", icon: "icon-voiture.png" },
    { key: "courier", label: t("customer.home.courier"), to: "/parcel", icon: "icon-coursier.png" },
    { key: "credit", label: t("customer.home.credit"), to: "/topup", icon: "icon-credit.png" },
    { key: "food", label: t("customer.home.food"), to: "/food", icon: "icon-food.png" },
    { key: "shop", label: t("customer.home.shop"), to: "/shop", icon: "icon-shopping.png" },
    { key: "tickets", label: t("customer.home.tickets"), to: "/tickets", icon: "icon-billetterie.png" },
  ];

  return (
    <AppShell topBar={<HomeTopBar notificationCount={3} />} bottomNav={<CustomerBottomNav current="home" />}>
      <img
        src={`${REF}banner-home-promo.png`}
        alt={`${t("customer.home.promoTag")} — ${t("customer.home.promoCaption")}`}
        style={{ display: "block", width: "100%", borderRadius: "var(--radius-xl)", objectFit: "cover", marginBottom: "var(--space-3)" }}
      />

      <div className="gz-wallet-strip">
        <div>
          <p style={{ margin: 0, fontSize: 12, color: "var(--color-grey)" }}>{t("customer.home.walletLabel")}</p>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{formatXOF(balanceXof)}</p>
        </div>
        <Link
          to="/wallet/recharge"
          className="gz-button gz-button--primary"
          style={{ width: "auto", textDecoration: "none", background: "var(--color-white)", color: "var(--color-primary)", minHeight: 36, padding: "0 var(--space-3)" }}
        >
          + {t("customer.home.recharge")}
        </Link>
      </div>

      <div role="list" className="gz-service-grid">
        {services.map((service) => (
          <Link role="listitem" key={service.key} to={service.to} className="gz-service-grid__item">
            <span className="gz-service-grid__icon">
              <img src={`${REF}${service.icon}`} alt="" aria-hidden="true" />
            </span>
            {service.label}
          </Link>
        ))}
      </div>

      <Link to="/food" style={{ textDecoration: "none" }}>
        <div className="gz-promo-band">
          <div className="gz-promo-band__head">
            <p style={{ margin: 0, fontWeight: 700 }}>{t("customer.home.recommended")}</p>
            <span style={{ fontSize: 12, textDecoration: "underline" }}>{t("common.seeAll")}</span>
          </div>
          <p style={{ margin: "var(--space-2) 0 0", fontSize: 13 }}>{t("customer.home.promoBanner")}</p>
        </div>
      </Link>

      <Link to="/promotions" className="gz-button gz-button--secondary" style={{ textDecoration: "none", display: "flex", marginTop: "var(--space-3)" }}>
        {t("customer.promotions.title")}
      </Link>
    </AppShell>
  );
}
