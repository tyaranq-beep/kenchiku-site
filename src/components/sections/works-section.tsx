import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { mockWorks } from "@/lib/mockData";

export default function WorksSection() {
  const displayWorks = mockWorks.slice(0, 3);

  return (
    <section className="w-full py-32 relative z-20">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          施工実績
        </motion.h2>
        <motion.p 
          className="text-primary font-sans font-bold tracking-widest text-sm uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          これまでの軌跡
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-y border-border/10">
        {displayWorks.map((work, idx) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="group relative aspect-square sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden border-r border-border/10 last:border-r-0"
          >
            <Link href={`/works/${work.id}`}>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src={work.img} 
                alt={work.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                quality={90}
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary font-sans text-xs font-bold tracking-widest mb-3 block uppercase">{work.category}</span>
                <h3 className="text-2xl font-serif text-white">{work.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="w-full flex justify-center mt-16">
        <Link href="/works" className="inline-flex items-center text-primary font-sans font-bold text-sm tracking-widest hover:text-white transition-colors gap-2 group">
          すべての実績を見る
          <span className="w-6 h-[1px] bg-primary group-hover:w-10 group-hover:bg-white transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
