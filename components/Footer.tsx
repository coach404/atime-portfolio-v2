export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-xl text-white">
                <span className="text-blue-400">A</span>Time
              </span>
            </a>
            <p className="text-sm text-gray-400">
              AI automation for law & accounting firms
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Free Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:anjatrajkovic23@gmail.com" className="hover:text-blue-400 transition-colors">
                  anjatrajkovic23@gmail.com
                </a>
              </li>
              <li className="text-gray-400">US-based, serving nationwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 ATime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
