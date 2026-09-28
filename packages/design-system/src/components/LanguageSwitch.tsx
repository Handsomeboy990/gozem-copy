import { useT } from "@gozem/i18n";

/** FR/EN toggle. Persists choice via I18nProvider (localStorage). */
export function LanguageSwitch() {
  const { lang, setLang, t } = useT();
  return (
    <div className="gz-lang-switch" role="group" aria-label={t("common.language")} data-testid="lang-switch">
      <button type="button" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>
        FR
      </button>
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}
