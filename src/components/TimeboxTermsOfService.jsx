import React from "react";

export default function TimeboxTermsOfService() {
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
    developerInfo: {
      background: "linear-gradient(135deg, #fef3c7, #fde68a)",
      padding: "20px",
      borderRadius: "15px",
      margin: "20px 0",
      border: "1px solid #f59e0b",
    },
  };

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
        <p style={styles.appSubtitle}>利用規約</p>
      </header>

      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>利用規約</h2>
        <p style={styles.sectionMeta}>
          <strong>制定日：2025年6月19日</strong> |{" "}
          <strong>最終更新日：2025年6月19日</strong>
        </p>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第1条（適用）</h3>
          <div style={styles.articleContent}>
            本規約は、タイムボックス（以下「本アプリ」）の利用に関する条件を定めるものです。ユーザー（以下「お客様」）が本アプリをダウンロード、インストール、または利用することにより、本規約に同意したものとみなします。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第2条（定義）</h3>
          <div style={styles.articleContent}>
            本規約において使用する用語の定義は以下のとおりです：
            <ul style={styles.infoList}>
              <ListItem>
                「本アプリ」：タイムボックス（スケジュール管理アプリケーション）
              </ListItem>
              <ListItem>「お客様」：本アプリを利用する個人</ListItem>
              <ListItem isLast>「当方」：本アプリの開発・運営者</ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第3条（利用資格）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>本アプリは13歳以上の方が利用できます</ListItem>
              <ListItem>
                13歳未満の方が利用する場合は、保護者の同意が必要です
              </ListItem>
              <ListItem isLast>法人での利用も可能です</ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第4条（アカウント）</h3>
          <div style={styles.articleContent}>
            本アプリはアカウント登録を必要としません。すべての機能は登録なしでご利用いただけます。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第5条（利用料金）</h3>
          <div style={styles.articleContent}>
            本アプリは無料でご利用いただけます。将来的に有料機能を追加する場合は、事前に通知いたします。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第6条（禁止事項）</h3>
          <div style={styles.articleContent}>
            お客様は以下の行為を行ってはいけません：
            <ul style={styles.infoList}>
              <ListItem>
                本アプリの逆アセンブル、リバースエンジニアリング、逆コンパイル
              </ListItem>
              <ListItem>本アプリの改変、複製、再配布</ListItem>
              <ListItem>不正アクセスやウイルスの送信</ListItem>
              <ListItem>他のユーザーや第三者に迷惑をかける行為</ListItem>
              <ListItem>法令に違反する行為</ListItem>
              <ListItem isLast>その他、当方が不適切と判断する行為</ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第7条（知的財産権）</h3>
          <div style={styles.articleContent}>
            本アプリに関するすべての知的財産権は当方に帰属します。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第8条（免責事項）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>
                当方は、本アプリの利用により生じたいかなる損害についても責任を負いません
              </ListItem>
              <ListItem>本アプリの動作を保証するものではありません</ListItem>
              <ListItem isLast>
                データの損失について当方は責任を負いません（定期的なバックアップを推奨します）
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第9条（サービスの変更・終了）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>
                当方は事前通知なく本アプリの機能を変更、追加、削除することがあります
              </ListItem>
              <ListItem>
                やむを得ない事情により、本アプリの提供を終了する場合があります
              </ListItem>
              <ListItem isLast>
                サービス終了の場合は、可能な限り事前に通知いたします
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第10条（規約の変更）</h3>
          <div style={styles.articleContent}>
            当方は本規約を変更することがあります。変更後の規約は、アプリ内での表示により効力を生じます。
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第11条（準拠法・管轄裁判所）</h3>
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              <ListItem>本規約は日本法に準拠します</ListItem>
              <ListItem isLast>
                本アプリに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします
              </ListItem>
            </ul>
          </div>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>第12条（お問い合わせ）</h3>
          <div style={styles.articleContent}>
            本規約に関するご質問は、以下の連絡先までお問い合わせください：
            <div style={styles.developerInfo}>
              <p>
                <strong>開発者：</strong> [shuveloper]
              </p>
              <p>
                <strong>メールアドレス：</strong> [shuveloper0308@gmail.com]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
