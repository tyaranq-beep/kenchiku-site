import { motion } from "framer-motion";
import { Building2, Home, Grid3x3, Wind, Trees, Hammer, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    num: "01",
    enTitle: "CONTRACTING",
    title: "工務店・建築工事",
    desc: "新築・増改築・リフォームまで幅広く対応します。",
    icon: <Building2 className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/service-01-commercial.jpg"
  },
  {
    num: "02",
    enTitle: "EXTERIOR",
    title: "外壁・屋根工事",
    desc: "外壁塗装・防水・屋根修繕・板金工事。",
    icon: <Home className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/service-04-exterior.jpg"
  },
  {
    num: "03",
    enTitle: "SCAFFOLDING",
    title: "足場・鉄骨工事",
    desc: "仮設足場・鉄骨建方・溶接・鍛冶工事。",
    icon: <Grid3x3 className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/service-05-scaffolding.jpg"
  },
  {
    num: "04",
    enTitle: "AIR CONDITIONING",
    title: "空調・衛生設備",
    desc: "冷暖房・換気・給排水・ガス配管工事。",
    icon: <Wind className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/work-10-hvac.jpg"
  },
  {
    num: "05",
    enTitle: "LANDSCAPING",
    title: "外構・造園工事",
    desc: "エクステリア・庭園設計・舗装・植栽。",
    icon: <Trees className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/service-06-landscaping.jpg"
  },
  {
    num: "06",
    enTitle: "DEMOLITION",
    title: "解体・土木工事",
    desc: "建物解体・地盤改良・土工・舗装工事。",
    icon: <Hammer className="w-8 h-8 text-[#d4a843]" />,
    image: "/images/work-09-demolition.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 relative z-20 border-t border-border/10 grid-pattern">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col mb-16">
          <motion.p 
            className="text-[#d4a843] font-sans text-[11px] tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            私たちのサービス
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
              className="group relative bg-surface-container-high overflow-hidden flex flex-col justify-between transition-all duration-500 border border-border/10 cursor-pointer h-full min-h-[400px]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/60 to-transparent" />

              <div className="relative z-10 p-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-foreground/30 font-serif text-2xl font-light">{service.num}</span>
                  <div className="p-3 bg-[#1b2d40]/80 rounded-lg backdrop-blur-sm border border-white/5">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4 tracking-wider">{service.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed font-sans">{service.desc}</p>
              </div>
              
              <div className="relative z-10 p-10 mt-auto flex items-center text-[#d4a843] font-sans text-xs font-bold tracking-widest">
                <Link href="/services" className="flex items-center hover:opacity-80 transition-opacity">
                  詳しく見る
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
