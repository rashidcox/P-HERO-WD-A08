// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🐄</span>
              <h2 className="text-2xl font-bold">Livestock</h2>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Your trusted partner for healthy and well-cared Qurbani animals. 
              Easy booking • Transparent deals • Trusted sellers across Bangladesh.
            </p>
            <p className="mt-6 text-xs text-green-300">
              © 2026 Livestock Marketplace. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-green-300 transition-colors">🏠 Home</Link>
              </li>
              <li>
                <Link href="/animals" className="hover:text-green-300 transition-colors">🐮 All Animals</Link>
              </li>
  
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                📍 
                <div>
                  <p>Dhaka, Bangladesh</p>
                  <p className="text-green-300 text-xs">Head Office</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                📞 
                <a href="tel:+8801234567890" className="hover:text-green-300 transition-colors">
                  +880 1234-567890
                </a>
              </div>

              <div className="flex items-center gap-3">
                ✉️ 
                <a href="mailto:info@livestock.com" className="hover:text-green-300 transition-colors">
                  info@livestock.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us & App */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-green-300 transition-colors">📘</a>
              <a href="#" className="hover:text-green-300 transition-colors">📸</a>
              <a href="#" className="hover:text-green-300 transition-colors">🐦</a>
              <a href="#" className="hover:text-green-300 transition-colors">▶️</a>
            </div>

            <div className="mt-8">
              <p className="text-sm text-green-300 mb-3">Download Our App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                  📱 Google Play
                </button>
                <button className="bg-black text-white px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                  🍎 App Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-xs text-green-400">
          <p>
            Made with ❤️ for the Muslim Ummah of Bangladesh • 
            Helping you find healthy Qurbani animals with trust and ease.
          </p>
        </div>
      </div>
    </footer>
  );
}