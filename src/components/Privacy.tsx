import { companyInfo } from "../data/companyInfo";

export const Privacy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">隐私政策</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">信息收集</h2>
            <p className="mb-4">
              {companyInfo.name}（以下简称"我们"）重视您的隐私。本隐私政策说明了我们如何收集、使用和保护您的个人信息。
            </p>
            <p className="mb-4">我们收集的信息包括：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>访问日志（IP地址、访问时间、浏览器类型等）</li>
              <li>设备信息（操作系统、设备类型等）</li>
              <li>用户行为数据（页面访问、点击等）</li>
              <li>您主动提供的联系信息（姓名、邮箱、电话等）</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Cookies 使用</h2>
            <p className="mb-4">
              我们使用 cookies 和类似技术来：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>记住您的偏好设置</li>
              <li>分析网站流量和使用情况</li>
              <li>优化网站性能和用户体验</li>
              <li>提供个性化的服务和内容</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">信息使用</h2>
            <p className="mb-4">我们使用收集的信息：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>提供和改进我们的服务</li>
              <li>分析网站使用情况</li>
              <li>发送服务通知和更新</li>
              <li>响应您的询问和请求</li>
              <li>预防欺诈和确保网站安全</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">信息保护</h2>
            <p className="mb-4">
              我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、使用或泄露。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">您的权利</h2>
            <p className="mb-4">您有权：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>访问您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>要求删除您的信息</li>
              <li>反对或限制信息处理</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">联系我们</h2>
            <p className="mb-4">
              如果您对我们的隐私政策有任何疑问，请联系我们：
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>邮箱：{companyInfo.contact.email}</li>
              <li>电话：{companyInfo.contact.phone}</li>
              <li>地址：{companyInfo.address}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
