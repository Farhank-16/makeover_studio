import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, MessageCircle, Navigation, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { BRAND_CONFIG, createWhatsAppUrl } from '../data/config';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import WhatsAppButton from '../components/WhatsAppButton';
import LocationMap from '../components/LocationMap';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bridal Makeup',
    date: '',
    time: '11:00 AM',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    "Bridal Makeup (HD / Airbrush)",
    "Engagement & Roka Makeup",
    "Party & Sangeet Makeup",
    "Groom Makeup & Grooming",
    "Bridal Hairstyle & Draping",
    "Haircut & Thermal Styling",
    "Hair Colour & Highlights",
    "Signature Radiance Facials",
    "Skincare & Anti-Acne Treatments",
    "Luxury Manicure & Pedicure",
    "Gel Nail Art & Extensions",
    "Italian Rica Waxing & Threading",
    "Complete Pre-Bridal Package Consultation"
  ];

  const timeSlots = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name and phone number so we can reach you.');
      return;
    }
    setErrorMessage('');
    setFormSubmitted(true);
  };

  const getWhatsAppFromForm = () => {
    const msg = `Hello Makeover Beauty Studio,\n\nI would like to request an appointment:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Preferred Date: ${formData.date || 'To be scheduled'}\n- Preferred Time: ${formData.time}\n- Note: ${formData.message || 'None'}`;
    return createWhatsAppUrl(msg);
  };

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Page Hero */}
      <PageHero
        eyebrow="APPOINTMENTS & VISITS"
        title="Let's Create Your Look"
        subtitle="Request your studio consultation or bridal appointment in Jhotwara, Jaipur. We look forward to welcoming you."
      />

      {/* Main Appointment & Contact Grid */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Col: Appointment Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-[4px] border border-[#1F1E1D]/10 shadow-sm relative">
                
                <span className="label-caps text-xs text-[#9C825C] mb-2 block">
                  APPOINTMENT REQUEST
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1E1D] mb-4">
                  Schedule Your Session
                </h2>
                <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mb-8">
                  Fill out your preferences below. Our studio team will review the slot and confirm your booking via phone or WhatsApp.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-[#EFE9E0]/60 rounded-[3px] border border-[#C5A880] text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#9C825C] flex items-center justify-center mx-auto mb-4 border border-[#C5A880]/50 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-[#9C825C]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#1F1E1D] mb-2">
                      Appointment Request Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4640] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>! We have recorded your request for <strong>{formData.service}</strong> on <strong>{formData.date || 'your selected date'}</strong> at <strong>{formData.time}</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href={getWhatsAppFromForm()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold px-6 py-3.5 rounded-[3px] bg-[#1F1E1D] text-[#FAF8F5] hover:bg-[#050504] border border-[#C5A880]"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Send Details to WhatsApp Now</span>
                      </a>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            service: 'Bridal Makeup',
                            date: '',
                            time: '11:00 AM',
                            message: ''
                          });
                        }}
                        className="text-xs uppercase tracking-[0.14em] text-[#7B766F] hover:text-[#1F1E1D] underline"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-3.5 bg-red-50 text-red-800 text-xs rounded-[2px] border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Your Full Name <span className="text-[#C89B9B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] placeholder:text-[#7B766F]/50 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Phone Number <span className="text-[#C89B9B]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] placeholder:text-[#7B766F]/50 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] placeholder:text-[#7B766F]/50 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Desired Service <span className="text-[#C89B9B]">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] focus:outline-none transition-colors cursor-pointer"
                        >
                          {servicesList.map((svc, i) => (
                            <option key={i} value={svc} className="bg-[#FAF8F5] text-[#1F1E1D]">
                              {svc}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] focus:outline-none transition-colors cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                          Preferred Time (11:00 AM – 7:00 PM)
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2.5 px-0 text-[#1F1E1D] focus:outline-none transition-colors cursor-pointer"
                        >
                          {timeSlots.map((ts, i) => (
                            <option key={i} value={ts} className="bg-[#FAF8F5] text-[#1F1E1D]">
                              {ts}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block label-caps text-[11px] text-[#1F1E1D]/80 mb-2">
                        Message / Special Requests
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event, skin preferences, or desired bridal draping..."
                        className="w-full bg-[#FAF8F5] border-b border-[#1F1E1D]/20 focus:border-[#C5A880] text-sm py-2 px-0 text-[#1F1E1D] placeholder:text-[#7B766F]/50 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon={Send}
                        className="w-full sm:w-auto"
                      >
                        Request Appointment
                      </Button>
                      
                      <span className="text-xs text-[#7B766F]">
                        • Quick response within working hours
                      </span>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right Col: Instant Contact & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              {/* WhatsApp Direct card */}
              <div className="bg-[#1F1E1D] text-[#FAF8F5] p-8 rounded-[4px] border border-[#C5A880]/40 shadow-lg">
                <div className="flex items-center gap-2 label-caps text-xs text-[#C5A880] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Studio Support</span>
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mb-3">
                  Prefer WhatsApp Booking?
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed mb-6">
                  Chat directly with our studio manager for quick date checks, pre-bridal consultation slots, or customized service inquiries.
                </p>

                <WhatsAppButton
                  label="Chat on WhatsApp"
                  className="!bg-[#25D366] !text-white !border-none hover:!bg-[#128C7E] w-full justify-center"
                />
              </div>

              {/* Studio Info Details */}
              <div className="bg-[#EFE9E0]/50 p-8 rounded-[4px] border border-[#1F1E1D]/10 space-y-6">
                <div>
                  <h4 className="label-caps text-xs text-[#9C825C] mb-2">
                    Studio Address
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F1E1D] font-medium leading-relaxed">
                    {BRAND_CONFIG.location.fullAddress}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F1E1D]/10">
                  <h4 className="label-caps text-xs text-[#9C825C] mb-2">
                    Direct Phone / WhatsApp
                  </h4>
                  <a
                    href={`tel:${BRAND_CONFIG.contact.WHATSAPP_NUMBER}`}
                    className="text-sm sm:text-base text-[#1F1E1D] font-bold hover:text-[#9C825C] transition-colors"
                  >
                    {BRAND_CONFIG.contact.phoneDisplay}
                  </a>
                </div>

                <div className="pt-4 border-t border-[#1F1E1D]/10">
                  <h4 className="label-caps text-xs text-[#9C825C] mb-2">
                    Hours of Operation
                  </h4>
                  <p className="text-sm text-[#1F1E1D] font-semibold">
                    {BRAND_CONFIG.hours.display}
                  </p>
                  <p className="text-xs text-[#7A5555] mt-0.5">
                    {BRAND_CONFIG.hours.days}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F1E1D]/10">
                  <h4 className="label-caps text-xs text-[#9C825C] mb-2">
                    Landmark Guide
                  </h4>
                  <p className="text-xs text-[#4A4640] leading-relaxed">
                    Behind Darbar School, Jhotwara, Jaipur.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#1F1E1D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STUDIO MAP & DIRECTIONS"
            title="Finding Our Jaipur Atelier"
            subtitle="Follow the map below for straightforward directions to our Jhotwara studio."
          />

          <LocationMap />
        </div>
      </section>

    </div>
  );
}
