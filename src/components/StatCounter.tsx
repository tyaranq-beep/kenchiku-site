"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { animate } from "framer-motion"

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
    if (!isInView) return
    const controls = animate(0, target, {
      duration,
      ease: [0.76, 0, 0.24, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, target, duration])

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
