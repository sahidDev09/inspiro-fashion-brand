import Image from 'next/image';

const products = [
  { id: 1, name: 'AURORA™', color: 'WHITE', price: '$1,999', image: '/hero_puffer.png' },
  { id: 2, name: 'GLACIER WHITE', color: 'GREY', price: '$1,299.99', image: '/grid_puffer.png' },
  { id: 3, name: 'POLAR GLOSS', color: 'BLUE GLOSS', price: '$899.99', image: '/grid_puffer.png' },
  { id: 4, name: 'STEALTH BLACK', color: 'NAVY BLUE', price: '$1,199.99', image: '/hero_puffer.png' },
  { id: 5, name: 'ICEFIELD BLUE', color: 'BLUE', price: '$999.99', image: '/grid_puffer.png' },
  { id: 6, name: 'ARCTIC SALMON', color: 'FRESH CATCH', price: '$34.99', image: '/category_fish.png' },
  { id: 7, name: 'SOURDOUGH LOAF', color: 'ARTISANAL', price: '$12.00', image: '/category_bread.png' },
  { id: 8, name: 'GOURMET PLATING', color: 'FINE DINING', price: '$45.00', image: '/category_food.png' },
  { id: 9, name: 'POLAR WHITE', color: 'WHITE', price: '$2,499.99', image: '/grid_puffer.png' },
  { id: 10, name: 'REFLECTIVE PUFFER', color: 'SILVER', price: '$999.99', image: '/hero_puffer.png' },
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
              <span>[ SERIES 03 ]</span>
              <span>[ WINTER ]</span>
            </div>
            <div className="hidden lg:flex flex-col text-[8px] font-mono text-white/50 tracking-widest uppercase">
              <span>PUFFER JACKETS</span>
              <span>HEAVY WINTER</span>
              <span>EXTREME COLD GEAR</span>
            </div>
          </div>
          <button className="text-[10px] font-mono tracking-widest uppercase text-white/80 border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
            Filters
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[3/4] mb-4 bg-white/5 border border-white/10 p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col space-y-1 text-white">
                <h3 className="text-[11px] font-bold tracking-widest uppercase">{product.name}</h3>
                <span className="text-[9px] text-white/60 tracking-wider uppercase font-mono">{product.color}</span>
                <span className="text-[10px] text-white/40 tracking-widest font-mono mt-1">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
