"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="fixed bottom-0 md:bottom-8 right-0 md:right-8 z-50 flex flex-row md:flex-col w-full md:w-auto shadow-2xl md:bg-transparent bg-surface-container-highest"
        >
          <Link href="/contact" className="flex-1 md:flex-none">
            <div className="group relative flex items-center justify-center gap-3 px-6 py-4 md:py-5 bg-primary overflow-hidden w-full md:w-[220px]">
              <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
              <Phone className="w-5 h-5 text-primary-foreground group-hover:text-primary relative z-10 transition-colors duration-500" />
              <span className="font-sans font-bold tracking-widest text-primary-foreground group-hover:text-primary relative z-10 transition-colors duration-500 text-sm md:text-base">
                無料相談
              </span>
            </div>
          </Link>
          <Link href="https://line.me" className="flex-1 md:flex-none border-l md:border-l-0 border-background/20">
            <div className="group relative flex items-center justify-center gap-3 px-6 py-4 md:py-5 bg-[#06C755] overflow-hidden w-full md:w-[220px]">
              <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
              <MessageCircle className="w-5 h-5 text-white group-hover:text-[#06C755] relative z-10 transition-colors duration-500" />
              <span className="font-sans font-bold tracking-widest text-white group-hover:text-[#06C755] relative z-10 transition-colors duration-500 text-sm md:text-base">
                LINEで相談
              </span>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
