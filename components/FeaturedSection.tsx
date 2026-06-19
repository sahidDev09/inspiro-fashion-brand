import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedSection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Card 1: Tall */}
        <div className="lg:col-span-1 row-span-2 relative bg-[#f4f4f5] rounded-3xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/featured_woman_coat.png"
              alt="Woman in coat"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
            <Link 
              href="#"
              className="bg-white text-black px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform group-hover:-translate-y-1"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Card 2: Tall */}
        <div className="lg:col-span-1 row-span-2 relative bg-[#f4f4f5] rounded-3xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/featured_woman_black_hat.png"
              alt="Woman in black hat"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
            <Link 
              href="#"
              className="bg-white text-black px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform group-hover:-translate-y-1"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Card 3: Wide */}
        <div className="lg:col-span-2 row-span-1 bg-[#f4f4f5] rounded-3xl overflow-hidden group cursor-pointer flex items-center relative">
          <div className="w-1/2 p-8 md:p-12 z-20 relative">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">Woman Collection</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
              Stylish Winter T-Shirt<br/>for Woman
            </h3>
            <Link 
              href="#"
              className="inline-block bg-white text-black border border-gray-200 px-6 py-2.5 rounded-md font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              Check Now
            </Link>
          </div>
          <div className="w-1/2 h-full absolute right-0 top-0 z-10">
            <Image
              src="/assets/featured_woman_winter_tee.png"
              alt="Winter T-Shirt"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Card 4: Wide */}
        <div className="lg:col-span-2 row-span-1 bg-[#f4f4f5] rounded-3xl overflow-hidden group cursor-pointer flex items-center relative">
          <div className="w-1/2 p-8 md:p-12 z-20 relative">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">Men Collection</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
              Stylish Winter Shirt<br/>for Man
            </h3>
            <Link 
              href="#"
              className="inline-block bg-white text-black border border-gray-200 px-6 py-2.5 rounded-md font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              Check Now
            </Link>
          </div>
          <div className="w-1/2 h-full absolute right-0 top-0 z-10">
            <Image
              src="/assets/featured_man_winter_shirt.png"
              alt="Winter Shirt"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
