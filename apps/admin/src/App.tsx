import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@gozem/i18n";
import fr from "@gozem/i18n/dictionaries/fr/common.json";
import en from "@gozem/i18n/dictionaries/en/common.json";
import nsFr from "@gozem/i18n/dictionaries/fr/admin.json";
import nsEn from "@gozem/i18n/dictionaries/en/admin.json";
import { routes } from "./routes";

const dictionaries = {
  fr: { ...fr, ...nsFr },
  en: { ...en, ...nsEn },
};

export function App() {
  return (
    <I18nProvider dictionaries={dictionaries}>
      <BrowserRouter basename="/admin">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
