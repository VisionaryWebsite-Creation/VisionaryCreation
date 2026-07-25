import Logo from "./Logo.jsx";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <Logo tone="dark" size={30} />
          <nav className="footer__links" aria-label="Footer">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Visionary Website. All rights reserved.</p>
          <p>Websites from $500 to $10,000 — built to fit your vision.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--ink);
          color: var(--text-on-dark);
          padding: 3rem 0 2.5rem;
          border-top: 1px solid var(--ink-line);
        }
        .footer__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--ink-line);
        }
        .footer__links {
          display: flex;
          gap: 1.6rem;
          flex-wrap: wrap;
          font-size: 0.88rem;
          color: var(--text-on-dark-muted);
        }
        .footer__links a:hover {
          color: var(--gold-bright);
        }
        .footer__bottom {
          margin-top: 1.6rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.6rem;
          font-size: 0.78rem;
          color: var(--text-on-dark-muted);
        }

        @media (max-width: 600px) {
          .footer__top { flex-direction: column; align-items: flex-start; }
          .footer__bottom { flex-direction: column; }
        }
      `}</style>
    </footer>
  );
}
