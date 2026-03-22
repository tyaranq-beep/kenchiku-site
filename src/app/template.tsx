"use client";

import { motion } from "framer-motion";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const variants = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: EASE_OUT } 
  },
  exit: { 
    opacity: 0, 
    x: -40, 
    transition: { duration: 0.3 } 
  }
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
