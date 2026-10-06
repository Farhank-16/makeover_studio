import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({
  title,
  category,
  description,
  image,
  link = "/services",
  duration,
  features = []
}) {
  return (
    <div className="group bg-[#FAF8F5] border border-[#1F1E1D]/10 hover:border-[#C5A880]/70 rounded-[3px] overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full">
      {/* Image with subtle zoom on hover */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#EFE9E0]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1D]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {category && (
          <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm text-[#1F1E1D] label-caps text-[10px] px-2.5 py-1 rounded-[2px] border border-[#1F1E1D]/5">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F1E1D] group-hover:text-[#9C825C] transition-colors">
              {title}
            </h3>
            {duration && (
              <span className="text-xs text-[#7A5555] font-medium tracking-wide">
                {duration}
              </span>
            )}
          </div>

          <p className="text-sm text-[#4A4640] leading-relaxed mb-4">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="space-y-1.5 mb-6 pt-2 border-t border-[#1F1E1D]/5">
              {features.map((feat, idx) => (
                <li key={idx} className="text-xs text-[#7B766F] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C5A880] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4 border-t border-[#1F1E1D]/10 mt-auto">
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#1F1E1D] group-hover:text-[#C5A880] transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
