import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppShell, Button, Card, Input, ListItem } from "@gozem/design-system";
import { formatXOF, rideClasses, rides, users, type RideClassId } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar } from "../lib/nav";
import { FedaPayPreview } from "../components/FedaPayPreview";

const activeRide = rides.find((r) => r.status === "ongoing") ?? rides[0];
const driver = users.find((u) => u.role === "driver")!;
const REF = `${import.meta.env.BASE_URL}ref/`;

/** Full-screen static styled map (CSS street grid, no tiles, no network) with a back button. */
function RideMap({ onBack, backLabel }: { onBack: () => void; backLabel: string }) {
  return (
    <div className="gz-map" style={{ height: 220, margin: "calc(-1 * var(--space-4)) calc(-1 * var(--space-4)) var(--space-3)", borderRadius: 0 }} aria-hidden="true">
      <button
        type="button"
        className="gz-map__control"
        style={{ top: "var(--space-3)", left: "var(--space-3)" }}
        aria-label={backLabel}
        onClick={onBack}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <span className="gz-map__pin" style={{ top: "38%", left: "62%" }} />
      <span className="gz-map__vehicle" style={{ top: "55%", left: "40%" }} />
    </div>
  );
}

/** Driver card + action buttons, shared by the assigned and tracking bottom sheets. */
function DriverCard() {
  const { t } = useT();
  return (
    <div className="gz-driver-row">
      <img src={`${REF}illustration-driver-avatar-placeholder.png`} alt="" aria-hidden="true" className="gz-driver-row__avatar" />
      <div className="gz-driver-row__body">
        <p style={{ margin: 0, fontWeight: 700 }}>{driver.fullName}</p>
        <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--color-grey)" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>4.0 ★</span> · AB 1234 RB
        </p>
      </div>
      <button type="button" className="gz-round-action" aria-label={t("customer.assigned.message")}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
      <button type="button" className="gz-round-action" aria-label={t("customer.assigned.call")}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </button>
    </div>
  );
}

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

  const classIcon: Record<string, string> = {
    zem: "icon-zem.png",
    tricycle: "icon-tricycle.png",
    taxi: "icon-voiture.png",
    "clim-plus": "icon-voiture.png",
    "eco-plus": "icon-voiture.png",
  };

  return (
    <AppShell>
      <RideMap onBack={() => navigate("/ride/destination")} backLabel={t("common.back")} />
      <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 var(--space-2)" }}>{t("customer.class.title")}</p>
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
            <span className="gz-list-item__icon">
              <img src={`${REF}${classIcon[rideClass.id]}`} alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: "contain" }} />
            </span>
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
      <div style={{ display: "flex", gap: "var(--space-3)", margin: "var(--space-3) 0 var(--space-4)" }}>
        <span className="gz-pill-link" style={{ flex: 1, justifyContent: "center" }}>
          {t("customer.class.walletLink")}
        </span>
        <span className="gz-pill-link" style={{ flex: 1, justifyContent: "center" }}>
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
    <AppShell>
      <RideMap onBack={() => navigate("/ride/searching")} backLabel={t("common.back")} />
      <div className="gz-sheet" style={{ margin: "0 calc(-1 * var(--space-4))", boxShadow: "none" }}>
        <p style={{ margin: "0 0 var(--space-3)", fontWeight: 700, fontSize: 15 }}>{t("customer.assigned.title")}</p>
        <DriverCard />
        <p style={{ fontSize: 12, color: "var(--color-grey)", margin: "var(--space-2) 0 0" }}>
          {t("customer.assigned.plateLabel")}: {vehiclePlate}
        </p>
      </div>
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
    <AppShell>
      <RideMap onBack={() => navigate("/ride/assigned")} backLabel={t("common.back")} />
      <div className="gz-sheet" style={{ margin: "0 calc(-1 * var(--space-4))", boxShadow: "none" }}>
        <p style={{ margin: "0 0 var(--space-3)", fontWeight: 700, fontSize: 15 }}>{t("customer.tracking.status")}</p>
        <DriverCard />
        <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
          <span className="gz-pill-link">{t("customer.class.walletLink")}</span>
          <span className="gz-pill-link">{t("customer.tracking.fareDetails")}: {formatXOF(activeRide.fareXof)}</span>
        </div>
      </div>
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
