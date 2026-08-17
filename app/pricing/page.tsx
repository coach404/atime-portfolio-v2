export default function PricingPage() {
  const tiers = [
    {
      name: "Bronze",
      price: "$497",
      period: "/month",
      description: "For small firms starting their AI journey",
      features: [
        "1 AI automation workflow",
        "Setup & training (2 weeks)",
        "Email support (24h response)",
        "Monthly usage reports",
        "Cancel anytime",
      ],
    },
    {
      name: "Silver",
      price: "$997",
      period: "/month",
      description: "For growing firms",
      features: [
        "3 AI automation workflows",
        "White-glove onboarding (1 week)",
        "Priority support",
        "Monthly optimization call",
        "Advanced analytics",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Gold",
      price: "$2,497",
      period: "/month",
      description: "For scaling firms",
      features: [
        "Unlimited AI workflows",
        "Custom AI worker (bespoke)",
        "Priority support + SLA",
        "Weekly strategic reviews",
        "White-label option",
        "Multi-office deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-canvas py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 pt-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
            Legal &amp; Accounting — Coming Soon
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold text-ink mb-4 leading-[1.05]">
            Planned pricing
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Legal &amp; Accounting automation is still in development — these
            tiers are the plan for launch, not live pricing yet. Join the
            waitlist and we&apos;ll confirm final pricing with early access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`stagger-item relative bg-white rounded-4xl p-8 border ${
                tier.popular ? "border-primary shadow-xl shadow-primary/10" : "border-black/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                  Most popular (planned)
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-ink mb-2">{tier.name}</h3>
                <div className="text-3xl font-semibold text-ink mb-2">
                  {tier.price}
                  <span className="text-base text-ink/40 font-normal">{tier.period}</span>
                </div>
                <p className="text-ink/60 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="text-primary flex-shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact">
                <button className="w-full py-3 rounded-full font-medium text-sm transition-colors bg-surface hover:bg-black/5 text-ink">
                  Join the waitlist
                </button>
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink/50 text-sm">
            Looking for freight dispatch pricing instead?{" "}
            <a href="/dispatch" className="text-primary font-medium">
              See the free pilot program →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
