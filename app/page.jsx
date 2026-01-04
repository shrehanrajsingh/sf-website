"use client";

import Image from "next/image";
import Navbar from "./navbar";
import SunflowerPNG from "./assets/sunflower.png";
import { Arima, Fira_Code, Quicksand, Roboto } from "next/font/google";
import BG1JPG from "./assets/bg1.jpg";
import Card1JPG from "./assets/card1.jpg";
import Card2JPG from "./assets/card2.jpg";
import Card3JPG from "./assets/card3.jpg";
import Link from "next/link";

const fira_code = Fira_Code({ subsets: ["latin"] });
const heading_font = Arima({ subsets: ["latin"] });
const roboto_font = Roboto({ subsets: ["latin"] });
const quicksand_font = Quicksand({ subsets: ["latin"] });

const projectInfo = [
  {
    name: "Installation and Setup",
    desc: "Learn to download and set up Sunflower for your operating system, including configuring your development environment and running your first program.",
    tags: ["Beginner", "Setup", "Environment"],
  },
  {
    name: "Hello World",
    desc: "Get started with Sunflower by writing your first 'Hello World' program and understanding the basics of its syntax.",
    tags: ["Beginner", "Syntax", "Basics"],
  },
  {
    name: "Conditionals and Loops",
    desc: "Explore how to use conditionals and loops in Sunflower to control the flow of your programs effectively.",
    tags: ["Intermediate", "Control Flow", "Logic"],
  },
  {
    name: "Object Oriented Programming",
    desc: "Understand the principles of object-oriented programming in Sunflower, including classes, objects, inheritance, and polymorphism.",
    tags: ["Intermediate", "OOP", "Classes"],
  },
  {
    name: "API and Cross-Language Integration",
    desc: "Learn how to integrate Sunflower with other programming languages and use its API capabilities for seamless interoperability.",
    tags: ["Advanced", "API", "Integration"],
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full pt-30 h-160 grid grid-cols-2 bg-white/30">
        <div className="px-32 py-12">
          <h1 className={`text-5xl ${heading_font.className}`}>
            The Sunflower Project
          </h1>

          <p className="mt-5 px-1 tracking-wide">
            Sunflower is a dynamically typed, Turing-complete programming
            language for scripting and automation, with a growing native
            library that supports a wide range of operations while reducing
            dependence on third-party libraries.
          </p>

          <div className="mt-8 mb-10 flex items-center space-x-3 bg-yellow-50/80 border-l-4 border-yellow-400 p-4 rounded">
            <span className="text-yellow-800 font-medium">
              This language is <span className="underline">fully open source</span> and
              welcomes community contributions!
            </span>
          </div>

          <Link
            href="#"
            className="px-6 py-4 font-bold rounded-md bg-amber-400 hover:bg-yellow-400 text-orange-950 transition"
          >
            Learn More
          </Link>

          <Link
            href="#"
            className="ml-3 px-6 py-4 font-bold rounded-md bg-green-400 hover:bg-emerald-400 text-orange-950 transition"
          >
            Download
          </Link>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className={`py-24 px-64 ${roboto_font.className}`}>
        <h1 className="text-4xl">Explore New Technologies</h1>
        <p className="mt-5 text-gray-700">
          Learn how Sunflower integrates low-level and native interfaces to
          provide a seamless workflow.
        </p>
      </section>

      {/* START BUILDING */}
      <section className="px-64 py-8 bg-gray-50">
        <h1 className="text-4xl">Start Building</h1>

        <div className="flex overflow-x-auto space-x-6 mt-8">
          {projectInfo.map((val, index) => (
            <div
              key={index}
              className="w-80 bg-white rounded-xl shadow-md p-5"
            >
              <h3 className="text-lg font-semibold">{val.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{val.desc}</p>

              <div className="flex gap-2 mt-3 flex-wrap">
                {val.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full py-32 flex flex-col items-center bg-white">
        <h1 className={`text-5xl ${quicksand_font.className}`}>
          Join the Developer Newsletter
        </h1>

        <div className="mt-10 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-lg outline-none"
          />
          <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg">
            Join
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-600">
        © 2025 Sunflower Project
      </footer>
    </div>
  );
}
