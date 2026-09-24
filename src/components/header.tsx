"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-charcoal-200 bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-charcoal-50 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
            </svg>
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
            className="text-charcoal-600 hover:text-charcoal-900"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {!isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/90 backdrop-blur-sm">
            <nav className="mt-16 space-y-6 px-4">
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
