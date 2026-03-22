"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));
  
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (latest === value) {
        setIsDone(true);
      }
    });
  }, [display, value]);

  return (
    <div className="flex flex-col items-center">
      <motion.span 
        ref={ref}
        className="text-xl sm:text-2xl md:text-8xl font-serif text-primary drop-shadow-[0_0_15px_rgba(238,192,88,0.3)]"
      >
        {display}
      </motion.span>
      <motion.div 
        className="w-full h-[2px] bg-primary mt-2 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isDone ? 1 : 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full min-h-[50vh] bg-surface-container-highest flex items-center justify-center py-24 z-30 rounded-b-3xl shadow-2xl overflow-hidden pointer-events-none">
      <div className="grid grid-cols-3 gap-4 md:gap-32 pointer-events-auto">
        <div className="flex flex-col items-center">
          <p className="text-foreground/50 font-sans tracking-widest text-[10px] md:text-sm mb-4 text-center">総施工実績</p>
          <AnimatedNumber value={2400} />
          <p className="text-primary font-serif xl:text-xl mt-4">件</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-foreground/50 font-sans tracking-widest text-[10px] md:text-sm mb-4 text-center">顧客満足度</p>
          <AnimatedNumber value={99} />
          <p className="text-primary font-serif xl:text-xl mt-4">%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-foreground/50 font-sans tracking-widest text-[10px] md:text-sm mb-4 text-center">創業</p>
          <AnimatedNumber value={65} />
          <p className="text-primary font-serif xl:text-xl mt-4">年</p>
        </div>
      </div>
    </section>
  );
}
