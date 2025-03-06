import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-600">
            本站使用 cookies 来提升您的浏览体验并收集访问数据。继续使用本站即表示您同意我们的
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 mx-1">
              隐私政策
            </a>
            和 cookies 的使用。
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            接受
          </button>
          <button
            onClick={acceptCookies}
            className="text-gray-500 hover:text-gray-700"
            aria-label="关闭"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
