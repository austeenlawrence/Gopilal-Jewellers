import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/jewelleryData';
import { ProductCard } from '../components/ProductCard';

interface CatalogueViewProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const CatalogueView: React.FC<CatalogueViewProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'name'>('featured');

  const filterCategories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Jewellery' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'silver', label: 'Silver' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'rings', label: 'Rings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'chains', label: 'Chains' },
    { id: 'pendants', label: 'Pendants' },
    { id: 'mens', label: "Men's" },
    { id: 'custom', label: 'Custom' }
  ];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_DATA.filter((product) => {
      // Category match (primary or secondary)
      const matchesCategory =
        selectedCategory === 'all' ||
        product.category === selectedCategory ||
        (product.secondaryCategories && product.secondaryCategories.includes(selectedCategory));

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.metal.toLowerCase().includes(query) ||
        (product.stones && product.stones.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (sortBy === 'featured') {
      result = [...result].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const activeCategoryInfo = CATEGORIES_DATA.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#E5E1D8] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A059] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Showroom Collection</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#09111e]">
          {selectedCategory === 'all'
            ? 'Complete Jewellery Catalogue'
            : activeCategoryInfo?.label || 'Curated Jewellery'}
        </h1>
        <p className="text-xs sm:text-sm text-[#5A6372] font-sans max-w-2xl">
          {activeCategoryInfo?.description ||
            'Explore over 40 handcrafted creations in 22K hallmarked gold, certified diamonds, uncut polki, and pure sterling silver.'}
        </p>
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C95A6]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by jewellery name, metal, or gemstone..."
            className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#E5E1D8] rounded-sm text-xs sm:text-sm text-[#09111e] placeholder-[#8C95A6] focus:outline-none focus:border-[#C5A059] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#8C95A6] hover:text-[#09111e]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort & Count */}
        <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
          <span className="text-[#5A6372] font-sans">
            Showing <strong className="text-[#09111e]">{filteredProducts.length}</strong> creations
          </span>

          <div className="flex items-center gap-1.5 bg-white border border-[#E5E1D8] rounded-sm px-2.5 py-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-[#09111e] font-sans focus:outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="newest">Sort: Newest</option>
              <option value="name">Sort: Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills (Horizontal scrollable on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 px-3.5 py-2 text-xs font-sans tracking-wide rounded-sm transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#09111e] text-[#FAFAF8] font-semibold border border-[#09111e]'
                  : 'bg-white text-[#5A6372] hover:text-[#09111e] border border-[#E5E1D8] hover:border-[#C5A059]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Products Grid (2-column on mobile, 3 on tablet, 4 on desktop) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-sm border border-[#E5E1D8] p-6 space-y-3">
          <p className="font-serif text-lg text-[#09111e] font-semibold">
            No jewellery matching your criteria
          </p>
          <p className="text-xs text-[#5A6372] max-w-sm mx-auto">
            Try adjusting your search keywords or explore our other royal categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('all');
            }}
            className="px-4 py-2 bg-[#09111e] text-[#FAFAF8] text-xs font-sans uppercase rounded-sm hover:bg-[#131d31] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};
