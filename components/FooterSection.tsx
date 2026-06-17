import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="relative w-full h-[600px] overflow-hidden bg-[#2a3b4c] flex items-end">
      {/* Background Image */}
      <Image
        src="/mountain_bg.png"
        alt="Mountain background"
        fill
        sizes="100vw"
        className="object-cover object-bottom opacity-80"
      />
      
      {/* Top Smooth Edge Gradient */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a36] via-[#1e2a36]/50 to-transparent pointer-events-none"></div>

      {/* Giant Graffiti Text (Mimicking the STUSSY style logo) */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full text-center mix-blend-overlay opacity-60 pointer-events-none">
         <h2 className="text-[15vw] font-black italic tracking-tighter text-white">INSPIRO</h2>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 pb-12 flex flex-col md:flex-row justify-between items-end text-white">
        
        <div className="flex flex-col">
          <div className="text-[8px] font-mono text-white/50 tracking-widest uppercase mb-4 max-w-[200px]">
            INSPIRO WAS BORN IN THE MOUNTAINS, NOT AS A TREND, BUT AS A RESPONSE.
            <br/><br/>
            [ PHYSICAL ALTITUDE 5900_M ]
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
            Built for Cold<br/>
            Made for Height<br/>
            Forged to Last
          </h3>
        </div>

        <div className="hidden md:flex flex-col items-end text-[8px] font-mono text-white/50 tracking-widest uppercase text-right mt-8 md:mt-0">
          <span>FOR THOSE WHO</span>
          <span>CLIMB. NOT FOR</span>
          <span>THE CROWD</span>
          <div className="mt-4 flex space-x-1 opacity-50">
             {/* Fake barcode */}
             {[...Array(30)].map((_, i) => (
                <div key={i} className={`h-4 bg-white ${Math.random() > 0.5 ? 'w-0.5' : 'w-1'}`}></div>
             ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
