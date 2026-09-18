import { BRAND_DATA } from '../data/jewelleryData';

export function getWhatsAppUrl(productName?: string, customText?: string): string {
  let message: string;
  if (productName) {
    message = `Hello Gopilal Jewellers, I am interested in the ${productName}. Please share more details and current pricing.`;
  } else if (customText) {
    message = customText;
  } else {
    message = `Hello Gopilal Jewellers, I would like to enquire about your jewellery collections and showroom appointments.`;
  }
  return `https://wa.me/91${BRAND_DATA.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getCallUrl(): string {
  return `tel:${BRAND_DATA.phone}`;
}

export function getDirectionsUrl(): string {
  const query = encodeURIComponent(
    'FFMX+36G, Main Road, Near Police Chowki, Jagat Farm, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201308'
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function getGoogleMapsViewUrl(): string {
  return BRAND_DATA.googleMapsUrl;
}

const WISHLIST_STORAGE_KEY = 'gopilal_jewellers_wishlist_v1';

export function getSavedWishlist(): string[] {
  try {
    const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading wishlist from localStorage:', e);
    return [];
  }
}

export function persistWishlist(ids: string[]): void {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Error saving wishlist to localStorage:', e);
  }
}

export const getStoredWishlist = getSavedWishlist;
export const setStoredWishlist = persistWishlist;
