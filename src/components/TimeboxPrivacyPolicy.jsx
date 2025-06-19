import React from "react";

export default function TimeboxPrivacyPolicy() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", sans-serif',
      lineHeight: "1.7",
      color: "#333",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      padding: "40px 0",
    },
    appTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "white",
      textShadow: "0 4px 20px rgba(0,0,0,0.3)",
      marginBottom: "10px",
      background: "linear-gradient(45deg, #ffffff, #e0e7ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    appSubtitle: {
      fontSize: "1.2rem",
      color: "rgba(255,255,255,0.9)",
      fontWeight: "300",
    },
    content: {
      background: "white",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.2)",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#4f46e5",
      marginBottom: "10px",
      fontWeight: "700",
    },
    sectionMeta: {
      color: "#6b7280",
      marginBottom: "30px",
      fontSize: "0.9rem",
    },
    article: {
      marginBottom: "30px",
      padding: "25px",
      background: "#f8fafc",
      borderRadius: "15px",
      borderLeft: "4px solid #4f46e5",
      transition: "all 0.3s ease",
    },
    articleTitle: {
      fontSize: "1.3rem",
      color: "#1e293b",
      marginBottom: "15px",
      fontWeight: "600",
    },
    articleContent: {
      color: "#475569",
      lineHeight: "1.8",
    },
    highlightBox: {
      background: "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
      padding: "20px",
      borderRadius: "12px",
      margin: "20px 0",
      border: "1px solid #a5b4fc",
    },
    highlightTitle: {
      color: "#3730a3",
      marginBottom: "10px",
      fontWeight: "600",
      fontSize: "1.1rem",
    },
    infoList: {
      listStyle: "none",
      paddingLeft: "0",
      margin: "15px 0",
    },
    listItem: {
      padding: "8px 0",
      borderBottom: "1px solid #e2e8f0",
      position: "relative",
      paddingLeft: "25px",
    },
    listItemLast: {
      borderBottom: "none",
    },
    checkmark: {
      position: "absolute",
      left: "0",
      color: "#10b981",
      fontWeight: "bold",
    },
    xmark: {
      position: "absolute",
      left: "0",
      color: "#ef4444",
      fontWeight: "bold",
    },
    developerInfo: {
      background: "linear-gradient(135deg, #fef3c7, #fde68a)",
      padding: "20px",
      borderRadius: "15px",
      margin: "20px 0",
      border: "1px solid #f59e0b",
    },
  };

  const CollectItem = ({ children, isLast = false }) => (
    <li style={{ ...styles.listItem, ...(isLast ? styles.listItemLast : {}) }}>
      <span style={styles.checkmark}>✓</span>
      {children}
    </li>
  );

  const NotCollectItem = ({ children, isLast = false }) => (
    <li style={{ ...styles.listItem, ...(isLast ? styles.listItemLast : {}) }}>
      <span style={styles.xmark}>✗</span>
      {children}
    </li>
  );

  const ListItem = ({ children, isLast = false }) => (
    <li style={{ ...styles.listItem, ...(isLast ? styles.listItemLast : {}) }}>
      <span style={styles.checkmark}>✓</span>
      {children}
    </li>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appTitle}>📋 タイムボックス</h1>
        <p style={styles.appSubtitle}>プライバシーポリシー</p>
      </header>

      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>プライバシーポリシー</h2>
        <p style={styles.sectionMeta}>
          <strong>制定日：2025年6月19日</strong> |{" "}
          <strong>最終更新日：2025年6月19日</strong>
        </p>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第1条（はじめに）</h3>
          <div style={styles.articleContent}>
            タイムボックス（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、本アプリにおける個人情報の取り扱いについて定めるものです。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第2条（収集する情報）</h3>
          <div style={styles.articleContent}>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>📊 収集する情報</h4>
              <ul style={styles.infoList}>
                <CollectItem>
                  スケジュールデータ（お客様が入力したタスク、メモ、時間割）
                </CollectItem>
                <CollectItem>通知設定情報</CollectItem>
                <CollectItem isLast>
                  アプリの利用状況（匿名化された統計情報）
                </CollectItem>
              </ul>
            </div>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>🚫 収集しない情報</h4>
              <ul style={styles.infoList}>
                <NotCollectItem>
                  お名前、住所、電話番号などの個人識別情報
                </NotCollectItem>
                <NotCollectItem>位置情報</NotCollectItem>
                <NotCollectItem>連絡先</NotCollectItem>
                <NotCollectItem>写真や動画</NotCollectItem>
                <NotCollectItem isLast>他のアプリの情報</NotCollectItem>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第3条（情報の利用目的）</h3>
          <div style={styles.articleContent}>
            収集した情報は以下の目的で利用します：
            <ul style={styles.infoList}>
              <ListItem>
                アプリの機能提供（スケジュール管理、通知機能）
              </ListItem>
              <ListItem>アプリの改善と最適化</ListItem>
              <ListItem isLast>技術的な問題の解決</ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第4条（情報の保存場所と期間）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>
                <strong>スケジュールデータ：</strong>{" "}
                お客様のデバイス内のみに保存され、外部に送信されません
              </ListItem>
              <ListItem>
                <strong>通知設定：</strong> お客様のデバイス内のみに保存
              </ListItem>
              <ListItem isLast>
                <strong>利用統計：</strong>{" "}
                匿名化後、当方のサーバーで最大30日間保存
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第5条（第三者への提供）</h3>
          <div style={styles.articleContent}>
            本アプリは、お客様の個人情報を第三者に販売、貸与、または提供することはありません。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第6条（データの安全性）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>
                すべてのデータはお客様のデバイス内に安全に保存されます
              </ListItem>
              <ListItem>外部サーバーへの個人データ送信は行いません</ListItem>
              <ListItem isLast>
                業界標準のセキュリティ対策を実施しています
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第7条（お客様の権利）</h3>
          <div style={styles.articleContent}>
            お客様には以下の権利があります：
            <ul style={styles.infoList}>
              <ListItem>
                アプリをアンインストールすることで、すべてのデータを削除する権利
              </ListItem>
              <ListItem>通知設定をいつでも変更する権利</ListItem>
              <ListItem isLast>
                本プライバシーポリシーについて質問する権利
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第8条（子どものプライバシー）</h3>
          <div style={styles.articleContent}>
            本アプリは13歳未満のお客様から意図的に個人情報を収集することはありません。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>
            第9条（プライバシーポリシーの変更）
          </h3>
          <div style={styles.articleContent}>
            本プライバシーポリシーを変更する場合は、アプリ内で通知いたします。継続してアプリをご利用いただくことで、変更に同意したものとみなします。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第10条（お問い合わせ）</h3>
          <div style={styles.articleContent}>
            プライバシーに関するご質問やご意見は、以下の連絡先までお気軽にお問い合わせください：
            <div style={styles.developerInfo}>
              <p>
                <strong>開発者：</strong> [shuveloper]
              </p>
              <p>
                <strong>メールアドレス：</strong> [shuveloper0308@gmail.com]
              </p>
              <p>
                <strong>対応時間：</strong> 平日9:00-18:00（土日祝日を除く）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
