import useReveal from "../hooks/useReveal.js";

const VALUES = [
  { k: "01", v: "Fixed pricing", d: "No surprise invoices — you pick a tier and know the cost upfront." },
  { k: "02", v: "Built by developers", d: "Every site is hand-coded, not dragged together from a template." },
  { k: "03", v: "Fast turnaround", d: "Most projects launch in one to six weeks, tier depending." },
];

export default function ValuesBar() {
  const ref = useReveal();
  return (
    <section className="values">
      <div className="container">
        <div ref={ref} className="reveal-stagger values__grid">
          {VALUES.map((item) => (
            <div className="values__item" key={item.k}>
              <span className="values__k">{item.k}</span>
              <h3 className="values__v">{item.v}</h3>
              <p className="values__d">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .values {
          background: var(--ink);
          padding-bottom: 5.5rem;
          margin-top: -1px;
        }
        .values__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--ink-line);
          border: 1px solid var(--ink-line);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .values__item {
          background: var(--ink);
          padding: 2rem 2rem 2.2rem;
        }
        .values__k {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--gold);
        }
        .values__v {
          color: var(--text-on-dark);
          font-size: 1.25rem;
          margin-top: 0.9rem;
        }
        .values__d {
          color: var(--text-on-dark-muted);
          font-size: 0.92rem;
          line-height: 1.55;
          margin-top: 0.6rem;
        }
        @media (max-width: 780px) {
          .values__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
