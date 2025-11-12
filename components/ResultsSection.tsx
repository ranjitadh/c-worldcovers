import GalleryView from "./GalleryView";
import ListView from "./ListView";

interface ResultsSectionProps {
  viewMode: "list" | "gallery";
}

export default function ResultsSection({ viewMode }: ResultsSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Search Results</h2>
        <div className="text-sm text-slate-600">
          Showing <span className="font-semibold">0</span> results
        </div>
      </div>
      {viewMode === "gallery" ? <GalleryView /> : <ListView />}
    </div>
  );
}

