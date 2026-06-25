'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { filterColors, filterPriceRanges, filterSizes } from '@/lib/products';

interface CategoryContentProps {
  products: Product[];
  categoryTitle: string;
}

export default function CategoryContent({ products, categoryTitle }: CategoryContentProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('default');

  // Toggle filter helpers
  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by color
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c))
      );
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      const ranges = filterPriceRanges.filter((r) =>
        selectedPriceRanges.includes(r.label)
      );
      result = result.filter((p) =>
        ranges.some((r) => p.numericPrice >= r.min && p.numericPrice <= r.max)
      );
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case 'price-high':
        result.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case 'name-az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, selectedColors, selectedPriceRanges, selectedSizes, sortBy]);

  const hasActiveFilters =
    selectedColors.length > 0 ||
    selectedPriceRanges.length > 0 ||
    selectedSizes.length > 0;

  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setSelectedSizes([]);
  };

  return (
    <div className="flex gap-8 lg:gap-10">
      {/* ─── Left Sidebar Filters ─── */}
      <aside className="hidden md:block w-[220px] lg:w-[240px] flex-shrink-0 sticky top-28 self-start">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black">
            Filter By
          </h2>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-[10px] font-mono tracking-wider uppercase text-[#527661] hover:text-[#3d5a49] transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {/* ─ COLOR ─ */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 mb-4 pb-2 border-b border-black/10">
            Color
          </h3>
          <div className="space-y-2.5 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin">
            {filterColors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span
                  className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-all duration-200 ${
                    selectedColors.includes(color)
                      ? 'bg-[#527661] border-[#527661]'
                      : 'border-black/20 group-hover:border-black/40'
                  }`}
                >
                  {selectedColors.includes(color) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-[13px] text-black/70 group-hover:text-black transition-colors">
                  {color}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ─ PRICE ─ */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 mb-4 pb-2 border-b border-black/10">
            Price
          </h3>
          <div className="space-y-2.5">
            {filterPriceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span
                  className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-all duration-200 ${
                    selectedPriceRanges.includes(range.label)
                      ? 'bg-[#527661] border-[#527661]'
                      : 'border-black/20 group-hover:border-black/40'
                  }`}
                >
                  {selectedPriceRanges.includes(range.label) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-[13px] text-black/70 group-hover:text-black transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ─ SIZE ─ */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 mb-4 pb-2 border-b border-black/10">
            Size
          </h3>
          <div className="space-y-2.5">
            {filterSizes.map((size) => (
              <label
                key={size}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span
                  className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-all duration-200 ${
                    selectedSizes.includes(size)
                      ? 'bg-[#527661] border-[#527661]'
                      : 'border-black/20 group-hover:border-black/40'
                  }`}
                >
                  {selectedSizes.includes(size) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-[13px] text-black/70 group-hover:text-black transition-colors">
                  {size}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* ─── Right Content: Sort + Product Grid ─── */}
      <div className="flex-1 min-w-0">
        {/* Sort bar */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono tracking-wider text-black/40 uppercase">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-wider text-black/50 uppercase hidden sm:inline">
              Sort By
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-white border border-black/10 rounded-lg px-4 py-2 text-black/70 focus:outline-none focus:border-[#527661] transition-colors cursor-pointer appearance-none pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
              }}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Product Grid — 3 columns like screenshot */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                {/* Product Image */}
                <Link href={`/products/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-[#527661] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                      {product.discount} OFF
                    </div>
                  )}

                  {/* Ratings badge — like the screenshot */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
                    <span className="text-[11px] font-mono text-black/70">0.0</span>
                    <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-[10px] text-black/40 font-mono">| 0.0</span>
                  </div>

                  {/* Color dots */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1">
                    {product.colors.slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-sm"
                        style={{ backgroundColor: getColorHex(c) }}
                      />
                    ))}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-[13px] font-semibold text-black/80 leading-tight mb-2 line-clamp-2 hover:text-[#527661] transition-colors">
                      {product.name} | {categoryTitle}
                    </h3>
                  </Link>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-base font-bold text-[#527661] tracking-wide">
                      TK. {product.numericPrice.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-black/35 line-through">
                        TK. {product.originalPrice.replace('৳', '')}
                      </span>
                    )}
                  </div>

                  <button className="w-full py-2.5 border border-black/15 rounded-lg text-[12px] font-semibold uppercase tracking-wider text-black/70 hover:bg-[#527661] hover:text-white hover:border-[#527661] transition-all duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
              {hasActiveFilters ? 'No Matching Products' : 'Coming Soon'}
            </h3>
            <p className="text-sm text-black/50 font-mono max-w-sm">
              {hasActiveFilters
                ? 'Try adjusting your filters to find what you\'re looking for.'
                : 'New products for this collection are on the way. Check back soon for fresh drops.'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="mt-6 text-[10px] font-mono tracking-widest uppercase text-white px-8 py-3 rounded-full bg-[#527661] hover:bg-[#3d5a49] transition-colors"
              >
                Clear Filters
              </button>
            )}
            {!hasActiveFilters && (
              <Link href="/" className="mt-8 text-[10px] font-mono tracking-widest uppercase text-white px-8 py-3 rounded-full bg-[#527661] hover:bg-[#3d5a49] transition-colors">
                Browse All
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/** Map color names to hex values for the dot indicators */
function getColorHex(color: string): string {
  const map: Record<string, string> = {
    Multicolor: 'linear-gradient(135deg, #f00, #0f0, #00f)',
    'Sky Blue': '#87CEEB',
    Mint: '#98FF98',
    Biscuit: '#D4A574',
    'Slate Blue': '#6A5ACD',
    'Pastel Orange': '#FFB347',
    'Off White': '#FAF0E6',
    Blue: '#4169E1',
    Black: '#1a1a1a',
    Navy: '#000080',
    Green: '#527661',
    Grey: '#808080',
    White: '#f5f5f5',
    Cream: '#FFFDD0',
  };
  return map[color] || '#ccc';
}
