import useReveal from "../hooks/useReveal.js";

const PROJECTS = [
  { name: "Aldergrove Studio", tag: "Branding site · Growth tier", hue: "160,132,90" },
  { name: "Northfield Coffee Co.", tag: "Landing page · Launch tier", hue: "180,110,70" },
  { name: "Kestrel Analytics", tag: "SaaS marketing site · Visionary tier", hue: "150,150,150" },
  { name: "Marrow & Co.", tag: "E-commerce · Essential tier", hue: "170,120,80" },
];

export default function Portfolio() {
  const headRef = useReveal();
  const gridRef = useReveal({ threshold: 0.05 });

  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div ref={headRef} className="reveal portfolio__head">
          <span className="eyebrow">Selected work</span>
          <h2 className="portfolio__title">A few builds in progress</h2>
          <p className="portfolio__sub">
            We're a new studio — these are placeholder mockups standing in for
            the case studies we'll drop in as real client sites launch.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger portfolio__grid">
          {PROJECTS.map((p) => (
            <article className="proj-card" key={p.name}>
              <div
                className="proj-card__art"
                style={{ "--hue": p.hue }}
              >
                <MockBrowser />
              </div>
              <div className="proj-card__meta">
                <h3>{p.name}</h3>
                <p>{p.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio {
          background: var(--paper);
          padding: 2rem 0 6.5rem;
        }
        .portfolio__head {
          max-width: 38rem;
        }
        .portfolio__title {
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          margin-top: 1rem;
        }
        .portfolio__sub {
          margin-top: 1rem;
          color: var(--text-on-light-muted);
          font-size: 1.02rem;
          line-height: 1.6;
        }
        .portfolio__grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .proj-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--paper-line);
          background: var(--paper-2);
          transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
        }
        .proj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -28px rgba(11,12,15,0.3);
        }
        .proj-card__art {
          aspect-ratio: 16 / 10;
          background:
            linear-gradient(155deg, rgba(var(--hue), 0.22), rgba(var(--hue), 0.05)),
            var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.4rem;
        }
        .proj-card__meta {
          padding: 1.2rem 1.4rem 1.5rem;
        }
        .proj-card__meta h3 {
          font-size: 1.15rem;
        }
        .proj-card__meta p {
          margin-top: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-on-light-muted);
        }

        @media (max-width: 720px) {
          .portfolio__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function MockBrowser() {
  return (
    <svg viewBox="0 0 240 150" width="100%" style={{ maxWidth: 320 }}>
      <rect x="1" y="1" width="238" height="148" rx="8" fill="none" stroke="rgba(245,243,237,0.25)" strokeWidth="1" />
      <rect x="1" y="1" width="238" height="22" rx="8" fill="rgba(245,243,237,0.06)" />
      <circle cx="14" cy="12" r="2.4" fill="rgba(245,243,237,0.35)" />
      <circle cx="24" cy="12" r="2.4" fill="rgba(245,243,237,0.35)" />
      <circle cx="34" cy="12" r="2.4" fill="rgba(245,243,237,0.35)" />
      <rect x="18" y="35" width="90" height="9" rx="2" fill="rgba(245,243,237,0.4)" />
      <rect x="18" y="50" width="140" height="6" rx="2" fill="rgba(245,243,237,0.2)" />
      <rect x="18" y="61" width="110" height="6" rx="2" fill="rgba(245,243,237,0.2)" />
      <rect x="18" y="80" width="56" height="18" rx="4" fill="rgba(200,149,80,0.7)" />
      <rect x="140" y="35" width="82" height="95" rx="6" fill="rgba(245,243,237,0.08)" />
    </svg>
  );
}
