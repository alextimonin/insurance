import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">PolSafe Insurance</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2024 PolSafe Insurance. {t('footer.rights')}</p>
            <p>{t('footer.serving')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;