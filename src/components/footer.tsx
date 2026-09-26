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
              {/* X (Twitter) */}
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
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
