"use client";

import React, { useMemo } from "react";

const CodeBlock = ({ children, language = "custom", code }) => {
  // Extracting raw text from children
  const rawCode = useMemo(() => {
    if (code !== undefined) return code;
    if (typeof children === "object") {
      return React.Children.toArray(children)
        .map((child) => {
          if (typeof child === "string" || typeof child === "number") {
            return child;
          }
          return child.props?.children || "";
        })
        .join("");
    }
    return children || "";
  }, [children, code]);

    const tokens = useMemo(()=>{
      if(!rawCode) return [];
      const tokenList=[];
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
        tokenList.push({ type: "plain", value: remaining[0] });
        remaining = remaining.slice(1);
      }
    }
    return tokenList;
  },[rawCode]);

  // Mapped token types to Tailwind colors
  const getTokenColor = (type) => {
    switch (type) {
      case "keyword": return "text-purple-600 font-bold";
      case "string": return "text-blue-600";
      case "comment": return "text-green-600 italic";
      case "number": return "text-orange-600";
      case "operator": return "text-gray-600";
      case "identifier": return "text-indigo-600";
      case "bracket": return "text-gray-500";
      default: return "text-gray-800";
    }
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed">
          <code>
            {tokens.map((token, index) => (
              <span key={index} className={getTokenColor(token.type)}>
                {token.value}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
