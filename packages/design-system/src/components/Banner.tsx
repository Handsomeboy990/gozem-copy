import { useT } from "@gozem/i18n";

/** Fixed, non-dismissible disclaimer banner. Rendered once by AppShell. */
export function Banner() {
  const { t } = useT();
  return (
    <div className="gz-banner" role="note" data-testid="disclaimer-banner">
      {t("common.disclaimer")}
    </div>
  );
}
