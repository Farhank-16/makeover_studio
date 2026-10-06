import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right ml-auto items-end'
  }[align] || 'text-center mx-auto items-center';

  return (
    <div className={`flex flex-col max-w-2xl ${alignClass} ${className} mb-12 sm:mb-16`}>
      {eyebrow && (
        <span className={`label-caps mb-3.5 inline-block ${light ? 'text-[#E0C298]' : 'text-[#9C825C]'}`}>
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.2] tracking-[-0.015em] mb-4 ${
          light ? 'text-[#FAF8F5]' : 'text-[#1F1E1D]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`font-sans text-sm sm:text-base leading-relaxed ${
          light ? 'text-[#FAF8F5]/80' : 'text-[#4A4640]'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className={`w-12 h-[1px] mt-6 ${
        light ? 'bg-[#C5A880]/60' : 'bg-[#C5A880]/80'
      } ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
