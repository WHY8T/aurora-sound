import Link from "next/link";

export default function HeadphonesPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link href="/products" className="inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors mb-6">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Products
            </Link>
            <h1 className="text-4xl font-bold text-charcoal-950 mb-6">
              Studio Reference Headphones
            </h1>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="w-48 h-48 mb-8 flex items-center justify-center bg-charcoal-50 rounded-full">
                <svg className="w-24 h-24 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Open-back Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">50mm Drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Hand-matched Components</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Vegetable-tanned Leather Pads</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Frequency Response</h3>
                    <p className="font-mono text-charcoal-600">5Hz - 40kHz (±0.5dB)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Impedance</h3>
                    <p className="font-mono text-charcoal-600">300Ω</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Sensitivity</h3>
                    <p className="font-mono text-charcoal-600">102dB/mW</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">THD+N</h3>
                    <p className="font-mono text-charcoal-600">{'<0.001% (1kHz, 1V RMS)'}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Cable Length</h3>
                    <p className="font-mono text-charcoal-600">3m Oxygen-free Copper</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Weight</h3>
                    <p className="font-mono text-charcoal-600">320g</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-300 focus-visible:ring-offset-2">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-charcoal-100">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Listening Experience</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Our Studio Reference Headphones are designed for critical listening environments where accuracy is paramount. The open-back design creates a spacious soundstage that allows you to hear instruments and vocals with precise positioning, while the hand-matched drivers ensure perfect channel balance.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-3xl mt-4">
              Whether you're mixing in a professional studio, mastering your latest work, or simply enjoying your favorite albums at home, these headphones reveal details in recordings you've never noticed before—not through artificial enhancement, but through meticulous engineering that removes everything that obscures the truth of the recording.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}