import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/services';
import { createWhatsAppUrl } from '../data/config';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="TREATMENTS & ARTISTRY"
        title="Our Services"
        subtitle="Thoughtfully curated beauty services for everyday elegance and unforgettable occasions."
      >
        {/* Quick Jump Category Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mt-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`label-caps px-4 py-2 rounded-[2px] transition-all text-xs ${
              activeTab === 'all'
                ? 'bg-[#1F1E1D] text-[#FAF8F5] border border-[#C5A880]'
                : 'bg-[#EFE9E0] text-[#1F1E1D]/80 hover:bg-[#E4E2DF]'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`label-caps px-4 py-2 rounded-[2px] transition-all text-xs ${
                activeTab === cat.id
                  ? 'bg-[#1F1E1D] text-[#FAF8F5] border border-[#C5A880]'
                  : 'bg-[#EFE9E0] text-[#1F1E1D]/80 hover:bg-[#E4E2DF]'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Services List by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {filteredCategories.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            
            {/* Category Header Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#1F1E1D]/10 mb-10">
              <div className="lg:col-span-8">
                <span className="label-caps text-xs text-[#9C825C] mb-2 block">
                  Category 0{catIdx + 1}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1E1D]">
                  {cat.name}
                </h2>
                <p className="text-sm sm:text-base text-[#4A4640] mt-2 leading-relaxed max-w-2xl">
                  {cat.tagline}
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Button to="/contact" variant="primary" size="md">
                  Book {cat.shortName}
                </Button>
              </div>
            </div>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.services.map((item, index) => {
                const whatsappEnquiryUrl = createWhatsAppUrl(
                  `Hello Makeover Beauty Studio, I would like to enquire about your ${item.name} (${cat.name}) service.`
                );

                return (
                  <div
                    key={index}
                    className="bg-[#FAF8F5] p-7 rounded-[3px] border border-[#1F1E1D]/10 hover:border-[#C5A880]/70 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow"
                  >
                    <div>
                      {/* Subtitle / duration */}
                      <div className="flex items-center justify-between text-xs text-[#7A5555] mb-2">
                        <span className="label-caps text-[10px] text-[#9C825C]">
                          {item.subtitle || cat.shortName}
                        </span>
                        {item.duration && (
                          <span className="flex items-center gap-1 font-medium text-[#7B766F]">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#1F1E1D] mb-3">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Included features */}
                      {item.features && item.features.length > 0 && (
                        <div className="space-y-2 mb-6 pt-4 border-t border-[#1F1E1D]/5">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-[#1F1E1D]/80">
                              <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-5 border-t border-[#1F1E1D]/10 flex items-center justify-between gap-3">
                      <Link
                        to="/contact"
                        className="text-xs uppercase tracking-[0.14em] font-semibold text-[#1F1E1D] hover:text-[#9C825C] transition-colors inline-flex items-center gap-1"
                      >
                        <span>Book Session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={whatsappEnquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#25D366] hover:text-[#128C7E] flex items-center gap-1 font-medium"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>
        ))}
      </div>

      {/* Final CTA */}
      <CTASection
        title="Custom Packages & Group Bookings"
        description="Planning a bridal party, family wedding grooming, or corporate makeover? Contact our Jaipur studio for custom bespoke packages."
      />

    </div>
  );
}
