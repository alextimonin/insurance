import React from 'react';
import { Car, Home, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <Link to={link} className="block">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Car}
            title={t('services.car.title')}
            description={t('services.car.description')}
            link="/car-insurance"
          />
          <ServiceCard
            icon={Home}
            title={t('services.residency.title')}
            description={t('services.residency.description')}
            link="/temporary-residency-insurance"
          />
          <ServiceCard
            icon={Heart}
            title={t('services.life.title')}
            description={t('services.life.description')}
            link="/life-insurance"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;