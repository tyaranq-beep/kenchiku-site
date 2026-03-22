"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const faqs = [
  {
    question: "設計・施工の対応エリアを教えてください。",
    answer: "東京都・神奈川県・埼玉県・千葉県を中心に、関東全域に対応しております。\n大規模プロジェクトについては全国対応も承っております。\nまずはお気軽にお問い合わせください。"
  },
  {
    question: "デモ建築株式会社の強みは何ですか？",
    answer: "創業65年以上の実績と、一級建築士を含む有資格者が多数在籍している点です。\n設計から施工・アフターフォローまで自社一貫体制で対応するため、\n品質管理が徹底されており、お客様に安心してお任せいただけます。"
  },
  {
    question: "個人の住宅リノベーションも依頼できますか？",
    answer: "はい、もちろん対応しております。個人のお客様の住宅リノベーションから、\n大規模商業施設の建設まで、規模を問わずお受けしております。\nまずは無料相談をご利用ください。現地調査から丁寧に対応いたします。"
  },
  {
    question: "設計から施工までの一貫対応は可能ですか？",
    answer: "可能です。企画・設計・施工・監理・アフターフォローを\nすべて自社内で一貫して行っております。\n窓口が一本化されることで、スムーズなコミュニケーションと\nコスト削減が実現できます。"
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-24 bg-background grid-pattern">
      <div className="max-w-4xl mx-auto w-full px-8">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: EASE_OUT }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">FAQ</h2>
          <p className="text-foreground/70 font-sans tracking-widest text-sm">よくあるご質問</p>
        </motion.div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/30">
                <AccordionTrigger className="text-left font-sans text-base md:text-lg hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-sans leading-relaxed text-sm md:text-base pb-6 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
