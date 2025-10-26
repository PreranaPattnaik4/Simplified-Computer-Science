
'use client';

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';
import Chatbot from "@/components/Chatbot";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

// Metadata is now defined as a static object.
// We can't use 'export const metadata: Metadata' in a client component.
// For dynamic titles, we would need a different approach.
const metadata: Metadata = {
  title: "SCS Simplified Computer Science",
  description: "Unlocking Computer Science: SimplifiedCS for Effortless Learning!",
};

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLearnPage = pathname ? pathname.includes('/learn/') : false;
  const isDashboardLayout = pathname ? pathname.startsWith('/dashboard') : false;


  // The dashboard has its own layout, so we don't render header/footer here for it.
  if (isDashboardLayout) {
    return <>{children}</>;
  }
  
  if (isLearnPage) {
    return <>{children}</>;
  }


  return (
    <>
      <Header />
      {children}
      <Footer />
      <Chatbot />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSpaceGrotesk.variable)}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
