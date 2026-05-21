export default function Contact() {
  return (
    <div style={{ background: "#F7F2EA", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          padding: "120px 24px 80px",
          background: "#0D0B09",
        }}
      >
        <div className="max-w-3xl">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", color: "#C9A84C" }}
          >
            Get in Touch
          </p>
          <h1
            className="font-bold leading-none mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#F2EAD9",
              fontStyle: "italic",
            }}
          >
            Let's Create
            <br />
            Something Beautiful
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div style={{ height: "1px", width: "40px", background: "#C9A84C" }} />
            <div
              style={{
                width: "5px",
                height: "5px",
                transform: "rotate(45deg)",
                background: "#C9A84C",
              }}
            />
            <div style={{ height: "1px", width: "40px", background: "#C9A84C" }} />
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-4xl mx-auto px-6" style={{ padding: "100px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {/* WhatsApp */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(13,11,9,0.1)",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                margin: "0 auto 20px",
                background: "#0D0B09",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              WhatsApp
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(13,11,9,0.6)",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              The fastest way to reach us. Send us a message and we'll respond
              within 24 hours.
            </p>
            <a
              href="https://wa.me/2347010009979"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                display: "inline-block",
                background: "#0D0B09",
                color: "#F2EAD9",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "14px 32px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A84C";
                (e.currentTarget as HTMLElement).style.color = "#0D0B09";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0D0B09";
                (e.currentTarget as HTMLElement).style.color = "#F2EAD9";
              }}
            >
              Message Us
            </a>
          </div>

          {/* Phone */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(13,11,9,0.1)",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                margin: "0 auto 20px",
                background: "#0D0B09",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F2EAD9">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
            </div>
            <h3
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              Phone
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(13,11,9,0.6)",
                marginBottom: "8px",
                lineHeight: "1.7",
              }}
            >
              Call or text us directly.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                color: "#0D0B09",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              +234 701 000 9979
            </p>
          </div>

          {/* Location */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(13,11,9,0.1)",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                margin: "0 auto 20px",
                background: "#0D0B09",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F2EAD9">
                <path d="M12 2a8 8 0 00-8 8c0 5.4 7 11 8 11s8-5.6 8-11a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
            </div>
            <h3
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              Location
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "rgba(13,11,9,0.6)",
                lineHeight: "1.7",
              }}
            >
              Nigeria
              <br />
              Available nationwide for delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
