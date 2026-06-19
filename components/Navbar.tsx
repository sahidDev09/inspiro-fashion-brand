import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-50 w-full px-8 py-6">
      <div className="flex justify-between items-center text-black/80 text-xs font-mono tracking-widest uppercase">
        <Link href="/" className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-black tracking-tighter text-black">
            inspiro
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-12 items-center">
          <Link href="#" className="hover:text-[#527661] transition-colors">Catalog ⇂</Link>
          <Link href="#" className="hover:text-[#527661] transition-colors">Men ⇂</Link>
          <Link href="#" className="hover:text-[#527661] transition-colors">Food ⇂</Link>
          <Link href="#" className="hover:text-[#527661] transition-colors">Catalog ⇂</Link>
          <Link href="#" className="hover:text-[#527661] transition-colors">Partners ⇂</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:text-[#527661] transition-colors p-2 bg-black/5 rounded backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="hover:text-[#527661] transition-colors p-2 bg-black/5 rounded backdrop-blur-sm relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#527661] text-white text-[8px] font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
