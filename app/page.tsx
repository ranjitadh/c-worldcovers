"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import SearchSection from "@/components/SearchSection";
import ResultsSection from "@/components/ResultsSection";
import InfoCards from "@/components/InfoCards";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedState, setSelectedState] = useState("All States");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "gallery">("gallery");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100">
      <Navigation />
      <Hero />
      <Statistics />
      <Features />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchSection
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <ResultsSection viewMode={viewMode} />
        <InfoCards />
        </div>
      <Timeline />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
