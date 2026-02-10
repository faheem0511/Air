// AboutSection.jsx - Premium About AeroPure Section

import { Zap, Building2, Home as HomeIcon, Truck } from "lucide-react";

export default function AboutSection({ companyInfo }) {
  const features = [
    {
      title: "Wholesale Excellence",
      description:
        "Premium bulk pricing for businesses and dealers with dedicated support",
      icon: Building2,
      color: "blue",
    },
    {
      title: "Retail Solutions",
      description:
        "Quality filters for individual customers with expert consultation",
      icon: HomeIcon,
      color: "green",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable service across Mumbai with same-day options",
      icon: Truck,
      color: "blue",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Background Accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 fade-in">

          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide">
            Who We Are
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            About{" "}
            <span className="text-gradient-blue">AeroPure</span>
          </h2>

          <div className="divider-line" />

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium air filtration solutions
            across Mumbai and beyond
          </p>

        </div>


        {/* ================= MISSION ================= */}
        <div className="max-w-6xl mx-auto mb-28">

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900" />

            {/* Subtle Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 p-12 md:p-20 text-center">

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-white tracking-wide">
                  Our Mission
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Building Healthier Spaces
              </h3>

              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-light">
                {companyInfo.mission}
              </p>

            </div>
          </div>

        </div>


        {/* ================= FEATURES ================= */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {features.map((item, i) => (
            <div
              key={i}
              className={`
                slide-up stagger-${i + 4}
                group relative bg-white
                p-10 rounded-3xl
                border border-slate-200
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
              `}
            >

              {/* Hover Glow */}
              <div
                className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition duration-500 blur-xl
                  ${
                    item.color === "blue"
                      ? "bg-blue-200/30"
                      : "bg-green-200/30"
                  }
                `}
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 mb-8 rounded-2xl
                    ${
                      item.color === "blue"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }
                    flex items-center justify-center
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-300
                  `}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-4 text-slate-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
