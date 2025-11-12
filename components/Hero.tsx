"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://www.worldcovers.org/_images/hero-4.jpg"
          alt="American Postal Markings"
          fill
          className="object-cover animate-scale-in"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent)]"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4 animate-fade-in-up">
              <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium animate-pulse-glow">
                U.S. Philatelic Classics Society
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              American Postal
              {/* <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent animate-shimmer">
                Markings Catalog
              </span> */}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Discover the rich history of American hand-stamped and manuscript town postmarks from the early 1700's through June 1, 1861.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-amber-600 hover:to-amber-700 animate-pulse-glow">
                Explore Catalog
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

