"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // スムーズスクロールライブラリ (Lenis) 側で一元管理するため、
    // ここではネイティブの即時スクロールのみ最小限行い、DOM状態リセットは削除。
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}
