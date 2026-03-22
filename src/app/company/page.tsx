"use client";

import { motion } from "framer-motion";
import { mockTeam } from "@/lib/mockData";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

export default function CompanyPage() {
  return (
    <div className="w-full relative min-h-screen pb-24 grid-pattern z-10">
      {/* Page Hero */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 bg-surface-container-low" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary tracking-widest mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            企業情報
          </motion.h1>
          <motion.p 
            className="text-foreground/80 font-sans tracking-[0.2em] text-xs md:text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            OUR FOUNDATION & PEOPLE
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
        {/* CEO MESSAGE */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shrink-0 border border-primary/20 bg-surface-container-high flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                <circle cx="50" cy="35" r="18" stroke="#d4a843" strokeWidth="2"/>
                <path d="M20 90 C20 68 80 68 80 90" stroke="#d4a843" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-primary mb-6">常に本質を問い続ける。</h2>
              <p className="text-foreground/80 font-sans leading-loose tracking-wide mb-8">
                建築とは、単なる構造物ではありません。それは人々の記憶を形作る器であり、時代を超えて残る「モニュメント」です。<br/><br/>
                我々が創業以来大切にしてきたのは、妥協なき品質へのこだわりと、細部に宿る美意識です。重厚なMONOLITHの力強さと、絹のようなSILKの繊細さ。この相反する要素を高度な次元で融合させることこそが、私たちの使命であると信じています。
              </p>
              <div className="text-right">
                <p className="font-serif text-2xl text-foreground">建築 太郎</p>
                <p className="font-sans text-xs tracking-widest text-primary mt-1">代表取締役</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMPANY DATA */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-8">会社情報</h2>
          <div className="border-t border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
              <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">社名</div>
              <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide">株式会社モノリス＆シルク</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
              <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">設立</div>
              <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide">1998年4月1日</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
              <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">資本金</div>
              <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide">5,000万円</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
              <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">所在地</div>
              <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide leading-relaxed">
                〒000-0000<br/>東京都〇〇区〇〇1-2-3 デモビル 99F
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
              <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">事業内容</div>
              <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide leading-relaxed">
                1. 建築工事・土木工事の企画、測量、設計、監理、施工<br/>
                2. 都市開発、地域開発、不動産開発に関する事業<br/>
                3. 歴史的建造物の修復および保存事業<br/>
                4. 前各号に附帯関連する一切の事業
              </div>
            </div>
          </div>
        </motion.section>

        {/* HISTORY */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-8">沿革</h2>
          <div className="relative border-l border-primary/30 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
            
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-primary font-serif text-xl mb-2">1998</p>
              <h3 className="font-sans font-bold text-foreground mb-2">株式会社モノリス建築設計事務所として創業</h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">東京都港区にて、商業施設の設計施工を主軸として事業を開始。</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-primary font-serif text-xl mb-2">2005</p>
              <h3 className="font-sans font-bold text-foreground mb-2">都市開発事業部を設立</h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">大規模な複合施設のコンペティションにて最優秀賞を受賞。これを機に都市開発領域へ進出。</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-primary font-serif text-xl mb-2">2012</p>
              <h3 className="font-sans font-bold text-foreground mb-2">社名を MONOLITH & SILK に変更</h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">内装デザイン・素材調達部門である「SILK」部門を統合。構造からディテールまでの一貫した美学を確立。</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-primary font-serif text-xl mb-2">2020</p>
              <h3 className="font-sans font-bold text-foreground mb-2">サステナビリティ推進室を開設</h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">カーボンニュートラルな建築手法の研究開発を開始。国内外から高い評価を得る。</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-primary" />
              <p className="text-primary font-serif text-xl mb-2">2024</p>
              <h3 className="font-sans font-bold text-foreground mb-2">モニュメントタワーへ本社移転</h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">事業拡大に伴い、フラッグシップ拠点として現在の最新鋭オフィスへ移転。</p>
            </div>

          </div>
        </motion.section>

        {/* TEAM */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-12">専門家チーム</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mockTeam.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 border border-border/10 bg-surface-container-high flex items-center justify-center">
                  <img 
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <h3 className="text-lg font-bold font-sans text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-sans text-[10px] tracking-widest uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* QUALIFICATIONS */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-8">保有資格</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-center gap-4 border-b border-border/5 pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
              <p className="text-foreground/80 font-sans text-sm tracking-wide">一級建築士事務所 東京都知事登録 第00000号</p>
            </div>
            <div className="flex items-center gap-4 border-b border-border/5 pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
              <p className="text-foreground/80 font-sans text-sm tracking-wide">特定建設業許可 国土交通大臣 (特-00) 第00000号</p>
            </div>
            <div className="flex items-center gap-4 border-b border-border/5 pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
              <p className="text-foreground/80 font-sans text-sm tracking-wide">品質マネジメントシステム ISO 9001 認証取得</p>
            </div>
            <div className="flex items-center gap-4 border-b border-border/5 pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
              <p className="text-foreground/80 font-sans text-sm tracking-wide">環境マネジメントシステム ISO 14001 認証取得</p>
            </div>
            <div className="flex items-center gap-4 border-b border-border/5 pb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block shrink-0" />
              <p className="text-foreground/80 font-sans text-sm tracking-wide">宅地建物取引業者 免許証番号 東京都知事(0)第00000号</p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
