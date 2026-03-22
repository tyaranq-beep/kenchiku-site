import { motion } from "framer-motion";

const strengths = [
  {
    num: "01",
    title: "圧倒的な技術力",
    enTitle: "Technical Mastery",
    desc: "最先端のBIM設計と伝統的な職人技の融合による精密な施工。"
  },
  {
    num: "02",
    title: "独自のマテリアル調達",
    enTitle: "Material Sourcing",
    desc: "世界中の上質な石材や職人による特注素材の独自のネットワーク。"
  },
  {
    num: "03",
    title: "サステナビリティ",
    enTitle: "Sustainability",
    desc: "カーボンニュートラルな建築手法による、永続的な未来への誓い。"
  },
  {
    num: "04",
    title: "テーラーメイド設計",
    enTitle: "Bespoke Curation",
    desc: "住まう人のアイデンティティに合わせて、あらゆる細部を最適化。"
  }
];

export default function StrengthsSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 relative z-20 border-t border-border/10 grid-pattern">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Left Column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              選ばれる理由
            </motion.h2>
            <motion.p 
              className="text-foreground/70 font-sans leading-relaxed text-base max-w-sm mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              妥協なき品質と、圧倒的な技術力。<br className="hidden md:block" />
              私たちは単なる建築を超え、何世代にもわたって価値を放つ「環境のモニュメント」を創り出します。
            </motion.p>
          </div>

          <div className="flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-2">30+</div>
              <div className="text-[10px] md:text-xs font-sans tracking-widest text-foreground/50 uppercase">YEARS OF EXPERTISE</div>
            </motion.div>
            
            <div className="w-[1px] h-12 bg-border/20" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-2">1.2k</div>
              <div className="text-[10px] md:text-xs font-sans tracking-widest text-foreground/50 uppercase">PROJECTS COMPLETED</div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-1" /> {/* Spacer */}
        <div className="md:col-span-6 flex flex-col gap-8">
          {strengths.map((item, idx) => (
            <motion.div 
              key={item.num}
              className="flex gap-6 md:gap-8 items-start pb-8 border-b border-border/10 last:border-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              <span className="text-primary font-serif text-xl md:text-2xl mt-1">{item.num}</span>
              <div>
                <h3 className="text-lg md:text-xl font-body font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-foreground/40 font-sans tracking-widest uppercase mb-1">{item.enTitle}</p>
                <p className="text-sm text-foreground/80 font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
