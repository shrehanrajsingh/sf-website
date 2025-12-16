"use client";

import { Arima, Roboto, Fira_Code } from "next/font/google";

const headingFont = Arima({ subsets: ["latin"] });
const bodyFont = Roboto({ subsets: ["latin"] });
const codeFont = Fira_Code({ subsets: ["latin"] });

export default function NumbersPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>
      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Numbers
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        Numbers are one of the most commonly used value types in Sunflower.
        This section explains how numeric values work and how arithmetic is
        performed.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Integers
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Integers represent whole numbers, both positive and negative.
          They are commonly used for counting, indexing, and loops.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`a = 10
b = -5
c = a + b
write (c)`}
        </pre>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Floating-Point Numbers
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Floating-point numbers represent decimal values. They are useful
          when precision beyond whole numbers is required.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`x = 3.14
y = 2.0
z = x * y
write (z)`}
        </pre>
      </section>

       
      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Arithmetic Operators
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Sunflower supports standard arithmetic operators.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-4xl">
          <li><code>+</code> — addition</li>
          <li><code>-</code> — subtraction</li>
          <li><code>*</code> — multiplication</li>
          <li><code>/</code> — division</li>
          <li><code>%</code> — modulo (remainder)</li>
        </ul>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg mt-6 ${codeFont.className}`}
        >
{`a = 10
b = 3

write (a + b)
write (a - b)
write (a * b)
write (a / b)
write (a % b)`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Division Behavior
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Division using <code>/</code> may produce a floating-point result,
          even if both operands are integers.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`write (5 / 2)
write (10 / 5)`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          This behavior ensures more mathematically intuitive results.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Modulo Operator
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          The modulo operator returns the remainder after division. It is
          commonly used for periodic behavior and divisibility checks.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`if 10 % 2 == 0
    write ("Even number")

if 7 % 2 == 1
    write ("Odd number")`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Negative Numbers
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Negative numbers are written using the minus sign and behave as
          expected in arithmetic expressions.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`x = -10
y = 5
write (x + y)`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Common Mistakes
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li>Dividing by zero</li>
          <li>Assuming division always returns an integer</li>
          <li>Using numbers where strings are expected</li>
        </ul>
      </section>


      <section className="mt-20 border-t pt-10">
        <h2 className="text-3xl mb-4 font-semibold">
          What’s Next?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Next, we’ll explore strings in depth — including indexing,
          slicing, and common string operations.
        </p>
      </section>
    </div>
  );
}