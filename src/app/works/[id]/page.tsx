"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import { mockWorks } from "@/lib/mockData";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

export default function WorkDetail({ params }: { params: { id: string } }) {
  const workId = parseInt(params.id, 10);
  const work = mockWorks.find(w => w.id === workId) || mockWorks[0];
  const relatedWorks = mockWorks.filter(w => w.id !== workId).slice(0, 3);

  return (
    <div className="w-full relative min-h-screen pb-24 z-10">
      {/* Page Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-start overflow-hidden mb-24 px-6 md:px-12 py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888062828-b0ce01dfb006?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <p className="text-primary font-sans text-xs tracking-[0.2em] mb-4 font-bold uppercase">
              プロジェクト {String(work.id).padStart(3, '0')}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-6 uppercase tracking-tight">
              {work.title}
            </h1>
            <p className="text-foreground/80 font-sans tracking-widest text-sm uppercase">
              {work.location} / {work.year}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        {/* CONCEPT Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32 items-start">
          <div>
            <h2 className="text-2xl font-serif text-primary tracking-widest mb-8 uppercase">コンセプト</h2>
            <p className="text-foreground/80 font-sans leading-loose tracking-wide mb-6">
              都市の喧騒の中に、静寂を設える。このプロジェクトでは、重厚なコンクリートの「モノリス」と、内部を彩る繊細な「シルク」のような木材のコントラストを追求しました。光と影が織りなす建築的詩学が、住まう人に極上の体験をもたらします。
            </p>
            <p className="text-foreground/80 font-sans leading-loose tracking-wide">
              構造体としての力強さを維持しつつ、ディテールにおいてはミリ単位の精度を要求される職人技が随所に散りばめられています。外部からの視線を遮りながらも、計算された開口部からは常に四季の移ろいを感じ取ることが可能です。
            </p>
          </div>
          
          <div className="bg-surface-container-low border border-border/10 p-8 md:p-12">
            <h3 className="text-xl font-serif text-foreground mb-8 tracking-widest">仕様・データ</h3>
            <div className="flex flex-col gap-6 font-sans text-sm border-b border-border/10 pb-8 mb-8">
              <div className="flex justify-between items-center sm:grid sm:grid-cols-3 gap-4 border-b border-border/5 pb-4">
                <span className="text-foreground/50 tracking-widest text-xs uppercase">用途</span>
                <span className="text-foreground sm:col-span-2">{work.category}</span>
              </div>
              <div className="flex justify-between items-center sm:grid sm:grid-cols-3 gap-4 border-b border-border/5 pb-4">
                <span className="text-foreground/50 tracking-widest text-xs uppercase">工期</span>
                <span className="text-foreground sm:col-span-2">14ヶ月</span>
              </div>
              <div className="flex justify-between items-center sm:grid sm:grid-cols-3 gap-4 border-b border-border/5 pb-4">
                <span className="text-foreground/50 tracking-widest text-xs uppercase">所在地</span>
                <span className="text-foreground sm:col-span-2">{work.location}</span>
              </div>
              <div className="flex justify-between items-center sm:grid sm:grid-cols-3 gap-4">
                <span className="text-foreground/50 tracking-widest text-xs uppercase">主な素材</span>
                <span className="text-foreground sm:col-span-2">高強度コンクリート / 天然石 / 無垢材 / 鋼鉄</span>
              </div>
            </div>
            <Link href="/contact" className="w-full block text-center py-4 bg-primary text-primary-foreground font-sans font-bold text-xs hover:bg-white transition-colors duration-300 min-h-[44px]">
              無料相談はこちら
            </Link>
          </div>
        </div>

        {/* VISUAL ARCHIVE Section */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-8 border-b border-border/10 pb-4">
            <h2 className="text-2xl font-serif text-foreground tracking-widest">ギャラリー</h2>
            <span className="text-primary font-sans text-xs tracking-widest">VISUAL ARCHIVE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
             {/* Left Large Image */}
            <div className="relative w-full h-[400px] md:h-full bg-surface-container-high border border-border/10">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" fill alt="Archive 01" className="object-cover" />
            </div>
            {/* Right 2x2 Grid using Flex/Grid */}
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
               <div className="grid grid-cols-2 gap-4 h-full">
                 <div className="relative w-full h-full bg-surface-container-high border border-border/10">
                   <Image src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2070&auto=format&fit=crop" fill alt="Archive 02" className="object-cover" />
                 </div>
                 <div className="relative w-full h-full bg-surface-container-highest flex items-center justify-center border border-border/10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center">
                   <div className="absolute inset-0 bg-background/80" />
                   <div className="relative z-10 text-center">
                     <div className="text-primary font-serif text-4xl mb-2">0-0</div>
                     <p className="text-foreground/50 font-sans text-xs tracking-widest">構造詳細</p>
                   </div>
                 </div>
               </div>
               <div className="relative w-full h-full bg-surface-container-high border border-border/10">
                 <Image src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2070&auto=format&fit=crop" fill alt="Archive 04" className="object-cover" />
               </div>
            </div>
          </div>
        </div>

        {/* TRANSFORMATION Section */}
        <div className="mb-32 text-center bg-surface-container-low p-8 md:p-16 border border-border/5">
          <h2 className="text-2xl font-serif text-primary tracking-widest mb-2 uppercase">ビフォーアフター</h2>
          <p className="text-foreground/50 font-sans text-xs tracking-widest mb-12 uppercase">TRANSFORMATION</p>
          
          <div className="relative w-full max-w-5xl mx-auto aspect-video mb-8 border border-border/20 shadow-2xl">
             <div className="absolute top-6 left-6 z-20 bg-background/80 backdrop-blur-sm px-4 py-2 text-foreground font-sans text-[10px] tracking-widest border border-border/20">
               施工前
             </div>
             <div className="absolute top-6 right-6 z-20 bg-primary px-4 py-2 text-primary-foreground font-sans text-[10px] tracking-widest font-bold">
               施工後
             </div>
             <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
                afterImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" 
             />
          </div>
          <p className="text-foreground/40 font-serif text-sm">
            スライダーを動かして、施工前後の変化をご覧ください。
          </p>
        </div>

        {/* RELATED WORKS Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-8 text-center md:text-left">関連実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedWorks.map(rw => (
               <Link href={`/works/${rw.id}`} key={rw.id} className="group block">
                 <div className="relative aspect-square overflow-hidden mb-6 border border-border/10">
                   <Image src={rw.img} alt={rw.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                 </div>
                 <p className="text-primary font-sans text-[10px] tracking-widest mb-2 uppercase">{rw.category}</p>
                 <h3 className="text-xl font-serif text-foreground mb-4 uppercase group-hover:text-primary transition-colors">{rw.title}</h3>
                 <span className="text-foreground/60 font-sans text-xs tracking-widest flex items-center group-hover:text-white transition-colors">
                   詳細を見る <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                 </span>
               </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
