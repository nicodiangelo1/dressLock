// Importar traducciones por vista
import loginEn from "@/locales/en/login.json";
import registerEn from "@/locales/en/register.json";
import validationEn from "@/locales/en/validation.json";

import loginEs from "@/locales/es/login.json";
import registerEs from "@/locales/es/register.json";
import validationEs from "@/locales/es/validation.json";

import { createI18n } from "vue-i18n";

const messages = {
  en: {
    login: loginEn,
    register: registerEn,
    validation: validationEn,
  },
  es: {
    login: loginEs,
    register: registerEs,
    validation: validationEs,
  },
};

// Crear la instancia de i18n
const i18n = createI18n({
  locale: "es", // idioma predeterminado
  fallbackLocale: "en", // idioma de respaldo
  messages, // mensajes de traducción
});

export default i18n;
