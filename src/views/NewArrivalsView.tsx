import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/jewelleryData';
import { ProductCard } from '../components/ProductCard';

interface NewArrivalsViewProps {
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const NewArrivalsView: React.FC<NewArrivalsViewProps> = ({
  onSelectProduct,
  wishlistIds,
  onToggleWishlist
}) => {
  const newArrivals = PRODUCTS_DATA.filter((p) => p.isNewArrival || p.badge === 'NEW ARRIVAL' || p.badge === 'NEW');

  return (
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Editorial Launch Header */}
      <section className="bg-white border-b border-[#E5E1D8] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Imperial Atelier Release</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#09111e]">
              Latest Jewellery Unveilings
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
              Explore the season's newest additions handcrafted by our master karigars. Each design incorporates fresh silhouettes, rare gemstone cuts, and BIS 916/750 certified purity.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {newArrivals.map((product) => (
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
