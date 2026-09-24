import Link from "next/link";

export default function AmplifierPage() {
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
              Integrated Amplifier
            </h1>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="w-48 h-48 mb-8 flex items-center justify-center bg-charcoal-50 rounded-full">
                <svg className="w-24 h-24 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Pure Class A Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Discrete Components</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Zero-feedback Circuitry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-charcoal-600 rounded-full"></span>
                  <span className="text-charcoal-700 font-medium">Hand-wired Construction</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Power Output</h3>
                    <p className="font-mono text-charcoal-600">50W RMS per channel (8Ω)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Frequency Response</h3>
                    <p className="font-mono text-charcoal-600">5Hz - 50kHz (+0/-0.5dB)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">THD+N</h3>
                    <p className="font-mono text-charcoal-600">{'<0.001% (1kHz, 1W)'}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Input Sensitivity</h3>
                    <p className="font-mono text-charcoal-600">200mV for full output</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Signal-to-Noise Ratio</h3>
                    <p className="font-mono text-charcoal-600">105dB (A-weighted)</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">Damping Factor</h3>
                    <p className="font-mono text-charcoal-600">200</p>
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
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">The Art of Amplification</h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Our Integrated Amplifier represents the purest form of musical reproduction. Built with a zero-feedback, pure Class A discrete component design, this amplifier adds nothing to the signal and takes nothing away, allowing you to hear recordings exactly as the artists and engineers intended.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-3xl mt-4">
              Every component is hand-selected and matched for optimal performance, with point-to-point wiring that minimizes signal degradation. The massive power supply ensures dynamic headroom for even the most demanding musical passages, while the careful thermal design allows for hours of critical listening without compromise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}