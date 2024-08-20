import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Diller ve çeviriler
const resources = {
  en: {
    translation: {
      "title": "Historical Events Since Your Birth Date",
      "dateInputLabel": "Enter Your Birth Date:",
      "slogan": "Discover significant events in history since your birth!",
      "fetchEventsButton": "Get Events",
      "detailsButton": "More Details",
      "noEvents": "No events found",
      "loading": "Loading...",
      "close": "Close",
      "pleaseSelectDate": "Please select a date.",
      "fetchError": "Error fetching events. Please try again later."
    }
  },
  tr: {
    translation: {
      "title": "Doğum Gününüzden Bu Güne Tarihteki Büyük Anlar",
      "dateInputLabel": "Doğum Tarihinizi Girin:",
      "slogan": "Doğum gününüzden bu yana tarihteki önemli olayları keşfedin!",
      "fetchEventsButton": "Olayları Getir",
      "detailsButton": "Daha Detaylı",
      "noEvents": "Olay bulunamadı",
      "loading": "Yükleniyor...",
      "close": "Kapat",
      "pleaseSelectDate": "Lütfen bir tarih seçin.",
      "fetchError": "Olayları alırken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
    }
  },
  de: {
    translation: {
      "title": "Historische Ereignisse Seit Ihrem Geburtsdatum",
      "dateInputLabel": "Geben Sie Ihr Geburtsdatum ein:",
      "slogan": "Entdecken Sie bedeutende Ereignisse in der Geschichte seit Ihrem Geburtsdatum!",
      "fetchEventsButton": "Ereignisse Abrufen",
      "detailsButton": "Mehr Details",
      "noEvents": "Keine Ereignisse gefunden",
      "loading": "Wird geladen...",
      "close": "Schließen",
      "pleaseSelectDate": "Bitte wählen Sie ein Datum aus.",
      "fetchError": "Fehler beim Abrufen der Ereignisse. Bitte versuchen Sie es später erneut."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Varsayılan dil
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
