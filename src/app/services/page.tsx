"use client";

import { motion } from "framer-motion";
import FAQSection from "@/components/sections/faq-section";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const services = [
  {
    id: "01",
    title: "商業施設開発",
    enTitle: "COMMERCIAL",
    description: "ランドマークとなる複合商業施設や、ブランドの思想を体現する旗艦店などの設計・施工を行います。集客力とデザイン性を両立し、都市の新しい価値を創出します。"
  },
  {
    id: "02",
    title: "ハイエンド住宅・リノベーション",
    enTitle: "RESIDENTIAL",
    description: "一切の妥協を排した邸宅建築。お客様のライフスタイルに合わせた唯一無二の空間を、選りすぐりの素材と卓越した職人技で形にします。"
  },
  {
    id: "03",
    title: "公共施設・オフィスビル",
    enTitle: "PUBLIC & OFFICE",
    description: "安全性、機能性、環境配慮を高い次元で満たす先進的なインフラ構築。次世代の働き方やコミュニティのあり方をデザインします。"
  },
  {
    id: "04",
    title: "外壁・屋根工事",
    enTitle: "EXTERIOR",
    description: "美観と耐久性を兼ね備えた外装リニューアル。最先端の素材と確かな施工技術で、建物の寿命を延ばし、資産価値を最大化します。"
  },
  {
    id: "05",
    title: "足場・鉄骨工事",
    enTitle: "SCAFFOLDING & STEEL",
    description: "全ての建築の骨格となる躯体工事と、安全な作業環境を支える仮設足場工事。徹底した安全管理のもと、大規模プロジェクトの基盤を構築します。"
  },
  {
    id: "06",
    title: "造園・外構工事",
    enTitle: "LANDSCAPING",
    description: "建築物と周辺環境を調和させるランドスケープデザイン。都市に自然の潤いをもたらし、訪れる人々に安らぎを与える空間を創造します。"
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full relative min-h-screen bg-background pt-32 pb-24 px-8 grid-pattern">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="mb-24"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <p className="text-primary font-sans text-sm tracking-[0.2em] mb-4">OUR SERVICES</p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground">事業内容</h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_OUT }}
            >
              <div className="col-span-1 md:col-span-5 relative aspect-[4/3] bg-surface-container-high border-[1px] border-border/20 flex items-center justify-center">
                 <p className="text-foreground/20 font-sans tracking-widest text-xs">IMG_{service.id}</p>
              </div>
              <div className="col-span-1 md:col-span-7 md:pl-16">
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-primary font-serif text-4xl leading-none">{service.id}.</span>
                  <h2 className="text-2xl md:text-3xl font-body font-bold text-foreground">{service.title}</h2>
                </div>
                <p className="text-foreground/40 font-sans tracking-widest text-xs mb-6 uppercase">{service.enTitle}</p>
                <p className="text-foreground/70 font-sans leading-loose tracking-wide">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <FAQSection />
      </div>
    </div>
  );
}
