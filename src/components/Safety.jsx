import React from "react";

const Safety = ({ data }) => {
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
          <p className="text-gray-600 mb-8">{data.description}</p>

          {/* Reporting Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.reporting.title}
            </h2>
            <p className="text-gray-600 mb-6">{data.reporting.description}</p>

            <div className="space-y-6">
              {data.reporting.methods.map((method, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {method.type}
                  </h3>
                  <ol className="space-y-2">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-700 font-semibold">
                📞 {data.reporting.responseTime}
              </p>
            </div>
          </section>

          {/* Blocking Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.blocking.title}
            </h2>
            <p className="text-gray-600 mb-4">{data.blocking.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  ブロック方法
                </h3>
                <ol className="space-y-2">
                  {data.blocking.howTo.map((step, index) => (
                    <li key={index} className="flex items-start text-blue-700">
                      <span className="mr-2">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  ブロック効果
                </h3>
                <ul className="space-y-2">
                  {data.blocking.effects.map((effect, index) => (
                    <li
                      key={index}
                      className="flex items-start text-purple-700"
                    >
                      <span className="text-purple-500 mr-2">✓</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">ブロック解除:</span>{" "}
                {data.blocking.unblock}
              </p>
            </div>
          </section>

          {/* Content Filtering Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.contentFiltering.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {data.contentFiltering.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.contentFiltering.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center"
                >
                  <p className="font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guidelines Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.guidelines.title}
            </h2>
            <div className="space-y-4">
              {data.guidelines.rules.map((rule, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-gray-600">{rule.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Violations Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.violations.title}
            </h2>
            <div className="space-y-3">
              {data.violations.actions.map((violation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <span className="font-semibold text-gray-800">
                    {violation.level}
                  </span>
                  <span className="text-gray-600">{violation.action}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {data.contact.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  一般的なお問い合わせ
                </h3>
                <a
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {data.contact.email}
                </a>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">{data.contact.note}</p>
          </section>

          {/* Navigation Links */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              関連ページ
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/shuveloperpage/campuslink/support"
                className="text-blue-600 hover:underline"
              >
                サポートページ
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

export default Safety;
