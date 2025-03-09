import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyInfo";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li>地址：{companyInfo.address.full}</li>
              <li>电话：{companyInfo.contact.phone}</li>
              <li>邮箱：{companyInfo.contact.email}</li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link to="/terms" className="block hover:text-white">
                服务条款
              </Link>
              <Link to="/privacy" className="block hover:text-white">
                隐私政策
              </Link>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">案例展示</h4>
            <ul className="space-y-2">
              <li>
                <a href="#luxury-ecommerce" className="hover:text-white">
                  奢侈品电商
                </a>
              </li>
              <li>
                <a href="#saas-platform" className="hover:text-white">
                  SaaS 平台
                </a>
              </li>
              <li>
                <a href="#lifestyle-services" className="hover:text-white">
                  生活服务
                </a>
              </li>
              <li>
                <a href="#brand-marketing" className="hover:text-white">
                  品牌营销
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              {companyInfo.name}
            </h3>
            <p className="mb-4">{companyInfo.description}</p>
            <p className="text-sm">
              &copy;{new Date().getFullYear()} {companyInfo.legalName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
