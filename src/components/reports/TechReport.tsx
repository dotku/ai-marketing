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

const techMarketData = [
  { name: "云服务", value: 4758, growth: 19.2 },
  { name: "硬件设备", value: 1560, growth: 15.5 },
  { name: "软件服务", value: 10812, growth: 13.2 },
  { name: "数据服务", value: 1030, growth: 24.3 },
];

export const TechReport: React.FC = () => {
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
        中国科技行业各领域呈现强劲增长势头。云服务市场规模达4758亿元，其中IaaS和PaaS市场分别达3121亿元和750亿元。软件和信息技术服务行业总规模超10.8万亿元，而数据服务市场在物联网驱动下保持年复合增长率24.3%的高速发展。
      </Paragraph>

      <div className="my-8" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={techMarketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#722ed1" />
            <YAxis yAxisId="right" orientation="right" stroke="#52c41a" />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="value"
              name="市场规模(亿元)"
              fill="#722ed1"
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
        <Panel header="云服务与硬件市场" key="1">
          <Paragraph>云服务和硬件设备市场呈现强劲增长：</Paragraph>
          <ul className="list-disc pl-6">
            <li>云服务市场规模4758亿元，增长19.2%</li>
            <li>IaaS市场规模3121亿元，增长17.1%</li>
            <li>PaaS市场规模750亿元，增长29.5%</li>
            <li>硬件设备市场规模1560亿元</li>
          </ul>
        </Panel>

        <Panel header="软件与数据服务" key="2">
          <Paragraph>软件和数据服务市场持续增长：</Paragraph>
          <ul className="list-disc pl-6">
            <li>软件服务市场规模10.8万亿元，增长13.2%</li>
            <li>数据服务市场复合增长率24.3%</li>
            <li>物联网云平台市场持续扩大</li>
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};
