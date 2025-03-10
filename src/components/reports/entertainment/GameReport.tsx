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

const gameMarketData = [
  { name: "美国", companies: 17, percentage: 22.4 },
  { name: "中国", companies: 40, percentage: 39.7 },
  { name: "其他", companies: 43, percentage: 37.9 },
];

export const GameReport: React.FC = () => {
  return (
    <div>
      <Title level={2} className="mb-6">
        游戏行业
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
        全球游戏产业2024年总规模预计达1877亿美元。美国拥有全球最多的大型游戏公司，76家最大游戏公司中有17家在美国。
        中国开发的游戏在全球影响力越来越大，2024年5月已有40家中国厂商进入全球手游发行商收入Top100，合计收入21.1亿美元，
        占Top100总收入的39.7%。
      </Paragraph>

      <div className="my-8" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={gameMarketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" name="市场份额 (%)" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Collapse defaultActiveKey={["1"]} className="mb-8">
        <Panel header="顶级游戏发行商" key="1">
          <ul className="list-disc pl-6">
            <li className="mb-4">
              <Text strong>索尼互动娱乐</Text>
              <Paragraph>
                全球最大的游戏公司，年营收约310亿美元。PlayStation业务总部在美国加州圣马刁。
                通过"China Hero Project"等计划扶持中国开发者在全球发行游戏。
              </Paragraph>
            </li>
            <li className="mb-4">
              <Text strong>腾讯游戏</Text>
              <Paragraph>
                全球收入第二大的游戏公司（约255亿美元）。通过旗下Riot
                Games、Epic Games等在美国市场影响巨大。
                与动视共同推出《使命召唤Mobile》等成功案例。
              </Paragraph>
            </li>
            <li className="mb-4">
              <Text strong>微软游戏</Text>
              <Paragraph>
                年营收约215亿美元。2023年收购动视暴雪后成为全球顶级发行商。
                拥有Xbox平台及《我的世界》《光环》《使命召唤》等顶级IP。
              </Paragraph>
            </li>
          </ul>
        </Panel>

        <Panel header="营销机构分析" key="2">
          <ul className="list-disc pl-6">
            <li className="mb-4">
              <Text strong>Reverb Communications</Text>
              <Paragraph>
                成立于2003年，推广过《火箭联盟》《绝地求生》等现象级游戏。
                近年服务中国游戏，如腾讯的《Arena Breakout》海外营销。
              </Paragraph>
            </li>
            <li className="mb-4">
              <Text strong>White Label PR</Text>
              <Paragraph>
                跨欧美运营的游戏公关公司，已成功推广80多款游戏。
                客户包括腾讯、MyGames等，擅长媒体宣传和网红营销。
              </Paragraph>
            </li>
          </ul>
        </Panel>

        <Panel header="广告平台趋势" key="3">
          <ul className="list-disc pl-6">
            <li className="mb-4">
              <Text strong>主流平台</Text>
              <Paragraph>
                Google（含YouTube）、Meta（Facebook &
                Instagram）和TikTok是游戏广告的主要平台。
                YouTube吸引了49%的游戏广告支出。
              </Paragraph>
            </li>
            <li className="mb-4">
              <Text strong>专业网络</Text>
              <Paragraph>
                Unity
                Ads、AppLovin等专注游戏广告的平台提供精准用户获取和变现解决方案。
                对中国开发者友好，提供本地化支持。
              </Paragraph>
            </li>
          </ul>
        </Panel>
      </Collapse>

      <Title level={4}>中国开发商机遇</Title>
      <Paragraph>
        2024年上半年中国自主研发游戏海外收入达85.54亿美元，同比增长4.24%。
        主流平台和机构都提供中文服务团队，支持多样化合作模式，
        并提供品牌合作等增值服务，助力中国游戏出海。
      </Paragraph>
      </Card>
    </div>
  );
};
