import outfits, { type Outfit } from "../assets/data";
// import "./catalogue.css";
// export default function Catalogue() {
//   return (
//     <>
//       <section id="catalogue">
//         <div className="flex flex-col mt-18 ">
//           <p className="text-4xl font-bold ml-8 mb-8 border w-min p-5">
//             Catalogue...
//           </p>
//           <div className=" object-cover grid grid-cols-4 gap-5 p-1 mx-3">
//             {outfits.map((outfit) => (
//               <OutfitCard data={outfit} key={outfit.name} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// function OutfitCard({ data }: { data: Outfit }) {
//   return (
//     <>
//       <div className="aspect-[4/5] hover:border overflow-hidden flex-col min-w-0 max-w-full h-auto hover:rounded-lg transition-transform duration-600 ease-out hover:scale-102">
//         {data.name === "bose" ? (
//           <video
//             src={data.image}
//             controls
//             className="w-full h-full  object-cover"
//           ></video>
//         ) : (
//           <img
//             src={data.image}
//             alt={data.name}
//             className="w-full h-full object-cover hover:rounded-t-lg "
//           />
//         )}
//         <p className="font-bold text-lg flex-col w-full hover:border-5-pink-500">
//           <span className="block w-min mx-auto hover:border hover:rounded-lg">
//             {data.name}
//           </span>
//           <span className="block hover:border hover:rounded-b-lg text-center">
//             ₦{data.price}
//           </span>
//         </p>
//       </div>
//     </>
//   );
// }

export default function Catalogue() {
  return (
    <section
      id="catalogue"
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
          The Collection
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
        {outfits.map((outfit, i) => (
          <OutfitCard data={outfit} key={outfit.type} index={i} />
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
          href="mailto:hello@norisstitches.com"
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

function OutfitCard({ data, index }: { data: Outfit; index: number }) {
  const isFeature = index === 3; // 4th card gets a special treatment
  return (
    <div
      className="outfit-card group relative overflow-hidden cursor-pointer"
      style={{
        aspectRatio: isFeature ? "4 / 6" : "4 / 5",
        background: "#1A1410",
        gridRow: isFeature ? "span 1" : undefined,
      }}
    >
      {/* Product image */}
      <img
        src={data.image}
        alt={data.type}
        className="card-img w-full h-full object-cover"
        style={{ display: "block" }}
      />

      {/* Hover shimmer top edge */}
      <div
        className="card-shimmer absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Tag badge */}
      {data.tag && (
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
          {data.tag}
        </div>
      )}

      {/* Slide-up overlay */}
      <div
        className="card-overlay absolute inset-x-0 bottom-0 flex flex-col justify-end"
        style={{
          padding: "28px 20px 22px",
          background:
            "linear-gradient(to top, rgba(13,11,9,0.95) 0%, rgba(13,11,9,0.7) 60%, transparent 100%)",
          minHeight: "45%",
        }}
      >
        <p
          className="font-bold leading-none mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.65rem",
            color: "#F2EAD9",
            fontStyle: "italic",
          }}
        >
          {data.type}
        </p>
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
            ${data.price.toLocaleString()}${data.size}
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
