"use client";

import { Arima, Roboto, Fira_Code } from "next/font/google";

const headingFont = Arima({ subsets: ["latin"] });
const bodyFont = Roboto({ subsets: ["latin"] });
const codeFont = Fira_Code({ subsets: ["latin"] });

export default function FirstProgramPage() {
  return (
    <div className={`px-32 py-20 ${bodyFont.className}`}>
      <h1 className={`text-5xl mb-6 ${headingFont.className}`}>
        Your First Program
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        In this section, you will write and run your very first Sunflower
        program. We will start simple and gradually explain each part.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Hello, World
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          The traditional first program in any language prints a simple message
          to the screen. In Sunflower, this is done using the
          <code> write </code> function.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto ${codeFont.className}`}
        >
{`write ("Hello, World!")`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          When you run this program, Sunflower executes the
          <code> write </code> function and prints the text to the output.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Running the Program
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          How you run the program depends on where you are working.
        </p>

        <h3 className="text-2xl mb-3 font-semibold">
          In sf-studios
        </h3>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-4">
          Click the run button in the editor. The output will appear in the
          console panel below the code editor.
        </p>

        <h3 className="text-2xl mt-8 mb-3 font-semibold">
          From the Command Line
        </h3>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`sunflower main.sf`}
        </pre>
      </section>

      {/* Input */}
      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Reading User Input
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Sunflower can read input from the user using the
          <code> input </code> function. This allows your programs to interact
          with users.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`name = input ("Enter your name: ")
write ("Hello,", name)`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          The <code>input</code> function pauses execution, waits for the user to
          type something, and then returns that value as a string.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Variables
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          Variables store values so they can be reused later. In Sunflower,
          variables are created using the assignment operator
          <code> = </code>.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`age = 20
name = "Sunflower"
active = true`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          You do not need to specify types. Sunflower automatically determines
          the type of each value at runtime.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Adding Simple Logic
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-6">
          You can control program behavior using conditional statements.
        </p>

        <pre
          className={`bg-gray-900 text-gray-100 p-6 rounded-lg ${codeFont.className}`}
        >
{`age = input ("Enter your age: ")

if age < 18
    write ("You are under 18")
else
    write ("You are 18 or older")`}
        </pre>

        <p className="text-gray-700 leading-relaxed mt-6 max-w-4xl">
          Notice how indentation determines which lines belong to the
          <code> if </code> and <code> else </code> blocks.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl mb-4 font-semibold">
          Common Beginner Mistakes
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-4xl">
          <li>Forgetting to indent code inside blocks</li>
          <li>Mixing tabs and spaces for indentation</li>
          <li>Assuming variables have fixed types</li>
          <li>Forgetting that input values are strings</li>
        </ul>
      </section>

      <section className="mt-20 border-t pt-10">
        <h2 className="text-3xl mb-4 font-semibold">
          What’s Next?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          You now know how to write, run, and interact with basic Sunflower
          programs. Next, we will dive deeper into the language itself,
          starting with its syntax fundamentals.
        </p>
      </section>
    </div>
  );
}