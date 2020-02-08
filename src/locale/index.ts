import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cs from "./cs/translation.json";
import en from "./en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    cs: {
      translation: cs,
    },
  },
  fallbackLng: "en",
  lng: localStorage.getItem("lng") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
