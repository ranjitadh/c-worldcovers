"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Postal Historian",
    content: "This database is an invaluable resource for researchers. The comprehensive collection and high-quality images make it essential for anyone studying American postal history.",
    avatar: "👩‍🔬",
  },
  {
    name: "Michael Chen",
    role: "Philatelist",
    content: "The search functionality is outstanding. I can find exactly what I need in seconds. The community contributions keep the database growing and improving.",
    avatar: "👨‍💼",
  },
  {
    name: "Emily Rodriguez",
    role: "Collector",
    content: "As a collector, having access to this catalog has transformed how I research and authenticate items. The detailed information is unmatched.",
    avatar: "👩‍🎨",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by researchers, collectors, and historians worldwide
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-200 h-full flex flex-col justify-center">
                  <div className="text-6xl mb-6 text-center">{testimonial.avatar}</div>
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-8 text-center leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-slate-800 text-lg">{testimonial.name}</div>
                    <div className="text-amber-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

