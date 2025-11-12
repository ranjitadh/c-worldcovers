"use client";

import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { value: 50000, label: "Postal Markings", icon: "📮" },
  { value: 50, label: "States & Territories", icon: "🗺️" },
  { value: 150, label: "Years of History", icon: "📅" },
  { value: 10000, label: "Contributors", icon: "👥" },
];

export default function Statistics() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("statistics");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [counted]);

  return (
    <section id="statistics" className="py-20 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Explore Our <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the largest database of American postal markings
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} counted={counted} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, counted, delay }: { stat: StatItem; counted: boolean; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!counted) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setDisplayValue(stat.value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [counted, stat.value]);

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200 group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
        {displayValue.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-slate-600 font-medium">{stat.label}</div>
    </div>
  );
}

