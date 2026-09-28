import { useState } from "react";
import { AppShell, BottomNav, Button, EmptyState, ListItem, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { formatXOF, orders, type OrderStatus } from "@gozem/fake-data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { merchantNavItems } from "./nav";
import { formatOrderNumber } from "../lib/orderNumber";

type Tab = "new" | "ongoing" | "ready" | "history";

const TAB_STATUS: Record<Tab, OrderStatus[]> = {
  new: ["pending", "preparing"],
  ongoing: ["delivering"],
  ready: ["preparing"],
  history: ["delivered", "cancelled"],
};

export function Orders() {
  const { t } = useT();
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState<Tab>("new");
  const [paused, setPaused] = useState(false);

  const visibleOrders = tab === "new" ? orders : orders.filter((o) => TAB_STATUS[tab].includes(o.status));

  return (
    <AppShell
      topBar={<TopBar title={t("merchant.orders.title")} />}
      bottomNav={<BottomNav items={merchantNavItems(t, location.pathname)} renderLink={(item, children) => <Link key={item.key} to={item.href}>{children}</Link>} />}
    >
      <Button type="button" variant={paused ? "primary" : "secondary"} aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
        {t("merchant.orders.pause")}
      </Button>
      <div role="tablist" aria-label={t("merchant.orders.title")} style={{ display: "flex", gap: "var(--space-2, 0.5rem)", margin: "var(--space-2, 0.5rem) 0" }}>
        {(["new", "ongoing", "ready", "history"] as Tab[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className="gz-button gz-button--ghost"
            onClick={() => setTab(key)}
          >
            {t(`merchant.orders.tab${key === "new" ? "New" : key === "ongoing" ? "Ongoing" : key === "ready" ? "Ready" : "History"}`)}
          </button>
        ))}
      </div>
      {visibleOrders.length === 0 ? (
        <EmptyState title={t("common.empty")} />
      ) : (
        visibleOrders.map((order) => (
          <ListItem
            key={order.id}
            title={`${t("merchant.orderDetail.number")} ${formatOrderNumber(order.id)}`}
            subtitle={`${formatXOF(order.totalXof)} · ${t(`merchant.orders.status.${order.status}`)}`}
            onClick={() => navigate(`/orders/detail?id=${order.id}`)}
          />
        ))
      )}
    </AppShell>
  );
}
