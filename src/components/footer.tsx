import Link from "next/link";
import { Twitter, Github, Menu } from "lucide-react";

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
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-charcoal-500 hover:text-charcoal-700 transition-colors w-8 h-8 flex items-center justify-center rounded-border">
                <Menu className="w-4 h-4" />
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
