import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)           // Lazily loads JSON files from /public/locales/
  .use(LanguageDetector)  // Detects browser language automatically
  .use(initReactI18next)  // Connects i18next to React
  .init({
    debug: true,
    fallbackLng: "en",

    // Default namespace (used when you don't specify one)
    defaultNS: "common",

    backend: {
      // Template: /locales/{language}/{namespace}.json
      // Example:  /locales/en/home.json
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
