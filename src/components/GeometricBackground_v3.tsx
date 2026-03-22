// components/GeometricBackground.tsx
"use client"

import { motion, useReducedMotion } from "framer-motion"

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(" ")
}

function linePath(x1: number, y1: number, x2: number, y2: number): string {
  return `M ${x1} ${y1} L ${x2} ${y2}`
}

const DOTS = [
  { x: 340, y: 200 },
  { x: 480, y: 280 },
  { x: 480, y: 440 },
  { x: 340, y: 520 },
  { x: 200, y: 440 },
  { x: 200, y: 280 },
  { x: 340, y: 360 },
]

const DIAGONAL_LINES = [
  [340, 200, 340, 520],
  [200, 280, 480, 440],
  [200, 440, 480, 280],
] as const

// 中心座標
const CX = 340
const CY = 360

export default function GeometricBackground() {
  const prefersReduced = useReducedMotion()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 680 720"
      >
        <defs>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#d4a843" stopOpacity="0.00" />
            <stop offset="40%"  stopColor="#d4a843" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#d4a843" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="fadeMask" cx="50%" cy="50%" r="55%">
            <stop offset="30%"  stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="vignette">
            <rect width="100%" height="100%" fill="url(#fadeMask)" />
          </mask>
        </defs>

        <g mask="url(#vignette)">

          {/* ---- 外側の大六角形（フェードイン） ---- */}
          <motion.polygon
            points={hexPoints(CX, CY, 200)}
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />

          {/* ---- 中間六角形（回転）---- */}
          {/* 修正: motion.g でラップして transformOrigin を CSS で指定 */}
          <motion.g
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            initial={{ opacity: 0 }}
            animate={
              prefersReduced
                ? { opacity: 1 }
                : { opacity: 1, rotate: 360 }
            }
            transition={
              prefersReduced
                ? { duration: 1.5 }
                : {
                    opacity: { duration: 1.5 },
                    rotate: { duration: 80, repeat: Infinity, ease: "linear" },
                  }
            }
          >
            <polygon
              points={hexPoints(CX, CY, 140)}
              fill="none"
              stroke="#d4a843"
              strokeWidth="0.5"
              style={{ strokeOpacity: 0.10 }}
            />
          </motion.g>

          {/* ---- 内側六角形（逆回転） ---- */}
          <motion.g
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            initial={{ opacity: 0 }}
            animate={
              prefersReduced
                ? { opacity: 1 }
                : { opacity: 1, rotate: -360 }
            }
            transition={
              prefersReduced
                ? { duration: 1.5 }
                : {
                    opacity: { duration: 1.5, delay: 0.3 },
                    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                  }
            }
          >
            <polygon
              points={hexPoints(CX, CY, 80)}
              fill="none"
              stroke="#d4a843"
              strokeWidth="0.5"
              style={{ strokeOpacity: 0.14 }}
            />
          </motion.g>

          {/* ---- 対角線（pathLength アニメーション） ---- */}
          {DIAGONAL_LINES.map(([x1, y1, x2, y2], i) => (
            <motion.path
              key={`diag-${i}`}
              d={linePath(x1, y1, x2, y2)}
              fill="none"
              stroke="#d4a843"
              strokeWidth="0.4"
              style={{ strokeOpacity: 0.07 }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.8,
                delay: 0.6 + i * 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}

          {/* ---- 中心スポーク（pathLength アニメーション） ---- */}
          {DOTS.slice(0, 6).map((dot, i) => (
            <motion.path
              key={`spoke-${i}`}
              d={linePath(CX, CY, dot.x, dot.y)}
              fill="none"
              stroke="#d4a843"
              strokeWidth="0.3"
              style={{ strokeOpacity: 0.06 }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.0 + i * 0.08 }}
            />
          ))}

          {/* ---- 頂点のドット ---- */}
          {DOTS.map((dot, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={dot.x}
              cy={dot.y}
              r={i === 6 ? 2.5 : 1.8}
              fill="#d4a843"
              style={{ fillOpacity: i === 6 ? 0.35 : 0.25 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.06 }}
            />
          ))}

          {/* ---- 装飾 小六角形（右上・点滅） ---- */}
          <motion.polygon
            points={hexPoints(580, 120, 55)}
            fill="none"
            stroke="#d4a843"
            strokeWidth="0.4"
            initial={{ opacity: 0 }}
            animate={
              prefersReduced
                ? { opacity: 0.08 }
                : { opacity: [0, 0.08, 0.04, 0.08] }
            }
            transition={
              prefersReduced
                ? { duration: 1.2, delay: 1.5 }
                : { duration: 6, repeat: Infinity, delay: 1.5 }
            }
          />

          {/* ---- 装飾 小六角形（左下・点滅） ---- */}
          <motion.polygon
            points={hexPoints(90, 580, 40)}
            fill="none"
            stroke="#d4a843"
            strokeWidth="0.4"
            initial={{ opacity: 0 }}
            animate={
              prefersReduced
                ? { opacity: 0.07 }
                : { opacity: [0, 0.07, 0.03, 0.07] }
            }
            transition={
              prefersReduced
                ? { duration: 1.2, delay: 1.8 }
                : { duration: 8, repeat: Infinity, delay: 1.8 }
            }
          />

          {/* ---- グリッドライン（静的・アニメーションなし） ---- */}
          {[160, 240, 320, 400, 480, 560].map((y, i) => (
            <line
              key={`h-${i}`}
              x1="0" y1={y} x2="680" y2={y}
              stroke="#d4a843"
              strokeWidth="0.3"
              strokeOpacity="0.03"
            />
          ))}
          {[120, 200, 280, 360, 440, 520, 600].map((x, i) => (
            <line
              key={`v-${i}`}
              x1={x} y1="0" x2={x} y2="720"
              stroke="#d4a843"
              strokeWidth="0.3"
              strokeOpacity="0.03"
            />
          ))}

        </g>
      </svg>

      {/* ===== ノイズグレイン ===== */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  )
}
