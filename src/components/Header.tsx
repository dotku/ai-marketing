import { Megaphone, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { companyInfo } from "../data/companyInfo";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 relative">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
              <Megaphone className="h-9 w-9 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {companyInfo.name}
            </span>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 hover:text-blue-600 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              服务
            </a>
            <Link
              to="/reports"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              行业报告
            </Link>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
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

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-40
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
        >
          <div className="p-6 space-y-4">
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              服务
            </a>
            <Link
              to="/reports"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              行业报告
            </Link>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              价格
            </a>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-medium text-center shadow-sm mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
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
