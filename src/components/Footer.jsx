import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowUpRight, Sparkles, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-[#1F1E1D] text-[#FAF8F5] pt-16 pb-12 border-t border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="group flex flex-col mb-4">
              <span className="font-serif text-3xl font-normal tracking-[0.06em] text-[#FAF8F5]">
                {BRAND_CONFIG.shortName}
              </span>
              <span className="label-caps text-[10px] tracking-[0.22em] text-[#C89B9B] font-medium mt-1">
                {BRAND_CONFIG.tagline}
              </span>
            </Link>
            <p className="text-sm text-[#FAF8F5]/70 leading-relaxed max-w-sm mb-6">
              A serene beauty haven in Jhotwara, Jaipur dedicated to bridal couture, radiant skin therapies, artisan hair, and bespoke makeup rituals.
            </p>
            <div className="flex items-center gap-3">
              <WhatsAppButton
                label="WhatsApp Booking"
                className="!bg-[#FAF8F5] !text-[#1F1E1D] !border-none hover:!bg-[#EFE9E0]"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="label-caps text-xs text-[#C5A880] mb-5 tracking-[0.16em]">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF8F5]/80">
              <li>
                <Link to="/" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  Beauty Services
                </Link>
              </li>
              <li>
                <Link to="/bridal" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  Bridal Couture
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  Lookbook & Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick list */}
          <div className="lg:col-span-3">
            <h3 className="label-caps text-xs text-[#C5A880] mb-5 tracking-[0.16em]">
              Key Offerings
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/70">
              <li>• Bridal & Airbrush Makeup</li>
              <li>• Engagement & Roka Artistry</li>
              <li>• Architectural Hair Updos & Colour</li>
              <li>• Signature Radiance Facials</li>
              <li>• Luxury Manicure & Pedicure</li>
              <li>• Italian Rica Waxing</li>
              <li>• Tailored Pre-Bridal Packages</li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="label-caps text-xs text-[#C5A880] mb-5 tracking-[0.16em]">
              Jaipur Studio
            </h3>
            
            <div className="space-y-4 text-xs text-[#FAF8F5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed">
                    {BRAND_CONFIG.location.fullAddress}
                  </p>
                  <a
                    href={BRAND_CONFIG.location.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A880] hover:underline inline-flex items-center gap-1 mt-1.5 font-medium block"
                  >
                    View on Google Maps <ArrowUpRight className="w-3 h-3 inline" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${BRAND_CONFIG.contact.WHATSAPP_NUMBER}`}
                  className="font-semibold text-[#FAF8F5] hover:text-[#C5A880] transition-colors"
                >
                  {BRAND_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#FAF8F5]">Hours of Operation</p>
                  <p className="mt-0.5">{BRAND_CONFIG.hours.display}</p>
                  <p className="text-[11px] text-[#FAF8F5]/60 mt-0.5">{BRAND_CONFIG.hours.days}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={BRAND_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#FAF8F5]/80 hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#FAF8F5]/50 gap-4">
          <p>© {new Date().getFullYear()} Makeover Beauty Studio. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>Jhotwara, Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
