import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#2C3843] text-white pt-24 pb-16 flex flex-col justify-center font-sans">
      
      {/* Layer 1: Background Image */}
      {/* Assuming a separate background image could be loaded here. Currently uses a gradient fallback/overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2f3d4a] to-[#1e2730]" />
        {/* Uncomment to use an actual background image */}
        {/* <Image src="/mountain_bg.png" alt="Background" fill className="object-cover opacity-30 mix-blend-overlay" /> */}
      </div>

      {/* Layer 2: Blurred Text Background behind subject */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none select-none flex justify-center items-center">
        {/* Website name with blur */}
        <h1 className="text-[28vw] font-black leading-none tracking-tighter text-white/10 blur-[16px] mix-blend-overlay">
          INSPIRO
        </h1>
      </div>

      {/* Layer 3: Main Subject Image */}
      {/* The subject image needs a transparent background to overlay correctly */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[85vh] md:w-[800px] xl:w-[1000px] z-20 pointer-events-none">
        <Image
          src="/assets/heromodel.png" 
          alt="Main Subject"
          fill
          className="object-contain object-bottom scale-[1.5] mt-20 drop-shadow-2xl"
          priority
        />
      </div>

      {/* Layer 4: Content/UI Overlay */}
      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 w-full relative z-30 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Left Side: Text and CTA */}
        <div className="lg:w-[40%] flex flex-col items-start mt-12 lg:mt-0 z-30">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold uppercase tracking-tight leading-[0.9] mb-16">
            COLLECTION<br/>
            SUMMER 02<sup className="text-2xl lg:text-4xl font-normal tracking-normal align-top top-[-0.5em] relative -ml-2">™</sup>
          </h2>

          <div className="space-y-6 text-sm lg:text-base font-medium tracking-wider uppercase mb-20 w-full max-w-md">
            <div className="flex items-center">
              <span className="text-white/60 w-24 text-xs tracking-widest">SIZE</span>
              <div className="flex space-x-6 text-white/80">
                <span className="cursor-pointer hover:text-white border-b-2 border-white pb-1 text-white">S</span>
                <span className="cursor-pointer hover:text-white">M</span>
                <span className="cursor-pointer hover:text-white">L</span>
                <span className="cursor-pointer hover:text-white">XL</span>
              </div>
            </div>
            
            <div className="flex items-center pt-2">
              <span className="text-white/60 w-24 text-xs tracking-widest">COLOR</span>
              <div className="flex space-x-6 text-white/80">
                <span className="cursor-pointer hover:text-white border-b-2 border-white pb-1 text-white">OLIVE</span>
                <span className="cursor-pointer hover:text-white">STEEL</span>
              </div>
            </div>
          </div>

          <div className="flex items-center group cursor-pointer mt-4">
            {/* Custom Polygon Button Icon */}
            <div className="h-20 w-20 flex items-center justify-center mr-6 relative transition-transform duration-300 group-hover:scale-105">
              <svg className="absolute inset-0 w-full h-full text-white/20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <polygon points="50,2 90,25 90,75 50,98 10,75 10,25" stroke="currentColor" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-45 relative z-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 uppercase tracking-[0.2em] mb-1">STARTS FROM —</span>
              <span className="text-3xl font-bold tracking-tight">৳499 BDT</span>
            </div>
          </div>
        </div>

        {/* Center: Empty Space for Subject to poke through */}
        <div className="lg:w-[20%] h-[40vh] lg:h-auto pointer-events-none"></div>

        {/* Right Side: Thumbnails */}
        <div className="lg:w-[40%] flex flex-col justify-end items-end h-full mt-16 lg:mt-0 z-30">
          <div className="flex space-x-6 mb-8">
            {/* Thumbnail 1 */}
            <div className="relative w-[160px] h-[200px] xl:w-[180px] xl:h-[220px] p-1 bg-white/10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
               <div className="relative w-full h-full bg-[#A8B5C2]" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                  <Image src="/grid_puffer.png" alt="Detail 1" fill className="object-cover object-top mix-blend-luminosity opacity-90" />
               </div>
            </div>
            {/* Thumbnail 2 */}
            <div className="relative w-[160px] h-[200px] xl:w-[180px] xl:h-[220px] p-1 bg-white/10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
               <div className="relative w-full h-full bg-[#1A2635]" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                  <Image src="/hero_puffer.png" alt="Detail 2" fill className="object-cover object-top mix-blend-luminosity opacity-90" />
               </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 w-[344px] xl:w-[384px] text-xs text-white/50 font-mono mt-2 pr-4 justify-between">
            <span className="tracking-widest">01</span>
            <div className="flex-grow h-px bg-white/20 mx-4"></div>
            <span className="tracking-widest">07</span>
          </div>
        </div>

      </div>
    </section>
  );
}
