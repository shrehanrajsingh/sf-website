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

export default function Setup() {
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
                className="text-white py-2 bg-gray-500/20 px-4 rounded-r-lg border-l-2 border-l-gray-500"
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
              Setup and Installation
            </h1>
            <div className="h-1 w-24 rounded-full mt-4 bg-gray-400"></div>
            <h2 className="mt-4 text-slate-400 italic">Fri Aug 22, 2025</h2>

            <p
              className={`mt-8 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              Sunflower is an open source language that invites contributions
              from all over the world. It was built as a hobby project because I
              love working with languages and I wanted to bring the best
              features of different languages into one intuitive and self
              sufficient language (almost no dependence on third party
              libraries)
            </p>

            <p
              className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              The project and it&apos;s source tree is available on Github as a
              C++/CMake project. The{" "}
              <span className="text-green-600 bg-gray-800 px-1 rounded-sm">
                main
              </span>{" "}
              branch stores the current iteration of the language being
              developed. Different branches exist for different production-ready
              versions of Sunflower.
              <br />
              <br />
              At the time of writing this article, there is no production-ready
              release of the language and the only important branch is the{" "}
              <span className="text-green-600 bg-gray-800 px-1 rounded-sm">
                main
              </span>{" "}
              branch — which is not, and never will be, production-ready.
            </p>

            <div
              className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
            >
              For building from source, you can clone/fork the
              <Link href={"https://github.com/shrehanrajsingh/sunflower-cpp"}>
                Github repository
              </Link>{" "}
              and build as a CMake project.
              <br />
              <p
                className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
              >
                Clone the repository:
              </p>
              <CodeBlock>
                $ git clone https://github.com/shrehanrajsingh/sunflower-cpp.git
              </CodeBlock>
              <p
                className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
              >
                Make the build directory:
              </p>
              <CodeBlock>$ mkdir build && cd build</CodeBlock>
              <CodeBlock>
                $ cmake --build .. --config Debug --target all -j4
              </CodeBlock>
              <p
                className={`mt-6 text-lg text-gray-300/80 ${inter_font.className}`}
              >
                Sunflower executable will be present in{" "}
                <span className="text-green-600 bg-gray-800 px-1 rounded-sm font-mono">
                  build/bin
                </span>{" "}
                . You can also download from the Github repository&apos;s
                release sections. It has executables and installers for
                different Operating Systems.
                <br />
                <span className="text-green-600 bg-gray-800 rounded-sm font-mono text-sm py-1 px-3 cursor-pointer">
                  See which is the required installer for you
                </span>{" "}
              </p>
              <br />
              {/* <p
                className={`mt-6 max-w-2/3 text-lg text-gray-300/80 ${inter_font.className}`}
              >
                The output should be as follows:
              </p>
              <CodeBlock>80</CodeBlock> */}
              <div className="grid grid-cols-2 gap-16">
                <div className="w-full bg-gray-600/40 px-4 py-2 rounded-sm">
                  <Link
                    href={"/docs"}
                    className="hover:text-white cursor-pointer"
                  >
                    <span className="inline-block mr-2 text-xl text-gray-300">
                      &#8249;
                    </span>
                    Previous
                  </Link>
                </div>

                <div className="w-full bg-gray-600/40 px-4 py-2 rounded-sm text-right">
                  <Link
                    href={"/docs/environment"}
                    className="hover:text-white cursor-pointer"
                  >
                    Next: Setting up Environment
                    <span className="inline-block ml-2 text-xl text-gray-300">
                      &#8250;
                    </span>
                  </Link>
                </div>
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
