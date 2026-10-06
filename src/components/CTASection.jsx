import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import Button from './Button';
import WhatsAppButton from './WhatsAppButton';

export default function CTASection({
  title = "Ready for Your Makeover?",
  description = "Book your appointment and let’s create a look that feels completely you.",
  light = false
}) {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Delicate decorative background border */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1F1E1D] text-[#FAF8F5] rounded-[4px] p-8 sm:p-14 lg:p-16 text-center border border-[#C5A880]/30 shadow-xl">
          
          {/* Subtle antique gold corner accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C5A880]/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C5A880]/60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C5A880]/60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C5A880]/60 pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 label-caps text-xs text-[#E0C298] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mahesh Nagar, Jaipur</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.015em] mb-5 text-[#FAF8F5] max-w-2xl mx-auto leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto mb-9 leading-relaxed font-sans">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              to="/contact"
              variant="white"
              size="lg"
              className="w-full sm:w-auto !text-[#1F1E1D] !bg-[#FAF8F5] hover:!bg-[#EFE9E0]"
            >
              Book Appointment
            </Button>
            
            <WhatsAppButton
              className="w-full sm:w-auto !bg-transparent !text-[#FAF8F5] !border-white/30 hover:!border-white hover:!bg-white/10"
              label="WhatsApp Us"
            />
          </div>

          {/* Location footnote */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#FAF8F5]/60">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{BRAND_CONFIG.location.shortAddress} • Open 11:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
