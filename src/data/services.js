import { IMAGES } from './images';

export const SERVICE_CATEGORIES = [
  {
    id: "makeup",
    name: "Artisan Makeup",
    shortName: "Makeup",
    tagline: "High-definition, camera-ready makeup designed for individual features.",
    image: IMAGES.services.makeup,
    services: [
      {
        name: "Bridal Makeup",
        subtitle: "Luxury HD / Airbrush Bridal Artistry",
        description: "Bespoke bridal makeup tailored to your wedding attire, jewelry, and lighting. Includes skin prep, premium lashes, and setting rituals.",
        duration: "150–180 mins",
        features: ["HD / Airbrush formulation", "Waterproof & sweat-resistant", "Includes luxury lashes & draping support"]
      },
      {
        name: "Engagement & Roka Makeup",
        subtitle: "Sophisticated Radiance",
        description: "Soft glam, luminous skin, and refined eye styling crafted for ring ceremonies and intimate wedding celebrations.",
        duration: "90–120 mins",
        features: ["Dewy or soft-matte finish", "Complimentary hairstyling consultation", "Long-wearing camera formulation"]
      },
      {
        name: "Party Makeup",
        subtitle: "Red Carpet & Sangeet Glamour",
        description: "Striking evening looks, dramatic eyes, or effortless champagne glam for cocktail parties, sangeets, and receptions.",
        duration: "60–90 mins",
        features: ["Customized lip and eye palette", "Sculpted contouring", "Fixing mist finish"]
      },
      {
        name: "Groom Makeup & Grooming",
        subtitle: "Camera-Ready Subtle Finish",
        description: "Discreet HD correction, beard grooming, skin hydration, and shine-control tailored specifically for grooms.",
        duration: "45–60 mins",
        features: ["Natural undetectable matte finish", "Under-eye brightening", "Beard alignment & styling"]
      },
      {
        name: "Basic / Day Makeup",
        subtitle: "Fresh Daytime Elegance",
        description: "Understated, fresh-faced makeup ideal for daytime functions, poojas, photo shoots, and festive family gatherings.",
        duration: "45–60 mins",
        features: ["Lightweight sheer coverage", "Natural brow shaping", "Nude/rosy lip tint"]
      }
    ]
  },
  {
    id: "hair",
    name: "Hair Studio & Treatments",
    shortName: "Hair",
    tagline: "Couture hairstyling, precision cuts, color transformations, and restorative hair therapies.",
    image: IMAGES.services.hair,
    services: [
      {
        name: "Bridal Hairstyle",
        subtitle: "Architectural & Floral Updos",
        description: "Traditional bun styling with fresh florals (gajra/baby's breath), modern textured waves, or royal Rajasthani hair extensions.",
        duration: "60–90 mins",
        features: ["Jewelry & dupatta pinning", "Floral attachment", "Anti-frizz humidity shield"]
      },
      {
        name: "Haircuts & Styling",
        subtitle: "Precision Face-Framing Cuts",
        description: "Personalized consultation followed by cleansing, bespoke cut, and signature blow-dry finish.",
        duration: "45–60 mins",
        features: ["Custom texture assessment", "Relaxing wash & conditioning", "Thermal blow-dry styling"]
      },
      {
        name: "Hair Colour & Highlights",
        subtitle: "Balayage, Global & Root Touch-ups",
        description: "Rich espresso tones, warm caramel highlights, global chocolate tints, and gentle ammonia-free root touch-ups.",
        duration: "120–180 mins",
        features: ["Strand test consultation", "Deep-nourishing color lock treatment", "Mirror gloss shine"]
      },
      {
        name: "Hair Spa & Conditioning",
        subtitle: "Intensive Moisture Therapy",
        description: "Restorative mask treatment with scalp massage and warm steam infusion to revive damaged and dry tresses.",
        duration: "60 mins",
        features: ["Scalp acupressure massage", "Deep-penetrating steam", "Frizz-control serum application"]
      }
    ]
  },
  {
    id: "skin",
    name: "Skin Atelier & Facials",
    shortName: "Skin Care",
    tagline: "Clinical efficacy meets soothing botanical luxury for healthy, luminous glass skin.",
    image: IMAGES.services.skin,
    services: [
      {
        name: "Signature Glow Facials",
        subtitle: "Radiance & Oxygen Infusion",
        description: "Customized multi-step facial incorporating gentle enzymatic exfoliation, lymphatic massage, and hydrating hydrogel mask.",
        duration: "75–90 mins",
        features: ["Deep pore purification", "Custom botanical serum", "Shoulder and décolleté massage"]
      },
      {
        name: "Skincare Treatments",
        subtitle: "Targeted Barrier Repair",
        description: "Intensive hydration therapies formulated for sun-damaged, dehydrated, or sensitive skin types common in Jaipur's climate.",
        duration: "60 mins",
        features: ["pH restoration", "Calming rose & aloe compresses", "UV barrier application"]
      },
      {
        name: "Anti-Acne & Clarifying Care",
        subtitle: "Purifying & Balancing Ritual",
        description: "Targeted treatments with salicylic, tea tree, and calming zinc to soothe active congestion and clear blemishes.",
        duration: "60–75 mins",
        features: ["Ultrasonic extraction", "High-frequency sterilization", "Cooling clay finish"]
      },
      {
        name: "Chemical Peel & Skin Renewal",
        subtitle: "Gentle Fruit Acid Exfoliation",
        description: "Mild dermatological peels (lactic / glycolic) to gently lift dead skin cells, even tone, and fade hyperpigmentation.",
        duration: "45–60 mins",
        features: ["Mild non-invasive peeling", "Immediate glass-like radiance", "Post-treatment calming balm"]
      }
    ]
  },
  {
    id: "nails",
    name: "Nail Bar & Extensions",
    shortName: "Nails",
    tagline: "High-shine manicures, bespoke bridal nail art, and therapeutic pedicure rituals.",
    image: IMAGES.services.nails,
    services: [
      {
        name: "Luxury Manicure",
        subtitle: "Hand Exfoliation & Nourishment",
        description: "Aromatherapy soak, cuticle refinement, almond scrub, warm massage, and high-shine polish.",
        duration: "45 mins",
        features: ["Cuticle care & shaping", "Hydrating shea butter massage", "Long-wear polish"]
      },
      {
        name: "Spa Pedicure",
        subtitle: "Foot Therapy & Callus Smoothing",
        description: "Dead Sea salt soak, exfoliating scrub, heel smoothing, soothing leg massage, and flawless nail finish.",
        duration: "60 mins",
        features: ["Soothing warm foot bath", "Intensive heel therapy", "Pressure point relaxation"]
      },
      {
        name: "Gel Polish & Nail Art",
        subtitle: "Long-Lasting Gloss & Custom Art",
        description: "Chip-free gel polish lasting 3+ weeks. Custom chrome, French tips, marble art, and delicate gold foil bridal designs.",
        duration: "60–90 mins",
        features: ["UV LED curing", "Zero dry time", "Bespoke bridal accents"]
      }
    ]
  },
  {
    id: "grooming",
    name: "Precision Grooming & Waxing",
    shortName: "Grooming & Waxing",
    tagline: "Hygienic, gentle hair removal and facial threading for sharp, polished contours.",
    image: IMAGES.services.grooming,
    services: [
      {
        name: "Eyebrow & Facial Threading",
        subtitle: "Architectural Brow Shaping",
        description: "Precise thread work to frame the eyes naturally, along with upper lip, chin, and full-face threading.",
        duration: "15–30 mins",
        features: ["Facial symmetry mapping", "Gentle cooling gel application", "Hypoallergenic organic cotton thread"]
      },
      {
        name: "Rica Waxing",
        subtitle: "Italian Liposoluble Wax",
        description: "Colophony-free Italian wax enriched with botanical oils for a virtually painless and nourishing hair removal experience.",
        duration: "30–60 mins",
        features: ["Ideal for sensitive skin", "Reduces redness & ingrowns", "Silk-smooth hydration"]
      },
      {
        name: "Full Body & Leg Waxing",
        subtitle: "Smooth & Silky Skin",
        description: "Comprehensive hair removal covering full arms, underarms, full legs, and back with post-wax soothing milk.",
        duration: "60–90 mins",
        features: ["Hygienic single-use cartridges", "Pre-wax skin cleanser", "Post-wax calming lotion"]
      }
    ]
  },
  {
    id: "bridal",
    name: "Bridal & Pre-Bridal Packages",
    shortName: "Bridal & Pre-Bridal",
    tagline: "Holistic, ceremonial beauty journeys spanning weeks before your wedding day.",
    image: IMAGES.services.bridal,
    services: [
      {
        name: "Complete Bridal Journey",
        subtitle: "Wedding Day Grandeur",
        description: "Includes HD / Airbrush Bridal Makeup, couture hairstyling, dupatta draping, jewelry setting, eyelashes, lenses, and touch-up kit.",
        duration: "Full Day Care",
        features: ["Bridal suite access", "Dupatta & veil architecture", "Touch-up kit included"]
      },
      {
        name: "Pre-Bridal Glow Rituals",
        subtitle: "Weeks 1–4 Preparation",
        description: "Curated series of body polishing, signature facials, full-body Rica wax, manicure, pedicure, and deep hair spa.",
        duration: "Custom Sessions",
        features: ["Personalized timeline tracker", "Full body brightening polish", "Skin hydration booster"]
      },
      {
        name: "Intimate Ceremonies (Mehendi / Sangeet)",
        subtitle: "Festive Vibrant Looks",
        description: "Fresh bohemian or vibrant contemporary makeup and braids for your Mehendi, Haldi, and Sangeet nights.",
        duration: "90–120 mins",
        features: ["Sweatproof formula for dancing", "Floral braid integration", "Vibrant eye pigments"]
      }
    ]
  }
];

export const HOME_SERVICE_PREVIEWS = [
  {
    title: "Makeup",
    category: "Artisan Makeup",
    description: "HD & Airbrush bridal, party glam, and camera-ready groom grooming.",
    image: IMAGES.services.makeup,
    link: "/services#makeup"
  },
  {
    title: "Hair",
    category: "Hair Studio & Treatments",
    description: "Couture bridal updos, precision haircutting, balayage, and restorative spas.",
    image: IMAGES.services.hair,
    link: "/services#hair"
  },
  {
    title: "Skin Care",
    category: "Skin Atelier & Facials",
    description: "Deep hydration, signature radiance facials, and clinical skin renewal.",
    image: IMAGES.services.skin,
    link: "/services#skin"
  },
  {
    title: "Nails",
    category: "Nail Bar & Extensions",
    description: "Therapeutic spa pedicures, chrome gel polish, and handcrafted bridal nail art.",
    image: IMAGES.services.nails,
    link: "/services#nails"
  },
  {
    title: "Bridal & Pre-Bridal",
    category: "Bridal Couture",
    description: "Comprehensive wedding day artistry and structured pre-bridal beauty journeys.",
    image: IMAGES.services.bridal,
    link: "/bridal"
  },
  {
    title: "Grooming & Waxing",
    category: "Precision Grooming",
    description: "Italian Rica waxing, architectural brow threading, and body smoothing.",
    image: IMAGES.services.grooming,
    link: "/services#grooming"
  }
];
