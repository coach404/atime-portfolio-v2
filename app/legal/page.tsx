export default function LegalPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
            Coming soon — for US law &amp; accounting firms
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold text-ink mb-6 leading-[1.05]">
            Stop losing partner hours to <span className="text-primary">contract review</span>
          </h1>

          <p className="text-xl text-ink/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            AI automation for 10-50 person law and accounting firms, built by the
            same team shipping Dispatch AI. In active development — join the
            waitlist to be first in line when it launches.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="/contact">
              <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
                Join the waitlist
              </button>
            </a>
            <a href="#how-it-will-work">
              <button className="px-7 py-3 bg-white hover:bg-surface text-ink font-medium rounded-full border border-black/10 transition-colors">
                See how it will work
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/50">
            <span>No cost to join the waitlist</span>
            <span>No spam</span>
            <span>Early access when we launch</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-ink mb-4">
            The Excel Trap is killing your firm&apos;s growth
          </h2>
          <p className="text-lg text-ink/60 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Most law and accounting firms still use spreadsheets for critical
            workflows. Partners lose hours every week to work that should be
            automated.
          </p>

          <div id="how-it-will-work" className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-4xl p-8 border border-black/5">
              <h3 className="text-lg font-semibold text-ink mb-5">
                Today, without ATime
              </h3>
              <ul className="space-y-3 text-ink/60 text-[15px]">
                <li>Manual, line-by-line contract review</li>
                <li>Spreadsheets held together with formulas</li>
                <li>Time spent on repetitive tasks instead of clients</li>
                <li>Can&apos;t scale without hiring more staff</li>
              </ul>
            </div>

            <div className="bg-ink rounded-4xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-5">
                What we&apos;re building
              </h3>
              <ul className="space-y-3 text-white/70 text-[15px]">
                <li>AI flags only high-risk clauses — a partner reviews every one</li>
                <li>Minutes of review instead of hours</li>
                <li>No IT team or 6-month rollout required</li>
                <li>Priced for 10-50 person firms, not enterprise budgets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Want to be first when this launches?
          </h2>
          <p className="text-lg text-ink/60 mb-8">
            Tell us about your firm — we&apos;ll reach out as soon as early access opens.
          </p>
          <a href="/contact">
            <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
              Join the waitlist
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
