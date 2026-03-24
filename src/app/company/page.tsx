"use client";

import { motion } from "framer-motion";
import { mockTeam } from "@/lib/mockData";
import { Building2, Palette, Wrench, Pencil, Monitor, Layers, User } from "lucide-react";

const EASE_OUT = [0.76, 0, 0.24, 1] as const;

const history = [
  { year: "2012", title: "設立", desc: "九条誠一郎個人建築設計事務所として東京都〇〇区にて創業。", side: "left" },
  { year: "2015", title: "MONOLITH & SILK へ改組", desc: "組織拡大に伴い法人化。「MONOLITH」と「SILK」をコアコンセプトとした株式会社に改組。", side: "right" },
  { year: "2018", title: "ASIA ARCHITECTURE AWARD 受賞", desc: 'プロジェクト「SILK PAVILION」がアジア建築賞でゴールデンデザイン賞を受賞。', side: "left" },
  { year: "2024", title: "サステナブル建築部門の創設", desc: "環境配慮型建築の専門チームを設立し、カーボンニュートラル設計に本格注力。", side: "right" },
];

const qualifications = [
  "一級建築士（22名）",
  "構造設計一級建築士（3名）",
  "設備設計一級建築士（3名）",
  "宅地建物取引士（3名）",
  "建設業許可 東京都知事許可（般-04）第XXXXX号",
  "一級建築士事務所 東京都知事登録 第XXXXX号",
];

/** 役職別アイコンマッピング */
const roleIcons: Record<string, React.ReactNode> = {
  "代表取締役 / 一級建築士": <Building2 className="w-10 h-10 text-[#d4a843]" />,
  "デザイン統括 / クリエイティブディレクター": <Palette className="w-10 h-10 text-[#d4a843]" />,
  "施工統括 / 技術部長": <Wrench className="w-10 h-10 text-[#d4a843]" />,
  "リードアーキテクト": <Pencil className="w-10 h-10 text-[#d4a843]" />,
  "BIMマネージャー": <Monitor className="w-10 h-10 text-[#d4a843]" />,
  "構造設計主任": <Layers className="w-10 h-10 text-[#d4a843]" />,
};

export default function CompanyPage() {
  return (
    <div className="w-full relative min-h-screen pb-24 grid-pattern z-10">
      {/* Page Hero */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 bg-surface-container-low" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <div className="relative z-20 text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#d4a843] tracking-widest mb-6"
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
            私たちの基盤と理念
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
            {/* アイコン代表アバター */}
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-[#1b2d40] border-2 border-[#d4a843]/40 flex items-center justify-center shadow-lg">
                <Building2 className="w-16 h-16 text-[#d4a843]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-[#d4a843] mb-6">常に本質を問い続ける。</h2>
              <p className="text-foreground/80 font-sans leading-loose tracking-wide mb-8">
                建築とは、単なる構造物ではありません。それは人々の記憶を形作る器であり、時代を超えて残る「モニュメント」です。<br /><br />
                我々が創業以来大切にしてきたのは、妥協なき品質へのこだわりと、細部に宿る美意識です。重厚なMONOLITHの力強さと、絹のようなSILKの繊細さ。この相反する要素を高度な次元で融合させることこそが、私たちの使命であると信じています。
              </p>
              <div className="text-right">
                <p className="font-serif text-2xl text-foreground">九条 誠一郎</p>
                <p className="font-sans text-xs tracking-widest text-[#d4a843] mt-1">代表取締役</p>
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
            {[
              { label: "社名", value: "株式会社モノリス＆シルク" },
              { label: "設立", value: "1998年4月1日" },
              { label: "資本金", value: "5,000万円" },
              { label: "所在地", value: "〒000-0000 東京都〇〇区〇〇1-1-1 デモビル30F" },
              { label: "事業内容", value: "建築工事・土木工事の企画、設計、施工 / 都市開発 / 歴史的建造物の修復" },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-1 md:grid-cols-4 py-6 border-b border-border/10">
                <div className="text-foreground/50 font-sans tracking-widest text-xs uppercase mb-2 md:mb-0">{row.label}</div>
                <div className="md:col-span-3 text-foreground font-sans text-sm tracking-wide">{row.value}</div>
              </div>
            ))}
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
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-16">沿革</h2>
          <div className="relative w-full py-8 text-left">
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#d4a843] opacity-30 md:-translate-x-1/2" />
            <div className="space-y-16">
              {history.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${item.side === "left" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block w-5/12" />
                  <div className="absolute left-[16px] md:left-1/2 w-3 h-3 bg-[#d4a843] rounded-full transform -translate-x-1/2 mt-3 md:mt-0 z-10" />
                  <div className="w-full md:w-5/12 pl-12 md:pl-0 flex flex-col pt-1 md:pt-0">
                    <p className={`text-[28px] text-[#d4a843] font-medium font-serif leading-none mb-3 ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>{item.year}</p>
                    <h3 className={`text-lg font-bold font-sans text-foreground mb-3 ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>{item.title}</h3>
                    <p className={`text-foreground/70 font-sans text-sm leading-relaxed ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
          <h2 className="text-2xl font-serif text-foreground tracking-widest border-b border-border/10 pb-6 mb-8">保有資格・許可証</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {qualifications.map((q, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] block shrink-0" />
                <p className="text-foreground/80 font-sans text-sm tracking-wide">{q}</p>
              </div>
            ))}
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
                {/* アイコンアバターカード */}
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 border border-border/10 bg-[#0d1f2d] flex flex-col items-center justify-center gap-4 group-hover:border-[#d4a843]/50 transition-colors duration-500">
                  {/* 装飾グリッド */}
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage: "linear-gradient(#d4a843 1px, transparent 1px), linear-gradient(90deg, #d4a843 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="w-20 h-20 rounded-full bg-[#1b2d40] border border-[#d4a843]/30 flex items-center justify-center group-hover:border-[#d4a843]/70 transition-colors duration-500 z-10">
                    {roleIcons[member.role] ?? <User className="w-10 h-10 text-[#d4a843]" />}
                  </div>
                  <div className="text-center px-4 z-10">
                    <p className="text-[#d4a843]/60 font-sans text-[10px] tracking-widest uppercase">{member.ruby}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold font-sans text-foreground mb-1 group-hover:text-[#d4a843] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#d4a843] font-sans text-[10px] tracking-widest uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
