import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({
  clientName,
  service,
  location,
  quote,
  rating = 5,
  date
}) {
  return (
    <div className="bg-[#FAF8F5] p-7 sm:p-8 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        {/* Star rating */}
        <div className="flex items-center gap-1 mb-4 text-[#C5A880]">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current text-[#C5A880]" />
          ))}
        </div>

        {/* Quote text */}
        <p className="font-serif italic text-base sm:text-lg text-[#1F1E1D]/90 leading-relaxed mb-6">
          "{quote}"
        </p>
      </div>

      {/* Client Meta */}
      <div className="pt-4 border-t border-[#1F1E1D]/10 flex items-center justify-between">
        <div>
          <h4 className="font-sans font-semibold text-sm text-[#1F1E1D]">
            {clientName}
          </h4>
          <p className="text-xs text-[#7A5555] font-medium">
            {service} {location ? `• ${location}` : ''}
          </p>
        </div>
        {date && (
          <span className="text-[11px] text-[#7B766F] font-medium">
            {date}
          </span>
        )}
      </div>
    </div>
  );
}
