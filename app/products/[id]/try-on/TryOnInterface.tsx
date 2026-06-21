"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  color: string;
  price: string;
  image: string;
}

interface TryOnInterfaceProps {
  initialProduct: Product;
  allProducts: Product[];
}

export default function TryOnInterface({ initialProduct }: TryOnInterfaceProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProduct);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  
  const [generateType, setGenerateType] = useState<string>('Upper Body');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
        setResultUrl(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const handleTryOn = () => {
    if (!previewUrl) return;
    setIsProcessing(true);
    setResultUrl(null);
    setTimeout(() => {
      setIsProcessing(false);
      setResultUrl(previewUrl);
    }, 2500);
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `try-on-${selectedProduct.name.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-white rounded-[32px] shadow-2xl shadow-black/5 border border-black/5 overflow-hidden flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto min-h-[600px]">
      
      {/* Panel 1: Product & Options */}
      <div className="w-full lg:w-[25%] p-6 lg:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-black/5">
        <h2 className="font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#527661]/10 text-[#527661] flex items-center justify-center text-[10px]">1</span>
          Product
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 border border-black/5 shadow-sm">
            <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" />
          </div>
          
        </div>

        <div className="mt-8 flex-grow">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3">Generate Type</h3>
          <div className="flex flex-col gap-2">
            {['Upper Body', 'Lower Body', 'Full Body'].map((type) => (
              <button 
                key={type}
                onClick={() => setGenerateType(type)}
                className={`w-full py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest text-left transition-all border ${
                  generateType === type 
                    ? 'border-[#527661] bg-[#527661]/10 text-[#527661]' 
                    : 'border-transparent bg-black/5 text-black/60 hover:bg-black/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  {type}
                  {generateType === type && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Panel 2: Photo Upload */}
      <div className="w-full lg:w-[35%] p-6 lg:p-8 flex flex-col bg-[#fafafa] border-b lg:border-b-0 lg:border-r border-black/5">
        <h2 className="font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#527661]/10 text-[#527661] flex items-center justify-center text-[10px]">2</span>
          Upload Photo
        </h2>
        <div className="flex-grow flex flex-col items-center justify-center h-full">
          <div 
            className={`w-full h-full min-h-[300px] border-2 border-dashed rounded-[20px] flex flex-col items-center justify-center p-6 text-center transition-all duration-300 relative overflow-hidden group ${
              isDragging ? 'border-[#527661] bg-[#527661]/10 scale-[1.02]' : 'border-black/10 bg-white hover:border-[#527661]/30'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {previewUrl ? (
              <>
                <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                  >
                    Change Photo
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 mb-3 text-black/20 group-hover:text-[#527661] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
                <p className="font-bold text-xs uppercase tracking-widest mb-1">Drag & Drop</p>
                <p className="text-[10px] text-black/40 font-mono mb-4">Click to browse files</p>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#527661] transition-colors"
                >
                  Browse
                </button>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </div>

      {/* Panel 3: Result */}
      <div className="w-full lg:w-[40%] p-6 lg:p-8 flex flex-col bg-white text-black relative overflow-hidden border-l border-black/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#527661] rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2 relative z-10">
          <span className="w-6 h-6 rounded-full bg-[#527661]/10 text-[#527661] flex items-center justify-center text-[10px]">3</span>
          Result
        </h2>

        <div className="flex-grow flex flex-col relative z-10">
          <div className="w-full flex-grow bg-[#fafafa] border border-black/5 rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center min-h-[300px]">
            {!previewUrl ? (
              <div className="px-6 text-center">
                <p className="text-black/40 font-mono text-[10px] uppercase tracking-widest">Awaiting Photo...</p>
              </div>
            ) : isProcessing ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-2 border-black/10 border-t-[#527661] rounded-full animate-spin"></div>
                <p className="text-[10px] uppercase tracking-widest font-mono text-black/50 animate-pulse">Processing {generateType}</p>
              </div>
            ) : resultUrl ? (
              <>
                <Image src={resultUrl} alt="Try-On Result" fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-mono border border-black/10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527661] animate-pulse"></span>
                  Ready
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-6">
                <div className="flex -space-x-3">
                  <div className="w-16 h-20 rounded-lg overflow-hidden relative border border-black/10 z-10 bg-white shadow-xl">
                    <Image src={selectedProduct.image} alt="Product" fill className="object-cover" />
                  </div>
                  <div className="w-16 h-20 rounded-lg overflow-hidden relative border border-black/10 z-0 opacity-50 shadow-xl">
                    <Image src={previewUrl} alt="You" fill className="object-cover" />
                  </div>
                </div>
                <p className="text-[10px] text-black/50 font-mono text-center">Ready to generate <br/><span className="text-[#527661] font-bold">{generateType}</span> try-on</p>
              </div>
            )}
          </div>

          <div className="mt-6">
            {!resultUrl ? (
              <button 
                onClick={handleTryOn}
                disabled={!previewUrl || isProcessing}
                className={`w-full py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                  !previewUrl 
                    ? 'bg-black/5 text-black/30 cursor-not-allowed border border-transparent' 
                    : isProcessing
                    ? 'bg-[#527661]/10 text-[#527661] cursor-wait border border-transparent'
                    : 'bg-[#527661] text-white hover:bg-[#527661]/90 shadow-[0_0_15px_rgba(82,118,97,0.3)]'
                }`}
              >
                {isProcessing ? `Processing ${generateType}...` : `Generate ${generateType}`}
              </button>
            ) : (
              <div className="flex gap-2">
                <button 
                  onClick={handleTryOn}
                  className="flex-1 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-black/10 hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
                >
                  Regenerate
                </button>
                <button 
                  onClick={handleDownload}
                  className="flex-[1.5] py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black text-white hover:bg-black/80 transition-colors shadow-xl flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
