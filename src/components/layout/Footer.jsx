"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "AeroPure",
    tagline: "Breathe Pure, Live Healthy",
    founder: "Zaheed Shaikh",
    phone: "+91 8591401114",
    email: "aeropure.buisness@gmail.com",
    location: "Mumbai, Maharashtra, India",
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-gray-200">

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="AeroPure Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {companyInfo.name}
                </h3>

                <p className="text-xs text-gray-500 tracking-wide">
                  {companyInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Your trusted wholesale & retail partner for high-quality air
              purifier filters. Helping homes and businesses breathe cleaner,
              healthier air every day.
            </p>

          </div>


          {/* Quick Links */}
          <div className="space-y-4">

            <h4 className="font-semibold text-gray-900 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">

              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="group inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition" />
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div className="space-y-4">

            <h4 className="font-semibold text-gray-900 text-lg">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-green-600" />

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  {companyInfo.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-blue-600" />

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-600 hover:text-blue-600 transition break-all"
                >
                  {companyInfo.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-green-600" />

                <span className="text-gray-600">
                  {companyInfo.location}
                </span>
              </li>

            </ul>

          </div>


          {/* Business Hours + CTA */}
          <div className="space-y-4">

            <h4 className="font-semibold text-gray-900 text-lg">
              Business Hours
            </h4>

            <ul className="text-sm text-gray-600 space-y-2">

              <li>
                <span className="font-medium">Mon – Sat:</span> 9:00 AM – 7:00 PM
              </li>

              <li>
                <span className="font-medium">Sunday:</span> 10:00 AM – 5:00 PM
              </li>

            </ul>


            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918591401114?text=Hello%20AeroPure!%20I%27m%20interested%20in%20your%20air%20purifier%20filters."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full
                         bg-gradient-to-r from-green-600 to-blue-600
                         text-white px-5 py-3 rounded-lg
                         font-semibold shadow-md
                         hover:shadow-xl hover:scale-[1.03]
                         transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

          <p className="text-center md:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>

          <p>
            Founded by{" "}
            <span className="font-semibold text-gray-700">
              {companyInfo.founder}
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}
