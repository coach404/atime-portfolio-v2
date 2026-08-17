export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas py-20 px-6">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="mb-10">
          <a href="/" className="text-primary hover:underline text-sm">
            ← Back to home
          </a>
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-semibold text-ink mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-xl text-ink/60">
            Legal &amp; accounting waitlist, or a freight dispatch pilot — tell us which.
          </p>
        </div>

        <div className="bg-white border border-black/5 rounded-4xl p-8 mb-6">
          <h2 className="text-lg font-semibold text-ink mb-5">Email</h2>
          <a
            href="mailto:atime.company@gmail.com"
            className="text-primary text-lg font-medium"
          >
            atime.company@gmail.com
          </a>

          <div className="mt-8 pt-8 border-t border-black/5">
            <h3 className="text-lg font-semibold text-ink mb-4">Include in your email</h3>
            <ul className="space-y-2 text-ink/60 text-[15px]">
              <li>Which vertical: legal/accounting waitlist, or freight dispatch pilot</li>
              <li>Company name and size (employees, or fleet size for carriers)</li>
              <li>Primary bottleneck you want solved</li>
              <li>Best time for a 15-minute intro call</li>
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm text-ink/50">
          <div className="bg-white border border-black/5 rounded-3xl p-5">
            <p className="font-medium text-ink mb-1">Legal &amp; Accounting</p>
            <p>Coming soon — join the waitlist for early access.</p>
          </div>
          <div className="bg-white border border-black/5 rounded-3xl p-5">
            <p className="font-medium text-ink mb-1">Freight Dispatch</p>
            <p>Free pilot for the first 5 carriers, 5-50 trucks.</p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-ink/40">
          We respond to all inquiries within 24 hours.
        </p>
      </div>
    </div>
  );
}
