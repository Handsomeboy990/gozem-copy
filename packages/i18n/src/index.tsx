import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

export type Dictionary = Record<string, string>;

export interface Dictionaries {
  fr: Dictionary;
  en: Dictionary;
}

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "gozem-lang";

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "fr";
}

export function I18nProvider({
  dictionaries,
  children,
}: {
  dictionaries: Dictionaries;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[lang];
      return dict[key] ?? dictionaries.fr[key] ?? key;
    },
    [dictionaries, lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useT must be used within an I18nProvider");
  }
  return ctx;
}
