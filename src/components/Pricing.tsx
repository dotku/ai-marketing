import { MonitorPlay, Globe, Star } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">服务套餐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">初级套餐</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">¥999</span>
                <span className="text-gray-500 ml-2">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>平台广告服务 (预算 ¥1000+)</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span>网站服务 (¥800～1000/年)</span>
                </li>
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>视频制作 (4 部 1 分钟视频/月)</span>
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="block text-center bg-blue-50 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 border border-blue-200"
            >
              立即咨询
            </a>
          </div>

          {/* Standard Plan */}
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">高级套餐</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">¥2999</span>
                <span className="text-blue-200 ml-2">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-white mr-2" />
                  <span>平台广告服务 (预算 ¥5000+)</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-white mr-2" />
                  <span>网站服务 (含优化 ¥5000/年)</span>
                </li>
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-white mr-2" />
                  <span>视频制作 (8 部 1 分钟视频/月)</span>
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="block text-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              立即咨询
            </a>
          </div>

          {/* Enterprise VIP Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-4 right-4">
              <Star className="h-6 w-6 text-yellow-400" fill="currentColor" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">企业 VIP 定制</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-lg font-medium text-gray-300">
                  百万人民币起
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>AI 驱动的全渠道营销策略</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>一站式品牌建设解决方案</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>专属顾问团队服务</span>
                </li>
                <li className="flex items-center text-sm text-gray-300 mt-6">
                  <span>* 为确保服务质量，仅限少量企业客户</span>
                </li>
              </ul>
            </div>
            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all"
            >
              预约 VIP 咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
