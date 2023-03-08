import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    title: 'What is hwygowerhsdf ? - Read below for more information',
                    description: 'hwygowerhsdf - One never knows...!',
                    commitList: 'Commit list:',
                    moreAbout: 'More about hwygowerhsdf',
                    imageAlt: 'hwygowerhsdf hidden logo'
                }
            },
            fr: {
                translation: {
                    title: 'Qu\'est-ce que hwygowerhsdf ? - Continuez à lire pour plus d\'informations',
                    description: 'hwygowerhsdf - On ne sait jamais...!',
                    commitList: 'Liste de changements (commits):',
                    moreAbout: 'Davantage à propos de hwygowerhsdf',
                    imageAlt: 'logo caché de hwygowerhsdf'

                }
            }
        }
    });

export default i18n;