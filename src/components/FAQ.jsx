import { useState } from "react";
import useReveal from "../hooks/useReveal.js";

const FAQS = [
  {
    q: "Which tier is right for me?",
    a: "If you just need one page to announce something quickly, Launch is enough. Most small businesses land on Essential or Growth once they need more than a handful of pages or want real animation and CMS control. Visionary is for a full custom brand-and-site build.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short brief on your business and goals, any existing brand assets (logo, colors, fonts), and your written content — or we can help draft it together during the Discover stage.",
  },
  {
    q: "Do you handle hosting and domains?",
    a: "We deploy your finished site to modern hosting (like Vercel or Netlify) and can connect an existing domain, or help you register a new one. Ongoing hosting costs are typically low or free depending on traffic.",
  },
  {
    q: "Can I make edits myself after launch?",
    a: "Essential tier and above include a simple content editor for text and images. Launch tier is a static page — edits go through us, priced hourly if needed.",
  },
  {
    q: "What if my project doesn't fit a tier exactly?",
    a: "Tell us what you're picturing. We regularly scope custom quotes for projects that sit between tiers or need ongoing work after launch.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner">
        <div ref={ref} className="reveal faq__head">
          <span className="eyebrow">Questions</span>
          <h2 className="faq__title">Good to know</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item ${open ? "is-open" : ""}`} key={item.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__a-wrap">
                  <p className="faq__a">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq {
          background: var(--paper);
          padding: 2rem 0 7rem;
        }
        .faq__inner {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 3rem;
        }
        .faq__title {
          font-size: clamp(1.9rem, 3.4vw, 2.5rem);
          margin-top: 1rem;
        }
        .faq__list {
          border-top: 1px solid var(--paper-line);
        }
        .faq__item {
          border-bottom: 1px solid var(--paper-line);
        }
        .faq__q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.4rem 0;
          font-family: var(--font-display);
          font-size: 1.08rem;
          text-align: left;
        }
        .faq__icon {
          position: relative;
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        .faq__icon::before, .faq__icon::after {
          content: "";
          position: absolute;
          background: var(--text-on-light);
          transition: transform var(--dur-fast) var(--ease), opacity var(--dur-fast) var(--ease);
        }
        .faq__icon::before {
          top: 50%; left: 0; width: 100%; height: 1.4px; transform: translateY(-50%);
        }
        .faq__icon::after {
          left: 50%; top: 0; height: 100%; width: 1.4px; transform: translateX(-50%);
        }
        .faq__item.is-open .faq__icon::after { opacity: 0; transform: translateX(-50%) rotate(90deg); }
        .faq__item.is-open .faq__q { color: var(--gold); }
        .faq__a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--dur-med) var(--ease);
        }
        .faq__item.is-open .faq__a-wrap {
          grid-template-rows: 1fr;
        }
        .faq__a {
          overflow: hidden;
          color: var(--text-on-light-muted);
          line-height: 1.65;
          font-size: 0.95rem;
          padding-bottom: 1.4rem;
          max-width: 38rem;
        }

        @media (max-width: 860px) {
          .faq__inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
