import React from 'react';
import { Sparkles, MessageCircle, Phone, Heart, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA, BRAND_DATA } from '../data/jewelleryData';
import { ProductCard } from '../components/ProductCard';
import { getCallUrl, getWhatsAppUrl } from '../utils/helpers';

interface BridalViewProps {
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const BridalView: React.FC<BridalViewProps> = ({
  onSelectProduct,
  wishlistIds,
  onToggleWishlist
}) => {
  const bridalProducts = PRODUCTS_DATA.filter((p) => p.isBridal || p.category === 'bridal');

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Bridal Hero Header (Royal Midnight & Pearl White with Champagne) */}
      <section className="relative bg-[#09111e] text-[#FAFAF8] py-12 sm:py-20 border-b border-[#C5A059]/30 overflow-hidden">
        <div className="absolute inset-0 royal-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/40 text-[#E4D3AC] text-xs font-sans tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Imperial Wedding Trousseau</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8]">
              The Royal Bridal Collection
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-[#C5A059] italic">
              Heirlooms Crafted for Generations of Elegance
            </p>
            <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans leading-relaxed max-w-xl mx-auto">
              Every bride deserves ornaments that mirror her regal grace. Explore handcrafted Polki chokers, multi-tier raani haars, sculpted temple kadas, and delicate hathphools created in 22K hallmarked gold.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={getWhatsAppUrl(undefined, 'Hello Gopilal Jewellers, I would like to book a private Bridal Jewellery Consultation at your showroom.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Bridal Consultation</span>
              </a>
              <a
                href={getCallUrl()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAFAF8] border border-[#C5A059]/40 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Bridal Stylist</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Trousseau Architecture Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-sm border border-[#E5E1D8] p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-sans font-semibold">
              The Seven Ornaments
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#09111e]">
              Complete Bridal Suite Harmony
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-[#F3F1EC] rounded-xs border border-[#E5E1D8]">
              <div className="font-serif font-bold text-sm text-[#09111e]">The Imperial Choker</div>
              <p className="text-[11px] text-[#5A6372] mt-1 font-sans">High-collar neckline framing in Polki or Jadau.</p>
            </div>
            <div className="p-3 bg-[#F3F1EC] rounded-xs border border-[#E5E1D8]">
              <div className="font-serif font-bold text-sm text-[#09111e]">The Raani Haar</div>
              <p className="text-[11px] text-[#5A6372] mt-1 font-sans">Elongated multi-strand pearl and gold elegance.</p>
            </div>
            <div className="p-3 bg-[#F3F1EC] rounded-xs border border-[#E5E1D8]">
              <div className="font-serif font-bold text-sm text-[#09111e]">Matha Patti & Nath</div>
              <p className="text-[11px] text-[#5A6372] mt-1 font-sans">Sculpted facial adornments honoring heritage.</p>
            </div>
            <div className="p-3 bg-[#F3F1EC] rounded-xs border border-[#E5E1D8]">
              <div className="font-serif font-bold text-sm text-[#09111e]">Kadas & Hathphool</div>
              <p className="text-[11px] text-[#5A6372] mt-1 font-sans">Articulated floral rosettes and temple bangles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Curated Selection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e]">
              Bridal Jewellery Showroom Pieces
            </h2>
          </div>
          <span className="text-xs text-[#5A6372] font-sans">
            {bridalProducts.length} Bridal Creations
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {bridalProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* Bridal Consultation Invitation Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#09111e] text-[#FAFAF8] rounded-sm border border-[#C5A059]/40 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A059] font-semibold">
                Private Showroom Lounge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAFAF8]">
                Schedule a Bridal Trousseau Preview
              </h3>
              <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans leading-relaxed">
                Bring your wedding lehenga swatches and family elders to our dedicated lounge in Jagat Farm. Our specialists curate custom pairings and ensure comfortable weight balance for long ceremony rituals.
              </p>
              <div className="space-y-1.5 text-xs text-[#E4D3AC] pt-1 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Private viewing with personalized lighting adjustments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Digital purity testing and gemstone certificate inspection</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center">
              <a
                href={getWhatsAppUrl(undefined, 'Hello Gopilal Jewellers, I would like to schedule a Bridal Trousseau Preview at your showroom.')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Appointment via WhatsApp</span>
              </a>
              <a
                href={getCallUrl()}
                className="py-3 px-4 bg-white/10 hover:bg-white/20 text-[#FAFAF8] border border-white/20 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call ({BRAND_DATA.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
