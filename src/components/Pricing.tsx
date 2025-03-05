import { MonitorPlay, Globe } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">服务套餐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">初级套餐</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">¥999</span>
              <span className="text-gray-500 ml-2">/月</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                <span>平台广告服务 (预算1000+)</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                <span>网站服务 (800～1000元/年)</span>
              </li>
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                <span>视频制作 (4个1分钟视频/月)</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block text-center bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              立即咨询
            </a>
          </div>

          {/* Standard Plan */}
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">标准套餐</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">¥2999</span>
              <span className="text-blue-200 ml-2">/月</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-white mr-2" />
                <span>平台广告服务 (预算3000+)</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-white mr-2" />
                <span>网站服务 (含优化)</span>
              </li>
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-white mr-2" />
                <span>视频制作 (8个1分钟视频/月)</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block text-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              立即咨询
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">高级套餐</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">¥4999</span>
              <span className="text-gray-500 ml-2">/月</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                <span>平台广告服务 (预算5000+)</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                <span>全套网站解决方案</span>
              </li>
              <li className="flex items-center">
                <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                <span>视频制作 (12个1分钟视频/月)</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="block text-center bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200"
            >
              立即咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
