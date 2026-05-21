export default function About() {
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
            Our Story
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
            Where Heritage Meets
            <br />
            Modern Elegance
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div style={{ height: "1px", width: "40px", background: "#C9A84C" }} />
            <div style={{ width: "5px", height: "5px", transform: "rotate(45deg)", background: "#C9A84C" }} />
            <div style={{ height: "1px", width: "40px", background: "#C9A84C" }} />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-6" style={{ padding: "100px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
          }}
        >
          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              Our
              <br />
              Philosophy
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                color: "rgba(13,11,9,0.7)",
              }}
            >
              At Nori's Stitches, we believe fashion is more than clothing — it's a
              statement of identity. Every piece we create is a bridge between the rich
              tapestry of Nigerian textile heritage and the clean lines of contemporary
              design.
            </p>
          </div>

          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              Our
              <br />
              Craft
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                color: "rgba(13,11,9,0.7)",
              }}
            >
              Each outfit is handcrafted to order by skilled artisans who have spent
              generations perfecting their trade. We source the finest fabrics — from
              luxurious Ankara to delicate lace — and tailor every garment to your
              exact measurements.
            </p>
          </div>

          <div>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "#0D0B09",
                fontStyle: "italic",
              }}
            >
              Our
              <br />
              Promise
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                color: "rgba(13,11,9,0.7)",
              }}
            >
              Every piece comes with a commitment to quality, fit, and timeless style.
              We offer free alterations within 14 days of delivery because your
              satisfaction is sewn into everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="max-w-5xl mx-auto"
        style={{ padding: "0 24px 100px" }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(13,11,9,0.1)",
            paddingTop: "60px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
            {[
              { number: "100%", label: "Handcrafted" },
              { number: "7-14", label: "Day Delivery" },
              { number: "14", label: "Day Alterations" },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    color: "#C9A84C",
                    fontStyle: "italic",
                  }}
                >
                  {number}
                </p>
                <p
                  className="text-xs tracking-[0.3em] uppercase mt-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(13,11,9,0.45)",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
