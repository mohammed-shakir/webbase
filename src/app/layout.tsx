import { Auth0Provider } from '@auth0/nextjs-auth0';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/layout/Navbar';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Web Base',
  description: 'A reusable full-stack foundation for modern web platforms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          antialiased
        `}
      >
        <Auth0Provider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Navbar />
            <main className="container mx-auto py-8">{children}</main>
          </ThemeProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
