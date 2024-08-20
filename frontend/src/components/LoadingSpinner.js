import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingSpinner = () => {
  const { t } = useTranslation();  // i18n çeviri işlevini kullan

  return (
    <div className="mt-4 text-center">
      <div className="border-4 border-t-4 border-gray-200 border-t-[#3498db] border-opacity-50 rounded-full w-8 h-8 animate-spin mx-auto"></div>
      <p className="mt-2">{t('loading')}</p> 
    </div>
  );
};

export default LoadingSpinner;
