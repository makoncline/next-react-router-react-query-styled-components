import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import "normalize.css";
import "../components/baseline.css";
import { GlobalStyle } from "../components";

function SafeHydrate({ children }: { children: ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" ? null : children}
    </div>
  );
}

function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <GlobalStyle />
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default App;
