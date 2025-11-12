export default function CTA() {
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("${patternUrl}")` }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Explore History?
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of researchers and collectors discovering American postal history
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button className="px-10 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:bg-amber-50">
              Start Exploring
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

