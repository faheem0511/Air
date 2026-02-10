// HeroSection.jsx

import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function HeroSection({ companyInfo }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <img
          src="h1.jpg"
          alt="Clean Air Environment"
          className="w-full h-full object-cover scale-110 animate-[zoom_25s_linear_infinite]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>


      {/* Content */}
      <div className="relative mt-22 z-10 w-full max-w-6xl px-4 text-center text-white">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md
          border border-white/20 rounded-full mb-3
          animate-[fadeUp_1s_ease_forwards]"
        >
          <Star className="w-4 h-4 text-green-400" fill="currentColor" />
          <span className="text-sm font-medium tracking-wide">
            Mumbai's Trusted Air Filter Supplier
          </span>
        </div>


        {/* Heading */}
        <h1
          className="text-3xl md:text-8xl lg:text-7xl font-bold leading-[1.1]
          mb-2 tracking-tight
          animate-[fadeUp_1s_ease_0.2s_forwards]"
        >
          <span className="text-green-500">Breathe</span> Pure,
          <br />
          Live{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Healthy
          </span>
        </h1>


        {/* Subtitle */}
        <p
          className="text-xl md:text-1xl text-slate-200 max-w-3xl mx-auto mb-12
          leading-relaxed
          animate-[fadeUp_1s_ease_0.4s_forwards]"
        >
          Premium air purifier filters for wholesale and retail.
          Quality you can trust, prices that make sense.
        </p>


        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center
          animate-[fadeUp_1s_ease_0.6s_forwards]"
        >

          {/* Primary */}
          <Link
            href="/product"
            className="group inline-flex items-center justify-center gap-3
            px-10 py-5 rounded-md
            bg-gradient-to-r from-green-600 to-green-700
            text-white font-semibold text-lg
            shadow-xl hover:shadow-green-500/30
            transition-all duration-300 hover:scale-105"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>


          {/* Secondary */}
          <a
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center justify-center gap-3
            px-10 py-5 rounded-md
            bg-gradient-to-r from-blue-600 to-blue-700
            text-white font-semibold text-lg
            shadow-lg hover:shadow-blue-500/30
            hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            {companyInfo.phone}
          </a>

        </div>


        {/* Stats */}
        <div
          className="mt-15 grid grid-cols-3 gap-8 max-w-2xl mx-auto
          animate-[fadeUp_1s_ease_0.8s_forwards]"
        >

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-blue-300">
              5+
            </div>
            <div className="text-sm text-slate-300">
              Years Experience
            </div>
          </div>

          <div className="text-center border-x border-white/20">
            <div className="text-4xl font-bold mb-2 text-green-400">
              1000+
            </div>
            <div className="text-sm text-slate-300">
              Happy Clients
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-slate-300">
              Support Available
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
