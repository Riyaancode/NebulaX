import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Stargaze-Space, Astronomy and Observatory",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}