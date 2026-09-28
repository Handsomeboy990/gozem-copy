import { useState } from "react";
import { AppShell, Card, EmptyState, ListItem } from "@gozem/design-system";
import { formatXOF, tickets } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

/** C-23: Billetterie / my purchases. */
export function Tickets() {
  const { t, lang } = useT();
  const [tab, setTab] = useState<"upcoming" | "used">("upcoming");
  const [query, setQuery] = useState("");

  const visible = tab === "upcoming" ? tickets.filter((tk) => tk.eventName.toLowerCase().includes(query.toLowerCase())) : [];

  return (
    <AppShell topBar={<BackTopBar title={t("customer.tickets.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <div role="tablist" aria-label={t("customer.tickets.title")} style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "upcoming"}
          className="gz-button gz-button--secondary"
          onClick={() => setTab("upcoming")}
          style={{ outline: tab === "upcoming" ? "2px solid var(--color-primary)" : undefined }}
        >
          {t("customer.tickets.tabUpcoming")}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "used"}
          className="gz-button gz-button--secondary"
          onClick={() => setTab("used")}
          style={{ outline: tab === "used" ? "2px solid var(--color-primary)" : undefined }}
        >
          {t("customer.tickets.tabUsed")}
        </button>
      </div>
      {tab === "upcoming" ? (
        <input
          className="gz-field__input"
          style={{ width: "100%", marginBottom: "var(--space-4)" }}
          placeholder={t("customer.tickets.searchPlaceholder")}
          aria-label={t("customer.tickets.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      ) : null}
      <Card style={{ padding: 0 }}>
        {visible.length === 0 ? (
          <EmptyState title={tab === "upcoming" ? t("common.empty") : t("customer.tickets.emptyUsedTitle")} />
        ) : (
          visible.map((tk) => (
            <ListItem
              key={tk.id}
              title={tk.eventName}
              subtitle={`${new Date(tk.eventDate).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR")} · ${tk.venue} · ${formatXOF(tk.priceXof)}`}
            />
          ))
        )}
      </Card>
    </AppShell>
  );
}
