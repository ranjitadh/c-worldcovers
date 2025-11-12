export default function GalleryView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer animate-scale-in"
          style={{ animationDelay: `${item * 0.1}s` }}
        >
          <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
            <svg className="w-16 h-16 text-slate-400 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 mb-1">Sample Postmark</h3>
          <p className="text-sm text-slate-600 mb-2">Town, State</p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Circle</span>
            <span>1850-1860</span>
          </div>
        </div>
      ))}
    </div>
  );
}

