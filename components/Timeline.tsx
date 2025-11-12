"use client";

const timelineEvents = [
  {
    year: "1700s",
    title: "Early Colonial Period",
    description: "The beginning of American postal markings with hand-stamped and manuscript town postmarks",
    icon: "📜",
  },
  {
    year: "1800s",
    title: "Expansion Era",
    description: "Postal system expands across territories with standardized marking systems",
    icon: "🚂",
  },
  {
    year: "1850s",
    title: "Pre-Civil War",
    description: "Peak of unified postal system before the Civil War divides the nation",
    icon: "✉️",
  },
  {
    year: "1861",
    title: "Historical Cutoff",
    description: "June 1, 1861 marks the last day of a unified postal system",
    icon: "🏛️",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Historical <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Journey through the evolution of American postal markings
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hidden md:block"></div>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {event.icon}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        {event.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex animate-pulse-glow">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

