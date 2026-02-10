// BenefitsSection.jsx - Premium Why Choose AeroPure Section

import {
  Shield,
  DollarSign,
  Award,
  Package,
  Truck,
  Headphones,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "High Quality",
      description: "International-standard premium air filters",
      icon: Shield,
      color: "blue",
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "Best wholesale & retail pricing in Mumbai",
      icon: DollarSign,
      color: "green",
    },
    {
      id: 3,
      title: "Trusted Supplier",
      description: "Serving customers with reliability & trust",
      icon: Award,
      color: "blue",
    },
    {
      id: 4,
      title: "Wide Range",
      description: "Compatible with major purifier brands",
      icon: Package,
      color: "green",
    },
    {
      id: 5,
      title: "Fast Delivery",
      description: "Quick delivery across Mumbai",
      icon: Truck,
      color: "blue",
    },
    {
      id: 6,
      title: "Expert Support",
      description: "Professional guidance & assistance",
      icon: Headphones,
      color: "green",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

      {/* Background Accents */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-green-200/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 fade-in">

          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold tracking-wide">
            Our Strengths
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Why Choose{" "}
            <span className="text-gradient-green">AeroPure</span>
          </h2>

          <div className="divider-line" />

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Quality, affordability, and trust in every filter we deliver
          </p>

        </div>


        {/* ================= BENEFITS GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {benefits.map((item, i) => (
            <div
              key={item.id}
              className={`
                slide-up stagger-${i + 1}
                group relative
                bg-white/90 backdrop-blur-sm
                p-10 rounded-3xl
                border border-slate-200
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
                overflow-hidden
              `}
            >

              {/* Glow Layer */}
              <div
                className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                  transition duration-500 blur-xl
                  ${
                    item.color === "blue"
                      ? "bg-blue-300/25"
                      : "bg-green-300/25"
                  }
                `}
              />

              {/* Content */}
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
                    shadow-xl
                    group-hover:scale-110
                    group-hover:rotate-3
                    transition-transform duration-300
                  `}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl mb-4 text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>

                {/* Accent Line */}
                <div
                  className={`
                    mt-6 h-[3px] w-12 rounded-full transition-all duration-500
                    ${
                      item.color === "blue"
                        ? "bg-blue-500 group-hover:w-20"
                        : "bg-green-500 group-hover:w-20"
                    }
                  `}
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
