"use client";

import React from "react";

const CodeBlock = ({ children, language = "custom", code }) => {
  if (typeof children === "object") {
    children = React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string" || typeof child === "number") {
          return child;
        }
        return child.props?.children || "";
      })
      .join("");
  } else if (code != undefined) {
    children = code;
  }

  const tokenize = (code) => {
    if (!code) return [];

    const tokens = [];
    let currentToken = "";
    let currentType = null;

    const patterns = {
      keyword: /^(fun|return|if|else|for|while|class|to|in|step|repeat)\b/,
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
          background-color: #f8f8f8;
          border-radius: 6px;
          padding: 1rem;
          overflow: auto;
          margin: 0;
          border: 1px solid #e0e0e0;
        }
        .code-block code {
          font-family: monospace;
          font-size: 14px;
          line-height: 1.5;
          color: #333333;
        }
        .token.keyword {
          color: #8600b3;
        }
        .token.string {
          color: #a31515;
        }
        .token.comment {
          color: #008000;
        }
        .token.number {
          color: #098658;
        }
        .token.operator {
          color: #5c6773;
        }
        .token.identifier {
          color: #0070c1;
        }
        .token.bracket {
          color: #5c6773;
        }
      `}</style>
      <pre className="code-block">
        <code className={`language-${language}`}>{renderTokens(tokens)}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
