import React, { useState } from 'react';
import { Sparkles, X, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/jewelleryData';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bridal', 'Diamonds', 'Gold', "Men's", 'Earrings', 'Bangles', 'Craftsmanship', 'Silver'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E1D8] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Archive</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#09111e]">
              Jewellery Artistry Gallery
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6372] font-sans">
              A visual chronicle of regal Indian goldwork, uncut polki gemstones, and contemporary diamond masterworks.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 text-xs font-sans tracking-wide rounded-sm transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#09111e] text-[#FAFAF8] font-semibold'
                  : 'bg-white text-[#5A6372] hover:text-[#09111e] border border-[#E5E1D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-sm overflow-hidden bg-[#F3F1EC] border border-[#E5E1D8] cursor-pointer aspect-square sm:aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09111e]/90 via-[#09111e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 sm:p-4 text-white">
                <span className="text-[9px] uppercase font-sans tracking-wider text-[#C5A059]">
                  {item.category}
                </span>
                <h2 className="font-serif text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.title}
                </h2>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-[#D4CEBF] font-sans">
                  <Maximize2 className="w-3 h-3 text-[#C5A059]" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#09111e] text-[#FAFAF8] rounded-sm overflow-hidden border border-[#C5A059]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close"
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-1">
              <span className="text-[10px] uppercase font-sans tracking-wider text-[#C5A059] font-semibold">
                {activeItem.category}
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#FAFAF8]">
                {activeItem.title}
              </h2>
              <p className="text-xs text-[#D4CEBF] font-sans leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
