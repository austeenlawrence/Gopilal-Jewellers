import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { ActivePage, ProductCategory } from '../types';
import { BRAND_DATA, CATEGORIES_DATA } from '../data/jewelleryData';
import { BrandLogo } from './BrandLogo';
import { getCallUrl, getDirectionsUrl, getWhatsAppUrl } from '../utils/helpers';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onFilterCategory: (category: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory }) => {
  return (
    <footer className="bg-[#09111e] text-[#FAFAF8] border-t border-[#C5A059]/30 pt-12 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" onClick={() => onNavigate('home')} />
            <p className="font-serif italic text-sm text-[#C5A059] leading-relaxed">
              Timeless Jewellery. Enduring Elegance.
            </p>
            <p className="text-xs text-[#D4CEBF] font-sans leading-relaxed max-w-sm">
              Royal Indian jewellery house crafting certified hallmarked 22K gold, fine uncut polki bridal trousseaus, and solitaire diamonds. Welcoming families at Jagat Farm, Greater Noida.
            </p>
            {/* BIS Hallmark Badge Box */}
            <div className="p-3 bg-white/5 rounded-sm border border-[#C5A059]/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C5A059] flex-shrink-0" />
              <div className="text-[11px] font-sans leading-tight">
                <span className="font-semibold text-white block">100% BIS Hallmarked</span>
                <span className="text-[#D4CEBF]">916 / 750 Gold Purity with HUID Code</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              Explore
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#D4CEBF]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Jewellery Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bridal')}
                  className="text-[#E4D3AC] hover:text-white transition-colors cursor-pointer font-medium"
                >
                  Bridal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mens')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Men's Jewellery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('new-arrivals')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Offers & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              Categories
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#D4CEBF]">
              {CATEGORIES_DATA.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onFilterCategory(cat.id);
                      if (cat.id === 'bridal') onNavigate('bridal');
                      else if (cat.id === 'mens') onNavigate('mens');
                      else onNavigate('catalogue');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Showroom & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              Showroom Location
            </div>
            <div className="space-y-2.5 text-xs font-sans text-[#D4CEBF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {BRAND_DATA.address.formatted}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Open Daily: {BRAND_DATA.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href={getCallUrl()} className="hover:text-white font-medium">
                  {BRAND_DATA.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] font-medium"
                >
                  WhatsApp: {BRAND_DATA.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 text-[#FAFAF8] text-xs font-sans uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Get Showroom Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-[#8C95A6]">
          <p>© {new Date().getFullYear()} Gopilal Jewellers. All rights reserved.</p>
          <p className="text-[11px] text-[#C5A059]/80">
            Jagat Farm, Greater Noida, Uttar Pradesh 201308
          </p>
        </div>
      </div>
    </footer>
  );
};
