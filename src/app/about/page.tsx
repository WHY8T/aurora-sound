export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-charcoal-950 mb-6">
              About Aurora Sound
            </h1>
            <p className="text-xl text-slate-700 max-w-xl mx-auto leading-relaxed">
              Crafting audio equipment that reveals the truth in every recording
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="h-64 w-full bg-charcoal-50 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-32 h-32 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4v2h4V12h4a4 4 0 000-8h-4zm0 12c-2.21 0-4 1.79-4 4v2h4v-2h4a4 4 0 000-8h-4z" />
                </svg>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Founded by audio engineers and musicians who refused to compromise on sound quality, Aurora Sound began in a small workshop with a simple mission: to create audio equipment that lets you hear recordings exactly as the artists intended.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Our Philosophy</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that audio equipment should be transparent—reproducing sound without adding coloration or distortion. Every design decision is made with this principle in mind, from material selection to circuit topology.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our engineers spend countless hours in critical listening sessions, refining each product until it meets our uncompromising standards for accuracy, transparency, and emotional connection to the music.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-charcoal-100">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-8">Handcrafted Excellence</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-8 h-8 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Precision Engineering</h3>
                <p className="text-slate-600">Tolerances measured in microns</p>
              </div>

              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-8 h-8 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Premium Materials</h3>
                <p className="text-slate-600">Aerospace aluminum, vegetable-tanned leather</p>
              </div>

              <div className="text-center py-6 px-4 border border-charcoal-100 rounded-lg">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-charcoal-50 rounded-full">
                  <svg className="w-8 h-8 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">Rigorous Testing</h3>
                <p className="text-slate-600">100+ hours of critical listening per model</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}