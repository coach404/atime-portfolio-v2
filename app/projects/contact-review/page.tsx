export default function ContractReviewPage() {
return (
<div className="min-h-screen bg-white py-20 px-6">
<div className="max-w-4xl mx-auto pt-12">
<div className="mb-8">
<a href="/" className="text-blue-600 hover:underline text-sm">
← Back to Home
</a>
</div>

```
    {/* Legal Disclaimer - PROMINENT */}
    <div className="mb-8 bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
      <div className="flex items-start gap-3">
        <span className="text-amber-600 text-2xl flex-shrink-0">⚠️</span>
        <div>
          <h4 className="font-bold text-amber-900 mb-2">Important Legal Notice</h4>
          <p className="text-sm text-amber-800">
            AI flags potential risk clauses for attorney review. 
            <strong> Licensed attorneys make all final decisions.</strong> This tool assists review — 
            it does not provide legal advice or replace attorney judgment.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-mono mb-3">
        CASE STUDY — CONTRACT REVIEW
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Contract Review Automation
      </h1>
      <p className="text-xl text-gray-600">
        How we helped a NYC law firm cut contract review time by 87%
      </p>
    </div>

    {/* Key Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {[
        { label: "Client", value: "NYC Law Firm" },
        { label: "Time Saved", value: "13h/week" },
        { label: "Speed Up", value: "87%" },
        { label: "Attorney Oversight", value: "100%" }
      ].map((metric, i) => (
        <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
          <div className="text-xl font-bold text-gray-900">{metric.value}</div>
        </div>
      ))}
    </div>

    {/* The Problem */}
    <div className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        ⚠️ The Problem
      </h2>
      <p className="text-gray-700 mb-4">
        A 15-person NYC law firm was spending <strong>15 hours per week</strong> manually 
        reviewing client contracts for risk clauses, compliance issues, and liability concerns.
      </p>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-amber-500">•</span>
          <span>45 minutes per contract review</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500">•</span>
          <span>Partners doing manual work instead of billable hours</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500">•</span>
          <span>Bottleneck preventing new client onboarding</span>
        </li>
      </ul>
    </div>

    {/* The Solution */}
    <div className="mb-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        💡 The Solution
      </h2>
      <p className="text-gray-700 mb-6">
        We built a custom <strong>AI-powered contract analysis pipeline</strong>:
      </p>
      
      <div className="space-y-3">
        {[
          { step: 1, text: "Partner uploads PDF contract" },
          { step: 2, text: "AI extracts text + metadata (30 seconds)" },
          { step: 3, text: "System analyzes for 12 risk categories" },
          { step: 4, text: "AI flags high-risk clauses with page numbers" },
          { step: 5, text: "Partner reviews only flagged sections (2 min vs 45 min)" }
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3 bg-white rounded-lg p-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {item.step}
            </div>
            <p className="text-gray-700 pt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* The Results */}
    <div className="mb-12 bg-green-50 border border-green-200 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        ✅ The Results
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { v: "87%", l: "Time Reduction", sub: "15h → 2h/week" },
          { v: "$75k", l: "Annual ROI", sub: "Partner time saved" },
          { v: "100%", l: "Attorney Review", sub: "All decisions" },
          { v: "3", l: "New Clients", sub: "First month" }
        ].map((r, i) => (
          <div key={i} className="bg-white border border-green-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{r.v}</div>
            <div className="font-semibold text-gray-900 text-sm">{r.l}</div>
            <div className="text-xs text-gray-500">{r.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-green-300 rounded-lg p-4">
        <p className="text-sm text-green-800 italic">
          "This tool paid for itself in 6 weeks. We went from turning down clients to actively seeking them."
          <span className="block mt-1 font-semibold not-italic">— Partner, NYC Law Firm</span>
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10">
      <h3 className="text-2xl font-bold mb-3">
        Ready to automate your contract review?
      </h3>
      <p className="mb-6">
        Get a free Bugbot Audit to identify your automation opportunity.
      </p>
      <a href="/contact">
        <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-all">
          Claim Free Audit →
        </button>
      </a>
    </div>
  </div>
</div>
```

);
}