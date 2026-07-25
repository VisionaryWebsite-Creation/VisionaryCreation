import useReveal from "../hooks/useReveal.js";

const TIERS = [
  {
    name: "Launch",
    price: "$500",
    unit: "one page",
    desc: "A single, sharp landing page to get a new idea online fast.",
    features: [
      "1 custom-designed page",
      "Mobile-responsive build",
      "Contact form",
      "Basic on-page SEO",
      "1 round of revisions",
      "3–5 day delivery",
    ],
    featured: false,
  },
  {
    name: "Essential",
    price: "$1,500",
    unit: "up to 5 pages",
    desc: "A proper multi-page site for a small business ready to be found.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive build",
      "Contact form + map/hours",
      "SEO structure & metadata",
      "Simple content editor",
      "2 rounds of revisions",
      "1–2 week delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    unit: "up to 10 pages",
    desc: "A custom design system and animation for teams scaling up.",
    features: [
      "Up to 10 custom pages",
      "Custom design system",
      "Scroll & hover animations",
      "Blog / CMS integration",
      "Advanced SEO + analytics",
      "3 rounds of revisions",
      "3–4 week delivery",
    ],
    featured: true,
  },
  {
    name: "Visionary",
    price: "$10,000",
    unit: "fully bespoke",
    desc: "A completely custom build, brand and all, with no template in sight.",
    features: [
      "Unlimited custom pages",
      "Full brand identity pass",
      "Advanced interactions & 3D",
      "CMS + third-party integrations",
      "Dedicated project manager",
      "Unlimited revisions",
      "6–8 week delivery",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const headRef = useReveal();
  const gridRef = useReveal({ threshold: 0.05 });

  return (
    <section id="services" className="pricing">
      <div className="container">
        <div ref={headRef} className="reveal pricing__head">
          <span className="eyebrow">Services &amp; pricing</span>
          <h2 className="pricing__title">Pick a plan that fits your vision</h2>
          <p className="pricing__sub">
            Four fixed packages, from a quick single page to a fully bespoke
            build. Every tier is hand-coded — nothing is a drag-and-drop
            template.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger pricing__grid">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`tier-card ${tier.featured ? "tier-card--featured" : ""}`}
            >
              {tier.featured && <span className="tier-card__badge">Most chosen</span>}
              <h3 className="tier-card__name">{tier.name}</h3>
              <p className="tier-card__desc">{tier.desc}</p>
              <div className="tier-card__price">
                <span className="tier-card__amount">{tier.price}</span>
                <span className="tier-card__unit">/ {tier.unit}</span>
              </div>
              <ul className="tier-card__features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${tier.featured ? "btn-primary" : "btn-ghost-light"} tier-card__cta`}
              >
                Start with {tier.name}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          Need something in between, or an ongoing retainer for updates? We
          scope custom quotes too — just tell us what you're picturing.
        </p>
      </div>

      <style>{`
        .pricing {
          background: var(--paper);
          padding: 6.5rem 0;
        }
        .pricing__head {
          max-width: 40rem;
        }
        .pricing__title {
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          margin-top: 1rem;
        }
        .pricing__sub {
          margin-top: 1rem;
          color: var(--text-on-light-muted);
          font-size: 1.02rem;
          line-height: 1.6;
        }
        .pricing__grid {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }
        .tier-card {
          background: var(--paper-2);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-md);
          padding: 2rem 1.6rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
        }
        .tier-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -24px rgba(11,12,15,0.25);
        }
        .tier-card--featured {
          border-color: var(--gold);
          box-shadow: 0 20px 48px -24px rgba(200,149,80,0.35);
        }
        .tier-card__badge {
          position: absolute;
          top: -0.7rem;
          left: 1.6rem;
          background: var(--gold);
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
        }
        .tier-card__name {
          font-size: 1.4rem;
        }
        .tier-card__desc {
          margin-top: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-on-light-muted);
          line-height: 1.5;
          min-height: 3.4em;
        }
        .tier-card__price {
          margin-top: 1.4rem;
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
          font-family: var(--font-mono);
        }
        .tier-card__amount {
          font-size: 1.9rem;
          font-weight: 500;
        }
        .tier-card__unit {
          font-size: 0.75rem;
          color: var(--text-on-light-muted);
        }
        .tier-card__features {
          margin-top: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex-grow: 1;
        }
        .tier-card__features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.86rem;
          line-height: 1.4;
          color: var(--text-on-light);
        }
        .tier-card__features svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
          color: var(--gold);
        }
        .tier-card__cta {
          margin-top: 1.8rem;
          width: 100%;
        }
        .pricing__note {
          margin-top: 2.5rem;
          font-size: 0.9rem;
          color: var(--text-on-light-muted);
          text-align: center;
        }

        @media (max-width: 1080px) {
          .pricing__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .pricing__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5L6.2 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
