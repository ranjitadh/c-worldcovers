export default function InfoCards() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left">
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">About the Catalog</h3>
        <p className="text-slate-700 leading-relaxed">
          This online database builds upon the American Stampless Cover Catalog, providing a comprehensive resource for philatelists and postal historians listing postal markings from settlement until the Civil War.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-in-right">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Contribute</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Help expand the database by submitting unlisted markings, adding images, or reporting corrections. All submissions are reviewed by state administrators.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
          Submit a Marking
        </button>
      </div>
    </div>
  );
}

