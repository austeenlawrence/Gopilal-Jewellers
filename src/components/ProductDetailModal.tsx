import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  MessageCircle,
  Heart,
  ShieldCheck,
  Sparkles,
  MapPin,
  ChevronRight,
  Share2
} from 'lucide-react';
import { Product } from '../types';
import { BRAND_DATA, PRODUCTS_DATA } from '../data/jewelleryData';
import { getCallUrl, getDirectionsUrl, getWhatsAppUrl } from '../utils/helpers';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct
}) => {
  const [activeImage, setActiveImage] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const allImages = [
    product.image,
    ...(product.gallery || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  // Find related products in same category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.metal === product.metal)
  ).slice(0, 3);

  const handleShare = async () => {
    const shareText = `${product.name} at Gopilal Jewellers, Greater Noida`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#09111e]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAFAF8] text-[#09111e] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col border border-[#C5A059]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#09111e] text-[#FAFAF8] border-b border-[#C5A059]/20">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#C5A059] font-semibold">
              Gopilal Jewellers
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-[#E5E1D8] font-serif capitalize">
              {product.category} Collection
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share */}
            <button
              onClick={handleShare}
              title="Share Jewellery"
              className="p-1.5 text-[#E5E1D8] hover:text-[#C5A059] transition-colors rounded-sm cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copied && (
              <span className="text-[10px] text-[#C5A059] font-sans">
                Link Copied!
              </span>
            )}

            {/* Wishlist */}
            <button
              onClick={() => onToggleWishlist(product.id)}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              className="p-1.5 text-[#E5E1D8] hover:text-[#C5A059] transition-colors rounded-sm cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'fill-[#C5A059] text-[#C5A059]' : ''
                }`}
              />
            </button>

            {/* Close Button (Min 44x44px touch friendly) */}
            <button
              onClick={onClose}
              id="modal-close-btn"
              aria-label="Close dialog"
              className="p-2 text-[#E5E1D8] hover:text-white transition-colors rounded-sm cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left: Image Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-[#F3F1EC] border border-[#E5E1D8]">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs bg-[#09111e] text-[#C5A059] border border-[#C5A059]/40">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnail strip if multiple images */}
              {allImages.length > 1 && (
                <div className="flex gap-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 rounded-xs overflow-hidden border-2 cursor-pointer transition-all ${
                        activeImage === img
                          ? 'border-[#C5A059] scale-95'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} angle ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Hallmarking Trust Notice */}
              <div className="p-3 bg-[#F3F1EC] rounded-sm border border-[#E5E1D8] flex items-start gap-2.5 text-xs text-[#5A6372]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[#09111e]">Authenticity Guaranteed:</strong> Certified BIS Hallmarked {product.purity} with verified HUID and genuine gemological grading.
                </p>
              </div>
            </div>

            {/* Right: Product Details & Purchase/Enquiry Actions */}
            <div className="flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Category & Purity */}
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
                    {product.metal}
                  </span>
                  <span className="text-[#8C95A6]">•</span>
                  <span className="text-xs font-sans text-[#5A6372]">
                    {product.purity}
                  </span>
                </div>

                {/* Title */}
                <h1
                  id="modal-product-title"
                  className="font-serif text-2xl sm:text-3xl text-[#09111e] font-bold leading-tight"
                >
                  {product.name}
                </h1>

                {/* Full Description */}
                <p className="text-sm text-[#4A5568] leading-relaxed font-sans">
                  {product.fullDescription}
                </p>

                {/* Specifications Matrix */}
                <div className="bg-[#FFFFFF] border border-[#E5E1D8] rounded-sm overflow-hidden text-xs">
                  <div className="px-3 py-2 bg-[#F3F1EC] font-serif font-semibold text-[#09111e] border-b border-[#E5E1D8] tracking-wide">
                    Jewellery Specifications
                  </div>
                  <div className="divide-y divide-[#E5E1D8]">
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-[#8C95A6] font-medium">Metal & Polish</span>
                      <span className="col-span-2 text-[#09111e] font-semibold">{product.metal}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-[#8C95A6] font-medium">Purity Standard</span>
                      <span className="col-span-2 text-[#09111e] font-semibold">{product.purity}</span>
                    </div>
                    {product.stones && (
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-[#8C95A6] font-medium">Stones / Diamonds</span>
                        <span className="col-span-2 text-[#09111e] font-semibold">{product.stones}</span>
                      </div>
                    )}
                    {product.weightApprox && (
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-[#8C95A6] font-medium">Approx. Weight</span>
                        <span className="col-span-2 text-[#09111e] font-semibold">{product.weightApprox}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-3 bg-[#09111e] text-[#FAFAF8] rounded-sm flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-sans">
                      Pricing Structure
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-bold text-[#E4D3AC]">
                      Enquire for Live Price
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-[#E5E1D8]/80 font-sans">
                    <div>Based on prevailing daily gold rate</div>
                    <div className="text-[#C5A059]">Transparent weight calculation</div>
                  </div>
                </div>
              </div>

              {/* Conversion Actions */}
              <div className="space-y-2.5 pt-2">
                {/* Primary CTA: WhatsApp */}
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-whatsapp-cta"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-sm flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Secondary CTA: Call Showroom */}
                <a
                  href={getCallUrl()}
                  id="modal-call-cta"
                  className="w-full py-2.5 px-4 bg-[#09111e] hover:bg-[#131d31] text-[#FAFAF8] border border-[#C5A059]/50 font-sans font-semibold text-sm tracking-wider uppercase rounded-sm flex items-center justify-center gap-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Showroom ({BRAND_DATA.phoneDisplay})</span>
                </a>

                {/* Visit Showroom / Map link */}
                <div className="pt-2 text-center">
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#5A6372] hover:text-[#09111e] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>View Showroom Location at Jagat Farm, Greater Noida</span>
                    <ChevronRight className="w-3 h-3 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Recommendations */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-[#E5E1D8]">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <h2 className="font-serif text-lg font-bold text-[#09111e]">
                  Complementary Creations
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="p-2 bg-white rounded-xs border border-[#E5E1D8] hover:border-[#C5A059] transition-colors cursor-pointer group flex items-center gap-2.5"
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-12 h-12 rounded-xs object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-serif font-semibold text-[#09111e] truncate group-hover:text-[#C5A059]">
                        {rel.name}
                      </div>
                      <div className="text-[10px] text-[#C5A059] uppercase font-sans">
                        Enquire for Price
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
