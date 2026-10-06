import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#FAF8F5] border-b border-[#1F1E1D]/5 overflow-hidden">
      {/* Subtle warm background gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EFE9E0]/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="label-caps text-xs text-[#9C825C] tracking-[0.18em] mb-3.5 inline-block">
              {eyebrow}
            </span>
          )}

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1E1D] tracking-[-0.02em] leading-[1.15] mb-5 max-w-4xl mx-auto">
            {title}
          </h1>

          {subtitle && (
            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#4A4640] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto mt-7" />

          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
