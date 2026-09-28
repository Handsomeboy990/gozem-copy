import { useState } from "react";
import { AppShell, Button, Card, EmptyState, Input, ListItem } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { CustomerBottomNav } from "../lib/nav";

interface SavedAddress {
  id: string;
  title: string;
  detail: string;
}

/** C-32: Saved addresses. */
export function Addresses() {
  const { t } = useT();
  const [items, setItems] = useState<SavedAddress[]>([
    { id: "home", title: t("customer.addresses.home"), detail: "Akpakpa, Cotonou" },
    { id: "work", title: t("customer.addresses.work"), detail: "Fidjrossè, Cotonou" },
  ]);
  const [adding, setAdding] = useState(false);
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (!label.trim()) {
      setError(t("customer.addresses.add"));
      document.getElementById("new-address")?.focus();
      return;
    }
    setItems((prev) => [...prev, { id: `addr-${prev.length}`, title: label, detail: label }]);
    setLabel("");
    setError("");
    setAdding(false);
  }

  return (
    <AppShell bottomNav={<CustomerBottomNav current="addresses" />}>
      <h1 style={{ fontSize: 18 }}>{t("customer.addresses.title")}</h1>
      <Card style={{ padding: 0 }}>
        {items.length === 0 ? (
          <EmptyState title={t("customer.addresses.emptyTitle")} />
        ) : (
          items.map((item) => <ListItem key={item.id} title={item.title} subtitle={item.detail} />)
        )}
      </Card>
      {adding ? (
        <Card>
          <Input id="new-address" label={t("customer.addresses.add")} value={label} error={error || undefined} onChange={(e) => setLabel(e.target.value)} />
          <Button onClick={submit}>{t("common.confirm")}</Button>
        </Card>
      ) : (
        <Button onClick={() => setAdding(true)}>{t("customer.addresses.add")}</Button>
      )}
    </AppShell>
  );
}
