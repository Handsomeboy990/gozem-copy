import { Link } from "react-router-dom";
import { AppShell, Card } from "@gozem/design-system";
import { formatXOF, walletTx } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { CustomerBottomNav } from "../lib/nav";

const balanceXof = walletTx.reduce((sum, tx) => sum + (tx.type === "credit" ? tx.amountXof : -tx.amountXof), 0);

/** C-04: Home / dashboard. */
export function Home() {
  const { t } = useT();

  const services: Array<{ key: string; label: string; to: string; emoji: string }> = [
    { key: "zem", label: t("customer.home.zem"), to: "/ride/destination?class=zem", emoji: "🏍️" },
    { key: "tricycle", label: t("customer.home.tricycle"), to: "/ride/destination?class=tricycle", emoji: "🛺" },
    { key: "car", label: t("customer.home.car"), to: "/ride/destination?class=taxi", emoji: "🚗" },
    { key: "courier", label: t("customer.home.courier"), to: "/parcel", emoji: "📦" },
    { key: "credit", label: t("customer.home.credit"), to: "/topup", emoji: "📶" },
    { key: "food", label: t("customer.home.food"), to: "/food", emoji: "🍲" },
    { key: "shop", label: t("customer.home.shop"), to: "/shop", emoji: "🛍️" },
    { key: "tickets", label: t("customer.home.tickets"), to: "/tickets", emoji: "🎟️" },
  ];

  return (
    <AppShell bottomNav={<CustomerBottomNav current="home" />}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--color-primary-tint)",
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 12, color: "var(--color-grey)" }}>{t("customer.home.walletLabel")}</p>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{formatXOF(balanceXof)}</p>
        </div>
        <Link to="/wallet/recharge" className="gz-button gz-button--primary" style={{ width: "auto", textDecoration: "none" }}>
          + {t("customer.home.recharge")}
        </Link>
      </Card>

      <div
        role="list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-3)",
          margin: "var(--space-4) 0",
        }}
      >
        {services.map((service) => (
          <Link
            role="listitem"
            key={service.key}
            to={service.to}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
              color: "var(--color-text)",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 48,
                height: 48,
                borderRadius: "var(--radius-full)",
                background: "var(--color-primary-tint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {service.emoji}
            </span>
            {service.label}
          </Link>
        ))}
      </div>

      <Link to="/food" style={{ textDecoration: "none" }}>
        <Card style={{ background: "var(--color-accent-red)", color: "var(--color-white)" }}>
          <p style={{ margin: 0, fontWeight: 700 }}>{t("customer.home.recommended")}</p>
          <p style={{ margin: 0, fontSize: 13 }}>{t("customer.home.promoBanner")}</p>
        </Card>
      </Link>

      <Link to="/promotions" className="gz-button gz-button--secondary" style={{ textDecoration: "none", display: "flex" }}>
        {t("customer.promotions.title")}
      </Link>
    </AppShell>
  );
}
