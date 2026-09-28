import { useState } from "react";
import { AppShell, Button, Card, ListItem } from "@gozem/design-system";
import { formatXOF, users } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

const client = users.find((u) => u.role === "client")!;
const recent = [client, users.find((u) => u.role === "courier")!];

/** C-24: Achat de crédit (airtime/data top-up). */
export function Topup() {
  const { t } = useT();
  const [tab, setTab] = useState<"self" | "other">("self");
  const [amount, setAmount] = useState("1000");
  const [done, setDone] = useState(false);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.topup.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <div role="tablist" aria-label={t("customer.topup.title")} style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "self"}
          className="gz-button gz-button--secondary"
          onClick={() => setTab("self")}
          style={{ outline: tab === "self" ? "2px solid var(--color-primary)" : undefined }}
        >
          {t("customer.topup.selfTab")}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "other"}
          className="gz-button gz-button--secondary"
          onClick={() => setTab("other")}
          style={{ outline: tab === "other" ? "2px solid var(--color-primary)" : undefined }}
        >
          {t("customer.topup.otherTab")}
        </button>
      </div>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{tab === "self" ? client.phone : recent[1].phone}</p>
        <label className="gz-field__label" htmlFor="topup-amount">
          {t("customer.topup.amountLabel")}
        </label>
        <input
          id="topup-amount"
          className="gz-field__input"
          style={{ width: "100%" }}
          inputMode="numeric"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
        />
      </Card>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{t("customer.topup.recentTitle")}</p>
        {recent.map((user) => (
          <ListItem key={user.id} title={user.fullName} subtitle={user.phone} />
        ))}
      </Card>
      {done ? (
        <p role="status" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
          {formatXOF(Number(amount) || 0)} ✓
        </p>
      ) : null}
      <Button onClick={() => setDone(true)}>{t("customer.topup.cta")}</Button>
    </AppShell>
  );
}
