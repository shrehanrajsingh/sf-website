"use client";

import { ThemeProvider } from "./ThemeContext";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
