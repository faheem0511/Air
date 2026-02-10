"use client"
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  DollarSign,
  Award,
  Package,
  Truck,
  Headphones,
  CheckCircle,
  Phone,
  Users,
  TrendingUp,
  Star,
  Building2,
  Home as HomeIcon,
  Zap,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function HomePage() {

  const companyInfo = {
    name: "AeroPure",
    founder: "Zaheed Shaikh",
    mission:
      "To provide high-quality, affordable air purifier filters that help create healthier living and working environments across India.",
    phone: "+91 8591401114",
  };

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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cirka:wght@400;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --aero-blue-dark: #1B5A9E;
          --aero-blue-light: #4DB8E8;
          --aero-green-dark: #507f28;
          --aero-green-light: #7CB342;
          --aero-neutral-900: #0F172A;
          --aero-neutral-700: #334155;
          --aero-neutral-100: #F1F5F9;
        }

        * {
          scroll-behavior: smooth;
        }

        .hero-content {
          animation: fadeInScale 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .slide-up {
          animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.15s; }
        .stagger-5 { animation-delay: 0.25s; }
        .stagger-6 { animation-delay: 0.35s; }

        .premium-card {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .premium-card:hover {
          transform: translateY(-8px);
        }

        .blue-glow {
          box-shadow: 0 0 40px rgba(27, 90, 158, 0.15);
        }

        .green-glow {
          box-shadow: 0 0 40px rgba(124, 179, 66, 0.15);
        }

        .text-gradient-blue {
          background: linear-gradient(135deg, var(--aero-blue-dark) 0%, var(--aero-blue-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-green {
          background: linear-gradient(135deg, var(--aero-green-dark) 0%, var(--aero-green-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .divider-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--aero-blue-dark), var(--aero-green-light));
          margin: 0 auto 1.5rem;
        }
      `}</style>

      <div className="min-h-screen top-0 bg-white">
        <Navbar />

        {/* ================= HERO SECTION - FULL SCREEN ================= */}
        <section className="relative flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="h1.jpg"
              alt="Clean Air Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/40 to-slate-900/50" />
            
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white hero-content">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <Star className="w-4 h-4 text-green-400" fill="currentColor" />
              <span 
                className="text-sm font-medium tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Mumbai's Trusted Air Filter Supplier
              </span>
            </div>

            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
              style={{ fontFamily: "'Cirka', serif" }}
            >
              Breathe Pure,
              <br />
              Live <span className="text-green-700">Healthy</span>
            </h1>

            <p 
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Premium air purifier filters for wholesale and retail.
              Quality you can trust, prices that make sense.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-slate-900 rounded-md font-semibold text-lg shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white/50 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-blue-900" style={{ fontFamily: "'Cirka', serif" }}>5+</div>
                <div className="text-sm text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years Experience</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-4xl font-bold mb-2 text-green-700" style={{ fontFamily: "'Cirka', serif" }}>1000+</div>
                <div className="text-sm text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-gradient-blue" style={{ fontFamily: "'Cirka', serif" }}>24/7</div>
                <div className="text-sm text-slate-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>Support Available</div>
              </div>
            </div>
          </div>

       
        </section>


        {/* ================= FOUNDER SECTION ================= */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Image */}
                <div className="slide-up order-2 lg:order-1">
                  <div className="relative">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl transform rotate-3" />
                    <div className="absolute -inset-4 bg-green-600/5 rounded-3xl transform -rotate-3" />
                    
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887"
                      alt={companyInfo.founder}
                      className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                    />

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Cirka', serif" }}>5+</div>
                          <div className="text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years Leading</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="slide-up stagger-2 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full mb-6">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span 
                      className="text-sm font-semibold text-blue-900"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Meet Our Founder
                    </span>
                  </div>

                  <h2 
                    className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
                    style={{ fontFamily: "'Cirka', serif" }}
                  >
                    {companyInfo.founder}
                  </h2>

                  <div className="divider-line" />

                  <p 
                    className="text-xl text-slate-600 leading-relaxed mb-10"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    With a vision to make clean air accessible to every home and office,
                    <strong className="text-slate-900"> {companyInfo.founder}</strong> founded AeroPure 
                    to become Mumbai's most trusted source for premium air purifier filters.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Cirka', serif" }}>1000+</div>
                      <div className="text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>Happy Clients</div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Cirka', serif" }}>100%</div>
                      <div className="text-sm text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>Quality Assured</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================= ABOUT SECTION ================= */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            
            {/* Header */}
            <div className="text-center mb-20 fade-in">
              <h2 
                className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
                style={{ fontFamily: "'Cirka', serif" }}
              >
                About <span className="text-gradient-blue">AeroPure</span>
              </h2>
              <div className="divider-line" />
              <p 
                className="text-xl text-slate-600 max-w-3xl mx-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Your trusted partner for premium air filtration solutions across Mumbai
              </p>
            </div>

            {/* Mission Card */}
            <div className="max-w-5xl mx-auto mb-20">
              <div className="relative bg-slate-900 p-12 md:p-16 rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-6">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span 
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Our Mission
                    </span>
                  </div>
                  
                  <p 
                    className="text-2xl md:text-3xl text-white leading-relaxed font-light"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {companyInfo.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Wholesale Excellence",
                  description: "Premium bulk pricing for businesses and dealers with dedicated support",
                  icon: Building2,
                  color: "blue",
                },
                {
                  title: "Retail Solutions",
                  description: "Quality filters for individual customers with expert consultation",
                  icon: HomeIcon,
                  color: "green",
                },
                {
                  title: "Fast Delivery",
                  description: "Quick and reliable service across Mumbai with same-day options",
                  icon: Truck,
                  color: "blue",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`slide-up stagger-${i + 4} group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-${item.color}-200 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-${item.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 
                    className="text-2xl font-bold mb-4 text-slate-900"
                    style={{ fontFamily: "'Cirka', serif" }}
                  >
                    {item.title}
                  </h4>
                  
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= BENEFITS ================= */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4">

            <div className="text-center mb-20">
              <h2 
                className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
                style={{ fontFamily: "'Cirka', serif" }}
              >
                Why Choose <span className="text-gradient-green">AeroPure</span>
              </h2>
              <div className="divider-line" />
              <p 
                className="text-xl text-slate-600 max-w-2xl mx-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Quality, affordability, and trust in every filter we deliver
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((item, i) => (
                <div
                  key={item.id}
                  className={`slide-up stagger-${i + 1} premium-card bg-white p-10 rounded-2xl border-2 ${
                    item.color === 'blue' ? 'border-blue-100 hover:blue-glow' : 'border-green-100 hover:green-glow'
                  }`}
                >
                  <div className={`w-16 h-16 mb-6 rounded-xl ${
                    item.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
                  } flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 
                    className="font-bold text-2xl mb-4 text-slate-900"
                    style={{ fontFamily: "'Cirka', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= TESTIMONIALS ================= */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">

            <div className="text-center mb-20">
              <h2 
                className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
                style={{ fontFamily: "'Cirka', serif" }}
              >
                Client <span className="text-gradient-blue">Testimonials</span>
              </h2>
              <div className="divider-line" />
              <p 
                className="text-xl text-slate-600"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Trusted by professionals across Mumbai
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((item, i) => (
                <div
                  key={item.id}
                  className={`slide-up stagger-${i + 1} bg-slate-50 p-10 rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p 
                    className="text-lg text-slate-700 mb-8 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t-2 border-slate-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cirka', serif" }}>
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p 
                        className="font-bold text-slate-900 mb-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.name}
                      </p>
                      <p 
                        className="text-sm text-slate-500"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Gradient Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">

            <h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ fontFamily: "'Cirka', serif" }}
            >
              Improve Your Air Quality Today
            </h2>

            <p 
              className="text-2xl text-slate-300 mb-12 font-light"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact us for wholesale pricing or retail purchases
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`https://wa.me/918591401114`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/50 backdrop-blur-sm px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                WhatsApp Now
              </a>
            </div>

          </div>

        </section>

        <Footer />
      </div>
    </>
  );
}