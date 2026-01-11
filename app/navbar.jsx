"use client";

import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import LogoPNG from "./assets/logo_2.png";
import ThemeToggle from "./ThemeToggle";

const interFont = Inter({
  subsets: ["latin"],
});

const robotoFont = Roboto({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 px-32 py-4 flex gap-16 items-center align-middle ${interFont.className} bg-white/80 backdrop-blur-sm`}
    >
      <Link href="/" className="flex items-center">
        <Image src={LogoPNG} alt="Logo" priority className="mr-3 w-8" />
        <h1 className={`font-semibold ${robotoFont.className}`}>Sunflower</h1>
      </Link>

      <div className="flex gap-10 text-sm">
        <Link href={"#"} className="hover:underline">
          Build with us
        </Link>
        <Link href={"/docs"} className="hover:underline">
          Docs
        </Link>
        <Link href={"#"} className="hover:underline">
          Blog
        </Link>
        <Link href={"#"} className="hover:underline">
          Resources
        </Link>
        <Link href={"#"} className="hover:underline">
          Community
        </Link>
      </div>

      <div className="ml-auto text-sm flex gap-4 items-center">
        <h1>Login</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-600"
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
        <ThemeToggle />
      </div>
    </div>
  );
}
