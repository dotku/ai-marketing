import React from "react";
import { companyInfo } from "../data/companyInfo";

export const Terms = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">服务条款</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 服务范围 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. 服务范围</h2>
            <div className="space-y-3 text-gray-700">
              <p>1.1 {companyInfo.name}（以下简称"我们"）提供数字营销和广告投放服务，包括但不限于：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>社交媒体营销策略制定和执行</li>
                <li>广告账户管理和优化</li>
                <li>内容创作和投放</li>
                <li>数据分析和报告</li>
                <li>品牌建设咨询</li>
              </ul>
              <p>1.2 我们保留随时调整服务内容和范围的权利，任何变更将提前通知客户。</p>
            </div>
          </div>

          {/* 客户责任 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. 客户责任</h2>
            <div className="space-y-3 text-gray-700">
              <p>2.1 账户和支付设置：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>客户需自行开通并管理相关社交媒体账户</li>
                <li>客户负责开通电商平台的收款账户</li>
                <li>客户需自行解决电商平台的支付问题（我们可在资源允许的情况下提供有限支持）</li>
              </ul>
              <p>2.2 内容和合规：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>确保提供给我们的所有材料和信息真实、准确、合法</li>
                <li>遵守相关平台的广告政策和规范</li>
                <li>获取必要的经营许可和资质</li>
              </ul>
            </div>
          </div>

          {/* 服务费用 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. 服务费用</h2>
            <div className="space-y-3 text-gray-700">
              <p>3.1 费用构成：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>服务套餐费用（按照选定的套餐收取）</li>
                <li>广告投放费用（根据实际投放金额收取）</li>
                <li>额外定制服务费用（如需）</li>
              </ul>
              <p>3.2 付款方式和时间将在服务协议中详细约定。</p>
            </div>
          </div>

          {/* 服务保证 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. 服务保证</h2>
            <div className="space-y-3 text-gray-700">
              <p>4.1 我们承诺：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>专业团队服务</li>
                <li>定期数据报告和分析</li>
                <li>及时响应客户需求</li>
                <li>保护客户商业机密</li>
              </ul>
              <p>4.2 服务目标和具体指标将在服务协议中详细约定。</p>
            </div>
          </div>

          {/* 知识产权 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. 知识产权</h2>
            <div className="space-y-3 text-gray-700">
              <p>5.1 原创内容的知识产权归属：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>我们为客户创作的广告文案、设计等内容的知识产权归客户所有</li>
                <li>我们的品牌、商标、技术方案等知识产权归我们所有</li>
              </ul>
            </div>
          </div>

          {/* 保密条款 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. 保密条款</h2>
            <div className="space-y-3 text-gray-700">
              <p>6.1 双方同意对以下信息保密：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>商业策略和计划</li>
                <li>技术方案和数据</li>
                <li>客户信息和业务数据</li>
                <li>合作细节和商业条款</li>
              </ul>
            </div>
          </div>

          {/* 合作终止 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. 合作终止</h2>
            <div className="space-y-3 text-gray-700">
              <p>7.1 以下情况可能导致合作终止：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>双方协商一致</li>
                <li>一方严重违反合作条款</li>
                <li>客户长期未支付服务费用</li>
                <li>不可抗力因素导致无法继续合作</li>
              </ul>
              <p>7.2 合作终止后的数据处理和费用结算将按照协议约定执行。</p>
            </div>
          </div>

          {/* 免责声明 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">8. 免责声明</h2>
            <div className="space-y-3 text-gray-700">
              <p>8.1 我们不对以下情况承担责任：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>因客户提供信息不准确导致的损失</li>
                <li>社交媒体平台政策变更导致的影响</li>
                <li>不可抗力因素导致的服务中断</li>
                <li>客户违反平台规则导致的账户处罚</li>
              </ul>
            </div>
          </div>

          {/* 其他条款 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">9. 其他条款</h2>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc pl-8 space-y-2">
                <li>本条款的最终解释权归 {companyInfo.name} 所有</li>
                <li>本条款未尽事宜，双方可通过补充协议约定</li>
                <li>本条款的修改将提前通知客户，并获得认可后生效</li>
              </ul>
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">10. 联系方式</h2>
            <div className="space-y-3 text-gray-700">
              <p>如果您对本服务条款有任何疑问，请通过以下方式联系我们：</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>邮箱：{companyInfo.contact.email}</li>
                <li>电话：{companyInfo.contact.phone}</li>
                <li>地址：{companyInfo.address.full}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
