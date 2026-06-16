"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  
  // 7 cards with dynamic properties
  const cards = [
    { id: 1, src: '/assets/heromodel.png', bg: '#1A2635', colorName: 'NAVY', title: 'NIGHTFALL' },
    { id: 2, src: '/assets/heromodel.png', bg: '#A8B5C2', colorName: 'GRAY', title: 'SUMMER 02' },
    { id: 3, src: '/assets/heromodel.png', bg: '#8CA4B7', colorName: 'STEEL', title: 'STORM' },
    { id: 4, src: '/assets/heromodel.png', bg: '#203144', colorName: 'DEEP BLUE', title: 'OCEAN' },
    { id: 5, src: '/assets/heromodel.png', bg: '#5D707F', colorName: 'SLATE', title: 'URBAN' },
    { id: 6, src: '/assets/heromodel.png', bg: '#151D28', colorName: 'BLACK', title: 'MIDNIGHT' },
    { id: 7, src: '/assets/heromodel.png', bg: '#C5D0D8', colorName: 'SILVER', title: 'FROST' },
  ];

  const totalSlides = cards.length;
  const activeCard = cards[currentSlide];
  const previousCard = cards[prevSlide];

  const maskRef = useRef<HTMLDivElement>(null);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => changeSlide((currentSlide + 1) % totalSlides);
  const prevSlideBtn = () => changeSlide((currentSlide - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    if (maskRef.current) {
      // GSAP mask distortion animation: a slanted sweep from left to right
      gsap.fromTo(maskRef.current,
        { clipPath: "polygon(0 0, 0 0, -20% 100%, 0 100%)" },
        { 
          clipPath: "polygon(0 0, 120% 0, 100% 100%, 0 100%)", 
          duration: 1.2, 
          ease: "power4.inOut" 
        }
      );
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white pt-24 pb-16 flex flex-col justify-center font-sans">
      
      {/* Layer 1: GSAP Background Masking */}
      {/* Base background (previous slide) */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: previousCard.bg }} 
      />
      {/* Animated mask background (current slide) */}
      <div 
        ref={maskRef}
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: activeCard.bg, clipPath: "polygon(0 0, 120% 0, 100% 100%, 0 100%)" }} 
      />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      {/* Layer 1.25: Mountain Background Image from Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/mountain_bg.png" 
          alt="Mountain background" 
          fill 
          className="object-cover opacity-10 blur-[2px] mix-blend-overlay"
        />
      </div>

      {/* Layer 1.5: Spotlight Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '4vw 4vw',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 100%)'
        }}
      />

      {/* Layer 2: Blurred Text Background behind subject */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full text-center z-10 pointer-events-none select-none flex justify-center items-center">
        <h1 className="text-[28vw] font-black leading-none tracking-tighter text-white/10 blur-[1px] mix-blend-overlay">
          INSPIRO
        </h1>
      </div>

      {/* Layer 3: Main Subject Image (STATIC, no animations per user request) */}
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
          <AnimatePresence mode="wait">
            <motion.h2 
              key={activeCard.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold uppercase tracking-tight leading-[0.9] mb-16"
            >
              COLLECTION<br/>
              {activeCard.title}<sup className="text-2xl lg:text-4xl font-normal tracking-normal align-top top-[-0.5em] relative -ml-2">™</sup>
            </motion.h2>
          </AnimatePresence>

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
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={activeCard.colorName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="cursor-pointer border-b-2 border-white pb-1 text-white"
                  >
                    {activeCard.colorName}
                  </motion.span>
                </AnimatePresence>
                <span className="cursor-pointer hover:text-white text-white/50 pl-4" onClick={nextSlide}>NEXT &gt;</span>
              </div>
            </div>
          </div>

          <div className="flex items-center group cursor-pointer mt-4">
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
        <div className="lg:w-[40%] flex flex-col justify-end items-end h-full mt-16 lg:mt-0 z-30 overflow-hidden lg:overflow-visible">
          
          <div className="w-[344px] xl:w-[384px] overflow-hidden mb-8 mask-image-fade">
            <motion.div 
              className="flex space-x-6"
              animate={{ x: -(currentSlide * (160 + 24)) }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {cards.map((card, index) => (
                <div 
                  key={card.id} 
                  onClick={() => changeSlide(index)}
                  className={`flex-shrink-0 relative w-[160px] h-[200px] xl:w-[180px] xl:h-[220px] p-1 cursor-pointer transition-transform duration-300 ${currentSlide === index ? 'bg-white/40 scale-105' : 'bg-white/10 hover:bg-white/20'}`} 
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}
                >
                   <div className="relative w-full h-full" style={{ backgroundColor: card.bg, clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                      <Image src={card.src} alt={`Detail ${card.id}`} fill className="object-cover object-top mix-blend-luminosity opacity-90" />
                   </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-4 w-[344px] xl:w-[384px] text-xs text-white/50 font-mono mt-2 pr-4 justify-between select-none">
            <button onClick={prevSlideBtn} className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white/10 hover:text-white transition-colors cursor-pointer z-40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="tracking-widest">0{currentSlide + 1}</span>
            <div className="flex-grow h-px bg-white/20 mx-4"></div>
            <span className="tracking-widest">07</span>
            <button onClick={nextSlide} className="w-8 h-8 flex items-center justify-center border border-white/20 hover:bg-white/10 hover:text-white transition-colors cursor-pointer z-40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
