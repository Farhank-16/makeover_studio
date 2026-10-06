export const BRAND_CONFIG = {
  name: "Makeover Beauty Studio",
  shortName: "MAKEOVER",
  tagline: "Beauty Studio",
  headline: "Beauty, Styled to Make You Feel Extraordinary.",
  description: "Professional makeup, hair, skincare and beauty services crafted for your most special moments in Jaipur.",
  
  location: {
    street: "96, Pushpanjali Colony, Ganga Vihar Colony, Gopalpura Mode",
    landmark: "near Hariyana Marriage Garden",
    area: "Mahesh Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302015",
    fullAddress: "96, Pushpanjali Colony, Ganga Vihar Colony, Gopalpura Mode, near Hariyana Marriage Garden, Mahesh Nagar, Jaipur, Rajasthan 302015",
    shortAddress: "Mahesh Nagar, Jaipur, Rajasthan",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=Makeover+Beauty+Studio+Mahesh+Nagar+Jaipur+Rajasthan+302015",
    embedMapUrl: "https://maps.google.com/maps?q=96,+Pushpanjali+Colony,+Ganga+Vihar+Colony,+Mahesh+Nagar,+Jaipur,+Rajasthan+302015&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  
  hours: {
    display: "11:00 AM – 7:00 PM",
    days: "Monday – Sunday (All 7 Days)",
    openTime: "11:00 AM",
    closeTime: "7:00 PM"
  },
  
  contact: {
    // WhatsApp number configuration - single source of truth (placeholder as requested)
    WHATSAPP_NUMBER: "+919876543210",
    phoneDisplay: "+91 (Enquire via WhatsApp)",
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
