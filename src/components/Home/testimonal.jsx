// TestimonialsSection.jsx - Premium Client Testimonials Section

import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Clean Air Solutions",
      text: "AeroPure has been our trusted supplier for years. Excellent quality and service.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Green Tech Industries",
      text: "Best prices in Mumbai. Delivery is always on time.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mohammed Ali",
      company: "Fresh Air Enterprises",
      text: "Reliable partner with consistent quality.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Background Accents */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-green-200/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 fade-in">

          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Client{" "}
            <span className="text-gradient-blue">Testimonials</span>
          </h2>

          <div className="divider-line" />

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by professionals and businesses across Mumbai
          </p>

        </div>


        {/* ================= TESTIMONIALS GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`
                slide-up stagger-${i + 1}
                group relative
                bg-white/80 backdrop-blur-md
                p-10 rounded-3xl
                border border-slate-200
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
                overflow-hidden
              `}
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-300/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative z-10">

                {/* Quote Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-400 transition" />

                  {/* Stars */}
                  <div className="flex">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-slate-700 leading-relaxed mb-10 italic">
                  “{item.text}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      {item.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {item.company}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
