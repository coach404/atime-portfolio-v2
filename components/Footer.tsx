export default function Footer() {
  return (
    <footer className="bg-surface text-ink/60 py-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="/" className="font-semibold text-[15px] text-ink">
              ATime
            </a>
            <p className="text-[13px] mt-2 leading-relaxed">
              AI automation studio — legal, accounting &amp; enterprise freight dispatch.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-ink text-[13px] mb-3">Verticals</h4>
            <ul className="space-y-2 text-[13px]">
              <li><a href="/legal" className="hover:text-ink transition-colors">Legal &amp; Accounting</a></li>
              <li><a href="/dispatch" className="hover:text-ink transition-colors">Freight Dispatch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-ink text-[13px] mb-3">Company</h4>
            <ul className="space-y-2 text-[13px]">
              <li><a href="/pricing" className="hover:text-ink transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-ink text-[13px] mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a href="mailto:atime.company@gmail.com" className="hover:text-ink transition-colors">
                  atime.company@gmail.com
                </a>
              </li>
              <li>US-based, serving nationwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 text-[12px]">
          <p>&copy; 2026 ATime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
