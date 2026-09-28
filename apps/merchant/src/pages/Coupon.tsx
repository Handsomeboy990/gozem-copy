import { useState, type FormEvent } from "react";
import { AppShell, Button, Card, Input, TopBar } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { tickets, users } from "@gozem/fake-data";
import { useNavigate } from "react-router-dom";

const REFERENCE = "TCK-2026-0142";

export function Coupon() {
  const { t } = useT();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [redeemed, setRedeemed] = useState(false);
  const ticket = tickets[0];
  const purchaser = users.find((u) => u.role === "client");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRedeemed(true);
  }

  return (
    <AppShell topBar={<TopBar title={t("merchant.coupon.title")} />}>
      <Card>
        <p style={{ fontWeight: 700 }}>{ticket.eventName}</p>
        <p>
          {ticket.eventDate} · {ticket.venue}
        </p>
      </Card>
      {!redeemed ? (
        <Card>
          <form onSubmit={handleSubmit}>
            <Input label={t("merchant.coupon.enterCode")} required value={code} onChange={(e) => setCode(e.target.value)} />
            <Button type="submit">{t("merchant.coupon.redeem")}</Button>
          </form>
        </Card>
      ) : (
        <Card>
          <p role="status" style={{ fontWeight: 700 }}>
            {t("merchant.coupon.result")}
          </p>
          <p>
            {t("merchant.coupon.purchaser")}: {purchaser?.fullName}
          </p>
          <p>
            {t("merchant.coupon.reference")}: {REFERENCE}
          </p>
          <Button type="button" onClick={() => navigate("/home")}>
            {t("common.close")}
          </Button>
        </Card>
      )}
    </AppShell>
  );
}
