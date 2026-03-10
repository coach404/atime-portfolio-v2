export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto pt-12">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </a>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free $5k Bugbot Audit
          </h1>
          <p className="text-xl text-gray-600">
            Discover how much time AI automation can save your firm
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What You'll Get:
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>AI Code Audit:</strong> We analyze your existing Excel/Access systems for automation opportunities
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Time Savings Report:</strong> Exact hours you'll reclaim per week with AI automation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Custom Roadmap:</strong> Step-by-step plan to modernize your workflows
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>ROI Projection:</strong> Expected return on investment within first 6 months
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:atime.company@gmail.com" 
                className="text-blue-600 hover:text-blue-700 text-lg"
              >
                atime.company@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">
                Serving US law & accounting firms nationwide
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-700">
                We respond to all inquiries within 24 hours
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 mb-4">
              Email us at <a href="mailto:atime.company@gmail.com" className="text-blue-600 hover:underline font-semibold">atime.company@gmail.com</a> with:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Your firm name and size (number of employees)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Primary workflow bottleneck (contract review, reporting, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Best time for a 15-minute intro call</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            No commitment required. Free audit valid for firms with 10-50 employees.
          </p>
        </div>
      </div>
    </div>
  );
}
