// AboutSection.jsx - Redesigned Modern Premium Layout

import { Check, Award, Shield, Zap, TrendingUp, Users, Package, Clock } from "lucide-react";

export default function AboutSection({ companyInfo }) {
  const features = [
    {
      title: "Wholesale Excellence",
      description: "Bulk pricing with dedicated support",
      icon: TrendingUp,
      stat: "500+",
      label: "B2B Clients"
    },
    {
      title: "Retail Solutions",
      description: "Expert consultation for homes",
      icon: Users,
      stat: "1000+",
      label: "Happy Customers"
    },
    {
      title: "Quality Assured",
      description: "100% genuine products",
      icon: Award,
      stat: "5+",
      label: "Years Experience"
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery available",
      icon: Clock,
      stat: "24/7",
      label: "Support"
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto opacity-0 animate-[slideUp_0.6s_ease-out_0.1s_forwards]">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide">ABOUT AEROPURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Breathing New Life Into
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Mumbai's Air Quality
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {companyInfo.mission || "We're on a mission to make clean air accessible to everyone through premium filtration solutions and unmatched expertise."}
          </p>

        </div>


        {/* ================= IMAGE GALLERY WITH OVERLAY CONTENT ================= */}
        <div className="max-w-7xl mx-auto mb-20 sm:mb-28 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Large Featured Image */}
            <div className="lg:col-span-2 relative group">
                   {/* ================= WHY CHOOSE US SECTION ================= */}
        <div className="max-w-6xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.9s_forwards]">
          
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 sm:p-14 lg:p-16">
            
            {/* Animated Pattern Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Gradient Orb */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-white">About Us</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  The AeroPure
                  <br />
                  Difference
                </h3>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  We don't just sell filters—we're your partners in creating healthier environments. Every product is backed by expertise and commitment.
                </p>

                {/* CTA Button */}
                <a
                  href="/product"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Explore Our Products
                  <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right - Benefits List */}
              <div className="space-y-5">
                {[
                  "100% Genuine & Certified Products",
                  "Expert Consultation Available",
                  "Competitive Wholesale Pricing",
                  "Same-Day Delivery in Mumbai",
                  "24/7 Customer Support",
                  "Easy Returns & Warranty"
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                      <Check className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-white font-medium pt-0.5 group-hover:text-emerald-400 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

            </div>

            {/* Side Images Stack */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
             
                <div className="relative group h-48 lg:h-auto lg:flex-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                  <div className="relative h-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={`/airpurifier.jpg`}
                      alt={`Filter Detail`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>
                </div>
              
            </div>

          </div>

        </div>


        {/* ================= FEATURES GRID ================= */}
        <div className="max-w-7xl mx-auto mb-15 sm:mb-15">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {feature.label}
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>



      </div>
    </section>
  );
}