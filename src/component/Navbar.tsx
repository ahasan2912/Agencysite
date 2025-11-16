"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function DagencyHero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "HOME", hasDropdown: true, link: '#home' },
    { name: "ABOUT", hasDropdown: false, link: '#about' },
    { name: "SERVICES", hasDropdown: true, link: '#services' },
    { name: "WORKS", hasDropdown: true, link: '#works' },
    { name: "TEAM", hasDropdown: true, link: '#team' },
    { name: "TESTIMONIALS", hasDropdown: true, link: '#testimonials' },
    { name: "CONTACT", hasDropdown: false, link: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-[100] border-b transition-all duration-500 ease-in-out transform ${isScrolled
        ? "bg-white border-b-gray-200 shadow-md translate-y-0 opacity-100"
        : "bg-transparent border-b-[rgba(255,255,255,0.1)] translate-y-[-10px] opacity-95"
        }`}
    >
      <div className="container mx-auto">
        <nav className="relative z-[100]">
          <div className="flex items-center justify-between h-[100px] transition-all duration-500 ease-in-out">
            <Link href="/">
              <img
                className="w-[80] aspect-auto-[80/60] h-auto transition-all duration-500 ease-in-out"
                src={
                  isScrolled
                    ? "/images/logo.webp"
                    : "/images/logo_white.png"
                }
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`px-3 py-2 font-federo flex items-center space-x-1 text-[15px] font-medium tracking-[2px] cursor-pointer transition-colors duration-300 ${isScrolled
                    ? "text-black hover:text-[#B6EF00]"
                    : "text-white hover:text-[#B6EF00]"
                    }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </button>
              ))}
            </div>

            <button
              className={`lg:hidden cursor-pointer transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-[100%] left-0 w-full bg-black bg-opacity-95 px-6 py-8 space-y-4 z-[99] animate-slideDown">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-white hover:text-lime-400 transition-colors duration-300 flex items-center justify-between w-full text-sm font-medium tracking-wide"
                >
                  <Link href={item.link}>{item.name}</Link>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
