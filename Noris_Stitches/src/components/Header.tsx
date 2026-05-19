// // import "./header.css";
// import "../index.css";
// export default function Header() {
//   return (
//     <header id="header">
//       <nav className="font-body shadow  m-b-5">
//         <ul className=" w-full h-50 mx-auto flex flex-row p-2  font-mono">
//           {/* hamburger menu icon */}
//           <button className="flex flex-col space-y-2 mt-2 mr-8 md:hidden">
//             <span className="block w-9 h-1  bg-white"></span>
//             <span className="block w-9 h-1 bg-white "></span>
//             <span className="block w-9 h-1 bg-white "></span>
//           </button>

//           {/* Logo */}
//           <h1 className="font-bold h-min font-heading text-yellow-100 text-4xl">
//             Nori's
//             <span className="ml-5  underline decoration-dashed decoration-4 text-4xl">
//               Stitches
//             </span>
//           </h1>

//           {/* Top menu items */}
//           <div className="justify-between ml-auto flex flex-row px-6 font-bold text-2xl underline">
//             <a href="#catalogue" className="mx-3">
//               Catalogue
//             </a>
//             <a href="#about" className="mx-3 ">
//               About
//             </a>
//           </div>
//         </ul>
//       </nav>
//     </header>
//   );
// }

import { useState } from "react";
import "../index.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 font-body">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-heading tracking-wide text-white">
          Nori's <span className="text-yellow-400">Stitches</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-wider text-gray-200">
          <a href="#catalogue" className="hover:text-yellow-400 transition">
            Catalogue
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={close}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md z-40 p-6 shadow-2xl">
            <div className="mt-24 flex flex-col space-y-8">
              <a
                href="#catalogue"
                onClick={close}
                className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm"
              >
                Catalogue
              </a>
              <a
                href="#about"
                onClick={close}
                className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={close}
                className="text-gray-200 hover:text-yellow-400 transition uppercase tracking-wider text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
