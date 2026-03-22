// components/ui/DemoBanner.tsx
// スクロールで上に消えるデモサイト告知バナー
"use client"

import { useEffect, useState } from "react"

export default function DemoBanner() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="bg-[#1a2940] border-b border-primary/20 px-4 py-2 text-center">
        <p className="text-[11px] md:text-xs font-sans text-foreground/70 leading-snug">
          <span className="text-primary font-bold mr-2">DEMO</span>
          このサイトはデモ用サンプルです。デザイン・イメージカラーはお客様のブランドに合わせてカスタマイズします。
          掲載中の画像はすべてイメージ素材であり、実際のサービスではお客様ご提供の写真に差し替えます。
        </p>
      </div>
    </div>
  )
}
