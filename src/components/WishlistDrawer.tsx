import React from 'react';
import { X, Trash2, MessageCircle, Heart, ArrowRight, Phone } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA, BRAND_DATA } from '../data/jewelleryData';
import { getCallUrl } from '../utils/helpers';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (productId: string) => void;
  onClearWishlist: () => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onClearWishlist,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const savedProducts = PRODUCTS_DATA.filter((p) => wishlistIds.includes(p.id));

  const handleEnquireAllWhatsApp = () => {
    if (savedProducts.length === 0) return;
    const names = savedProducts.map((p, i) => `${i + 1}. ${p.name} (${p.category})`).join('\n');
    const message = `Hello Gopilal Jewellers, I have saved the following pieces in my wishlist and would like to enquire about their availability, pricing, and showroom viewing:\n\n${names}\n\nPlease share details.`;
    window.open(`https://wa.me/91${BRAND_DATA.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#FAFAF8] text-[#09111e] h-full flex flex-col shadow-2xl border-l border-[#C5A059]/30 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#09111e] text-[#FAFAF8] border-b border-[#C5A059]/20">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
            <h2 id="wishlist-drawer-title" className="font-serif text-lg sm:text-xl font-bold tracking-wide">
              Saved Jewellery ({savedProducts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Wishlist"
            className="p-2 text-[#E5E1D8] hover:text-white transition-colors cursor-pointer rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {savedProducts.length === 0 ? (
            <div className="text-center py-16 px-4">
              <Heart className="w-12 h-12 text-[#C5A059]/40 mx-auto mb-3 stroke-[1.5]" />
              <h3 className="font-serif text-lg text-[#09111e] font-semibold mb-1">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs text-[#5A6372] font-sans max-w-xs mx-auto leading-relaxed mb-6">
                Explore our Royal Jewellery collections and tap the heart icon on any piece to save it for consultation.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#09111e] text-[#FAFAF8] text-xs font-sans uppercase font-semibold tracking-wider rounded-sm hover:bg-[#131d31] transition-colors cursor-pointer"
              >
                Browse Catalogue
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8] text-xs text-[#5A6372]">
                <span>Saved for your showroom consultation</span>
                <button
                  onClick={onClearWishlist}
                  className="text-[#9F7E3B] hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              <div className="space-y-3">
                {savedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 bg-white rounded-sm border border-[#E5E1D8] hover:border-[#C5A059] transition-all flex items-center gap-3.5 group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xs object-cover flex-shrink-0 cursor-pointer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase font-sans tracking-wider text-[#C5A059] font-medium">
                        {product.purity}
                      </div>
                      <h4
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="font-serif text-sm font-semibold text-[#09111e] truncate group-hover:text-[#C5A059] cursor-pointer"
                      >
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-[#5A6372] font-sans truncate">
                        {product.metal}
                      </p>
                      <div className="text-xs font-serif font-bold text-[#9F7E3B] mt-1">
                        Enquire for Price
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      aria-label="Remove item"
                      className="p-2 text-[#8C95A6] hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {savedProducts.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#09111e] text-[#FAFAF8] border-t border-[#C5A059]/30 space-y-2.5">
            <button
              onClick={handleEnquireAllWhatsApp}
              id="wishlist-enquire-all-whatsapp"
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire All on WhatsApp ({savedProducts.length})</span>
            </button>

            <a
              href={getCallUrl()}
              className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-[#FAFAF8] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Showroom to Inquire</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
