export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 mb-6">
            ✓ Built for US law & accounting firms
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cut Contract Review Time by{' '}
            <span className="text-blue-600">87%</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enterprise-grade AI automation for 10-50 person law and accounting firms. 
            Reclaim 13+ hours per week. No IT team needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="/pricing">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all text-lg">
                Start 14-Day Free Trial →
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-700 font-semibold rounded-lg border-2 border-blue-600 transition-all text-lg">
                Get Free $5k Audit
              </button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Setup in 48 hours
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-blue-600 text-2xl mb-2">⚡</div>
              <div className="text-4xl font-bold text-blue-600 mb-1">87%</div>
              <div className="text-sm font-semibold text-gray-900">Time Reduction</div>
              <div className="text-xs text-gray-500">Contract review</div>
            </div>
            <div>
              <div className="text-green​​​​​​​​​​​​​​​​
