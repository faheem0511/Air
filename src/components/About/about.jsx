"use client";

import Image from "next/image";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  Leaf,
  Award,
  Target,
} from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900 overflow-hidden">


        {/* ================= HERO ================= */}
        <section className="relative min-h-[80vh] flex items-center justify-center">

          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/h2.jpg"
              alt="About AeroPure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-up">

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-green-400">AeroPure</span>
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed">
              Creating healthier spaces with premium air filtration solutions
              trusted across Mumbai and beyond.
            </p>

          </div>
        </section>



        {/* ================= INTRO ================= */}
        <section className="py-28">

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="animate-slide-left">

              <h2 className="text-4xl font-bold mb-6">
                Who We Are
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                AeroPure is a leading supplier of premium air purifier filters
                for homes, offices, clinics, and industries. We focus on quality,
                affordability, and long-term customer trust.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Founded with a vision to make clean air accessible to everyone,
                we have built strong relationships with clients through
                transparency, service, and performance.
              </p>

            </div>


            {/* Image */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl animate-slide-right">

              <Image
                src="/airpurifier.jpg"
                alt="AeroPure Product"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </section>



        {/* ================= STATS ================= */}
        <section className="py-24 bg-slate-50">

          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {[
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "1000+" },
              { label: "Products Delivered", value: "50K+" },
              { label: "Cities Covered", value: "20+" },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition animate-fade-up"
              >

                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {item.value}
                </h3>

                <p className="text-slate-600 text-sm">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </section>



        {/* ================= MISSION / VISION ================= */}
        <section className="py-28">

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-10 rounded-3xl shadow animate-slide-left">

              <div className="flex items-center gap-4 mb-5">

                <Target className="text-blue-600" size={32} />

                <h3 className="text-2xl font-bold">
                  Our Mission
                </h3>

              </div>

              <p className="text-slate-600 leading-relaxed">
                To deliver reliable, high-performance air filtration solutions
                that enhance quality of life and create healthier environments.
              </p>

            </div>


            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-3xl shadow animate-slide-right">

              <div className="flex items-center gap-4 mb-5">

                <Leaf className="text-green-600" size={32} />

                <h3 className="text-2xl font-bold">
                  Our Vision
                </h3>

              </div>

              <p className="text-slate-600 leading-relaxed">
                To become India’s most trusted air purification partner through
                innovation, sustainability, and service excellence.
              </p>

            </div>

          </div>

        </section>



        {/* ================= VALUES ================= */}
        <section className="py-28 bg-slate-900 text-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20 animate-fade-up">

              <h2 className="text-4xl font-bold mb-4">
                Our Core Values
              </h2>

              <p className="text-slate-300">
                What makes AeroPure different
              </p>

            </div>


            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  title: "Quality First",
                  text: "We never compromise on product performance.",
                  icon: ShieldCheck,
                },
                {
                  title: "Customer Trust",
                  text: "Long-term partnerships over short-term gains.",
                  icon: Users,
                },
                {
                  title: "Continuous Growth",
                  text: "Always improving systems and services.",
                  icon: TrendingUp,
                },
              ].map((item, i) => (

                <div
                  key={i}
                  className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition animate-fade-up"
                >

                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">

                    <item.icon className="text-white" size={26} />

                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* ================= FOUNDER ================= */}
        <section className="py-28">

          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl animate-slide-left">

              <Image
                src="/zahid.jpg"
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>


            {/* Text */}
            <div className="animate-slide-right">

              <h2 className="text-4xl font-bold mb-4">
                Meet Our Founder
              </h2>

              <h3 className="text-2xl text-green-600 font-semibold mb-4">
                Zaheed Shaikh
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                With years of experience in air filtration and customer service,
                Zaheed founded AeroPure with a mission to deliver reliable,
                affordable, and high-quality purification solutions.
              </p>

              <p className="text-slate-600 leading-relaxed">
                His leadership focuses on innovation, ethics, and long-term
                customer satisfaction.
              </p>

            </div>

          </div>

        </section>



        {/* ================= CTA ================= */}
        <section className="py-24 ml-25 mr-25 mb-15  rounded-xl shadow-md bg-gradient-to-br from-blue-600 to-green-600 text-white text-center">

          <div className="max-w-4xl mx-auto px-6 animate-fade-up">

            <h2 className="text-4xl font-bold mb-6">
              Ready to Breathe Better?
            </h2>

            <p className="text-lg mb-8">
              Partner with AeroPure for cleaner, healthier air solutions.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Contact Us Today
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
