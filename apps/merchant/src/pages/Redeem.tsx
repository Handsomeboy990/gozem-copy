import { useState, type FormEvent } from "react";
import { AppShell, Button, Card, Input, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { promos } from "@gozem/fake-data";

export function Redeem() {
  const { t } = useT();
  const [code, setCode] = useState("");
  const [validated, setValidated] = useState(false);
  const promo = promos[0];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidated(true);
  }

  return (
    <AppShell topBar={<TopBar title={t("merchant.redeem.title")} />}>
      <Card>
        <p>{t("merchant.redeem.description")}</p>
        <form onSubmit={handleSubmit}>
          <Input label={t("merchant.redeem.label")} required value={code} onChange={(e) => setCode(e.target.value)} />
          <Button type="submit">{t("merchant.redeem.cta")}</Button>
        </form>
        {validated ? (
          <p role="status">
            {t("merchant.redeem.success")}: {promo.label}
          </p>
        ) : null}
      </Card>
    </AppShell>
  );
}
