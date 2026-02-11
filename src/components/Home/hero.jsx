// HeroSection.jsx

import Link from "next/link";
import { ArrowRight, Star, Sparkles, CheckCircle } from "lucide-react";

export default function HeroSection({ companyInfo }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="h1.jpg"
          alt="Clean Air Environment"
          className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/85 to-emerald-900/90" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/40 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-float" />
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-delayed" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">

        <div className="text-center text-white space-y-6 sm:space-y-8">

          {/* Trust Badge - Enhanced */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-green-500/10 opacity-0 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 animate-pulse delay-200" fill="currentColor" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Mumbai's #1 Trusted Air Filter Supplier
            </span>
          </div>

          {/* Main Headline - Mobile Optimized */}
          <h1 className="opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                Breathe
              </span>{" "}
              <span className="inline-block">Pure,</span>
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight mt-2">
              <span className="inline-block">Live</span>{" "}
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Healthy
              </span>
            </div>
          </h1>

          {/* Subtitle - Enhanced Typography */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
            Premium air purifier filters for{" "}
            <span className="font-semibold text-green-400">wholesale</span> and{" "}
            <span className="font-semibold text-blue-400">retail</span>.
            <br className="hidden sm:block" />
            Quality you can trust, prices that make sense.
          </p>

          {/* CTA Buttons - Mobile Stack */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-4 sm:pt-6 opacity-0 animate-[slideUp_0.8s_ease-out_0.7s_forwards] px-4">

            {/* Primary CTA */}
            <Link
              href="/product"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold text-base sm:text-lg shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-green-400/20"
            >
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            {/* Secondary CTA - Replaced Phone with Quote */}
            <Link
              href="/quote"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
            >
              <CheckCircle className="w-5 h-5 text-blue-400" />
              Get Free Quote
            </Link>
          </div>

          {/* Stats Grid - Mobile Optimized */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto pt-12 sm:pt-16 opacity-0 animate-[slideUp_0.8s_ease-out_1.1s_forwards]">

            {/* Stat 1 */}
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Years Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Happy Clients
              </div>
            </div>


            {/* Stat 3 */}
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                Support Available
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}