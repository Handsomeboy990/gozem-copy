import { useState, type FormEvent } from "react";
import { AppShell, Button, Card, Input, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { useNavigate } from "react-router-dom";

const PHONE_PATTERN = "\\+229 ?[0-9]{2}( ?[0-9]{2}){3}";

export function Phone() {
  const { t } = useT();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("+229 97 00 00 02");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/onboarding/otp");
  }

  return (
    <AppShell topBar={<TopBar title={t("driver.phone.title")} />}>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            label={t("driver.phone.label")}
            type="tel"
            required
            pattern={PHONE_PATTERN}
            title={t("driver.phone.error")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit">{t("driver.phone.cta")}</Button>
        </form>
      </Card>
    </AppShell>
  );
}
