import { Link, useNavigate } from "react-router-dom";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { users } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { CustomerBottomNav } from "../lib/nav";

const client = users.find((u) => u.role === "client")!;

/** C-28: Profile (Compte). */
export function Profile() {
  const { t, lang, setLang } = useT();
  const navigate = useNavigate();

  return (
    <AppShell bottomNav={<CustomerBottomNav current="profile" />}>
      <Card style={{ textAlign: "center" }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>{client.fullName}</p>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>{client.phone}</p>
      </Card>
      <Card style={{ padding: 0 }}>
        <ListItem title={t("customer.profile.nameLabel")} subtitle={client.fullName} />
        <ListItem title={t("customer.profile.phoneLabel")} subtitle={client.phone} />
        <ListItem
          title={t("customer.profile.languageLabel")}
          subtitle={lang === "fr" ? "Français" : "English"}
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        />
      </Card>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{t("customer.profile.paymentMethodsTitle")}</p>
        <ListItem title={t("customer.profile.walletMethod")} />
        <ListItem title={t("customer.profile.fedapayMethod")} subtitle={t("common.fedapayPreview")} />
      </Card>
      <Card style={{ padding: 0 }}>
        <Link to="/wallet" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem title={t("customer.wallet.title")} as="div" />
        </Link>
        <Link to="/financing" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem title={t("customer.financing.title")} as="div" />
        </Link>
        <Link to="/referral" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem title={t("customer.referral.title")} as="div" />
        </Link>
      </Card>
      <Button variant="ghost" onClick={() => navigate("/onboarding")}>
        {t("customer.profile.logout")}
      </Button>
    </AppShell>
  );
}
