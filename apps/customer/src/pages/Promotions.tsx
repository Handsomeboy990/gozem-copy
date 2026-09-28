import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { formatXOF, promos } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

/** C-26: Promo code entry. */
export function Promotions() {
  const { t } = useT();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  function apply() {
    const match = promos.find((p) => p.code.toLowerCase() === code.trim().toLowerCase());
    setMessage(match ? `${match.label} · -${formatXOF(match.discountXof)}` : t("common.error"));
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.promotions.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card>
        <label className="gz-field__label" htmlFor="promo-code">
          {t("customer.promotions.label")}
        </label>
        <input
          id="promo-code"
          className="gz-field__input"
          style={{ width: "100%", marginBottom: "var(--space-2)" }}
          placeholder={t("customer.promotions.placeholder")}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {message ? (
          <p role="status" style={{ fontSize: 13 }}>
            {message}
          </p>
        ) : null}
        <Button onClick={apply}>{t("customer.promotions.cta")}</Button>
      </Card>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{t("customer.promotions.activeTitle")}</p>
        {promos.map((promo) => (
          <ListItem key={promo.code} title={promo.code} subtitle={`${promo.label} · -${formatXOF(promo.discountXof)}`} />
        ))}
      </Card>
      <Button variant="secondary" onClick={() => navigate("/referral")}>
        {t("customer.promotions.referralLink")}
      </Button>
    </AppShell>
  );
}
