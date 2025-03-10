import React from 'react';
import { Typography, Layout } from 'antd';
import { IndustryReports } from '../components/IndustryReports';

const { Content } = Layout;
const { Title } = Typography;

export const Reports: React.FC = () => {
  return (
    <Layout>
      <Content className="min-h-screen bg-gray-50">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Title level={1}>行业报告</Title>
              <p className="mt-4 text-xl text-gray-600">
                深度解析各行业市场趋势、营销策略和发展机遇
              </p>
            </div>
            
            <IndustryReports />
          </div>
        </div>
      </Content>
    </Layout>
  );
};
