"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  beforeImage = "/images/work-01-before.jpg",
  afterImage = "/images/work-01-after.jpg",
}: {
  beforeImage?: string;
  afterImage?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50); // 0–100 の単一の真実
  const isDragging = useRef(false);

  /** コンテナ内の X 座標をパーセントに変換 */
  const toPct = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  /* ---- マウスイベント ---- */
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setPct(toPct(e.clientX));
    };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [toPct]);

  /* ---- タッチイベント ---- */
  const onTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      setPct(toPct(e.touches[0].clientX));
    };
    const onTouchEnd = () => { isDragging.current = false; };
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [toPct]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-surface-container-high select-none touch-none"
    >
      {/* After 画像（背景） */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="施工後" fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" quality={90} />
      </div>

      {/* Before 画像（左側クリップ） */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image src={beforeImage} alt="施工前" fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" quality={90} />
      </div>

      {/* 分割ライン */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#d4a843] z-20 pointer-events-none"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
      />

      {/* ドラッグハンドル（ラインと同じ left に配置） */}
      <div
        className="absolute top-1/2 z-30 w-10 h-10 rounded-full bg-[#d4a843] border-[2px] border-[#061423] flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
        style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* 左右矢印アイコン */}
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6H19M1 6L5 2M1 6L5 10M19 6L15 2M19 6L15 10" stroke="#061423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* ラベル */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="text-xs font-sans tracking-widest uppercase bg-[#061423]/70 text-white px-3 py-1 border border-white/20">施工前</span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="text-xs font-sans tracking-widest uppercase bg-[#d4a843]/80 text-[#061423] px-3 py-1 font-bold">施工後</span>
      </div>
    </div>
  );
}
