import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const DropdownMenu = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center bg-white border border-[#3b1fc6] text-[#3b1fc6] px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b1fc6] hover:bg-[#f0f4f8]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          {selectedLanguage === 'en' && 'English'}
          {selectedLanguage === 'de' && 'Deutsch'}
          {selectedLanguage === 'tr' && 'Türkçe'}
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-[#3b1fc6] rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className="block px-4 py-2 text-sm text-[#3b1fc6] hover:bg-[#f0f4f8] w-full text-left"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('de')}
              className="block px-4 py-2 text-sm text-[#3b1fc6] hover:bg-[#f0f4f8] w-full text-left"
            >
              Deutsch
            </button>
            <button
              onClick={() => handleLanguageChange('tr')}
              className="block px-4 py-2 text-sm text-[#3b1fc6] hover:bg-[#f0f4f8] w-full text-left"
            >
              Türkçe
            </button>
            {/* Add more languages as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
