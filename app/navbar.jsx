"use client";
import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoPNG from "./assets/logo_2.png";

const interFont = Inter({
  subsets: ["latin"],
});

const robotoFont = Roboto({
  weight:["400","500","700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks=[{ name: "Build with us", href: "#" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Community", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-white/80 backdrop-blur-md ${interFont.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={LogoPNG}
              alt="Sunflower Logo"
              priority
              className="w-8 h-8 transition-transform group-hover:rotate-12"
            />
            <h1 className={`font-semibold text-xl tracking-tight text-gray-900 ${robotoFont.className}`}>
              Sunflower
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Login
            </Link>
            <button
              aria-label="Search"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <line
                  x1="16.65"
                  y1="16.65"
                  x2="21"
                  y2="21"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
