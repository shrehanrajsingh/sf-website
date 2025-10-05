"use client";
import React, { useState, useMemo } from "react";
import CodeBlock from "../codeblock";
import Link from "next/link";

const documentationSections = [
  {
    id: "introduction",
    title: "Introduction",
    category: "Getting Started",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Introduction to Sunflower
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sunflower is a dynamically-typed, memory-safe, Turing-complete
          programming language designed to streamline scripting and automation
          tasks. It offers seamless integration with{" "}
          <span className="font-mono text-cyan-600 underline cursor-pointer">
            C++
          </span>
          , enabling developers to offload specific tasks to Sunflower, thereby
          optimizing performance and reducing the workload on{" "}
          <span className="font-mono text-cyan-600 underline cursor-pointer">
            C++
          </span>
        </p>
        <div className="prose max-w-none">
          <p>
            The advent of Sunflower began as a notion to make a language which
            would allow developers to write more code in fewer lines. This
            practice is often discouraged, thus the language syntax is kept
            extremely simple so even compound statements appear comprehensible
            at a glance.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Key Features:
          </h3>
          For example, here is a solution of the{" "}
          <span className="text-cyan-600 underline">Travelling Salesman</span>{" "}
          problem, written without utilizing much of the libraries:
          <CodeBlock>
            {`# Travelling Salesman Problem
# Time: O(n!), Space: O(n)
fun min (a, b)
    if a < b
        return a
    return b

fun total_cost (mask, pos, n, cost)
    if mask == (1 << n) - 1
        return cost[pos][0]
    
    ans = 1000000
    for i in 0 to n
        if not (mask & (1 << i))
            ans = min (ans, cost[pos][i] + total_cost (
                mask | (1 << i), i, n, cost
            ))
    
    return ans

fun tsp (cost, n)
    return total_cost (1, 0, n, cost)

cost = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

write (tsp (cost, 4))
                  `}
          </CodeBlock>
          <p>Run it as follows:</p>
          <CodeBlock>$ sf tsp.sf</CodeBlock>
          <p>The output should be as follows:</p>
          <CodeBlock>80</CodeBlock>
          <div className="grid grid-cols-2 gap-16">
            {/* <div className="w-full bg-gray-600/40 px-4 py-2 rounded-sm">
                  <h1>
                    <span className="inline-block mr-2 text-xl text-gray-300">
                      &#8249;
                    </span>
                    Previous
                  </h1>
                </div> */}
            <div></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "setup",
    title: "Setup and Installation",
    category: "Getting Started",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Setup and Installation
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sunflower is an open source language that invites contributions from
          all over the world. It was built as a hobby project because I love
          working with languages and I wanted to bring the best features of
          different languages into one intuitive and self sufficient language
          (almost no dependence on third party libraries)
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The project and it&apos;s source tree is available on Github as a
          C++/CMake project. The{" "}
          <span className="font-mono bg-gray-200 px-1 rounded-sm">main</span>{" "}
          branch stores the current iteration of the language being developed.
          Different branches exist for different production-ready versions of
          Sunflower.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At the time of writing this article, there is no production-ready
          release of the language and the only important branch is the{" "}
          <span className="font-mono bg-gray-200 px-1 rounded-sm">main</span>{" "}
          branch — which is not, and never will be, production-ready.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          For building from source, you can clone/fork the
          <Link
            href={"https://github.com/shrehanrajsingh/sunflower-cpp"}
            className="text-blue-600 hover:underline"
          >
            {" "}
            Github repository
          </Link>{" "}
          and build as a CMake project.
        </p>
        <p className="text-lg text-gray-700 mb-2">Clone the repository:</p>
        <CodeBlock>
          $ git clone https://github.com/shrehanrajsingh/sunflower-cpp.git
        </CodeBlock>
        <p className="text-lg text-gray-700 mb-2 mt-4">
          Make the build directory:
        </p>
        <CodeBlock>$ mkdir build && cd build</CodeBlock>
        <CodeBlock>
          $ cmake --build .. --config Debug --target all -j4
        </CodeBlock>
        <p className="text-lg text-gray-700 mb-6 mt-4">
          Sunflower executable will be present in{" "}
          <span className="font-mono bg-gray-200 px-1 rounded-sm">
            build/bin
          </span>
          . You can also download from the Github repository&apos;s release
          sections. It has executables and installers for different Operating
          Systems.
        </p>
      </div>
    ),
  },
  {
    id: "environment",
    title: "Setting up Environment",
    category: "Getting Started",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Setting up Environment
        </h1>
        <p className="text-lg text-gray-700 mb-6">This article is private.</p>
      </div>
    ),
  },
  {
    id: "integration",
    title: "Integrating with C++",
    category: "Getting Started",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Integrating with C++
        </h1>
        <p className="text-lg text-gray-700 mb-6">This article is private.</p>
      </div>
    ),
  },
  {
    id: "first-program",
    title: "First Program",
    category: "Getting Started",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your First Program
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Let's start with the classic "Hello, World!" program. Create a new
          file named `hello.sf` and add the following code:
        </p>
        <CodeBlock
          code={`# hello.sf
write ('Hello, World!')`}
        />
        <p className="mt-6 text-gray-700">
          To compile and run your program, use the `flow run` command in your
          terminal:
        </p>
        <CodeBlock code={`$ sf hello.sf`} language="bash" />
        <p className="mt-6 text-gray-700">
          You should see the output "Hello, World!" printed to the console.
          Congratulations, you've just run your first Sunflower program!
        </p>
      </div>
    ),
  },
  {
    id: "data-types",
    title: "Data Types",
    category: "Language Guide",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Types</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sunflower has a rich set of built-in data types to handle various
          kinds of data.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Primitive Types
        </h3>
        <div className="prose max-w-none">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>int:</strong> Signed integers (e.g., -10, 0, 42).
            </li>
            <li>
              <strong>float:</strong> Floating-point numbers (e.g., 3.14,
              -0.001).
            </li>
            <li>
              <strong>bool:</strong> Boolean values (`true` or `false`).
            </li>
            <li>
              <strong>string:</strong> A sequence of UTF-8 characters (e.g.,
              "hello").
            </li>
            <li>
              <strong>none:</strong> Represents the absence of a value.
            </li>
          </ul>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Type Declarations
        </h3>
        <CodeBlock
          code={`score = 100
temperature = 98.6
isActive = true
name = "Alice"`}
        />
      </div>
    ),
  },
  {
    id: "control-flow",
    title: "Control Flow",
    category: "Language Guide",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Control Flow</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sunflower provides standard control flow statements like `if`, `else`,
          and `for` loops.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Conditional Statements
        </h3>
        <CodeBlock
          code={`number = 10

if number > 5
    write ("Number is greater than 5")
else if number < 5
    write ("Number is less than 5")
else
    write ("Number is exactly 5")
`}
        />
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          For Loops
        </h3>
        <CodeBlock
          code={`# For loop with steps
for i in 0 to 20 step 2
    write (i)
`}
        />
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          While Loops
        </h3>
        <CodeBlock
          code={`# Factorial using while loop
[i, f, n] = [1, 1, 50]
while i <= n
    f *= i
    i += 1
`}
        />
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Repeat Loop
        </h3>
        <CodeBlock
          code={`# Calculate e using Taylor's series up to 50 terms
[e, f, c] = [0, 1, 1]
repeat 50
  e += 1 / f
  f *= c
  c += 1
write ("e: ", e)

`}
        />

        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg">
          <span className="font-bold text-lg text-yellow-600">Note:</span>{" "}
          Repeat loops execute their body a fixed number of times, determined by
          a constant integer evaluated once at the start of the loop. Any
          subsequent changes to this constant within the loop are ignored.
        </div>
      </div>
    ),
  },
  {
    id: "functions",
    title: "Functions",
    category: "Language Guide",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Functions</h1>
        <p className="text-lg text-gray-700 mb-6">
          Functions are fundamental building blocks in Sunflower.
        </p>
        <CodeBlock
          code={`# Implementation of Tower of Hanoi (recursive)
fun tower_of_hanoi (number_of_disks, source, auxiliary, destination)
  # base case: take one disk and move it from source to destination
  if number_of_disks == 1
    write ("Move disk 1 from", source, "to", destination)
    return
  
  # move the top (N-1) disks from source to auxiliary
  tower_of_hanoi (number_of_disks - 1, source, destination, auxiliary)

  # move the remaining disk from source to destination
  write ("Move disk", number_of_disks, "from", source, "to", destination)

  # move the (N-1) disks in auxiliary to destination
  tower_of_hanoi (number_of_disks - 1, auxiliary, source, destination)
            `}
        />
      </div>
    ),
  },
  {
    id: "modules",
    title: "Modules",
    category: "Advanced Topics",
    content: () => (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Modules</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sunflower uses a module system to organize code into reusable and
          maintainable units.
        </p>
        <CodeBlock
          code={`# In math.sf
fun add (a, b)
  return a + b

# In main.sf
import 'math.sf' as math

write (math.add (10, 15)) # output: 25`}
        />
      </div>
    ),
  },
];

// const CodeBlock = ({ code, language }) => (
//   <div className="bg-gray-900 rounded-lg my-6">
//     <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
//       <span className="text-xs font-sans text-gray-400">{language}</span>
//       <button
//         onClick={() => navigator.clipboard.writeText(code)}
//         className="text-xs text-gray-400 hover:text-white transition-colors"
//         aria-label="Copy code"
//       >
//         Copy
//       </button>
//     </div>
//     <pre className="p-4 text-sm text-white overflow-x-auto">
//       <code className={`language-${language}`}>{code}</code>
//     </pre>
//   </div>
// );

const Breadcrumb = ({ activeSection }) => {
  if (!activeSection) return null;
  return (
    <nav className="text-sm font-medium text-gray-500" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <span className="text-gray-400">Docs</span>
          <svg
            className="fill-current w-3 h-3 mx-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="text-gray-400">{activeSection.category}</span>
          <svg
            className="fill-current w-3 h-3 mx-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="text-gray-800">{activeSection.title}</span>
        </li>
      </ol>
    </nav>
  );
};

const Sidebar = ({
  sections,
  activeSectionId,
  setActiveSectionId,
  searchQuery,
}) => {
  const groupedSections = useMemo(() => {
    const filtered = sections.filter((section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered.reduce((acc, section) => {
      (acc[section.category] = acc[section.category] || []).push(section);
      return acc;
    }, {});
  }, [sections, searchQuery]);

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-50 border-r border-gray-200 p-5 overflow-y-auto">
      <div className="font-bold text-xl text-gray-800 mb-8 group">
        <Link
          href={"/"}
          className="bg-gradient-to-b from-yellow-300 to-yellow-600 text-transparent bg-clip-text"
        >
          Sunflower
        </Link>{" "}
        Docs
      </div>
      <nav>
        {Object.entries(groupedSections).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {category}
            </h3>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSectionId(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer ${
                      activeSectionId === item.id
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

const TopBar = ({ activeSection, searchQuery, setSearchQuery }) => (
  <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-8 z-10">
    <Breadcrumb activeSection={activeSection} />
    <div className="relative">
      <input
        type="search"
        placeholder="Search documentation..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        aria-label="Search documentation"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </header>
);

const MainContent = ({ activeSection }) => {
  const ContentComponent = activeSection?.content;
  return (
    <main className="ml-64 pt-24 p-8">
      <div className="max-w-4xl mx-auto">
        {ContentComponent ? <ContentComponent /> : <p>Select a section</p>}
      </div>
    </main>
  );
};

export default function DocsPage() {
  const [activeSectionId, setActiveSectionId] = useState(
    documentationSections[0].id
  );
  const [searchQuery, setSearchQuery] = useState("");

  const activeSection = useMemo(
    () => documentationSections.find((s) => s.id === activeSectionId),
    [activeSectionId]
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <Sidebar
        sections={documentationSections}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        searchQuery={searchQuery}
      />
      <div className="">
        <TopBar
          activeSection={activeSection}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}
