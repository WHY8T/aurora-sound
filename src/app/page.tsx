"use client";

import Link from "next/link";
import NewsSection from "@/components/news";
import Hero3D from "@/components/hero3d";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with 3D Parallax */}
      <section className="relative h-[100vh] overflow-hidden">
        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-white mb-6 max-w-2xl mx-auto"
          >
            Aurora Sound
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/90 max-w-xl mx-auto leading-relaxed"
          >
            Handcrafted precision audio equipment for those who hear the difference
          </motion.p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {/* Headphones */}
            <Link href="/products/headphones" className="block group">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200/50 hover:border-charcoal-300/70 transition-colors duration-300"
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50/20 rounded-full">
                  <svg className="w-12 h-12 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l-2 2m2-2l2 2M9 16V9a3 3 0 013-3h2a3 3 0 013 3v7m-9 0c-2.76 0-5 2.24-5 5h14c0-2.76-2.24-5-5-5H9z" />
                  </svg>
                </div>
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.1 }}
                  className="text-2xl font-bold text-charcoal-100 mb-4"
                >
                  Studio Reference Headphones
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.2 }}
                  className="text-slate-400 text-center max-w-md"
                >
                  Experience studio-grade accuracy with our open-back reference headphones, featuring 50mm drivers and hand-matched components.
                </motion.p>
              </motion.div>
            </Link>

            {/* Speakers */}
            <Link href="/products/speakers" className="block group">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0 + 0.3 }}
                className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200/50 hover:border-charcoal-300/70 transition-colors duration-300"
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50/20 rounded-full">
                  <svg className="w-12 h-12 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 6a9 9 0 019 9c0 1.105-.266 2.148-.718 3.06M18 8a3 3 0 00-3 3v4a3 3 0 00.586 2.121l1.414-1.414A3 3 0 0018 13V8z" />
                  </svg>
                </div>
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.4 }}
                  className="text-2xl font-bold text-charcoal-100 mb-4"
                >
                  Bookshelf Monitors
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.5 }}
                  className="text-slate-400 text-center max-w-md"
                >
                  Precision-engineered bookshelf speakers with silk dome tweeters and woven carbon fiber woofers for authentic sound reproduction.
                </motion.p>
              </motion.div>
            </Link>

            {/* Amplifier */}
            <Link href="/products/amplifier" className="block group">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0 + 0.6 }}
                className="flex flex-col items-center py-12 px-8 border-t border-charcoal-200/50 hover:border-charcoal-300/70 transition-colors duration-300"
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center bg-charcoal-50/20 rounded-full">
                  <svg className="w-12 h-12 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2-2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.7 }}
                  className="text-2xl font-bold text-charcoal-100 mb-4"
                >
                  Integrated Amplifier
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0 + 0.8 }}
                  className="text-slate-400 text-center max-w-md"
                >
                  Pure Class A amplification with discrete components and zero-feedback design for transparent, dynamic sound.
                </motion.p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-24">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=""
              >
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-3xl font-bold text-charcoal-100 mb-6"
                >
                  Crafted for Critical Listening
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="text-slate-400 leading-relaxed mb-6"
                >
                  Every Aurora Sound product begins with meticulous material selection—from aerospace-grade aluminum housings to vegetable-tanned leather ear pads. We believe that exceptional sound starts with exceptional construction.
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-slate-400 leading-relaxed"
                >
                  Our engineers spend hundreds of hours in critical listening sessions, refining each design until it meets our uncompromising standards for accuracy, transparency, and emotional connection.
                </motion.p>
              </motion.div>

              <div className="hidden lg:block">
                <div className="w-60 h-60 bg-charcoal-50/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4v2h4V12h4a4 4 0 000-8h-4zm0 12c-2.21 0-4 1.79-4 4v2h4v-2h4a4 4 0 000-8h-4z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="hidden lg:block">
                <div className="w-60 h-60 bg-charcoal-50/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-6-9-6v7z" />
                  </svg>
                </div>
              </div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=""
              >
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-3xl font-bold text-charcoal-100 mb-6"
                >
                  The Pursuit of Sonic Truth
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="text-slate-400 leading-relaxed mb-6"
                >
                  We reject the notion that audio equipment should "color" the sound. Instead, our designs strive for absolute fidelity—reproducing recordings exactly as the artists and engineers intended, with nothing added and nothing taken away.
                </motion.p>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-slate-400 leading-relaxed"
                >
                  This commitment to transparency means you'll hear details in your favorite recordings you've never noticed before—not because we've emphasized them, but because we've removed everything that obscures them.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Updates */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >
        <NewsSection />
      </motion.div>

      {/* Specifications Section */}
      <section className="mb-24">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-bold text-charcoal-100 mb-4"
            >
              Technical Excellence
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-400 max-w-xl mx-auto"
            >
              Reference specifications that define our commitment to uncompromising performance
            </motion.p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Frequency Response */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center py-6 px-4 border border-charcoal-100/20 rounded-lg"
            >
              <motion.h3
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl font-bold text-charcoal-100 mb-2"
              >
                Frequency Response
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="font-mono text-aurora-600"
              >
                5Hz - 40kHz (±0.5dB)
              </motion.p>
            </motion.div>

            {/* THD+N */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center py-6 px-4 border border-charcoal-100/20 rounded-lg"
            >
              <motion.h3
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl font-bold text-charcoal-100 mb-2"
              >
                THD+N
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="font-mono text-aurora-600"
              >
                0.001% (1kHz, 1V RMS)
              </motion.p>
            </motion.div>

            {/* Impedance */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-center py-6 px-4 border border-charcoal-100/20 rounded-lg"
            >
              <motion.h3
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl font-bold text-charcoal-100 mb-2"
              >
                Impedance
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="font-mono text-aurora-600"
              >
                300Ω (headphones), 8Ω (speakers)
              </motion.p>
            </motion.div>

            {/* Sensitivity */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center py-6 px-4 border border-charcoal-100/20 rounded-lg"
            >
              <motion.h3
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl font-bold text-charcoal-100 mb-2"
              >
                Sensitivity
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="font-mono text-aurora-600"
              >
                102dB/mW (headphones), 89dB/W/m (speakers)
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-charcoal-50/10">
        <div className="container mx-auto px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=""
          >
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-bold text-charcoal-100 mb-6"
            >
              Experience the Difference
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Discover why discerning listeners and recording professionals choose Aurora Sound for their most critical listening sessions.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link href="/products" className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-charcoal-900/80 text-white font-medium hover:bg-charcoal-900 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-600 focus-visible:ring-offset-2">
                Shop Collection
              </Link>
              <a href="#" className="inline-flex h-12 px-8 items-center justify-center rounded-lg border border-charcoal-300/50 bg-white/10 font-medium text-charcoal-100 hover:bg-charcoal-50/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-600 focus-visible:ring-offset-2">
                Request Catalog
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}