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

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const movieMarketData = [
  { name: "2019", value: 422 },
  { name: "2020", value: 120 },
  { name: "2021", value: 213 },
  { name: "2022", value: 259 },
  { name: "2023", value: 339 },
];

export const MovieReport: React.FC = () => {
  return (
    <div>
      <Title level={2} className="mb-6">
        电影行业
      </Title>
      <Card
        className="mb-8 rounded-lg hover:shadow-md transition-shadow duration-300"
        style={{
          border: "1px solid #f0f0f0",
          backgroundColor: "#fff",
        }}
      >
        <Title level={3}>市场概况</Title>
        <Paragraph>
          全球电影行业正在从疫情影响中逐步恢复。2023年全球票房收入达到339亿美元，相比2022年的259亿美元有显著增长，但仍未恢复到疫情前2019年422亿美元的水平。
        </Paragraph>

        <div className="my-8" style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={movieMarketData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" name="全球票房收入(亿美元)" fill="#1890ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Collapse defaultActiveKey={["1"]} className="mb-8">
          <Panel header="主要电影公司分析" key="1">
            <Text strong>华纳兄弟</Text>
            <Paragraph>
              成立于1923年，是全球最大的电视娱乐公司之一。业务范围广泛，涵盖：
            </Paragraph>
            <ul className="list-disc pl-6">
              <li>电影制作与发行</li>
              <li>电视节目制作</li>
              <li>漫画出版</li>
              <li>游戏开发</li>
            </ul>
          </Panel>

          <Panel header="市场趋势分析" key="2">
            <Paragraph>电影行业正在经历重要转型：</Paragraph>
            <ul className="list-disc pl-6">
              <li>流媒体平台与传统院线并存发展</li>
              <li>数字特效技术持续创新</li>
              <li>全球市场逐步复苏</li>
            </ul>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};
