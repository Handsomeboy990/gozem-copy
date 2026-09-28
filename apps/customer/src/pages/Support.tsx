import { useState } from "react";
import { AppShell, Button, Card } from "@gozem/design-system";
import { useT } from "@gozem/i18n";
import { CustomerBottomNav } from "../lib/nav";

/** C-31: Help (Aide). */
export function Support() {
  const { t } = useT();
  const [sent, setSent] = useState(false);
  const faqs = [
    { q: t("customer.support.faq1Q"), a: t("customer.support.faq1A") },
    { q: t("customer.support.faq2Q"), a: t("customer.support.faq2A") },
    { q: t("customer.support.faq3Q"), a: t("customer.support.faq3A") },
  ];

  return (
    <AppShell bottomNav={<CustomerBottomNav current="support" />}>
      <h1 style={{ fontSize: 18 }}>{t("customer.support.title")}</h1>
      <p style={{ fontWeight: 600 }}>{t("customer.support.faqTitle")}</p>
      {faqs.map((faq) => (
        <details key={faq.q} className="gz-card">
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>{faq.q}</summary>
          <p style={{ marginBottom: 0 }}>{faq.a}</p>
        </details>
      ))}
      <Card>
        <p style={{ marginTop: 0, fontWeight: 600 }}>{t("customer.support.contactTitle")}</p>
        {sent ? (
          <p role="status">✓</p>
        ) : (
          <Button onClick={() => setSent(true)}>{t("customer.support.contactCta")}</Button>
        )}
      </Card>
    </AppShell>
  );
}
