import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Star,
  Menu,
  Calendar,
  ArrowRight,
  X,
} from "lucide-react";
import { personalInfo, projects, skills } from "../data/portfolioData";

// 메뉴 아이템들
const menuItems = [
  { href: "#about", label: "プロフィール" },
  { href: "#portfolio", label: "ポートフォリオ" },
  { href: "#skills", label: "スキル" },
  { href: "#contact", label: "お問い合わせ" },
];

const PortfolioSite = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mobile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 메뉴 아이템 클릭 시 모바일 메뉴 닫기
  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextProject = () => {
    const currentProjects = projects[activeTab];
    setCurrentProject((prev) => (prev + 1) % currentProjects.length);
  };

  const prevProject = () => {
    const currentProjects = projects[activeTab];
    setCurrentProject(
      (prev) => (prev - 1 + currentProjects.length) % currentProjects.length
    );
  };

  useEffect(() => {
    setCurrentProject(0);
  }, [activeTab]);

  const currentProjects = projects[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">shuveloper</div>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                aria-label="メニューを開く"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                  こんにちは、
                  <span className="block text-gray-600">私は開発者です</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  モバイルアプリからWebアプリケーションまで、
                  <br />
                  課題を見つけ出し、解決に向けて取り組んでいます。
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="#portfolio"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Code className="w-5 h-5" />
                    <span>作品を見る</span>
                  </a>
                  <a
                    href="#contact"
                    className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>お問い合わせ</span>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">S</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィールセクション */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              プロフィール
            </h2>
            <p className="text-xl text-gray-600">私の背景と経験について</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">経歴</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      フルスタック開発者
                    </h4>
                    <p className="text-gray-600">2023年 - 現在</p>
                    <p className="text-gray-700 mt-2">
                      Webアプリケーションとモバイルアプリの開発に従事。React、Node.js、React
                      Nativeを中心とした技術スタックで多数のプロジェクトを手がける。
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      フロントエンド開発者
                    </h4>
                    <p className="text-gray-600">2023年 - 現在</p>
                    <p className="text-gray-700 mt-2">
                      ユーザーインターフェースの設計と実装を専門とし、レスポンシブWebデザインとモダンJavaScriptフレームワークの習得。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                専門分野
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Globe className="w-8 h-8 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Web開発</h4>
                  <p className="text-gray-600 text-sm">
                    レスポンシブWebサイトとWebアプリケーション
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Smartphone className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    モバイル開発
                  </h4>
                  <p className="text-gray-600 text-sm">
                    iOS・Android向けネイティブアプリ
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Code className="w-8 h-8 text-purple-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    バックエンド
                  </h4>
                  <p className="text-gray-600 text-sm">
                    API開発とデータベース設計
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Star className="w-8 h-8 text-yellow-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">UI/UX</h4>
                  <p className="text-gray-600 text-sm">
                    ユーザー中心の設計とプロトタイピング
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ポートフォリオセクション */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ポートフォリオ
            </h2>
            <p className="text-xl text-gray-600">
              これまでに手がけた作品をご紹介します
            </p>
          </div>

          {/* タブナビゲーション */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1">
              {/* <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === "web"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Globe className="w-5 h-5 inline-block mr-2" />
                Webアプリ
              </button> */}
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === "mobile"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Smartphone className="w-5 h-5 inline-block mr-2" />
                モバイルアプリ
              </button>
            </div>
          </div>

          {/* プロジェクトショーケース */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative group max-w-2xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={currentProjects[currentProject].image}
                    alt={currentProjects[currentProject].title}
                    className="w-full h-auto mx-auto rounded-xl mb-6"
                  />
                  <div className="text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                      {currentProjects[currentProject].category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {currentProjects[currentProject].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {currentProjects[currentProject].description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {currentProjects[currentProject].tech.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={`/shuveloperpage/${currentProjects[currentProject].link}/detail`}
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors flex items-center space-x-2"
                      >
                        <span>詳細</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ナビゲーション矢印 */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* サムネイルギャラリー */}
          <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
            {currentProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProject(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${
                  index === currentProject
                    ? "ring-4 ring-gray-900 scale-110"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-16 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all"></div>
              </button>
            ))}
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-8 space-x-2">
            {currentProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-gray-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              技術スキル
            </h2>
            <p className="text-xl text-gray-600">
              習得している技術と経験レベル
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-gray-900 to-gray-700 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              使用ツール・技術
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "React-Native",
                "NextJs",
                "Vue.js",
                "Node.js",
                "Python",
                "JavaScript",
                "TypeScript",
                "React Native",
                "Flutter",
                "MongoDB",
                "PostgreSQL",
                "Firebase",
                "AWS",
                "Docker",
                "Git",
                "Figma",
                "Adobe XD",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600">お気軽にご連絡ください</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* 연락처 정보 카드 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                連絡先情報
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 메인 연락처 */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        メール
                      </h4>
                      <a
                        href="mailto:shuveloper0308@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors text-sm md:text-base"
                      >
                        shuveloper0308@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        電話
                      </h4>
                      <p className="text-gray-600">+81-XXX-XXXX-XXXX</p>
                    </div>
                  </div> */}

                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        所在地
                      </h4>
                      <p className="text-gray-600">東京都世田谷区</p>
                    </div>
                  </div>
                </div>

                {/* SNS 및 추가 정보 */}
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      SNS・リンク
                    </h4>
                    <div className="flex space-x-4 mb-6">
                      <a
                        href={personalInfo.social.github}
                        className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110 shadow-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href="mailto:shuveloper0308@gmail.com"
                        className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 shadow-md"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>

                    {/* 추가 메시지 */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        プロジェクトのご相談や技術的なお話など、
                        <br />
                        どんなことでもお気軽にお声がけください。
                      </p>
                    </div>
                  </div>

                  {/* 응답 시간 안내 */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        返信について
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      通常、24時間以内にお返事いたします。
                      <br />
                      お急ぎの場合は直接メールでご連絡ください。
                    </p>
                  </div>
                </div>
              </div>

              {/* 하단 CTA */}
              <div className="mt-10 text-center">
                <a
                  href="mailto:shuveloper0308@gmail.com?subject=お問い合わせ"
                  className="inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">今すぐメールを送る</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-2xl mb-2">shuveloper</div>
              <p className="text-gray-400">
                質の高いアプリケーション開発をお届けします
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; 2025 shuveloper. All rights reserved. Made with ❤️ in
              Tokyo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSite;
