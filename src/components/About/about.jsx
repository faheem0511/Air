"use client";

import Image from "next/image";
import { Zap, ShieldCheck, Clock, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/h2.jpg" // Replace with your image
          alt="Mountains Clean Air"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white">

          <p className="tracking-widest text-sm mb-4 uppercase">
            Air Purifier
          </p>

          <h1 className="text-4xl md:text-6xl font-light mb-6">
            For The Air You Breathe
          </h1>

          <p className="max-w-xl text-white/90 mb-8">
            Give yourself and those around you peace of mind with our
            revolutionary air purification technology.
          </p>

          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition">
            Find Out More
          </button>

        </div>

        {/* Curve Shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 z0 1450 100"
            className="w-full h-[100px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,0 720,30 960,60 1200,100 1440,40 L1440,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="py-24 text-center px-4">

        <p className="italic text-gray-500 mb-3">
          “Clean air starts here”
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Find out about the Nano-tech air
        </h2>

        <p className="uppercase text-xs tracking-widest text-gray-400">
          Breathe easy with top-rated nano-tech air purifiers
        </p>

      </section>


      {/* ================= PRODUCT + FEATURES ================= */}
      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">

          {/* Left Features */}
          <div className="space-y-12">

            <Feature
              icon={<Clock />}
              title="Fast"
              text="Filters virus, bacteria and smells in just 5 minutes"
            />

            <Feature
              icon={<ShieldCheck />}
              title="Patented Technology"
              text="Certified performance by leading laboratories"
            />

          </div>


          {/* Product Image */}
          <div className="flex justify-center">

            <div className="relative w-[220px] h-[420px]">

              <Image
                src="/airpurifier.jpg" // Replace with purifier image
                alt="AeroPure Device"
                fill
                className="object-contain"
              />

            </div>

          </div>


          {/* Right Features */}
          <div className="space-y-12">

            <Feature
              icon={<Layers />}
              title="Innovative Design"
              text="No filter replacement, safer and cleaner"
            />

            <Feature
              icon={<Zap />}
              title="Use Anywhere - 30m³"
              text="Perfect for homes, offices, cars and clinics"
            />

          </div>

        </div>

      </section>


      {/* ================= BRAND MESSAGE ================= */}
      <section className="py-28 bg-slate-50 text-center px-4">

        <div className="max-w-4xl mx-auto">

          <h3 className="text-3xl font-light mb-6">
            Why AeroPure?
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">

            At AeroPure, we believe clean air is a fundamental right.
            Our advanced filtration systems are designed to protect
            families, workplaces, and communities across India.

            <br /><br />

            With innovation, quality, and trust at our core,
            we continue delivering reliable air purification solutions
            for healthier living.

          </p>

        </div>

      </section>

    </div>
  );
}


/* ================= FEATURE COMPONENT ================= */

function Feature({ icon, title, text }) {
  return (
    <div className="text-center lg:text-left">

      <div className="flex justify-center lg:justify-start mb-4 text-gray-800">
        {icon}
      </div>

      <h4 className="font-semibold mb-2 tracking-wide uppercase text-sm">
        {title}
      </h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

    </div>
  );
}
