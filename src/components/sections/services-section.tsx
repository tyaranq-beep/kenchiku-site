import { motion } from "framer-motion";
import { PenTool, Box, Navigation, Ruler, Hammer, Building2 } from "lucide-react";

const services = [
  {
    num: "01",
    title: "建築設計・都市計画",
    enTitle: "Architectural Design",
    desc: "時を超える美しさと機能性を兼ね備えた建築の設計",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    num: "02",
    title: "インテリアデザイン",
    enTitle: "Interior Refinement",
    desc: "素材の質感を最大限に引き出すハイエンドな内装設計",
    icon: <Box className="w-5 h-5" />
  },
  {
    num: "03",
    title: "都市開発・まちづくり",
    enTitle: "Urban Planning",
    desc: "地域社会と調和する次世代のランドスケープデザイン",
    icon: <Navigation className="w-5 h-5" />
  },
  {
    num: "04",
    title: "土木・基礎工事",
    enTitle: "Civil Engineering",
    desc: "一切の妥協を排した、100年後の安全を担保する基盤構築",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    num: "05",
    title: "歴史的建造物の修復",
    enTitle: "Historical Restoration",
    desc: "伝統的な工法と最新技術の融合による文化財の保存再生",
    icon: <Hammer className="w-5 h-5" />
  },
  {
    num: "06",
    title: "建築投資コンサルティング",
    enTitle: "Consultation",
    desc: "事業性を考慮した最適な不動産開発・活用プランのご提案",
    icon: <Building2 className="w-5 h-5" />
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 relative z-20 border-t border-border/10 grid-pattern">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              事業内容
            </motion.h2>
            <motion.p 
              className="text-primary font-sans font-bold tracking-widest text-sm uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              OUR EXPERTISE
            </motion.p>
          </div>
          
          <motion.p 
            className="md:max-w-md text-foreground/60 font-serif italic text-lg leading-relaxed border-l-2 border-primary/20 pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            &quot;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&quot;
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-high p-10 flex flex-col justify-between group hover:bg-surface-container-highest transition-colors duration-500 border border-border/5"
            >
              <div>
                <span className="text-foreground/30 font-serif text-2xl mb-8 block font-light">{service.num}</span>
                <h3 className="text-xl font-body font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <h4 className="text-xs font-sans text-foreground/40 uppercase tracking-widest mb-6">{service.enTitle}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-sans">{service.desc}</p>
              </div>
              <div className="mt-12 text-primary">
                {service.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
