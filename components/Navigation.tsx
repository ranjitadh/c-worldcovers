"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                World Covers
              </span>
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Catalog</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Contact Us
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

