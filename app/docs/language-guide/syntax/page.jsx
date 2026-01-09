"use client";

import { Arima, Roboto, Fira_Code } from "next/font/google";

const headingFont = Arima({ subsets: ["latin"] });
const bodyFont = Roboto({ subsets: ["latin"] });
const codeFont = Fira_Code({ subsets: ["latin"] });

export default function SyntaxFundamentalsPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>

      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Syntax Fundamentals
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        This section explains the basic building blocks of Sunflower syntax.
        Understanding these rules will help you read and write Sunflower code
        correctly.
      </p>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Indentation-Based Blocks
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Sunflower uses indentation to define blocks of code. Unlike many
          languages, there are no braces <code>{`{}`}</code> or block-ending
          keywords.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${codeFont.className}`}
        >
{`if value > 0
    write ("Positive")
    if value > 10
        write ("Greater than 10")
else
    write ("Zero or negative")`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          All lines that belong to a block must have the same indentation
          level. Mixing tabs and spaces is discouraged and can cause errors.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Statements vs Expressions
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Sunflower distinguishes between statements and expressions, but many
          constructs can act as both.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 max-w-4xl">
          <li>
            <strong>Statements</strong> perform actions (for example,
            <code> if </code>, <code> while </code>, <code> return </code>).
          </li>
          <li>
            <strong>Expressions</strong> produce values (for example,
            arithmetic operations, function calls).
          </li>
        </ul>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Line Structure
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Each line in Sunflower represents a complete statement or expression.
          There are no semicolons.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`a = 10
b = a + 5
write (b)`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          Long expressions can be written clearly without extra syntax.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Comments
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Comments are used to explain code and are ignored by the interpreter.
          In Sunflower, comments begin with the <code>#</code> character.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`# This is a full-line comment
a = 10  # This is a trailing comment`}
        </pre>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Keywords
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Keywords are reserved words that have special meaning in the language
          and cannot be used as variable names.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`if
else
while
for
fun
class
return
true
false
none
try
catch`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          You will learn how each of these keywords works throughout the
          Language Guide.
        </p>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Whitespace Rules
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Whitespace inside expressions is mostly flexible, but indentation
          must be consistent.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-6 max-w-4xl">
          <li>Indentation defines blocks</li>
          <li>Spaces around operators improve readability</li>
          <li>Blank lines are allowed and ignored</li>
        </ul>
      </section>


      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Common Syntax Errors
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li>Incorrect indentation levels</li>
          <li>Using keywords as variable names</li>
          <li>Forgetting to indent after block keywords</li>
          <li>Mixing tabs and spaces</li>
        </ul>
      </section>

        
      <section className="mt-20 border-t pt-10">
        <h2 className="text-3xl mb-4 font-semibold">
          What’s Next?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Now that you understand Sunflower’s syntax rules, we’ll explore how
          values and types work in the language.
        </p>
      </section>
    </div>
  );
}