import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: 'locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: function (data) {
      return data.replace(/a/g, '');
    },
    parsePayload: function (namespace, key, fallbackValue) {
      return { key };
    },
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    customHeaders: {
      authorization: 'foo',
    },
    queryStringParams: { v: '1.3.5' },

    fallbackLng: 'uk',
    debug: true,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
