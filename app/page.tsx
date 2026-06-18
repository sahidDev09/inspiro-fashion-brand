import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';
import FooterSection from '@/components/FooterSection';
import Elevete from '@/components/Elevete';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] selection:bg-white selection:text-[var(--background)]">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ProductList />
        <Elevete/>
      </main>

      <FooterSection />
    </div>
  );
}
