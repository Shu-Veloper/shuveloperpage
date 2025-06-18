export const projects = {
  web: [
    {
      id: 1,
      title: "Eコマースプラットフォーム",
      category: "Webアプリケーション",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Crect x='20' y='20' width='360' height='50' rx='8' fill='%23007bff'/%3E%3Ctext x='200' y='50' text-anchor='middle' fill='white' font-family='Arial' font-size='18' font-weight='bold'%3EShop Online%3C/text%3E%3C/svg%3E",
      description:
        "React + Node.jsで構築されたフルスタックEコマースサイト。ユーザー認証、決済処理、在庫管理機能を搭載。",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
    },
    // ... 다른 프로젝트들
  ],
  mobile: [
    {
      id: 4,
      title: "天気予報アプリ",
      category: "モバイルアプリ",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600' viewBox='0 0 300 600'%3E%3Crect width='300' height='600' rx='30' fill='%23007bff'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23ffc107'/%3E%3Ctext x='150' y='220' text-anchor='middle' fill='white' font-family='Arial' font-size='48' font-weight='bold'%3E25°%3C/text%3E%3Ctext x='150' y='250' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3E晴れ%3C/text%3E%3Crect x='30' y='300' width='240' height='60' rx='12' fill='white' fill-opacity='0.2'/%3E%3Ctext x='50' y='325' fill='white' font-family='Arial' font-size='14'%3E最高気温%3C/text%3E%3Ctext x='250' y='325' text-anchor='end' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E28°%3C/text%3E%3Ctext x='50' y='345' fill='white' font-family='Arial' font-size='14'%3E最低気温%3C/text%3E%3Ctext x='250' y='345' text-anchor='end' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E18°%3C/text%3E%3Crect x='30' y='380' width='240' height='100' rx='12' fill='white' fill-opacity='0.2'/%3E%3Ctext x='150' y='405' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3E7日間予報%3C/text%3E%3C/svg%3E",
      description:
        "リアルタイム天気情報と7日間予報を提供するネイティブモバイルアプリ。位置情報サービス統合。",
      tech: ["React Native", "OpenWeather API", "Redux", "AsyncStorage"],
      demo: "#",
      github: "#",
    },
  ],
};

export const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "React Native", level: 70 },
  { name: "Flutter", level: 65 },
];

export const tools = [
  "React",
  "Vue.js",
  "Node.js",
  "Python",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Flutter",
  "Swift",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "Figma",
  "Adobe XD",
  "Sketch",
];

export const personalInfo = {
  name: "shuveloper",
  title: "フルスタック開発者",
  description:
    "モバイルアプリからWebアプリケーションまで、ユーザー体験を重視した開発を行っています。",
  contact: {
    email: "shuveloper0308@gmail.com",
    phone: "+81-90-1234-5678",
    location: "東京都世田谷区",
  },
  social: {
    github: "https://github.com/Shu-Veloper",
    linkedin: "#",
    email: "#",
  },
};

//  const projects = {
//     web: [
//       {
//         id: 1,
//         title: "Eコマースプラットフォーム",
//         category: "Webアプリケーション",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Crect x='20' y='20' width='360' height='50' rx='8' fill='%23007bff'/%3E%3Ctext x='200' y='50' text-anchor='middle' fill='white' font-family='Arial' font-size='18' font-weight='bold'%3EShop Online%3C/text%3E%3Crect x='20' y='90' width='170' height='180' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Crect x='30' y='100' width='150' height='100' rx='4' fill='%23e9ecef'/%3E%3Crect x='30' y='210' width='100' height='12' rx='6' fill='%23dee2e6'/%3E%3Crect x='30' y='230' width='80' height='8' rx='4' fill='%23adb5bd'/%3E%3Crect x='210' y='90' width='170' height='180' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Crect x='220' y='100' width='150' height='100' rx='4' fill='%23e9ecef'/%3E%3Crect x='220' y='210' width='100' height='12' rx='6' fill='%23dee2e6'/%3E%3Crect x='220' y='230' width='80' height='8' rx='4' fill='%23adb5bd'/%3E%3C/svg%3E",
//         description:
//           "React + Node.jsで構築されたフルスタックEコマースサイト。ユーザー認証、決済処理、在庫管理機能を搭載。",
//         tech: ["React", "Node.js", "MongoDB", "Stripe"],
//         demo: "#",
//         github: "#",
//       },
//       {
//         id: 2,
//         title: "タスク管理システム",
//         category: "Webアプリケーション",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Crect x='20' y='20' width='360' height='40' rx='8' fill='%23343a40'/%3E%3Ctext x='200' y='45' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3ETask Manager%3C/text%3E%3Crect x='30' y='80' width='340' height='50' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Ccircle cx='55' cy='105' r='8' fill='%2328a745'/%3E%3Cpath d='M51 105 L54 108 L59 101' stroke='white' stroke-width='2' fill='none'/%3E%3Crect x='75' y='95' width='200' height='12' rx='6' fill='%23dee2e6'/%3E%3Crect x='75' y='110' width='150' height='8' rx='4' fill='%23adb5bd'/%3E%3Crect x='30' y='150' width='340' height='50' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Ccircle cx='55' cy='175' r='8' fill='%23ffc107'/%3E%3Crect x='75' y='165' width='200' height='12' rx='6' fill='%23dee2e6'/%3E%3Crect x='75' y='180' width='150' height='8' rx='4' fill='%23adb5bd'/%3E%3Crect x='30' y='220' width='340' height='50' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Ccircle cx='55' cy='245' r='8' fill='%23dee2e6'/%3E%3Crect x='75' y='235' width='200' height='12' rx='6' fill='%23dee2e6'/%3E%3Crect x='75' y='250' width='150' height='8' rx='4' fill='%23adb5bd'/%3E%3C/svg%3E",
//         description:
//           "チーム向けタスク管理アプリケーション。リアルタイム同期、プロジェクト管理、進捗追跡機能付き。",
//         tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
//         demo: "#",
//         github: "#",
//       },
//       {
//         id: 3,
//         title: "ポートフォリオサイト",
//         category: "Webサイト",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='400' height='80' fill='%23212529'/%3E%3Ctext x='200' y='50' text-anchor='middle' fill='white' font-family='Arial' font-size='24' font-weight='bold'%3EPortfolio%3C/text%3E%3Crect x='20' y='100' width='110' height='80' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Crect x='30' y='110' width='90' height='50' rx='4' fill='%23e9ecef'/%3E%3Crect x='30' y='165' width='60' height='8' rx='4' fill='%23dee2e6'/%3E%3Crect x='145' y='100' width='110' height='80' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Crect x='155' y='110' width='90' height='50' rx='4' fill='%23e9ecef'/%3E%3Crect x='155' y='165' width='60' height='8' rx='4' fill='%23dee2e6'/%3E%3Crect x='270' y='100' width='110' height='80' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Crect x='280' y='110' width='90' height='50' rx='4' fill='%23e9ecef'/%3E%3Crect x='280' y='165' width='60' height='8' rx='4' fill='%23dee2e6'/%3E%3Crect x='20' y='200' width='360' height='60' rx='8' fill='%23007bff' fill-opacity='0.1'/%3E%3Ctext x='200' y='235' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='16' font-weight='bold'%3EContact Me%3C/text%3E%3C/svg%3E",
//         description:
//           "レスポンシブデザインで構築された個人ポートフォリオサイト。アニメーション効果とモダンなUI/UX。",
//         tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
//         demo: "#",
//         github: "#",
//       },
//     ],
//     mobile: [
//       {
//         id: 4,
//         title: "天気予報アプリ",
//         category: "モバイルアプリ",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600' viewBox='0 0 300 600'%3E%3Crect width='300' height='600' rx='30' fill='%23007bff'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23ffc107'/%3E%3Ctext x='150' y='220' text-anchor='middle' fill='white' font-family='Arial' font-size='48' font-weight='bold'%3E25°%3C/text%3E%3Ctext x='150' y='250' text-anchor='middle' fill='white' font-family='Arial' font-size='18'%3E晴れ%3C/text%3E%3Crect x='30' y='300' width='240' height='60' rx='12' fill='white' fill-opacity='0.2'/%3E%3Ctext x='50' y='325' fill='white' font-family='Arial' font-size='14'%3E最高気温%3C/text%3E%3Ctext x='250' y='325' text-anchor='end' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E28°%3C/text%3E%3Ctext x='50' y='345' fill='white' font-family='Arial' font-size='14'%3E最低気温%3C/text%3E%3Ctext x='250' y='345' text-anchor='end' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3E18°%3C/text%3E%3Crect x='30' y='380' width='240' height='100' rx='12' fill='white' fill-opacity='0.2'/%3E%3Ctext x='150' y='405' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3E7日間予報%3C/text%3E%3C/svg%3E",
//         description:
//           "リアルタイム天気情報と7日間予報を提供するネイティブモバイルアプリ。位置情報サービス統合。",
//         tech: ["React Native", "OpenWeather API", "Redux", "AsyncStorage"],
//         demo: "#",
//         github: "#",
//       },
//       {
//         id: 5,
//         title: "フィットネストラッカー",
//         category: "モバイルアプリ",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600' viewBox='0 0 300 600'%3E%3Crect width='300' height='600' rx='30' fill='%23f8f9fa'/%3E%3Crect x='20' y='60' width='260' height='60' rx='12' fill='%2328a745'/%3E%3Ctext x='150' y='85' text-anchor='middle' fill='white' font-family='Arial' font-size='14'%3E今日の歩数%3C/text%3E%3Ctext x='150' y='105' text-anchor='middle' fill='white' font-family='Arial' font-size='24' font-weight='bold'%3E8,247%3C/text%3E%3Ccircle cx='150' cy='200' r='60' fill='none' stroke='%23dee2e6' stroke-width='8'/%3E%3Ccircle cx='150' cy='200' r='60' fill='none' stroke='%23007bff' stroke-width='8' stroke-dasharray='251.2' stroke-dashoffset='75.36' stroke-linecap='round' transform='rotate(-90 150 200)'/%3E%3Ctext x='150' y='205' text-anchor='middle' fill='%23007bff' font-family='Arial' font-size='20' font-weight='bold'%3E70%25%3C/text%3E%3Crect x='30' y='300' width='240' height='50' rx='8' fill='white' stroke='%23dee2e6'/%3E%3Ctext x='50' y='320' fill='%23495057' font-family='Arial' font-size='12'%3E消費カロリー%3C/text%3E%3Ctext x='250' y='320' text-anchor='end' fill='%23495057' font-family='Arial' font-size='12' font-weight='bold'%3E320 kcal%3C/text%3E%3Ctext x='50' y='335' fill='%23495057' font-family='Arial' font-size='12'%3E活動時間%3C/text%3E%3Ctext x='250' y='335' text-anchor='end' fill='%23495057' font-family='Arial' font-size='12' font-weight='bold'%3E45分%3C/text%3E%3C/svg%3E",
//         description:
//           "日々の運動量と健康データを追跡するフィットネスアプリ。目標設定と進捗管理機能付き。",
//         tech: ["Flutter", "Dart", "SQLite", "HealthKit"],
//         demo: "#",
//         github: "#",
//       },
//       {
//         id: 6,
//         title: "レシピ検索アプリ",
//         category: "モバイルアプリ",
//         image:
//           "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600' viewBox='0 0 300 600'%3E%3Crect width='300' height='600' rx='30' fill='%23f8f9fa'/%3E%3Crect x='20' y='60' width='260' height='40' rx='20' fill='white' stroke='%23dee2e6'/%3E%3Ctext x='40' y='85' fill='%23adb5bd' font-family='Arial' font-size='14'%3Eレシピを検索...%3C/text%3E%3Crect x='20' y='120' width='260' height='120' rx='12' fill='white' stroke='%23dee2e6'/%3E%3Crect x='30' y='130' width='240' height='80' rx='8' fill='%23fd7e14'/%3E%3Ctext x='150' y='175' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3E人気レシピ%3C/text%3E%3Ctext x='30' y='225' fill='%23495057' font-family='Arial' font-size='14' font-weight='bold'%3E和風パスタ%3C/text%3E%3Crect x='20' y='260' width='260' height='120' rx='12' fill='white' stroke='%23dee2e6'/%3E%3Crect x='30' y='270' width='240' height='80' rx='8' fill='%2320c997'/%3E%3Ctext x='150' y='315' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3E簡単レシピ%3C/text%3E%3Ctext x='30' y='365' fill='%23495057' font-family='Arial' font-size='14' font-weight='bold'%3E親子丼%3C/text%3E%3Crect x='20' y='400' width='260' height='120' rx='12' fill='white' stroke='%23dee2e6'/%3E%3Crect x='30' y='410' width='240' height='80' rx='8' fill='%23dc3545'/%3E%3Ctext x='150' y='455' text-anchor='middle' fill='white' font-family='Arial' font-size='16' font-weight='bold'%3E今日のおすすめ%3C/text%3E%3Ctext x='30' y='505' fill='%23495057' font-family='Arial' font-size='14' font-weight='bold'%3E鶏の照り焼き%3C/text%3E%3C/svg%3E",
//         description:
//           "レシピ検索と料理プランニングアプリ。お気に入り保存、買い物リスト生成機能を搭載。",
//         tech: ["Swift", "UIKit", "Core Data", "REST API"],
//         demo: "#",
//         github: "#",
//       },
//     ],
//   };
