import type { Metadata } from "next";
import { Manrope, Syncopate } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIN | Network is Networth",
  description: "Het netwerk-evenement voor ondernemers en professionals. Waar waardevolle connecties worden gemaakt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${manrope.variable} ${syncopate.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
