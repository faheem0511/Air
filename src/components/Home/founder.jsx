import { Clock, ShieldCheck, Layers, Zap } from "lucide-react";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="italic text-gray-500 mb-3">
            “Clean air starts here”
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">
            Find out about the <span className="text-green-600">Nano-tech</span> air
          </h2>

          <p className="uppercase text-xs tracking-widest text-gray-400">
            Breathe easy with top-rated nano-tech air purifiers
          </p>
        </div>

        {/* Main Grid */}
        <div className="relative grid lg:grid-cols-[1fr_1.3fr_1fr] gap-10 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-12 text-center lg:text-right animate-fade-up">
            <Feature
              icon={<Clock />}
              title="Fast"
              text="Filters virus, bacteria and smells in just 5 minutes"
              align="right"
            />
            <Feature
              icon={<ShieldCheck />}
              title="Patented Technology"
              text="Certified performance by leading laboratories"
              align="right"
            />
          </div>

          {/* CENTER PRODUCT */}
          <div className="relative flex justify-center">

            {/* White backdrop panel */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[380px] h-[520px] bg-white rounded-[2.5rem] shadow-xl border border-slate-100" />
            </div>

            {/* Ambient glow */}
            {/* <div className="absolute -inset-10 bg-gradient-to-b from-blue-100/40 via-transparent to-green-100/40 blur-3xl" /> */}

            {/* Product */}
            <div className="relative w-[300px] h-[520px] lg:w-[340px] lg:h-[580px] animate-float">
              <Image
                src="/airpurifier.jpg"
                alt="AeroPure Air Purifier"
                fill
                className="object-contain "
                priority
              />
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-12 text-center lg:text-left animate-fade-up delay-150">
            <Feature
              icon={<Layers />}
              title="Innovative Design"
              text="No filter replacement, safer and cleaner"
            />
            <Feature
              icon={<Zap />}
              title="Use Anywhere – 30m³"
              text="Perfect for homes, offices, cars and clinics"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text, align = "left" }) {
  return (
    <div
      className={`flex flex-col ${
        align === "right"
          ? "items-center lg:items-end"
          : "items-center lg:items-start"
      } transition-all duration-300`}
    >
      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center text-slate-800 shadow-sm">
        {icon}
      </div>

      <h4 className="font-semibold tracking-wide uppercase text-sm mb-2 text-slate-900">
        {title}
      </h4>

      <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
        {text}
      </p>
    </div>
  );
}
