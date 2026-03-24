"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"default" | "link" | "view">("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const innerCursorX = useMotionValue(-100);
  const innerCursorY = useMotionValue(-100);

  const springConfig = { damping: 15, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleFirstMove = () => {
      setHasMoved(true);
      window.removeEventListener("mousemove", handleFirstMove);
    };
    window.addEventListener("mousemove", handleFirstMove);

    const moveCursor = (e: MouseEvent) => {
      // ベースサイズを120pxとするため、中心点のオフセットは-60とする
      cursorX.set(e.clientX - 60); 
      cursorY.set(e.clientY - 60);
      innerCursorX.set(e.clientX - 3);
      innerCursorY.set(e.clientY - 3);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[role='button']")) {
        setHoverState("link");
      } else if (target.closest("img") || target.closest("[data-cursor='view']")) {
        setHoverState("view");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleFirstMove);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, innerCursorX, innerCursorY]);

  // アニメーション時のスケール値（ベースが120px）
  // 元の40px = 120 * 0.333
  // linkの100px (40*2.5) = 120 * 0.833
  // viewの120px (40*3) = 120 * 1.0
  const getScale = () => {
    switch(hoverState) {
      case "link": return 0.833;
      case "view": return 1.0;
      default: return 0.333;
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[120px] h-[120px] rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center will-change-transform"
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring, 
          mixBlendMode: hoverState === "link" ? "difference" : "normal",
          borderWidth: "4.5px", // 0.333スケール時に1.5pxになるよう計算
          borderColor: "hsl(var(--primary))",
          borderStyle: "solid"
        }}
        animate={{
          scale: getScale(),
          backgroundColor: hoverState === "link" ? "#eec058" : "transparent",
          opacity: hasMoved ? 1 : 0
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {hoverState === "view" && (
          <span className="text-[11px] font-sans font-bold text-primary tracking-widest absolute">
            VIEW
          </span>
        )}
      </motion.div>
      <motion.div 
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-primary rounded-full pointer-events-none z-[10000] hidden md:block will-change-transform"
        style={{ x: innerCursorX, y: innerCursorY }}
        animate={{
          opacity: hasMoved ? (hoverState === "default" ? 1 : 0) : 0
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
