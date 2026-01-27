import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
