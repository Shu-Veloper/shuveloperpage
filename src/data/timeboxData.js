import timeboxMain from "../assets/images/timebox-main.png";
import timeboxCalendar from "../assets/images/timebox-calendar.png";
import timeboxSettings from "../assets/images/timebox-settings.png";
export const timeboxData = {
  title: "時間割プラナー",
  slug: "timebox",
  category: "モバイルアプリ",
  description:
    "日々のスケジュール管理とタスク追跡を効率化するモバイルアプリ。直感的なUIで時間管理を最適化し、目標達成をサポートします。",
  longDescription:
    "タイムボックスは現代の忙しい生活において、効率的な時間管理を実現するために開発されたモバイルアプリケーションです。シンプルで直感的なインターフェースを通じて、日々のタスクやスケジュールを簡単に管理できます。",
  tech: [
    "React Native",
    "JavaScript",
    "AsyncStorage",
    "Calendar API",
    "Push Notifications",
  ],
  features: [
    "直感的なスケジュール管理",
    "タスクの進捗追跡",
    "カスタマイズ可能なメモ機能",
    "カレンダー統合",
    "スマート通知設定",
    "ローカルデータ保存",
    "目標設定と達成追跡",
  ],
  screenshots: [
    {
      src: timeboxMain,
      title: "メイン画面",
      description: "今日のタスクとスケジュールを一目で確認",
    },
    {
      src: timeboxCalendar,
      title: "カレンダービュー",
      description: "月間カレンダーで長期的な予定管理",
    },
    {
      src: timeboxSettings,
      title: "設定画面",
      description: "通知設定とアプリのカスタマイズ",
    },
  ],
  links: {
    privacyPolicy: "/shuveloperpage/timebox/privacypolicy",
    termsOfService: "/shuveloperpage/timebox/termsofservice",
  },
};
