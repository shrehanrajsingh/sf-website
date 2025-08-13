import { Arima, Fira_Code, Inter, Quicksand, Roboto } from "next/font/google";
import Navbar from "../navbar";
import Link from "next/link";
import CodeBlock from "../codeblock";

const fira_code = Fira_Code({
  subsets: ["latin"],
});

const heading_font = Arima({
  subsets: ["latin"],
});

const roboto_font = Roboto({
  subsets: ["latin"],
});

const inter_font = Inter({
  subsets: ["latin"],
});

const quicksand_font = Quicksand({
  subsets: ["latin"],
});

export default function Docs() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-2 bg-slate-700/30 py-8 px-8 border-r border-r-gray-700">
          <h1 className={`${heading_font.className} text-2xl text-gray-200`}>
            Documentation
          </h1>
          <div className="h-[0.1px] w-24 mt-2 bg-white"></div>

          <div className="mt-12">
            <h1 className="text-xs text-gray-400 tracking-wide">GET STARTED</h1>

            <div className="mt-4 text-gray-300 flex flex-col gap-3">
              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Setup and Installation
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Setting up Environment
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                First Program
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Integrating with C++
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h1 className="text-xs text-gray-400 tracking-wide">
              LANGUAGE REFERENCE
            </h1>

            <div className="mt-4 text-gray-300 flex flex-col gap-3">
              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Some Utility Functions
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Loops and Conditionals
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Functional Programming
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Classes and OOPs
              </Link>

              <Link
                href={"#"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Error Handling
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-10 grid grid-rows-12 max-h-screen overflow-y-scroll">
          <div className="row-span-1 py-2 px-8 flex items-center gap-8 bg-slate-900/70 border-b border-b-gray-700 text-gray-300">
            <h1>Breadcrumb</h1>
          </div>
          <div className="row-span-11 px-16 py-16">
            <h1 className={`${inter_font.className} text-4xl text-gray-300`}>
              Welcome to Sunflower
            </h1>
            <div className="h-1 w-24 rounded-full mt-4 bg-gray-400"></div>
            <h2 className="mt-4 text-slate-400 italic">Sun Aug 3, 2025</h2>

            <p
              className={`mt-8 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              Sunflower is a dynamically-typed, memory-safe, Turing-complete
              programming language designed to streamline scripting and
              automation tasks. It offers seamless integration with{" "}
              <span className="font-mono text-green-600 underline cursor-pointer">
                C++
              </span>
              , enabling developers to offload specific tasks to Sunflower,
              thereby optimizing performance and reducing the workload on{" "}
              <span className="font-mono text-green-600 underline cursor-pointer">
                C++
              </span>
              .
            </p>

            <p
              className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              The advent of Sunflower began as a notion to make a language which
              would allow developers to write more code in fewer lines. This
              practice is often discouraged, thus the language syntax is kept
              extremely simple so even compound statements appear comprehensible
              at a glance.
            </p>

            <div
              className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              For example, here is a solution of the{" "}
              <span className="text-green-600 underline">
                Travelling Salesman
              </span>{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
