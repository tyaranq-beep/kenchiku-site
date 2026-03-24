"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if it's the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // After animation sequence finishes, set visited and remove loader
    // Total sequence time: 0.8s + 0.6s + 0.6s(out) ≈ 2s, we'll unmount after 2.5s
    const timer = setTimeout(() => {
      sessionStorage.setItem("hasVisited", "true");
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 2回目以降のアクセス時にハイドレーション前のチラつきを防ぐためのインラインスクリプト */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('hasVisited')) {
              document.documentElement.classList.add('has-visited');
            }
          `,
        }}
      />
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="initial-loader fixed inset-0 z-[100000] bg-background flex flex-col items-center justify-center pointer-events-none will-change-transform"
            initial={{ y: "0%" }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: EASE_OUT } }}
          >
            <div className="flex flex-col items-center">
              <motion.h1
                className="font-serif text-3xl md:text-5xl tracking-[0.2em] text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
              >
                MONOLITH
              </motion.h1>

              <motion.div
                className="h-[1.5px] bg-primary w-full max-w-[200px]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 1.0, ease: EASE_OUT }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
