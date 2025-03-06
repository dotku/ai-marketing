import { Megaphone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyInfo";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
              <Megaphone className="h-9 w-9 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-extrabold text-gray-800 tracking-tight">{companyInfo.name}</span>
          </Link>
          <div className="flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">
              服务
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">
              价格
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-medium shadow-sm"
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
