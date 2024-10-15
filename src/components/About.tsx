import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            {t('about.description1')}
          </p>
          <p className="text-gray-600">
            {t('about.description2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;