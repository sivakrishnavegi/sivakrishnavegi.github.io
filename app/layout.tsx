import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/core/providers/RootProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "800", "900"],
});
export const metadata: Metadata = {
  title: "Siva Krishna Vegi",
  description: "Mern Stack developer who loves to code lives in vizag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
