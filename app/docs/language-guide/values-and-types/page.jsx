"use client";

import { Arima, Roboto, Fira_Code } from "next/font/google";

const headingFont = Arima({ subsets: ["latin"] });
const bodyFont = Roboto({ subsets: ["latin"] });
const codeFont = Fira_Code({ subsets: ["latin"] });

export default function ValuesAndTypesPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>

      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Values and Types
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        This section explains how values and types work in Sunflower. Sunflower
        is dynamically typed, meaning types are handled automatically at
        runtime.
      </p>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Dynamic Typing
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          In Sunflower, variables do not have fixed types. Instead, values carry
          their own types, and variables simply reference those values.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`x = 10
x = "now a string"
x = true`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          The same variable can reference different kinds of values at different
          points in the program.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Primitive Types
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Sunflower provides a small set of primitive value types.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li><strong>Integers</strong> — whole numbers</li>
          <li><strong>Floats</strong> — decimal numbers</li>
          <li><strong>Booleans</strong> — <code>true</code> and <code>false</code></li>
          <li><strong>None</strong> — absence of a value</li>
          <li><strong>Strings</strong> — textual data</li>
        </ul>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Numbers
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Numbers in Sunflower can be integers or floating-point values. The
          interpreter automatically handles arithmetic between them.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`a = 10
b = 3.14
c = a + b
write (c)`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Strings
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Strings represent text. They can be written using single or double
          quotes.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`s1 = "Hello"
s2 = 'World'
write (s1 + " " + s2)`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          Strings are immutable — operations on strings return new strings
          rather than modifying the original.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          The <code>none</code> Value
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          The <code>none</code> value represents the absence of a value. It is
          commonly used to indicate missing data or optional results.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`result = none

if result == none
    write ("No result available")`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          Unlike numbers or strings, <code>none</code> is a unique value with
          its own type.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Truthiness
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Sunflower evaluates certain values as true or false when used in
          conditional expressions.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li><code>false</code> and <code>none</code> are false</li>
          <li>Zero may be treated as false in conditions</li>
          <li>Non-empty strings and non-zero numbers are true</li>
        </ul>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg mt-6 ${codeFont.className}`}
        >
{`if none
    write ("This will not run")

if 1
    write ("This will run")`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Type Errors
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Type errors occur at runtime when an operation is applied to
          incompatible values.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`a = "text"
b = 5
write (a - b)  # Invalid operation`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          These errors can be caught and handled using
          <code> try </code> and <code> catch </code>, which will be covered
          later.
        </p>
      </section>


      <section className="mt-20 border-t pt-10">
        <h2 className="text-3xl mb-4 font-semibold">
          What’s Next?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Next, we’ll explore numeric operations in more depth, including
          arithmetic rules and operator behavior.
        </p>
      </section>
    </div>
  );
}