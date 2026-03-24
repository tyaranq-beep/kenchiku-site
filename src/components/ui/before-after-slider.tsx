"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  beforeImage = "/images/work-01-before.jpg",
  afterImage = "/images/work-01-after.jpg",
}: {
  beforeImage?: string;
  afterImage?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // slider x position (0 to 100 representing percentage)
  const x = useMotionValue(50); // initial 50%

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Converting percentage motion value to CSS pixel values for the drag constraints
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (containerWidth > 0) {
      dragX.set(containerWidth / 2);
    }
  }, [containerWidth, dragX]);

  // Sync dragX back to percentage x
  useEffect(() => {
    return dragX.onChange((latest) => {
      const percentage = (latest / containerWidth) * 100;
      x.set(Math.max(0, Math.min(100, percentage)));
    });
  }, [dragX, containerWidth, x]);

  // Use x to compute clip paths
  const beforeClipPath = useTransform(x, (val) => `inset(0 ${100 - val}% 0 0)`);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-surface-container-high rounded-none touch-none select-none"
    >
      {/* After image (background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
        />
      </div>

      {/* Before image (foreground layer masked) */}
      <motion.div 
        className="absolute inset-0 z-10 will-change-transform border-r-[1.5px] border-primary"
        style={{ clipPath: beforeClipPath }}
      >
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Drag handle line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-primary z-20"
        style={{ 
          left: useTransform(x, (val) => `${val}%`),
          x: "-50%" 
        }}
      >
        {/* Actual Draggable Handle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-[2px] border-surface-container-low cursor-grab active:cursor-grabbing will-change-transform"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(e, info) => {
             if (!containerRef.current) return;
             const rect = containerRef.current.getBoundingClientRect();
             const pointerX = info.point.x - rect.left;
             const percentage = Math.max(0, Math.min(100, (pointerX / rect.width) * 100));
             x.set(percentage);
          }}
        >
          {/* Arrows */}
          <div className="flex gap-2">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="block rotate-180">
              <path d="M1.5 1L6.5 6L1.5 11" stroke="#061423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="block">
              <path d="M1.5 1L6.5 6L1.5 11" stroke="#061423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
