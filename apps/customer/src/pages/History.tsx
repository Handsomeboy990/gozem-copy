import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { formatXOF, merchants, orders, rideClasses, rides } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

/** C-29: Trip/order history (Activités). */
export function History() {
  const { t, lang } = useT();

  return (
    <AppShell bottomNav={<CustomerBottomNav current="activity" />}>
      <h1 style={{ fontSize: 18 }}>{t("customer.history.title")}</h1>
      <p style={{ fontWeight: 600 }}>{t("customer.history.ridesTitle")}</p>
      <Card style={{ padding: 0 }}>
        {rides.map((ride) => (
          <Link key={ride.id} to={`/history/receipt?type=ride&id=${ride.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem
              title={`${rideClasses.find((c) => c.id === ride.classId)?.label} · ${ride.dropoff}`}
              subtitle={`${new Date(ride.createdAt).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR")} · ${formatXOF(ride.fareXof)} · ${ride.status}`}
            />
          </Link>
        ))}
      </Card>
      <p style={{ fontWeight: 600 }}>{t("customer.history.ordersTitle")}</p>
      <Card style={{ padding: 0 }}>
        {orders.map((order) => (
          <Link key={order.id} to={`/history/receipt?type=order&id=${order.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem
              title={merchants.find((m) => m.id === order.merchantId)?.name ?? order.id}
              subtitle={`${new Date(order.createdAt).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR")} · ${formatXOF(order.totalXof)} · ${order.status}`}
            />
          </Link>
        ))}
      </Card>
    </AppShell>
  );
}

/** C-30: Invoice/receipt. */
export function Receipt() {
  const { t, lang } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const type = params.get("type");
  const id = params.get("id");
  const ride = type === "ride" ? rides.find((r) => r.id === id) : undefined;
  const order = type === "order" ? orders.find((o) => o.id === id) : undefined;
  const total = ride?.fareXof ?? order?.totalXof ?? 0;
  const date = ride?.createdAt ?? order?.createdAt ?? new Date().toISOString();
  const title = ride ? `${ride.pickup} → ${ride.dropoff}` : merchants.find((m) => m.id === order?.merchantId)?.name ?? t("customer.receipt.title");

  return (
    <AppShell topBar={<BackTopBar title={t("customer.receipt.title")} to="/history" />}>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 700 }}>{title}</p>
        <p style={{ fontSize: 13, color: "var(--color-grey)" }}>
          {t("customer.receipt.dateLabel")}: {new Date(date).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR")}
        </p>
        <p style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
          <span>{t("customer.receipt.totalLabel")}</span>
          <span>{formatXOF(total)}</span>
        </p>
      </Card>
      <Button onClick={() => navigate("/history")}>{t("customer.receipt.backCta")}</Button>
    </AppShell>
  );
}
