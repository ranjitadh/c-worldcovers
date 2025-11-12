export default function ListView() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="flex items-center space-x-6 p-4 bg-slate-50 rounded-lg hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all duration-300 cursor-pointer transform hover:translate-x-2 animate-slide-in-left"
          style={{ animationDelay: `${item * 0.1}s` }}
        >
          <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 mb-1">Sample Postmark {item}</h3>
            <p className="text-sm text-slate-600">Town Name, State Name</p>
            <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
              <span>Type: Circle</span>
              <span>•</span>
              <span>Date: 1850-1860</span>
              <span>•</span>
              <span>Color: Black</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

