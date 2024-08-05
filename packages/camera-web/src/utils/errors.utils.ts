import { TranslationObject } from '@monkvision/types';
import { UserMediaErrorType } from '../Camera';

/**
 * Get a translation object (that can be translated using the useObjectTranslation hook) that contains the translations
 * for the error label corresponding to the camera error passed as an argument of this function.
 */
export function getCameraErrorLabel(error?: UserMediaErrorType): TranslationObject | null {
  switch (error) {
    case UserMediaErrorType.NOT_ALLOWED:
      return {
        en: 'Camera preview unavailable because camera access was not granted to the page.',
        fr: "L'apperçu de la caméra n'est pas disponible car l'accès à la caméra n'est pas autorisé.",
        de: 'Die Kameravorschau ist nicht verfügbar, da für die Seite kein Kamerazugriff gewährt wurde.',
        nl: 'De cameravoorbeeld is niet beschikbaar omdat er geen toegang tot de camera is verleend aan de pagina.',
      };
    case UserMediaErrorType.WEBPAGE_NOT_ALLOWED:
      return {
        en: 'Unable to get camera access. Make sure to press “Allow” when asked to grant camera permission for this web page.',
        fr: "Impossible d'accéder à la caméra. Veuillez vous assurer d'appuyer sur “Autoriser” lorsqu'on vous propose d'autoriser l'accès à la caméra pour cette page web.",
        de: 'Die Kamera kann nicht zugelassen werden. Stellen Sie sicher, dass Sie auf „Zulassen“ drücken, wenn Sie aufgefordert werden, die Kamera für diese Webseite zuzulassen.',
        nl: 'Kan geen toestemming krijgen voor de camera. Zorg ervoor dat u op “Toestaan” drukt wanneer u wordt gevraagd om toestemming te geven voor het gebruik van de camera op deze webpagina.',
      };
    case UserMediaErrorType.BROWSER_NOT_ALLOWED:
      return {
        en: "Unable to get camera access. Make sure to grant camera access to your current internet browser in your device's settings.",
        fr: "Impossible d'accéder à la caméra. Veuillez vous assurer d'autoriser l'accès à la caméra pour ce navigateur internet dans les paramètres de votre téléphone.",
        de: 'Der Zugriff auf die Kamera ist nicht möglich. Stellen Sie sicher, dass Sie in den Einstellungen Ihres Geräts den Kamerazugriff für Ihren aktuellen Internetbrowser zulassen.',
        nl: 'Kan geen cameratoegang krijgen. Zorg ervoor dat u de camera toegang verleent tot uw huidige internet browser in de instellingen van uw apparaat.',
      };
    case UserMediaErrorType.STREAM_INACTIVE:
      return {
        en: 'The camera video stream was closed unexpectedly.',
        fr: 'Le flux vidéo de la caméra a été coupé de manière inattendue.',
        de: 'Der Video-Stream der Kamera wurde unerwartet geschlossen.',
        nl: 'De videostream van de camera is onverwacht gesloten.',
      };
    case UserMediaErrorType.INVALID_STREAM:
      return {
        en: 'Unable to process the camera video stream.',
        fr: 'Impossible de traiter le flux vidéo de la caméra.',
        de: 'Der Videostrom der Kamera kann nicht verarbeitet werden.',
        nl: 'De videostream van de camera kan niet worden verwerkt.',
      };
    default:
      return {
        en: 'An unexpected error occurred when fetching the camera video stream.',
        fr: 'Une erreur inattendue est survenue lors de la récupération du flux vidéo de la caméra.',
        de: 'Beim Abrufen des Kamera-Videostreams ist ein unerwarteter Fehler aufgetreten.',
        nl: 'Er is een onverwachte fout opgetreden bij het ophalen van de videostream van de camera.',
      };
  }
}
