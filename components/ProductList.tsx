import Image from 'next/image';

const products = [
  { id: 1, name: 'ESSENTIAL T-SHIRT', color: 'WHITE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt1.jpg' },
  { id: 2, name: 'OVERSIZED TEE', color: 'WASHED BLACK', price: '৳1,890', originalPrice: '৳2,290', discount: '18%', image: '/assets/tshirt2.jpg' },
  { id: 3, name: 'GRAPHIC PRINT', color: 'VINTAGE GREY', price: '৳2,190', originalPrice: '৳2,690', discount: '18%', image: '/assets/tshirt3.jpg' },
  { id: 4, name: 'CLASSIC CREWNECK', color: 'NAVY BLUE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt4.jpg' },
  { id: 5, name: 'HEAVYWEIGHT TEE', color: 'FOREST GREEN', price: '৳2,490', originalPrice: '৳2,990', discount: '16%', image: '/assets/tshirt5.jpg' },
];

export default function ProductList() {
  return (
    <section className="py-24 bg-[var(--background)] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div className="flex items-center space-x-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white">NEW COLLECTION</h2>
            <div className="hidden md:flex flex-col text-[8px] font-mono text-white/50 tracking-widest uppercase">
              <span>[ NEW COLLECTION ]</span>
              <span>[ SERIES 04 ]</span>
              <span>[ SUMMER ]</span>
            </div>
            <div className="hidden lg:flex flex-col text-[8px] font-mono text-white/50 tracking-widest uppercase">
              <span>PREMIUM T-SHIRTS</span>
              <span>EVERYDAY WEAR</span>
              <span>SUMMER ESSENTIALS</span>
            </div>
          </div>
          <button className="text-[10px] font-mono tracking-widest uppercase text-white/80 border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
            Filters
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
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
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-90 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  />
                  {product.discount && (
                    <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1.5 tracking-widest z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
                      {product.discount} OFF
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col text-white mt-3 h-full">
                <h3 className="text-xs font-bold tracking-widest uppercase mb-1">{product.name}</h3>
                <span className="text-[10px] text-white/60 tracking-wider uppercase font-mono">{product.color}</span>
                <div className="flex items-baseline space-x-3 pt-3 mt-3 border-t border-white/10">
                  <span className="text-base text-white font-bold tracking-wider font-mono">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-white/40 line-through tracking-widest font-mono">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
