export const navigationLinks = [
  { href: "/works", label: "施工事例" },
  { href: "/services", label: "事業内容" },
  { href: "/company", label: "企業情報" },
  { href: "/contact", label: "お問い合わせ" },
];

// カテゴリ別 SVG プレースホルダー画像（外部依存ゼロ・Vercel対応）
// data URI は使用しなくなったため削除

export const mockWorks = [
  {
    id: 1,
    title: "都心複合施設",
    category: "新築",
    year: "2024",
    description: "次世代の都市環境を形作るサステナブルな複合施設",
    location: "架空県 港市",
    img: "/images/work-01-commercial.jpg",
    gallery: [
      "/images/work-01-gallery-1.jpg",
      "/images/work-01-gallery-2.jpg",
      "/images/work-01-gallery-3.jpg",
      "/images/work-01-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-01-before.jpg",
      after: "/images/work-01-after.jpg"
    }
  },
  {
    id: 2,
    title: "K邸リノベーション",
    category: "リフォーム",
    year: "2023",
    description: "歴史的素材を活かしたハイエンド住宅の再生",
    location: "架空都市 デモ区",
    img: "/images/work-02-residential.jpg",
    gallery: [
      "/images/work-02-gallery-1.jpg",
      "/images/work-02-gallery-2.jpg",
      "/images/work-02-gallery-3.jpg",
      "/images/work-02-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-02-before.jpg",
      after: "/images/work-02-after.jpg"
    }
  },
  {
    id: 3,
    title: "静寂なる禅庭",
    category: "造園",
    year: "2024",
    description: "静寂を形にした空間美。自然界と都市の融和を表現",
    location: "架空県 架空市",
    img: "/images/work-03-garden.jpg",
    gallery: [
      "/images/work-03-gallery-1.jpg",
      "/images/work-03-gallery-2.jpg",
      "/images/work-03-gallery-3.jpg",
      "/images/work-03-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-03-before.jpg",
      after: "/images/work-03-after.jpg"
    }
  },
  {
    id: 4,
    title: "真鍮と石材のファサード",
    category: "外壁",
    year: "2023",
    description: "真鍮と石材のコントラストが際立つファサード改修",
    location: "架空県 プレースホルダ市",
    img: "/images/work-04-exterior.jpg",
    gallery: [
      "/images/work-04-gallery-1.jpg",
      "/images/work-04-gallery-2.jpg",
      "/images/work-04-gallery-3.jpg",
      "/images/work-04-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-04-before.jpg",
      after: "/images/work-04-after.jpg"
    }
  },
  {
    id: 5,
    title: "大自然のヴィラ",
    category: "新築",
    year: "2022",
    description: "大自然と調和するリトリートヴィラ",
    location: "架空県 サンプル市",
    img: "/images/work-05-library.jpg",
    gallery: [
      "/images/work-05-gallery-1.jpg",
      "/images/work-05-gallery-2.jpg",
      "/images/work-05-gallery-3.jpg",
      "/images/work-05-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-05-before.jpg",
      after: "/images/work-05-after.jpg"
    }
  },
  {
    id: 6,
    title: "次世代ワークプレイス",
    category: "新築",
    year: "2023",
    description: "クリエイティビティを刺激する次世代ワークプレイス",
    location: "架空都市 テスト区",
    img: "/images/work-06-clinic.jpg",
    gallery: [
      "/images/work-06-gallery-1.jpg",
      "/images/work-06-gallery-2.jpg",
      "/images/work-06-gallery-3.jpg",
      "/images/work-06-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-06-before.jpg",
      after: "/images/work-06-after.jpg"
    }
  },
  {
    id: 7,
    title: "銀座コンセプトストア",
    category: "内装",
    year: "2024",
    description: "ブランドフィロソフィーを體現した旗艦店",
    location: "架空都市 モック区",
    img: "/images/work-07-urban.jpg",
    gallery: [
      "/images/work-07-gallery-1.jpg",
      "/images/work-07-gallery-2.jpg",
      "/images/work-07-gallery-3.jpg",
      "/images/work-07-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-07-before.jpg",
      after: "/images/work-07-after.jpg"
    }
  },
  {
    id: 8,
    title: "市立美術館の修復",
    category: "解体・修復",
    year: "2021",
    description: "歴史的建造物の記憶を継承する修復プロジェクト",
    location: "架空県 ダミー市",
    img: "/images/work-08-office.jpg",
    gallery: [
      "/images/work-08-gallery-1.jpg",
      "/images/work-08-gallery-2.jpg",
      "/images/work-08-gallery-3.jpg",
      "/images/work-08-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-08-before.jpg",
      after: "/images/work-08-after.jpg"
    }
  },
  {
    id: 9,
    title: "スカイプール・ガーデン",
    category: "造園",
    year: "2024",
    description: "都市のオアシスとなるルーフトップラウンジ",
    location: "架空県 見本市",
    img: "/images/work-09-warehouse.jpg",
    gallery: [
      "/images/work-09-gallery-1.jpg",
      "/images/work-09-gallery-2.jpg",
      "/images/work-09-gallery-3.jpg",
      "/images/work-09-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-09-before.jpg",
      after: "/images/work-09-after.jpg"
    }
  },
  {
    id: 10,
    title: "極上スパ空間",
    category: "リフォーム",
    year: "2022",
    description: "黒を基調とした至極のリラクゼーション空間",
    location: "架空県 テンプレ市",
    img: "/images/work-10-rooftop.jpg",
    gallery: [
      "/images/work-10-gallery-1.jpg",
      "/images/work-10-gallery-2.jpg",
      "/images/work-10-gallery-3.jpg",
      "/images/work-10-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-10-before.jpg",
      after: "/images/work-10-after.jpg"
    }
  },
  {
    id: 11,
    title: "イノベーション研究拠点",
    category: "新築",
    year: "2024",
    description: "イノベーションを生み出す先進的な研究開発拠点",
    location: "架空県 開発市",
    img: "/images/work-11-hardscape.jpg",
    gallery: [
      "/images/work-11-gallery-1.jpg",
      "/images/work-11-gallery-2.jpg",
      "/images/work-11-gallery-3.jpg",
      "/images/work-11-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-11-before.jpg",
      after: "/images/work-11-after.jpg"
    }
  },
  {
    id: 12,
    title: "美観足場システム",
    category: "足場",
    year: "2023",
    description: "安全と美観を両立させた独自の仮設足場システム",
    location: "架空都市 架空区",
    img: "/images/work-12-hotel.jpg",
    gallery: [
      "/images/work-12-gallery-1.jpg",
      "/images/work-12-gallery-2.jpg",
      "/images/work-12-gallery-3.jpg",
      "/images/work-12-gallery-4.jpg",
    ],
    beforeAfter: {
      before: "/images/work-12-before.jpg",
      after: "/images/work-12-after.jpg"
    }
  },
];

export const mockTeam = [
  { name: "九条 誠一郎", ruby: "KUJO SEICHIRO", role: "代表取締役 / 一級建築士", img: "/images/work-01-commercial.jpg" },
  { name: "SILK 華子", ruby: "SILK HANAKO", role: "デザイン統括 / クリエイティブディレクター", img: "/images/work-02-residential.jpg" },
  { name: "MONOLITH 剛", ruby: "MONOLITH TAKESHI", role: "施工統括 / 技術部長", img: "/images/work-03-garden.jpg" },
  { name: "佐藤 美咲", ruby: "SATO MISAKI", role: "リードアーキテクト", img: "/images/work-04-exterior.jpg" },
  { name: "鈴木 健太", ruby: "SUZUKI KENTA", role: "BIMマネージャー", img: "/images/work-05-library.jpg" },
  { name: "田中 直樹", ruby: "TANAKA NAOKI", role: "構造設計主任", img: "/images/work-06-scaffold.jpg" },
];
