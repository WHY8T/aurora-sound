import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="mb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
            News & Updates
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Stay informed about our latest products, events, and audio insights
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
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                Introducing the Aurora Reference Series
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                January 15, 2026
              </p>
              <p className="text-slate-500 line-clamp-3">
                Our newest line of audio equipment combines decades of expertise with cutting-edge technology for unparalleled sound reproduction.
              </p>
              <Link href="/blog" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                Read More
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>

          <article className="border border-charcoal-100 rounded-lg overflow-hidden hover:border-charcoal-200 transition-colors">
            <div className="h-48 bg-charcoal-50">
              <svg className="w-full h-full text-charcoal-400" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                Workshop Open House: February 10-12
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Join us for listening sessions, factory tours, and Q&A with our engineers
              </p>
              <p className="text-slate-500 line-clamp-3">
                Experience our products in our critically listening environment and learn about our design philosophy firsthand.
              </p>
              <Link href="/blog" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                Learn More
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>

          <article className="border border-charcoal-100 rounded-lg overflow-hidden hover:border-charcoal-200 transition-colors">
            <div className="h-48 bg-charcoal-50">
              <svg className="w-full h-full text-charcoal-400" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                Customer Reviews: 5-Star Ratings
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                See what audiophiles and professionals are saying about Aurora Sound
              </p>
              <p className="text-slate-500 line-clamp-3">
                From studio engineers to home enthusiasts, discover how our products are transforming listening experiences worldwide.
              </p>
              <Link href="/blog" className="mt-4 inline-flex items-center text-charcoal-600 hover:text-charcoal-900 transition-colors text-sm">
                View Reviews
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}