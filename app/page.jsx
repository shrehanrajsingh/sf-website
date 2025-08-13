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

const fira_code = Fira_Code({
  subsets: ["latin"],
});

const heading_font = Arima({
  subsets: ["latin"],
});

const roboto_font = Roboto({
  subsets: ["latin"],
});

const quicksand_font = Quicksand({
  subsets: ["latin"],
});

const projectInfo = [
  {
    name: "Installation and Setup",
    desc: "Learn to download and setup Sunflower for your operating system, including configuring your development environment and running your first program.",
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
    name: "API and cross language integration",
    desc: "Learn how to integrate Sunflower with other programming languages and use its API capabilities for seamless interoperability.",
    tags: ["Advanced", "API", "Integration"],
  },
  {
    name: "Data Structures",
    desc: "Understand and implement various data structures in Sunflower, such as arrays, lists, stacks, queues, and trees.",
    tags: ["Intermediate", "Data Structures", "Algorithms"],
  },
  {
    name: "Functional Programming",
    desc: "Explore functional programming paradigms and techniques, including immutability, higher-order functions, and closures.",
    tags: ["Advanced", "Functional", "Immutability"],
  },
  {
    name: "Concurrency and Parallelism",
    desc: "Learn how to write concurrent and parallel programs in Sunflower to optimize performance and handle multiple tasks simultaneously.",
    tags: ["Advanced", "Concurrency", "Performance"],
  },
  {
    name: "Error Handling",
    desc: "Master error handling and debugging techniques in Sunflower to write robust and reliable code.",
    tags: ["Intermediate", "Debugging", "Reliability"],
  },
  {
    name: "Advanced Libraries",
    desc: "Dive into advanced libraries and frameworks supported by Sunflower to extend the functionality of your applications.",
    tags: ["Advanced", "Libraries", "Frameworks"],
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-amber-50"></div>
      <div className="fixed top-20 -left-24 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl -z-10"></div>
      <div className="fixed top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl -z-10"></div>
      <div className="fixed bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-300/20 blur-3xl -z-10"></div>
      <div className="fixed -bottom-32 right-0 w-96 h-96 rounded-full bg-green-300/30 blur-3xl -z-10"></div>

      <Navbar />
      <section className="w-full pt-30 h-160 grid grid-cols-2 relative backdrop-blur-[2px] bg-white/30">
        <div className="px-32 py-12">
          <h1 className={`text-5xl ${heading_font.className}`}>
            The Sunflower Project
          </h1>
          <p className="mt-5 px-1 tracking-wide">
            Sunflower is a dynamically typed, Turing Complete, programming
            language for scripting and automation, with a focus on a growing
            native library that supports various operations eliminating
            dependence on third party libraries.
          </p>

          <div className="mt-8 mb-10 flex items-center space-x-3 bg-yellow-50/80 backdrop-blur-sm border-l-4 border-yellow-400 p-4 rounded shadow-sm">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <span className="text-yellow-800 font-medium">
              This language is{" "}
              <span className="underline decoration-yellow-500">
                fully open sourced
              </span>{" "}
              and welcomes community contributions!
            </span>
          </div>

          <Link
            href={"#"}
            className="mt-5 px-6 py-4 font-bold rounded-md shadow-lg bg-amber-400 hover:bg-yellow-400 text-orange-950 hover:shadow-xl transition-all duration-150"
          >
            Learn more
          </Link>
          <Link
            href={"#"}
            className="mt-5 ml-3 px-6 py-4 font-bold rounded-md shadow-lg bg-green-400 hover:bg-emerald-400 text-orange-950 hover:shadow-xl transition-all duration-150"
          >
            Download
          </Link>
        </div>
        <div className="flex">
          <div className="w-4/5 bg-[#1e1e1e] border border-gray-800 h-4/5 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 backdrop-blur-sm bg-opacity-95">
            <div className="border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 rounded-t-xl px-4 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center group cursor-pointer hover:bg-red-600 transition-colors">
                  <svg
                    className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center group cursor-pointer hover:bg-yellow-600 transition-colors">
                  <svg
                    className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 5H4v2h16V5z" />
                  </svg>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center group cursor-pointer hover:bg-green-600 transition-colors">
                  <svg
                    className="w-1.5 h-1.5 text-green-800 opacity-0 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 8h16v8H4z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-400 font-medium">
                sunflower.sf
              </div>
              <div className="w-4"></div>
            </div>

            <div
              className="p-4 font-mono text-sm overflow-hidden h-full"
              style={{ fontFamily: fira_code.style.fontFamily }}
            >
              <div className="flex">
                <div className="text-gray-500 pr-4 select-none border-r border-gray-700 mr-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="py-0.5">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="text-gray-300 flex-1">
                  <div className="py-0.5">
                    <span className="text-purple-400">fun</span>{" "}
                    <span className="text-blue-400">fibonacci </span>(
                    <span className="text-orange-400">n</span>)
                  </div>
                  <div className="py-0.5 pl-4">
                    <span className="text-purple-400">if</span> n &lt;={" "}
                    <span className="text-yellow-400">1</span>
                  </div>
                  <div className="py-0.5 pl-8">
                    <span className="text-purple-400">return</span> n
                  </div>
                  <div className="py-0.5 pl-4">
                    <span className="text-purple-400">return</span> fibonacci(n
                    - <span className="text-yellow-400">1</span>) + fibonacci(n
                    - <span className="text-yellow-400">2</span>)
                  </div>
                  <div className="py-0.5"></div>
                  <div className="py-0.5">
                    <span className="text-green-400">
                      # Calculate and print the 10th Fibonacci number
                    </span>
                  </div>
                  <div className="py-0.5">
                    <span className="text-blue-400">write </span>(
                    <span className="text-blue-300">"Result: "</span> +
                    fibonacci(<span className="text-yellow-400">10</span>))
                  </div>
                </div>
              </div>
              <div className="w-full border-t border-t-gray-700 mt-4">
                <div className="py-4 text-gray-300">
                  <div className="flex items-center">
                    <span className="text-green-400">user@sunflower</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$</span>
                    <span className="ml-2">sunflower fibonacci.sf</span>
                  </div>
                  <div className="mt-2 text-amber-300 mb-1">Result: 55</div>
                  <span className="text-green-400">user@sunflower</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">$</span>
                  <span className="ml-1 inline-block relative top-1 w-1.5 h-5 bg-gray-300 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-24 px-64 ${roboto_font.className} relative backdrop-blur-sm bg-gradient-to-r from-white/40 to-white/60`}
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl -z-10"></div>

        <h1 className="text-4xl">Explore new technologies</h1>
        <p className="mt-5 text-md text-gray-700">
          Learn how Sunflower integrates low level and native interfaces to
          provide a seemless workflow.
        </p>

        <div className="grid grid-cols-3 mt-16 gap-8">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="overflow-hidden">
              <Image
                src={Card1JPG}
                alt="card"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="py-8 px-6 border-l-4 border-indigo-400">
              <h1 className="text-2xl font-semibold text-gray-800">
                Read the Whitepaper
              </h1>
              <div className="w-16 h-1 bg-indigo-400 mt-3 mb-4 rounded-full"></div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Discover the core principles, design decisions, and technical
                details behind Sunflower. The whitepaper covers the language's
                syntax, type system, native library integration, and future
                roadmap, providing a comprehensive overview for developers and
                contributors.
              </p>
              <div className="mt-6">
                <button className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="overflow-hidden">
              <Image
                src={Card2JPG}
                alt="card"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="py-8 px-6 border-l-4 border-emerald-400">
              <h1 className="text-2xl font-semibold text-gray-800">
                Meet the Community
              </h1>
              <div className="w-16 h-1 bg-emerald-400 mt-3 mb-4 rounded-full"></div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Connect with passionate developers, language enthusiasts, and
                contributors from around the world. The Sunflower community is
                dedicated to collaboration, knowledge sharing, and supporting
                newcomers. Join discussions, contribute to the codebase, and
                help shape the future of the language together.
              </p>
              <div className="mt-6">
                <button className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                  Go to Community
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="overflow-hidden">
              <Image
                src={Card3JPG}
                alt="card"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="py-8 px-6 border-l-4 border-yellow-400">
              <h1 className="text-2xl font-semibold text-gray-800">
                Developer&apos;s Portfolio
              </h1>
              <div className="w-16 h-1 bg-yellow-400 mt-3 mb-4 rounded-full"></div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Explore the creator's journey in building Sunflower, from
                initial concept to a robust, community-driven language.Visit the
                developer's GitHub at{" "}
                <a
                  href="https://github.com/shrehanrajsingh"
                  target="_blank"
                  className="underline text-yellow-600 hover:text-yellow-700"
                >
                  github.com/shrehanrajsingh
                </a>{" "}
                or their personal website at{" "}
                <a
                  href="https://shrehanrajsingh.me"
                  target="_blank"
                  className="underline text-yellow-600 hover:text-yellow-700"
                >
                  shrehanrajsingh.me
                </a>{" "}
                to learn more and connect.
              </p>
              <div className="mt-6">
                <button className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-64 py-8 relative bg-gradient-to-br from-gray-50/40 to-white/60 backdrop-blur-sm">
        <div className="absolute top-40 -left-32 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl -z-10"></div>

        <h1 className="text-4xl">Start Building</h1>

        <div className="mt-8 mb-16">
          <p className="text-gray-600 mb-6">
            Explore these example projects and templates to jumpstart your
            Sunflower development journey.
          </p>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 snap-x scrollbar-hide">
            {projectInfo.map((val, index) => (
              <div
                key={index}
                className="flex-none w-80 snap-start rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/40 z-10"></div>
                  <img
                    src={`https://picsum.photos/800/600`}
                    alt="Project example"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm z-20">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <h3 className="font-medium text-lg">{val.name}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {val.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-3">
                    {val.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-2 w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center transition-colors duration-200 text-sm font-medium">
                    View Template
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-32 px-64 flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-purple-50/30 -z-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>

        <h1 className={`text-5xl ${quicksand_font.className} font-semibold`}>
          Join the Developer Newsletter
        </h1>

        <div className="mt-16 flex gap-0">
          <input
            type="text"
            className="bg-white/80 backdrop-blur-sm outline-none px-4 py-2 w-128 rounded-l-lg border border-gray-300"
            autoCorrect="off"
            autoComplete="off"
            placeholder="Enter your email"
          />

          <button className="bg-green-600 hover:bg-green-700 transition-all duration-150 px-6 py-3 text-white font-bold cursor-pointer rounded-r-lg">
            Join
          </button>
        </div>
      </section>

      <section className="w-full py-32 px-64 flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl text-left w-full">Dive into the Blog</h1>

        <div className="grid grid-cols-3 gap-16 mt-16 w-full">
          {[
            {
              title: "Getting Started with Sunflower: A Beginner's Guide",
              date: "May 15, 2023",
              author: "Alex Johnson",
              authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
              excerpt:
                "Learn the basics of Sunflower programming language and start building your first application with this comprehensive guide for beginners.",
              imgSrc:
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              title:
                "Advanced Patterns in Functional Programming with Sunflower",
              date: "June 22, 2023",
              author: "Sarah Chen",
              authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
              excerpt:
                "Explore advanced functional programming techniques in Sunflower and how they can help you write more elegant and maintainable code.",
              imgSrc:
                "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              title: "Building Cross-Platform Applications with Sunflower",
              date: "July 8, 2023",
              author: "Michael Torres",
              authorImg: "https://randomuser.me/api/portraits/men/67.jpg",
              excerpt:
                "Discover how Sunflower's native library integration makes it perfect for developing applications that work seamlessly across multiple platforms.",
              imgSrc:
                "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  {/* <img
                    src={post.authorImg}
                    alt={post.author}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                  /> */}
                  <span className="mr-1">
                    <svg
                      className="w-8 h-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="10" cy="10" r="10" />
                      <circle cx="10" cy="8" r="3" fill="white" />
                      <ellipse cx="10" cy="15" rx="5" ry="3" fill="white" />
                    </svg>
                  </span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <button className="mt-auto text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center transition-colors">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-16 px-8 py-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-colors duration-150 flex items-center">
          More on the blog channel
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </section>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="px-64 pt-16 pb-10">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="mb-6 pr-10 w-64">
              <a href="#" className="text-gray-900 flex items-center mb-4">
                <Image
                  src={SunflowerPNG}
                  alt="Sunflower Logo"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="font-semibold">Sunflower Project</span>
              </a>
              <p className="text-sm text-gray-600 mb-2">
                Building the next generation programming language for everyone.
              </p>
            </div>

            <div className="mb-6 w-40">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Product
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Libraries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Packages
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 w-40">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Discussions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 w-40">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Platform
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 w-40">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Company
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-wrap items-center justify-between">
            <ul className="flex flex-wrap space-x-6 mb-4 sm:mb-0">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  © 2025 Sunflower Project
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Help
                </a>
              </li>
            </ul>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.5 14.077c-1.373.049-3.55.218-5.006-1.238a5.396 5.396 0 01-1.825-3.294c-.17-.461-.037-1.284.275-1.495.205-.139.498-.09.668.051.347.29.263.74.365 1.106.102.366.245.864.444 1.178.123.193.328.297.577.118.248-.179.168-.441.132-.665-.159-.99.031-2.539-.76-2.978-.195-.11-.37-.229-.405-.54-.38-3.349 4.326-3.088 5.398-2.768.979.29.886 3.355.85 4.178-.028.65.058 1.96-.224 2.438-.192.326-.578.29-.945.175-.89-.283-1.238-1.278-1.284-2.176.037-.714-.359-.93-.794-.909-.435.021-.757.342-.757.78 0 2.088 1.932 3.194 3.84 3.094.926-.05 1.774-.228 2.486-.878.982-.903 1.192-2.535.97-3.827-.36-2.093-1.593-2.86-3.061-3.2-1.077-.25-2.238-.329-3.1.437-.338.3-.554.84-.662 1.33-.1.45-.096 1.2.432 1.298.446.083.896-.262.896-.262.209-.18.314-.537.38-.872.91-4.666 9.047-5.033 9.047 1.31 0 4.903-3.617 5.587-5.847 5.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
