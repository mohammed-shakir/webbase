import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Base",
  description: "A reusable full-stack foundation for modern web platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <header className="bg-white shadow">
          <nav className="container mx-auto flex space-x-6 p-4">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </nav>
        </header>

        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
