
import Image from 'next/image'


export default function Elevete() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes orbit {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes orbit-reverse {
            from { transform: translate(-50%, -50%) rotate(360deg); }
            to { transform: translate(-50%, -50%) rotate(0deg); }
          }
          .animate-orbit {
            animation: orbit 30s linear infinite;
          }
          .animate-orbit-slow {
            animation: orbit 45s linear infinite;
          }
          .animate-orbit-reverse {
            animation: orbit-reverse 40s linear infinite;
          }
        `}</style>
        
        {/* Orbit Backgrounds */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] border border-[#527661]/10 rounded-full animate-orbit-slow pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#527661]/30 rounded-full blur-[1px]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[750px] md:h-[750px] border border-[#527661]/20 rounded-full animate-orbit-reverse border-dashed pointer-events-none z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-[#527661]/40 rounded-full blur-[1px]"></div>
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#527661]/40 rounded-full blur-[1px]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-[#527661]/30 rounded-full animate-orbit pointer-events-none z-0">
          <div className="absolute top-[14%] right-[14%] translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#527661]/50 rounded-full"></div>
        </div>

        <div className='w-full h-[90vh] flex items-center justify-center text-[#527661] text-9xl uppercase font-extrabold tracking-wide mx-auto text-center relative z-0'>Elevate <br /> Beyond the <br /> ordinary. </div>
        
        {/* Floating Items */}
        <div className="absolute top-[15%] left-[15%] opacity-80 animate-float z-10" style={{ animationDelay: '0s' }}>
            <Image src="/assets/floating_cap.png" width={180} height={180} alt="Floating Cap" className="rotate-[-15deg] drop-shadow-2xl" />
        </div>
        <div className="absolute top-[20%] right-[15%] opacity-80 animate-float z-10" style={{ animationDelay: '1s' }}>
            <Image src="/assets/floating_tshirt.png" width={220} height={220} alt="Floating T-shirt" className="rotate-[10deg] drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-[15%] left-[20%] opacity-80 animate-float z-10" style={{ animationDelay: '2s' }}>
            <Image src="/assets/floating_jacket.png" width={250} height={250} alt="Floating Jacket" className="rotate-[5deg] drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-[20%] right-[20%] opacity-80 animate-float z-10" style={{ animationDelay: '1.5s' }}>
            <Image src="/assets/floating_sneaker.png" width={200} height={200} alt="Floating Sneaker" className="rotate-[-10deg] drop-shadow-2xl" />
        </div>

        <Image src="/assets/elevateMain.png" width={600} height={500} quality={100} unoptimized alt="Elevate Background" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 object-contain' />
        <div className='w-full h-[90vh] flex items-center justify-center text-transparent [-webkit-text-stroke:1px_#527661] text-9xl uppercase font-extrabold tracking-wide mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20'>Elevate <br /> Beyond the <br /> ordinary. </div>
    </main>
  )
}
