import React from "react";
import { Typography, Collapse, Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const ecommerceMarketData = [
  { name: "宠物用品", value: 2800, growth: 35 },
  { name: "电子产品", value: 4500, growth: 28 },
  { name: "服装服饰", value: 3200, growth: 25 },
  { name: "美妆护肤", value: 2100, growth: 30 },
];

export const EcommerceReport: React.FC = () => {
  return (
    <Card
      className="mb-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      style={{
        border: "1px solid #f0f0f0",
        backgroundColor: "#fff",
      }}
    >
      <Title level={3}>市场概况</Title>
      <Paragraph>
        2024年中国电商出海市场展现强势增长，多个品类实现翻倍增长。其中，宠物用品、电子产品和美妆护肤类产品表现特别亮眼。特别是在北美和欧洲市场，中国品牌的市场占有率持续提升。
      </Paragraph>

      <div className="my-8" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ecommerceMarketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#1890ff" />
            <YAxis yAxisId="right" orientation="right" stroke="#52c41a" />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="value"
              name="市场规模(亿美元)"
              fill="#1890ff"
            />
            <Bar
              yAxisId="right"
              dataKey="growth"
              name="增长率(%)"
              fill="#52c41a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Collapse defaultActiveKey={["1"]} className="mb-8">
        <Panel header="宠物用品出海分析" key="1">
          <Paragraph>
            宠物用品市场在海外呈现爆发式增长，年增长率达35%。主要驱动因素包括：
          </Paragraph>
          <ul className="list-disc pl-6">
            <li>海外宠物经济的持续增长</li>
            <li>中国制造的价格优势</li>
            <li>产品创新和品质提升</li>
          </ul>
        </Panel>

        <Panel header="电子产品出海趋势" key="2">
          <Paragraph>
            智能电子产品出海市场规模达4500亿美元，年增长28%。主要特点：
          </Paragraph>
          <ul className="list-disc pl-6">
            <li>智能家电领域快速增长</li>
            <li>创新科技产品备受青睐</li>
            <li>品牌建设成效显著</li>
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};
