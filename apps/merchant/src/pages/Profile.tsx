import { AppShell, BottomNav, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { merchants, users } from "@gozem/fake-data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { merchantNavItems } from "./nav";

export function Profile() {
  const { t } = useT();
  const navigate = useNavigate();
  const location = useLocation();
  const owner = users.find((u) => u.role === "merchant");
  const store = merchants[0];

  return (
    <AppShell
      topBar={<TopBar title={t("merchant.profile.title")} />}
      bottomNav={<BottomNav items={merchantNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>{store.name}</p>
        <p>
          {t("merchant.profile.business")}: {store.category} · {store.commune}
        </p>
        <p>
          {t("merchant.profile.contact")}: {owner?.fullName} · {owner?.phone}
        </p>
        <p>
          {t("merchant.profile.hours")}: {t("merchant.profile.hoursValue")}
        </p>
      </Card>
      <Button type="button" variant="secondary" onClick={() => navigate("/onboarding")}>
        {t("merchant.profile.logout")}
      </Button>
    </AppShell>
  );
}
