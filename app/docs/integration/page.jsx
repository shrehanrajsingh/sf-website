import { Arima, Fira_Code, Inter, Quicksand, Roboto } from "next/font/google";
import Navbar from "../../navbar";
import Link from "next/link";
import CodeBlock from "../../codeblock";

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

export default function Integration() {
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
                href={"/docs/setup"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Setup and Installation
              </Link>

              <Link
                href={"/docs/environment"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                Setting up Environment
              </Link>

              <Link
                href={"/docs/first-program"}
                className="hover:text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-transparent hover:border-l-gray-500"
              >
                First Program
              </Link>

              <Link
                href={"/docs/integration"}
                className="text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-gray-500"
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
              Integrating with C++
            </h1>
            <div className="h-1 w-24 rounded-full mt-4 bg-gray-400"></div>
            <h2 className="mt-4 text-slate-400 italic">Sat Aug 26, 2025</h2>

            <p
              className={`mt-8 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              This article is private.
            </p>

            <div
              className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              <div className="grid grid-cols-2 gap-16">
                <div className="w-full bg-gray-600/40 px-4 py-2 rounded-sm">
                  <Link
                    href={"/docs/first-program"}
                    className="hover:text-white cursor-pointer"
                  >
                    <span className="inline-block mr-2 text-xl text-gray-300">
                      &#8249;
                    </span>
                    Previous: First Program
                  </Link>
                </div>

                {/* <div className="w-full bg-gray-600/40 px-4 py-2 rounded-sm text-right">
                  <Link
                    href={"/docs/first-program"}
                    className="hover:text-white cursor-pointer"
                  >
                    Next: First Program
                    <span className="inline-block ml-2 text-xl text-gray-300">
                      &#8250;
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
