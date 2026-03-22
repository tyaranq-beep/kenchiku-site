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
    answer: "基本的には日本全国対応可能です。東京都内および近郊エリア以外でもご相談を承っておりますので、お問い合わせフォームよりお気軽にご連絡ください。"
  },
  {
    question: "デモ建築株式会社の強みは何ですか？",
    answer: "長年培ってきた「確かな構造設計力」と、洗練された「シルクのような繊細な意匠設計」の両立です。また、これらを具現化する高い施工品質も当社の大きな強みとして評価されています。"
  },
  {
    question: "個人の住宅リノベーションも依頼できますか？",
    answer: "はい、可能です。「RESIDENTIAL（ハイエンド住宅・リノベーション）」部門にて、お客様のライフスタイルに合わせた唯一無二の空間設計および施工をご提供しております。"
  },
  {
    question: "設計から施工までの一貫対応は可能ですか？",
    answer: "可能です。設計と施工を当社で一貫して担うことで、初期設計の思想をディテールに至るまで正確に反映させることが可能です。"
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-24 bg-background">
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
                <AccordionContent className="text-foreground/70 font-sans leading-relaxed text-sm md:text-base pb-6">
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
