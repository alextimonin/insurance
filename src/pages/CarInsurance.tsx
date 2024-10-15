import React from 'react';
import ProductPage from '../components/ProductPage';
import { useTranslation } from 'react-i18next';

const CarInsurance = () => {
  const { t } = useTranslation();

  return (
    <ProductPage
      title={t('services.car.title')}
      description={t('services.car.description')}
      features={t('services.car.features', { returnObjects: true })}
      image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
  );
};

export default CarInsurance;