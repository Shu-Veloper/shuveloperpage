import React from "react";

export default function PrivacyPolicy({ data }) {
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

  const renderArticleContent = (article) => {
    switch (article.id) {
      case 2: // 収集する情報
        return (
          <div style={styles.articleContent}>
            {article.content}
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>📊 収集する情報</h4>
              <ul style={styles.infoList}>
                {article.collectInfo.map((item, index) => (
                  <CollectItem
                    key={index}
                    isLast={index === article.collectInfo.length - 1}
                  >
                    {item}
                  </CollectItem>
                ))}
              </ul>
            </div>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>🚫 収集しない情報</h4>
              <ul style={styles.infoList}>
                {article.notCollectInfo.map((item, index) => (
                  <NotCollectItem
                    key={index}
                    isLast={index === article.notCollectInfo.length - 1}
                  >
                    {item}
                  </NotCollectItem>
                ))}
              </ul>
            </div>
          </div>
        );
      case 4: // 情報の保存場所と期間
        return (
          <div style={styles.articleContent}>
            <ul style={styles.infoList}>
              {article.list.map((item, index) => (
                <ListItem
                  key={index}
                  isLast={index === article.list.length - 1}
                >
                  <strong>{item.title}</strong> {item.description}
                </ListItem>
              ))}
            </ul>
          </div>
        );
      case 10: // お問い合わせ
        return (
          <div style={styles.articleContent}>
            {article.content}
            <div style={styles.developerInfo}>
              <p>
                <strong>開発者：</strong> {data.developer.name}
              </p>
              <p>
                <strong>メールアドレス：</strong> {data.developer.email}
              </p>
              <p>
                <strong>対応時間：</strong> {data.developer.supportHours}
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div style={styles.articleContent}>
            {article.content}
            {article.list && (
              <ul style={styles.infoList}>
                {article.list.map((item, index) => (
                  <ListItem
                    key={index}
                    isLast={index === article.list.length - 1}
                  >
                    {item}
                  </ListItem>
                ))}
              </ul>
            )}
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appTitle}>{data.title}</h1>
        <p style={styles.appSubtitle}>{data.subtitle}</p>
      </header>

      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>プライバシーポリシー</h2>
        <p style={styles.sectionMeta}>
          <strong>制定日：{data.establishedDate}</strong> |{" "}
          <strong>最終更新日：{data.lastUpdatedDate}</strong>
        </p>

        {data.articles.map((article) => (
          <div key={article.id} style={styles.article}>
            <h3 style={styles.articleTitle}>{article.title}</h3>
            {renderArticleContent(article)}
          </div>
        ))}
      </div>
    </div>
  );
}
