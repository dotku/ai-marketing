import { Trophy, Target, Users } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">专业服务</h3>
            <p className="text-gray-600">
              多年行业经验，为您提供最优质的广告解决方案
            </p>
          </div>
          <div className="text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">精准投放</h3>
            <p className="text-gray-600">
              根据您的目标受众进行精准的广告投放
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">专属团队</h3>
            <p className="text-gray-600">
              专业团队全程跟进，确保广告效果最大化
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
