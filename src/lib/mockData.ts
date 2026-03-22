export const navigationLinks = [
  { href: "/", label: "PROJECTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/works", label: "ARCHIVE" },
  { href: "/company", label: "CULTURE" },
];

// カテゴリ別 SVG プレースホルダー画像（外部依存ゼロ・Vercel対応）
// data URI で直接埋め込み済みのため next/image の remotePatterns 不要

/** カテゴリに対応したSVGのdata URI を返す */
function svgPlaceholder(
  label: string,
  icon: "building" | "house" | "garden" | "wall" | "scaffold" | "interior" | "office" | "person" | "pool" | "spa" | "lab" | "map",
  bg = "#0d1d2e",
  fg = "#d4a843"
): string {
  const icons: Record<string, string> = {
    building: `<rect x="28" y="20" width="44" height="60" rx="2" fill="none" stroke="${fg}" stroke-width="2"/><rect x="36" y="30" width="8" height="8" rx="1" fill="${fg}" opacity=".5"/><rect x="56" y="30" width="8" height="8" rx="1" fill="${fg}" opacity=".5"/><rect x="36" y="48" width="8" height="8" rx="1" fill="${fg}" opacity=".5"/><rect x="56" y="48" width="8" height="8" rx="1" fill="${fg}" opacity=".5"/><rect x="44" y="60" width="12" height="20" rx="1" fill="${fg}" opacity=".4"/>`,
    house: `<path d="M50 20 L25 45 L35 45 L35 70 L65 70 L65 45 L75 45 Z" fill="none" stroke="${fg}" stroke-width="2" stroke-linejoin="round"/><rect x="44" y="52" width="12" height="18" rx="1" fill="${fg}" opacity=".4"/>`,
    garden: `<circle cx="50" cy="35" r="18" fill="none" stroke="${fg}" stroke-width="2"/><path d="M50 53 L50 72" stroke="${fg}" stroke-width="2"/><path d="M35 62 Q50 55 65 62" stroke="${fg}" stroke-width="1.5" fill="none"/><circle cx="35" cy="38" r="10" fill="none" stroke="${fg}" stroke-width="1.5" opacity=".5"/><circle cx="65" cy="38" r="10" fill="none" stroke="${fg}" stroke-width="1.5" opacity=".5"/>`,
    wall: `<rect x="20" y="28" width="60" height="10" rx="1" fill="none" stroke="${fg}" stroke-width="2"/><rect x="20" y="44" width="60" height="10" rx="1" fill="none" stroke="${fg}" stroke-width="2"/><rect x="20" y="60" width="60" height="10" rx="1" fill="none" stroke="${fg}" stroke-width="2"/>`,
    scaffold: `<line x1="30" y1="20" x2="30" y2="80" stroke="${fg}" stroke-width="2"/><line x1="70" y1="20" x2="70" y2="80" stroke="${fg}" stroke-width="2"/><line x1="25" y1="35" x2="75" y2="35" stroke="${fg}" stroke-width="1.5"/><line x1="25" y1="50" x2="75" y2="50" stroke="${fg}" stroke-width="1.5"/><line x1="25" y1="65" x2="75" y2="65" stroke="${fg}" stroke-width="1.5"/><line x1="30" y1="35" x2="70" y2="50" stroke="${fg}" stroke-width="1" opacity=".5"/><line x1="30" y1="50" x2="70" y2="65" stroke="${fg}" stroke-width="1" opacity=".5"/>`,
    interior: `<rect x="22" y="22" width="56" height="56" rx="2" fill="none" stroke="${fg}" stroke-width="2"/><path d="M22 60 L45 40 L58 52 L68 42 L78 60" stroke="${fg}" stroke-width="1.5" fill="none"/><rect x="32" y="30" width="14" height="14" rx="1" fill="${fg}" opacity=".3"/>`,
    office: `<rect x="25" y="18" width="50" height="64" rx="2" fill="none" stroke="${fg}" stroke-width="2"/><rect x="32" y="26" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/><rect x="48" y="26" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/><rect x="58" y="26" width="10" height="10" rx="1" fill="${fg}" opacity=".4" style="display:none"/><rect x="32" y="42" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/><rect x="48" y="42" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/><rect x="32" y="58" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/><rect x="48" y="58" width="10" height="10" rx="1" fill="${fg}" opacity=".4"/>`,
    person: `<circle cx="50" cy="32" r="12" fill="none" stroke="${fg}" stroke-width="2"/><path d="M26 80 C26 62 74 62 74 80" fill="none" stroke="${fg}" stroke-width="2"/>`,
    pool: `<rect x="22" y="35" width="56" height="35" rx="2" fill="none" stroke="${fg}" stroke-width="2"/><path d="M22 50 Q34 43 46 50 Q58 57 70 50 Q76 47 78 50" stroke="${fg}" stroke-width="1.5" fill="none" opacity=".6"/><path d="M18 30 L18 15 M26 30 L26 15 M34 30 L34 15" stroke="${fg}" stroke-width="1.5" opacity=".4"/>`,
    spa: `<path d="M50 25 C37 25 28 34 28 47 C28 60 37 70 50 72 C63 70 72 60 72 47 C72 34 63 25 50 25 Z" fill="none" stroke="${fg}" stroke-width="2"/><path d="M42 47 C44 42 50 40 50 40 C50 40 56 42 58 47" stroke="${fg}" stroke-width="1.5" fill="none" opacity=".6"/>`,
    lab: `<rect x="30" y="22" width="40" height="28" rx="2" fill="none" stroke="${fg}" stroke-width="2"/><path d="M38 50 L32 72 L68 72 L62 50" fill="none" stroke="${fg}" stroke-width="2"/><line x1="38" y1="60" x2="62" y2="60" stroke="${fg}" stroke-width="1.5" opacity=".5"/>`,
    map: `<path d="M50 20 C38 20 28 30 28 42 C28 56 50 80 50 80 C50 80 72 56 72 42 C72 30 62 20 50 20 Z" fill="none" stroke="${fg}" stroke-width="2"/><circle cx="50" cy="42" r="8" fill="${fg}" opacity=".4"/>`,
  };

  const svgContent = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>
    <rect width='100' height='100' fill='${bg}'/>
    ${icons[icon]}
    <text x='50' y='92' font-family='sans-serif' font-size='7' fill='${fg}' opacity='.5' text-anchor='middle'>${label}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
}

export const mockWorks = [
  {
    id: 1,
    title: "都心複合施設",
    category: "新築",
    year: "2024",
    description: "次世代の都市環境を形作るサステナブルな複合施設",
    location: "東京都港区",
    img: svgPlaceholder("新築", "building"),
  },
  {
    id: 2,
    title: "K邸リノベーション",
    category: "リフォーム",
    year: "2023",
    description: "歴史的素材を活かしたハイエンド住宅の再生",
    location: "京都府京都市",
    img: svgPlaceholder("リフォーム", "house"),
  },
  {
    id: 3,
    title: "静寂なる禅庭",
    category: "造園",
    year: "2024",
    description: "静寂を形にした空間美。自然界と都市の融和を表現",
    location: "東京都渋谷区",
    img: svgPlaceholder("造園", "garden"),
  },
  {
    id: 4,
    title: "真鍮と石材のファサード",
    category: "外壁",
    year: "2023",
    description: "真鍮と石材のコントラストが際立つファサード改修",
    location: "東京都中央区",
    img: svgPlaceholder("外壁", "wall"),
  },
  {
    id: 5,
    title: "大自然のヴィラ",
    category: "新築",
    year: "2022",
    description: "大自然と調和するリトリートヴィラ",
    location: "長野県軽井沢町",
    img: svgPlaceholder("新築", "house"),
  },
  {
    id: 6,
    title: "次世代ワークプレイス",
    category: "新築",
    year: "2023",
    description: "クリエイティビティを刺激する次世代ワークプレイス",
    location: "東京都新宿区",
    img: svgPlaceholder("新築", "office"),
  },
  {
    id: 7,
    title: "銀座コンセプトストア",
    category: "内装",
    year: "2024",
    description: "ブランドフィロソフィーを体現した旗艦店",
    location: "東京都中央区",
    img: svgPlaceholder("内装", "interior"),
  },
  {
    id: 8,
    title: "市立美術館の修復",
    category: "解体・修復",
    year: "2021",
    description: "歴史的建造物の記憶を継承する修復プロジェクト",
    location: "神奈川県横浜市",
    img: svgPlaceholder("修復", "building"),
  },
  {
    id: 9,
    title: "スカイプール・ガーデン",
    category: "造園",
    year: "2024",
    description: "都市のオアシスとなるルーフトップラウンジ",
    location: "東京都港区",
    img: svgPlaceholder("造園", "pool"),
  },
  {
    id: 10,
    title: "極上スパ空間",
    category: "リフォーム",
    year: "2022",
    description: "黒を基調とした至極のリラクゼーション空間",
    location: "沖縄県那覇市",
    img: svgPlaceholder("リフォーム", "spa"),
  },
  {
    id: 11,
    title: "イノベーション研究拠点",
    category: "新築",
    year: "2024",
    description: "イノベーションを生み出す先進的な研究開発拠点",
    location: "茨城県つくば市",
    img: svgPlaceholder("新築", "lab"),
  },
  {
    id: 12,
    title: "美観足場システム",
    category: "足場",
    year: "2023",
    description: "安全と美観を両立させた独自の仮設足場システム",
    location: "東京都千代田区",
    img: svgPlaceholder("足場", "scaffold"),
  },
];

export const mockTeam = [
  { name: "九条 誠一郎", role: "代表取締役社長", img: svgPlaceholder("代表", "person") },
  { name: "西園寺 麗子", role: "クリエイティブディレクター", img: svgPlaceholder("CD", "person") },
  { name: "橘 宗助", role: "チーフエンジニア", img: svgPlaceholder("CE", "person") },
  { name: "神宮寺 麻衣", role: "リードアーキテクト", img: svgPlaceholder("LA", "person") },
  { name: "御子柴 健", role: "BIMスペシャリスト", img: svgPlaceholder("BIM", "person") },
  { name: "白銀 杏", role: "ランドスケープデザイナー", img: svgPlaceholder("LD", "person") },
];
