"use client";

import {Arima, Roboto, Fira_Code} from "next/font/google";

const headingFont = Arima({subsets: ["latin"]});
const bodyFont = Roboto({subsets: ["latin"]});
const codeFont = Fira_Code({subsets: ["latin"]});

export default function IntroductionPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>
      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Introduction to Sunflower
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        Sunflower is a small, interpreted programming language designed to make
        scripting, automation, and embedded logic simple, readable, and
        expressive.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">What is Sunflower?</h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Sunflower is a dynamically typed, indentation-based programming
          language implemented in C++. It is built to act as a lightweight
          scripting layer that can run standalone or be embedded inside larger
          C++ applications.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4 max-w-4xl">
          The language focuses on clarity over complexity. Instead of heavy
          syntax, Sunflower relies on indentation, readable keywords, and a
          small but powerful core feature set.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          A First Look at Sunflower Code
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Let’s look at a simple Sunflower program. You don’t need to understand
          everything yet — just observe how readable the structure is.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${codeFont.className}`}
        >
{`fun greet (name)
    if name == none
        return "Hello!"
    return "Hello, " + name

write (greet ("Sunflower"))`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          Even without prior knowledge of Sunflower, you can probably tell that
          this program defines a function, checks a condition, and prints a
          greeting. This readability is a core design goal of the language.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Core Characteristics
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li>
            <strong>Interpreted:</strong> Sunflower code is executed directly by
            the interpreter, without a separate compilation step.
          </li>
          <li>
            <strong>Dynamically Typed:</strong> Variables do not require explicit
            type declarations.
          </li>
          <li>
            <strong>Indentation-Based:</strong> Code blocks are defined by
            indentation instead of braces.
          </li>
          <li>
            <strong>Expression-Oriented:</strong> Many constructs return values
            and can be composed naturally.
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Indentation Defines Structure
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          In Sunflower, indentation is not cosmetic — it defines program
          structure. There are no braces or block-ending keywords.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${codeFont.className}`}
        >
{`if value > 10
    write ("Greater than 10")
    if value > 20
        write ("Also greater than 20")`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          This makes the visual layout of the code directly reflect its logical
          structure.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Errors Are Values
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          One of Sunflower’s most important ideas is that errors are treated as
          values instead of abrupt program crashes.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${codeFont.className}`}
        >
{`fun divide (a, b)
    if b == 0
        return ? "Division by zero"
    return a / b`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          This approach allows errors to be returned, stored, and handled
          explicitly using <code>try</code> and <code>catch</code>, which you
          will learn about later.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Where Sunflower Is Used
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li>Automation and scripting</li>
          <li>Command-line tools</li>
          <li>Embedded scripting inside C++ programs</li>
          <li>Lightweight servers and utilities</li>
          <li>Learning language design and interpreters</li>
        </ul>
      </section>

      <section className="mt-20 border-t pt-10">
        <h2 className="text-3xl mb-4 font-semibold">
          What’s Next?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          In the next section, you’ll learn how to actually run Sunflower —
          either using the cloud-based <strong>sf-studios</strong> environment
          or by installing it locally on your system.
        </p>
      </section>
    </div>
  );
}