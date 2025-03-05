import { LinkedinIcon } from "lucide-react";
import { TeamMember } from "../types";

const teamMembers: TeamMember[] = [
  {
    name: "Jay Lin",
    title: "AI 广告策略专家",
    description:
      "前 Meta AI 专家，拥有超过 10 年数字营销经验。专注于利用人工智能技术优化广告投放策略，帮助客户实现最佳广告效果。",
    expertise: ["AI 广告优化", "数据分析", "Meta 广告"],
    image: "/images/placeholder-male-asian.png",
    color: "blue",
  },
  {
    name: "Helen Lan",
    title: "高级商务发展总监",
    description:
      "资深商务发展专家，深谙国际销售策略。擅长制定跨境营销方案，帮助企业开拓国际市场，建立品牌影响力。",
    expertise: ["国际市场开发", "品牌策略", "跨境营销"],
    image: "/images/placeholder-female-asian.png",
    color: "green",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">专业团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className={`text-${member.color}-600 font-semibold mt-1`}>
                    {member.title}
                  </p>
                  <p className="text-gray-600 mt-4">{member.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      专业领域：
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-${member.color}-100 text-${member.color}-600 rounded-full text-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
