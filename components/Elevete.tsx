
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
        `}</style>
        <div className='w-full h-[90vh] bg-gray-900/20 flex items-center justify-center text-white text-9xl uppercase font-extrabold tracking-wide mx-auto text-center '>Elevate <br /> Beyond the <br /> ordinary. </div>
        
        {/* Floating Items */}
        <div className="absolute top-[15%] left-[15%] opacity-80 animate-float" style={{ animationDelay: '0s' }}>
            <Image src="/assets/floating_cap.png" width={180} height={180} alt="Floating Cap" className="rotate-[-15deg] drop-shadow-2xl" />
        </div>
        <div className="absolute top-[20%] right-[15%] opacity-80 animate-float" style={{ animationDelay: '1s' }}>
            <Image src="/assets/floating_tshirt.png" width={220} height={220} alt="Floating T-shirt" className="rotate-[10deg] drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-[15%] left-[20%] opacity-80 animate-float" style={{ animationDelay: '2s' }}>
            <Image src="/assets/floating_jacket.png" width={250} height={250} alt="Floating Jacket" className="rotate-[5deg] drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-[20%] right-[20%] opacity-80 animate-float" style={{ animationDelay: '1.5s' }}>
            <Image src="/assets/floating_sneaker.png" width={200} height={200} alt="Floating Sneaker" className="rotate-[-10deg] drop-shadow-2xl" />
        </div>

        <Image src="/assets/elevate.png" width={600} height={500} alt="Elevate Background" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />
        <div className='w-full h-[90vh] flex items-center justify-center text-transparent [-webkit-text-stroke:1px_white] text-9xl uppercase font-extrabold tracking-wide mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10'>Elevate <br /> Beyond the <br /> ordinary. </div>
    </main>
  )
}
