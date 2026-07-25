import useReveal from "../hooks/useReveal.js";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    d: "A short call to understand your business, audience, and what the site needs to accomplish.",
  },
  {
    n: "02",
    title: "Design",
    d: "We draft a visual direction — palette, type, layout — and refine it with you before any code is written.",
  },
  {
    n: "03",
    title: "Build",
    d: "The approved design is hand-coded, tested across devices, and wired up with the content you provide.",
  },
  {
    n: "04",
    title: "Launch",
    d: "We deploy, connect your domain, and hand over a site you can grow — plus a short walkthrough of how it works.",
  },
];

export default function Process() {
  const headRef = useReveal();
  const listRef = useReveal({ threshold: 0.05 });

  return (
    <section id="process" className="process">
      <div className="container process__inner">
        <div ref={headRef} className="reveal process__head">
          <span className="eyebrow">How we work</span>
          <h2 className="process__title">
            From first sketch
            <br />
            to launch day
          </h2>
          <p className="process__sub">
            Every project — regardless of tier — moves through the same four
            stages, so you always know what's next.
          </p>
        </div>

        <div ref={listRef} className="reveal-stagger process__list">
          {STEPS.map((step, i) => (
            <div className="process__step" key={step.n}>
              <div className="process__num">{step.n}</div>
              <div className="process__body">
                <h3>{step.title}</h3>
                <p>{step.d}</p>
              </div>
              {i < STEPS.length - 1 && <div className="process__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process {
          background: var(--ink);
          color: var(--text-on-dark);
          padding: 6.5rem 0;
        }
        .process__inner {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 3.5rem;
        }
        .process__title {
          font-size: clamp(1.9rem, 3.4vw, 2.6rem);
          margin-top: 1rem;
        }
        .process__sub {
          margin-top: 1.2rem;
          color: var(--text-on-dark-muted);
          line-height: 1.6;
          max-width: 24rem;
        }
        .process__list {
          display: flex;
          flex-direction: column;
        }
        .process__step {
          display: grid;
          grid-template-columns: 3.5rem 1fr;
          gap: 1.5rem;
          position: relative;
          padding-bottom: 3rem;
        }
        .process__num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--gold);
          padding-top: 0.2rem;
        }
        .process__connector {
          position: absolute;
          left: 1.1rem;
          top: 1.6rem;
          bottom: -0.6rem;
          width: 1px;
          background: var(--ink-line);
        }
        .process__body h3 {
          font-size: 1.3rem;
        }
        .process__body p {
          margin-top: 0.6rem;
          color: var(--text-on-dark-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          max-width: 30rem;
        }

        @media (max-width: 860px) {
          .process__inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
