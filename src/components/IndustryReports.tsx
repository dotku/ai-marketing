import React, { useState } from "react";
import { Typography, Menu } from "antd";
import "./IndustryReports.css";
import { EcommerceReport } from "./reports/EcommerceReport";
import { TechReport } from "./reports/TechReport";
import { EntertainmentReport } from "./reports/entertainment/EntertainmentReport";

const { Title } = Typography;

export const IndustryReports: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const menuItems = [
    {
      key: "1",
      label: (
        <div className="flex items-center py-2 px-1">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3" />
          <span>娱乐业</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center py-2 px-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
          <span>电商行业</span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center py-2 px-1">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3" />
          <span>科技行业</span>
        </div>
      ),
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <EntertainmentReport />;
      case "2":
        return <EcommerceReport />;
      case "3":
        return <TechReport />;
      default:
        return null;
    }
  };

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f7f9fc" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <div className="w-64 shrink-0">
            <div
              className="bg-white rounded-xl shadow-sm sticky top-6 transition-all duration-300 hover:shadow-md overflow-hidden"
              style={{
                border: "1px solid #f0f0f0",
                backgroundColor: "#fff",
              }}
            >
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="text-lg font-medium text-gray-800">
                  行业分类
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  选择您感兴趣的行业
                </div>
              </div>
              <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                items={menuItems}
                onClick={({ key }) => setSelectedKey(key)}
                className="custom-menu py-3"
                style={{
                  borderRight: 0,
                  fontSize: "15px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="flex-grow">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};
