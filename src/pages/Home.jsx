import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, Heart, Clock, Award } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { IMAGES } from '../data/images';
import { HOME_SERVICE_PREVIEWS } from '../data/services';
import { TESTIMONIALS, WHY_CHOOSE_US } from '../data/testimonials';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryGrid from '../components/GalleryGrid';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-8 pb-20 overflow-hidden bg-[#FAF8F5]">
        {/* Subtle warm ambient background tone */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFE9E0]/50 via-[#FAF8F5] to-[#FAF8F5] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 label-caps text-xs text-[#9C825C] mb-5 tracking-[0.2em] bg-[#EFE9E0]/80 px-3.5 py-1.5 rounded-[2px] border border-[#C5A880]/30">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>MAKEOVER BEAUTY STUDIO</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4rem] font-normal leading-[1.1] tracking-[-0.02em] text-[#1F1E1D] mb-6">
                Beauty, Styled to Make You Feel <span className="italic font-normal text-[#1F1E1D] underline decoration-[#C5A880]/40 decoration-1 underline-offset-8">Extraordinary.</span>
              </h1>

              {/* Description */}
              <p className="font-sans text-base sm:text-lg text-[#4A4640] max-w-xl leading-relaxed mb-8">
                {BRAND_CONFIG.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <Button to="/contact" variant="primary" size="lg">
                  Book Appointment
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>

              {/* Location Footnote */}
              <div className="flex items-center gap-2 text-xs text-[#7B766F] pt-2 border-t border-[#1F1E1D]/10 w-full max-w-lg">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  <strong>{BRAND_CONFIG.location.area}, {BRAND_CONFIG.location.city}</strong> • Behind Darbar School
                </span>
              </div>
            </motion.div>

            {/* Right Column: Editorial Hero Imagery Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hairline gold offset frame */}
                <div className="absolute -inset-3 border border-[#C5A880]/40 rounded-[4px] translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
                
                {/* Main Hero Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-[#EFE9E0] shadow-xl border border-[#1F1E1D]/10">
                  <img
                    src={IMAGES.hero.bridePortrait}
                    alt={IMAGES.hero.alt}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1D]/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-[2px] border border-[#C5A880]/50 shadow-md">
                    <span className="label-caps text-[10px] text-[#9C825C] block mb-0.5">
                      Bespoke Bridal & Atelier
                    </span>
                    <p className="font-serif text-sm text-[#1F1E1D] italic">
                      "Crafting timeless radiance for your unforgettable celebrations."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT PREVIEW (Split Editorial Layout) */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Atelier Studio Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-[3px] overflow-hidden bg-[#EFE9E0] border border-[#1F1E1D]/10 shadow-lg">
                <img
                  src={IMAGES.studio.interior}
                  alt="Makeover Beauty Studio interior in Jhotwara Jaipur"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating detail badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#FAF8F5] p-5 rounded-[2px] border border-[#C5A880]/60 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span className="label-caps text-[10px] text-[#1F1E1D]">Jaipur Sanctuary</span>
                </div>
                <p className="text-xs text-[#4A4640] leading-relaxed">
                  Tranquil private suites, unhurried appointments, and attentive care.
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <span className="label-caps text-xs text-[#9C825C] mb-3.5 tracking-[0.18em]">
                ABOUT THE STUDIO
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.2] text-[#1F1E1D] mb-6">
                Where Beauty Meets Personal Attention
              </h2>

              <p className="font-sans text-base text-[#4A4640] leading-relaxed mb-6">
                Makeover Beauty Studio provides personalized makeup, hair, skincare and beauty services designed around each client's individual style and occasion.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#7B766F] leading-relaxed mb-8">
                Nestled in Jhotwara, Jaipur, our studio combines modern dermatological skin treatments with high-fashion bridal artistry, ensuring you experience refined elegance in a serene environment.
              </p>

              <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                Discover Our Story
              </Button>
            </div>

          </div>
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CURATED BEAUTY RITUALS"
            title="Our Beauty Services"
            subtitle="Everything you need to look and feel your best, from bespoke bridal makeup to therapeutic skincare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICE_PREVIEWS.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                category={service.category}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              View Complete Services Atelier
            </Button>
          </div>
        </div>
      </section>


      {/* 4. BRIDAL FEATURE SECTION (Dominant Asymmetrical Section) */}
      <section className="py-20 sm:py-28 bg-[#EFE9E0]/40 border-y border-[#1F1E1D]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="label-caps text-xs text-[#9C825C] mb-3.5 tracking-[0.2em]">
                FOR YOUR MOST SPECIAL DAY
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.15] text-[#1F1E1D] mb-6">
                Bridal Beauty, Made Personal
              </h2>

              <p className="font-sans text-base text-[#4A4640] leading-relaxed mb-6">
                From the auspicious engagement and festive sangeet to the grand wedding ceremony, our bridal artistry is tailored specifically for your outfit, jewelry, lighting, and personality.
              </p>

              {/* Service bullet list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 pt-2">
                {[
                  "Luxury HD & Airbrush Bridal Makeup",
                  "Engagement & Roka Styling",
                  "Architectural Bridal Hairstyling",
                  "Multi-Week Pre-Bridal Glow Rituals",
                  "Dupatta Draping & Jewelry Setting",
                  "Groom Makeup & Subtle Grooming"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#1F1E1D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button to="/bridal" variant="primary" size="lg" icon={ArrowRight}>
                  Explore Bridal Services
                </Button>
                <Button to="/contact" variant="outlineGold" size="lg">
                  Book Bridal Consultation
                </Button>
              </div>
            </div>

            {/* Right Asymmetrical Bridal Imagery */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="aspect-[3/4] rounded-[3px] overflow-hidden bg-[#FAF8F5] border border-[#1F1E1D]/10 shadow-md">
                  <img
                    src={IMAGES.services.bridal}
                    alt="Pastel bridal makeup styling"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-[3px] overflow-hidden bg-[#FAF8F5] border border-[#1F1E1D]/10 shadow-md translate-y-6 sm:translate-y-8">
                  <img
                    src={IMAGES.hero.bridePortrait}
                    alt="Royal crimson bride in Jaipur"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE MAKEOVER STANDARD"
            title="Why Choose MAKEOVER"
            subtitle="Thoughtful attention to detail, hygienic practices, and bespoke artistry tailored to you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-start"
              >
                <span className="label-caps text-xs text-[#9C825C] mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#1F1E1D] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#4A4640] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
            
            {/* Highlighted Studio summary box */}
            <div className="bg-[#1F1E1D] text-[#FAF8F5] p-8 rounded-[3px] border border-[#C5A880]/30 flex flex-col justify-between">
              <div>
                <span className="label-caps text-xs text-[#C5A880] mb-3 block">
                  Jhotwara Atelier
                </span>
                <h3 className="font-serif text-xl text-[#FAF8F5] mb-3">
                  Your Sanctuary in Jaipur
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed mb-4">
                  Experience a warm, tranquil environment designed for unhurried pampering and exceptional results.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#C5A880] hover:text-[#FAF8F5] transition-colors"
              >
                <span>Read Studio Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 6. GALLERY PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#EFE9E0]/30 border-t border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PORTFOLIO & LOOKBOOK"
            title="A Glimpse of Our Work"
            subtitle="Explore our artistry across royal bridal drapes, dewy glass-skin makeup, and precision styling."
          />

          <GalleryGrid initialLimit={6} showFilters={false} />

          <div className="mt-14 text-center">
            <Button to="/gallery" variant="primary" size="lg" icon={ArrowRight}>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>


      {/* 7. TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            title="What Our Clients Say"
            subtitle="Honest reflections from brides and clients who trusted us with their special moments."
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


      {/* 8. FINAL CTA SECTION */}
      <CTASection />

    </div>
  );
}
