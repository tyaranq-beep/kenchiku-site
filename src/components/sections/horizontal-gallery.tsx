"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const works = [
  { id: 1, title: "都心複合施設", category: "COMMERCIAL", img: "/placeholder.jpg" },
  { id: 2, title: "K邸 新築工事", category: "RESIDENTIAL", img: "/placeholder.jpg" },
  { id: 3, title: "市立図書館", category: "PUBLIC", img: "/placeholder.jpg" },
  { id: 4, title: "Yリゾートホテル", category: "HOSPITALITY", img: "/placeholder.jpg" },
  { id: 5, title: "新社屋プロジェクト", category: "OFFICE", img: "/placeholder.jpg" },
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className={`relative ${isMounted && isMobile ? "h-auto pb-32" : "h-[300vh]"} bg-surface z-40 rounded-b-3xl shadow-2xl transition-all duration-300`}>
      <div className={`sticky top-0 ${isMounted && isMobile ? "h-auto" : "h-screen"} flex flex-col justify-center overflow-hidden py-24`}>
        <div className="px-8 md:px-16 mb-12">
          <h2 className="text-5xl md:text-7xl font-serif text-foreground">FEATURED WORKS</h2>
          <p className="text-primary font-sans tracking-[0.2em] mt-4 text-sm md:text-base">施工実績</p>
        </div>

        <motion.div 
          style={{ x: isMounted && isMobile ? 0 : x }} 
          className="flex gap-6 md:gap-8 px-8 md:px-16 w-full md:w-max overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:snap-none hide-scrollbar"
        >
          {works.map((work) => (
            <Link href={`/works/${work.id}`} key={work.id}>
              <motion.div 
                className="group relative flex-shrink-0 snap-start w-[85vw] md:w-[45vw] max-w-[700px] aspect-[4/3] overflow-hidden cursor-pointer"
                data-cursor="view"
                layoutId={`work-${work.id}`}
              >
                <div className="w-full h-full bg-surface-container-high border-[1px] border-border/30 absolute inset-0 transition-transform duration-[800ms] group-hover:scale-105 flex items-center justify-center">
                   <p className="text-foreground/20 font-sans tracking-widest text-xs">NO IMAGE</p> 
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500" />
                
                {/* Text Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 text-foreground">
                  <p className="text-primary font-sans text-xs tracking-widest mb-2">{work.category}</p>
                  <h3 className="font-serif text-3xl">{work.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
