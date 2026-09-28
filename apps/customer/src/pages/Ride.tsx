import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppShell, Button, Card, Input, ListItem } from "@gozem/design-system";
import { formatXOF, rideClasses, rides, users, type RideClassId } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar } from "../lib/nav";
import { FedaPayPreview } from "../components/FedaPayPreview";

const activeRide = rides.find((r) => r.status === "ongoing") ?? rides[0];
const driver = users.find((u) => u.role === "driver")!;

function classFromParams(params: URLSearchParams): RideClassId {
  const value = params.get("class");
  return (rideClasses.find((c) => c.id === value)?.id ?? "zem") as RideClassId;
}

/** C-05: Pick destination. */
export function RideDestination() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);
  const [pickup, setPickup] = useState("Akpakpa, Cotonou");
  const [dropoff, setDropoff] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (!dropoff.trim()) {
      setError(t("customer.destination.dropoffLabel"));
      document.getElementById("dropoff-input")?.focus();
      return;
    }
    navigate(`/ride/class?class=${classId}`);
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.destination.title")} to="/home" />}>
      <Card>
        <Input id="pickup-input" label={t("customer.destination.pickupLabel")} value={pickup} onChange={(e) => setPickup(e.target.value)} />
        <Input
          id="dropoff-input"
          label={t("customer.destination.dropoffLabel")}
          placeholder={t("customer.destination.dropoffPlaceholder")}
          value={dropoff}
          error={error || undefined}
          onChange={(e) => setDropoff(e.target.value)}
        />
      </Card>
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{t("customer.destination.savedTitle")}</p>
        <ListItem title={t("customer.addresses.home")} subtitle="Akpakpa, Cotonou" onClick={() => setPickup("Akpakpa, Cotonou")} />
        <ListItem title={t("customer.addresses.work")} subtitle="Fidjrossè, Cotonou" onClick={() => setDropoff("Fidjrossè, Cotonou")} />
      </Card>
      <Button onClick={submit}>{t("customer.destination.cta")}</Button>
    </AppShell>
  );
}

/** C-06: Choose ride class. */
export function RideClassPicker() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [selected, setSelected] = useState<RideClassId>(classFromParams(params));

  return (
    <AppShell topBar={<BackTopBar title={t("customer.class.title")} to="/ride/destination" />}>
      <Card style={{ padding: 0 }}>
        {rideClasses.map((rideClass) => (
          <button
            key={rideClass.id}
            type="button"
            className="gz-list-item"
            aria-pressed={selected === rideClass.id}
            onClick={() => setSelected(rideClass.id)}
            style={{
              background: selected === rideClass.id ? "var(--color-primary-tint)" : "none",
              padding: "var(--space-3)",
            }}
          >
            <span className="gz-list-item__body">
              <p className="gz-list-item__title">{rideClass.label}</p>
              <p className="gz-list-item__subtitle">
                3 {t("customer.class.etaSuffix")} {rideClass.invented ? `· ${t("common.invented")}` : ""}
              </p>
            </span>
            <strong>{formatXOF(rideClass.fareXof)}</strong>
          </button>
        ))}
      </Card>
      <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
        <span className="gz-card" style={{ flex: 1, marginBottom: 0, fontSize: 13 }}>
          {t("customer.class.walletLink")}
        </span>
        <span className="gz-card" style={{ flex: 1, marginBottom: 0, fontSize: 13 }}>
          {t("customer.class.promoLink")}
        </span>
      </div>
      <Button onClick={() => navigate(`/ride/searching?class=${selected}`)}>
        {t("customer.class.cta")} · {rideClasses.find((c) => c.id === selected)?.label}
      </Button>
    </AppShell>
  );
}

/** C-07: Searching for driver. */
export function RideSearching() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.searching.title")} to={`/ride/class?class=${classId}`} />}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-6) 0" }}>
        <style>{"@keyframes spin { to { transform: rotate(360deg); } }"}</style>
        <div
          role="status"
          aria-label={t("customer.searching.title")}
          style={{
            width: 64,
            height: 64,
            borderRadius: "var(--radius-full)",
            border: "4px solid var(--color-primary-tint)",
            borderTopColor: "var(--color-primary)",
            animation: "spin 1s linear infinite",
          }}
        />
        <p style={{ fontWeight: 600 }}>{t("customer.searching.subtitle")}</p>
        <div style={{ width: "100%" }}>
          <Button variant="secondary" onClick={() => navigate(`/ride/assigned?class=${classId}`)}>
            {t("customer.assigned.title")}
          </Button>
        </div>
        <div style={{ width: "100%" }}>
          <Button variant="ghost" onClick={() => navigate("/home")}>
            {t("common.cancel")}
          </Button>
        </div>
      </div>
    </AppShell>
  );
}

/** C-08: Driver assigned. */
export function RideAssigned() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);
  const vehiclePlate = "AB 1234 RB";

  return (
    <AppShell topBar={<BackTopBar title={t("customer.assigned.title")} to="/ride/searching" />}>
      <Card>
        <p style={{ fontWeight: 700, fontSize: 17, marginTop: 0 }}>{driver.fullName}</p>
        <p style={{ fontSize: 13, color: "var(--color-grey)" }}>
          {t("customer.assigned.ratingLabel")}: 4.8 · {t("customer.assigned.plateLabel")}: {vehiclePlate}
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Button variant="secondary">{t("customer.assigned.call")}</Button>
          <Button variant="secondary">{t("customer.assigned.message")}</Button>
        </div>
      </Card>
      <Button onClick={() => navigate(`/ride/tracking?class=${classId}`)}>{t("customer.assigned.cta")}</Button>
    </AppShell>
  );
}

/** C-09: In trip. */
export function RideTracking() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.tracking.title")} to="/ride/assigned" />}>
      <Card
        aria-hidden="true"
        style={{ height: 180, background: "var(--color-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        🗺️
      </Card>
      <Card>
        <ListItem title={t("customer.tracking.fareDetails")} subtitle={formatXOF(activeRide.fareXof)} />
      </Card>
      <Button onClick={() => navigate(`/ride/arrived?class=${classId}`)}>{t("customer.tracking.cta")}</Button>
    </AppShell>
  );
}

/** C-10: Arrived / trip summary. */
export function RideArrived() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);
  const rideClass = rideClasses.find((c) => c.id === classId)!;

  return (
    <AppShell topBar={<BackTopBar title={t("customer.arrived.title")} to="/ride/tracking" />}>
      <Card>
        <ListItem title={t("customer.arrived.distanceLabel")} subtitle={`${activeRide.distanceKm} km`} />
        <ListItem title={t("customer.arrived.durationLabel")} subtitle="14 min" />
        <ListItem title={t("customer.arrived.fareLabel")} subtitle={formatXOF(rideClass.fareXof)} />
      </Card>
      <Button onClick={() => navigate(`/ride/pay?class=${classId}`)}>{t("customer.arrived.cta")}</Button>
    </AppShell>
  );
}

/** C-11: Pay. */
export function RidePay() {
  const { t } = useT();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const classId = classFromParams(params);
  const rideClass = rideClasses.find((c) => c.id === classId)!;
  const [method, setMethod] = useState<"wallet" | "cash" | "card" | "fedapay">("wallet");

  const methods: Array<{ id: typeof method; label: string }> = [
    { id: "wallet", label: t("customer.pay.wallet") },
    { id: "cash", label: t("customer.pay.cash") },
    { id: "card", label: t("customer.pay.card") },
    { id: "fedapay", label: t("customer.pay.fedapayName") },
  ];

  return (
    <AppShell topBar={<BackTopBar title={t("customer.pay.title")} to="/ride/arrived" />}>
      <Card>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-grey)" }}>{t("customer.pay.totalLabel")}</p>
        <p style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{formatXOF(rideClass.fareXof)}</p>
      </Card>
      <Card style={{ padding: 0 }} role="radiogroup" aria-label={t("customer.pay.methodLabel")}>
        {methods.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={method === m.id}
            className="gz-list-item"
            onClick={() => setMethod(m.id)}
            style={{ background: method === m.id ? "var(--color-primary-tint)" : "none", padding: "var(--space-3)" }}
          >
            <span className="gz-list-item__title">{m.label}</span>
          </button>
        ))}
      </Card>
      <FedaPayPreview />
      <Button onClick={() => navigate(`/ride/rate?class=${classId}`)}>{t("customer.pay.cta")}</Button>
    </AppShell>
  );
}

/** C-12: Rate driver. */
export function RideRate() {
  const { t } = useT();
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);

  return (
    <AppShell topBar={<BackTopBar title={t("customer.rate.title")} to="/ride/pay" />}>
      <Card style={{ textAlign: "center" }}>
        <p style={{ fontWeight: 600 }}>{t("customer.rate.subtitle")}</p>
        <div role="radiogroup" aria-label={t("customer.rate.title")} style={{ display: "flex", justifyContent: "center", gap: "var(--space-2)" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={rating === star}
              aria-label={`${star}/5`}
              onClick={() => setRating(star)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 28,
                color: star <= rating ? "var(--color-primary)" : "var(--color-border)",
                minWidth: 44,
                minHeight: 44,
              }}
            >
              ★
            </button>
          ))}
        </div>
      </Card>
      <Button onClick={() => navigate("/home")}>{t("customer.rate.cta")}</Button>
    </AppShell>
  );
}
