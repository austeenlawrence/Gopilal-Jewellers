import React from 'react';
import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isWishlisted,
  onToggleWishlist
}) => {
  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'BRIDAL':
        return 'bg-[#09111e] text-[#E4D3AC] border border-[#C5A059]/50';
      case 'NEW ARRIVAL':
      case 'NEW':
        return 'bg-[#C5A059] text-white';
      case 'FEATURED':
        return 'bg-[#1c2a44] text-[#FAFAF8]';
      default:
        return 'bg-neutral-800 text-white';
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-[#FFFFFF] rounded-sm border border-[#E5E1D8] hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
    >
      {/* Product Image Box */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F1EC]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist Button (Min 44x44px target) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          id={`wishlist-btn-${product.id}`}
          className="absolute top-2 right-2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#09111e] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
              isWishlisted
                ? 'fill-[#C5A059] text-[#C5A059]'
                : 'text-[#5A6372] group-hover:text-[#09111e]'
            }`}
          />
        </button>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 rounded-xs ${getBadgeStyle(
              product.badge
            )}`}
          >
            {product.badge}
          </span>
        )}

        {/* Purity Overlay Pill */}
        <div className="absolute bottom-2 left-2 bg-[#09111e]/80 backdrop-blur-xs text-[#FAFAF8] text-[9px] px-1.5 py-0.5 rounded-xs font-sans tracking-wide">
          {product.purity}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
        <div>
          {/* Metal / Category Meta */}
          <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.14em] text-[#C5A059] font-medium mb-1">
            {product.metal}
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelect(product)}
            className="font-serif text-sm sm:text-base font-semibold text-[#09111e] leading-snug line-clamp-2 hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short Description (Hidden on extra small screens to keep card ultra-compact) */}
          <p className="hidden sm:block text-xs text-[#5A6372] line-clamp-2 mt-1.5 leading-relaxed font-sans">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & CTA Section */}
        <div className="mt-3 pt-2.5 border-t border-[#E5E1D8]/60">
          <div className="flex items-center justify-between gap-1 mb-2">
            <span className="text-[10px] sm:text-xs font-serif font-bold uppercase tracking-wider text-[#9F7E3B]">
              Enquire for Price
            </span>
            <span className="text-[9px] text-[#8C95A6] font-sans">
              Hallmarked
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {/* View Details */}
            <button
              type="button"
              onClick={() => onSelect(product)}
              id={`view-details-${product.id}`}
              className="w-full py-1.5 px-2 text-[11px] sm:text-xs font-sans font-medium text-[#09111e] bg-[#F3F1EC] hover:bg-[#E5E1D8] transition-colors rounded-xs flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            {/* WhatsApp Enquiry Button */}
            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              id={`whatsapp-card-${product.id}`}
              className="w-full py-1.5 px-2 text-[11px] sm:text-xs font-sans font-medium text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-xs flex items-center justify-center gap-1 text-center"
              title={`Enquire on WhatsApp for ${product.name}`}
            >
              <MessageCircle className="w-3 h-3" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
