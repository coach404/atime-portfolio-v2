export default function ContractReviewPage() {
  return (
    <div className="min-h-screen bg-canvas py-20 px-6">
      <div className="max-w-4xl mx-auto pt-12">
        <div className="mb-8">
          <a href="/legal" className="text-primary hover:underline text-sm">
            ← Back to Legal &amp; Accounting
          </a>
        </div>

        <div className="mb-8 bg-surface border border-black/5 rounded-3xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-ink/40 text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h4 className="font-semibold text-ink mb-2">Important legal notice</h4>
              <p className="text-sm text-ink/60">
                This product is still in development — no client has used it yet,
                and the figures below are targets, not results. Once launched, AI
                would flag potential risk clauses for attorney review only.
                <strong> Licensed attorneys make all final decisions.</strong> The
                tool is designed to assist review — it will not provide legal
                advice or replace attorney judgment.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-3">
            CONCEPT PREVIEW — COMING SOON
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-ink mb-4">
            Contract Review Automation
          </h1>
          <p className="text-xl text-ink/60">
            How we plan to cut contract review time for small law firms
          </p>
        </div>

        <div className="mb-12 bg-white border border-black/5 rounded-4xl p-8">
          <h2 className="text-2xl font-semibold text-ink mb-4">The problem we&apos;re targeting</h2>
          <p className="text-ink/60 mb-4 leading-relaxed">
            Small law firms often spend hours per week manually reviewing client
            contracts for risk clauses, compliance issues, and liability concerns.
          </p>
          <ul className="space-y-2 text-ink/60 text-[15px]">
            <li className="flex items-start gap-2">
              <span className="text-ink/30">•</span>
              <span>Long, manual review per contract</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink/30">•</span>
              <span>Partners doing manual work instead of billable hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink/30">•</span>
              <span>A bottleneck that limits how many clients a firm can take on</span>
            </li>
          </ul>
        </div>

        <div className="mb-12 bg-white border border-black/5 rounded-4xl p-8">
          <h2 className="text-2xl font-semibold text-ink mb-4">The planned solution</h2>
          <p className="text-ink/60 mb-6 leading-relaxed">
            We&apos;re building an AI-powered contract analysis pipeline:
          </p>

          <div className="space-y-3">
            {[
              "Partner uploads a PDF contract",
              "AI extracts text and metadata",
              "System analyzes for common risk categories",
              "AI flags high-risk clauses with page numbers",
              "Partner reviews only the flagged sections",
            ].map((step, i) => (
              <div key={step} className="flex items-start gap-3 bg-surface rounded-2xl p-4">
                <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-ink/70 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-ink text-white rounded-4xl p-10">
          <h3 className="text-2xl font-semibold mb-3">
            Want early access when this launches?
          </h3>
          <p className="mb-6 text-white/70">
            Join the waitlist and we&apos;ll reach out as soon as it&apos;s ready.
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-white text-ink font-medium rounded-full hover:bg-white/90 transition-colors">
              Join the waitlist →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
