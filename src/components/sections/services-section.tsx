import { motion } from "framer-motion";
import { Building2, Home, Grid3x3, Wind, Trees, Hammer, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    enTitle: "CONTRACTING",
    title: "工務店・建築工事",
    desc: "新築・増改築・リフォームまで幅広く対応します。",
    icon: <Building2 className="w-8 h-8 text-[#d4a843]" />
  },
  {
    num: "02",
    enTitle: "EXTERIOR",
    title: "外壁・屋根工事",
    desc: "外壁塗装・防水・屋根修繕・板金工事。",
    icon: <Home className="w-8 h-8 text-[#d4a843]" />
  },
  {
    num: "03",
    enTitle: "SCAFFOLDING",
    title: "足場・鉄骨工事",
    desc: "仮設足場・鉄骨建方・溶接・鍛冶工事。",
    icon: <Grid3x3 className="w-8 h-8 text-[#d4a843]" />
  },
  {
    num: "04",
    enTitle: "AIR CONDITIONING",
    title: "空調・衛生設備",
    desc: "冷暖房・換気・給排水・ガス配管工事。",
    icon: <Wind className="w-8 h-8 text-[#d4a843]" />
  },
  {
    num: "05",
    enTitle: "LANDSCAPING",
    title: "外構・造園工事",
    desc: "エクステリア・庭園設計・舗装・植栽。",
    icon: <Trees className="w-8 h-8 text-[#d4a843]" />
  },
  {
    num: "06",
    enTitle: "DEMOLITION",
    title: "解体・土木工事",
    desc: "建物解体・地盤改良・土工・舗装工事。",
    icon: <Hammer className="w-8 h-8 text-[#d4a843]" />
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 relative z-20 border-t border-border/10 grid-pattern">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <motion.p 
            className="text-[#d4a843] font-sans text-[11px] tracking-widest lowercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            our services
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            事業内容
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "#d4a843" }}
              className="bg-surface-container-high p-10 flex flex-col justify-between transition-colors duration-300 border border-border/10 cursor-pointer h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-foreground/30 font-serif text-2xl font-light">{service.num}</span>
                  <div className="p-3 bg-[#1b2d40] rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold font-sans text-foreground mb-1 tracking-wider">{service.enTitle}</h4>
                <h3 className="text-sm font-sans text-foreground/70 mb-6">{service.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-sans min-h-[40px]">{service.desc}</p>
              </div>
              <div className="mt-8 flex items-center text-[#d4a843] font-sans text-xs font-bold tracking-widest group">
                <Link href="/services" className="flex items-center hover:opacity-80 transition-opacity">
                  詳しく見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
