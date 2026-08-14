export default function LegalPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
            Built for US law &amp; accounting firms
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold text-ink mb-6 leading-[1.05]">
            Cut contract review time by <span className="text-primary">87%</span>
          </h1>

          <p className="text-xl text-ink/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade AI automation for 10-50 person law and accounting
            firms. Reclaim 13+ hours per week. No IT team needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="/pricing">
              <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
                Start 14-day free trial
              </button>
            </a>
            <a href="/contact">
              <button className="px-7 py-3 bg-white hover:bg-surface text-ink font-medium rounded-full border border-black/10 transition-colors">
                Get free $5k audit
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/50">
            <span>No credit card required</span>
            <span>Setup in 48 hours</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "87%", label: "Time reduction", sub: "Contract review" },
            { value: "$75k", label: "Annual ROI", sub: "Per partner" },
            { value: "13h", label: "Hours saved", sub: "Every week" },
            { value: "99%+", label: "Accuracy", sub: "Partner reviews all" },
          ].map((stat) => (
            <div key={stat.label} className="stagger-item bg-white rounded-3xl border border-black/5 p-6 text-center">
              <div className="text-3xl font-semibold text-ink mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-ink/80">{stat.label}</div>
              <div className="text-xs text-ink/40 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-ink mb-4">
            The Excel Trap is killing your firm&apos;s growth
          </h2>
          <p className="text-lg text-ink/60 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            75% of law firms still use spreadsheets for critical workflows.
            Partners spend 15+ hours per week on tasks that should be automated.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-4xl p-8 border border-black/5">
              <h3 className="text-lg font-semibold text-ink mb-5">
                Without ATime
              </h3>
              <ul className="space-y-3 text-ink/60 text-[15px]">
                <li>15 hours/week manual contract review</li>
                <li>Excel spreadsheets held together with formulas</li>
                <li>$273k/year wasted on repetitive tasks</li>
                <li>Can&apos;t scale without hiring more staff</li>
              </ul>
            </div>

            <div className="bg-ink rounded-4xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-5">
                With ATime
              </h3>
              <ul className="space-y-3 text-white/70 text-[15px]">
                <li>2 hours/week (87% reduction)</li>
                <li>AI flags only high-risk clauses</li>
                <li>$75k annual ROI per partner</li>
                <li>Take on 3x more clients without hiring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Ready to reclaim 13+ hours a week?
          </h2>
          <p className="text-lg text-ink/60 mb-8">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/pricing">
              <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
                Start free trial
              </button>
            </a>
            <a href="/contact">
              <button className="px-7 py-3 bg-white hover:bg-surface text-ink font-medium rounded-full border border-black/10 transition-colors">
                Get free $5k audit
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
