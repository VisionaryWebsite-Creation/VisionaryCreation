import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`} id="top">
      <div className="container nav__inner">
        <Logo tone="dark" size={32} />

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav__cta">
          Start a project
        </a>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "is-open" : ""} />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
          style={{ marginTop: "0.5rem" }}
        >
          Start a project
        </a>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.1rem 0;
          background: transparent;
          transition: background var(--dur-fast) var(--ease), padding var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease);
          border-bottom: 1px solid transparent;
        }
        .nav--solid {
          background: rgba(11, 12, 15, 0.86);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 0.8rem 0;
          border-bottom: 1px solid var(--ink-line);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .nav__links {
          display: flex;
          gap: 2rem;
          font-size: 0.9rem;
          color: var(--text-on-dark-muted);
        }
        .nav__links a {
          transition: color var(--dur-fast) var(--ease);
        }
        .nav__links a:hover {
          color: var(--text-on-dark);
        }
        .nav__cta {
          padding: 0.65rem 1.3rem;
          font-size: 0.85rem;
        }
        .nav__burger {
          display: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .nav__burger span,
        .nav__burger span::before,
        .nav__burger span::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 1.5px;
          background: var(--text-on-dark);
          transition: transform var(--dur-fast) var(--ease), opacity var(--dur-fast) var(--ease);
        }
        .nav__burger span::before { transform: translateY(-6px); }
        .nav__burger span::after { transform: translateY(6px); }
        .nav__burger span.is-open { background: transparent; }
        .nav__burger span.is-open::before { transform: rotate(45deg); }
        .nav__burger span.is-open::after { transform: rotate(-45deg); }

        .nav__mobile {
          display: none;
        }

        @media (max-width: 860px) {
          .nav__links, .nav__cta { display: none; }
          .nav__burger { display: flex; }
          .nav__mobile {
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
            padding: 1.5rem var(--gutter) 2.5rem;
            background: rgba(11, 12, 15, 0.98);
            backdrop-filter: blur(14px);
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height var(--dur-med) var(--ease), opacity var(--dur-fast) var(--ease);
            font-size: 1.05rem;
            color: var(--text-on-dark);
          }
          .nav__mobile.is-open {
            max-height: 420px;
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
