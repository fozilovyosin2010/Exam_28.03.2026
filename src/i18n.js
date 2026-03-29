import i18next from "i18next";

import eng from "./locales/en.json";
import rus from "./locales/ru.json";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: eng },
    ru: { translation: rus },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
