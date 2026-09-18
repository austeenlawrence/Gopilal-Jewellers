import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Gem,
  Award,
  Clock,
  Compass,
  ChevronRight
} from 'lucide-react';
import { ActivePage, Product, ProductCategory } from '../types';
import { BRAND_DATA, CATEGORIES_DATA, PRODUCTS_DATA, TESTIMONIALS_DATA } from '../data/jewelleryData';
import { ProductCard } from '../components/ProductCard';
import { getCallUrl, getDirectionsUrl, getWhatsAppUrl } from '../utils/helpers';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
  onFilterCategory: (category: ProductCategory) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onFilterCategory,
  wishlistIds,
  onToggleWishlist
}) => {
  // Curated featured products
  const featuredProducts = PRODUCTS_DATA.filter((p) => p.isFeatured).slice(0, 4);
  const newArrivals = PRODUCTS_DATA.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* 1. Controlled Cinematic Hero (Intentionally proportioned for mobile!) */}
      <section className="relative w-full bg-[#09111e] text-[#FAFAF8] overflow-hidden border-b border-[#C5A059]/30">
        {/* Subtle royal pattern & ambient glow */}
        <div className="absolute inset-0 royal-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Brand Identity & Controlled Typography */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Royal Subtitle Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/40 text-[#E4D3AC] text-xs font-sans tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Royal Indian Jewellery House</span>
              </div>

              {/* Headline */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.15]">
                  GOPILAL JEWELLERS
                </h1>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#C5A059] italic font-normal tracking-wide">
                  Timeless Jewellery. Enduring Elegance.
                </p>
              </div>

              {/* Honest, Elegant Supporting Copy */}
              <p className="text-xs sm:text-sm md:text-base text-[#D4CEBF] leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                Dedicated to the finest traditions of Indian karigari and modern luxury.
                Discover certified hallmarked 22K gold heirlooms, uncut Polki bridal trousseaus,
                and natural diamond ensembles at our showroom in Jagat Farm, Greater Noida.
              </p>

              {/* 4 Conversion CTAs (Clean, accessible, mobile-first) */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                {/* Explore Collection */}
                <button
                  onClick={() => onNavigate('catalogue')}
                  id="hero-explore-btn"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#C5A059] hover:bg-[#b58f45] text-[#09111e] font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Visit Showroom */}
                <button
                  onClick={() => onNavigate('showroom')}
                  id="hero-showroom-btn"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 bg-white/10 hover:bg-white/15 text-[#FAFAF8] border border-white/20 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Visit Showroom</span>
                </button>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="px-4 py-3 sm:px-5 sm:py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* Call */}
                <a
                  href={getCallUrl()}
                  id="hero-call-btn"
                  className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white/5 hover:bg-white/10 text-[#FAFAF8] border border-[#C5A059]/40 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Right: Editorial Visual Composition (Controlled Aspect Ratio) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-sm overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/5] max-w-sm sm:max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
                  alt="Ziya Polki Bridal Choker at Gopilal Jewellers"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111e]/90 via-transparent to-transparent" />

                {/* Featured Inset Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#09111e]/90 backdrop-blur-md rounded-xs border border-[#C5A059]/30">
                  <div className="flex items-center justify-between text-[#C5A059] text-[10px] font-sans tracking-[0.2em] uppercase font-semibold mb-1">
                    <span>Signature Bridal Masterpiece</span>
                    <span>22K BIS Hallmarked</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg text-white font-bold">
                    The Ziya Polki Bridal Suite
                  </div>
                  <p className="text-[11px] text-[#D4CEBF] font-sans line-clamp-1 mt-0.5">
                    Uncut diamonds, South Sea pearls & emerald beads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Royal Pillars of Trust (Authentic & Refined) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-4 sm:p-6 bg-white rounded-sm border border-[#E5E1D8] flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-sm sm:text-base text-[#09111e] mb-1">
              BIS Hallmarked Purity
            </h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Every gold piece bears the mandatory 916/750 hallmark with verifiable HUID.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-sm border border-[#E5E1D8] flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mb-3">
              <Gem className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-sm sm:text-base text-[#09111e] mb-1">
              Certified Gemstones
            </h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Natural diamonds and colored gems evaluated for clarity, cut, and color.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-sm border border-[#E5E1D8] flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-sm sm:text-base text-[#09111e] mb-1">
              Bespoke Indian Karigari
            </h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Generations of master craftsmanship honoring regional wedding traditions.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-white rounded-sm border border-[#E5E1D8] flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#F3F1EC] text-[#C5A059] flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-sm sm:text-base text-[#09111e] mb-1">
              Transparent Valuation
            </h2>
            <p className="text-xs text-[#5A6372] font-sans leading-relaxed">
              Clear digital weight measurements and transparent daily market rates.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Editorial Category Arrangement (Varied layout, NOT generic 3 cards!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Curated Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e] tracking-tight">
              Explore by Jewellery Category
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalogue')}
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-semibold text-[#09111e] hover:text-[#C5A059] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Varied Editorial Layout: Featured Bridal Hero + 6 Compact Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Featured Bridal Big Tile */}
          <div
            onClick={() => {
              onFilterCategory('bridal');
              onNavigate('bridal');
            }}
            className="md:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-auto rounded-sm overflow-hidden group cursor-pointer border border-[#E5E1D8] shadow-xs"
          >
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
              alt="Bridal Jewellery Collection"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09111e] via-[#09111e]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1.5">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A059] font-semibold">
                Royal Trousseau
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Bridal Collection
              </h3>
              <p className="text-xs text-[#E5E1D8] font-sans max-w-md line-clamp-2">
                Imperial chokers, multi-layered raani haars, and matching wedding ornaments designed for your once-in-a-lifetime moment.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#C5A059] group-hover:underline">
                  <span>Explore Bridal Trousseau</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* 4 Compact Category Tiles in 2x2 Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {CATEGORIES_DATA.filter((c) => ['gold', 'diamond', 'rings', 'mens'].includes(c.id)).map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  onFilterCategory(cat.id);
                  if (cat.id === 'mens') {
                    onNavigate('mens');
                  } else {
                    onNavigate('catalogue');
                  }
                }}
                className="relative aspect-square sm:aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer border border-[#E5E1D8] shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111e]/90 via-[#09111e]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[9px] uppercase font-sans tracking-wider text-[#C5A059] font-medium">
                    {cat.badge || 'Fine Jewellery'}
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#FAFAF8] group-hover:text-[#E4D3AC] transition-colors">
                    {cat.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Category Strip for Fast Browsing */}
        <div className="mt-4 pt-4 border-t border-[#E5E1D8] flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onFilterCategory(cat.id);
                if (cat.id === 'bridal') onNavigate('bridal');
                else if (cat.id === 'mens') onNavigate('mens');
                else onNavigate('catalogue');
              }}
              className="flex-shrink-0 px-3.5 py-2 rounded-xs bg-white hover:bg-[#F3F1EC] text-[#09111e] border border-[#E5E1D8] text-xs font-sans tracking-wide whitespace-nowrap transition-colors cursor-pointer"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Handpicked Masterpieces (2-Column Mobile, 4-Column Desktop) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Signature Pieces
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e] tracking-tight">
              Featured Jewellery Creations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalogue')}
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-semibold text-[#09111e] hover:text-[#C5A059] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-column mobile friendly grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product) => (
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

      {/* 5. Bridal Showcase Banner (Royal & Emotional) */}
      <section className="bg-[#09111e] text-[#FAFAF8] py-12 sm:py-16 border-y border-[#C5A059]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                Royal Indian Weddings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAF8] leading-tight">
                The Royal Bridal Trousseau Experience
              </h2>
              <p className="text-xs sm:text-sm text-[#D4CEBF] font-sans leading-relaxed max-w-xl">
                Every Indian wedding is a sacred milestone. At Gopilal Jewellers, we assist brides and families in curating harmonious bridal suites—from magnificent Polki chokers and cascading raani haars to intricate matha pattis and matching hathphools.
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('bridal')}
                  className="px-6 py-3 bg-[#C5A059] hover:bg-[#b58f45] text-[#09111e] font-sans font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
                >
                  Explore Bridal Gallery
                </button>
                <a
                  href={getWhatsAppUrl(undefined, 'Hello Gopilal Jewellers, I would like to schedule a Bridal Jewellery consultation at your showroom.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Book Bridal Preview</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
                alt="Bridal Choker Close up"
                className="rounded-sm object-cover aspect-[3/4] border border-[#C5A059]/40"
              />
              <img
                src="https://images.unsplash.com/photo-1611591475883-93dcf068d839?auto=format&fit=crop&w=600&q=80"
                alt="Bridal Bangles Close up"
                className="rounded-sm object-cover aspect-[3/4] border border-[#C5A059]/40 mt-4 sm:mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Curated New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Fresh Creations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e] tracking-tight">
              New Collection Launches
            </h2>
          </div>
          <button
            onClick={() => onNavigate('new-arrivals')}
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-semibold text-[#09111e] hover:text-[#C5A059] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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

      {/* 7. Showroom Highlight & Direct Greater Noida Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-sm border border-[#E5E1D8] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Showroom Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                  Visit Us in Greater Noida
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#09111e]">
                  Experience Gopilal Jewellers Showroom
                </h2>
                <p className="text-xs sm:text-sm text-[#5A6372] font-sans leading-relaxed">
                  We welcome you to experience our collections in person at our flagship showroom in Jagat Farm. Explore certified hallmarked jewellery under dedicated gemological lighting with warm family hospitality.
                </p>

                {/* Showroom Address Box */}
                <div className="p-4 bg-[#F3F1EC] rounded-sm border border-[#E5E1D8] space-y-2 text-xs text-[#09111e]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-serif text-sm">Gopilal Jewellers</strong>
                      <span className="text-[#5A6372]">{BRAND_DATA.address.formatted}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-1 border-t border-[#E5E1D8]/60 text-[#5A6372]">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>Open Daily: <strong>{BRAND_DATA.hours}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href={getCallUrl()}
                  id="home-showroom-call"
                  className="py-3 px-3 bg-[#09111e] hover:bg-[#131d31] text-[#FAFAF8] text-xs font-sans uppercase font-semibold tracking-wider rounded-sm flex items-center justify-center gap-2 text-center transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-showroom-whatsapp"
                  className="py-3 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans uppercase font-semibold tracking-wider rounded-sm flex items-center justify-center gap-2 text-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-showroom-directions"
                  className="py-3 px-3 bg-[#C5A059] hover:bg-[#b58f45] text-[#09111e] text-xs font-sans uppercase font-semibold tracking-wider rounded-sm flex items-center justify-center gap-2 text-center transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Map Snapshot Preview */}
            <div className="lg:col-span-5 bg-[#09111e] relative min-h-[260px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#E5E1D8]">
              <iframe
                title="Gopilal Jewellers Location Map"
                src={BRAND_DATA.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[280px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Patron Reflections / Testimonials (Tasteful, No Fabricated Stats) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
            Patron Reflections
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09111e]">
            Words from Greater Noida Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TESTIMONIALS_DATA.slice(0, 2).map((t) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 bg-white rounded-sm border border-[#E5E1D8] space-y-3 relative"
            >
              <div className="text-[10px] uppercase font-sans tracking-wider text-[#C5A059] font-semibold">
                {t.occasion}
              </div>
              <p className="font-serif italic text-[#2D3748] text-sm sm:text-base leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-2 border-t border-[#E5E1D8] flex items-center justify-between text-xs font-sans text-[#5A6372]">
                <span className="font-semibold text-[#09111e]">{t.clientName}</span>
                <span>{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
