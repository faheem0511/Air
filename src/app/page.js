"use client"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Home/hero";
import FounderSection from "@/components/Home/founder";
import AboutSection from "@/components/Home/about";
import BenefitsSection from "@/components/Home/benefit";
import TestimonialsSection from "@/components/Home/testimonal";
import CTASection from "@/components/Home/cta";

export default function HomePage() {

  // Company Information
  const companyInfo = {
    name: "AeroPure",
    founder: "Zaheed Shaikh",
    mission:
      "To provide high-quality, affordable air purifier filters that help create healthier living and working environments across India.",
    phone: "+91 8591401114",
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection companyInfo={companyInfo} />
        <AboutSection companyInfo={companyInfo} />
        {/* <FounderSection companyInfo={companyInfo} /> */}
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}