// CTASection.jsx - Mobile Optimized (No Functional Changes)

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 mx-4 sm:mx-8 lg:mx-24 my-10 rounded-2xl shadow-2xl bg-slate-900 text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-green-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "'Cirka', serif" }}
        >
          Improve Your Air Quality Today
        </h2>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 font-light"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Contact us for wholesale pricing or retail purchases
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

          <Link
            href="/contactus"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="https://wa.me/918591401114"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-white/50 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            WhatsApp Now
          </a>

        </div>

      </div>
    </section>
  );
}
