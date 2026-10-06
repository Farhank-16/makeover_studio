import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal', path: '/bridal' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/about#reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro bar for location & hours */}
      <div className="bg-[#1F1E1D] text-[#FAF8F5]/80 text-[11px] py-1.5 px-4 tracking-[0.06em] hidden md:block border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              {BRAND_CONFIG.location.shortAddress} (Near Hariyana Marriage Garden)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C5A880]" />
              Open Daily: {BRAND_CONFIG.hours.display}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#C5A880]">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3" />
              Bridal & Studio Appointments Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border-b border-[#1F1E1D]/10 py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#1F1E1D]/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="group flex flex-col focus:outline-none">
            <span className="font-serif text-2xl sm:text-[1.7rem] font-semibold tracking-[0.08em] text-[#1F1E1D] leading-none group-hover:text-[#9C825C] transition-colors">
              {BRAND_CONFIG.shortName}
            </span>
            <span className="label-caps text-[9px] tracking-[0.24em] text-[#7A5555] font-medium mt-1">
              {BRAND_CONFIG.tagline}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.14em] transition-colors duration-200 py-1 font-medium relative ${
                    isActive
                      ? 'text-[#1F1E1D] font-semibold'
                      : 'text-[#4A4640] hover:text-[#1F1E1D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A880]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button to="/contact" variant="primary" size="md">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.1em] font-semibold bg-[#1F1E1D] text-[#FAF8F5] px-3.5 py-2 rounded-[2px]"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1F1E1D] hover:text-[#9C825C] focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#1F1E1D]/10 bg-[#FAF8F5] px-6 pt-4 pb-8 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm uppercase tracking-[0.14em] py-2 border-b border-[#1F1E1D]/5 ${
                      isActive
                        ? 'text-[#1F1E1D] font-semibold border-l-2 border-l-[#C5A880] pl-2'
                        : 'text-[#4A4640] hover:text-[#1F1E1D]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Book Appointment
                </Button>
                <div className="text-center text-xs text-[#7B766F] pt-2">
                  <p>{BRAND_CONFIG.location.shortAddress}</p>
                  <p className="mt-1">Open Daily: {BRAND_CONFIG.hours.display}</p>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
