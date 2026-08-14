export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <span className="font-semibold text-[15px] text-ink tracking-tight">
              ATime
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-[13px] text-ink/70">
            <a href="/legal" className="hover:text-ink transition-colors">
              Legal &amp; Accounting
            </a>
            <a href="/dispatch" className="hover:text-ink transition-colors">
              Freight Dispatch
            </a>
            <a href="/pricing" className="hover:text-ink transition-colors">
              Pricing
            </a>
            <a href="/contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </div>

          <a href="/contact">
            <button className="px-4 py-1.5 bg-ink hover:bg-black text-white rounded-full font-medium text-[13px] transition-colors">
              Get in touch
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
