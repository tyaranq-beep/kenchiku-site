"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ServicesSection from "@/components/sections/services-section";
import WorksSection from "@/components/sections/works-section";
import StrengthsSection from "@/components/sections/strengths-section";
import VoicesSection from "@/components/sections/testimonials-section"; 
import Link from "next/link";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

// 斜め開閉アニメーション
const skewVariants = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.9, ease: EASE_OUT }
  }
};

// 行ごとのテキストアニメーション
const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_OUT }
  }
};

// パーティクルコンポーネント
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 2,
    opacity: Math.random() * 0.07 + 0.08,
    duration: Math.random() * 4 + 4,
    delay: Math.random() * 3,
    x: Math.random() * 100, // vw
    y: Math.random() * 100, // vh
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-primary rounded-full will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -25, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full relative">
      <FloatingParticles />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden z-10 bg-background rounded-b-3xl shadow-2xl"
      >
        <motion.div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ y: bgY }}
        >
          {/* Unsplash Background */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" 
          />
          <div className="absolute inset-0 bg-background/70 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
        </motion.div>

        <motion.div 
          className="relative z-30 flex flex-col justify-center px-6 md:px-12 w-full max-w-7xl mx-auto h-full"
          style={{ y: textY, opacity }}
        >
          <motion.div 
            className="mb-8 flex flex-col gap-2"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 2.3 }}
          >
            <div className="overflow-hidden py-2 px-1">
              <motion.h1 variants={lineVariants} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-tight uppercase font-bold text-shadow-lg drop-shadow-md">
                時を超える建築を、
              </motion.h1>
            </div>
            <div className="overflow-hidden py-2 px-1">
              <motion.h1 variants={lineVariants} className="flex items-center text-4xl md:text-6xl lg:text-7xl font-serif text-primary tracking-tight leading-tight uppercase font-bold text-shadow-lg drop-shadow-md">
                この地に。
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
            className="overflow-hidden mb-auto mt-6 max-w-lg"
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 2.8 }} 
          >
            <motion.p variants={lineVariants} className="text-white/80 font-sans tracking-widest text-sm md:text-base leading-relaxed border-l-2 border-primary pl-4 py-1">
              圧倒的な強度と、絹のような繊細さ。<br />
              時代を超えて価値を高め続ける空間の創造。
            </motion.p>
          </motion.div>

          {/* Bottom elements of Hero */}
          <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-xs font-sans tracking-[0.2em] text-white/70 z-30">
            <motion.div 
              className="w-8 h-[1px] bg-white/30"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 3, duration: 1 }}
            />
            スクロールして詳細を見る
          </div>

          <div className="absolute bottom-12 right-6 md:right-12 z-30">
             <Link href="/contact" className="hidden md:flex items-center px-8 py-4 bg-primary text-primary-foreground font-sans tracking-widest text-sm font-bold hover:bg-white hover:text-background transition-colors shadow-lg">
               無料相談はこちら
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Section - Overlaps Hero */}
      <section className="sticky top-0 w-full min-h-[80vh] bg-surface-container-low py-32 px-8 flex items-center z-20 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative w-full aspect-[4/5] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={skewVariants}
          >
            <div className="w-full h-full bg-surface-container-highest/80 border-[1px] border-primary/20 flex items-center justify-center">
              <span className="text-foreground/30 font-sans tracking-widest text-xs">建築イメージ</span>
            </div>
            {/* <Image src="/placeholder-arch.jpg" fill alt="Architecture" className="object-cover" /> */}
          </motion.div>

          <div className="flex flex-col justify-center">
            {/* Title with Gold Line */}
            <motion.div 
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.div 
                className="w-full max-w-[60px] h-[1.5px] bg-primary mb-6"
                variants={{
                  hidden: { width: "0%" },
                  visible: { width: "60px", transition: { duration: 0.5, ease: EASE_OUT } }
                }}
              />
              <motion.p 
                className="text-primary font-sans tracking-[0.2em] text-sm uppercase mb-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.4 } }
                }}
              >
                Philosophy
              </motion.p>
              <div className="overflow-hidden">
                <motion.h2 
                  className="font-serif text-3xl md:text-5xl text-foreground leading-snug"
                  variants={lineVariants}
                >
                  圧倒的な強度と、<br/>
                  絹のような繊細さ。
                </motion.h2>
              </div>
            </motion.div>

            <motion.p 
              className="text-foreground/70 font-sans leading-relaxed text-base md:text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
            >
              我々の建築は単なる構造物ではありません。
              都市の風景に溶け込み、時を超えて価値を提供し続ける「モニュメント」です。
              一切の妥協を排した技術力と、細部に宿る美意識が、新たな空間の在り方を提示します。
            </motion.p>
          </div>
        </div>
      </section>

      <ServicesSection />

      <WorksSection />

      <StrengthsSection />

      <VoicesSection />

      <section className="sticky top-0 w-full min-h-[50vh] bg-background py-32 px-8 flex items-center justify-center z-50">
         <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-primary">お問い合わせ</h2>
            <p className="text-foreground/70 font-sans tracking-widest mb-12">最高峰の建築ソリューションを、あなたに。</p>
            <a href="/contact" className="inline-block px-12 py-5 bg-primary text-primary-foreground font-sans font-bold hover:bg-white transition-colors duration-500">
               ご相談・お問い合わせ
            </a>
         </div>
      </section>
    </div>
  );
}
