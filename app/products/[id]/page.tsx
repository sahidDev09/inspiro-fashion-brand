import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ProductGallery from '@/components/ProductGallery';
import SizeChart from '@/components/SizeChart';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = [
  { id: 1, name: 'ESSENTIAL T-SHIRT', color: 'WHITE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt1.jpg' },
  { id: 2, name: 'OVERSIZED TEE', color: 'WASHED BLACK', price: '৳1,890', originalPrice: '৳2,290', discount: '18%', image: '/assets/tshirt2.jpg' },
  { id: 3, name: 'GRAPHIC PRINT', color: 'VINTAGE GREY', price: '৳2,190', originalPrice: '৳2,690', discount: '18%', image: '/assets/tshirt3.jpg' },
  { id: 4, name: 'CLASSIC CREWNECK', color: 'NAVY BLUE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt4.jpg' },
  { id: 5, name: 'HEAVYWEIGHT TEE', color: 'FOREST GREEN', price: '৳2,490', originalPrice: '৳2,990', discount: '16%', image: '/assets/tshirt5.jpg' },
];

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20 md:mt-16">
        {/* Breadcrumb */}
        <div className="text-sm text-black/60 mb-8 flex items-center gap-2 font-mono uppercase tracking-widest text-[10px]">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Home
          </Link>
          <span className="text-black/30">•</span>
          <span className="text-black font-bold">Product details</span>
        </div>

        {/* Product Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Gallery Component */}
          <ProductGallery images={[product.image, product.image, product.image]} alt={product.name} />

          {/* Product Info */}
          <div className="flex flex-col py-4">
            <div className="border border-black/10 bg-white/50 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase w-fit mb-6 text-black/60 font-mono">
              Man Fashion
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 uppercase">{product.name}</h1>
            <p className="text-2xl font-bold text-[#527661] font-mono mb-8">BDT {product.price.replace('৳', '')}</p>

            <div className="flex items-center gap-3 bg-white/60 border border-black/5 rounded-full px-5 py-3 text-xs text-black/70 mb-10 font-mono">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#527661]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Order in <span className="font-bold text-black bg-black/5 px-2 py-0.5 rounded-md">02:30:25</span> to get next day delivery</span>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <h3 className="text-xs font-bold mb-4 tracking-widest uppercase">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${size === 'S' ? 'bg-[#527661] text-white shadow-md scale-105' : 'bg-white/50 text-black hover:bg-white border border-black/10 hover:border-black/30'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button className="flex-1 bg-[#131313] text-white rounded-full py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#527661] transition-colors shadow-xl shadow-black/10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                Add to Cart
              </button>
              <button className="flex-1 bg-[#527661] text-white hover:bg-[#527661]/80 border border-transparent rounded-full py-4 text-xs font-bold tracking-widest uppercase transition-colors shadow-sm flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                Virtual Trial
              </button>
              <button className="w-14 h-14 shrink-0 border border-black/10 bg-white/50 rounded-full flex items-center justify-center hover:bg-white hover:border-black/30 transition-all text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-black/10">
              {/* Description Accordion */}
              <div className="py-6 border-b border-black/10">
                <div className="flex justify-between items-center mb-4 cursor-pointer group">
                  <h3 className="font-bold text-sm tracking-widest uppercase">Description & Fit</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/40 group-hover:text-black transition-colors"><path d="m18 15-6-6-6 6"/></svg>
                </div>
                <p className="text-sm text-black/60 leading-relaxed font-mono">
                  Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.
                </p>
              </div>

              {/* Shipping Accordion */}
              <div className="py-6 border-b border-black/10">
                <div className="flex justify-between items-center mb-6 cursor-pointer group">
                  <h3 className="font-bold text-sm tracking-widest uppercase">Shipping</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/40 group-hover:text-black transition-colors transform rotate-180"><path d="m18 15-6-6-6 6"/></svg>
                </div>
                
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white border border-black/10 p-2 rounded-full shadow-sm text-[#527661]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
                    <div className="font-mono">
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Discount</p>
                      <p className="text-sm font-bold">Disc 50%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white border border-black/10 p-2 rounded-full shadow-sm text-[#527661]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
                    <div className="font-mono">
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Package</p>
                      <p className="text-sm font-bold">Regular Package</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white border border-black/10 p-2 rounded-full shadow-sm text-[#527661]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                    <div className="font-mono">
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Delivery Time</p>
                      <p className="text-sm font-bold">3-4 Working Days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white border border-black/10 p-2 rounded-full shadow-sm text-[#527661]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
                    <div className="font-mono">
                      <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1">Estimation Arrive</p>
                      <p className="text-sm font-bold">10-12 Oct 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Size Chart Section */}
              <SizeChart />
            </div>

          </div>
        </div>

        {/* Rating & Reviews Section */}
        <div className="mt-22 pt-6 border-t border-black/10">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-tight">Rating & Reviews</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
            
            {/* Left side: Rating summary */}
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl md:text-8xl font-bold tracking-tighter">4,5</span>
                  <span className="text-2xl text-black/40 font-mono font-bold">/ 5</span>
                </div>
                <p className="text-black/50 mt-2 font-mono text-sm">(50 New Reviews)</p>
              </div>
              
              <div className="flex-1 w-full max-w-sm flex flex-col gap-3">
                {[
                  { star: 5, width: '100%' },
                  { star: 4, width: '15%' },
                  { star: 3, width: '0%' },
                  { star: 2, width: '0%' },
                  { star: 1, width: '0%' },
                ].map((item) => (
                  <div key={item.star} className="flex items-center gap-4">
                    <div className="flex items-center gap-2 w-12 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span className="font-bold font-mono text-sm">{item.star}</span>
                    </div>
                    <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div className="h-full bg-black rounded-full" style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Review Card */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-[32px] p-8 md:p-10 shadow-xl shadow-black/5 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Alex Mathio</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-black/40">13 Oct 2024</span>
                </div>
                <p className="text-black/70 leading-relaxed font-mono text-sm">
                  "NextGen's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion world."
                </p>
                <div className="mt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                    <Image src="/assets/tshirt1.jpg" fill className="object-cover" alt="Reviewer" sizes="48px" />
                  </div>
                </div>
              </div>
              
              {/* Review Carousel Navigation */}
              <div className="absolute top-1/2 -right-5 md:-right-6 -translate-y-1/2 w-12 h-12 bg-white border border-black/10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:border-black/20 transition-all z-10 hidden sm:flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-10 h-1.5 bg-black rounded-full"></div>
                <div className="w-2 h-1.5 bg-black/20 rounded-full"></div>
                <div className="w-2 h-1.5 bg-black/20 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>

        {/* You might also like Section */}
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-tight">You might also like</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[
              { title: 'Polo with Contrast Trims', price: '৳2,120', oldPrice: '৳2,420', discount: '-20%', rating: '4.0/5', image: '/assets/tshirt1.jpg' },
              { title: 'Gradient Graphic T-shirt', price: '৳1,450', oldPrice: null, discount: null, rating: '3.5/5', image: '/assets/tshirt2.jpg' },
              { title: 'Polo with Tipping Details', price: '৳1,800', oldPrice: null, discount: null, rating: '4.5/5', image: '/assets/tshirt3.jpg' },
              { title: 'Striped Jacket', price: '৳1,200', oldPrice: '৳1,600', discount: '-30%', rating: '5.0/5', image: '/assets/tshirt4.jpg' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[3/4] bg-white/50 rounded-[24px] overflow-hidden mb-6 shadow-sm border border-black/5">
                  <Image src={item.image} fill className="object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" alt={item.title} sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="font-bold text-sm mb-2 uppercase tracking-wide">{item.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star <= Math.floor(parseFloat(item.rating)) ? "#FBBF24" : "none"} stroke={star <= Math.floor(parseFloat(item.rating)) ? "#FBBF24" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-black/50 font-mono font-bold mt-0.5">{item.rating}</span>
                </div>
                
                <div className="flex items-center gap-3 font-mono">
                  <span className="font-bold text-[#527661]">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-xs text-black/30 line-through">{item.oldPrice}</span>
                  )}
                  {item.discount && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-md">{item.discount}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <FooterSection />
    </div>
  );
}
