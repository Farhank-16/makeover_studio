import React from 'react';
import { Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../components/CTASection';

export default function Gallery() {
  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="PORTFOLIO & LOOKBOOK"
        title="A Glimpse of Artistry & Grace"
        subtitle="Explore our curated collection of bridal couture, dewy glass-skin makeup, couture hair artistry, and behind-the-scenes moments at our Jaipur studio."
      />

      {/* Main Interactive Portfolio Gallery */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid showFilters={true} />
        </div>
      </section>

      {/* Behind The Scenes & Studio Moments */}
      <section className="py-20 sm:py-24 bg-[#EFE9E0]/40 border-y border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BEHIND THE MIRROR"
            title="Follow the Daily Creative Process"
            subtitle="From organic skincare concoctions and sanitized brush sets to delicate hand-applied eyelashes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-5 rounded-[3px] border border-[#1F1E1D]/10">
              <div className="aspect-[4/3] rounded-[2px] overflow-hidden mb-4">
                <img
                  src={IMAGES.studio.brushes}
                  alt="Vanity brushes setup"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-[#1F1E1D] mb-1">
                Sanitized & Curated Tools
              </h4>
              <p className="text-xs text-[#7B766F] leading-relaxed">
                Hospital-grade sanitation for every brush, sponge, and skincare spatula prior to every client sitting.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-[3px] border border-[#1F1E1D]/10">
              <div className="aspect-[4/3] rounded-[2px] overflow-hidden mb-4">
                <img
                  src={IMAGES.studio.makeupArtistAtWork}
                  alt="Makeup artist blending highlighter"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-[#1F1E1D] mb-1">
                The Art of Layering
              </h4>
              <p className="text-xs text-[#7B766F] leading-relaxed">
                Thin, weightless veil layering ensures longevity without the heavy cakey feel under Rajasthan's warm climate.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-[3px] border border-[#1F1E1D]/10">
              <div className="aspect-[4/3] rounded-[2px] overflow-hidden mb-4">
                <img
                  src={IMAGES.studio.mirrorDetail}
                  alt="Mirror reflection in Jaipur salon"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-[#1F1E1D] mb-1">
                Consultation & Harmony
              </h4>
              <p className="text-xs text-[#7B766F] leading-relaxed">
                Every appointment begins with thorough color matching under true CRI 95+ studio lighting.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={BRAND_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#1F1E1D] hover:text-[#9C825C] transition-colors"
            >
              <svg className="w-4 h-4 fill-[#C89B9B]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow Our Daily Journey on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Inspired by What You See?"
        description="Let’s design a look that complements your attire and captures your individuality."
      />

    </div>
  );
}
