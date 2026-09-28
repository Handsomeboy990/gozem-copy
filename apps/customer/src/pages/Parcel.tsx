import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Button, Card, Input, ListItem } from "@gozem/design-system";
import { formatXOF, parcels, users } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar, CustomerBottomNav } from "../lib/nav";

const sampleParcel = parcels[0];
const courier = users.find((u) => u.role === "courier")!;

/** C-20: Parcel (Coursier) booking. */
export function ParcelBooking() {
  const { t } = useT();
  const navigate = useNavigate();
  const [pickup, setPickup] = useState(sampleParcel.pickup);
  const [dropoff, setDropoff] = useState(sampleParcel.dropoff);
  const [recipient, setRecipient] = useState(sampleParcel.recipientName);
  const [error, setError] = useState("");

  function submit() {
    if (!dropoff.trim() || !recipient.trim()) {
      setError(t("customer.parcel.recipientLabel"));
      document.getElementById("recipient-input")?.focus();
      return;
    }
    navigate("/parcel/tracking");
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.parcel.title")} to="/home" />} bottomNav={<CustomerBottomNav current="home" />}>
      <Card>
        <Input id="pickup-input" label={t("customer.parcel.pickupLabel")} value={pickup} onChange={(e) => setPickup(e.target.value)} />
        <Input id="dropoff-input" label={t("customer.parcel.dropoffLabel")} value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
        <Input
          id="recipient-input"
          label={t("customer.parcel.recipientLabel")}
          value={recipient}
          error={error || undefined}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <Input id="recipient-phone-input" label={t("customer.parcel.recipientPhoneLabel")} value={sampleParcel.recipientPhone} readOnly />
      </Card>
      <Card style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{t("customer.parcel.estimateLabel")}</span>
        <strong>{formatXOF(sampleParcel.priceXof)}</strong>
      </Card>
      <Button onClick={submit}>{t("customer.parcel.cta")}</Button>
    </AppShell>
  );
}

/** C-21: Parcel tracking. */
export function ParcelTracking() {
  const { t } = useT();
  const navigate = useNavigate();

  return (
    <AppShell topBar={<BackTopBar title={t("customer.parcelTracking.title")} to="/parcel" />}>
      <Card
        aria-hidden="true"
        style={{ height: 160, background: "var(--color-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        🗺️
      </Card>
      <Card>
        <ListItem title={courier.fullName} subtitle={t("customer.parcelTracking.courierLabel")} />
        <ListItem title={t("customer.parcelTracking.statusLabel")} subtitle={sampleParcel.status} />
      </Card>
      <Button onClick={() => navigate("/home")}>{t("customer.order.cta")}</Button>
    </AppShell>
  );
}
