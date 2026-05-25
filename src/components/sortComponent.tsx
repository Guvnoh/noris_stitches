// export default function SortComponent({
//   option,
//   onOptionChange,
// }: {
//   option: string;
//   onOptionChange: (option: string) => void;
// }) {
//   return (
//     <>
//       <div
//         className="flex justify-end px-4 md:px-10 mb-6"
//         style={{ maxWidth: "1400px", margin: "0 auto" }}
//       >
//         <select
//           value={option}
//           onChange={(e) => onOptionChange(e.target.value)}
//           style={{
//             padding: "10px 14px",
//             border: "1px solid #C9A84C",
//             background: "#F7F2EA",
//             color: "#0D0B09",
//             fontFamily: "var(--font-body)",
//             fontSize: "0.9rem",
//             outline: "none",
//             cursor: "pointer",
//           }}
//         >
//           <option value="default">Sort By</option>
//           <option value="low-high">Price: Low to High</option>
//           <option value="high-low">Price: High to Low</option>
//           <option value="a-z">Name: A-Z</option>
//           <option value="z-a">Name: Z-A</option>
//         </select>
//       </div>
//     </>
//   );
// }
export type SortSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ option }: { option: SortSelectProps }) {
  return (
    <div
      className="flex justify-end px-4 md:px-10 mb-6"
      style={{ maxWidth: "1400px", margin: "0 auto" }}
    >
      <select
        value={option.value}
        onChange={(e) => {
          option.onChange(e.target.value);
        }}
        style={{
          padding: "10px 14px",
          border: "1px solid #C9A84C",
          background: "#F7F2EA",
          color: "#0D0B09",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <option value="default">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="a-z">Name: A-Z</option>
        <option value="z-a">Name: Z-A</option>
      </select>
    </div>
  );
}
export { SortSelect };
