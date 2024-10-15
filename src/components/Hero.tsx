import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        <a href="#contact" className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">{t('hero.cta')}</a>
      </div>
    </div>
  );
};

export default Hero;