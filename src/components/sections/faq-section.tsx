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
    question: "対応エリアを教えてください。",
    answer: "主に一都三県（東京、神奈川、埼玉、千葉）を中心に対応しておりますが、\n大規模なプロジェクトの場合は全国対応も可能です。ご相談ください。"
  },
  {
    question: "御社の強みは何ですか？",
    answer: "創業65年以上の実績と、多数の一級建築士・施工管理技士が在籍している点です。\n企画・設計から施工、アフターケアまで一貫したサービスを提供できる総合力が強みです。"
  },
  {
    question: "個人宅のリノベーションにも対応していますか？",
    answer: "はい、対応しております。\n個人のお手洗い一つから、大型の商業施設まで幅広く手掛けております。\nまずは無料相談をご利用ください。"
  },
  {
    question: "設計から施工まで一貫してお願いできますか？",
    answer: "はい。当社は企画立案、設計、施工、またその後のメンテナンスやアフターケアまで、すべて自社でワンストップ対応が可能です。"
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
