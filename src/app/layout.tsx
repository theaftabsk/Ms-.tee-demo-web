import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "EXODUS Teaching with Ms. Tee | Cosmetology Education & Training",
  description: "Hands-on cosmetology training, State Board preparation, and real-world techniques to help you succeed in the beauty industry.",
  keywords: "Cosmetology, Ms. Tee, State Board Exam, Haircutting, Hair Color, Beauty School, Beauty Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-exodus-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}
