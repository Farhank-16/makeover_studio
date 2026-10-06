import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Check, Heart, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../data/images';
import { GALLERY_ITEMS } from '../data/gallery';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import WhatsAppButton from '../components/WhatsAppButton';
import CTASection from '../components/CTASection';

export default function Bridal() {
  const bridalGallery = GALLERY_ITEMS.filter(item => item.category === 'Bridal' || item.category === 'Hair');

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="MAKEOVER BRIDAL COUTURE"
        title="Your Day. Your Look. Your Story."
        subtitle="Bridal beauty designed around you, from the first consultation to the final touch."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button to="/contact" variant="primary" size="lg">
            Book Bridal Consultation
          </Button>
          <WhatsAppButton
            label="Enquire Bridal Dates"
            customMessage="Hello Makeover Beauty Studio, I would like to check bridal availability for my wedding date."
          />
        </div>
      </PageHero>

      {/* 2. Hero Bridal Editorial Feature */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="label-caps text-xs text-[#9C825C] mb-3 block">
                THE BRIDAL PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1E1D] font-normal leading-tight mb-6">
                Harmony of Ritual & Precision Artistry
              </h2>
              <p className="text-sm sm:text-base text-[#4A4640] leading-relaxed mb-6">
                A bride's glow is a delicate blend of peaceful preparation, deep skin nourishment, and artistic precision. In our Mahesh Nagar studio, we take time to harmonize your makeup with the intricate embroidery of your lehenga, heirloom jewelry, and venue lighting.
              </p>
              <p className="text-xs sm:text-sm text-[#7B766F] leading-relaxed mb-8">
                Whether you envision a regal Rajputana bridal look with deep crimson lips and sculpted eyes, or an ethereal dewy pastel drape with glass skin, we create a look that feels completely authentic to you.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1F1E1D]/10">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base text-[#1F1E1D]">HD & Airbrush</h4>
                    <p className="text-xs text-[#7B766F]">Flawless camera-ready finish</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base text-[#1F1E1D]">Dupatta & Jewels</h4>
                    <p className="text-xs text-[#7B766F]">Complete styling support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[3px] overflow-hidden bg-[#EFE9E0] border border-[#1F1E1D]/10 shadow-xl">
                <img
                  src={IMAGES.hero.bridePortrait}
                  alt="Jaipur royal bride"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1E1D]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                  <span className="label-caps text-[10px] text-[#C5A880] block mb-1">
                    Signature Bridal Look
                  </span>
                  <p className="font-serif text-lg">
                    Traditional Grandeur Meets Contemporary Poise
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Curated Bridal Offerings */}
      <section className="py-20 sm:py-24 bg-[#EFE9E0]/40 border-y border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CEREMONIAL SERVICES"
            title="Curated Bridal & Groom Offerings"
            subtitle="Tailored packages designed for every auspicious milestone leading up to your wedding."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Main Wedding Day Bridal */}
            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/70 transition-all flex flex-col justify-between">
              <div>
                <span className="label-caps text-xs text-[#9C825C] mb-2 block">Grand Ceremony</span>
                <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">Bridal Makeup Artistry</h3>
                <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-6">
                  Comprehensive wedding day transformation featuring HD or Airbrush makeup, luxury false eyelashes, lens placement, and sweatproof setting.
                </p>
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#1F1E1D]/5 text-xs text-[#1F1E1D]/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Full face HD / Airbrush makeup</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Luxury mink lash extension / strips</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Dupatta draping & kalangi / jewel pin</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Complimentary touch-up lipstick sample</li>
                </ul>
              </div>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Enquire Bridal Date
              </Button>
            </div>

            {/* 2. Engagement & Sangeet */}
            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/70 transition-all flex flex-col justify-between">
              <div>
                <span className="label-caps text-xs text-[#9C825C] mb-2 block">Festive Celebrations</span>
                <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">Engagement & Sangeet</h3>
                <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-6">
                  Vibrant, high-fashion looks designed for ring ceremonies, cocktail nights, and sangeet dance performances with sweatproof formulations.
                </p>
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#1F1E1D]/5 text-xs text-[#1F1E1D]/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Customized eye contour & pigment</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Textured Hollywood waves / messy braid</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Saree / lehenga draping assistance</li>
                </ul>
              </div>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Enquire Engagement
              </Button>
            </div>

            {/* 3. Groom Grooming */}
            <div className="bg-[#FAF8F5] p-8 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/70 transition-all flex flex-col justify-between">
              <div>
                <span className="label-caps text-xs text-[#9C825C] mb-2 block">The Royal Groom</span>
                <h3 className="font-serif text-2xl text-[#1F1E1D] mb-3">Groom Makeup & Styling</h3>
                <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-6">
                  Discreet camera-ready HD correction, skin hydration, anti-shine treatment, beard trimming, and royal turban / kalangi adjustment.
                </p>
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#1F1E1D]/5 text-xs text-[#1F1E1D]/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Natural matte HD skin correction</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Beard alignment & grooming</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C5A880]" /> Saafa / turban kalangi pinning</li>
                </ul>
              </div>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Enquire Groom Grooming
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Pre-Bridal Wellness Timeline */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE BRIDAL COUNTDOWN"
            title="Pre-Bridal Wellness Rituals"
            subtitle="A structured 4-week preparation plan to ensure radiant skin, nourished hair, and effortless confidence on your wedding day."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            {[
              {
                week: "Week 04",
                title: "Skin & Hair Assessment",
                items: ["Skin diagnosis & hydration plan", "Restorative deep hair spa", "Full body exfoliation consultation"]
              },
              {
                week: "Week 03",
                title: "Enzymatic Clarifying",
                items: ["Mild fruit acid peel / facial", "Cuticle therapy & initial manicure", "Eyebrow symmetry mapping"]
              },
              {
                week: "Week 02",
                title: "Radiance & Body Polish",
                items: ["Full body botanical glow polish", "Intensive hair gloss treatment", "Bridal makeup trial / shade match"]
              },
              {
                week: "Week 01",
                title: "Final Glow & Rituals",
                items: ["Signature 24k Gold Radiance Facial", "Italian Rica full body wax", "Chrome bridal gel nail art"]
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-6 rounded-[3px] border border-[#1F1E1D]/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="label-caps text-xs text-[#C5A880] font-bold">
                      {step.week}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#EFE9E0] text-[11px] font-semibold flex items-center justify-center text-[#1F1E1D]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-[#1F1E1D] mb-4">
                    {step.title}
                  </h4>
                  <ul className="space-y-2 text-xs text-[#4A4640]">
                    {step.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bridal Lookbook Preview */}
      <section className="py-20 sm:py-24 bg-[#EFE9E0]/30 border-t border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BRIDAL PORTFOLIO"
            title="The Jaipur Bridal Lookbook"
            subtitle="Glimpses of handcrafted bridal looks styled with grace and poise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalGallery.slice(0, 4).map((item) => (
              <div key={item.id} className="group relative rounded-[3px] overflow-hidden bg-[#EFE9E0] border border-[#1F1E1D]/10">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-[#FAF8F5] border-t border-[#1F1E1D]/5">
                  <h4 className="font-serif text-sm text-[#1F1E1D]">{item.title}</h4>
                  <span className="text-[10px] label-caps text-[#9C825C]">{item.categoryLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation CTA */}
      <CTASection
        title="Reserve Your Wedding Dates Early"
        description="Wedding season dates in Jaipur fill rapidly. Contact Makeover Beauty Studio to discuss your ceremonial itinerary and lock your bridal suite."
      />

    </div>
  );
}
