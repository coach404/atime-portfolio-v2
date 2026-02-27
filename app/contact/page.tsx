export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto pt-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Talk About Your Automation
          </h1>
          <p className="text-xl text-gray-600">
            Book a 15-minute demo or claim your free $5k Bugbot Audit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="john@lawfirm.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Smith & Associates"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your needs *
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., We review 30+ contracts per week..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a href="mailto:anja@atime.agency" className="text-blue-600 hover:underline">
                    anja@atime.agency
                  </a>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div>US-based, serving nationwide</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Response Time</div>
                  <div>Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free Audit Offer
              </h3>
              <p className="text-gray-700 mb-4">
                Get a <strong>$5,000 Bugbot AI Code Audit</strong> — completely free. 
                We'll identify your top automation opportunity.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI-powered audit of existing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Legacy debt analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Modernization roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
