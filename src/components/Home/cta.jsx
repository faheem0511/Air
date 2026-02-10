// CTASection.jsx - Call to Action Section

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">

        <h2 
          className="text-5xl md:text-6xl font-bold mb-8"
          style={{ fontFamily: "'Cirka', serif" }}
        >
          Improve Your Air Quality Today
        </h2>

        <p 
          className="text-2xl text-slate-300 mb-12 font-light"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Contact us for wholesale pricing or retail purchases
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={`https://wa.me/918591401114`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/50 backdrop-blur-sm px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            WhatsApp Now
          </a>
        </div>

      </div>

    </section>
  );
}