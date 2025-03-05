import { Building2, ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">嘿嗨</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              服务
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              价格
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              联系我们
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          专业的 AI 数字营销解决方案
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          为您的业务提供全方位的广告服务，助力品牌成长
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          开始咨询 <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </header>
  );
};
