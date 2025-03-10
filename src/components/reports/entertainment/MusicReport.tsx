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

const musicCompanyData = [
  { name: "Spotify", value: 646 },
  { name: "环球音乐", value: 537.4 },
  { name: "腾讯音乐", value: 237.4 },
];

export const MusicReport: React.FC = () => {
  return (
    <div>
      <Title level={2} className="mb-6">
        音乐行业
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
          根据国际唱片业协会（IFPI）的报告，2022年全球录制音乐市场收入达到约260亿美元，同比增长9%。
          这一增长主要得益于流媒体服务的持续发展，数字音乐平台正在重塑整个音乐产业的商业模式。
        </Paragraph>

        <div className="my-8" style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={musicCompanyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" name="市值(亿美元)" fill="#1890ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Collapse defaultActiveKey={["1"]} className="mb-8">
          <Panel header="主要音乐公司分析" key="1">
            <ul className="list-disc pl-6">
              <li className="mb-4">
                <Text strong>Spotify</Text>
                <Paragraph>
                  全球领先的音乐流媒体服务平台，截至2024年6月，市值约646亿美元。
                  主要优势：
                  <ul className="list-disc pl-6">
                    <li>全球用户基础庞大</li>
                    <li>AI个性化推荐系统</li>
                    <li>播客等多元化内容</li>
                  </ul>
                </Paragraph>
              </li>
              <li className="mb-4">
                <Text strong>环球音乐集团</Text>
                <Paragraph>
                  全球最大的音乐公司之一，截至2024年6月，市值约537.4亿美元。
                  业务特点：
                  <ul className="list-disc pl-6">
                    <li>拥有大量经典音乐版权</li>
                    <li>与全球艺人合作网络</li>
                    <li>数字化转型成效显著</li>
                  </ul>
                </Paragraph>
              </li>
              <li className="mb-4">
                <Text strong>腾讯音乐娱乐集团</Text>
                <Paragraph>
                  中国领先的在线音乐平台，截至2024年6月，市值约237.4亿美元。
                  核心优势：
                  <ul className="list-disc pl-6">
                    <li>中国市场领先地位</li>
                    <li>社交娱乐生态系统</li>
                    <li>数字专辑创新模式</li>
                  </ul>
                </Paragraph>
              </li>
            </ul>
          </Panel>

          <Panel header="行业发展趋势" key="2">
            <Paragraph>音乐产业正在经历深刻变革：</Paragraph>
            <ul className="list-disc pl-6">
              <li>流媒体订阅模式成为主流</li>
              <li>短视频带动音乐营销创新</li>
              <li>AI技术在音乐创作中的应用</li>
              <li>虚拟演唱会等新型演出形式</li>
            </ul>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};
