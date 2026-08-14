export default function DispatchPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-surface rounded-full text-[12px] font-medium text-ink/60 mb-6">
            Free pilot for the first 5 carriers
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold text-ink mb-6 leading-[1.05]">
            AI dispatch for
            <br />
            <span className="text-primary">5-50 truck</span> carriers
          </h1>

          <p className="text-xl text-ink/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Automated driver-load matching, real-time HOS and tachograph
            compliance, and driver communication in 12 languages. Built for
            carriers who can&apos;t afford $200k+ enterprise dispatch software.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="/contact">
              <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
                Request free pilot
              </button>
            </a>
            <a href="#how-it-works">
              <button className="px-7 py-3 bg-white hover:bg-surface text-ink font-medium rounded-full border border-black/10 transition-colors">
                See how it works
              </button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/50">
            <span>No cost during pilot</span>
            <span>No contract</span>
            <span>US &amp; EU coverage</span>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI load matching",
              body: "Matches drivers to loads automatically, factoring in proximity, equipment, and hours remaining.",
            },
            {
              title: "Compliance built in",
              body: "HOS (US) and tachograph (EU) rules checked in real time — mandatory rest stops planned into every route.",
            },
            {
              title: "12-language driver comms",
              body: "Detects and translates driver messages automatically over SMS and WhatsApp, no bilingual dispatcher needed.",
            },
          ].map((f) => (
            <div key={f.title} className="stagger-item bg-white rounded-4xl border border-black/5 p-8">
              <h3 className="text-lg font-semibold text-ink mb-3">{f.title}</h3>
              <p className="text-ink/60 leading-relaxed text-[15px]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-4xl p-8 border border-black/5">
              <h3 className="text-lg font-semibold text-ink mb-5">
                Without AI dispatch
              </h3>
              <ul className="space-y-3 text-ink/60 text-[15px]">
                <li>Manual load-driver matching, hours per load</li>
                <li>Compliance math done by hand, easy to miss</li>
                <li>A dispatcher fluent in every driver&apos;s language</li>
                <li>$200k+ enterprise contracts to get any of this</li>
              </ul>
            </div>

            <div className="bg-ink rounded-4xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-5">
                With Dispatch AI
              </h3>
              <ul className="space-y-3 text-white/70 text-[15px]">
                <li>Matching in seconds, AI reasoning shown</li>
                <li>Compliance checked automatically, every load</li>
                <li>12 languages handled without hiring</li>
                <li>Free pilot, no contract, no enterprise price tag</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            5 free pilot spots. First come, first served.
          </h2>
          <p className="text-lg text-ink/60 mb-8">
            Real loads, real drivers, zero cost during the pilot.
          </p>
          <a href="/contact">
            <button className="px-7 py-3 bg-ink hover:bg-black text-white font-medium rounded-full transition-colors">
              Request your pilot
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
