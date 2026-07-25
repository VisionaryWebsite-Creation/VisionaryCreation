export function LogoMark({ size = 36, tone = "dark" }) {
  // tone "dark" = for placement on dark backgrounds (frame in cream, V in gold)
  // tone "light" = for placement on light backgrounds (frame in ink, V in gold)
  const frame = tone === "dark" ? "#F5F3ED" : "#0B0C0F";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="11"
        stroke={frame}
        strokeWidth="2"
        opacity="0.9"
      />
      <circle cx="11.5" cy="11.5" r="1.6" fill="#C89550" />
      <path
        d="M14 16 L24 34 L34 16"
        stroke="#C89550"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ tone = "dark", showWordmark = true, size = 36 }) {
  const textColor = tone === "dark" ? "var(--text-on-dark)" : "var(--text-on-light)";
  return (
    <a
      href="#top"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.65rem",
        color: textColor,
      }}
      aria-label="Visionary Website — home"
    >
      <LogoMark size={size} tone={tone} />
      {showWordmark && (
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
            }}
          >
            Visionary
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            Website
          </span>
        </span>
      )}
    </a>
  );
}
