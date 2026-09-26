"use client";

import Link from "next/link";
import { useState } from "react";
import { Speaker, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-charcoal-200 bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-charcoal-50 rounded-xl flex items-center justify-center">
            <Speaker className="w-6 h-6 text-charcoal-600" />
          </div>
          <span className="text-xl font-bold text-charcoal-900">Aurora Sound</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium">
            Home
          </Link>
          <Link href="/products" className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium">
            Products
          </Link>
          <Link href="/about" className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? 'z-[51]' : ''} text-charcoal-600 hover:text-charcoal-900`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <nav className="mt-16 space-y-6 px-4" onClick={(e) => e.stopPropagation()}>
              <Link href="/" className="block text-xl font-bold text-charcoal-900">
                Home
              </Link>
              <Link href="/products" className="block text-xl font-bold text-charcoal-900">
                Products
              </Link>
              <Link href="/about" className="block text-xl font-bold text-charcoal-900">
                About
              </Link>
              <Link href="/contact" className="block text-xl font-bold text-charcoal-900">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
