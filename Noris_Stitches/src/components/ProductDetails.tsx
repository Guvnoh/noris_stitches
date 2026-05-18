import { type Outfit, type Sizes } from "../assets/data";
import { formatNumber } from "../tools/formatters";

interface ProductDetailsProps {
  product: Outfit;
  onBack: () => void;
}

const SIZE_LABELS: Record<keyof Sizes, string> = {
  sm: "S",
  m: "M",
  l: "L",
  xl: "XL",
  xxl: "XXL",
};

export default function ProductDetails({
  product,
  onBack,
}: ProductDetailsProps) {
  const sizeEntries = Object.entries(product.sizes) as [keyof Sizes, string][];
  const hasAnyStock = sizeEntries.some(([, qty]) => parseInt(qty) > 0);

  return (
    <div style={{ background: "#F7F2EA", minHeight: "100vh" }}>
      {/* Back nav */}
      <div
        className="max-w-7xl mx-auto px-6 py-6"
        style={{ borderBottom: "1px solid rgba(13,11,9,0.08)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] transition-all duration-200"
          style={{
            fontFamily: "var(--font-body)",
            color: "#0D0B09",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#0D0B09";
          }}
        >
          <span style={{ fontSize: "1rem" }}>←</span>
          Back to Collection
        </button>
      </div>

      {/* Main content */}
      <div
        className="max-w-7xl mx-auto px-6 py-12 md:py-20"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* ── Image panel ── */}
        <div style={{ position: "relative" }}>
          {product.tag && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                zIndex: 10,
                background: "#C9A84C",
                color: "#0D0B09",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "4px 12px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
              }}
            >
              {product.tag}
            </div>
          )}

          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              display: "block",
              background: "#1A1410",
            }}
          />

          <div
            style={{
              height: "3px",
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
        </div>

        {/* ── Details panel ── */}
        <div style={{ paddingTop: "8px" }}>
          {/* Category breadcrumb */}
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "#B55934" }}
          >
            {product.category}
          </p>

          {/* Name */}
          <h1
            className="font-bold leading-none mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#0D0B09",
              fontStyle: "italic",
            }}
          >
            {product.name}
          </h1>

          {/* Ornamental divider */}
          <div className="flex items-center gap-4 mb-8">
            <div
              style={{ height: "1px", width: "40px", background: "#C9A84C" }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                transform: "rotate(45deg)",
                background: "#C9A84C",
              }}
            />
            <div
              style={{ height: "1px", width: "40px", background: "#C9A84C" }}
            />
          </div>

          {/* Price */}
          <p
            className="font-bold mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "2rem",
              color: "#C9A84C",
              letterSpacing: "0.05em",
            }}
          >
            ₦{formatNumber(product.price)}
          </p>

          {/* ── Size availability ── */}
          <div style={{ marginBottom: "36px" }}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(13,11,9,0.45)",
              }}
            >
              Size Availability
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {sizeEntries.map(([key, qty]) => {
                const stock = parseInt(qty);
                const inStock = stock > 0;
                const lowStock = stock > 0 && stock <= 2;

                return (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {/* Size box */}
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        border: inStock
                          ? "1.5px solid #0D0B09"
                          : "1.5px solid rgba(13,11,9,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: inStock ? "#0D0B09" : "rgba(13,11,9,0.25)",
                        background: inStock
                          ? "transparent"
                          : "rgba(13,11,9,0.03)",
                        position: "relative",
                        textDecoration: inStock ? "none" : "line-through",
                      }}
                    >
                      {SIZE_LABELS[key]}

                      {/* Low stock warning dot */}
                      {lowStock && (
                        <span
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "4px",
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "#B55934",
                          }}
                        />
                      )}
                    </div>

                    {/* Stock count label */}
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.6rem",
                        color: lowStock
                          ? "#B55934"
                          : inStock
                            ? "rgba(13,11,9,0.45)"
                            : "rgba(13,11,9,0.2)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {inStock ? `${qty} left` : "Sold out"}
                    </span>
                  </div>
                );
              })}
            </div>

            {!hasAnyStock && (
              <p
                style={{
                  marginTop: "12px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "#B55934",
                  letterSpacing: "0.05em",
                }}
              >
                This piece is currently sold out — enquire to be placed on the
                waitlist.
              </p>
            )}
          </div>

          {/* Details table */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid rgba(13,11,9,0.12)",
              marginBottom: "36px",
            }}
          >
            {[
              { label: "Category", value: product.category },
              { label: "Availability", value: product.tag },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  padding: "16px 20px",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(13,11,9,0.12)" : "none",
                  background:
                    i % 2 === 0 ? "rgba(201,168,76,0.04)" : "transparent",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(13,11,9,0.45)",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "#0D0B09",
                    fontWeight: 600,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: "40px" }}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(13,11,9,0.45)",
              }}
            >
              About this piece
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.85",
                color: "rgba(13,11,9,0.7)",
              }}
            >
              Every piece from Nori's Stitches is handcrafted to order using
              premium fabrics sourced locally and abroad. This{" "}
              {product.category.toLowerCase()} is tailored to your measurements
              for a perfect fit, blending contemporary silhouettes with the rich
              heritage of Nigerian textile tradition.
            </p>
          </div>

          {/* Delivery note */}
          <p
            className="text-xs mb-8"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(13,11,9,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            Made to order · 7–14 day delivery · Free alterations within 14 days
          </p>

          {/* CTAs */}
          <a
            href={`mailto:hello@norisstitches.com?subject=Order Enquiry – ${encodeURIComponent(product.name)}&body=Hi Nori, I'm interested in ordering the ${encodeURIComponent(product.name)}. Please let me know about next steps. Thank you!`}
            style={{
              fontFamily: "var(--font-body)",
              background: "#0D0B09",
              color: "#F2EAD9",
              textDecoration: "none",
              letterSpacing: "0.25em",
              display: "block",
              textAlign: "center",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              padding: "20px",
              marginBottom: "12px",
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
            Enquire to Order
          </a>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Hi Nori, I'd like to order the ${product.name}`)}`}
            style={{
              fontFamily: "var(--font-body)",
              background: "transparent",
              color: "#0D0B09",
              textDecoration: "none",
              letterSpacing: "0.25em",
              border: "1px solid #0D0B09",
              display: "block",
              textAlign: "center",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              padding: "16px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C";
              (e.currentTarget as HTMLElement).style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#0D0B09";
              (e.currentTarget as HTMLElement).style.color = "#0D0B09";
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
