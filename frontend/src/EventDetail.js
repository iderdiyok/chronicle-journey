import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function EventDetail({ event, onClose }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Modal açıkken scroll'u engelle
    return () => {
      document.body.style.overflow = 'auto'; // Modal kapandıktan sonra scroll'u geri getir
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Animasyon süresinden sonra onClose tetiklenir
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full animate-scale-in"
      >
        <h2 className="text-2xl font-semibold mb-4">{event.summary}</h2>
        <p className="mb-4">{event.details}</p>
        <button
          onClick={handleClose}
          className="bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 transition-colors duration-300"
        >
          {t('close')}
        </button>
      </div>
    </div>
  );
}

export default EventDetail;
