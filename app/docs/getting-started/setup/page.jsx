"use client";

import { Arima, Roboto, Fira_Code } from "next/font/google";

const headingFont = Arima({ subsets: ["latin"] });
const bodyFont = Roboto({ subsets: ["latin"] });
const codeFont = Fira_Code({ subsets: ["latin"] });

export default function SetupPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>
      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Setup and Installation
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        This section explains the different ways you can run Sunflower and helps
        you choose the setup that best fits your needs.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Ways to Run Sunflower
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Sunflower can be used in three primary ways. You do not need to choose
          all of them — most users will only use one.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 max-w-4xl">
          <li>
            <strong>sf-studios (Cloud IDE):</strong> The easiest way to get
            started. No installation required.
          </li>
          <li>
            <strong>Local Installation:</strong> Best for offline use and
            contributors.
          </li>
          <li>
            <strong>Embedded in C++:</strong> Advanced usage for integrating
            Sunflower into native applications.
          </li>
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl mb-4 font-semibold">
          Using sf-studios (Cloud IDE)
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          sf-studios is a browser-based development environment for Sunflower.
          It allows you to write, run, and experiment with Sunflower code
          without installing anything on your system.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4 max-w-4xl">
          This is the recommended option if you are:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 max-w-4xl">
          <li>Completely new to Sunflower</li>
          <li>Trying the language for the first time</li>
          <li>Learning on a device where installation is not convenient</li>
        </ul>

        <div className="mt-10">
          <h3 className="text-2xl mb-3 font-semibold">
            Creating Your First Project
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            When you create a new project in sf-studios, you will typically see
            a simple file structure with a main Sunflower file.
          </p>

          <pre
            className={`bg-gray-900 text-gray-100 p-6 rounded-lg mt-6 ${codeFont.className}`}
          >
{`project/
└── main.sf`}
          </pre>

          <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
            The <code>main.sf</code> file is the entry point of your program.
            This is where execution starts.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl mb-3 font-semibold">
            Running Code in sf-studios
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
            To run your program, simply click the run button in the editor.
            Output and errors will appear in the console panel.
          </p>

          <pre
            className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
          >
{`write ("Hello from sf-studios!")`}
          </pre>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl mb-4 font-semibold">
          Installing Sunflower Locally
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Local installation is recommended if you want to work offline or
          contribute to Sunflower’s development.
        </p>

        <h3 className="text-2xl mt-8 mb-3 font-semibold">
          Requirements
        </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-4xl">
          <li>C++ compiler (GCC, Clang, or MSVC)</li>
          <li>CMake</li>
          <li>A modern operating system</li>
        </ul>

        <h3 className="text-2xl mt-8 mb-3 font-semibold">
          Building from Source
        </h3>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`git clone https://github.com/your-org/sunflower
cd sunflower
mkdir build && cd build
cmake ..
cmake --build .`}
        </pre>

        <h3 className="text-2xl mt-8 mb-3 font-semibold">
          Running a Script
        </h3>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`sunflower main.sf`}
        </pre>
      </section>
    </div>
  );
}