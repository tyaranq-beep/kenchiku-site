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
import DemoBanner from "@/components/ui/DemoBanner";
import ScrollToTop from "@/components/ScrollToTop";

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
  description: "株式会社デモ建築の公式サイト。建築・土木・リフォーム・外壁・足場・造園など建築全般に対応。東京都を中心に全国対応。",
  openGraph: {
    title: "MONOLITH & SILK | 時を超える建築を、この地に。",
    description: "株式会社デモ建築の公式サイト。",
    locale: "ja_JP",
  },
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
          <ScrollToTop />
          <DemoBanner />
          <GeometricBackground />
          <InitialLoader />
          <CustomCursor />
          <FloatingCTA />
          <Navbar />
          <main className="w-full relative min-h-screen z-10 pt-8">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
