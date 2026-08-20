export type ContactInfo = {
  email?: string;
  phone?: string;
  phoneLabel?: string;
  website?: string;
  whatsapp?: string;
  address?: string;
};

export type Business = {
  slug: string;
  name: string;
  category: string;
  country: "Philippines" | "China" | "India";
  tagline: string;
  description: string[];
  coverImage: string;
  logoImage: string;
  /** Product showcase image shown on the directory card to hook customers. */
  featureImage: string;
  /** Add more photos by appending image paths here, the gallery scrolls horizontally. */
  gallery: string[];
  contact: ContactInfo;
  moq: string;
  leadTime: string;
  hours: string;
  founded: string;
};

export const businesses: Business[] = [
  {
    slug: "huswell-trading",
    name: "Huswell Trading",
    category: "Packaging",
    country: "Philippines",
    tagline:
      "Custom boxes designed & made in the Philippines: rigid boxes, PR kits, corrugated packaging, and printed folding cartons from Quezon City.",
    description: [
      "Established in 2015, Huswell Trading creates custom box solutions for small and medium enterprises nationwide. The Quezon City production team handles rigid boxes and PR kit boxes in-house.",
      "The company also supplies custom corrugated boxes and offset printed folding cartons, giving brands one practical partner for premium presentation, shipping, storage, and retail packaging. After 11 years in production, the team has completed over 10,000 projects and produced more than a million boxes.",
    ],
    coverImage: "/images/cover-huswell-trading.webp",
    logoImage: "/images/logo-huswell-trading.png",
    featureImage: "/images/feature-huswell-trading.jpg",
    gallery: [
      "/images/photo-huswell-trading-1.jpg",
      "/images/photo-huswell-trading-2.jpg",
      "/images/photo-huswell-trading-3.jpg",
      "/images/photo-huswell-trading-4.jpg",
      "/images/photo-huswell-trading-5.jpg",
    ],
    contact: {
      phone: "+639173183354",
      phoneLabel: "0917 318 3354",
      email: "sales@huswelltrading.com",
      website: "huswelltrading.com",
      whatsapp: "639173183354",
      address: "72 Adrian St., North Fairview, Novaliches, Quezon City",
    },
    moq: "From 1,000 pcs, varies by type",
    leadTime: "Confirmed at quotation",
    hours: "Mon to Fri · 8:00 to 17:00",
    founded: "2015",
  },
  {
    slug: "printwerk-studio",
    name: "PrintWerk Studio",
    category: "Printing",
    country: "Philippines",
    tagline:
      "Digital printing studio in Quezon City for business cards, flyers, stickers, and short run packaging labels.",
    description: [
      "PrintWerk Studio handles the jobs that don't need a press: short run digital printing on stocks from 150gsm flyers to 400gsm business cards with spot UV and foil accents. Most orders are finished the same week, and the studio proofs every layout before printing.",
      "Their label department prints roll labels for small product lines in kraft, glossy, and clear finishes, with a minimum that startup brands can actually meet.",
    ],
    coverImage: "/images/cover-printwerk-studio.svg",
    logoImage: "/images/logo-printwerk-studio.svg",
    featureImage: "/images/feature-printwerk-studio.svg",
    gallery: [
      "/images/photo-printwerk-studio-1.svg",
      "/images/photo-printwerk-studio-2.svg",
      "/images/photo-printwerk-studio-3.svg",
      "/images/photo-printwerk-studio-4.svg",
      "/images/photo-printwerk-studio-5.svg",
    ],
    contact: {
      phone: "+639176546210",
      phoneLabel: "0917 654 6210",
      email: "jobs@printwerk.ph",
      website: "printwerk.ph",
      whatsapp: "639176546210",
      address: "2F Jade Building, E. Rodriguez Ave., Quezon City",
    },
    moq: "50 pcs",
    leadTime: "2 to 4 working days",
    hours: "Mon to Sat · 9:00 to 18:00",
    founded: "2018",
  },
  {
    slug: "colorpress-offset",
    name: "ColorPress Offset Printing",
    category: "Printing",
    country: "Philippines",
    tagline:
      "Offset and wide-format printer in Mandaluyong for brochures, catalogs, banners, and high-volume collateral.",
    description: [
      "ColorPress runs two offset presses and a 3.2m wide-format line, so it takes the jobs that are too big for a digital shop: 10,000-piece brochures, product catalogs, and exhibition banners with lamination and mounting.",
      "The prepress team works from your files directly. They'll tell you honestly if artwork needs fixing before it goes to plate, and they offer a proof calibrated to the G7 standard on every press job.",
    ],
    coverImage: "/images/cover-colorpress-offset.svg",
    logoImage: "/images/logo-colorpress-offset.svg",
    featureImage: "/images/feature-colorpress-offset.svg",
    gallery: [
      "/images/photo-colorpress-offset-1.svg",
      "/images/photo-colorpress-offset-2.svg",
      "/images/photo-colorpress-offset-3.svg",
      "/images/photo-colorpress-offset-4.svg",
      "/images/photo-colorpress-offset-5.svg",
    ],
    contact: {
      phone: "+639178324175",
      phoneLabel: "0917 832 4175",
      email: "sales@colorpress.ph",
      website: "colorpress.ph",
      whatsapp: "639178324175",
      address: "23 Boni Ave., Mandaluyong City",
    },
    moq: "1,000 pcs",
    leadTime: "5 to 7 working days",
    hours: "Mon to Fri · 8:00 to 17:00",
    founded: "2011",
  },
  {
    slug: "kopyaquick-printing",
    name: "KopyaQuick Printing",
    category: "Printing",
    country: "Philippines",
    tagline:
      "Same day quick print in Manila for calling cards, certificates, tarpaulins, and office forms while you wait.",
    description: [
      "KopyaQuick is the neighborhood print shop that grew into a business supplier: 300gsm calling cards in 24 hours, tarpaulins by the afternoon, certificates and forms printed while you wait at the counter.",
      "Small businesses rely on KopyaQuick for reorder ready artwork. Your design is stored on file, so the next batch is one message away.",
    ],
    coverImage: "/images/cover-kopyaquick-printing.svg",
    logoImage: "/images/logo-kopyaquick-printing.svg",
    featureImage: "/images/feature-kopyaquick-printing.svg",
    gallery: [
      "/images/photo-kopyaquick-printing-1.svg",
      "/images/photo-kopyaquick-printing-2.svg",
      "/images/photo-kopyaquick-printing-3.svg",
      "/images/photo-kopyaquick-printing-4.svg",
      "/images/photo-kopyaquick-printing-5.svg",
    ],
    contact: {
      phone: "+639176545550",
      phoneLabel: "0917 654 5550",
      email: "print@kopyaquick.com",
      website: "kopyaquick.com",
      whatsapp: "639176545550",
      address: "1246 España Blvd., Sampaloc, Manila",
    },
    moq: "1 pc",
    leadTime: "Same day to 24 hrs",
    hours: "Mon to Sat · 8:00 to 19:00",
    founded: "2009",
  },
  {
    slug: "boxzone-packaging",
    name: "BoxZone Packaging",
    category: "Packaging",
    country: "Philippines",
    tagline:
      "Custom corrugated boxes in Valenzuela for shipping cartons, product boxes, and protective packaging at fair trade pricing.",
    description: [
      "BoxZone sits in the Valenzuela packaging belt, die-cutting and printing corrugated boxes for e-commerce sellers, food brands, and exporters. Standard brown shipping cartons ship from stock in three days; custom-printed product boxes run weekly.",
      "Their packaging engineers check every design for stacking strength before production. They'd rather flag a weak box than ship it.",
    ],
    coverImage: "/images/cover-boxzone-packaging.svg",
    logoImage: "/images/logo-boxzone-packaging.svg",
    featureImage: "/images/feature-boxzone-packaging.svg",
    gallery: [
      "/images/photo-boxzone-packaging-1.svg",
      "/images/photo-boxzone-packaging-2.svg",
      "/images/photo-boxzone-packaging-3.svg",
      "/images/photo-boxzone-packaging-4.svg",
      "/images/photo-boxzone-packaging-5.svg",
    ],
    contact: {
      phone: "+639175109842",
      phoneLabel: "0917 510 9842",
      email: "quotes@boxzone.ph",
      website: "boxzone.ph",
      whatsapp: "639175109842",
      address: "Lot 8, Karuhatan Rd., Valenzuela City",
    },
    moq: "500 pcs",
    leadTime: "7 to 10 working days",
    hours: "Mon to Fri · 7:30 to 17:00",
    founded: "2014",
  },
  {
    slug: "kraftbox-solutions",
    name: "KraftBox Solutions",
    category: "Packaging",
    country: "Philippines",
    tagline:
      "Eco kraft and corrugated packaging from Bulacan for mailer boxes, bakery boxes, and sustainable retail packaging.",
    description: [
      "KraftBox specializes in the look that sells on social media: kraft mailers with printed labels, bakery and pastry boxes, and retail packaging that photographs well. All corrugated stock is recyclable, and most boxes use water-based ink.",
      "The plant in Bulacan runs four die-cutters and can move from artwork to first production run in about a week, with free structural samples for approved quotes.",
    ],
    coverImage: "/images/cover-kraftbox-solutions.svg",
    logoImage: "/images/logo-kraftbox-solutions.svg",
    featureImage: "/images/feature-kraftbox-solutions.svg",
    gallery: [
      "/images/photo-kraftbox-solutions-1.svg",
      "/images/photo-kraftbox-solutions-2.svg",
      "/images/photo-kraftbox-solutions-3.svg",
      "/images/photo-kraftbox-solutions-4.svg",
      "/images/photo-kraftbox-solutions-5.svg",
    ],
    contact: {
      phone: "+639173058730",
      phoneLabel: "0917 305 8730",
      email: "hello@kraftbox.ph",
      website: "kraftbox.ph",
      whatsapp: "639173058730",
      address: "Block 3, Plaridel Bypass Rd., Plaridel, Bulacan",
    },
    moq: "300 pcs",
    leadTime: "7 to 12 working days",
    hours: "Mon to Sat · 8:00 to 17:00",
    founded: "2019",
  },
  {
    slug: "primecarton",
    name: "PrimeCarton Corp.",
    category: "Packaging",
    country: "Philippines",
    tagline:
      "Rigid boxes, mailer boxes, and premium retail packaging from Pampanga, built for product launches and gift sets.",
    description: [
      "PrimeCarton makes the packaging that has to impress: rigid set-up boxes for watches and perfumes, two-piece gift boxes, and laminated mailers for subscription brands. The Pampanga plant handles foil stamping, embossing, and soft-touch lamination in-house.",
      "Brand teams come to PrimeCarton when the box is part of the product. A dedicated engineer manages your project from structural design through first article approval.",
    ],
    coverImage: "/images/cover-primecarton.svg",
    logoImage: "/images/logo-primecarton.svg",
    featureImage: "/images/feature-primecarton.svg",
    gallery: [
      "/images/photo-primecarton-1.svg",
      "/images/photo-primecarton-2.svg",
      "/images/photo-primecarton-3.svg",
      "/images/photo-primecarton-4.svg",
      "/images/photo-primecarton-5.svg",
    ],
    contact: {
      phone: "+639178990711",
      phoneLabel: "0917 899 0711",
      email: "sales@primecarton.com",
      website: "primecarton.com",
      whatsapp: "639178990711",
      address: "MacArthur Hwy., Mabalacat, Pampanga",
    },
    moq: "1,000 pcs",
    leadTime: "12 to 18 working days",
    hours: "Mon to Fri · 8:00 to 17:30",
    founded: "2007",
  },
  {
    slug: "goodbag-ph",
    name: "GoodyBag PH",
    category: "Corporate Giveaways",
    country: "Philippines",
    tagline:
      "Corporate giveaways from Makati for tote bags, tumblers, lanyards, and event kits with your branding.",
    description: [
      "GoodyBag PH supplies the giveaway table at Manila's company events: canvas and non-woven tote bags, stainless tumblers, lanyards, and USB power banks, all printed or embroidered with your logo.",
      "They run an in-house printing room for rush orders and manage the full event kit from sourcing to packing, which is why agencies and HR teams keep them on speed dial.",
    ],
    coverImage: "/images/cover-goodbag-ph.svg",
    logoImage: "/images/logo-goodbag-ph.svg",
    featureImage: "/images/feature-goodbag-ph.svg",
    gallery: [
      "/images/photo-goodbag-ph-1.svg",
      "/images/photo-goodbag-ph-2.svg",
      "/images/photo-goodbag-ph-3.svg",
      "/images/photo-goodbag-ph-4.svg",
      "/images/photo-goodbag-ph-5.svg",
    ],
    contact: {
      phone: "+639175556432",
      phoneLabel: "0917 555 6432",
      email: "orders@goodbag.ph",
      website: "goodbag.ph",
      whatsapp: "639175556432",
      address: "3F Centrium Tower, Chino Roces Ave., Makati City",
    },
    moq: "100 pcs",
    leadTime: "10 to 15 working days",
    hours: "Mon to Fri · 9:00 to 18:00",
    founded: "2020",
  },
  {
    slug: "swagworks-manila",
    name: "SwagWorks Manila",
    category: "Corporate Giveaways",
    country: "Philippines",
    tagline:
      "Apparel and merch supplier for embroidered polo shirts, caps, hoodies, and company uniforms.",
    description: [
      "SwagWorks makes the wearable corporate merch: polo shirts and jackets with full embroidery, caps, and company uniforms for retail and service teams. They source from partner mills, so colors stay consistent across reorders.",
      "They also handle the awkward jobs, from matching thread colors to a brand guide and embroidery placement on unusual fabrics, to size run fitting sessions for big teams.",
    ],
    coverImage: "/images/cover-swagworks-manila.svg",
    logoImage: "/images/logo-swagworks-manila.svg",
    featureImage: "/images/feature-swagworks-manila.svg",
    gallery: [
      "/images/photo-swagworks-manila-1.svg",
      "/images/photo-swagworks-manila-2.svg",
      "/images/photo-swagworks-manila-3.svg",
      "/images/photo-swagworks-manila-4.svg",
      "/images/photo-swagworks-manila-5.svg",
    ],
    contact: {
      phone: "+639176352208",
      phoneLabel: "0917 635 2208",
      email: "hello@swagworks.ph",
      website: "swagworks.ph",
      whatsapp: "639176352208",
      address: "48 Shaw Blvd., Pasig City",
    },
    moq: "50 pcs",
    leadTime: "7 to 14 working days",
    hours: "Mon to Sat · 9:00 to 18:00",
    founded: "2017",
  },
];

export function getAllBusinesses(): Business[] {
  return businesses;
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(businesses.map((business) => business.category))];
}

export function getCountries(): Business["country"][] {
  return ["Philippines", "China", "India"];
}
