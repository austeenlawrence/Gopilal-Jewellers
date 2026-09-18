import React from 'react';
import { Sparkles, Phone, MessageCircle, Shield } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA, BRAND_DATA } from '../data/jewelleryData';
import { ProductCard } from '../components/ProductCard';
import { getCallUrl, getWhatsAppUrl } from '../utils/helpers';

interface MensJewelleryViewProps {
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const MensJewelleryView: React.FC<MensJewelleryViewProps> = ({
  onSelectProduct,
  wishlistIds,
  onToggleWishlist
}) => {
  const mensProducts = PRODUCTS_DATA.filter((p) => p.isMens || p.category === 'mens');

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-[#09111e] text-[#FAFAF8] py-12 sm:py-16 border-b border-[#C5A059]/30 relative overflow-hidden">
        <div className="absolute inset-0 royal-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/40 text-[#E4D3AC] text-xs font-sans tracking-[0.2em] uppercase">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Sovereign Collection</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8]">
              Men's Royal Jewellery
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#C5A059] italic">
              Weight. Authority. Uncompromising Craft.
            </p>
            <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans leading-relaxed">
              Designed for the modern gentleman who commands respect. Solid 22K gold kadas with substantial heft, precision-engineered interlocking Cuban chains, heraldic signet rings, and bespoke cufflinks.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(undefined, "Hello Gopilal Jewellers, I would like to enquire about your Men's Jewellery collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
              <a
                href={getCallUrl()}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#FAFAF8] border border-[#C5A059]/40 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Masculine Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-sm border border-[#E5E1D8] space-y-1.5">
            <h2 className="font-serif font-bold text-base text-[#09111e]">Solid 22K Gold Heft</h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Heavy gauge kadas forged for enduring comfort and lifelong structural durability.
            </p>
          </div>
          <div className="p-5 bg-white rounded-sm border border-[#E5E1D8] space-y-1.5">
            <h2 className="font-serif font-bold text-base text-[#09111e]">Precision Cuban & Rope Links</h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Diamond-cut beveled facets that catch light cleanly without twisting.
            </p>
          </div>
          <div className="p-5 bg-white rounded-sm border border-[#E5E1D8] space-y-1.5">
            <h2 className="font-serif font-bold text-base text-[#09111e]">Family Crest Engraving</h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Custom signet rings engraved with personal initials or ancestral emblems.
            </p>
          </div>
        </div>
      </section>

      {/* Men's Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Showroom Selection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e]">
              Men's Signature Ornaments
            </h2>
          </div>
          <span className="text-xs text-[#5A6372] font-sans">
            {mensProducts.length} Creations
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {mensProducts.map((product) => (
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
    </div>
  );
};
