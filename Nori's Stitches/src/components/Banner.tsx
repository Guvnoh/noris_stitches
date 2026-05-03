// // import "./banner.css";
// export default function Banner() {
//   type Styling = {
//     elementName: string;
//     classList: string[];
//   };
//   const styles: Styling[] = [
//     {
//       elementName: "Banner",
//       classList: ["font-body", "@container"],
//     },
//   ];
//   const x = styles.find((x) => x.elementName == "Banner");
//   return (
//     <>
//       <section className={x?.classList.join(" ")}>
//         <div className="h-90 flex  flex-col justify-center items-center text-pink-800">
//           <h3 className="font-bold text-4xl ">
//             Stylish, profesional and beautiful Nigerian women's outfits.
//           </h3>
//           <p className=" font-bold text-2xl mt-5">Own your heritage!</p>
//         </div>
//       </section>
//     </>
//   );
// }

export default function Banner() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/sitting2.jpg"
          alt="African fashion"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h2 className="text-4xl md:text-6xl font-heading leading-tight">
          Elegance Woven Into Every Thread
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Modern Nigerian fashion, rooted in culture and crafted for confidence.
        </p>

        <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold tracking-wide hover:bg-yellow-300 transition rounded-sm">
          Explore Collection
        </button>
      </div>
    </section>
  );
}
