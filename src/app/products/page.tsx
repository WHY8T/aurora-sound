import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-charcoal-950 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-700 max-w-xl mx-auto leading-relaxed">
              Precision-engineered audio equipment for discerning listeners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Headphones */}
            <Link href="/products/headphones" className="block">
              <div className="flex flex-col items-center py-8 px-6 border border-charcoal-100 rounded-lg hover:border-charcoal-200 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Studio Reference Headphones</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Experience studio-grade accuracy with our open-back reference headphones, featuring 50mm drivers and hand-matched components.
                </p>
                <span className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors">
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Speakers */}
            <Link href="/products/speakers" className="block">
              <div className="flex flex-col items-center py-8 px-6 border border-charcoal-100 rounded-lg hover:border-charcoal-200 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Bookshelf Monitors</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Precision-engineered bookshelf speakers with silk dome tweeters and woven carbon fiber woofers for authentic sound reproduction.
                </p>
                <span className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors">
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Amplifier */}
            <Link href="/products/amplifier" className="block">
              <div className="flex flex-col items-center py-8 px-6 border border-charcoal-100 rounded-lg hover:border-charcoal-200 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Integrated Amplifier</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Pure Class A amplification with discrete components and zero-feedback design for transparent, dynamic sound.
                </p>
                <span className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors">
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}