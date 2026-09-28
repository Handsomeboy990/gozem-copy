import { useT } from "@gozem/i18n";

/**
 * Preview-only mention of FedaPay as a payment option coming in a later phase.
 * No real integration; text wordmark per spec section 8, owner answer 2.
 */
export function FedaPayPreview() {
  const { t } = useT();
  return (
    <div
      className="gz-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        background: "var(--color-primary-tint)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontWeight: 800,
          fontSize: 18,
          color: "var(--color-primary)",
          fontStyle: "italic",
        }}
      >
        FedaPay
      </span>
      <span style={{ fontSize: 12, color: "var(--color-grey)" }}>{t("common.fedapayPreview")}</span>
    </div>
  );
}
