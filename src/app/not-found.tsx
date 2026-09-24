export default function NotFound() {
  return (
    <main className="flex-1 flex-col items-center justify-center py-20">
      <div className="text-center">
        <svg className="w-24 h-24 mb-6 text-charcoal-400" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9,4A5,5 0 0,1 14,9H16A3,3 0 0,1 19,12V20A3,3 0 0,1 16,23H8A3,3 0 0,1 5,20V12A3,3 0 0,1 8,9H10A5,5 0 0,1 15,4H15.5L13,1.5L10.5,4H9Z" />
        </svg>
        <h1 className="text-4xl font-bold text-charcoal-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-6">
          We couldn't find the page you're looking for.
        </p>
        <a href="/" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-300 focus-visible:ring-offset-2">
          Return to Homepage
        </a>
      </div>
    </main>
  );
}