export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-semibold text-ink mb-6 leading-[1.05]">
            AI automation,
            <br />
            built by one founder.
          </h1>
          <p className="text-xl md:text-2xl text-ink/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            No IT team, no 6-month rollout, no enterprise contract. Production-grade
            automation for firms that can&apos;t afford to wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/legal">
              <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
                Legal &amp; Accounting
              </button>
            </a>
            <a href="/dispatch">
              <button className="px-7 py-3 bg-white hover:bg-surface text-ink font-medium rounded-full border border-black/10 transition-colors">
                Freight Dispatch
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Two verticals */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <a
            href="/legal"
            className="stagger-item group block rounded-4xl bg-white border border-black/5 p-10 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
              Legal &amp; Accounting — Coming Soon
            </span>
            <h2 className="text-2xl font-semibold text-ink mb-3">
              AI contract review, built for 10-50 person firms
            </h2>
            <p className="text-ink/60 leading-relaxed mb-6">
              Flags only high-risk clauses — a partner reviews every one.
              In development now; join the waitlist for early access.
            </p>
            <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Get early access →
            </span>
          </a>

          <a
            href="/dispatch"
            className="stagger-item group block rounded-4xl bg-white border border-black/5 p-10 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
              Freight Dispatch
            </span>
            <h2 className="text-2xl font-semibold text-ink mb-3">
              AI dispatch for 5-50 truck carriers
            </h2>
            <p className="text-ink/60 leading-relaxed mb-6">
              Automated driver-load matching, real-time HOS/tachograph
              compliance, and driver messaging in 12 languages.
            </p>
            <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more →
            </span>
          </a>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-white rounded-4xl border border-black/5 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
          <img
            src="/anja-founder-photo.png"
            alt="Anja Trajkovic, Founder of ATime"
            className="w-32 h-32 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-lg text-ink/80 leading-relaxed mb-4">
              &ldquo;I&apos;m 17. I shipped a production AI automation portfolio in
              under a week. Most agencies take 6 months and charge $200k — I built
              ATime to flip that model.&rdquo;
            </p>
            <p className="font-medium text-ink">Anja Trajkovic</p>
            <p className="text-sm text-ink/50">Founder, ATime</p>
          </div>
        </div>
      </section>
    </div>
  );
}
