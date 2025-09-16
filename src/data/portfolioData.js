import timeboxMain from "../assets/images/timebox-main.png";
import timeboxCalendar from "../assets/images/timebox-calendar.png";
import timeboxSettings from "../assets/images/timebox-settings.png";
import applicationicon from "../assets/images/applicationicon.png";
import campuslink1 from "../../../assets/images/campuslink/campuslink1.png";
import campuslink2 from "../../../assets/images/campuslink/campuslink2.png";
import campuslink3 from "../../../assets/images/campuslink/campuslink3.png";
import campuslink4 from "../../../assets/images/campuslink/campuslink4.png";
import campuslink5 from "../../../assets/images/campuslink/campuslink5.png";
import campuslink6 from "../../../assets/images/campuslink/campuslink6.png";
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
  ],
  mobile: [
    {
      id: 4,
      title: "タイムボックス",
      slug: "timebox",
      category: "モバイルアプリ",
      image: applicationicon, // 첫 번째 이미지 경로
      description:
        "日々のスケジュール管理とタスク追跡を効率化するモバイルアプリ。直感的なUIで時間管理を最適化し、目標達成をサポートします。",
      tech: ["React Native", "JavaScript", "AsyncStorage", "Calendar API"],
      demo: "/shuveloperpage/timebox/privacypolicy", // 프라이버시 정책 링크
      github: "#",
      features: [
        "スケジュール管理",
        "タスク追跡",
        "メモ機能",
        "カレンダー統合",
        "通知設定",
        "データローカル保存",
      ],
      screenshots: [timeboxMain, timeboxCalendar, timeboxSettings],
    },
    {
      id: 5,
      title: "キャンパスリンク",
      slug: "campuslink",
      category: "モバイルアプリ",
      image: null,
      description:
        "大学内での新しい出会いとつながりを促進するマッチングアプリ。同じキャンパス内の学生同士が安全で楽しいコミュニケーションを楽しめます。",
      tech: ["Flutter", "Dart", "Firebase"],
      demo: "#",
      github: "#",
      features: [
        "掲示板",
        "チャット機能",
        "プロフィール管理",
        "マッチング機能",
        "授業管理",
      ],
      screenshots: [
        campuslink1,
        campuslink2,
        campuslink3,
        campuslink4,
        campuslink5,
        campuslink6,
      ],
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
