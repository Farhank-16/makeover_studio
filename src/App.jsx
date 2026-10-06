import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Bridal from './pages/Bridal';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// SEO Title & Meta Description Manager
function RouteMetaManager() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Makeover Beauty Studio | Beauty & Makeup Studio in Jaipur',
      '/about': 'About Us | Makeover Beauty Studio Mahesh Nagar Jaipur',
      '/services': 'Beauty Services | Makeover Beauty Studio Jaipur',
      '/bridal': 'Bridal Makeup & Beauty Services | Makeover Beauty Studio',
      '/gallery': 'Makeover Beauty Studio | Bridal & Beauty Gallery',
      '/contact': 'Contact Makeover Beauty Studio | Mahesh Nagar, Jaipur'
    };

    const descriptions = {
      '/': 'Makeover Beauty Studio in Mahesh Nagar, Jaipur. Luxury bridal makeup, hair styling, skin treatments, facials, nail care, and bespoke grooming rituals.',
      '/about': 'Discover the philosophy, personalized care, and serene atmosphere of Makeover Beauty Studio in Mahesh Nagar, Jaipur.',
      '/services': 'Explore our complete services menu: HD bridal makeup, haircuts, hair color, rejuvenating facials, Rica waxing, and manicure pedicures in Jaipur.',
      '/bridal': 'Bridal couture, engagement makeup, pre-bridal wellness rituals, and royal groom grooming in Jaipur by Makeover Beauty Studio.',
      '/gallery': 'Lookbook and portfolio of real brides, airbrush makeup, couture hair updos, and beauty artistry in Mahesh Nagar, Jaipur.',
      '/contact': 'Book an appointment or consultation at Makeover Beauty Studio in Mahesh Nagar, Jaipur. Reach us directly on WhatsApp or view map directions.'
    };

    const currentPath = location.pathname;
    document.title = titles[currentPath] || 'Makeover Beauty Studio | Mahesh Nagar, Jaipur';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentPath] || descriptions['/']);
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1B1C1A] selection:bg-[#C89B9B]/20 selection:text-[#1F1E1D]">
      <ScrollToTop />
      <RouteMetaManager />
      
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}
