import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector) // detects user browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    debug: true,
    resources: {
      en: {
        translation: {
          greeting: 'Welcome to React: Welcome to React and react-i18next',
          quotes: {
            bennett: '“Even if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don’t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved." -Roy T. Bennett, The Light in the Heart' 
          }          
        }
      },
      es: {
        translation: {
          greeting: 'Bienvenido a React: Bienvenido a React y React-i18next',
          quotes: {
            bennett: '“Incluso si no puedes cambiar a todas las personas que te rodean, puedes cambiar a las personas con las que eliges estar. La vida es demasiado corta para perder el tiempo con personas que no te respetan, aprecian ni valoran. Pasa tu vida con personas que te hagan sonreír, reír y sentirte amado." -Roy T. Bennett, The Light in the Heart' 
          }          
        }
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n;
