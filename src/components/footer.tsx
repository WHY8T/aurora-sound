import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-charcoal-900 font-bold mb-4">Aurora Sound</h3>
            <p className="text-slate-600">
              Handcrafted precision audio equipment for those who hear the difference.
            </p>
          </div>

          <div>
            <h4 className="text-charcoal-900 font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/headphones" className="text-slate-600 hover:text-charcoal-900 transition-colors">Headphones</Link></li>
              <li><Link href="/products/speakers" className="text-slate-600 hover:text-charcoal-900 transition-colors">Speakers</Link></li>
              <li><Link href="/products/amplifier" className="text-slate-600 hover:text-charcoal-900 transition-colors">Amplifiers</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-600 hover:text-charcoal-900 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-charcoal-900 transition-colors">Blog</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal-900 font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-slate-600 hover:text-charcoal-900 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">Manuals</a></li>
              <li><a href="#" className="text-slate-600 hover:text-charcoal-900 transition-colors">Returns</a></li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14l3-3 3 3M8 10l3 3 3-3" />
                </svg>
              </a>
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-100 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Aurora Sound. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
