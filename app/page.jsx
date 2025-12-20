"use client";

import Image from "next/image";
import Navbar from "./navbar";
import SunflowerPNG from "./assets/sunflower.png";
import { Arima, Fira_Code, Quicksand, Roboto } from "next/font/google";
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
  weight: ["400", "500", "700"],
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
    imgID:10,
  },
  {
    name: "Hello World",
    desc: "Get started with Sunflower by writing your first 'Hello World' program and understanding the basics of its syntax.",
    tags: ["Beginner", "Syntax", "Basics"],
    imgId: 20,
  },
  {
    name: "Conditionals and Loops",
    desc: "Explore how to use conditionals and loops in Sunflower to control the flow of your programs effectively.",
    tags: ["Intermediate", "Control Flow", "Logic"],
    imgId: 30,
  },
  {
    name: "Object Oriented Programming",
    desc: "Understand the principles of object-oriented programming in Sunflower, including classes, objects, inheritance, and polymorphism.",
    tags: ["Intermediate", "OOP", "Classes"],
    imgId: 40,
  },
  {
    name: "API and cross language integration",
    desc: "Learn how to integrate Sunflower with other programming languages and use its API capabilities for seamless interoperability.",
    tags: ["Advanced", "API", "Integration"],
    imgId: 50,
  },
  {
    name: "Data Structures",
    desc: "Understand and implement various data structures in Sunflower, such as arrays, lists, stacks, queues, and trees.",
    tags: ["Intermediate", "Data Structures", "Algorithms"],
    imgId: 60,
  },
  {
    name: "Functional Programming",
    desc: "Explore functional programming paradigms and techniques, including immutability, higher-order functions, and closures.",
    tags: ["Advanced", "Functional", "Immutability"],
    imgId: 70,
  },
  {
    name: "Concurrency and Parallelism",
    desc: "Learn how to write concurrent and parallel programs in Sunflower to optimize performance and handle multiple tasks simultaneously.",
    tags: ["Advanced", "Concurrency", "Performance"],
    imgId: 80,
  },
  {
    name: "Error Handling",
    desc: "Master error handling and debugging techniques in Sunflower to write robust and reliable code.",
    tags: ["Intermediate", "Debugging", "Reliability"],
    imgId: 90,
  },
  {
    name: "Advanced Libraries",
    desc: "Dive into advanced libraries and frameworks supported by Sunflower to extend the functionality of your applications.",
    tags: ["Advanced", "Libraries", "Frameworks"],
    imgId: 100,
  },
];

const blogPosts = [
    {
      title: "Getting Started with Sunflower",
      date: "May 15, 2023",
      author: "Alex Johnson",
      excerpt: "Learn the basics of Sunflower programming language.",
      imgSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Advanced Patterns",
      date: "June 22, 2023",
      author: "Sarah Chen",
      excerpt: "Explore advanced functional programming techniques.",
      imgSrc: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Cross-Platform Apps",
      date: "July 8, 2023",
      author: "Michael Torres",
      excerpt: "Discover Sunflower's native library integration.",
      imgSrc: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=500&q=60",
    },
];

export default function Home() {
    return (
    <div className={`relative overflow-x-hidden ${roboto_font.className}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-amber-50" />
      <div className="fixed top-20 -left-24 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl -z-10 animate-pulse" />
      <div className="fixed top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl -z-10" />
      
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className={`text-5xl lg:text-7xl font-bold text-gray-900 leading-tight ${heading_font.className}`}>
              The Sunflower <br/> <span className="text-amber-500">Project</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Sunflower is a dynamically typed, Turing Complete programming language for scripting and automation.
              It focuses on a growing native library to eliminate third-party dependencies.
            </p>

            <div className="flex items-center space-x-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-sm w-full max-w-md">
              <span className="text-yellow-800 font-medium text-sm">
                Fully <span className="underline decoration-yellow-500 decoration-2">open source</span> and community driven!
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#"
                className="px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Learn more
              </Link>
              <Link
                href="#"
                className="px-8 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-emerald-950 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Download
              </Link>
            </div>
          </div>

          {/* Right Code Block Visual */}
          <div className="relative group perspective-1000">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
             <div className="relative bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-transform duration-500 hover:rotate-1">
                {/* Code Window Header */}
                <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">sunflower.sf</div>
                </div>
                
                {/* Code Content */}
                <div className={`p-6 text-sm md:text-base overflow-x-auto ${fira_code.className}`}>
                  <div className="text-gray-300">
                    <div><span className="text-purple-400">fun</span> <span className="text-blue-400">fibonacci</span>(n)</div>
                    <div className="pl-4"><span className="text-purple-400">if</span> n &lt;= <span className="text-yellow-400">1</span></div>
                    <div className="pl-8"><span className="text-purple-400">return</span> n</div>
                    <div className="pl-4"><span className="text-purple-400">return</span> fib(n-<span className="text-yellow-400">1</span>) + fib(n-<span className="text-yellow-400">2</span>)</div>
                    <div className="mt-4 text-gray-500 italic"># Calculate 10th number</div>
                    <div><span className="text-blue-400">write</span>(<span className="text-green-300">"Result: "</span> + fib(<span className="text-yellow-400">10</span>))</div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700 text-gray-300 text-xs md:text-sm">
                    <span className="text-green-400">user@sf</span>:<span className="text-blue-400">~</span>$ sunflower main.sf
                    <br />
                    <span className="text-amber-300">Result: 55</span>
                    <span className="ml-2 inline-block w-2 h-4 bg-gray-400 animate-pulse align-middle" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Feature Cards Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore New Technologies</h2>
                <p className="text-lg text-gray-600">Discover how Sunflower integrates low-level interfaces for a seamless workflow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                    image={Card1JPG} 
                    title="Read the Whitepaper" 
                    color="indigo" 
                    desc="Discover the core principles, design decisions, and technical details behind Sunflower."
                />
                <FeatureCard 
                    image={Card2JPG} 
                    title="Meet the Community" 
                    color="emerald" 
                    desc="Connect with passionate developers, language enthusiasts, and contributors from around the world."
                />
                <FeatureCard 
                    image={Card3JPG} 
                    title="Developer's Portfolio" 
                    color="amber" 
                    desc="Explore the creator's journey in building Sunflower from initial concept to a robust language."
                    link={{ text: "github.com/shrehanrajsingh", url: "https://github.com/shrehanrajsingh" }}
                />
            </div>
        </div>
      </section>

      {/* Projects Scroller */}
      <section className="py-24 overflow-hidden">
         <div className="container mx-auto px-4 md:px-8">
             <h2 className="text-4xl font-bold text-gray-900 mb-8">Start Building</h2>
             <p className="text-gray-600 mb-12 max-w-2xl">Explore these example projects and templates to jumpstart your development.</p>
             
             {/* Horizontal Scroll Container */}
             <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 snap-x scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {projectInfo.map((project, idx) => (
                    <div key={idx} className="flex-none w-80 snap-start bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                        <div className="relative h-48 bg-gray-200">
                           <Image 
                              src={`https://picsum.photos/seed/${project.imgId || idx}/400/300`} 
                              alt={project.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 320px"
                              className="object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                           <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">{project.name}</h3>
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.desc}</p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
             <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${quicksand_font.className}`}>Join the Developer Newsletter</h2>
             <div className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-2">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                 />
                 <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold rounded-lg transition-colors">
                    Subscribe
                 </button>
             </div>
         </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Latest from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                        <div className="relative h-56">
                            <img src={post.imgSrc} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-2">
                                <span className="font-medium text-gray-900">{post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                            <a href="#" className="text-indigo-600 font-medium text-sm hover:underline mt-auto inline-flex items-center">
                                Read article
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
                <Image src={SunflowerPNG} alt="Logo" width={32} height={32} className="mr-3" />
                <span className="font-bold text-lg text-gray-900">Sunflower Project</span>
            </div>
            <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Sunflower Project. Open sourced under MIT.
            </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Component for Feature Cards to keep code clean
function FeatureCard({ image, title, color, desc, link }) {
    const colorClasses = {
        indigo: "border-indigo-500 text-indigo-600 hover:text-indigo-700",
        emerald: "border-emerald-500 text-emerald-600 hover:text-emerald-700",
        amber: "border-amber-500 text-amber-600 hover:text-amber-700",
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
            <div className="h-48 overflow-hidden">
                <Image src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" placeholder="blur" />
            </div>
            <div className={`p-6 border-l-4 ${colorClasses[color].split(" ")[0]}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
                {link && (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm underline mb-4 block decoration-gray-300 underline-offset-2">
                        {link.text}
                    </a>
                )}
                <button className={`flex items-center font-medium text-sm ${colorClasses[color]} transition-colors`}>
                    Read More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
  }