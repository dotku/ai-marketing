import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { WebsiteSamples } from "./components/WebsiteSamples";
import { BudgetUseCases } from "./components/BudgetUseCases";
import { TeamSection } from "./components/TeamSection";
import { CaseStudies } from "./components/CaseStudies";
import { Pricing } from "./components/Pricing";
import { Terms } from "./components/Terms";
import { Privacy } from "./components/Privacy";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { Reports } from "./pages/Reports";
import { MessageSquareMore } from "lucide-react";

function HomePage() {
  return (
    <>
      <main>
        <Features />
        <WebsiteSamples />
        <BudgetUseCases />
        <CaseStudies />
        <TeamSection />
        <Pricing />
        {/* Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">联系我们</h2>
            <p className="text-xl text-gray-600 mb-8">
              添加微信，获取更多详细信息
            </p>
            <div className="flex justify-center items-center space-x-4">
              <MessageSquareMore className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">
                HELENLAN998
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
