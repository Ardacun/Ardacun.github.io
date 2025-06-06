import type { Metadata } from "next";

import { Anek_Telugu } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"], 
  variable: "--font-caption", 
});

export const metadata: Metadata = {
  title: "Adrien D'acunto",
  description: "Software Engineer",
  verification: {
    google: 'd27qrz77GIezuSGXXalLktKiq2oyZlgYGOhj1ifvRA8'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, GeistMono.variable, "font-sans", "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
