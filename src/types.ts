export type ProductCategory =
  | 'all'
  | 'gold'
  | 'diamond'
  | 'silver'
  | 'bridal'
  | 'rings'
  | 'necklaces'
  | 'earrings'
  | 'bangles'
  | 'bracelets'
  | 'chains'
  | 'pendants'
  | 'mens'
  | 'custom';

export type ProductBadge = 'NEW' | 'FEATURED' | 'BRIDAL' | 'NEW ARRIVAL';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  secondaryCategories?: ProductCategory[];
  shortDescription: string;
  fullDescription: string;
  metal: string;
  purity: string;
  stones?: string;
  weightApprox?: string;
  badge?: ProductBadge;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
  isBridal?: boolean;
  isMens?: boolean;
  isNewArrival?: boolean;
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  validityNote: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  occasion: string;
  quote: string;
  location: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  category: 'hallmark' | 'orders' | 'services' | 'showroom';
  question: string;
  answer: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  subTagline: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
    short: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  hours: string;
  days: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  email: string;
}

export type ActivePage =
  | 'home'
  | 'catalogue'
  | 'bridal'
  | 'mens'
  | 'new-arrivals'
  | 'gallery'
  | 'offers'
  | 'about'
  | 'showroom'
  | 'faq';
