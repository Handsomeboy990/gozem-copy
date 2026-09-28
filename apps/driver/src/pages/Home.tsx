import { useState } from "react";
import { AppShell, BottomNav, Button, Card, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, walletTx } from "@gozem/fake-data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { driverNavItems } from "./nav";

export function Home() {
  const { t } = useT();
  const navigate = useNavigate();
  const location = useLocation();
  const [online, setOnline] = useState(true);
  const [role, setRole] = useState<"driver" | "courier">("driver");

  const earningsToday = walletTx
    .filter((tx) => tx.type === "credit")
    .reduce((sum, tx) => sum + tx.amountXof, 0);

  return (
    <AppShell
      topBar={
        <TopBar
          title={t("driver.home.title")}
          trailing={
            <Button
              type="button"
              variant="ghost"
              data-testid="role-toggle"
              onClick={() => setRole((r) => (r === "driver" ? "courier" : "driver"))}
            >
              {t(role === "driver" ? "driver.role.driver" : "driver.role.courier")}
            </Button>
          }
        />
      }
      bottomNav={<BottomNav items={driverNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Card>
        <Button
          type="button"
          variant={online ? "primary" : "secondary"}
          aria-pressed={online}
          aria-label={t("driver.home.statusLabel")}
          onClick={() => setOnline((v) => !v)}
        >
          {t(online ? "driver.home.online" : "driver.home.offline")}
        </Button>
      </Card>
      <Card>
        <p>{t("driver.home.earningsToday")}</p>
        <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>{formatXOF(earningsToday)}</p>
        <p>{t("driver.home.tripsToday")}: 2</p>
      </Card>
      <Card>
        {online ? (
          <>
            <p>{t("driver.home.waiting")}</p>
            <Button type="button" onClick={() => navigate("/request")}>
              {t("driver.home.simulate")}
            </Button>
          </>
        ) : (
          <p>{t("common.empty")}</p>
        )}
      </Card>
    </AppShell>
  );
}
