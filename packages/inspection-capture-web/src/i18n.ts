import { i18nCreateSDKInstance } from '@monkvision/common';
import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import nl from './translations/nl.json';

/**
 * i18n instance of the Inspection CApture Web package. You can use this instance to automatically sync your application
 * current language with the one used by the components of the package.
 */
const i18nInspectionCaptureWeb = i18nCreateSDKInstance({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    nl: { translation: nl },
  },
});

export { i18nInspectionCaptureWeb };
