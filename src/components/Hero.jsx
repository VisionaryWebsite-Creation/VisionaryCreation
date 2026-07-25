import useReveal from "../hooks/useReveal.js";

const TAGS = [
  { label: "Responsive", top: "18%", left: "4%", delay: "0s" },
  { label: "Fast-loading", top: "68%", left: "2%", delay: "1.1s" },
  { label: "SEO-ready", top: "12%", left: "82%", delay: "0.6s" },
  { label: "Accessible", top: "72%", left: "84%", delay: "1.7s" },
];

export default function Hero() {
  const copyRef = useReveal();
  const artRef = useReveal({ threshold: 0.1 });

  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div ref={copyRef} className="reveal hero__copy">
          <span className="eyebrow">Websites, built from $500 to $10,000</span>
          <h1 className="hero__title">
            Every great website
            <br />
            starts as a <em>vision.</em>
          </h1>
          <p className="hero__sub">
            Visionary Website is a small studio that designs and builds custom
            sites for founders and teams — from a single sharp landing page to
            a fully bespoke, animated experience.
          </p>
          <div className="hero__ctas">
            <a href="#services" className="btn btn-primary">
              See pricing
            </a>
            <a href="#work" className="btn btn-ghost-dark">
              View our work
            </a>
          </div>
        </div>

        <div ref={artRef} className="reveal hero__art" aria-hidden="true">
          <BlueprintDraw />
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              className="hero__tag"
              style={{ top: tag.top, left: tag.left, animationDelay: tag.delay }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          background: radial-gradient(ellipse 120% 70% at 50% -10%, #201a12 0%, var(--ink) 55%);
          color: var(--text-on-dark);
          padding: 9.5rem 0 6rem;
          overflow: hidden;
        }
        .hero__glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(480px 320px at 85% 15%, rgba(200,149,80,0.14), transparent 70%),
            radial-gradient(400px 300px at 10% 85%, rgba(200,149,80,0.08), transparent 70%);
          pointer-events: none;
        }
        .hero__inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3rem;
          align-items: center;
          min-height: 60vh;
        }
        .hero__title {
          font-size: clamp(2.4rem, 5.4vw, 4.2rem);
          line-height: 1.04;
          font-weight: 500;
          letter-spacing: -0.02em;
          margin-top: 1.4rem;
        }
        .hero__title em {
          font-style: italic;
          color: var(--gold-bright);
          font-weight: 400;
        }
        .hero__sub {
          margin-top: 1.6rem;
          max-width: 34rem;
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-on-dark-muted);
        }
        .hero__ctas {
          display: flex;
          gap: 1rem;
          margin-top: 2.4rem;
          flex-wrap: wrap;
        }
        .hero__art {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__tag {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          border: 1px solid var(--ink-line);
          background: rgba(22, 24, 29, 0.8);
          backdrop-filter: blur(6px);
          color: var(--text-on-dark-muted);
          animation: drift 7s ease-in-out infinite;
          white-space: nowrap;
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 980px) {
          .hero__inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero__sub { margin-left: auto; margin-right: auto; }
          .hero__ctas { justify-content: center; }
          .hero__art { margin-top: 1rem; min-height: 240px; }
          .hero__tag { display: none; }
        }
        @media (max-width: 560px) {
          .hero { padding: 7.5rem 0 4rem; }
        }
      `}</style>
    </section>
  );
}

function BlueprintDraw() {
  return (
    <svg
      className="blueprint"
      viewBox="0 0 420 300"
      width="100%"
      style={{ maxWidth: 420 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="6" width="408" height="288" rx="14" className="bp-frame" />
      <circle cx="26" cy="26" r="3" className="bp-dot" />
      <circle cx="38" cy="26" r="3" className="bp-dot" />
      <circle cx="50" cy="26" r="3" className="bp-dot" />
      <line x1="6" y1="42" x2="414" y2="42" className="bp-frame bp-line-1" />

      <rect x="26" y="60" width="150" height="14" rx="4" className="bp-block bp-b1" />
      <rect x="26" y="86" width="220" height="10" rx="3" className="bp-block bp-b2" />
      <rect x="26" y="104" width="180" height="10" rx="3" className="bp-block bp-b3" />

      <rect x="26" y="140" width="110" height="120" rx="8" className="bp-block bp-b4" />
      <rect x="150" y="140" width="110" height="120" rx="8" className="bp-block bp-b5" />
      <rect x="274" y="140" width="120" height="120" rx="8" className="bp-fill bp-b6" />

      <style>{`
        .blueprint .bp-frame {
          fill: none;
          stroke: var(--text-on-dark-muted);
          stroke-width: 1.4;
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: draw 1.8s var(--ease) forwards 0.2s;
        }
        .blueprint .bp-line-1 {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation: draw 0.8s var(--ease) forwards 1.1s;
        }
        .blueprint .bp-dot {
          fill: var(--gold);
          opacity: 0;
          animation: fadeIn 0.4s ease forwards 1.6s;
        }
        .blueprint .bp-block {
          fill: none;
          stroke: var(--gold);
          stroke-width: 1.4;
          stroke-dasharray: 620;
          stroke-dashoffset: 620;
          opacity: 0.85;
        }
        .blueprint .bp-b1 { animation: draw 0.9s var(--ease) forwards 1.5s; }
        .blueprint .bp-b2 { animation: draw 0.9s var(--ease) forwards 1.7s; }
        .blueprint .bp-b3 { animation: draw 0.9s var(--ease) forwards 1.85s; }
        .blueprint .bp-b4 { animation: draw 1s var(--ease) forwards 2s; }
        .blueprint .bp-b5 { animation: draw 1s var(--ease) forwards 2.15s; }
        .blueprint .bp-b6 {
          opacity: 0;
          stroke: none;
          fill: var(--gold-dim);
          animation: fadeIn 0.8s ease forwards 2.5s;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .blueprint * { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>
    </svg>
  );
}
