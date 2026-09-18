import React, { useState, useEffect } from 'react';
import { ActivePage, Product, ProductCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyActions } from './components/MobileStickyActions';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { HomeView } from './views/HomeView';
import { CatalogueView } from './views/CatalogueView';
import { BridalView } from './views/BridalView';
import { MensJewelleryView } from './views/MensJewelleryView';
import { NewArrivalsView } from './views/NewArrivalsView';
import { GalleryView } from './views/GalleryView';
import { OffersView } from './views/OffersView';
import { AboutView } from './views/AboutView';
import { ShowroomView } from './views/ShowroomView';
import { FaqView } from './views/FaqView';
import { getStoredWishlist, setStoredWishlist } from './utils/helpers';
import { PRODUCTS_DATA } from './data/jewelleryData';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    setWishlistIds(getStoredWishlist());
  }, []);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home',
        'catalogue',
        'bridal',
        'mens',
        'gallery',
        'offers',
        'new-arrivals',
        'about',
        'showroom',
        'faq'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    if (category === 'bridal') {
      handleNavigate('bridal');
    } else if (category === 'mens') {
      handleNavigate('mens');
    } else {
      handleNavigate('catalogue');
    }
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      setStoredWishlist(updated);
      return updated;
    });
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
    setStoredWishlist([]);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#09111e] flex flex-col selection:bg-[#C5A059]/20 selection:text-[#09111e]">
      {/* Top Fixed & Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Main Content Area with Bottom Padding for Mobile Sticky Bar */}
      <main className="flex-1 pb-16 md:pb-0">
        {activePage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onFilterCategory={handleFilterCategory}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'catalogue' && (
          <CatalogueView
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'bridal' && (
          <BridalView
            onSelectProduct={handleSelectProduct}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'mens' && (
          <MensJewelleryView
            onSelectProduct={handleSelectProduct}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'new-arrivals' && (
          <NewArrivalsView
            onSelectProduct={handleSelectProduct}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activePage === 'gallery' && <GalleryView />}

        {activePage === 'offers' && <OffersView />}

        {activePage === 'about' && <AboutView />}

        {activePage === 'showroom' && <ShowroomView />}

        {activePage === 'faq' && <FaqView />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onFilterCategory={handleFilterCategory} />

      {/* Sticky Mobile Conversion Bar (Call / WhatsApp / Directions) */}
      <MobileStickyActions />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onSelectProduct={handleSelectProduct}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveFromWishlist={handleToggleWishlist}
        onClearWishlist={handleClearWishlist}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
