import { useState, type FormEvent } from "react";
import { AppShell, Button, Card, Input, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { parcels } from "@gozem/fake-data";

export function Courier() {
  const { t } = useT();
  const parcel = parcels[0];
  const [pickup, setPickup] = useState(parcel.pickup);
  const [dropoff, setDropoff] = useState(parcel.dropoff);
  const [requested, setRequested] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequested(true);
  }

  return (
    <AppShell topBar={<TopBar title={t("merchant.courier.title")} />}>
      <Card>
        <p>{t("merchant.courier.description")}</p>
        <form onSubmit={handleSubmit}>
          <Input label={t("merchant.courier.pickup")} required value={pickup} onChange={(e) => setPickup(e.target.value)} />
          <Input label={t("merchant.courier.dropoff")} required value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
          <Button type="submit">{t("merchant.courier.cta")}</Button>
        </form>
        {requested ? <p role="status">{t("merchant.courier.requested")}</p> : null}
      </Card>
    </AppShell>
  );
}
