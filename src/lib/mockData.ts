export const navigationLinks = [
  { href: "/", label: "PROJECTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/works", label: "ARCHIVE" },
  { href: "/company", label: "CULTURE" },
];

// Map actual paths to the labels to keep routing intact:
// HOME -> / 
// PROJECTS -> /works
// SERVICES -> /services
// ARCHIVE -> /archive (could be a subset of works, let's map it to /works for now if not specified)
// CULTURE -> /company
// CONTACT -> /contact

export const mockWorks = [
  { 
    id: 1, 
    title: "都心複合施設", 
    category: "新築", 
    year: "2024",
    description: "次世代の都市環境を形作るサステナブルな複合施設",
    location: "東京都港区",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "K邸リノベーション", 
    category: "リフォーム", 
    year: "2023",
    description: "歴史的素材を活かしたハイエンド住宅の再生",
    location: "京都府京都市",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "静寂なる禅庭", 
    category: "造園", 
    year: "2024",
    description: "静寂を形にした空間美。自然界と都市の融和を表現",
    location: "東京都渋谷区",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 4, 
    title: "真鍮と石材のファサード", 
    category: "外壁", 
    year: "2023",
    description: "真鍮と石材のコントラストが際立つファサード改修",
    location: "東京都中央区",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: 5, 
    title: "大自然のヴィラ", 
    category: "新築", 
    year: "2022",
    description: "大自然と調和するリトリートヴィラ",
    location: "長野県軽井沢町",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2188&auto=format&fit=crop"
  },
  { 
    id: 6, 
    title: "次世代ワークプレイス", 
    category: "新築", 
    year: "2023",
    description: "クリエイティビティを刺激する次世代ワークプレイス",
    location: "東京都新宿区",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  { 
    id: 7, 
    title: "銀座コンセプトストア", 
    category: "内装", 
    year: "2024",
    description: "ブランドフィロソフィーを体現した旗艦店",
    location: "東京都中央区",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 8, 
    title: "市立美術館の修復", 
    category: "解体・修復", 
    year: "2021",
    description: "歴史的建造物の記憶を継承する修復プロジェクト",
    location: "神奈川県横浜市",
    img: "https://images.unsplash.com/photo-1541888062828-b0ce01dfb006?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 9, 
    title: "スカイプール・ガーデン", 
    category: "造園", 
    year: "2024",
    description: "都市のオアシスとなるルーフトップラウンジ",
    location: "東京都港区",
    img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 10, 
    title: "極上スパ空間", 
    category: "リフォーム", 
    year: "2022",
    description: "黒を基調とした至極のリラクゼーション空間",
    location: "沖縄県那覇市",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 11, 
    title: "イノベーション研究拠点", 
    category: "新築", 
    year: "2024",
    description: "イノベーションを生み出す先進的な研究開発拠点",
    location: "茨城県つくば市",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: 12, 
    title: "美観足場システム", 
    category: "足場", 
    year: "2023",
    description: "安全と美観を両立させた独自の仮設足場システム",
    location: "東京都千代田区",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  }
];

export const mockTeam = [
  { name: "九条 誠一郎", role: "代表取締役社長", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
  { name: "西園寺 麗子", role: "クリエイティブディレクター", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  { name: "橘 宗助", role: "チーフエンジニア", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { name: "神宮寺 麻衣", role: "リードアーキテクト", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
  { name: "御子柴 健", role: "BIMスペシャリスト", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { name: "白銀 杏", role: "ランドスケープデザイナー", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop" },
];
