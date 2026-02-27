export default function PricingPage() {
  const tiers = [
    {
      name: "Bronze",
      price: "$497",
      period: "/month",
      description: "Perfect for small firms starting their AI journey",
      features: [
        "1 AI automation workflow",
        "Setup & training (2 weeks)",
        "Email support (24h response)",
        "Monthly usage reports",
        "Cancel anytime"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Silver",
      price: "$997",
      period: "/month",
      description: "Most popular for growing firms",
      features: [
        "3 AI automation workflows",
        "Whiteglove onboarding (1 week)",
        "Priority Slack support",
        "Monthly optimization call",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Gold",
      price: "$2,497",
      period: "/month",
      description: "Enterprise-grade for scaling firms",
      features: [
        "Unlimited AI workflows",
        "Custom AI Worker (bespoke)",
        "24/7 priority support + SLA",
        "Weekly strategic reviews",
        "White-label option",
        "Multi-office deployment"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                tier.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {tier.price}
                  <span className="text-lg text-gray-500 font-normal">
                    {tier.period}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact">
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {tier.cta}
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Calculate Your ROI
          </h2>
          <div className="text-center bg-green-50 rounded-lg p-6">
            <div className="text-sm text-green-800 mb-2">Typical Annual ROI</div>
            <div className="text-5xl font-bold text-green-600">$75k+</div>
            <div className="text-sm text-green-700 mt-2">
              13h/week × $350/hr × 52 weeks = $236k value<br/>
              Minus $12k/year = <strong>$224k net gain</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
