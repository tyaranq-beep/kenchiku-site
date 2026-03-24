"use client";

import { motion } from "framer-motion";
import FAQSection from "@/components/sections/faq-section";
import Image from "next/image";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const services = [
  {
    id: "01",
    title: "商業施設開発",
    enTitle: "COMMERCIAL",
    description: "ランドマークとなる複合商業施設や、ブランドの思想を体現する旗艦店などの設計・施工を行います。集客力とデザイン性を両立し、都市の新しい価値を創出します。",
    image: "/images/service-01-commercial.jpg"
  },
  {
    id: "02",
    title: "ハイエンド住宅・リノベーション",
    enTitle: "RESIDENTIAL",
    description: "一切の妥協を排した邸宅建築。お客様のライフスタイルに合わせた唯一無二の空間を、選りすぐりの素材と卓越した職人技で形にします。",
    image: "/images/service-02-residential.jpg"
  },
  {
    id: "03",
    title: "公共施設・オフィスビル",
    enTitle: "PUBLIC & OFFICE",
    description: "安全性、機能性、環境配慮を高い次元で満たす先進的なインフラ構築。次世代の働き方やコミュニティのあり方をデザインします。",
    image: "/images/service-03-public.jpg"
  },
  {
    id: "04",
    title: "外壁・屋根工事",
    enTitle: "EXTERIOR WORK",
    description: "外壁塗装・防水処理・屋根葺き替え・板金工事など、建物の外装に関わる全ての工事に対応します。\n対応業務: 外壁塗装 / シーリング工事 / 屋根修繕 / 防水工事",
    image: "/images/service-04-exterior.jpg"
  },
  {
    id: "05",
    title: "足場・仮設工事",
    enTitle: "SCAFFOLDING",
    description: "大型建造物から一般住宅まで、安全で効率的な仮設足場の設計・施工を行います。\n対応業務: 枠組足場 / 単管足場 / クサビ足場 / 解体足場",
    image: "/images/service-05-scaffolding.jpg"
  },
  {
    id: "06",
    title: "外構・造園工事",
    enTitle: "LANDSCAPING",
    description: "建物を引き立てる外構・エクステリアの設計から施工まで。自然と建築が調和する空間を創出します。\n対応業務: 庭園設計 / 植栽工事 / 舗装工事 / フェンス設置",
    image: "/images/service-06-landscaping.jpg"
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
          <p className="text-[#d4a843] font-sans text-sm tracking-[0.2em] mb-4 uppercase">OUR SERVICES</p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground">事業内容</h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-24">
          {services.map((service, index) => {
            return (
              <motion.div 
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_OUT }}
              >
                <div className="col-span-1 md:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
                </div>
                <div className="col-span-1 md:col-span-7 md:pl-8">
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-[#d4a843] font-serif text-4xl leading-none">{service.id}.</span>
                    <h2 className="text-2xl md:text-3xl font-body font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-foreground/40 font-sans tracking-widest text-xs mb-6 uppercase">{service.enTitle}</p>
                  <p className="text-foreground/70 font-sans leading-loose tracking-wide whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="mt-32">
        <FAQSection />
      </div>
    </div>
  );
}
