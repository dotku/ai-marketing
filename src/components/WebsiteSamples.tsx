import { TrendingUp, Users, ShoppingCart } from "lucide-react";
import luxuryEcommerce from "../assets/images/luxury-ecommerce.jpg";
import educationPlatform from "../assets/images/education-platform.jpg";
import gameStudio from "../assets/images/game-studio.jpg";
import lifestyleServices from "../assets/images/lifestyle-services.jpg";

interface WebsiteSample {
  title: string;
  description: string;
  metrics: {
    visitors: string;
    conversion: string;
    revenue: string;
  };
  imageUrl: string;
  category: string;
  link: string;
}

const samples: WebsiteSample[] = [
  {
    title: "奢侈品电商平台",
    description:
      "专注于高端奢侈品销售的电商网站，采用现代简约设计风格，通过AI精准营销提升用户转化率",
    metrics: {
      visitors: "月访问量增长300%",
      conversion: "转化率提升2.5倍",
      revenue: "月收入突破￥500万",
    },
    imageUrl: luxuryEcommerce,
    category: "电商",
    link: "#",
  },
  {
    title: "留学顾问服务",
    description:
      "专业的海外留学咨询服务平台，提供一站式留学申请、签证指导和海外生活规划服务",
    metrics: {
      visitors: "咨询量增长180%",
      conversion: "成功签约率45%",
      revenue: "年营收增长200%",
    },
    imageUrl: educationPlatform,
    category: "教育",
    link: "#",
  },
  {
    title: "游戏企业服务",
    description:
      "为大型游戏公司提供百万级定制化解决方案，整合用户分析、精准营销和投资回报等核心服务",
    metrics: {
      visitors: "企业客户留存提升200%",
      conversion: "项目成功率提升85%",
      revenue: "平均投资回报提升180%",
    },
    imageUrl: gameStudio,
    category: "游戏",
    link: "#",
  },
  {
    title: "生活服务平台",
    description:
      "本地生活服务聚合平台，利用AI营销实现精准用户触达，提供餐饮、休闲、娱乐等多样化服务",
    metrics: {
      visitors: "用户增长率250%",
      conversion: "下单转化率提升3倍",
      revenue: "平台GMV增长200%",
    },
    imageUrl: lifestyleServices,
    category: "服务",
    link: "#",
  },
];

export const WebsiteSamples = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">成功案例展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {samples.map((sample, index) => (
            <div
              key={index}
              id={
                sample.title === "奢侈品电商平台"
                  ? "luxury-ecommerce"
                  : sample.title === "游戏运营平台"
                  ? "game-platform"
                  : sample.title === "生活服务平台"
                  ? "lifestyle-services"
                  : sample.title === "留学顾问服务"
                  ? "brand-marketing"
                  : ""
              }
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-mt-24"
            >
              <div className="relative">
                <img
                  src={sample.imageUrl}
                  alt={sample.title}
                  className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {sample.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{sample.title}</h3>
                <p className="text-gray-600 mb-6">{sample.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-semibold text-gray-900">
                      {sample.metrics.visitors}
                    </p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-semibold text-gray-900">
                      {sample.metrics.conversion}
                    </p>
                  </div>
                  <div className="text-center">
                    <ShoppingCart className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm font-semibold text-gray-900">
                      {sample.metrics.revenue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          以上展示的是我们参考的优秀网站设计案例，实际项目会根据客户需求进行定制化设计和开发
        </p>
      </div>
    </section>
  );
};
