import Link from "next/link";
import NewsSection from "@/components/news";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl font-bold text-charcoal-950 mb-6 max-w-2xl mx-auto">
              Aurora Sound
            </h1>
            <p className="text-xl text-slate-700 max-w-xl mx-auto leading-relaxed">
              Handcrafted precision audio equipment for those who hear the difference
            </p>
          </div>

          {/* Product Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
            {/* Headphones */}
            <Link href="/products/headphones" className="block">
              <div className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200 hover:border-charcoal-300 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Studio Reference Headphones</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Experience studio-grade accuracy with our open-back reference headphones, featuring 50mm drivers and hand-matched components.
                </p>
              </div>
            </Link>

            {/* Speakers */}
            <Link href="/products/speakers" className="block">
              <div className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200 hover:border-charcoal-300 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Bookshelf Monitors</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Precision-engineered bookshelf speakers with silk dome tweeters and woven carbon fiber woofers for authentic sound reproduction.
                </p>
              </div>
            </Link>

            {/* Amplifier */}
            <Link href="/products/amplifier" className="block">
              <div className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200 hover:border-charcoal-300 transition-colors">
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-12 h-12 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Integrated Amplifier</h2>
                <p className="text-slate-600 text-center max-w-md">
                  Pure Class A amplification with discrete components and zero-feedback design for transparent, dynamic sound.
                </p>
              </div>
            </Link>
          </div>

          {/* Features Section */}
          <section className="mb-24">
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                    Crafted for Critical Listening
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Every Aurora Sound product begins with meticulous material selection—from aerospace-grade aluminum housings to vegetable-tanned leather ear pads. We believe that exceptional sound starts with exceptional construction.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our engineers spend hundreds of hours in critical listening sessions, refining each design until it meets our uncompromising standards for accuracy, transparency, and emotional connection.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="w-60 h-60 bg-charcoal-50 rounded-xl flex items-center justify-center">
                    <svg className="w-32 h-32 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4v2h4V12h4a4 4 0 000-8h-4zm0 12c-2.21 0-4 1.79-4 4v2h4v-2h4a4 4 0 000-8h-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="hidden lg:block">
                  <div className="w-60 h-60 bg-charcoal-50 rounded-xl flex items-center justify-center">
                    <svg className="w-32 h-32 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-6-9-6v7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                    The Pursuit of Sonic Truth
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We reject the notion that audio equipment should "color" the sound. Instead, our designs strive for absolute fidelity—reproducing recordings exactly as the artists and engineers intended, with nothing added and nothing taken away.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    This commitment to transparency means you'll hear details in your favorite recordings you've never noticed before—not because we've emphasized them, but because we've removed everything that obscures them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* News & Updates */}
          <NewsSection />

          {/* Specifications Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
                Technical Excellence
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Reference specifications that define our commitment to uncompromising performance
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Frequency Response</h3>
                <p className="font-mono text-charcoal-600">5Hz - 40kHz (±0.5dB)</p>
              </div>
              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">THD+N</h3>
                <p className="font-mono text-charcoal-600">{'<0.001% (1kHz, 1V RMS)'}</p>
              </div>
              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Impedance</h3>
                <p className="font-mono text-charcoal-600">300Ω (headphones), 8Ω (speakers)</p>
              </div>
              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Sensitivity</h3>
                <p className="font-mono text-charcoal-600">102dB/mW (headphones), 89dB/W/m (speakers)</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-20 bg-charcoal-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Experience the Difference
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Discover why discerning listeners and recording professionals choose Aurora Sound for their most critical listening sessions.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/products" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-300 focus-visible:ring-offset-2">
                  Shop Collection
                </Link>
                <a href="#" className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-charcoal-300 bg-white font-medium text-charcoal-900 hover:bg-charcoal-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-300 focus-visible:ring-offset-2">
                  Request Catalog
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}