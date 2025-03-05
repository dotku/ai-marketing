import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { eBikeData, educationServiceData, petShopData } from "../data/mockData";
import { CaseStudy } from "../types";

const caseStudies: CaseStudy[] = [
  {
    title: "电动自行车销售增长",
    description: "通过精准的数字营销策略，帮助客户在6个月内实现销售额提升192%",
    metrics: [
      "社交媒体广告触达率提升150%",
      "转化率从2.1%提升至4.8%",
      "客户获取成本降低35%",
    ],
  },
  {
    title: "国际教育服务增长",
    description: "为国际教育机构打造全方位数字营销方案，半年内实现留学咨询量提升143%",
    metrics: [
      "目标市场覆盖率提升200%",
      "咨询转化率提升85%",
      "平均响应时间缩短60%",
    ],
  },
  {
    title: "宠物玩具电商增长案例",
    description: "通过精准投放和内容营销策略，帮助宠物玩具品牌实现月销售额提升185%，获客成本降低40%",
    metrics: [
      "社交媒体互动率提升220%",
      "电商转化率从2.3%提升至4.8%",
      "月度复购率提升60%",
      "新客获取成本降低40%",
    ],
    stats: [
      {
        label: "月均销售额",
        value: "¥286,000",
        change: "↑ 185%",
      },
      {
        label: "获客成本",
        value: "¥32",
        change: "↓ 40%",
      },
    ],
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">成功案例分析</h2>

        {/* E-bike Case */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">{caseStudies[0].title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">{caseStudies[0].description}</p>
              <ul className="space-y-2 text-gray-600">
                {caseStudies[0].metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={eBikeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#2563eb" name="实际销量" />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#9ca3af"
                    name="目标销量"
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Education Service Case */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">{caseStudies[1].title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">{caseStudies[1].description}</p>
              <ul className="space-y-2 text-gray-600">
                {caseStudies[1].metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={educationServiceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="students" stroke="#2563eb" name="注册学生" />
                  <Line type="monotone" dataKey="inquiries" stroke="#10b981" name="咨询量" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pet Shop Case */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">{caseStudies[2].title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">{caseStudies[2].description}</p>
              <ul className="space-y-2 text-gray-600">
                {caseStudies[2].metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
              {caseStudies[2].stats && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {caseStudies[2].stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={petShopData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="organic"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b981"
                    name="自然流量"
                  />
                  <Area
                    type="monotone"
                    dataKey="paid"
                    stackId="1"
                    stroke="#2563eb"
                    fill="#2563eb"
                    name="付费流量"
                  />
                  <Line
                    type="monotone"
                    dataKey="conversion"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="转化数(件)"
                    dot={{ fill: "#f59e0b" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
