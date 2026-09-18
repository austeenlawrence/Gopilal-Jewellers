import { BrandInfo, CategoryInfo, FaqItem, GalleryItem, Offer, Product, Testimonial } from '../types';

export const BRAND_DATA: BrandInfo = {
  name: 'GOPILAL JEWELLERS',
  tagline: 'Timeless Jewellery. Enduring Elegance.',
  subTagline: 'Royal Indian Craftsmanship & Contemporary Luxury in Greater Noida',
  address: {
    line1: 'FFMX+36G, Main Road',
    line2: 'Near Police Chowki, Jagat Farm, Block E',
    area: 'Chandila, Gamma 1',
    city: 'Greater Noida',
    state: 'Uttar Pradesh',
    pincode: '201308',
    country: 'India',
    formatted: 'FFMX+36G, Main Road, Near Police Chowki, Jagat Farm, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201308, India',
    short: 'Jagat Farm, Gamma 1, Greater Noida'
  },
  phone: '9936843307',
  phoneDisplay: '+91 99368 43307',
  whatsapp: '9936843307',
  whatsappDisplay: '+91 99368 43307',
  hours: '10:30 AM – 9:00 PM',
  days: 'Daily (Open all 7 days)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gopilal+Jewellers+Jagat+Farm+Greater+Noida+Uttar+Pradesh+201308',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Jagat+Farm+Block+E+Greater+Noida+Uttar+Pradesh+201308&output=embed',
  email: 'enquiry@gopilaljewellers.com'
};

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'gold',
    label: 'Gold Jewellery',
    tagline: 'Pure 22K & 18K Hallmarked Brilliance',
    description: 'Traditional temple designs, contemporary chains, and everyday ornaments handcrafted with certified purity.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    badge: '22K BIS Hallmarked'
  },
  {
    id: 'diamond',
    label: 'Diamond Jewellery',
    tagline: 'Certified Solitaires & Fine Ensembles',
    description: 'Precision-cut natural diamonds set in lustrous gold and platinum, reflecting unmatched fire and clarity.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    badge: 'Certified Solitaires'
  },
  {
    id: 'bridal',
    label: 'Bridal Jewellery',
    tagline: 'Royal Trousseau & Heritage Ensembles',
    description: 'Regal chokers, multi-layered raani haars, handcrafted matha pattis, and bridal ornaments made for your grand day.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    badge: 'Royal Trousseau'
  },
  {
    id: 'rings',
    label: 'Rings',
    tagline: 'Solitaires, Bands & Statement Pieces',
    description: 'From classic eternity bands to heritage polki cocktail rings, designed for memorable moments.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    tagline: 'Chokers, Haars & Modern Collars',
    description: 'Sculpted necklaces that gracefully frame the neckline, merging ancient motifs with modern wearability.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'earrings',
    label: 'Earrings',
    tagline: 'Jhumkas, Chandbalis & Studs',
    description: 'Delicate diamond studs, sweeping pearl chandbalis, and antique gold jhumkas that move with grace.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bangles',
    label: 'Bangles',
    tagline: 'Kadas, Pachhelis & Daily Bands',
    description: 'Solid handcrafted gold bangles, kundan kadas, and diamond-studded bangles designed for auspicious elegance.',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    tagline: 'Flexible Tennis & Filigree Links',
    description: 'Chic tennis bracelets, gold charm links, and articulated cuff bracelets for celebratory evenings.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'chains',
    label: 'Chains',
    tagline: 'Solid Rope, Box & Curb Weaves',
    description: 'Precision-finished gold chains engineered for comfortable daily wear and secure pendant pairing.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pendants',
    label: 'Pendants',
    tagline: 'Spiritual Motifs & Diamond Solitaires',
    description: 'Refined mangalsutra drops, sacred deity engravings, and contemporary minimalist pendants.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mens',
    label: "Men's Jewellery",
    tagline: 'Solid Kadas, Signet Rings & Chains',
    description: 'Masculine elegance engineered in solid 22K gold, platinum accents, and bold royal signets.',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=900&q=80',
    badge: 'Royal Edition'
  },
  {
    id: 'silver',
    label: 'Silver Jewellery',
    tagline: '925 Sterling & Temple Artefacts',
    description: 'Hallmarked 925 sterling silver payals, antique oxidised adornments, and consecrated puja articles.',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'custom',
    label: 'Custom Jewellery',
    tagline: 'Bespoke Atelier Commissions',
    description: 'Collaborate directly with our master karigars to craft one-of-a-kind heirlooms tailored to your imagination.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    badge: 'Made to Order'
  }
];

export const PRODUCTS_DATA: Product[] = [
  // 1. Bridal & Heritage Necklaces
  {
    id: 'prod-ziya-bridal-choker',
    name: 'Ziya Polki Bridal Choker',
    category: 'bridal',
    secondaryCategories: ['necklaces', 'gold'],
    shortDescription: 'Uncut Polki diamond choker with fine South Sea pearl droplets and emerald accents.',
    fullDescription: 'An opulent royal choker meticulously handcrafted in 22K yellow gold. Features hand-set uncut Polki diamonds framed by fine tourmaline stones and cascading lustrous South Sea natural pearls. Designed to contour comfortably around the neck for bridal celebrations.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Natural Polki Diamonds & South Sea Pearls',
    weightApprox: '78.50 g (Gross)',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80'
    ],
    isFeatured: true,
    isBridal: true
  },
  {
    id: 'prod-meher-heritage-necklace',
    name: 'Meher Heritage Raani Haar',
    category: 'bridal',
    secondaryCategories: ['necklaces', 'gold'],
    shortDescription: 'Multi-strand royal Raani Haar featuring exquisite antique nakshi hand-carving.',
    fullDescription: 'Crafted for grand ceremonies, the Meher Raani Haar brings centuries of Indian royal trousseau heritage to life. Layers of handcrafted gold beads lead to a central pendant with delicate floral embossing and cabochon rubies.',
    metal: '22K Antique Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Cabochon Burmese Rubies & Natural Emeralds',
    weightApprox: '96.20 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
    isBridal: true
  },
  {
    id: 'prod-padmavati-jadau-haar',
    name: 'Padmavati Royal Jadau Set',
    category: 'bridal',
    secondaryCategories: ['necklaces', 'earrings'],
    shortDescription: 'Regal Jadau bridal necklace with matching chandelier earrings and peacock motifs.',
    fullDescription: 'Inspired by Rajasthan’s imperial royal ateliers, this masterpiece combines 22K gold foil setting with vibrant meenakari enameling on the reverse side. Accompanied by perfectly balanced heavy bridal earrings.',
    metal: '22K Gold with Meenakari Reverse',
    purity: '916 BIS Hallmarked',
    stones: 'Jadau Uncut Diamonds, Pearls & Emerald Beads',
    weightApprox: '112.40 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-ananya-temple-necklace',
    name: 'Ananya Temple Gold Necklace',
    category: 'necklaces',
    secondaryCategories: ['gold'],
    shortDescription: 'South Indian temple-inspired gold collar with Lakshmi figurine and nakshi finish.',
    fullDescription: 'An auspicious celebration of spiritual artistry. Hand-sculpted by skilled artisans with divine motifs and fine filigree openwork, offering rich golden warmth.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Uncut Rubies & Fresh Water Pearls',
    weightApprox: '54.30 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-gulnaar-choker',
    name: 'Gulnaar Floral Diamond Choker',
    category: 'necklaces',
    secondaryCategories: ['diamond'],
    shortDescription: '18K White & Rose Gold choker encrusted with certified brilliant-cut diamonds.',
    fullDescription: 'Modern luxury at its finest. Geometric diamond blossoms linked seamlessly to rest against the collarbone with fluid comfort.',
    metal: '18K White & Rose Gold',
    purity: '750 Hallmarked',
    stones: 'Natural Diamonds VVS-VS, E-F Color (8.40 ct)',
    weightApprox: '46.80 g',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },

  // 2. Rings
  {
    id: 'prod-noor-solitaire-ring',
    name: 'Noor Solitaire Diamond Ring',
    category: 'rings',
    secondaryCategories: ['diamond'],
    shortDescription: 'IGI Certified 1.50 carat round brilliant solitaire set in 18K white gold four-prong setting.',
    fullDescription: 'A classic testament to enduring devotion. A hand-selected 1.50 carat solitaire with exceptional clarity and brilliance, accented by micro-pave diamonds along the comfort-fit band.',
    metal: '18K White Gold',
    purity: '750 Hallmarked',
    stones: '1.50 ct Solitaire (IGI Certified, VVS1, E Color)',
    weightApprox: '4.60 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-rooh-emerald-ring',
    name: 'Rooh Zambian Emerald & Diamond Halo',
    category: 'rings',
    secondaryCategories: ['diamond', 'gold'],
    shortDescription: 'Cushion-cut natural emerald surrounded by double diamond halos in 18K yellow gold.',
    fullDescription: 'Featuring a vivid green Zambian emerald of remarkable transparency, framed by pavé-set round brilliant diamonds in a royal cocktail halo.',
    metal: '18K Yellow Gold',
    purity: '750 Hallmarked',
    stones: '2.80 ct Natural Emerald & 0.95 ct Diamonds',
    weightApprox: '7.10 g',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },
  {
    id: 'prod-tara-polki-ring',
    name: 'Tara Heritage Polki Cocktail Ring',
    category: 'rings',
    secondaryCategories: ['bridal', 'gold'],
    shortDescription: 'Statement circular mirror ring featuring uncut diamonds and enamel meena work.',
    fullDescription: 'Traditional royal grandeur for festive soirees. The expansive circular top is adorned with sparkling uncut Polki stones in a kundan setting, finished with emerald bead borders.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Natural Polki Diamonds & Seed Pearls',
    weightApprox: '18.40 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-samar-eternity-band',
    name: 'Samar Diamond Eternity Band',
    category: 'rings',
    secondaryCategories: ['diamond'],
    shortDescription: 'Continuous channel of precision-matched baguette diamonds in 18K yellow gold.',
    fullDescription: 'An effortless contemporary ring crafted for daily luxury. Seamless baguette-cut diamonds reflect shimmering facets from every angle.',
    metal: '18K Yellow Gold',
    purity: '750 Hallmarked',
    stones: 'Baguette Diamonds (VS-SI, G-H Color, 1.85 ct)',
    weightApprox: '5.20 g',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },

  // 3. Earrings
  {
    id: 'prod-aarna-gold-jhumka',
    name: 'Aarna Royal Gold Jhumka',
    category: 'earrings',
    secondaryCategories: ['gold', 'bridal'],
    shortDescription: 'Antique finished multi-tier 22K gold jhumkas with filigree floral bells and pearl drops.',
    fullDescription: 'Handmade with poetic artistry, these classic Indian jhumkas showcase fine granulation, dancing pearl fringes, and delicate floral studs.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'South Sea Pearls & Synthetic Spinels',
    weightApprox: '28.90 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-siya-chandbali',
    name: 'Siya Jadau Chandbali Earrings',
    category: 'earrings',
    secondaryCategories: ['bridal', 'gold'],
    shortDescription: 'Crescent moon motif bridal chandbalis adorned with uncut polki and emerald beads.',
    fullDescription: 'A quintessential North Indian bridal design. Graceful crescent moons suspend clusters of micro-pearls and rich green emerald beads that sway gently with every step.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Polki Diamonds, Zambian Emerald Beads & Pearls',
    weightApprox: '34.20 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-dia-studs',
    name: 'Dia Floral Diamond Tops',
    category: 'earrings',
    secondaryCategories: ['diamond'],
    shortDescription: 'Everyday elegance diamond cluster earrings in 18K white gold with screw backs.',
    fullDescription: 'Seven brilliant diamonds set seamlessly to create the optical appearance of a large solitaire, secured with premium screw-back posts.',
    metal: '18K White Gold',
    purity: '750 Hallmarked',
    stones: 'Brilliant Round Diamonds (1.20 ct total, VS-GH)',
    weightApprox: '3.90 g',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },
  {
    id: 'prod-parizaad-danglers',
    name: 'Parizaad Polki Drop Earrings',
    category: 'earrings',
    secondaryCategories: ['bridal', 'gold'],
    shortDescription: 'Articulated polki drop earrings featuring ruby highlights and baroque pearls.',
    fullDescription: 'Lightweight on the ear while making an aristocratic impression. Flexible joints ensure comfortable movement throughout wedding festivities.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Polki Diamonds & Natural Ruby Cabochons',
    weightApprox: '22.40 g',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80'
  },

  // 4. Bangles & Kadas
  {
    id: 'prod-tanvi-temple-bangle',
    name: 'Tanvi Nakshi Temple Bangles (Pair)',
    category: 'bangles',
    secondaryCategories: ['gold', 'bridal'],
    shortDescription: 'Pair of handcrafted 22K gold temple bangles with Goddess Lakshmi carvings and screw clasp.',
    fullDescription: 'Heavyweight heritage bangles sculpted in deep repousse relief. An enduring symbol of grace and prosperity, finished with an antique matte polish.',
    metal: '22K Antique Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Uncut Ruby Accents',
    weightApprox: '62.80 g (Pair)',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-pachheli-kundan-bangle',
    name: 'Kundan Pachheli Royal Kadas',
    category: 'bangles',
    secondaryCategories: ['bridal', 'gold'],
    shortDescription: 'Exquisite bridal pachheli openable kadas with kundan stones and elephant head terminals.',
    fullDescription: 'Worn traditionally by royal Indian brides as outer boundary bangles. Hand-chiseled animal head finials with ruby eyes and enameling.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Fine Kundan Glass Stone & Rubies',
    weightApprox: '74.50 g (Pair)',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-riwaaz-diamond-kada',
    name: 'Riwaaz Diamond Openable Kada',
    category: 'bangles',
    secondaryCategories: ['diamond'],
    shortDescription: 'Single line baguette and round diamond kada in 18K yellow gold with concealed security lock.',
    fullDescription: 'Contemporary elegance that transitions seamlessly from boardroom to evening galas. Smooth inner contour for effortless wear.',
    metal: '18K Yellow Gold',
    purity: '750 Hallmarked',
    stones: 'Diamonds VVS-VS (3.80 ct total)',
    weightApprox: '24.10 g',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },

  // 5. Bracelets
  {
    id: 'prod-navya-tennis-bracelet',
    name: 'Navya Diamond Tennis Bracelet',
    category: 'bracelets',
    secondaryCategories: ['diamond'],
    shortDescription: 'Four-prong articulated tennis bracelet featuring 5 carats of calibrated brilliant diamonds.',
    fullDescription: 'Precision crafted in 18K white gold with individual box links for silk-smooth flexibility. Secured by a double safety latch.',
    metal: '18K White Gold',
    purity: '750 Hallmarked',
    stones: 'Round Brilliant Diamonds (5.10 ct total, E-F / VVS)',
    weightApprox: '14.80 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-filigree-gold-bracelet',
    name: 'Aashi Filigree Gold Bracelet',
    category: 'bracelets',
    secondaryCategories: ['gold'],
    shortDescription: 'Intricate 22K yellow gold lace bracelet with adjustable links and high-gloss polish.',
    fullDescription: 'Inspired by traditional Indian jali architectural lattices. Light and fluid on the wrist, perfect for everyday sophistication.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'None (Pure Gold)',
    weightApprox: '16.20 g',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'
  },

  // 6. Chains
  {
    id: 'prod-shrestha-rope-chain',
    name: 'Shrestha Solid Rope Gold Chain',
    category: 'chains',
    secondaryCategories: ['gold', 'mens'],
    shortDescription: 'Heavy woven 22K yellow gold rope chain with diamond-cut sparkling edges.',
    fullDescription: 'Expertly woven for immense tensile strength and a rich hand-feel. Features a sturdy lobster lock suitable for holding hefty pendants or worn standalone.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '38.50 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-kavach-box-chain',
    name: 'Kavach Classic Box Chain',
    category: 'chains',
    secondaryCategories: ['gold'],
    shortDescription: 'Sleek 22K gold square box link chain with mirror finish.',
    fullDescription: 'A versatile staple for modern Indian wardrobes. Tangle-resistant geometry crafted for comfortable daily wear.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '18.20 g',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80'
  },

  // 7. Pendants
  {
    id: 'prod-riyana-solitaire-pendant',
    name: 'Riyana Solitaire Diamond Pendant',
    category: 'pendants',
    secondaryCategories: ['diamond'],
    shortDescription: '1.00 carat brilliant solitaire with hidden bail in 18K white gold.',
    fullDescription: 'Sublime minimalism. The solitaire diamond floats on the collarbone, illuminated from all sides to capture every ray of ambient light.',
    metal: '18K White Gold',
    purity: '750 Hallmarked',
    stones: '1.01 ct Round Brilliant Diamond (VVS2, F Color)',
    weightApprox: '2.80 g',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },
  {
    id: 'prod-mayura-heritage-pendant',
    name: 'Mayura Peacock Enamel Pendant',
    category: 'pendants',
    secondaryCategories: ['gold'],
    shortDescription: 'Royal peacock pendant in 22K gold with ruby plume and pearl drop.',
    fullDescription: 'A tribute to the national bird and Indian royalty. Detailed feather engraving accented by deep red rubies and a suspended pearl tassel.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Natural Rubies & Pearl Drops',
    weightApprox: '14.50 g',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod-mangalsutra-pendant',
    name: 'Aashi Contemporary Mangalsutra',
    category: 'pendants',
    secondaryCategories: ['gold', 'diamond', 'bridal'],
    shortDescription: 'Modern bar diamond mangalsutra pendant with auspicious black beads on 18K chain.',
    fullDescription: 'Designed for the modern Indian bride who cherishes sacred sacred traditions while embracing everyday contemporary style.',
    metal: '18K Yellow Gold',
    purity: '750 Hallmarked',
    stones: 'Natural Diamonds (0.65 ct) & Black Spinel Beads',
    weightApprox: '6.90 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },

  // 8. Men's Jewellery
  {
    id: 'prod-armaan-mens-kada',
    name: "Armaan Sovereign Men's Kada",
    category: 'mens',
    secondaryCategories: ['gold'],
    shortDescription: 'Solid 22K gold heavy kada with engraved royal fluted borders and satin finish.',
    fullDescription: 'A statement of quiet authority and heritage. Hand-forged in dense 22K yellow gold with a comfortable rounded inner profile and fluted outer edge.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '55.00 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
    isMens: true
  },
  {
    id: 'prod-keshav-signet-ring',
    name: "Keshav Royal Lion Signet Ring",
    category: 'mens',
    secondaryCategories: ['rings', 'gold'],
    shortDescription: 'Deep relief lion crest signet ring in 22K gold with brushed top and polished sides.',
    fullDescription: 'Commanding and regal. Carved with sharp sculptural relief symbolizing strength and noble lineage, weighted for a commanding feel on the finger.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '15.40 g',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
    isMens: true,
    isNewArrival: true
  },
  {
    id: 'prod-veer-cuban-chain',
    name: "Veer Heavy Men's Cuban Chain",
    category: 'mens',
    secondaryCategories: ['chains', 'gold'],
    shortDescription: '8mm solid interlocking Cuban curb chain in 22K gold with dual-lock clasp.',
    fullDescription: 'Precision diamond-faced flat links that lie straight and smooth against the chest. Substantial weight and immaculate finishing.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '68.20 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
    isMens: true
  },
  {
    id: 'prod-raj-diamond-cufflinks',
    name: "Raj Heritage Gold & Diamond Cufflinks",
    category: 'mens',
    secondaryCategories: ['diamond', 'gold'],
    shortDescription: 'Octagonal 18K yellow gold cufflinks featuring bezel-set black onyx and central diamond star.',
    fullDescription: 'Understated aristocratic refinement for sherwanis and tailored suits. Hand-polished natural onyx paired with natural diamonds.',
    metal: '18K Yellow Gold',
    purity: '750 Hallmarked',
    stones: 'Black Onyx & Brilliant Diamonds (0.40 ct)',
    weightApprox: '14.20 g (Pair)',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=900&q=80',
    isMens: true,
    isNewArrival: true
  },
  {
    id: 'prod-rudra-rudraksha-bracelet',
    name: "Rudra Gold & Rudraksha Men's Bracelet",
    category: 'mens',
    secondaryCategories: ['bracelets', 'gold'],
    shortDescription: 'Panchmukhi Rudraksha beads encased in 22K gold caps with sturdy link chain.',
    fullDescription: 'Harmonious blend of spiritual devotion and royal prestige. Authentic five-faced rudraksha seeds secured with hand-drawn gold wire work.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Natural 5-Mukhi Rudraksha',
    weightApprox: '19.80 g',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80',
    isMens: true
  },

  // 9. Silver Jewellery
  {
    id: 'prod-aaradhya-silver-payal',
    name: 'Aaradhya Antique Silver Payal (Pair)',
    category: 'silver',
    secondaryCategories: ['bridal'],
    shortDescription: '925 sterling silver traditional ankle bells with filigree floral plates and ghungroo.',
    fullDescription: 'Handcrafted in 92.5% pure sterling silver. Melodic chiming ghungroos accompany every step, finished with a classic antique patina.',
    metal: '925 Sterling Silver',
    purity: '925 Hallmarked',
    weightApprox: '115.00 g (Pair)',
    badge: 'NEW ARRIVAL',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },
  {
    id: 'prod-ganesha-silver-murti',
    name: 'Shree Siddhivinayak Consecrated Silver Idol',
    category: 'silver',
    shortDescription: 'Solid 999 fine silver Ganesha murti with intricate hand-engraved detailing.',
    fullDescription: 'Ideal for home mandirs and auspicious gifting. Sculpted in pure 99.9% silver with sacred postures and immaculate facial expressions.',
    metal: '999 Fine Silver',
    purity: '999 Purity Certified',
    weightApprox: '250.00 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-oxidised-tribal-choker',
    name: 'Tarini Oxidised Silver Tribal Choker',
    category: 'silver',
    secondaryCategories: ['necklaces'],
    shortDescription: 'Sterling silver collar necklace with tribal geometric stampings and garnet drops.',
    fullDescription: 'Bohemian royal flair crafted in oxidised sterling silver. Dramatic statement piece paired effortlessly with linen sarees and kurtas.',
    metal: '925 Sterling Silver',
    purity: '925 Hallmarked',
    stones: 'Natural Garnet Drops',
    weightApprox: '48.60 g',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80'
  },

  // 10. Custom Atelier Commissions
  {
    id: 'prod-bespoke-bridal-suite',
    name: 'Bespoke Imperial Trousseau Suite',
    category: 'custom',
    secondaryCategories: ['bridal'],
    shortDescription: 'Custom commission created to match bride’s lehenga embroidery and heirloom gemstones.',
    fullDescription: 'An exclusive collaborative journey. Our master design atelier sketches, 3D renders, and handcrafts your entire bridal trousseau with your choice of gold purity, certified uncut diamonds, and natural colored gems.',
    metal: '22K / 18K Custom Gold',
    purity: 'Hallmarked & Certified',
    stones: 'Custom Gemstone & Diamond Selection',
    weightApprox: 'Variable by Design',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-custom-family-crest-ring',
    name: 'Custom Heritage Monogram Signet Ring',
    category: 'custom',
    secondaryCategories: ['rings', 'mens'],
    shortDescription: 'Personalized monogram or family crest laser-engraved in solid gold.',
    fullDescription: 'Create a generational family signet. Our artists translate your initials, crest, or spiritual symbols into deep dimensional gold casting.',
    metal: '22K / 18K Yellow, White or Rose Gold',
    purity: '916 / 750 Hallmarked',
    weightApprox: '14.00 g - 22.00 g',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
    isMens: true
  },

  // Additional 8 items to ensure deep 38+ item catalogue
  {
    id: 'prod-kashish-polki-mathapatti',
    name: 'Kashish Royal Polki Matha Patti',
    category: 'bridal',
    secondaryCategories: ['gold'],
    shortDescription: 'Three-tiered uncut diamond headpiece with pearl tassels and central maang tikka.',
    fullDescription: 'Transforms any bridal look into an imperial queen’s portrait. Contours gently along the hairline with soft velvet backing and flexible joints.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Polki Diamonds & Pearl Droplets',
    weightApprox: '42.00 g',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-vrinda-emerald-choker',
    name: 'Vrinda Colombian Emerald & Gold Choker',
    category: 'necklaces',
    secondaryCategories: ['gold', 'diamond', 'bridal'],
    shortDescription: 'Square-cut emerald collar framed by micro-pave diamonds and 22K gold wire.',
    fullDescription: 'Rich regal greens meet warm Indian gold. A statement piece that bridges contemporary minimalism with vintage palace elegance.',
    metal: '22K Gold & 18K Settings',
    purity: 'Hallmarked',
    stones: 'Certified Natural Emeralds & Diamonds',
    weightApprox: '58.40 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-siddhartha-gold-kada',
    name: 'Siddhartha Solid Gold Torc Kada',
    category: 'mens',
    secondaryCategories: ['gold'],
    shortDescription: 'Minimalist open torc kada with faceted terminals in satin finished 22K gold.',
    fullDescription: 'Engineered with clean architectural lines for the discerning gentleman who appreciates discreet luxury and solid gold heft.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    weightApprox: '44.50 g',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=900&q=80',
    isMens: true
  },
  {
    id: 'prod-meenakari-peacock-bangle',
    name: 'Meenakari Peacock Kada Pair',
    category: 'bangles',
    secondaryCategories: ['gold', 'bridal'],
    shortDescription: 'Vibrant Benarasi royal enamel work over carved gold peacock heads.',
    fullDescription: 'An heirloom craft of royal enamelists. Brilliant cobalt blue and emerald green vitreous glass enamels fired over pure gold carvings.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Fine Enamel & Uncut Kundan',
    weightApprox: '68.00 g (Pair)',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=900&q=80',
    isNewArrival: true
  },
  {
    id: 'prod-zoya-diamond-pendant',
    name: 'Zoya Starburst Diamond Pendant',
    category: 'pendants',
    secondaryCategories: ['diamond'],
    shortDescription: 'Starburst halo pendant with central champagne diamond and white diamond rays.',
    fullDescription: 'Radiant celestial symmetry. A rare natural champagne diamond center enveloped by tapered baguette and round brilliant rays.',
    metal: '18K Two-Tone Gold',
    purity: '750 Hallmarked',
    stones: 'Natural Fancy Diamond & White Diamonds (1.45 ct)',
    weightApprox: '5.10 g',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'prod-navratna-heritage-necklace',
    name: 'Navratna Sacred Nine-Gems Haar',
    category: 'necklaces',
    secondaryCategories: ['gold'],
    shortDescription: 'Auspicious nine planetary gemstones set in traditional 22K gold bezel links.',
    fullDescription: 'Balancing cosmic harmony and ancient Indian jewelry wisdom. Features natural ruby, pearl, coral, emerald, yellow sapphire, diamond, blue sapphire, hessonite, and cat’s eye.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Certified Natural Navratna Gemstones',
    weightApprox: '41.20 g',
    badge: 'FEATURED',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    isFeatured: true
  },
  {
    id: 'prod-trousseau-hathphool',
    name: 'Devanshi Bridal Hathphool (Pair)',
    category: 'bridal',
    secondaryCategories: ['gold', 'rings', 'bracelets'],
    shortDescription: 'Pair of traditional bridal hand flowers with delicate pearl chains and polki rings.',
    fullDescription: 'Drapes the bride’s hands with poetic delicacy. Each flower rosette connects five fine pearl strands to adjustable gem-set rings.',
    metal: '22K Yellow Gold',
    purity: '916 BIS Hallmarked',
    stones: 'Polki Kundan & Seed Pearls',
    weightApprox: '52.00 g (Pair)',
    badge: 'BRIDAL',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    isBridal: true
  },
  {
    id: 'prod-silver-chandrika-necklace',
    name: 'Chandrika 925 Silver Hasli',
    category: 'silver',
    secondaryCategories: ['necklaces'],
    shortDescription: 'Rigid solid sterling silver hasli torque with hand-stamped floral finials.',
    fullDescription: 'Timeless rural royal silhouette revived in 925 sterling silver. Contoured to rest effortlessly over the collarbone.',
    metal: '925 Sterling Silver',
    purity: '925 Hallmarked',
    weightApprox: '82.00 g',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80'
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'offer-wedding-trousseau',
    title: 'Bridal Trousseau Consultation & Preview',
    subtitle: 'Private Showroom Styling Session',
    description: 'Book a one-on-one bridal jewellery preview at our Jagat Farm showroom. Experience personalized matching of royal chokers and haars with your lehenga fabric swatches, accompanied by complimentary gemstone purity verification.',
    tag: 'Bridal Privilege',
    validityNote: 'Complimentary appointment upon prior booking via WhatsApp or Call.',
    highlights: [
      'Dedicated private bridal lounge session',
      'Direct consultation with master jewellery stylists',
      'Lehenga color & neckline matching guidance',
      'Complimentary BIS hallmark purity verification'
    ]
  },
  {
    id: 'offer-gold-exchange',
    title: 'Transparent Old Gold Exchange Service',
    subtitle: '100% Value Assessment at Daily Market Rate',
    description: 'Bring in your existing or ancestral gold ornaments for immediate melt-and-test evaluation on computerized carat meters. Enjoy zero deduction on purity weight when upgrading to any modern Gopilal Jewellers creation.',
    tag: 'Trust & Purity',
    validityNote: 'Available daily during showroom hours (10:30 AM – 9:00 PM).',
    highlights: [
      'Digital computerized purity testing before your eyes',
      'Direct valuation against prevailing bullion gold rates',
      'Full flexibility to upgrade to Gold, Diamond or Polki jewellery',
      'Instant itemized purity certificate'
    ]
  },
  {
    id: 'offer-lifetime-care',
    title: 'Complimentary Jewellery Spa & Inspection',
    subtitle: 'Ultrasonic Cleaning & Prong Checking',
    description: 'Keep your cherished jewellery radiant forever. Visit our showroom anytime for complimentary ultrasonic steam cleaning, diamond prong tightening, and polish inspection for any piece from Gopilal Jewellers.',
    tag: 'Showroom Service',
    validityNote: 'Ongoing courtesy service for all patrons.',
    highlights: [
      'Safe ultrasonic steam cleaning',
      'Prong and stone setting security check',
      'Professional clasp and safety-lock tune-up',
      'Expert preservation advice for heirloom pieces'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Pooja & Rohan Sharma',
    occasion: 'Bridal Trousseau Purchase',
    quote: 'Selecting our wedding jewellery at Gopilal Jewellers was an unforgettable experience. The team at Jagat Farm patiently guided us through several polki chokers until we found the perfect piece for the wedding day. The hallmarked purity and warmth of the staff made our family feel truly royal.',
    location: 'Greater Noida',
    date: 'Recent Patron'
  },
  {
    id: 't-2',
    clientName: 'Col. Rajesh Verma (Retd.)',
    occasion: "Men's Gold Kada & Family Jewellery",
    quote: 'I wanted a heavy, solid 22K gold kada with classic finish. The craftsmanship and weight of the piece from Gopilal Jewellers exceeded my expectations. Transparent weighing and authentic hallmarking give complete peace of mind.',
    location: 'Beta 1, Greater Noida',
    date: 'Recent Patron'
  },
  {
    id: 't-3',
    clientName: 'Dr. Meenakshi Sundaram',
    occasion: 'Custom Diamond Solitaire Ring',
    quote: 'From stone selection to the final prongs, their bespoke service was flawless. The diamond ring has incredible fire, and the certified documentation provided full confidence. A true gemstone of a showroom in Jagat Farm.',
    location: 'Alpha 2, Greater Noida',
    date: 'Recent Patron'
  },
  {
    id: 't-4',
    clientName: 'Sunita & Alok Agarwal',
    occasion: 'Anniversary Gift & Gold Exchange',
    quote: 'We exchanged ancestral gold jewellery for a contemporary diamond necklace. The computerized purity testing was completely transparent, and the design collection has something for every generation.',
    location: 'Gamma 1, Greater Noida',
    date: 'Recent Patron'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Royal Bridal Choker in 22K Gold',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
    caption: 'Handcrafted Polki choker layered with natural pearls and uncut emerald beads.'
  },
  {
    id: 'gal-2',
    title: 'Solitaire Diamond Craftsmanship',
    category: 'Diamonds',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Micro-pavé settings crafted in 18K white gold under gemological magnification.'
  },
  {
    id: 'gal-3',
    title: 'Temple Nakshi Gold Workmanship',
    category: 'Gold',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    caption: 'Deep antique relief sculpture reflecting centuries-old Indian temple ornamentation.'
  },
  {
    id: 'gal-4',
    title: 'The Imperial Raani Haar',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Multi-tiered bridal elegance designed to drape regally over traditional lehengas.'
  },
  {
    id: 'gal-5',
    title: "Men's Solid Gold Kada & Signet Series",
    category: "Men's",
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Substantial 22K gold kadas and heraldic rings for the modern royal man.'
  },
  {
    id: 'gal-6',
    title: 'Royal Jadau Chandbalis',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crescent moon earrings with delicate seed pearl fringes and emerald drops.'
  },
  {
    id: 'gal-7',
    title: 'Fine Diamond Eternity Bands',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Continuous channels of precision-faceted diamonds celebrating life’s milestones.'
  },
  {
    id: 'gal-8',
    title: 'Temple Bangles & Pachheli Kadas',
    category: 'Bangles',
    image: 'https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=1200&q=80',
    caption: 'Solid gold bangles with auspicious motifs and concealed hinges.'
  },
  {
    id: 'gal-9',
    title: 'Artisan Atelier Stone Setting',
    category: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Master karigar setting individual polki diamonds into hand-formed gold bezels.'
  },
  {
    id: 'gal-10',
    title: '925 Sterling Silver Royal Collection',
    category: 'Silver',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fine hallmarked silver payals, torque haslis, and consecrated puja articles.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'hallmark',
    question: 'Is all gold jewellery at Gopilal Jewellers BIS Hallmarked?',
    answer: 'Yes, without exception. Every gold ornament at Gopilal Jewellers carries the official BIS Hallmark with the mandatory HUID (Hallmark Unique Identification) number, certifying exact 22K (916) or 18K (750) purity. We encourage patrons to verify the stamp using our in-house digital magnifying loupe.'
  },
  {
    id: 'faq-2',
    category: 'hallmark',
    question: 'Are the diamonds certified by recognized laboratories?',
    answer: 'Our solitaires and fine diamond jewellery come accompanied by certificates from internationally reputed gemological laboratories such as IGI (International Gemological Institute) or GIA (Gemological Institute of America), detailing color, clarity, cut grade, and carat weight.'
  },
  {
    id: 'faq-3',
    category: 'orders',
    question: 'Can I order bespoke or custom-designed jewellery?',
    answer: 'Absolutely. We specialize in custom bridal trousseaus, family signets, and bespoke jewelry creations. You can bring your design ideas, photos, or reference sketches to our Jagat Farm showroom. Our team works with you from 3D CAD visualization through to final handcrafting by master karigars.'
  },
  {
    id: 'faq-4',
    category: 'orders',
    question: 'How do I enquire about prices or place an order?',
    answer: 'Because bullion gold and diamond rates fluctuate daily, our pieces are listed as "Enquire for Price." Simply tap the "Enquire on WhatsApp" or "Call Showroom" button on any product card. Our showroom specialists respond promptly with live pricing, weight breakdowns, and availability.'
  },
  {
    id: 'faq-5',
    category: 'services',
    question: 'Do you offer an Old Gold Exchange facility?',
    answer: 'Yes, we provide transparent gold exchange. Your gold is weighed and tested digitally in front of you. We offer 100% current market rate value for the net pure gold content with zero deductions on the assessed gold weight when upgrading to our jewellery.'
  },
  {
    id: 'faq-6',
    category: 'showroom',
    question: 'Where is the Gopilal Jewellers showroom located in Greater Noida?',
    answer: 'We are situated at FFMX+36G, Main Road, Near Police Chowki, Jagat Farm, Block E, Chandila, Gamma 1, Greater Noida, UP 201308. We are open daily from 10:30 AM to 9:00 PM, with convenient parking nearby.'
  },
  {
    id: 'faq-7',
    category: 'services',
    question: 'Do you offer complimentary cleaning and jewellery checkups?',
    answer: 'Yes. Patrons can bring their jewellery anytime for complimentary ultrasonic steam cleaning, prong checking, and safety latch inspection to keep their pieces in pristine condition.'
  }
];
