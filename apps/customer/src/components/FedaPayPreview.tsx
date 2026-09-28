import { useT } from "@gozem/i18n";

/**
 * Preview-only mention of FedaPay as a payment option coming in a later phase.
 * No real integration; shows FedaPay's own name and logo per spec section 8,
 * owner requirement: brand name AND logo. Logo fetched from fedapay.com, see
 * research/brand/SOURCES.md.
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
      <img
        src={`${import.meta.env.BASE_URL}fedapay-logo.svg`}
        alt="FedaPay"
        style={{ height: 20, width: "auto" }}
      />
      <span style={{ fontSize: 12, color: "var(--color-grey)" }}>{t("common.fedapayPreview")}</span>
    </div>
  );
}
