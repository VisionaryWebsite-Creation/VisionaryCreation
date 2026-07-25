import useReveal from "../hooks/useReveal.js";

const POINTS = [
  {
    title: "Small by design",
    d: "You work directly with the person building your site — no account managers relaying messages back and forth.",
  },
  {
    title: "Code, not templates",
    d: "Every project is hand-built. That means real performance, real flexibility, and nothing that looks like everyone else's site.",
  },
  {
    title: "Priced to fit",
    d: "Four fixed tiers mean you can budget confidently, whether this is your first site or your fifth.",
  },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div ref={ref} className="reveal about__copy">
          <span className="eyebrow">About the studio</span>
          <h2 className="about__title">
            We're a new studio, built on an old idea: care about the craft.
          </h2>
          <p className="about__lead">
            Visionary Website was started to do one thing well — take a
            business's idea for a website and turn it into something fast,
            considered, and genuinely custom. No page builders, no recycled
            themes.
          </p>
        </div>

        <div className="about__points">
          {POINTS.map((p) => (
            <div className="about__point" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about {
          background: var(--paper);
          padding: 6.5rem 0;
        }
        .about__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .about__title {
          font-size: clamp(1.7rem, 3vw, 2.3rem);
          margin-top: 1rem;
          line-height: 1.25;
        }
        .about__lead {
          margin-top: 1.4rem;
          color: var(--text-on-light-muted);
          line-height: 1.65;
          font-size: 1.02rem;
          max-width: 30rem;
        }
        .about__points {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .about__point {
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--paper-line);
        }
        .about__point:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .about__point h3 {
          font-size: 1.1rem;
        }
        .about__point p {
          margin-top: 0.5rem;
          color: var(--text-on-light-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .about__inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
