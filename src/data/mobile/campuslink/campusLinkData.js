import campuslink1 from "../../../assets/images/campuslink/campuslink1.png";
import campuslink2 from "../../../assets/images/campuslink/campuslink2.png";
import campuslink3 from "../../../assets/images/campuslink/campuslink3.png";
import campuslink4 from "../../../assets/images/campuslink/campuslink4.png";
import campuslink5 from "../../../assets/images/campuslink/campuslink5.png";
import campuslink6 from "../../../assets/images/campuslink/campuslink6.png";

export const campusLinkData = {
  title: "大学リンク",
  slug: "campuslink",
  category: "モバイルアプリ",
  link: "campuslink",
  description:
    "大学内での新しい出会いとつながりを促進するマッチングアプリ。同じキャンパス内の学生同士が安全で楽しいコミュニケーションを楽しめます。",
  longDescription:
    "大学リンクは、同じ大学に通う学生同士の新しい出会いとコミュニケーションを促進するために開発されたマッチングアプリケーションです。相性診断システムと安全な認証機能により、信頼できる環境での交流を実現します。友達探しから恋愛まで、様々な形での出会いをサポートし、充実したキャンパスライフを応援します。",
  tech: [
    "Flutter",
    "Dart",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Storage",
  ],
  features: [
    "大学メール認証システム",
    "相性スコアに基づくマッチング",
    "安全なチャット機能",
    "詳細なプロフィール管理",
    "興味・関心によるフィルタリング",
    "MBTI性格診断連携",
    "プライバシー保護機能",
    "部適切なコンテンツ報告システム",
    "ユーザーブロック機能",
    "24時間以内の報告処理",
    "アカウント完全削除機能",
    "コンテンツフィルタリング",
  ],
  screenshots: [
    {
      src: campuslink1,
      title: "マッチング画面",
      description: "マッチング画面",
    },
    {
      src: campuslink2,
      title: "マッチング成功画面",
      description: "マッチング成功画面",
    },
    {
      src: campuslink3,
      title: "ランダムマッチング画面",
      description: "ランダムマッチング",
    },
    {
      src: campuslink4,
      title: "掲示板画面",
      description: "掲示板画面",
    },
    {
      src: campuslink5,
      title: "ホーム画面",
      description: "ホーム画面",
    },
    {
      src: campuslink6,
      title: "プロフィール画面",
      description: "プロフィール画面",
    },
  ],
  links: {
    privacyPolicy: "/shuveloperpage/campuslink/privacypolicy",
    termsOfService: "/shuveloperpage/campuslink/termsofservice",
    support: "/shuveloperpage/campuslink/support",
    accountDeletion: "/shuveloperpage/campuslink/account-deletion",
    safety: "/shuveloperpage/campuslink/safety",
  },
};
