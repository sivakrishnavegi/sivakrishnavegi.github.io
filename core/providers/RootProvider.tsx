"use client";

import { ThemeProvider } from "./NextThemeProvider";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen">{children}</div>
      </ThemeProvider>
    </div>
  );
};
