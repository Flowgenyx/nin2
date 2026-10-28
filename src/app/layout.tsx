import type { Metadata } from "next";
import localFont from "next/font/local";
import { TransitionProvider } from "@/context/TransitionContext";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  weight: "200 600",
  variable: "--font-body",
  display: "swap",
});

const syncopate = localFont({
  src: [
    { path: "./fonts/Syncopate-Regular.woff2", weight: "400" },
    { path: "./fonts/Syncopate-Bold.woff2", weight: "700" },
  ],
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
      <body className="antialiased">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
