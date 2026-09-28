import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, Button, Card, Input, OtpInput } from "@gozem/design-system";
import { FIXED_OTP, users } from "@gozem/fake-data";
import { useT } from "@gozem/i18n";
import { BackTopBar } from "../lib/nav";

/** C-01: Splash / brand. */
export function Splash() {
  const { t } = useT();
  const navigate = useNavigate();
  return (
    <AppShell>
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-5)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--color-primary)", margin: 0 }}>
          {t("common.appName")}
        </h1>
        <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>{t("customer.splash.tagline")}</p>
        <div style={{ width: "100%" }}>
          <Button onClick={() => navigate("/onboarding/phone")}>{t("customer.splash.cta")}</Button>
        </div>
      </div>
    </AppShell>
  );
}

/** C-02: Phone entry. */
export function PhoneEntry() {
  const { t } = useT();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (phone.trim().length < 8) {
      setError(t("customer.phone.label"));
      document.getElementById("phone-input")?.focus();
      return;
    }
    navigate("/onboarding/otp");
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.phone.title")} to="/onboarding" />}>
      <Card>
        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "flex-end" }}>
          <div style={{ minWidth: 56, paddingBottom: 14, fontWeight: 600 }}>{t("customer.phone.prefix")}</div>
          <div style={{ flex: 1 }}>
            <Input
              id="phone-input"
              label={t("customer.phone.label")}
              placeholder={t("customer.phone.placeholder")}
              inputMode="tel"
              value={phone}
              error={error || undefined}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={submit}>{t("customer.phone.cta")}</Button>
      </Card>
    </AppShell>
  );
}

/** C-03: OTP verification, fixed test code, no network call (spec section 6). */
export function OtpVerify() {
  const { t } = useT();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const client = users.find((u) => u.role === "client");

  function submit() {
    if (value !== FIXED_OTP) {
      setError(t("customer.otp.error"));
      return;
    }
    setError("");
    navigate("/home");
  }

  return (
    <AppShell topBar={<BackTopBar title={t("customer.otp.title")} to="/onboarding/phone" />}>
      <Card>
        <p style={{ marginTop: 0 }}>
          {t("common.otpFixedNotice")}: <strong data-testid="fixed-otp">{FIXED_OTP}</strong>
        </p>
        <p style={{ fontSize: 13, color: "var(--color-grey)" }}>{client?.phone}</p>
        <OtpInput label={t("customer.otp.label")} value={value} onChange={setValue} />
        {error ? (
          <p role="alert" style={{ color: "var(--color-danger)", fontSize: 13 }}>
            {error}
          </p>
        ) : null}
        <div style={{ marginTop: "var(--space-4)" }}>
          <Button onClick={submit}>{t("customer.otp.cta")}</Button>
        </div>
      </Card>
    </AppShell>
  );
}
