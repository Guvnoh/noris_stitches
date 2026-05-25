export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0B09",
        color: "#F2EAD9",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <h2
              className="text-2xl font-heading tracking-wide mb-3"
              style={{ color: "#F2EAD9" }}
            >
              Nori's <span style={{ color: "#C9A84C" }}>Stitches</span>
            </h2>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: "1.8",
                color: "rgba(242,234,217,0.55)",
                maxWidth: "280px",
              }}
            >
              Modern Nigerian fashion, rooted in culture and crafted for confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "#C9A84C", letterSpacing: "0.3em" }}
            >
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Catalogue", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: "rgba(242,234,217,0.6)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(242,234,217,0.6)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "#C9A84C", letterSpacing: "0.3em" }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://wa.me/2347010009979"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(242,234,217,0.6)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(242,234,217,0.6)";
                }}
              >
                WhatsApp
              </a>
              <span
                style={{
                  color: "rgba(242,234,217,0.4)",
                  fontSize: "0.85rem",
                }}
              >
                +234 701 000 9979
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(242,234,217,0.08)",
          padding: "20px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(242,234,217,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          &copy; {new Date().getFullYear()} Nori's Stitches. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
