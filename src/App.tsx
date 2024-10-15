import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarInsurance from './pages/CarInsurance';
import TemporaryResidencyInsurance from './pages/TemporaryResidencyInsurance';
import LifeInsurance from './pages/LifeInsurance';
import './i18n';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car-insurance" element={<CarInsurance />} />
            <Route path="/temporary-residency-insurance" element={<TemporaryResidencyInsurance />} />
            <Route path="/life-insurance" element={<LifeInsurance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;