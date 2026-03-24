"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface StatCounterProps {
  target: number
  suffix: string
  label: string
  duration?: number
}

export function StatCounter({ target, suffix, label, duration = 2.5 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      
      // EasingOutQuad
      const easeProgress = progress * (2 - progress);
      setValue(Math.round(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-medium text-[#d4a843]">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-[#8faabb] mt-2 tracking-widest uppercase">
        {label}
      </div>
    </div>
  )
}
