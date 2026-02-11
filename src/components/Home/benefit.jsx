
import {
  Shield,
  DollarSign,
  Award,
  Package,
  Truck,
  Headphones,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Premium Quality",
      description: "International-standard filters with certified performance",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-600",
      stat: "100%",
      statLabel: "Certified"
    },
    {
      id: 2,
      title: "Best Pricing",
      description: "Competitive wholesale & retail rates across Mumbai",
      icon: DollarSign,
      gradient: "from-emerald-500 to-green-600",
      stat: "30%",
      statLabel: "Savings"
    },
    {
      id: 3,
      title: "Trusted Brand",
      description: "5+ years serving customers with reliability",
      icon: Award,
      gradient: "from-blue-500 to-indigo-600",
      stat: "1000+",
      statLabel: "Happy Clients"
    },
    {
      id: 4,
      title: "Wide Selection",
      description: "Compatible with all major purifier brands",
      icon: Package,
      gradient: "from-green-500 to-emerald-600",
      stat: "50+",
      statLabel: "Brands"
    },
    {
      id: 5,
      title: "Fast Delivery",
      description: "Same-day delivery available across Mumbai",
      icon: Truck,
      gradient: "from-cyan-500 to-blue-600",
      stat: "24hrs",
      statLabel: "Delivery"
    },
    {
      id: 6,
      title: "Expert Support",
      description: "Professional guidance & 24/7 assistance",
      icon: Headphones,
      gradient: "from-emerald-500 to-teal-600",
      stat: "24/7",
      statLabel: "Support"
    },
  ];

  const quickFeatures = [
    "Genuine Products Only",
    "Easy Returns Policy",
    "Warranty Included",
    "Expert Consultation"
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto opacity-0 animate-[slideUp_0.6s_ease-out_0.1s_forwards]">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-sm font-bold text-emerald-700 tracking-wide">
              WHY CHOOSE AEROPURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
            Benefits That Make
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              All The Difference
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed px-4">
            Quality, affordability, and trust in every filter we deliver
          </p>

        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-16 lg:mb-15">

          {benefits.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >

              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative">

                {/* Icon with Gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                    <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                </div>

                {/* Title */}
                <h3 className="font-black text-xl sm:text-2xl mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  {benefit.description}
                </p>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all duration-300">
                  <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        {/* ================= QUICK FEATURES BANNER ================= */}
        <div className="max-w-5xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
          
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-10 lg:p-12">
            
            {/* Animated Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Gradient Orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {quickFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base group-hover:text-emerald-400 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}