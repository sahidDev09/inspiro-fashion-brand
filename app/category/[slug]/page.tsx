import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CategoryContent from '@/components/CategoryContent';
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
        {/* Breadcrumb + Title Section */}
        <section className="bg-gradient-to-br from-green-100/80 via-white to-green-50/60 border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 md:py-12">
            {/* Breadcrumb */}
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="text-black/20">/</span>
              <span className="text-black font-bold">{category.title}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-black">
              {category.title}
            </h1>
            <p className="text-sm text-black/50 font-mono mt-2 max-w-lg">
              {category.description}
            </p>
          </div>
        </section>

        {/* Main Content: Sidebar Filters + Product Grid */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <CategoryContent
              products={categoryProducts}
              categoryTitle={category.title}
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
