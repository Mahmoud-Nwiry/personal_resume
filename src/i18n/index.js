import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ar from './arabic.json'
import en from './english.json'

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation : en
      },
      ar: {
        translation : ar
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


export default i18n;