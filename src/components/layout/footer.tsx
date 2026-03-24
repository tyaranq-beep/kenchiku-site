import Link from "next/link";
import { navigationLinks } from "@/lib/mockData";
import { Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-background w-full z-20 pt-24 pb-8 px-6 md:px-12 border-t-[1px] border-border/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-widest min-h-[44px] flex items-center w-fit">
            MONOLITH & SILK
          </Link>
          <p className="text-sm text-foreground/70 font-sans tracking-wider leading-relaxed">
            私たちが提供するのは、単なる建築ではなく、<br className="hidden lg:block" />
            時代を超えて価値を高め続ける空間の創造です。
          </p>
        </div>

        {/* Explore Column */}
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="text-primary font-serif font-bold tracking-widest text-sm mb-2">メニュー</h3>
          <ul className="flex flex-col gap-1 text-xs tracking-widest text-foreground/80 font-sans">
            {navigationLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors py-2 flex items-center min-h-[44px] w-fit">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="text-primary font-serif font-bold tracking-widest text-sm mb-2">法的情報</h3>
          <ul className="flex flex-col gap-1 text-xs tracking-widest text-foreground/80 font-sans">
            <li>
              <Link href="/" className="hover:text-primary transition-colors py-2 flex items-center min-h-[44px] w-fit">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition-colors py-2 flex items-center min-h-[44px] w-fit">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition-colors py-2 flex items-center min-h-[44px] w-fit">
                採用情報
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact Column */}
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="text-primary font-serif font-bold tracking-widest text-sm mb-2">お問い合わせ・所在地</h3>
          <div className="text-xs tracking-widest text-foreground/80 font-sans leading-relaxed">
            <p className="mb-2">
              〒000-0000<br />
              東京都〇〇区〇〇 1-1-1<br />
              デモビル 30F
            </p>
            <p>TEL: 03-XXXX-XXXX</p>
          </div>
          <ul className="flex flex-col gap-1 mt-2 text-xs tracking-widest text-foreground/80 font-sans">
            <li>
              <div className="flex items-center gap-4 py-2 min-h-[44px]">
                <a href="/" className="hover:text-primary transition-colors p-2 -ml-2">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="/" className="hover:text-primary transition-colors p-2">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20 text-[10px] md:text-xs text-foreground/50 font-sans tracking-widest">
        <span>&copy; 2024 MONOLITH & SILK ARCHITECTURAL EXCELLENCE.</span>
      </div>
    </footer>
  );
}
