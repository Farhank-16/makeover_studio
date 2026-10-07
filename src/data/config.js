export const BRAND_CONFIG = {
  name: "Makeover Beauty Studio",
  shortName: "MAKEOVER",
  tagline: "Beauty Studio",
  headline: "Beauty, Styled to Make You Feel Extraordinary.",
  description: "Professional makeup, hair, skincare and beauty services crafted for your most special moments in Jaipur.",
  
  location: {
    street: "47- A Maheshpuri",
    landmark: "behind Darbar School",
    area: "Jhotwara",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302012",
    fullAddress: "47- A Maheshpuri, behind Darbar School, Jhotwara, Jaipur, Rajasthan 302012",
    shortAddress: "Jhotwara, Jaipur, Rajasthan",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=26.9539243,75.7377341",
    embedMapUrl: "https://maps.google.com/maps?q=26.9539243,75.7377341&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  
  hours: {
    display: "11:00 AM – 7:00 PM",
    days: "Monday – Sunday (All 7 Days)",
    openTime: "11:00 AM",
    closeTime: "7:00 PM"
  },
  
  contact: {
    // WhatsApp number configuration - single source of truth
    WHATSAPP_NUMBER: "+918559996476",
    phoneDisplay: "+91 85599 96476",
    email: "enquiry@makeoverbeautystudio.com",
    defaultWhatsAppMessage: "Hello Makeover Beauty Studio, I would like to enquire about booking an appointment."
  },
  
  social: {
    instagram: "https://instagram.com/makeoverbeautystudio_jaipur",
    instagramHandle: "@makeoverbeautystudio_jaipur"
  }
};

export const createWhatsAppUrl = (customMessage) => {
  const message = customMessage || BRAND_CONFIG.contact.defaultWhatsAppMessage;
  const cleanNumber = BRAND_CONFIG.contact.WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
