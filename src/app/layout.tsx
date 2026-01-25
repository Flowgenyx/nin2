import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLOWGENYX | Creative Studio",
  description: "Creative studio crafting digital experiences",
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
