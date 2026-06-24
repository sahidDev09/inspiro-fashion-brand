import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductsByCategory, getCategoryInfo } from '@/lib/products';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryInfo(slug);
  if (!category) return { title: 'Not Found — Inspiro' };
  return {
    title: `${category.title} — Inspiro Fashion`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryInfo(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-grow mt-20">
        {/* Category Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-50">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col items-center text-center relative z-10">
            {/* Breadcrumb */}
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 mb-8 flex items-center gap-3">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="text-black/20">•</span>
              <span className="text-black font-bold">{category.title}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-6">
              {category.title}
            </h1>
            <p className="text-sm md:text-base text-black/60 font-mono max-w-xl leading-relaxed">
              {category.description}
            </p>

            {/* Decorative pill */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-black/20"></div>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-black/40">
                {categoryProducts.length} {categoryProducts.length === 1 ? 'Product' : 'Products'}
              </span>
              <div className="h-px w-12 bg-black/20"></div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#527661]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#527661]/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
            {/* Filter bar */}
            <div className="flex justify-between items-center mb-12 pb-6 border-b border-black/10">
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono tracking-widest uppercase text-black/40">
                  Showing {categoryProducts.length} results
                </span>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white px-6 py-2 rounded-full bg-[#527661] hover:bg-[#3d5a49] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                Filters
              </button>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
                {categoryProducts.map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id} className="group cursor-pointer flex flex-col">
                    <div
                      className="relative aspect-[3/4] mb-4 bg-white/10 p-1 transition-transform duration-300"
                      style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}
                    >
                      <div
                        className="relative w-full h-full bg-white/5 overflow-hidden"
                        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                        />
                        {product.discount && (
                          <div
                            className="absolute top-0 right-0 bg-[#527661] text-white text-[10px] font-bold px-3 py-1.5 tracking-widest z-10"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}
                          >
                            {product.discount} OFF
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col text-black mt-3 h-full">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <h3 className="text-xs font-bold tracking-widest uppercase mb-1">{product.name}</h3>
                          <span className="text-[10px] text-black/60 tracking-wider uppercase font-mono">{product.color}</span>
                        </div>
                        <button className="bg-[#527661] text-white p-2 rounded-full hover:bg-[#3d5a49] transition-colors shadow-sm ml-2 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-baseline space-x-3 pt-3 mt-3 border-t border-black/10">
                        <span className="text-base text-[#527661] font-bold tracking-wider font-mono">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-black/40 line-through tracking-widest font-mono">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </Link>
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
                <h3 className="text-lg font-bold uppercase tracking-wide mb-2">Coming Soon</h3>
                <p className="text-sm text-black/50 font-mono max-w-sm">
                  New products for this collection are on the way. Check back soon for fresh drops.
                </p>
                <Link href="/" className="mt-8 text-[10px] font-mono tracking-widest uppercase text-white px-8 py-3 rounded-full bg-[#527661] hover:bg-[#3d5a49] transition-colors">
                  Browse All
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
