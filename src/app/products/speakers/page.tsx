import Link from "next/link";

export default function SpeakersPage() {
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
              Bookshelf Monitors
            </h1>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="w-48 h-48 mb-8 flex items-center justify-center bg-charcoal-50 rounded-full">
                <svg className="w-24 h-24 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Bookshelf Format</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Silk Dome Tweeters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Woven Carbon Fiber Woofers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Front-firing Port Design</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Frequency Response</h3>
                    <p className="font-mono text-charcoal-600">35Hz - 25kHz (±1.5dB)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Impedance</h3>
                    <p className="font-mono text-charcoal-600">8Ω</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Sensitivity</h3>
                    <p className="font-mono text-charcoal-600">89dB/W/m</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Power Handling</h3>
                    <p className="font-mono text-charcoal-600">100W Continuous</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Crossover Frequency</h3>
                    <p className="font-mono text-charcoal-600">2.8kHz</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Dimensions (WxHxD)</h3>
                    <p className="font-mono text-charcoal-600">20cm x 30cm x 25cm</p>
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Reference-Quality Sound</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Our Bookshelf Monitors bring studio-grade monitoring to your home listening environment. With silk dome tweeters for extended high-frequency response and woven carbon fiber woofers for tight, accurate bass, these speakers deliver a coherent, natural soundstage that honors the artist's intent.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-3xl mt-4">
              The front-firing port design allows for flexible placement near walls without compromising bass response, while the carefully engineered crossover ensures seamless integration between drivers. Whether used for critical listening, home theater, or as near-field monitors in a compact studio, these speakers reveal the truth in your recordings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}