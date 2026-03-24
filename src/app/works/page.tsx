"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { mockWorks } from "@/lib/mockData";
import Image from "next/image";

const categories = ["すべて", "新築", "リフォーム", "外壁", "足場", "造園", "解体・修復", "内装"];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredWorks = activeCategory === "すべて" 
    ? mockWorks 
    : mockWorks.filter(work => work.category === activeCategory);

  return (
    <div className="w-full relative min-h-screen pb-24 z-10">
      
      {/* Page Hero */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image src="/images/works-hero-bg.jpg" alt="施工実績一覧" fill priority className="object-cover" quality={95} />
        </div>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="relative z-10 text-center px-6">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary tracking-widest mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              施工実績
            </motion.h1>
          <motion.p 
            className="text-foreground/80 font-sans tracking-[0.2em] text-xs md:text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ARCHITECTURAL EXCELLENCE & CONSTRUCTION MASTERY
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 border-b border-border/10 pb-6 w-full max-w-4xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-sans text-xs tracking-widest py-2 transition-colors ${
                activeCategory === cat ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={work.id}
                className="break-inside-avoid relative group cursor-pointer border border-border/10 bg-surface-container-low overflow-hidden block"
              >
                <Link href={`/works/${work.id}`} className="block h-full relative">
                  <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-auto overflow-hidden">
                    {/* Add some variance in height for masonry effect based on ID */}
                    <div 
                      className={`relative w-full ${work.id % 3 === 0 ? 'h-[450px]' : work.id % 2 === 0 ? 'h-[350px]' : 'h-[250px]'} max-h-[60vh]`}
                    >
                      <Image 
                        src={work.img} 
                        alt={work.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 bg-surface-container-low">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] md:text-xs font-sans tracking-widest text-foreground/50 border border-foreground/20 px-2 py-1">
                        {work.category}
                      </span>
                      <span className="text-primary font-serif text-sm tracking-widest">{work.year}</span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm font-sans text-foreground/60 leading-relaxed line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredWorks.length === 0 && (
          <div className="w-full py-20 text-center text-foreground/50 font-sans tracking-widest">
            該当するプロジェクトが見つかりません。
          </div>
        )}

        <div className="w-full flex justify-center mt-24">
          <button className="flex items-center gap-4 text-xs font-sans tracking-widest text-primary hover:text-white transition-colors group">
            <span className="w-[1px] h-12 bg-primary group-hover:h-16 group-hover:bg-white transition-all duration-300 mx-auto block mb-4" />
            <span style={{ writingMode: 'vertical-rl' }}>さらに実績を見る</span>
          </button>
        </div>
      </div>
    </div>
  );
}
