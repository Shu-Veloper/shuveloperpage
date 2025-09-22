import { useState } from "react";

const ProjectDetail = ({ projectData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projectData.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectData.screenshots.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-10 md:p-5 font-sans bg-gray-50 min-h-screen">
      <button
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-500 no-underline rounded-xl border border-gray-200 text-sm font-medium mb-8 transition-all duration-300 shadow-sm hover:shadow-md"
        onClick={() => window.history.back()}
      >
        ← ホームに戻る
      </button>

      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-3xl font-bold text-gray-800 mb-3">
          {projectData.title}
        </h1>
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
          {projectData.category}
        </span>
        <p className="text-xl md:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
          {projectData.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Image Section */}
        <div className="static md:sticky md:top-5 order-1">
          <div className="relative bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl overflow-hidden">
            <div className="relative w-1/2 h-full md:w-full mx-auto bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={projectData.screenshots[currentImageIndex].src}
                alt={projectData.screenshots[currentImageIndex].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              <button
                className="absolute top-1/2 left-4 md:left-2 -translate-y-1/2 bg-black/50 text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer text-xl md:text-base font-bold z-10 transition-all duration-300 hover:bg-black/70"
                onClick={prevImage}
              >
                ‹
              </button>

              <button
                className="absolute top-1/2 right-4 md:right-2 -translate-y-1/2 bg-black/50 text-white border-none w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer text-xl md:text-base font-bold z-10 transition-all duration-300 hover:bg-black/70"
                onClick={nextImage}
              >
                ›
              </button>
            </div>

            <div className="text-center mt-5 px-5 md:px-2">
              <h3 className="text-xl md:text-lg font-semibold text-gray-800 mb-2">
                {projectData.screenshots[currentImageIndex].title}
              </h3>
              <p className="text-base md:text-sm text-gray-500 leading-relaxed">
                {projectData.screenshots[currentImageIndex].description}
              </p>
            </div>

            <div className="flex justify-center gap-2 md:gap-1 mt-5">
              {projectData.screenshots.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 md:w-2 md:h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-blue-500 scale-120"
                      : "bg-gray-300"
                  }`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-5 md:gap-8 order-2">
          {/* Tech Stack */}
          <div className="bg-white rounded-2xl md:rounded-xl p-8 md:p-5 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>🛠️</span> 技術スタック
            </h3>
            <div className="grid grid-cols-auto-fit-30 md:grid-cols-auto-fit-25 gap-2">
              {projectData.tech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-2 md:px-2 md:py-1 rounded-lg text-sm md:text-xs font-medium text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl md:rounded-xl p-8 md:p-5 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>⭐</span> 主要機能
            </h3>
            <div className="grid grid-cols-auto-fit-62 md:grid-cols-1 gap-3 md:gap-2">
              {projectData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 md:p-2 bg-slate-50 rounded-lg text-base md:text-sm text-gray-700"
                >
                  <div className="w-5 h-5 md:w-4 md:h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs md:text-xxs font-bold flex-shrink-0">
                    ✓
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl md:rounded-xl p-8 md:p-5 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>📝</span> 詳細説明
            </h3>
            <p className="text-base md:text-sm text-gray-600 leading-relaxed text-left">
              {projectData.longDescription}
            </p>
          </div>

          {/* Links */}
          <div className="bg-white rounded-2xl md:rounded-xl p-8 md:p-5 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span>🔗</span> 関連リンク
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-2">
              {projectData.links.privacyPolicy && (
                <a
                  href={projectData.links.privacyPolicy}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  プライバシーポリシー
                </a>
              )}
              {projectData.links.termsOfService && (
                <a
                  href={projectData.links.termsOfService}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  利用規約
                </a>
              )}
              {projectData.links.support && (
                <a
                  href={projectData.links.support}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  サポート
                </a>
              )}
              {projectData.links.accountDeletion && (
                <a
                  href={projectData.links.accountDeletion}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  アカウント削除
                </a>
              )}
              {projectData.links.safety && (
                <a
                  href={projectData.links.safety}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  安全性
                </a>
              )}
              {projectData.links.github && (
                <a
                  href={projectData.links.github}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  GitHub
                </a>
              )}
              {projectData.links.demo && (
                <a
                  href={projectData.links.demo}
                  className="block text-center px-5 py-4 md:px-4 md:py-3 bg-black text-white no-underline rounded-xl text-sm md:text-xs font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  デモ
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
