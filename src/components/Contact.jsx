import { useState } from "react";
import useReveal from "../hooks/useReveal.js";

const BUDGETS = [
  "Launch — $500",
  "Essential — $1,500",
  "Growth — $4,500",
  "Visionary — $10,000",
  "Not sure yet",
];

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", budget: BUDGETS[0], message: "" });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // NOTE: no backend is wired up yet. Connect this to a form service
    // (Formspree, Resend, Netlify Forms, your own API route, etc). See README.
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div ref={ref} className="reveal contact__copy">
          <span className="eyebrow">Get in touch</span>
          <h2 className="contact__title">
            Tell us about
            <br />
            the site you're picturing.
          </h2>
          <p className="contact__sub">
            Share a few details and we'll reply within one business day with
            next steps — no obligation, no hard sell.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {status === "sent" ? (
            <div className="contact__success">
              <h3>Message sent.</h3>
              <p>Thanks, {form.name.split(" ")[0] || "there"} — we'll be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <div className="contact__row">
                <label>
                  Name
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jordan Lee"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jordan@company.com"
                  />
                </label>
              </div>

              <label>
                Budget
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </label>

              <label>
                What are you picturing?
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us a bit about your business and what the site needs to do..."
                />
              </label>

              <button type="submit" className="btn btn-primary contact__submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </>
          )}
        </form>
      </div>

      <style>{`
        .contact {
          background: var(--ink);
          color: var(--text-on-dark);
          padding: 7rem 0;
        }
        .contact__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
        }
        .contact__title {
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          margin-top: 1rem;
          line-height: 1.2;
        }
        .contact__sub {
          margin-top: 1.2rem;
          color: var(--text-on-dark-muted);
          line-height: 1.6;
          max-width: 26rem;
        }
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .contact__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.3rem;
        }
        .contact__form label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-on-dark-muted);
        }
        .contact__form input,
        .contact__form select,
        .contact__form textarea {
          font-family: var(--font-body);
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          background: var(--ink-2);
          border: 1px solid var(--ink-line);
          border-radius: var(--radius-sm);
          color: var(--text-on-dark);
          resize: vertical;
          transition: border-color var(--dur-fast) var(--ease);
        }
        .contact__form input:focus,
        .contact__form select:focus,
        .contact__form textarea:focus {
          border-color: var(--gold);
        }
        .contact__submit {
          margin-top: 0.4rem;
          align-self: flex-start;
        }
        .contact__submit:disabled {
          opacity: 0.6;
          cursor: default;
        }
        .contact__success {
          background: var(--ink-2);
          border: 1px solid var(--ink-line);
          border-radius: var(--radius-md);
          padding: 2.4rem;
        }
        .contact__success h3 {
          font-size: 1.4rem;
          color: var(--gold-bright);
        }
        .contact__success p {
          margin-top: 0.6rem;
          color: var(--text-on-dark-muted);
        }

        @media (max-width: 860px) {
          .contact__inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .contact__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
