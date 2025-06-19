import React, { useState } from "react";
import { timeboxData } from "../data/timeboxData";

const TimeboxDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 타임박스 앱 데이터

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === timeboxData.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? timeboxData.screenshots.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", sans-serif',
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    backButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      backgroundColor: "white",
      color: "#6b7280",
      textDecoration: "none",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "30px",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "10px",
    },
    category: {
      display: "inline-block",
      backgroundColor: "#dbeafe",
      color: "#1e40af",
      padding: "8px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2rem",
      color: "#6b7280",
      lineHeight: "1.8",
      maxWidth: "800px",
      margin: "0 auto",
    },
    content: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
      alignItems: "start",
    },
    imageSection: {
      position: "sticky",
      top: "20px",
    },
    sliderContainer: {
      position: "relative",
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    imageWrapper: {
      position: "relative",
      width: "300px",
      height: "700px",
      margin: "0 auto",
      backgroundColor: "#f3f4f6",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "opacity 0.5s ease",
    },
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      border: "none",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "bold",
      zIndex: 10,
      transition: "all 0.3s ease",
    },
    prevButton: {
      left: "15px",
    },
    nextButton: {
      right: "15px",
    },
    imageInfo: {
      textAlign: "center",
      marginTop: "20px",
      padding: "0 20px",
    },
    imageTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "8px",
    },
    imageDescription: {
      fontSize: "0.95rem",
      color: "#6b7280",
      lineHeight: "1.5",
    },
    dots: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "20px",
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#d1d5db",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    activeDot: {
      backgroundColor: "#3b82f6",
      transform: "scale(1.2)",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      border: "1px solid #f3f4f6",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    techGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "10px",
    },
    techItem: {
      backgroundColor: "#f3f4f6",
      color: "#374151",
      padding: "8px 12px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      textAlign: "center",
    },
    featureList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "12px",
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      fontSize: "15px",
      color: "#374151",
    },
    checkIcon: {
      width: "20px",
      height: "20px",
      backgroundColor: "#10b981",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "12px",
      fontWeight: "bold",
      flexShrink: 0,
    },
    linkGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
    },
    linkButton: {
      display: "block",
      textAlign: "center",
      padding: "15px 20px",
      backgroundColor: "#3b82f6",
      color: "white",
      textDecoration: "none",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },
    secondaryButton: {
      backgroundColor: "white",
      color: "#3b82f6",
      border: "2px solid #3b82f6",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => window.history.back()}>
        ← ホームに戻る
      </button>

      <header style={styles.header}>
        <h1 style={styles.title}>{timeboxData.title}</h1>
        <span style={styles.category}>{timeboxData.category}</span>
        <p style={styles.description}>{timeboxData.description}</p>
      </header>

      <div style={styles.content}>
        {/* 이미지 슬라이더 섹션 */}
        <div style={styles.imageSection}>
          <div style={styles.sliderContainer}>
            <div style={styles.imageWrapper}>
              <img
                src={timeboxData.screenshots[currentImageIndex].src}
                alt={timeboxData.screenshots[currentImageIndex].title}
                style={styles.image}
              />

              <button
                style={{ ...styles.navButton, ...styles.prevButton }}
                onClick={prevImage}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "rgba(0,0,0,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "rgba(0,0,0,0.5)")
                }
              >
                ‹
              </button>

              <button
                style={{ ...styles.navButton, ...styles.nextButton }}
                onClick={nextImage}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "rgba(0,0,0,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "rgba(0,0,0,0.5)")
                }
              >
                ›
              </button>
            </div>

            <div style={styles.imageInfo}>
              <h3 style={styles.imageTitle}>
                {timeboxData.screenshots[currentImageIndex].title}
              </h3>
              <p style={styles.imageDescription}>
                {timeboxData.screenshots[currentImageIndex].description}
              </p>
            </div>

            <div style={styles.dots}>
              {timeboxData.screenshots.map((_, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.dot,
                    ...(index === currentImageIndex ? styles.activeDot : {}),
                  }}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 정보 섹션 */}
        <div style={styles.infoSection}>
          {/* 기술 스택 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <span>🛠️</span> 技術スタック
            </h3>
            <div style={styles.techGrid}>
              {timeboxData.tech.map((tech, index) => (
                <div key={index} style={styles.techItem}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* 주요 기능 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <span>⭐</span> 主要機能
            </h3>
            <div style={styles.featureList}>
              {timeboxData.features.map((feature, index) => (
                <div key={index} style={styles.featureItem}>
                  <div style={styles.checkIcon}>✓</div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* 상세 설명 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <span>📝</span> 詳細説明
            </h3>
            <p
              style={{
                ...styles.description,
                textAlign: "left",
                fontSize: "1rem",
                color: "#4b5563",
              }}
            >
              {timeboxData.longDescription}
            </p>
          </div>

          {/* 링크 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <span>🔗</span> 関連リンク
            </h3>
            <div style={styles.linkGrid}>
              <a
                href={timeboxData.links.privacyPolicy}
                style={styles.linkButton}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#2563eb")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#3b82f6")
                }
              >
                プライバシーポリシー
              </a>
              <a
                href={timeboxData.links.termsOfService}
                style={{ ...styles.linkButton, ...styles.secondaryButton }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#3b82f6";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#3b82f6";
                }}
              >
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeboxDetail;
