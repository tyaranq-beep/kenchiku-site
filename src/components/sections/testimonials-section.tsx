"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const voices = [
  {
    id: 1,
    text: "MONOLITH & SILKのチームは、商業空間の可能性を根本から再定義してくれました。純粋な建築の詩です。",
    name: "Gさん",
    title: "代表取締役CEO、架空ディベロッパー株式会社"
  },
  {
    id: 2,
    text: "細部への徹底したこだわりが、単なる住まいを光と空間の sanctuary に変えてくれました。",
    name: "Hさん",
    title: "プライベートクライアント"
  },
  {
    id: 3,
    text: "あらゆる面で精密な仕事ぶりでした。工期より早く完成し、構造の完成度も期待を超えていました。",
    name: "Iさん",
    title: "院長、〇〇メディカルハブ"
  }
];

export default function VoicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % voices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-32 bg-surface-container-low relative z-20 overflow-hidden grid-pattern">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center">
        <motion.p 
          className="text-[#d4a843] font-sans font-bold tracking-[0.2em] text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          クライアントの声
        </motion.p>
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          お客様の声
        </motion.h2>

        <div className="relative w-full min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center justify-center p-8 bg-background/50 border border-[#d4a843]/20 shadow-lg"
            >
              <span className="text-6xl font-serif text-[#d4a843] leading-none mb-4 absolute top-4 left-6 opacity-30">&quot;</span>
              <p className="text-foreground/80 font-serif text-lg md:text-xl leading-relaxed mb-8 max-w-2xl px-4 z-10 relative">
                {voices[currentIndex].text}
              </p>
              <div className="flex flex-col items-center mt-auto">
                <div className="w-8 h-[1px] bg-[#d4a843] mb-4"></div>
                <p className="font-sans font-bold text-foreground text-base tracking-wider">{voices[currentIndex].name}</p>
                <p className="font-sans text-xs text-[#d4a843] tracking-widest mt-2">{voices[currentIndex].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-4 mt-8 z-10">
          {voices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#d4a843] w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
