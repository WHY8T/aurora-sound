export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-charcoal-950 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-700 max-w-xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for inquiries, support, or just to share your listening experiences.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" required
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:border-charcoal-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:border-charcoal-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} required
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-500 focus:border-charcoal-500" />
                </div>
                <button type="submit"
                  className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-300 focus-visible:ring-offset-2">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="border border-charcoal-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Studio Location</h2>
                <p className="text-slate-600 mb-2">Aurora Sound Workshop</p>
                <p className="text-slate-600 mb-1">123 Audiofile Lane</p>
                <p className="text-slate-600 mb-1">Studio City, CA 91604</p>
                <p className="text-slate-600 mb-4">United States</p>
              </div>

              <div className="border border-charcoal-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Contact Information</h2>
                <p className="text-slate-600 mb-2">
                  <span className="text-charcoal-700 font-medium">Phone:</span> <a href="tel:+15551234567" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">+1 (555) 123-4567</a>
                </p>
                <p className="text-slate-600 mb-2">
                  <span className="text-charcoal-700 font-medium">Email:</span> <a href="mailto:info@aurorasound.com" className="text-charcoal-600 hover:text-charcoal-900 transition-colors">info@aurorasound.com</a>
                </p>
                <p className="text-slate-600 mb-2">
                  <span className="text-charcoal-700 font-medium">Hours:</span> <span className="text-charcoal-600">Mon-Fri: 9am-6pm PST</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}