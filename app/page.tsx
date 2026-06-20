import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';
import FooterSection from '@/components/FooterSection';
import Elevete from '@/components/Elevete';
import FeaturedSection from '@/components/FeaturedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <ProductList />
        <Elevete/>
      </main>

      <FooterSection />
    </div>
  );
}
