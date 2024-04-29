import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { monkLanguages } from '@monkvision/types';
import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    supportedLngs: monkLanguages,
    nonExplicitSupportedLngs: true,
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
    },
  })
  .catch(console.error);

export default i18n;
