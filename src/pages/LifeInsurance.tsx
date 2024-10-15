import React from 'react';
import ProductPage from '../components/ProductPage';
import { useTranslation } from 'react-i18next';

const LifeInsurance = () => {
  const { t } = useTranslation();

  return (
    <ProductPage
      title={t('services.life.title')}
      description={t('services.life.description')}
      features={t('services.life.features', { returnObjects: true })}
      image="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
  );
};

export default LifeInsurance;