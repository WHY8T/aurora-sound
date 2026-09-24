export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-charcoal-950 mb-6">
              Audio Insights
            </h1>
            <p className="text-xl text-slate-700 max-w-xl mx-auto leading-relaxed">
              Articles, reviews, and technical deep-dives from our team of audio engineers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="border border-charcoal-100 rounded-lg overflow-hidden hover:border-charcoal-200 transition-colors">
              <div className="h-48 bg-charcoal-50">
                <svg className="w-full h-full text-charcoal-400" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium bg-charcoal-50 text-charcoal-800 rounded-full">
                  Company News
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                  Aurora Sound Expands Workshop Facility
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  January 5, 2026
                </p>
                <p className="text-slate-500 line-clamp-3">
                  Our new 10,000 sq ft facility features state-of-the-art testing equipment and expanded listening rooms for critical evaluation.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                  Read Article
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="border border-charcoal-100 rounded-lg overflow-hidden hover:border-charcoal-200 transition-colors">
              <div className="h-48 bg-charcoal-50">
                <svg className="w-full h-full text-charcoal-400" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium bg-charcoal-50 text-charcoal-800 rounded-full">
                  Technical
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                  Understanding THD+N in Audio Equipment
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  February 1, 2026
                </p>
                <p className="text-slate-500 line-clamp-3">
                  Total Harmonic Distortion plus Noise (THD+N) is a critical specification for evaluating audio purity. Here's what it means for your listening experience.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                  Read Article
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="border border-charcoal-100 rounded-lg overflow-hidden hover:border-charcoal-200 transition-colors">
              <div className="h-48 bg-charcoal-50">
                <svg className="w-full h-full text-charcoal-400" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium bg-charcoal-50 text-charcoal-800 rounded-full">
                  Product Review
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                  Reference Headphones: Studio Session Report
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  February 15, 2026
                </p>
                <p className="text-slate-500 line-clamp-3">
                  Grammy-winning engineer Sarah Chen shares her experience using our Studio Reference Headphones in a recent classical recording session.
                </p>
                <a href="#" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                  Read Article
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}