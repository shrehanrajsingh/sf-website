"use client";

import React from "react";

const CodeBlock = ({ children, language = "custom" }) => {
  if (typeof children === "object") {
    children = React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string" || typeof child === "number") {
          return child;
        }
        return child.props?.children || "";
      })
      .join("");
  }

  const tokenize = (code) => {
    if (!code) return [];

    const tokens = [];
    let currentToken = "";
    let currentType = null;

    const patterns = {
      keyword: /^(fun|return|if|else|for|while|class)\b/,
      string: /^(['"`])(?:(?=(\\?))\2.)*?\1/,
      comment: /^(\/\/.*|\/\*[\s\S]*?\*\/|#.*)/,
      number: /^-?\d+(?:\.\d+)?/,
      operator: /^([+\-*/%=<>!&|^~?:]+)/,
      bracket: /^[\[\]{}()]/,
      identifier: /^[a-zA-Z_]\w*/,
      whitespace: /^[ \t\n]+/,
    };

    let remaining = code;

    while (remaining) {
      let matched = false;

      for (const [type, pattern] of Object.entries(patterns)) {
        const match = remaining.match(pattern);
        if (match && match.index === 0) {
          const value = match[0];
          tokens.push({ type, value });
          remaining = remaining.slice(value.length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        tokens.push({ type: "plain", value: remaining[0] });
        remaining = remaining.slice(1);
      }
    }

    return tokens;
  };

  const renderTokens = (tokens) => {
    return tokens.map((token, index) => (
      <span key={index} className={`token ${token.type}`}>
        {token.value}
      </span>
    ));
  };

  const tokens = tokenize(children);

  return (
    <div className="code-block-container">
      <style jsx global>{`
        .code-block-container {
          margin: 1.5rem 0;
        }
        .code-block {
          background-color: #282c34;
          border-radius: 6px;
          padding: 1rem;
          overflow: auto;
          margin: 0;
        }
        .code-block code {
          font-family: monospace;
          font-size: 14px;
          line-height: 1.5;
          color: #abb2bf;
        }
        .token.keyword {
          color: #c678dd;
        }
        .token.string {
          color: #ce9178;
        }
        .token.comment {
          color: #6a9955;
        }
        .token.number {
          color: #b5cea8;
        }
        .token.operator {
          color: #d4d4d4;
        }
        .token.identifier {
          color: #9cdcfe;
        }
        .token.bracket {
          color: #d4d4d4;
        }
      `}</style>
      <pre className="code-block">
        <code className={`language-${language}`}>{renderTokens(tokens)}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
