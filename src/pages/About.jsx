import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import { TESTIMONIALS } from '../data/testimonials';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import LocationMap from '../components/LocationMap';
import CTASection from '../components/CTASection';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT MAKEOVER BEAUTY STUDIO"
        title="More Than a Beauty Studio"
        subtitle="A tranquil haven in Jhotwara, Jaipur where bespoke artistry, personal attention, and high-performance beauty rituals unite."
      />

      {/* 1. Studio Introduction & Atmosphere */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Imagery Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="aspect-[4/5] rounded-[3px] overflow-hidden bg-[#EFE9E0] border border-[#1F1E1D]/10 shadow-md">
                  <img
                    src={IMAGES.studio.interior}
                    alt="Private dressing suite in Jhotwara studio"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-[3px] overflow-hidden bg-[#EFE9E0] border border-[#1F1E1D]/10 shadow-md translate-y-6">
                  <img
                    src={IMAGES.studio.brushes}
                    alt="Artisan vanity and cosmetic brushes"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <span className="label-caps text-xs text-[#9C825C] mb-3 tracking-[0.16em]">
                OUR ORIGIN & PURPOSE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1E1D] font-normal leading-[1.2] mb-6">
                Crafted for Your Most Cherished Moments
              </h2>
              <p className="text-sm sm:text-base text-[#4A4640] leading-relaxed mb-6">
                At Makeover Beauty Studio, we believe that beauty is deeply personal. Whether you are stepping in for a restorative weekend facial, precise eyebrow sculpting, or preparing for your royal wedding day, our focus remains steadfast: celebrating what makes you uniquely you.
              </p>
              <p className="text-xs sm:text-sm text-[#7B766F] leading-relaxed mb-8">
                Located in Jhotwara, Jaipur, our boutique atelier provides an escape from the city's bustle. Here, clients enjoy private consultation suites, attentive listening, and high-end hygiene standards tailored to sensitive skin and discerning aesthetics.
              </p>
              
              <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-[#1F1E1D]/10">
                <div>
                  <h4 className="font-serif text-2xl text-[#1F1E1D]">Jaipur</h4>
                  <p className="label-caps text-[10px] text-[#7A5555] mt-1">Heritage Meets Modern Glam</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#1F1E1D]">100%</h4>
                  <p className="label-caps text-[10px] text-[#7A5555] mt-1">Personalized Attention</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Beauty Philosophy & Values */}
      <section className="py-20 sm:py-24 bg-[#EFE9E0]/40 border-y border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR CORE PILLARS"
            title="The Beauty Philosophy"
            subtitle="How we approach every appointment, makeup brushstroke, and skincare session."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 flex flex-col items-start">
              <div className="w-10 h-10 rounded-[2px] bg-[#EFE9E0] flex items-center justify-center text-[#9C825C] mb-6 border border-[#C5A880]/30">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">
                Individual Attention
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed">
                No rushed cookie-cutter routines. We take the time to examine your skin undertone, facial contours, outfit colors, and personal comfort.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 flex flex-col items-start">
              <div className="w-10 h-10 rounded-[2px] bg-[#EFE9E0] flex items-center justify-center text-[#9C825C] mb-6 border border-[#C5A880]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">
                Premium Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed">
                We strictly use professional-grade cosmetics, HD airbrush products, Italian liposoluble waxes, and restorative botanicals that protect skin integrity.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 flex flex-col items-start">
              <div className="w-10 h-10 rounded-[2px] bg-[#EFE9E0] flex items-center justify-center text-[#9C825C] mb-6 border border-[#C5A880]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">
                Sanctuary & Comfort
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed">
                Relaxed appointments in air-conditioned suites equipped with custom vanity mirrors, soothing music, and hygienic sanitation rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location & Studio in Jhotwara */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="JAIPUR ATELIER"
            title="Visit Our Jhotwara Studio"
            subtitle="Conveniently situated in Jhotwara behind Darbar School."
          />

          <LocationMap />
        </div>
      </section>

      {/* 4. Client Reflections */}
      <section className="py-20 sm:py-24 bg-[#EFE9E0]/30 border-t border-[#1F1E1D]/5" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="VOICES OF OUR CLIENTS"
            title="Client Reviews & Trust"
            subtitle="Read what our patrons share about their studio visits and bridal transformations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.id}
                clientName={t.clientName}
                service={t.service}
                location={t.location}
                quote={t.quote}
                rating={t.rating}
                date={t.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Experience the Difference"
        description="Book your appointment today and let us take care of your makeup, hair, and skincare with warmth and precision."
      />

    </div>
  );
}
