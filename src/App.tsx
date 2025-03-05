import {
  Building2,
  MonitorPlay,
  Globe,
  MessageSquareMore,
  ChevronRight,
  Trophy,
  Target,
  Users,
  DollarSign,
  Briefcase,
  GraduationCap,
  LinkedinIcon,
} from "lucide-react";
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

// Sample data for charts
const eBikeData = [
  { month: "Jan", sales: 65, target: 50 },
  { month: "Feb", sales: 75, target: 55 },
  { month: "Mar", sales: 95, target: 60 },
  { month: "Apr", sales: 125, target: 70 },
  { month: "May", sales: 150, target: 80 },
  { month: "Jun", sales: 190, target: 90 },
];

const educationServiceData = [
  { month: "Jan", students: 120, inquiries: 350 },
  { month: "Feb", students: 150, inquiries: 420 },
  { month: "Mar", students: 200, inquiries: 550 },
  { month: "Apr", students: 250, inquiries: 680 },
  { month: "May", students: 280, inquiries: 750 },
  { month: "Jun", students: 320, inquiries: 850 },
];

const campaignTrafficData = [
  { week: "W1", organic: 1000, paid: 2000, total: 3000 },
  { week: "W2", organic: 1200, paid: 2500, total: 3700 },
  { week: "W3", organic: 1500, paid: 3000, total: 4500 },
  { week: "W4", organic: 2000, paid: 3500, total: 5500 },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">嘿嗨</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#services" className="text-gray-600 hover:text-blue-600">
                服务
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                价格
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                联系我们
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            专业的数字营销解决方案
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            为您的业务提供全方位的广告服务，助力品牌成长
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            开始咨询 <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Features */}
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

      {/* Budget Use Cases */}
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

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">成功案例分析</h2>
          
          {/* eBike Case Study */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">电动自行车销售增长</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  通过精准的数字营销策略，帮助客户在6个月内实现销售额提升192%
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 社交媒体广告触达率提升150%</li>
                  <li>• 转化率从2.1%提升至4.8%</li>
                  <li>• 客户获取成本降低35%</li>
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
                    <Line type="monotone" dataKey="target" stroke="#9ca3af" name="目标销量" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* International Education Service Case */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">国际教育服务增长</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  为国际教育机构打造全方位数字营销方案，半年内实现留学咨询量提升143%
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 目标市场覆盖率提升200%</li>
                  <li>• 咨询转化率提升85%</li>
                  <li>• 平均响应时间缩短60%</li>
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

          {/* Education Campaign Traffic Case */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">教育活动流量分析</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  通过整合营销策略，帮助教育机构实现流量快速增长，有机流量显著提升
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 总体流量增长83%</li>
                  <li>• 有机流量提升100%</li>
                  <li>• 广告效果提升45%</li>
                </ul>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={campaignTrafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="organic" stackId="1" stroke="#10b981" fill="#10b981" name="有机流量" />
                    <Area type="monotone" dataKey="paid" stackId="1" stroke="#2563eb" fill="#2563eb" name="付费流量" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">专业团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Jay Lin */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src="/images/placeholder-male-asian.png"
                    alt="Jay Lin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Jay Lin</h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-blue-600 font-semibold mt-1">AI 广告策略专家</p>
                  <p className="text-gray-600 mt-4">
                    前 Meta AI 专家，拥有超过10年数字营销经验。专注于利用人工智能技术优化广告投放策略，帮助客户实现最佳广告效果。
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">专业领域：</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">AI 广告优化</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">数据分析</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Meta 广告</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Helen Lan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src="/images/placeholder-female-asian.png"
                    alt="Helen Lan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Helen Lan</h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-green-600 font-semibold mt-1">高级商务发展总监</p>
                  <p className="text-gray-600 mt-4">
                    资深商务发展专家，深谙国际销售策略。擅长制定跨境营销方案，帮助企业开拓国际市场，建立品牌影响力。
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">专业领域：</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">国际市场开发</span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">品牌策略</span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">跨境营销</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">服务套餐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">初级套餐</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">¥999</span>
                <span className="text-gray-500 ml-2">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>平台广告服务 (预算1000+)</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span>网站服务 (800～1000元/年)</span>
                </li>
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>视频制作 (4个1分钟视频/月)</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200"
              >
                立即咨询
              </a>
            </div>

            {/* Standard Plan */}
            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow transform scale-105">
              <h3 className="text-2xl font-bold mb-4">中级套餐</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">¥3000</span>
                <span className="text-blue-200 ml-2">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-200 mr-2" />
                  <span>平台广告服务 (预算5000+)</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-200 mr-2" />
                  <span>网站服务 (4000～6000元/年)</span>
                </li>
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-200 mr-2" />
                  <span>视频制作 (12个1分钟视频/月)</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
              >
                立即咨询
              </a>
            </div>

            {/* Custom Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">定制方案</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">定制</span>
                <span className="text-gray-500 ml-2">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>个性化广告策略</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  <span>定制网站开发</span>
                </li>
                <li className="flex items-center">
                  <MonitorPlay className="h-5 w-5 text-blue-600 mr-2" />
                  <span>高级视频制作</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block text-center bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200"
              >
                联系定制
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">联系我们</h2>
          <p className="text-xl text-gray-600 mb-8">
            扫描添加微信，获取更多详细信息
          </p>
          <div className="flex justify-center items-center space-x-4">
            <MessageSquareMore className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">
              HELENLAN998
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400"> &copy;2025 嘿嗨广告传媒有限公司</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
