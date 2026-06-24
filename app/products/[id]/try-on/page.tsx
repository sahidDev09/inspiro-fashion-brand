import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';
import TryOnInterface from './TryOnInterface';
import { notFound } from 'next/navigation';

const products = [
  { id: 1, name: 'ESSENTIAL T-SHIRT', color: 'WHITE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt1.jpg' },
  { id: 2, name: 'OVERSIZED TEE', color: 'WASHED BLACK', price: '৳1,890', originalPrice: '৳2,290', discount: '18%', image: '/assets/tshirt2.jpg' },
  { id: 3, name: 'GRAPHIC PRINT', color: 'VINTAGE GREY', price: '৳2,190', originalPrice: '৳2,690', discount: '18%', image: '/assets/tshirt3.jpg' },
  { id: 4, name: 'CLASSIC CREWNECK', color: 'NAVY BLUE', price: '৳1,490', originalPrice: '৳1,990', discount: '25%', image: '/assets/tshirt4.jpg' },
  { id: 5, name: 'HEAVYWEIGHT TEE', color: 'FOREST GREEN', price: '৳2,490', originalPrice: '৳2,990', discount: '16%', image: '/assets/tshirt5.jpg' },
];

export default async function TryOnPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-10 md:mt-24">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto text-sm text-black/50 mb-6 flex items-center gap-2 font-mono uppercase tracking-widest text-[9px]">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-1.5">
            Home
          </Link>
          <span className="text-black/20">•</span>
          <Link href={`/products/${product.id}`} className="hover:text-black transition-colors">
            {product.name}
          </Link>
          <span className="text-black/20">•</span>
          <span className="text-black font-bold">Virtual Try-On</span>
        </div>

        <TryOnInterface initialProduct={product} allProducts={products} />

      </main>

      <FooterSection />
    </div>
  );
}
