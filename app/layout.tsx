import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrainsmono",
});

export const metadata: Metadata = {
  title: "devblog",
  description: "DevPadd's blogging site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${JetBrainsMono.variable} transition-all font-mono h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        {/*<About />{" "}*/}
      </body>
    </html>
  );
}
