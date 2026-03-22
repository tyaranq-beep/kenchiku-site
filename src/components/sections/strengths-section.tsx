"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    num: "01",
    title: "技術力の継承",
    desc: "最新の設計技術と、職人が受け継いできた伝統技法を融合させた施工を行います。"
  },
  {
    num: "02",
    title: "素材の厳選",
    desc: "国内外の上質な素材を独自ルートで調達。品質と価格を両立します。"
  },
  {
    num: "03",
    title: "サステナビリティ",
    desc: "環境に配慮したカーボンニュートラル工法を積極的に採用しています。"
  },
  {
    num: "04",
    title: "オーダーメイド対応",
    desc: "お客様の想いを丁寧にヒアリングし、唯一無二の空間を実現します。"
  }
];

export default function StrengthsSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 relative z-20 bg-background grid-pattern">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <motion.p 
            className="text-[#d4a843] font-sans text-sm font-bold tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            私たちの強み
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            選ばれる理由
          </motion.h2>
          <motion.p 
            className="text-foreground/70 font-sans leading-relaxed text-base md:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            図面の先に、人々の暮らしがある。4つの柱を軸に、妥協なき品質を追求します。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-7xl md:text-8xl font-serif text-[#d4a843] mb-2 shadow-sm">65+</h3>
              <p className="font-sans font-bold tracking-widest text-foreground/60 text-sm">年の歴史と実績</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-7xl md:text-8xl font-serif text-[#d4a843] mb-2 shadow-sm">2.4k</h3>
              <p className="font-sans font-bold tracking-widest text-foreground/60 text-sm">件以上の施工実績</p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-10 justify-center">
            {strengths.map((item, idx) => (
              <motion.div 
                key={item.num}
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-2xl font-serif text-foreground/30 font-light mt-1 w-12 shrink-0">{item.num}</div>
                <div>
                  <h4 className="text-xl font-body font-bold text-foreground mb-3 group-hover:text-[#d4a843] transition-colors duration-300">{item.title}</h4>
                  <p className="font-sans text-foreground/70 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
