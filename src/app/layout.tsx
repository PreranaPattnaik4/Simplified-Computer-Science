import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "SCS Simplified Computer Science",
  description: "Unlocking Computer Science: SimplifiedCS for Effortless Learning!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSpaceGrotesk.variable)}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

// A new wrapper component to conditionally render header and footer
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  'use client';
  const pathname = usePathname();
  const isLearnPage = pathname.includes('/learn/');

  return (
    <>
      {!isLearnPage && <Header />}
      {children}
      {!isLearnPage && <Footer />}
    </>
  );
}
