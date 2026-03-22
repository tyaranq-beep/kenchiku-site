import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/providers/lenis-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import InitialLoader from "@/components/ui/initial-loader";
import FloatingCTA from "@/components/ui/floating-cta";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GeometricBackground from "@/components/GeometricBackground";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "MONOLITH & SILK | 時を超える建築を、この地に。",
  description: "The Monolith & The Silk - 最高峰の建築デモ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn("dark", notoSerif.variable, notoSans.variable)}>
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        <LenisProvider>
          <GeometricBackground />
          <InitialLoader />
          <CustomCursor />
          <FloatingCTA />
          <Navbar />
          <main className="w-full relative min-h-screen z-10">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
