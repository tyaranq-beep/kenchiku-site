import { motion } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const voices = [
  {
    id: 1,
    text: "商業空間の概念を根底から覆す、まさに建築の詩とも呼べる圧倒的な空間体験でした。",
    name: "佐藤 健二",
    title: "NEXUS HOLDINGS 代表取締役"
  },
  {
    id: 2,
    text: "力強さの中に潜む『シルク』のような繊細なディテールが、私たちの邸宅を光と優雅さに包まれたサンクチュアリへと昇華させてくれました。",
    name: "エレナ・ロッシ",
    title: "個人邸オーナー"
  },
  {
    id: 3,
    text: "あらゆるフェーズにおける圧倒的な精度。工期を前倒しで完了しながらも、類を見ない堅牢な構造美を実現していただきました。",
    name: "田中 浩司",
    title: "TOKYO MEDICAL HUB 理事長"
  }
];

export default function VoicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // A simple way to handle dot clicks if desired, but native css snap scroll handles the interaction
  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      scrollRef.current.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-32 bg-surface-container-low relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary tracking-widest mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          お客様の声
        </motion.h2>
        <motion.p 
          className="text-foreground/80 font-sans tracking-[0.2em] text-xs md:text-sm uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          VOICES
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden px-6 md:px-12 max-w-[1400px] mx-auto">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {voices.map((voice, idx) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-background/50 border border-primary/20 p-8 md:p-12 relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary mb-6" />
                <p className="text-foreground/80 font-serif italic text-lg leading-relaxed mb-8">
                  &quot;{voice.text}&quot;
                </p>
              </div>
              <div className="pl-4 border-l-2 border-primary">
                <p className="font-sans font-bold text-foreground text-sm tracking-wider">{voice.name}</p>
                <p className="font-sans text-xs text-primary/70 tracking-widest uppercase mt-1">{voice.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CSS for hiding scrollbar in webkit */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {voices.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => scrollTo(idx)}
            className="w-2 h-2 rounded-full bg-border transition-colors hover:bg-primary"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
