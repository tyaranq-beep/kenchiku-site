"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ServicesSection from "@/components/sections/services-section";
import WorksSection from "@/components/sections/works-section";
import StrengthsSection from "@/components/sections/strengths-section";
import VoicesSection from "@/components/sections/testimonials-section"; 
import Link from "next/link";
import Image from "next/image";
import { StatCounter } from "@/components/StatCounter";

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
        className="relative w-full h-screen flex flex-col justify-center overflow-hidden z-10 bg-background rounded-b-3xl shadow-2xl"
      >
        <motion.div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ y: bgY }}
        >
          {/* Hero Background */}
          <div className="absolute inset-0">
             <Image src="/images/hero-bg.jpg" alt="Hero Image" fill priority className="object-cover" quality={95} />
          </div>
          <div className="absolute inset-0 bg-background/70 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
        </motion.div>

        <motion.div 
          className="relative z-30 flex flex-col justify-end pb-[15vh] px-6 md:px-12 w-full max-w-7xl mx-auto h-full"
          style={{ y: textY, opacity }}
        >
          <motion.div 
            className="mb-8 flex flex-col gap-2 mt-32 md:mt-48"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 2.3 }}
          >
            <motion.p variants={lineVariants} className="font-sans text-[11px] tracking-[0.15em] text-[#d4a843] mb-2 uppercase">
              ESTABLISHED 1959 — TOKYO
            </motion.p>
            <div className="overflow-visible py-4 px-2">
              <motion.h1 variants={lineVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#e8f0f8] tracking-tight leading-normal uppercase font-bold text-shadow-lg drop-shadow-md">
                時を超える建築を、
              </motion.h1>
            </div>
            <div className="overflow-visible py-4 px-2 -mt-4">
              <motion.h1 variants={lineVariants} className="flex items-center text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4a843] italic tracking-tight leading-normal uppercase font-bold text-shadow-lg drop-shadow-md">
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
            <motion.p variants={lineVariants} className="text-[#8faabb] font-sans tracking-widest text-sm leading-[1.8] border-l-2 border-[#d4a843] pl-4 py-1">
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
             <Link href="/contact" className="hidden md:flex items-center px-8 py-4 bg-[#d4a843] text-[#061423] font-sans tracking-widest text-sm font-bold hover:bg-white hover:text-[#061423] transition-colors shadow-lg">
               無料相談はこちら
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Section - Overlaps Hero */}
      <section className="relative w-full min-h-[80vh] bg-surface-container-low py-32 px-8 flex items-center z-20 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative w-full aspect-[4/5] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={skewVariants}
          >
            <Image
                src="/images/philosophy-bg.jpg"
                alt="企業理念イメージ"
                fill
                className="object-cover grayscale-[20%]"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            <div className="absolute inset-0 bg-background/30 z-10" />
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
                企業理念
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

      {/* Stats Section */}
      <section className="w-full py-20 bg-background relative z-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <StatCounter target={2400} suffix="+" label="施工実績件数" />
          <StatCounter target={99}   suffix="%" label="顧客満足度" duration={1.5} />
          <StatCounter target={65}   suffix="年" label="創業からの歴史" duration={2.0} />
        </div>
      </section>

      <div className="bg-background relative z-20 w-full overflow-hidden">
        <ServicesSection />

        <StrengthsSection />

        <VoicesSection />

        <WorksSection />
      </div>

      <section className="relative w-full min-h-[50vh] bg-background py-32 px-8 flex items-center justify-center z-50">
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
