import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Heart,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { ActivePage } from '../types';
import { BRAND_DATA } from '../data/jewelleryData';
import { BrandLogo } from './BrandLogo';
import { getCallUrl, getWhatsAppUrl } from '../utils/helpers';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  wishlistCount,
  onOpenWishlist
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change or resize to desktop
  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks: { id: ActivePage; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'bridal', label: 'Bridal', highlight: true },
    { id: 'mens', label: "Men's" },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Offers' },
    { id: 'about', label: 'About' },
    { id: 'showroom', label: 'Showroom' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar (Desktop & Tablet) */}
      <div className="hidden sm:block bg-[#09111e] text-[#FAFAF8] text-xs border-b border-[#C5A059]/20 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-[#E4D3AC]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{BRAND_DATA.address.short}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{BRAND_DATA.hours} Daily</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={getCallUrl()}
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors py-0.5"
              id="topbar-call-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{BRAND_DATA.phoneDisplay}</span>
            </a>
            <span className="text-[#C5A059]/40">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors py-0.5"
              id="topbar-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-[#FAFAF8] transition-all duration-200 border-b ${
          isScrolled ? 'shadow-md border-[#E5E1D8]/80 py-2.5 sm:py-3' : 'border-[#E5E1D8] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo
            variant="dark"
            size="md"
            onClick={() => handleNavClick('home')}
          />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`desktop-nav-${link.id}`}
                  className={`text-xs font-sans tracking-[0.14em] uppercase transition-colors relative py-1 cursor-pointer select-none ${
                    isActive
                      ? 'text-[#09111e] font-semibold'
                      : 'text-[#5A6372] hover:text-[#09111e]'
                  } ${link.highlight ? 'text-[#9F7E3B] font-semibold' : ''}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions: Wishlist + Showroom Visit + Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              id="nav-wishlist-btn"
              aria-label="View Wishlist"
              className="relative p-2.5 text-[#09111e] hover:text-[#C5A059] transition-colors rounded-full hover:bg-[#F3F1EC] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Visit Showroom CTA (Desktop) */}
            <button
              onClick={() => handleNavClick('showroom')}
              id="nav-showroom-cta-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase bg-[#09111e] text-[#FAFAF8] hover:bg-[#131d31] transition-colors rounded-sm border border-[#C5A059]/40 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Visit Showroom</span>
            </button>

            {/* Mobile Hamburger Toggle Button (Strictly >= 44x44px touch target) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-hamburger-toggle"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#09111e] hover:text-[#C5A059] hover:bg-[#F3F1EC] rounded-sm transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Full-Screen Overlay & Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-[61px] sm:top-[97px] z-50 bg-[#09111e] text-[#FAFAF8] flex flex-col justify-between overflow-y-auto"
        >
          {/* Links List */}
          <div className="px-6 py-6 space-y-1">
            <div className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A059] mb-4 pb-2 border-b border-white/10">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`mobile-nav-${link.id}`}
                  className={`w-full text-left py-3.5 px-3 flex items-center justify-between text-base font-serif tracking-wide border-b border-white/5 transition-colors cursor-pointer rounded-sm ${
                    isActive
                      ? 'text-[#C5A059] bg-white/5 font-semibold'
                      : 'text-[#E5E1D8] hover:text-[#FAFAF8] hover:bg-white/5'
                  } ${link.highlight ? 'text-[#E4D3AC]' : ''}`}
                >
                  <span className="flex items-center gap-2.5">
                    {link.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    )}
                    {link.label}
                  </span>
                  {link.highlight && (
                    <span className="text-[10px] tracking-wider uppercase bg-[#C5A059]/20 text-[#C5A059] px-2 py-0.5 rounded font-sans">
                      Royal
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Footer Contact & Actions */}
          <div className="p-6 bg-[#060c15] border-t border-white/10 space-y-4">
            <div className="space-y-1.5 text-xs text-[#E5E1D8]/80">
              <p className="font-serif font-semibold text-[#FAFAF8] text-sm tracking-wider">
                GOPILAL JEWELLERS
              </p>
              <p className="text-[11px] leading-relaxed">
                {BRAND_DATA.address.line2}, {BRAND_DATA.address.short}
              </p>
              <p className="text-[11px] text-[#C5A059]">
                Hours: {BRAND_DATA.hours} (Open Daily)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={getCallUrl()}
                id="mobile-menu-call-btn"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 text-white hover:bg-white/20 rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Us</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-menu-whatsapp-btn"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] text-white hover:bg-[#20ba5a] rounded-sm text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
