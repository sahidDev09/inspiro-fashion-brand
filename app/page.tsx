import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';
import FooterSection from '@/components/FooterSection';
import Elevete from '@/components/Elevete';
import FeaturedSection from '@/components/FeaturedSection';
import CustomerReviews from '@/components/CustomerReviews';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <ProductList />
        <Elevete/>
        <CustomerReviews />
        <NewsletterSection />
      </main>

      <FooterSection />
    </div>
  );
}
