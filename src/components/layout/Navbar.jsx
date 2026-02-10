"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  const pathname = usePathname();

  /* Detect Scroll */
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;

      setIsScrolled(window.scrollY > 20);
     
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/product" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
 <nav
  className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
    }
    hover:bg-white/90
  `}
>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* ===== LOGOS ===== */}
          <Link href="/" className="flex items-center">

            {/* Logo 1 */}
            <Image
              src="/logo3.png"
              alt="AeroPure Logo"
              width={110}
              height={70}
              priority
              className="scale-100 transition"
            />

            {/* Logo 2 */}
            <Image
              src="/logo2.png"
              alt="AeroPure Partner Logo"
              width={150}
              height={140}
              priority
              className="scale-170 mt-5 transition"
            />

            {/* Text */}
            {/* <div className="leading-tight ml-1">
              <p className="text-xl font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
                AeroPure
              </p>
              <p className="text-[11px] text-gray-500">
                Pure Air. Every Day.
              </p>
            </div> */}

          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden md:flex items-center gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`
                  relative px-5 py-2 rounded-lg font-medium transition
                  ${
                    isActive(link.path)
                      ? "text-blue-700"
                      : "text-green-500 text-lg hover:text-blue-700 hover:bg-green-50"
                  }
                `}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px]
                                   bg-gradient-to-r from-blue-600 to-green-500 rounded-full" />
                )}
              </Link>
            ))}

          </div>

          {/* ===== CALL BUTTON ===== */}
          <div className="hidden md:block">
            <a
              href="tel:+918591401114"
              className="
                inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white
                bg-gradient-to-r from-blue-600 to-green-600
                shadow-lg hover:shadow-xl hover:scale-105 transition
              "
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white border-t px-4 py-5 space-y-2">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`
                block px-4 py-3 rounded-lg font-medium transition
                ${
                  isActive(link.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Call */}
          <a
            href="tel:+918591401114"
            className="
              flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-full
              font-semibold text-white
              bg-gradient-to-r from-blue-600 to-green-600 shadow
            "
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>
      </div>
    </nav>
  );
}
