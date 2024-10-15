import React from 'react';
import ProductPage from '../components/ProductPage';
import { useTranslation } from 'react-i18next';

const TemporaryResidencyInsurance = () => {
  const { t } = useTranslation();

  return (
    <ProductPage
      title={t('services.residency.title')}
      description={t('services.residency.description')}
      features={t('services.residency.features', { returnObjects: true })}
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
  );
};

export default TemporaryResidencyInsurance;