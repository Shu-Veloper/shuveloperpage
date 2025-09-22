import React from "react";

const Support = ({ data }) => {
  if (!data) {
    return (
      <div className="text-center text-red-500">データが見つかりません</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {data.title}
          </h1>

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              お問い合わせ
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">メール:</span>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-600 hover:underline ml-2"
                >
                  {data.contact.email}
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">回答時間:</span>{" "}
                {data.contact.responseTime}
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              よくある質問
            </h2>
            <div className="space-y-4">
              {data.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.question}
                  </h3>
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Guidelines Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              利用ガイドライン
            </h2>
            <ul className="space-y-2">
              {data.guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Safety Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.safety.title}
            </h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                {data.safety.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Navigation Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              関連ページ
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/shuveloperpage/campuslink/safety"
                className="text-blue-600 hover:underline"
              >
                安全性とガイドライン
              </a>
              <a
                href="/shuveloperpage/campuslink/privacypolicy"
                className="text-blue-600 hover:underline"
              >
                プライバシーポリシー
              </a>
              <a
                href="/shuveloperpage/campuslink/termsofservice"
                className="text-blue-600 hover:underline"
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

export default Support;
