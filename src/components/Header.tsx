import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on the home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Shield className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">PolSafe Insurance</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:underline"
              >
                {t('header.services')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:underline"
              >
                {t('header.about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:underline"
              >
                {t('header.contact')}
              </button>
            </li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;