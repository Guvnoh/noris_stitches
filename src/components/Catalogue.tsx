import { useState, useEffect, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../tools/formatters";
import { SortSelect } from "./sortComponent";
import { getCategories } from "../tools/db_interface";
import { type Outfit } from "../assets/data";

interface CatalogueProps {
  products: Outfit[];
}

export default function Catalogue({ products }: CatalogueProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  const cats = ["All", ...categories];

  const filtered =
    selectedCategory === "All"
      ? [...products]
      : products.filter((o) => o.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <section
      id="catalogue"
      className="scroll-mt-24"
      style={{
        background: "#F7F2EA",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      {/* Section header */}
      <div className="text-center mb-16 px-6">
        <p
          className="text-xs tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)", color: "#B55934" }}
        >
          Handcrafted for You
        </p>
        <h2
          className="font-bold leading-none mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            color: "#0D0B09",
            fontWeight: 700,
          }}
        >
          OUR CATALOGUE
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4">
          <div
            style={{ height: "1px", width: "56px", background: "#C9A84C" }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              transform: "rotate(45deg)",
              background: "#C9A84C",
            }}
          />
          <div
            style={{ height: "1px", width: "56px", background: "#C9A84C" }}
          />
        </div>
      </div>

      {/* Category filters */}
      {cats.length > 1 && (
        <CategoryFilter
          cats={cats}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      )}

      <span>
        <SortSelect
          option={{
            value: sortOption,
            onChange: setSortOption,
          }}
        />
      </span>

      {/* Catalogue grid */}
      <div
        className="catalogue-grid mx-auto px-4 md:px-10"
        style={{
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {sorted.map((outfit, i) => (
          <OutfitCard outfit={outfit} key={i} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p
          className="text-sm mb-6"
          style={{ fontFamily: "var(--font-body)", color: "rgba(13,11,9,0.4)" }}
        >
          All pieces made to order · 7–14 day delivery
        </p>
        <a
          href={`https://wa.me/2347010009979?text=${encodeURIComponent(`Hi Nori, I'd like to enquire about `)}`}
          className="inline-block text-xs tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300"
          style={{
            fontFamily: "var(--font-body)",
            border: "1px solid #0D0B09",
            color: "#0D0B09",
            textDecoration: "none",
            letterSpacing: "0.25em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#0D0B09";
            (e.currentTarget as HTMLElement).style.color = "#F2EAD9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#0D0B09";
          }}
        >
          Enquire & Order
        </a>
      </div>
    </section>
  );
}

function CategoryFilter({
  cats,
  selected,
  onSelect,
}: {
  cats: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
  const [showMore, setShowMore] = useState(false);
  const maxVisible = typeof window !== "undefined" && window.innerWidth >= 768 ? 5 : 3;
  const visible = cats.slice(0, maxVisible);
  const extra = cats.slice(maxVisible);
  const hasMore = extra.length > 0;

  const btnStyle = (cat: string): CSSProperties => ({
    padding: "8px 20px",
    border: "1px solid",
    borderColor: selected === cat ? "#C9A84C" : "rgba(13,11,9,0.15)",
    background: selected === cat ? "#C9A84C" : "transparent",
    color: selected === cat ? "#0D0B09" : "rgba(13,11,9,0.6)",
    fontFamily: "var(--font-body)",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  return (
    <div
      className="flex justify-center gap-3 px-4 mb-8"
      style={{ maxWidth: "1400px", margin: "0 auto", flexWrap: "wrap" }}
    >
      {visible.map((cat) => (
        <button key={cat} style={btnStyle(cat)} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}

      {hasMore && (
        <div style={{ position: "relative" }}>
          <button
            style={btnStyle("More")}
            onClick={() => setShowMore(!showMore)}
          >
            More {showMore ? "▲" : "▼"}
          </button>

          {showMore && (
            <>
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 10,
                }}
                onClick={() => setShowMore(false)}
              />
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "4px",
                  zIndex: 20,
                  background: "#fff",
                  border: "1px solid rgba(13,11,9,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  minWidth: "160px",
                }}
              >
                {extra.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelect(cat);
                      setShowMore(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "10px 20px",
                      border: "none",
                      background: selected === cat ? "#C9A84C" : "transparent",
                      color: selected === cat ? "#0D0B09" : "rgba(13,11,9,0.7)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (selected !== cat)
                        (e.currentTarget as HTMLElement).style.background = "rgba(13,11,9,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      if (selected !== cat)
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function OutfitCard({ outfit, index }: { outfit: Outfit; index: number }) {
  const navigate = useNavigate();
  const isFeature = index === 3;

  return (
    <div
      className="outfit-card group relative overflow-hidden cursor-pointer"
      style={{
        aspectRatio: isFeature ? "4 / 6" : "4 / 5",
        background: "#1A1410",
        gridRow: isFeature ? "span 1" : undefined,
      }}
      onClick={() => navigate(`/product/${outfit._id}`)}
    >
      <img
        src={outfit.imageUrl}
        alt={outfit.name}
        className="card-img w-full h-full object-cover"
        style={{ display: "block" }}
      />

      <div
        className="card-shimmer absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      {outfit.tag && (
        <div
          className="absolute top-4 left-4"
          style={{
            background: "#C9A84C",
            color: "#0D0B09",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "4px 10px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
          }}
        >
          {outfit.tag}
        </div>
      )}

      <div
        className="card-overlay absolute inset-x-0 bottom-0 flex flex-col justify-end"
        style={{
          padding: "28px 20px 22px",
          background:
            "linear-gradient(to top, rgba(13,11,9,0.95) 0%, rgba(13,11,9,0.7) 60%, transparent 100%)",
          minHeight: "45%",
        }}
      >
        {/* <p
          className="font-bold leading-none mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.65rem",
            color: "#F2EAD9",
            fontStyle: "italic",
          }}
        >
          {outfit.name}
        </p> */}
        <div className="flex items-center justify-between">
          <p
            className="font-bold"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "#C9A84C",
              letterSpacing: "0.05em",
            }}
          >
            ₦{formatNumber(outfit.price)}
          </p>
          <div
            className="flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(242,234,217,0.55)",
              fontSize: "0.6rem",
            }}
          >
            View
            <span style={{ fontSize: "0.75rem" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
