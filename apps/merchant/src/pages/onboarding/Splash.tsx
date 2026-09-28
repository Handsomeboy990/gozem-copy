import { useState, type FormEvent } from "react";
import { AppShell, Button, Card, Input } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { useNavigate } from "react-router-dom";

const PHONE_PATTERN = "\\+229 ?[0-9]{2}( ?[0-9]{2}){3}";

export function Splash() {
  const { t } = useT();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("+229 97 00 00 04");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/onboarding/otp");
  }

  return (
    <AppShell>
      <Card style={{ textAlign: "center", marginTop: "var(--space-8, 2rem)" }}>
        <h1 style={{ margin: 0 }}>{t("common.appName")}</h1>
        <p>{t("merchant.onboarding.tagline")}</p>
      </Card>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            label={t("merchant.onboarding.phoneLabel")}
            type="tel"
            required
            pattern={PHONE_PATTERN}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit">{t("merchant.onboarding.cta")}</Button>
        </form>
      </Card>
    </AppShell>
  );
}
