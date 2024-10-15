import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('pl')} className="text-sm font-medium hover:underline">PL</button>
      <button onClick={() => changeLanguage('en')} className="text-sm font-medium hover:underline">EN</button>
      <button onClick={() => changeLanguage('ru')} className="text-sm font-medium hover:underline">RU</button>
    </div>
  );
};

export default LanguageSwitcher;