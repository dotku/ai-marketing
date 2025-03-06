import { DollarSign } from "lucide-react";

export const BudgetUseCases = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          广告预算使用案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Minimum Budget Case */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <DollarSign className="h-10 w-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">最小预算方案</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-700">每日预算</p>
                <p className="text-2xl font-bold text-blue-600">¥144</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-700">预计月度覆盖</p>
                  <p className="text-xl font-bold text-gray-900">
                    26.4K - 76K
                  </p>
                  <p className="text-sm text-gray-600">每日 6.6K - 19K</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-700">预计月度点击</p>
                  <p className="text-xl font-bold text-gray-900">1.4K - 4K</p>
                  <p className="text-sm text-gray-600">每日 349 - 1K</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-700">
                  月度支出 (每周1天)
                </p>
                <p className="text-xl font-bold text-gray-900">¥576/月</p>
                <p className="text-sm text-gray-600">每月4日投放</p>
              </div>
            </div>
          </div>

          {/* Full Budget Case */}
          <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <DollarSign className="h-10 w-10 text-white mr-3" />
              <h3 className="text-2xl font-bold">全额预算方案</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500 rounded-lg">
                <p className="font-semibold text-blue-100">每日预算</p>
                <p className="text-2xl font-bold">¥144</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500 rounded-lg">
                  <p className="font-semibold text-blue-100">预计月度覆盖</p>
                  <p className="text-xl font-bold">2.91M - 8.4M</p>
                  <p className="text-sm text-blue-100">每日 97K - 280K</p>
                </div>
                <div className="p-4 bg-blue-500 rounded-lg">
                  <p className="font-semibold text-blue-100">预计月度点击</p>
                  <p className="text-xl font-bold">96K - 279K</p>
                  <p className="text-sm text-blue-100">每日 3.2K - 9.3K</p>
                </div>
              </div>
              <div className="p-4 bg-blue-500 rounded-lg">
                <p className="font-semibold text-blue-100">
                  月度支出 (每日投放)
                </p>
                <p className="text-xl font-bold">¥4,320/月</p>
                <p className="text-sm text-blue-100">每月30日投放</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600 max-w-3xl mx-auto">
          注意：以上预估数据基于过往活动数据、预算、市场数据、目标受众和广告位置等因素。实际结果可能会有所不同。
        </p>
      </div>
    </section>
  );
};