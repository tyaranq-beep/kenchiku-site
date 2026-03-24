"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/works", label: "施工事例", matchPattern: "/works" },
  { href: "/services", label: "事業内容", matchPattern: "/services" },
  { href: "/company", label: "企業情報", matchPattern: "/company" },
  { href: "/contact", label: "お問い合わせ", matchPattern: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const pathname = usePathname();

  // Handle Hamburger Animation
  useEffect(() => {
    if (isOpen) {
      animate([
        [".line-top", { y: 6, rotate: 45 }, { duration: 0.3 }],
        [".line-middle", { opacity: 0 }, { duration: 0.1, at: "<" }],
        [".line-bottom", { y: -6, rotate: -45 }, { duration: 0.3, at: "<" }],
      ]);
    } else {
      animate([
        [".line-top", { y: 0, rotate: 0 }, { duration: 0.3 }],
        [".line-middle", { opacity: 1 }, { duration: 0.1 }],
        [".line-bottom", { y: 0, rotate: 0 }, { duration: 0.3, at: "<" }],
      ]);
    }
  }, [isOpen, animate]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 z-[60] flex items-center justify-between px-6 md:px-8 text-foreground bg-background/90 backdrop-blur-md border-b-[1px] border-border/20">
        <Link href="/" className="text-xl font-serif font-bold text-primary tracking-widest min-h-[44px] min-w-[44px] flex items-center" onClick={() => setIsOpen(false)}>
          MONOLITH & SILK
        </Link>
        
        <nav className="hidden md:flex gap-8 text-xs font-sans tracking-widest items-center">
          {links.map((link, index) => {
            const isActive = pathname.startsWith(link.matchPattern);
            return (
              <Link key={`${link.href}-${index}`} href={link.href} className="relative hover:text-[#d4a843] transition-colors min-h-[44px] flex items-center py-3 group">
                {link.label}
                {/* Active indicator / Hover indicator */}
                <span className={`absolute bottom-[8px] left-0 w-full h-[2px] bg-[#d4a843] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${isActive ? 'scale-x-100' : ''}`} />
              </Link>
            )
          })}
          <Link href="/contact" className="ml-4 flex items-center px-6 py-2 bg-[#d4a843] text-[#061423] font-sans font-bold text-xs hover:bg-white hover:text-[#061423] transition-colors duration-300 min-h-[44px]">
            お問い合わせ
          </Link>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          ref={scope}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[4px] z-[60]"
          aria-label="Toggle Menu"
        >
          <span className="line-top block w-6 h-[2px] bg-primary origin-center" />
          <span className="line-middle block w-6 h-[2px] bg-primary origin-center" />
          <span className="line-bottom block w-6 h-[2px] bg-primary origin-center" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-sm flex flex-col pt-24 px-8 overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Top Gold Line */}
            <motion.div 
              className="absolute top-20 left-0 w-full h-[1px] bg-primary/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />

            <nav className="flex flex-col gap-6 mt-12 w-full">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group relative flex items-center justify-between text-2xl font-serif text-foreground hover:text-[#d4a843] transition-colors py-3 min-h-[44px]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 text-[#d4a843]/50 group-hover:text-[#d4a843] transition-colors" />
                  </Link>
                  <div className="w-full h-[1px] bg-border/30 mt-4" />
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
