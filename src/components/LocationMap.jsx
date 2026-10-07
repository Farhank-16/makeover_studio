import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import Button from './Button';

export default function LocationMap({ className = '' }) {
  return (
    <div className={`bg-[#FAF8F5] border border-[#1F1E1D]/10 rounded-[4px] overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Location Info details */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#FAF8F5]">
          <div>
            <span className="label-caps text-xs text-[#9C825C] mb-3 block">
              Studio Location
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1E1D] mb-4">
              Visit Our Atelier in Jhotwara
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-6">
              Located in Jhotwara, behind Darbar School, offering private consultations and tranquil beauty sessions.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#1F1E1D]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Makeover Beauty Studio</p>
                  <p className="text-[#4A4640] mt-0.5 leading-relaxed">
                    {BRAND_CONFIG.location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Studio Timings</p>
                  <p className="text-[#4A4640] mt-0.5">
                    {BRAND_CONFIG.hours.display} (All 7 Days)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-[#1F1E1D]/10 flex flex-wrap gap-3">
            <Button
              href={BRAND_CONFIG.location.mapQuery}
              variant="primary"
              size="md"
              icon={Navigation}
            >
              Get Directions
            </Button>
          </div>
        </div>

        {/* Map Visual Representation / Interactive map */}
        <div className="lg:col-span-7 bg-[#EFE9E0] relative min-h-[300px] lg:min-h-[420px] overflow-hidden border-t lg:border-t-0 lg:border-l border-[#1F1E1D]/10">
          <img
            src={IMAGES.mapVisual}
            alt="Map location of Makeover Beauty Studio in Jhotwara Jaipur"
            className="w-full h-full object-cover"
          />
          
          {/* Subtle map pin overlay card */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-[3px] border border-[#C5A880]/50 shadow-lg max-w-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="font-semibold text-xs text-[#1F1E1D]">Makeover Beauty Studio</span>
            </div>
            <p className="text-[11px] text-[#4A4640]">
              Behind Darbar School, Jhotwara
            </p>
            <a
              href={BRAND_CONFIG.location.mapQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.1em] font-semibold text-[#9C825C] hover:text-[#1F1E1D]"
            >
              Open Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
